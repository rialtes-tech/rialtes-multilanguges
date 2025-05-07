"use client";
// pages/success-factors.js
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import ExploreMoreCarousel from '../../../components/servicesExploreMoreCarousel';
import ServicesBlogs from "@/app/components/servicesBlogs";
import { useState } from "react";
import LearnMore from "@/app/components/learnMore";
import CaseStudyIndivisual from '../../../components/caseStudyIndivisual';
import Seo from "@/app/components/Seo";


const slidesCaseStudy = [
  {
    id: 1,
    url: "/insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud",
    imgSrc: "/images/case-studies/case-study-7_thumb.webp",
    title: "Digitizing patient journey using Salesforce health cloud",
    description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
  },
  {
    id: 2,
    url: "/insights/case-studies/salesforce-health-cloud-prior-authorization",
    imgSrc: "/images/case-studies/case-study-8_thumb.webp",
    title: "Salesforce Health Cloud, Prior Authorization",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
  },
  {
    id: 3,
    url: "/insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap",
    imgSrc: "/images/case-studies/case study 1_thumb_n.webp",
    title: "Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP",
    description: "A global medical technology company that develops and manufactures innovative products.",
  },
];


const latestServices = [
  {
    id: 1,
    title: "Payer",
    description: "We provide IT and consulting services for private and commercial payers. If you’re a health insurance company, you can count on us to help you streamline critical functions like claim management, patient and provider communication, customer onboarding, and more.",
  },
  {
    id: 2,
    title: "Provider",
    description: "From helping you centralize your patients’ data to implementing efficient care coordination systems, we’ll help you serve patients more effectively, ensure HIPAA compliance, and simplify administrative tasks.",
  },
  {
    id: 3,
    title: "Pharma",
    description: "Our healthcare IT solutions for pharmacies allow you to streamline communication between you, patients, and providers – while integrating data across suppliers, manufacturers, and R&D to inform patient therapies.",
  },
  {
    id: 4,
    title: "Medtech",
    description: "We offer a wide range of IT and consulting services tailored to the unique needs of the MedTech sector. We take care of your tech solutions so you can focus on developing medical devices.",
  },
  {
    id: 5,
    title: "Biotech",
    description: "Helping Biotech companies achieve R&D, keep their data secure, and put life-saving medicines on the market faster with tailored AI-powered healthcare IT solutions.",
  },
];

const ServicesCard = ({ services }) => (
  <div className="w-full h-full flex flex-col border border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
    <div className="flex-grow flex flex-col">
      <h3 className="mb-[15px] md:mb-[25px] text-[#1F3F69]">{services.title}</h3>
      <p className='md:mb-[15px] mb-0'>{services.description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="container mx-auto text-black 2xl:pr-80 xl:pr-40 md:pr-20 pr-6 mt-10">
      <h2 className="text-black mb-6">From Pharma to Medtech, We Serve all Major Healthcare Segments</h2>
      <p>We offer Health cloud implementation, healthcare applications development, advisory services, and much more for companies within the following healthcare segments.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6 mt-10">
        {latestServices.map((services) => (
          <ServicesCard key={services.id} services={services} />
        ))}
      </div>
      <div className="mt-10">
      <LearnMore/>
      </div>
    </div>
  );
};

const growLatestServices = [
  {
    id: 1,
    image: "/images/healthcare/AdobeStock_572162228 copy.webp",
    title: "Patient Care with Salesforce Health Cloud",
    description: "Implementing Salesforce Health Cloud can significantly upgrade the patient experience solutions by centralizing all healthcare data. This helps in smarter decision-making and offers an intuitive platform for healthcare professionals.",
    productsDetails: [
      'Centralized Patient Records',
      'Automated Appointment Scheduling',
      'Medication Reminders ',
      'Remote Care Monitoring'
    ],
  },
  {
    id: 2,
    image: "/images/healthcare/AdobeStock_200878864 copy.webp",
    title: "Urgent Care & Hospital Enhancements",
    description: "Hospital solutions optimize every aspect of managing your bespoke healthcare delivery, from the administration of team members to boosting quality patient care and post-treatment follow-up appointments.",
    productsDetails: [
      'Resource Allocation',
      'Admission and Discharge Management',
      'Emergency Response System ',
    ],

  },
  {
    id: 3,
    image: "/images/healthcare/AdobeStock_930210511 copy.webp",
    title: "Tailored Patient Care Solutions",
    description: "Our patient care solutions focus on creating an empathetic healthcare environment. By leveraging these solutions, medical facilities can enhance patient engagement and satisfaction.",
    productsDetails: [
      'Virtual Waiting Rooms',
      'Digitalized Prescription Management',
      'Real-time Health Monitoring ',
    ],
  },
  {
    id: 4,
    image: "/images/healthcare/AdobeStock_184771424 copy.webp",
    title: "Unmatched MedTech Services",
    description: "We understand the dynamics of the healthcare industry. Our MedTech services ensure the smooth operation of technical and mechanical systems within healthcare facilities.",

    productsDetails: [
      '24/7 Customer Support',
      'EMR integrations',
      'Security Audits',
    ],
  }
];

