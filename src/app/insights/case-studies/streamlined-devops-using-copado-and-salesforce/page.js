"use client";
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

export default function Page() {
  const currUrl = useUrl()
  const fullUrl = "https://www.rialtes.com/insights/case-studies/streamlined-devops-using-copado-and-salesforce";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Salesforce DevOps Case Study: How to Front Load Delivery"
        description="Discover how front loading DevOps with Copado and Salesforce improved release speed and reduced manual errors for a tech-forward enterprise."
        canonical="https://www.rialtes.com/insights/case-studies/streamlined-devops-using-copado-and-salesforce"
      />

      <Script
        id="schema-stremline"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[350px] md:h-[500px]  4xl:h-[650px]  overflow-hidden">
        <div className="hidden md:block">
          <Image
            src="/images/case-studies/case study 3_n 1.webp "
            alt="Diverse construction team wearing safety helmets and high visibility vests reviewing project data on laptop in warehouse"
            fill
            style={{ objectFit: "cover", objectPosition: "80% 20%" }}
            priority
          />
        </div>
        <div className="block md:hidden">
          <Image
            src="/images/case-studies/case study 3_thumb_n.webp"
            alt="Diverse construction team wearing safety helmets and high visibility vests reviewing project data on laptop in warehouse Mobile"
            fill
            style={{ objectFit: "cover", objectPosition: "90% 20%" }}
            priority
          />
        </div>
      </section>

      <section
        className="custom-container "
      >

        <div className="py-10 bg-white xl:max-w-[1084px] 4xl:w-[1084px] 2xl:w-[900px] xl:w-[800px]">
          <div className="">
            <h1 className="text-[#000000]  leading-tight text-[26px] 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] ">DevOps Transformation using Copado and Salesforce</h1>
          </div>
          <div className="py-4"></div>
          <div className="">
            <div className="flex flex-col md:flex-row justify-between gap-4 items-center  text-black">
              <div className=''>
                <span className='text-[#0092E0]'>Manufacturing</span> <span className='text-[#ACACAC]'> | </span>08 January 2025
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


              <h2 className="font-medium text-[#0092E0]  4xl:text-[30px]   2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Client Profile</h2>
              <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">A prominent manufacturer specializing in innovative building materials for both residential and commercial construction. Their product portfolio includes roofing shingles, decking, railing, and waterproofing solutions. The company is committed to supporting contractors, builders, and homeowners in enhancing building durability, performance, and visual appeal.</p>
              <div className="py-6"></div>
              <h2 className="font-medium text-[#0092E0]  4xl:text-[30px]   2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Problem or Challenge </h2>
              <p className="text-black pb-6 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">The client was struggling with a fragmented and inefficient deployment process due to a complex, multi-layered environment, which included:</p>

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0]  text-black pl-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                  <li className="pb-4" >Multiple sandboxes across development, QA, pre-production, and production stages.
                  </li>
                  <li className="pb-4">Monthly release cycles supplemented with ad-hoc deployments, leading to delays in delivering new features and fixes.</li>
                  <li className="pb-4" >Manual deployment processes that involved cross-functional handoffs, increasing the risk of human error and inconsistencies.
                  </li>
                  <li>Limited version control and a lack of centralized access management make it difficult to maintain a stable, bug-free production environment.
                  </li>

                </ul>
              </div>


              <div className="py-6"></div>
              <h2 className="font-medium text-[#0092E0]  4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Solutions </h2>
              <p className="text-black pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]" >Rialtes introduced a robust DevOps strategy leveraging Copado, a native Salesforce DevOps platform, to streamline and automate the client's deployment lifecycle.</p>
              <h3 className="h3-bold pb-4 x4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Approach</h3>
              <div className="pl-2">
                <ul className="list-decimal marker:text-[#000] text-black pl-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                  <li className="pb-4" ><h4 className=" inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Process Assessment: </h4> Conducted a thorough analysis of the client's existing deployment workflows.</li>
                  <li className="pb-4"><h4 className=" inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Fit-Gap Analysis:  </h4> Identified gaps between current practices and the capabilities offered by Copado.</li>
                  <li className="pb-4"><h4 className="inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Education & Enablement:  </h4> Trained internal teams on DevOps best practices and Copado functionalities.</li>
                  <li ><h4 className=" inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Deployment Landscape Redesign: </h4> Defined a streamlined deployment architecture tailored to the client’s environment.</li>
                </ul></div>
            </div>
          </div>
          <div className="py-4"></div>
          <div className="">
            <h3 className="h3-bold pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Technology Implementation</h3>
            <div className="pl-2">
              <ul className="list-decimal marker:text-[#000] text-black pl-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                <li className="pb-4"><h4 className="inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">CI/CD Pipeline Setup: </h4> Built a simplified and automated DevOps pipeline using Copado.</li>
                <li className="pb-4"><h4 className="inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Tool Integration:  </h4> GitHub for centralized version control.<br />
                  Azure DevOps for agile project and release management.
                </li>
                <li className=""><h4 className="inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Centralized Control:  </h4> Enabled consistent oversight of versioning, access, data, and environment provisioning.</li>
              </ul>
            </div>
          </div>


          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0]  4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Benefits</h2>
              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] font-medium  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] text-black pl-2">
                  <li className="pb-4">Automated CI/CD pipelines and streamlined workflows cut deployment time by more than half, enabling quicker time-to-market for new features and bug fixes.</li>
                  <li className="pb-4">Transitioning from manual to automated deployments drastically reduced human errors, ensuring more stable and reliable releases.</li>
                  <li className="pb-4">The ability to run minor, major, and bug-fix releases simultaneously improved release frequency and responsiveness to business needs. Resulting in 50% faster release cycles.</li>
                  <li className="pb-4"> GitHub integration provided full traceability and transparency across environments, reducing code conflicts and improving audit readiness.</li>
                  <li className="pb-4">With centralized tools and automated workflows, development and QA teams spent less time on repetitive tasks, increasing DevOps Team Productivity by 40%</li>
                  <li>Fewer deployment errors led to higher environment uptime and fewer rollbacks, ensuring a more stable production environment.</li>
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