"use client";
// pages/case-study-detail.js
import Head from "next/head";
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';
import Seo from "@/app/components/Seo";
const schemaData = {

  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud/"
  },
  "headline": "Case Study: Digitizing Patient Journey Using Salesforce Health Cloud",
  "description": "Discover how Rialtes transformed patient engagement by digitizing the entire care journey using Salesforce Health Cloud—enhancing experience, coordination, and outcomes.",
  "image": "https://www.rialtes.com/images/case-studies/case-study-7.webp",
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
  "datePublished": "2024-08-16"

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
  const fullUrl = "https://www.rialtes.com/insights/blogs/digitizing-patient-journey-using-salesforce-health-cloud";

  return (
    <div className="min-h-screen bg-white">

      <Seo
        title="Salesforce Health Cloud Case Study: Patient Journey Digitized"
        description="Discover how healthcare is transforming with a digital-first patient journey powered by Salesforce, enhancing care, access, and patient engagement.
"
        canonical="https://www.rialtes.com/insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud/"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/case-study-7.webp"
          alt="Digitizing patient journey using Salesforce health cloud"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
          priority
        />
      </section>

      <section
        className="custom-container"
      >

        <div className="py-10 bg-white xl:max-w-[1084px] xl:w-[1084px]">
          <div className="">
            <h1 className="text-[#000000] py-6  leading-tight text-[26px] md:text-[48px] xl:text-[60px]">Digitizing the Patient Journey Using Salesforce Health Cloud</h1>
          </div>
          <div className="py-4"></div>
          <div className="">
            <div className="flex flex-col md:flex-row justify-between text-black">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Healthcare and Life Sciences</span> <span className='text-[#ACACAC]'> | </span>16 August 2024
              </div>
              <div className="flex flex-col">
                <span>8 min read</span>
              </div>
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-col ml-[-8px]">
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
          </div>

          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Client Profile</h2>
              <p className="text-black">A global medical technology company dedicated to improving lives through innovative cardiovascular and endovascular care. The company designs and manufactures pacemakers, defibrillators, and remote monitoring systems used by healthcare professionals worldwide. Their mission is to support better patient outcomes by combining advanced medical technology with seamless digital experiences. </p>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Problem or Challenge </h2>
              <p className="text-black pb-6">The company had recently introduced a new patient journey system, but it lacked the critical functionality needed to deliver a truly connected and engaging healthcare experience.</p>

              <div className="pb-4 text-black font-medium xl:text-[20px] text-[16px] md:text-[19px] ">
                <h3 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">Limited digital engagement </h3> <span className=""> : Patients relied on phone calls, physical visits, and in- person educational sessions for all interactions.</span>
              </div>

              <div className="pb-4 text-black font-medium xl:text-[20px] text-[16px] md:text-[19px] ">
                <h3 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">No real-time communication  </h3> <span> : The system lacked virtual touchpoints, making it difficult for patients to contact healthcare providers outside of clinic visits.</span></div>

              <div className="pb-4 text-black font-medium xl:text-[20px] text-[16px] md:text-[19px] ">
                <h3 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">No self-service data input </h3><span> : Patients couldn’t submit important health data—like sleep patterns, activity levels, or medication usage, digitally.</span></div>

              <div className=" text-black font-medium xl:text-[20px] text-[16px] md:text-[19px] ">
                <h3 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">Lack of real-time monitoring </h3><span> : Providers had no visibility into whether patients were adhering to their therapy plans between visits.</span></div>



              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Solutions </h2>

              <p className="text-black pb-6">The client partnered with Rialtes to modernize the patient experience by building a fully integrated, digital-first solution.</p>
              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium">
                  <li className="pb-4" ><h3 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">Mobile Application </h3> : Developed for Android and iOS, the app connected seamlessly with Salesforce Health Cloud  to serve as a central hub for patient engagement.</li>
                   <li className="pb-4"  ><h3 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">Self-Guided Onboarding </h3> : Patients could easily register and access a personalized dashboard to view therapy progress, action items, and relevant data.</li>

                  <li className="pb-4" ><h3 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">Data Submission & Tracking </h3> : Patients could log vital information—such as sleep, discomfort levels, and medication adherence, directly in the app. Integration with wearable devices (e.g., Apple Watch) enabled automatic collection of metrics like heart rate and step count.</li>

                  <li className="pb-4"  ><h3 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">Telehealth & Messaging </h3> : Enabled secure, real-time communication between patients and providers for queries, updates, and appointment scheduling.</li>

                  <li className="pb-4" ><h3 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">Gamification & Engagement </h3> : Patients were encouraged to submit data and complete health-related tasks through gamified elements, improving long-term adherence.</li>
                <li className="pb-4" ><h3 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">Smart Notifications </h3> : Automated reminders prompted patients to share health data consistently, ensuring ongoing visibility for care teams.</li>

                 <li ><h3 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">In-App Education </h3> : Patients could access videos and articles to understand their conditions and therapies. Providers could monitor content engagement and deliver personalized follow-up materials.</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Benefits</h2>

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium ">
                  <p className="text-black pb-4"><li >30% increase in therapy adherence through gamified engagement and automated reminders.
                  </li></p>
                  <p className="text-black pb-4"><li >40% improvement in data submission rates, enabling more proactive care.</li></p>
                  <p className="text-black pb-4"> <li >Real-time visibility for providers, improving coordination and faster intervention for at-risk patients.
                  </li></p>
                  <p className="text-black pb-4"> <li >50% reduction in phone-based support as self-service and digital communication became primary channels.
                  </li></p>
                  <p className="text-black pb-4"> <li >Enhanced patient satisfaction with personalized, on-the-go access to therapy information and education.
                  </li></p>
                  <p className="text-black pb-4"> <li>Scalable architecture, ready for future enhancements like AI-driven insights and broader wearable device integration.</li></p>
                </ul>
              </div>
            </div>
          </div>

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