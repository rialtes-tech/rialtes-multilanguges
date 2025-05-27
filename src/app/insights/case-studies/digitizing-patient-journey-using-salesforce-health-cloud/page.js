"use client";
// pages/case-study-detail.js
import Head from "next/head";
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
  const fullUrl2 = "https://www.rialtes.com/insights/case-studies/src/app/insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud";
  const title = "Digitizing Patient Journey Using Salesforce Health Cloud";
  return (
    <div className="min-h-screen bg-white">

      <Seo
        title="Digitizing patient journey using Salesforce health cloud"
        canonical="https://www.rialtes.com/insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud/"
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
            <h1 className="text-[#000000] py-6 max-w-4xl leading-tight">Digitizing the Patient Journey Using Salesforce Health Cloud</h1>
          </div>
          <div className="py-4"></div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black  max-w-4xl xl:w-1/2">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Healthcare and Life Sciences</span> <span className='text-[#ACACAC]'> | </span>27 May 2025
              </div>
              <div className="flex flex-col">
                <span>8 min read</span>
              </div>
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-row gap-6 ">
              <div className="max-w-[40px]">
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=/case-study-4&title=Digitizing patient journey using Salesforce health cloud&summary=Summary%20of%20the%20case%20study&source=LinkedIn">
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
                <a href="https://www.facebook.com/sharer/sharer.php?u=/case-study-4">
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
                <a href="https://twitter.com/intent/tweet?url=/case-study-4&text=Digitizing patient journey using Salesforce health cloud">
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
              <p className="text-black">A global medical technology company dedicated to improving lives through innovative cardiovascular and endovascular care. The company designs and manufactures pacemakers, defibrillators, and remote monitoring systems used by healthcare professionals worldwide. Their mission is to support better patient outcomes by combining advanced medical technology with seamless digital experiences. </p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Problem or Challenge </h3>
              <p className="text-black pb-6">The company had recently introduced a new patient journey system, but it lacked the critical functionality needed to deliver a truly connected and engaging healthcare experience.</p>

              <p className="text-black pb-6"><strong>Limited digital engagement: </strong> Patients relied on phone calls, physical visits, and in- person educational sessions for all interactions.</p>
              <p className="text-black pb-6"><strong>No real-time communication:  </strong> The system lacked virtual touchpoints, making it difficult for patients to contact healthcare providers outside of clinic visits.</p>
              <p className="text-black pb-6"><strong>No self-service data input: </strong> Patients couldn’t submit important health data—like sleep patterns, activity levels, or medication usage, digitally.</p>
              <p className="text-black pb-6"><strong>Lack of real-time monitoring: </strong> Providers had no visibility into whether patients were adhering to their therapy plans between visits.</p>



              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Solutions </h3>

              <p className="text-black pb-6">The client partnered with Rialtes to modernize the patient experience by building a fully integrated, digital-first solution.</p>
              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px]">
                <li className="pb-4"><strong>Mobile Application: </strong> Developed for Android and iOS, the app connected seamlessly with Salesforce Health Cloud  to serve as a central hub for patient engagement.</li>
                <li className="pb-4"><strong>Self-Guided Onboarding:  </strong> Patients could easily register and access a personalized dashboard to view therapy progress, action items, and relevant data.</li>
                <li className="pb-4"><strong>Data Submission & Tracking:  </strong> Patients could log vital information—such as sleep, discomfort levels, and medication adherence, directly in the app. Integration with wearable devices (e.g., Apple Watch) enabled automatic collection of metrics like heart rate and step count.</li>
                <li className="pb-4"><strong>Telehealth & Messaging: </strong> Enabled secure, real-time communication between patients and providers for queries, updates, and appointment scheduling.</li>
                <li className="pb-4"><strong>Gamification & Engagement: </strong> Patients were encouraged to submit data and complete health-related tasks through gamified elements, improving long-term adherence.</li>
                <li className="pb-4"><strong>Smart Notifications: </strong> Automated reminders prompted patients to share health data consistently, ensuring ongoing visibility for care teams.</li>
                <li className="pb-4"><strong>In-App Education: </strong> Patients could access videos and articles to understand their conditions and therapies. Providers could monitor content engagement and deliver personalized follow-up materials.</li>

              </ul>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Benefits</h3>

              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] mt-5 font-medium">
                <li className="pb-4">30% increase in therapy adherence through gamified engagement and automated reminders.
                </li>
                <li className="pb-4">40% improvement in data submission rates, enabling more proactive care.</li>
                <li className="pb-4">Real-time visibility for providers, improving coordination and faster intervention for at-risk patients.
                </li>
                <li className="pb-4">50% reduction in phone-based support as self-service and digital communication became primary channels.
                </li>
                <li className="pb-4">Enhanced patient satisfaction with personalized, on-the-go access to therapy information and education.
                </li>
                <li>Scalable architecture, ready for future enhancements like AI-driven insights and broader wearable device integration.</li>
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