const GrowServicesCard = ({ services }) => (
  <div className="">
    <div className="relative overflow-hidden">
      <Image
        className="w-full transition-transform duration-300 hover:scale-105"
        src={services.image}
        alt={services.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        priority
      />
    </div>
    <div className="flex flex-col pt-4">
      <h3 className="mb-[10px] md:mb-[15px] font-semibold h3-bold line-clamp-2 min-h-[60px]">{services.title}</h3>
    </div>
    <p>{services.description}</p>
    <ul className="mt-5">
      {services?.productsDetails?.map((details, index) => {
        return (
          <li
            key={index}
            className="font-medium flex mt-3 items-start before:content-['•'] before:text-[#0092E0] before:text-4xl before:font-bold before:mr-2  before:leading-[0.5]"
          >
            {details}
          </li>

        )
      })}
    </ul>
    <LearnMore/>

  </div>
);

const GrowServices = () => {
  return (
    <div className="text-black lg:pr-20 md:pr-10 pr-6 ">
      <h2 className="pb-10 text-black xl:w-1/2 w-fill">Pioneering Medical & Patient Care IT Solutions</h2>
      <p className="xl:w-1/2 w-full">The healthcare industry is evolving at a critical crossroads of technology and patient care. At Rialtes, we offer specialized Salesforce Health Cloud solutions that enable medical facilities to enhance agility and focus on patient needs. Our integrated healthcare IT solutions combine hospital software, MedTech services, and patient engagement tools to deliver exceptional care, whether for pharmacies or in-home care teams.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 md:gap-10 lg:gap-20 mt-20">
        {growLatestServices.map((services) => (
          <GrowServicesCard key={services.id} services={services} />
        ))}
      </div>

      <div className="mt-5">
      </div>
    </div>
  );
};


export default function Page() {
      const [slides, setSlides] = useState([]);
  
  return (
    <div className="min-h-screen bg-white">
       <Seo
        title="Health Care | Rialtes"
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/industry/life-sciences/healthcare-medtech-patient-care/"
      />
      <section className="relative h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/healthcare/AdobeStock_752092287_Preview copy.webp"
          alt="GROW with SAP"
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div
          className="
        container h-full relative
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="container mx-auto h-full flex flex-col justify-center">
            <div className="flex flex-col">
              <h3 className="text-white text-[300] font-medium mb-2">HEALTHCARE</h3>
              <h2 className="text-white max-w-2xl">
                Redefining healthcare by keeping patients at the center
              </h2>
            </div>

          </div>
        </div>
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
          <div className="container mx-auto 2xl:pr-72 xl:pr-40 md:pr-20">
            <div className="flex flex-col xl:flex-row py-6 xl:gap-20 gap-5">
              <div className="flex flex-col w-full xl:max-w-lg xl:mr-4 xl:mb-0 ">
                <h1 className="text-black md:pb-0 pb-4">Patient Care and MedTech Solutions Built on Salesforce Health Cloud</h1>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[#000000]">The healthcare industry is undergoing a major digital transformation. From the doctor’s office to home, patients have access to more care options than ever before, thanks to advancements not only in medical technology but the way healthcare IT solutions.
                </p>
                <p className="mt-5">Rialtes helps medical organizations deliver faster, more efficient, and compassionate patient care with specialized healthcare application development solutions. Whether you’re looking for ways to centralize patient records or migrate your data to Salesforce Health Cloud, our dedicated team of healthcare IT experts will help you transform your patients’ experiences.</p>
              </div>
            </div>

          </div>
        </div>
      </section>





      {/* We Help You Grow and Thrive */}
      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="xl:py-16 bg-white">
          <GrowServices />
        </section>
      </div>
      {/* Latest Services Section */}
      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="pb-8 bg-white">

          <Services />

        </section>
      </div>


      {/* Latest Customer Success Stories */}
      < div className="bg-[#F5F5F5] py-6 mt-20" >
        <div
          className="
        
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
           <CaseStudyIndivisual slides={slidesCaseStudy} />

        </div>
      </div>

      {/* Latest Blogs */}
     <div
              className="mt-20 mb-20
                               ml-[15px] w-[calc(100%-15px)] mr-0
                               xl:ml-[280px] xl:w-[calc(100%-280px)]
                               md:ml-[100px] md:w-[calc(100%-100px)]
                               sm:mx-5 sm:w-[calc(100%-40px)]
                               xs:mx-4 xs:w-[calc(100%-32px)]"
            >
              <ServicesBlogs slides={slides} />
      
            </div>
      {/* Explore More */}
      < div className="bg-[#808080] py-6" >
        <div
          className="
        
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <ExploreMoreCarousel />

        </div>
      </div >


      {/* Contact Form */}
      < div
        className="mb-20 mt-20
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black py-6"
      >
        <ContactForm title={'Take the next step to operational excellence with us.'} className={"max-w-4xl"} />

      </div >


    </div >
  );
}