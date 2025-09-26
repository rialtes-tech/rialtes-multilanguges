"use client";
// pages/case-study-detail.js
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import useUrl from "@/app/components/useUrl";
import RelatedCaseStudies from '../../../components/RealtedCaseStudies';
const schemaData = {
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

export default function Page() {
  const currUrl = useUrl()
  const fullUrl = "https://www.rialtes.com/insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Salesforce Service Cloud Case Study: Omnichannel Case Management"
        description="Discover a Salesforce Service Cloud success story—next-gen case management transformed with automation, faster service, and elevated customer support."
        canonical="https://www.rialtes.com/insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud/"
      />

      <Script
        id="schema-omnichannel"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[350px] md:h-[500px]  4xl:h-[650px]  overflow-hidden">
        <div className="hidden md:block">
          <Image
            src="/images/case-studies/case-study-4.webp "
            alt="Omnichannel case management with Salesforce Service Cloud"
            fill
            style={{ objectFit: "cover", objectPosition: "40% 20%" }}
            priority
          />
        </div>
        <div className="block md:hidden">
          <Image
            src="/images/case-studies/case-study-4_thumb.webp "
            alt="Omnichannel case management with Salesforce Service Cloud"
            fill
            style={{ objectFit: "cover", objectPosition: "40% 20%" }}
            priority
          />
        </div>
      </section>

      <section
        className="custom-container"
      >

        <div className="py-10 bg-white  xl:max-w-[1084px] 4xl:w-[1084px] 2xl:w-[900px] xl:w-[800px]

">
          <div className="">
            <h1 className="text-[#000000] py-6 leading-tight text-[26px] 4xl:text-[60px]  2xl:text-[48px]   xl:text-[42px] md:text-[28px]">Transforming Omnichannel Case Management Using Salesforce Service Cloud</h1>
          </div>

          <div className="">
            <div className="flex flex-col md:flex-row justify-between gap-4 items-center text-black ">
              <div className=''>
                <span className='text-[#0092E0]'>Manufacturing </span> <span className='text-[#ACACAC]'> | </span>14 October 2024
              </div>
              <div className="flex flex-row gap-6 ml-[-8px] ">
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
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px]  2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Client Profile</h2>
              <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">A leading provider of high-performance analog semiconductors powering wireless and wired connectivity across industries. Their core offerings, amplifiers, filters, switches, and integrated modules, support efficient wireless transmission for smartphones, routers, medical devices, automobiles, and more. Renowned for innovation, they are a critical technology partner for both consumer and industrial applications globally.</p>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Problem or Challenge </h2>

              <p className="text-black pb-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">The client faced persistent challenges in delivering consistent, high-quality customer service across global regions due to a fragmented, legacy support system. Key issues included:</p>

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] text-black pl-2 font-medium ">
                  <li className="pb-4">Disjointed customer interaction data across platforms, making it hard to track service history.</li>
                  <li className="pb-4">Lack of visibility into historical case data and customer behavior.</li>
                  <li className="pb-4">Manual case management with no automation for routing or resolution.</li>
                  <li>Limited self-service options, forcing customers to rely on email and phone channels.</li>

                </ul>
              </div>
              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Solutions </h2>

              <p className="text-black pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Rialtes implemented Salesforce Service Cloud and Experience Cloud to centralize customer support and create a scalable, future-ready solution. Key elements of the implementation:</p>


              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0]  text-black pl-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Unified Support Platform </h3>: All customer interactions, across internal teams, distributors, and OEMs, are now managed on a single platform.</li>

                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Self-Service Portal </h3>: Distributors and OEMs can submit and track cases, and access a robust knowledge base 24/7.</li>
                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Real-Time Communication </h3>: Built-in chat and messaging facilitate direct conversations between support teams and customers.</li>

                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Knowledge Consolidation </h3>:  Legacy support content was migrated into a centralized, searchable repository.</li>


                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Einstein AI Assistance </h3>:  AI-driven recommendations help customers resolve issues faster and reduce case volume.</li>


                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Automated Case Assignment </h3>:  Routing logic based on geography and expertise ensures timely and accurate responses.</li>

                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Cross-Continent Collaboration </h3>:  Support teams can now share knowledge and updates effortlessly across time zones.</li>

                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Segmented Content Delivery </h3>: Targeted release of support updates and critical info to specific customer groups.</li>

                  <li ><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Data Migration & Insights </h3>:  Historical case data migration enables in-depth trend analysis and smarter decision-making.</li>
                </ul>
              </div>





            </div>
          </div>
          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Benefits</h2>


              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0]  text-black pl-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium ">
                  <li className="pb-4">60% reduction in average case resolution time, thanks to automation and AI assistance.</li>
                  <li className="pb-4">30% increase in customer self-service adoption, reducing support workload.</li>
                  <li className="pb-4">Enhanced visibility into the complete customer journey, enabling targeted upselling and proactive service.</li>
                  <li className="pb-4">360° customer view across service channels, devices, and global teams.</li>
                  <li className="pb-4">Improved global support consistency and seamless collaboration across continents.</li>
                  <li >Scalability for future integration with Salesforce CPQ and Marketing Cloud, enabling a unified customer lifecycle.</li>
                  <li>Knowledge article usage increased by 45%, improving first-contact resolution.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* case study carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <RelatedCaseStudies url={currUrl} currTopic="Manufacturing" />
      </section>

    </div>
  );
}