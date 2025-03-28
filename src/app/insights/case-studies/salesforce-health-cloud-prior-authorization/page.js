"use client";
// pages/case-study-detail.js
import Head from "next/head";
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';

const slides = [
  {
    id: 1,
    image: "/images/case-studies/case-study-1_thumb.webp",
    category: "Manufacturing",
    industry: "Retail & e-Commerce",
    date: "8 Jan 2025",
    title: "Streamlined DevOps using Copado and Salesforce",
    description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
  },
  {
    id: 2,
    image: "/images/case-studies/case-study-2_thumb.webp",
    category: "Real Estate",
    industry: "Hi-Tech",
    date: "22 Dec 2024",
    title: "RealForce Banking Module - ACH",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
  },
  {
    id: 3,
    image: "/images/case-studies/case-study-3_thumb.webp",
    category: "Healthcare",
    industry: "Real Estate",
    date: "17 Nov 2024",
    title: "Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP",
    description: "A global medical technology company that develops and manufactures innovative products",
  },
  {
    id: 4,
    image: "/images/case-studies/case-study-4_thumb.webp",
    category: "Real Estate",
    industry: "Healthcare",
    date: "14 Oct 2024",
    title: "Omnichannel case management with Salesforce Service Cloud",
    description: "A leading provider of high-performance analog semiconductors for wireless and wired connectivity.",
  },
  {
    id: 5,
    image: "/images/case-studies/case-study-5_thumb.webp",
    category: "Public Sector",
    industry: "Finance",
    date: "27 Sept 2024",
    title: "A public housing in US",
    description: "A Public housing authority responsible for managing affordable housing programs across multiple counties in their zone.",
  },
  {
    id: 6,
    image: "/images/case-studies/case-study-6_thumb.webp",
    category: "Healthcare",
    industry: "Manufacturing",
    date: "4 Sept 2024",
    title: "Yardi Managed Services",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
  },
  {
    id: 7,
    image: "/images/case-studies/case-study-7_thumb.webp",
    category: "SAP",
    industry: "Retail & e-Commerce",
    date: "25 Oct 2024",
    title: "Streamlined DevOps using Copado and Salesforce",
    description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
  },
  /* {
    id: 8,
    image: "/images/case-studies/case-study-8_thumb.webp",
    category: "Salesforce",
    industry: "Hi-tech",
    date: "25 Oct 2024",
    title: "RealForce Banking Module - ACH",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
  }, */
  // Add more blog objects as needed
];


export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Salesforce Health Cloud, Prior Authorization | Company Name</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/case-study-8.webp "
          alt="Salesforce Health Cloud, Prior Authorization"
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
            <h1 className="text-[#000000] py-6 max-w-4xl">Salesforce Health Cloud, Prior Authorization</h1>
          </div>
          <div className="py-4"></div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black  max-w-4xl xl:w-1/2">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Healthcare And Life Sciences</span> <span className='text-[#ACACAC]'> | </span>25 Oct 2024
              </div>
              <div className="flex flex-col">
                <span>8 min read</span>
              </div>
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-row gap-6 ">
              <div className="max-w-[40px]">
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=/case-study-8&title=Salesforce Health Cloud, Prior Authorization&summary=Summary%20of%20the%20case%20study&source=LinkedIn">
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
                <a href="https://www.facebook.com/sharer/sharer.php?u=/case-study-8">
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
                <a href="https://twitter.com/intent/tweet?url=/case-study-8&text=Salesforce Health Cloud, Prior Authorization">
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

              <p className="text-black pb-6">The prior authorization process for medical treatments was complex and time-consuming for the MedTech company. </p>

              <p className="text-black pb-6">Patients often have multiple insurance plans with varying coverage details. They are often unaware of coverage limitations until after treatment is denied, leading to surprise bills. </p>

              <p className="text-black pb-6">Hospitals struggle with extensive paperwork, including collecting medical data from various departments and submitting it in formats specific to each insurance provider. </p>

              <p className="text-black">Traditional paper-based or scanned submissions lead to delays in insurance approvals, impacting patient care. </p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Solutions </h3>


              <p className="text-black pb-6">Rialtes developed a Salesforce-based solution to address these challenges and improve the prior authorization process for the MedTech company. </p>

              <p className="text-black pb-6">Patient insurance information, treatment details, and relevant ICD codes were integrated into a single digital platform.</p>

              <p className="text-black pb-6">We enabled doctors to add necessary medical data directly to the platform. </p>

              <p className="text-black pb-6">Clear and transparent patient consent is obtained electronically within the platform now. </p>

              <p className="text-black pb-6">Complete information from all departments is now submitted electronically to insurance providers in industry-standard formats (HL7 and FHIR) ensuring HIPAA compliance. </p>

              <p className="text-black">The UI adapts to the specific medical condition, which guides users through the required information needed for successful authorization.</p>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Benefits</h3>


              <p className="text-black pb-6">The centralized platform allows communication and data exchange between all parties that are involved. </p>

              <p className="text-black pb-6">Complete and accurate information leads to fewer denials and resubmissions. </p>

              <p className="text-black pb-6">Digital submissions and standardized formats accelerate insurance approvals. </p>

              <p className="text-black pb-6">Increased transparency and quicker approvals lead to a more positive patient experience. </p>

              <p className="text-black">Faster approvals enable quicker reimbursements to hospitals and the MedTech company.</p>

            </div>
          </div>
          <div className="py-6"></div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div
        className="
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