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
  const fullUrl2 = "https://www.rialtes.com/insights/case-studies/revolutionizing-dealer-management-for-a-leading-automotive-manufacturer-with-autoSense";
  const title = "Revolutionizing Dealer Management for a Leading Automotive Manufacturer with AutoSense";
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP"
        canonical="https://www.rialtes.com/insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap/"
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/revolutionizing-dealer-management-for-a-eading-automotive-anufacturer-with-autosense-case-study-banner.webp"
          alt="Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP"
          fill
          style={{ objectFit: "cover", objectPosition: "90% 20%" }}
          priority
        />
      </section>

      <section
        className="custom-container"
      >

        <div className="py-10 bg-white">
          <div>
            <h1 className="text-[#000000] py-6 max-w-4xl leading-tight">Revolutionizing Dealer Management for a Leading Automotive Manufacturer with AutoSense</h1>
          </div>
          <div className="py-6"></div>
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black  max-w-4xl xl:w-1/2 items-center">
              <div>
                <span className='text-[#0092E0]'>Manufacture</span> <span className='text-[#ACACAC]'> | </span>03 June 2025
              </div>
              <div className="flex flex-col items-center">
                <span>8 min read</span>
              </div>
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
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-row gap-6">
             
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
          <div>
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Client Overview:</h3>
              <p className="text-black">A renowned global automotive manufacturer, recognized for its cutting-edge vehicles, faced significant challenges with their outdated dealer portal. Built on a legacy .NET framework, the portal struggled to keep up with modern business needs, hindering dealer engagement, sales processes, and operational efficiency. The client sought a powerful, scalable solution to optimize dealer interactions, streamline workflows, and enhance overall performance across its vast network of global dealers.</p>
              <div className="py-6"></div>
              <h3 className="h3-bold text-[#0092E0] pb-6">Key Challenges: </h3>
              <p className="text-black">The client’s legacy dealer portal posed several critical obstacles that impacted their business growth:</p>
              <ul className="list-disc marker:text-[#000] text-black pl-4 xl:text-[20px] text-[16px] mt-5">
                <li className="pb-4"><strong>Obsolete Technology : </strong> The .NET framework was outdated and unable to support evolving requirements, creating bottlenecks in developing and deploying new features.</li>
                <li className="pb-4"><strong>Disconnected Systems : </strong> The portal was not integrated with other key business systems, leading to fragmented data, inefficiencies, and siloed processes across departments.</li>
                <li className="pb-4"><strong>Poor User Experience : </strong> The legacy system featured an outdated, cumbersome interface that hindered dealer adoption and limited its usability.</li>
                <li className="pb-4"><strong>Limited Functional Scope: </strong> The portal was incapable of managing complex processes such as lead nurturing, vehicle lifecycle tracking, and dynamic inventory management, leaving gaps in operational capabilities.</li>
                <li className="pb-4"><strong>Scalability Issues:  </strong> The legacy system was not equipped to scale with the manufacturer’s growing dealer network and expanding product portfolio.</li>

              </ul>

            </div>
          </div>
          <div className="py-6"></div>
          <div>
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">The AutoSense Solution by Rialtes</h3>
              <p className="pb-10">To address these challenges, Rialtes, a global leader in AI-powered digital transformation, partnered with the automotive manufacturer to deliver AutoSense, a next-generation dealer management platform built on the robust Salesforce Experience Cloud. Rialtes took  a customer-centric approach, running design workshops, creating a detailed agile development plan, and delivering an innovative solution through sprint-based development.</p>
             <h3 className="h3-bold">Strategic Approach:</h3>
              <ul className="list-decimal marker:text-[#000] text-black pl-4 mt-5 xl:text-[20px] text-[16px]">
                <li className="pb-4"><strong>Collaborative Design Workshops: </strong> Rialtes initiated the project with a series of <strong>design workshops</strong> , engaging key stakeholders across sales, IT, and dealer management teams. This ensured a deep understanding of pain points and business needs, aligning the solution with the manufacturer’s strategic goals.</li>
                <li className="pb-4"><strong>Agile Development:  </strong> Rialtes employed an <strong>agile development methodology</strong> , delivering incremental value through well-defined sprints. Each sprint focused on key features, incorporating client feedback and allowing for rapid iterations to meet evolving requirements.</li>
                <li className="pb-4"><strong>Salesforce Automotive Cloud Integration:  </strong> The portal was seamlessly integrated with <strong>Salesforce Automotive Cloud</strong> , offering an end-to-end view of dealer operations, real-time data insights, and powerful customer engagement tools.</li>
                <li className="pb-4"><strong>SAP S/4 HANA Integration for Order & Financial Management: </strong> Rialtes ensured the solution was fully integrated with <strong>SAP S/4 HANA</strong> providing end-to-end visibility into the order and financial management process, streamlining workflows, and enabling efficient financial tracking.</li>

              </ul>
            </div>
          </div>
           <div>
            <div className="max-w-4xl mt-10">
              <h3 className="h3-bold  ">AutoSense Features: Transforming Dealer Operations</h3>
              <ul className="list-decimal marker:text-[#000] text-black pl-4 mt-5 xl:text-[20px] text-[16px]">
                <li className="pb-4"><strong>Lead Submission & Nurturing: </strong> AutoSense streamlined the lead management process, allowing dealers to capture, submit, and track leads seamlessly. Automated lead nurturing workflows improved follow-up, ensuring no opportunities were missed, and increasing conversion rates.  </li>
                <li className="pb-4"><strong>Opportunity Management :  </strong> : Sales opportunities were tracked from initial inquiry to final sale, with features that allowed dealers to prioritize high-potential leads and efficiently manage their pipeline, boosting sales performance.</li>
                <li className="pb-4"><strong>Order Management:  </strong> The portal provided an integrated order management system, allowing dealers to place, manage, and track customer orders in real-time. The integration with SAP S/4 HANA enabled smooth order fulfillment, ensuring timely deliveries and accurate financial tracking.</li>
                <li className="pb-4"><strong>Inventory Search with Rich Imagery: </strong> Dealers could easily search and browse available inventory by vehicle type, features, and specifications, all while viewing high-quality images. This feature enhanced decision-making and improved dealer sales capabilities.</li>
                <li className="pb-4"><strong>Vehicle Lifecycle Management: </strong> : AutoSense offered full visibility into the lifecycle of each vehicle, from production to delivery and post-sales service. This holistic view helped dealers manage vehicle stock more effectively and offer customers detailed information on their vehicles' status.</li>

              </ul>
            </div>
          </div>
          <div className="py-6"></div>
          <div>
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Key Benefits for the Client:</h3>
              <ul className="list-disc marker:text-[#000] text-black pl-4 xl:text-[20px] text-[16px] font-medium">
                <li className="pb-4"><strong>Improved Dealer Engagement : </strong> The modern, user-friendly interface of the Salesforce-powered portal enhanced dealer experience, driving higher adoption rates and improving dealer satisfaction.</li>
                <li className="pb-4"><strong>Optimized Operations : </strong> The integrated solution streamlined internal processes, reducing manual efforts and improving efficiency, which led to faster order processing and enhanced communication between departments.</li>
                <li className="pb-4"><strong>Data-Driven Insights : </strong> Real-time access to data across the entire dealer network allowed the client to make more informed decisions, optimize inventory, and improve lead conversion rates.</li>
                <li className="pb-4"><strong>Scalability & Flexibility : </strong> Built on Salesforce and integrated with SAP S/4 HANA, AutoSense offered a scalable platform that could easily expand with the client’s growing dealer network and evolving business needs.</li>
                <li className="pb-4"><strong>Seamless Integration : </strong> The tight integration with both Salesforce Automotive Cloud and SAP S/4 HANA ensured that dealer data, orders, and financial information were always synchronized, reducing errors and providing a comprehensive view of business operations.</li>

              </ul>
            </div>
          </div>
          <div className="py-6"></div>
            <div>
            <div className="max-w-4xl">
              <h3 className="h3-bold  pb-6 text-[#0092E0]">Key Deliverables from Rialtes Under AutoSense:</h3>
              <ul className="list-decimal marker:text-[#000] text-black pl-4 xl:text-[20px] text-[16px] font-medium">
                <li className="pb-4"><strong>Comprehensive Design & Requirement Workshops : </strong> Collaborative workshops with the client’s teams to gather business insights, define objectives, and establish functional requirements.</li>
                <li className="pb-4"><strong>Agile Development & Sprint Planning : </strong> An iterative, sprint-based development process, delivering quick wins while maintaining flexibility to adapt to changing business needs.</li>
                <li className="pb-4"><strong>Custom Dealer Portal Development : </strong> A modern, intuitive dealer management portal built on Salesforce Experience Cloud, incorporating features such as lead management, order tracking, and inventory search.</li>
                <li className="pb-4"><strong>Salesforce Automotive Cloud Integration : </strong> Real-time integration with Salesforce Automotive Cloud, ensuring smooth dealer operations and enhanced customer engagement.</li>
                <li className="pb-4"><strong>SAP S/4 HANA Integration : </strong> Seamless integration with SAP S/4 HANA for efficient order management, financial tracking, and reporting.</li>
                <li className="pb-4"><strong>Training & Ongoing Support : </strong> Comprehensive training for dealer users and internal teams, coupled with ongoing support to ensure smooth adoption and future enhancements.</li>

              </ul>
            </div>
          </div>
          <div className="py-6"></div>
            <div>
            <div className="max-w-4xl">
              <h3 className="h3-bold  pb-6 text-[#0092E0]">Conclusion:</h3>
              <p>By leveraging <strong>AutoSense</strong>, Rialtes successfully transformed the automotive manufacturer’s outdated legacy dealer portal into a modern, scalable, and efficient solution that empowered their dealers and streamlined internal operations. With Salesforce Experience Cloud and SAP S/4 HANA integrations, AutoSense delivered a superior dealer management experience, providing real-time data, operational efficiencies, and a seamless user interface. This transformation not only enhanced the client’s dealer engagement but also positioned them for continued growth in an increasingly competitive automotive market.</p>
            <p className="mt-5"> <strong>AutoSense</strong> by Rialtes is not just a solution—it's a <strong>game-changer</strong>  for the automotive industry, unlocking new opportunities for growth and success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div
        className="py-10 custom-container xl:!pr-0"
      >
        <RelatedTopicsCarousel slides={slides} />

      </div>
    </div>
  );
}