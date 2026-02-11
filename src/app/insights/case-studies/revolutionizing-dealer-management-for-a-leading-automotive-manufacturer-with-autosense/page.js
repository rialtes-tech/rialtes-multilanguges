"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import useUrl from "@/app/components/useUrl";
import RelatedCaseStudies from '../../../components/RealtedCaseStudies';
const schemaData =
{
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/case-studies/revolutionizing-dealer-management-for-a-leading-automotive-manufacturer-with-autosense/"
  },
  "headline": "Case Study: Revolutionizing Dealer Management for a Leading Automotive Manufacturer with AutoSense",
  "description": "Discover how Rialtes transformed automotive dealer management with AutoSense—modern UX, SAP & Salesforce integration, and real-time operations.",
  "image": "https://www.rialtes.com/images/case-studies/revolutionizing-dealer-management-for-a-eading-automotive-anufacturer-with-autosense-case-study-banner.webp",
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
  "datePublished": "2025-06-03"
}

export default function Page() {
  const currUrl = useUrl()
  const fullUrl = "https://www.rialtes.com/insights/case-studies/revolutionizing-dealer-management-for-a-leading-automotive-manufacturer-with-autosense";
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Revolutionizing Automotive Dealer Management with AutoSense | Rialtes"
        description="Discover how Rialtes transformed automotive dealer management with AutoSense—modern UX, SAP & Salesforce integration, and real-time operations."
        canonical="https://www.rialtes.com/insights/case-studies/revolutionizing-dealer-management-for-a-leading-automotive-manufacturer-with-autosense"
      />


      <Script
        id="schema-revolutionizing"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative h-[350px] md:h-[500px]  4xl:h-[650px]  overflow-hidden">
        <div className="hidden md:block">
          <Image
            src="/images/case-studies/revolutionizing-dealer-management-for-a-eading-automotive-anufacturer-with-autosense-case-study-banner.webp"
            alt="Smiling business woman wearing glasses and male colleague collaborating on laptop computer in contemporary office workspace environment"
            fill
            style={{ objectFit: "cover", objectPosition: "90% 20%" }}
            priority
          />
        </div>
        <div className="block md:hidden">
          <Image
            src="/images/case-studies/revolutionary-filter.webp"
            alt="Smiling business woman wearing glasses and male colleague collaborating on laptop computer in contemporary office workspace environment Mobile"
            fill
            style={{ objectFit: "cover", objectPosition: "90% 20%" }}
            priority
          />
        </div>
      </section>

      <section
        className="custom-container"
      >

        <div className="py-10 bg-white xl:max-w-[1084px] 4xl:w-[1084px] 2xl:w-[900px] xl:w-[800px]">
          <div>
            <h1 className="text-[#000000] py-6  leading-tight  text-[26px] 4xl:text-[60px]  2xl:text-[48px]   xl:text-[42px] md:text-[28px] ">Revving Up Dealer Management with AutoSense by Rialtes</h1>
          </div>
          <div className=""></div>
          <div>
            <div className="flex flex-col md:flex-row  gap-4 justify-between items-center text-black  ">
              <div className="">
                <span className='text-[#0092E0]'>Automotive</span> <span className='text-[#ACACAC]'> | </span>03 June 2025
              </div>
              <div className="flex flex-row gap-6  ml-[-8px]">
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
            <div className="pt-4"></div>




          </div>

          <div className="py-6"></div>
          <div>
            <div className="">
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Client Overview:</h2>
              <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">A renowned global automotive manufacturer, recognized for its cutting-edge vehicles, faced significant challenges with their outdated dealer portal. Built on a legacy .NET framework, the portal struggled to keep up with modern business needs, hindering dealer engagement, sales processes, and operational efficiency. The client sought a powerful, scalable solution to optimize dealer interactions, streamline workflows, and enhance overall performance across its vast network of global dealers.</p>
              <div className="py-6"></div>
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tightpb-4">Key Challenges: </h2>
              <p className="text-black pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">The client’s legacy dealer portal posed several critical obstacles that impacted their business growth:</p>
              <div className="pl-3">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium ">
                  <li className=" pb-4" ><h3 className="h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Obsolete Technology  </h3> : The .NET framework was outdated and unable to support evolving requirements, creating bottlenecks in developing and deploying new features.</li>
                  <li className="pb-4"><h3 className="h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Disconnected Systems  </h3> : The portal was not integrated with other key business systems, leading to fragmented data, inefficiencies, and siloed processes across departments.</li>

                  <li className="pb-4"><h3 className="h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Poor User Experience  </h3> : The legacy system featured an outdated, cumbersome interface that hindered dealer adoption and limited its usability.</li>
                  <li className="pb-4"><h3 className="h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Limited Functional Scope </h3> : The portal was incapable of managing complex processes such as lead nurturing, vehicle lifecycle tracking, and dynamic inventory management, leaving gaps in operational capabilities.</li>
                  <li className="" ><h3 className="h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Scalability Issues  </h3> : The legacy system was not equipped to scale with the manufacturer’s growing dealer network and expanding product portfolio.</li>

                </ul>
              </div>

            </div>
          </div>
          <div className="py-6"></div>
          <div>
            <div className="">
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">The AutoSense Solution by Rialtes</h2>
              <p className="text-black pb-3 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] ">To address these challenges, Rialtes, a global leader in AI-powered digital transformation, partnered with the automotive manufacturer to deliver AutoSense, a next-generation dealer management platform built on the robust Salesforce Experience Cloud. Rialtes took  a customer-centric approach, running design workshops, creating a detailed agile development plan, and delivering an innovative solution through sprint-based development.</p>
              <h3 className="h3-bold pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Strategic Approach:</h3>
              <div className="pl-2">
                <ul className="list-decimal marker:text-[#000] text-black pl-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                  <li className="pb-4"> <h4 className="inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Collaborative Design Workshops </h4> : Rialtes initiated the project with a series of design workshops , engaging key stakeholders across sales, IT, and dealer management teams. This ensured a deep understanding of pain points and business needs, aligning the solution with the manufacturer’s strategic goals.</li>
                  <li className="pb-4" ><h4 className="inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Agile Development </h4> : Rialtes employed an agile development methodology , delivering incremental value through well-defined sprints. Each sprint focused on key features, incorporating client feedback and allowing for rapid iterations to meet evolving requirements.</li>
                  <li className="pb-4" ><h4 className="inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Salesforce Automotive Cloud Integration </h4> : The portal was seamlessly integrated with Salesforce Automotive Cloud, offering an end-to-end view of dealer operations, real-time data insights, and powerful customer engagement tools.</li>
                  <li className="pb-6" ><h4 className="inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">SAP S/4 HANA Integration for Order & Financial Management </h4> : Rialtes ensured the solution was fully integrated with SAP S/4 HANA providing end-to-end visibility into the order and financial management process, streamlining workflows, and enabling efficient financial tracking.</li>

                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <h3 className="h3-bold pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">AutoSense Features: Transforming Dealer Operations</h3>
              <div className="pl-2">
                <ul className="list-decimal marker:text-[#000] text-black pl-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                  <li className="pb-4" ><h4 className="inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Lead Submission & Nurturing </h4> : AutoSense streamlined the lead management process, allowing dealers to capture, submit, and track leads seamlessly. Automated lead nurturing workflows improved follow-up, ensuring no opportunities were missed, and increasing conversion rates.  </li>
                  <li className="pb-4" ><h4 className="inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Opportunity Management   </h4> : Sales opportunities were tracked from initial inquiry to final sale, with features that allowed dealers to prioritize high-potential leads and efficiently manage their pipeline, boosting sales performance.</li>
                  <li className="pb-4" ><h4 className="inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Order Management  </h4> : The portal provided an integrated order management system, allowing dealers to place, manage, and track customer orders in real-time. The integration with SAP S/4 HANA enabled smooth order fulfillment, ensuring timely deliveries and accurate financial tracking.</li>
                  <li className="pb-4" ><h4 className="inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Inventory Search with Rich Imagery </h4> : Dealers could easily search and browse available inventory by vehicle type, features, and specifications, all while viewing high-quality images. This feature enhanced decision-making and improved dealer sales capabilities.</li>
                  <li className="" ><h4 className="inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Vehicle Lifecycle Management </h4> : AutoSense offered full visibility into the lifecycle of each vehicle, from production to delivery and post-sales service. This holistic view helped dealers manage vehicle stock more effectively and offer customers detailed information on their vehicles' status.</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <div>
            <div className="">
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Key Benefits for the Client:</h2>
              <div className="pl-3">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium ">
                  <li className="pb-4"><h3 className="h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Improved Dealer Engagement  </h3> : The modern, user-friendly interface of the Salesforce-powered portal enhanced dealer experience, driving higher adoption rates and improving dealer satisfaction.</li>
                  <li className="pb-4" ><h3 className="h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Optimized Operations  </h3> : The integrated solution streamlined internal processes, reducing manual efforts and improving efficiency, which led to faster order processing and enhanced communication between departments.</li>
                  <li className="pb-4"><h3 className="h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Data-Driven Insights  </h3> : Real-time access to data across the entire dealer network allowed the client to make more informed decisions, optimize inventory, and improve lead conversion rates.</li>
                  <li className="pb-4" ><h3 className="h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Scalability & Flexibility  </h3> : Built on Salesforce and integrated with SAP S/4 HANA, AutoSense offered a scalable platform that could easily expand with the client’s growing dealer network and evolving business needs.</li>
                  <li ><h3 className="h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Seamless Integration  </h3> : The tight integration with both Salesforce Automotive Cloud and SAP S/4 HANA ensured that dealer data, orders, and financial information were always synchronized, reducing errors and providing a comprehensive view of business operations.</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <div>
            <div className="">
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px]  xl:text-[21px] text-[23px] leading-tight pb-4">Key Deliverables from Rialtes Under AutoSense:</h2>

              <div className="pl-3">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium ">
                  <li className="pb-4"><h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] ">Comprehensive Design & Requirement Workshops </h3> :  Collaborative workshops with the client’s teams to gather business insights, define objectives, and establish functional requirements.</li>
                  <li className="pb-4" ><h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Agile Development & Sprint Planning </h3> :  An iterative, sprint-based development process, delivering quick wins while maintaining flexibility to adapt to changing business needs.</li>
                  <li className="pb-4" ><h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Custom Dealer Portal Development </h3> : A modern, intuitive dealer management portal built on Salesforce Experience Cloud, incorporating features such as lead management, order tracking, and inventory search.</li>
                  <li className="pb-4" ><h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Salesforce Automotive Cloud Integration </h3> :  Real-time integration with Salesforce Automotive Cloud, ensuring smooth dealer operations and enhanced customer engagement.</li>
                  <li className="pb-4">  <h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">SAP S/4 HANA Integration </h3> :  Seamless integration with SAP S/4 HANA for efficient order management, financial tracking, and reporting.</li>
                  <li  ><h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Training & Ongoing Support </h3> : Comprehensive training for dealer users and internal teams, coupled with ongoing support to ensure smooth adoption and future enhancements.</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <div>
            <div className="">
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Conclusion:</h2>
              <p className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">By leveraging AutoSense, Rialtes successfully transformed the automotive manufacturer’s outdated legacy dealer portal into a modern, scalable, and efficient solution that empowered their dealers and streamlined internal operations. With Salesforce Experience Cloud and SAP S/4 HANA integrations, AutoSense delivered a superior dealer management experience, providing real-time data, operational efficiencies, and a seamless user interface. This transformation not only enhanced the client’s dealer engagement but also positioned them for continued growth in an increasingly competitive automotive market.</p>

            </div>
          </div>
        </div>
      </section>

      {/* case study carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <RelatedCaseStudies url={currUrl} currTopic="Automotive" />
      </section>
    </div>
  );
}
