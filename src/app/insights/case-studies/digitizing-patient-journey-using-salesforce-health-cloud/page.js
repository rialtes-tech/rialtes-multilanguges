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
   image: "/images/case-studies/case-study-2_thumb_n.webp",
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
        <title>Digitizing patient journey using Salesforce health cloud | Company Name</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/case-study-7.webp"
          alt="Digitizing patient journey using Salesforce health cloud"
          fill
          style={{objectFit: "cover",objectPosition: "40% 20%"}}
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
            <h1 className="text-[#000000] py-6 max-w-4xl">Digitizing patient journey using Salesforce health cloud</h1>
          </div>
          <div className="py-4"></div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black  max-w-4xl xl:w-1/2">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Healthcare and Life Sciences</span> <span className='text-[#ACACAC]'> | </span>25 Oct 2024
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
              <div className="max-w-[40px]">
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
              </div>
            </div>
          </div>

          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Client Profile</h3>
              <p className="text-black">A global medical technology company that develops and manufactures innovative products used by doctors to diagnose, treat, and monitor people with cardiovascular and endovascular conditions. This includes pacemakers, defibrillators for regulating heart rhythm and remote monitoring systems for patients with implanted devices. Their main goal is to improve the lives of people diagnosed with heart and blood vessel diseases. </p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Problem or Challenge </h3>
              <p className="text-black pb-6">The MedTech company had recently implemented a new patient journey system. However, the system lacked functionalities to effectively guide patients through their healthcare experience. Patients had difficulties with the following aspects:</p>

              <p className="text-black pb-6">Previously, all interactions, such as data submissions, appointment scheduling, education, happened through phone calls or physical visits. Educational materials were provided, either through YouTube links, in-person visits at the clinic, or through representatives visiting patients’ homes.</p>

              <p className="text-black pb-6">The system offered no clear touchpoints for patients to interact with healthcare providers outside of physical visits. Due to the limited patient-provider interaction, there was no convenient and fast way to seek help or ask questions.</p>

              <p className="text-black">The system offered no user-friendly way for patients to submit their own health data, such as sleep patterns, medication use and activity levels like steps or running distance. There was no real-time data for healthcare providers to track whether patients are meeting their therapy goal that was set during their medical visit.</p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Solutions </h3>

              <p className="text-black pb-6">The Medtech company engaged Rialtes to address the identified challenges. Rialtes developed a comprehensive mobile application for android and iOS devices that was integrated with Salesforce Health Cloud. This offered patients a convenient and user-friendly platform to manage their healthcare journey. It empowered patients to actively participate in their therapy journey by providing a central place for data submission, real-time progress tracking, and communication.</p>

              <p className="text-black pb-6">This solution provided patients with a self-guided registration process, personalized dashboards to easily access therapy details, track progress and view action items.</p>

              <p className="text-black">The app provided patients with seamless data submissions of various health data points directly within the app, including sleep patterns, medication adherence or discomfort scale for specific body parts. In addition, it allowed for integrations with wearable devices, such as Apple Watches, to automatically capture device health data like heart rate, walking pace and more.</p>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Benefits</h3>

              <p className="text-black pb-6">Patients could submit health data conveniently, allowing healthcare providers to monitor progress and intervene if necessary. This allowed for improved care coordination through real-time data access and streamlined communication. </p>

              <p className="text-black pb-6">The app allowed for secure communication between patients and healthcare providers through telehealth functionality for queries and appointment scheduling. </p>

              <p className="text-black pb-6">Gamification elements motivated patients to actively participate by submitting data and completing tasks, improving adherence to treatment plans. </p>

              <p className="text-black pb-6">The app sent automated notifications to patients reminding them to submit data, ensuring consistent data collection. </p>

              <p className="text-black">Educational materials offered within the platform allowed patients easy access to relevant information for self-management and therapy understanding. Healthcare providers could track patients’ engagement with these materials and share additional support if required.</p>

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