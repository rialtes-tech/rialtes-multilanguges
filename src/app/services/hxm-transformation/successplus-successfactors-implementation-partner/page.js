"use client";
// pages/success-factors.js
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import FeaturedCarousel from '../../../components/servicesFeaturedCarousel';
import ExploreMoreCarousel from '../../../components/servicesExploreMoreCarousel';
import ServicesBlogs from '../../../components/servicesBlogs';
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";
import { HeroSection } from "@/app/components/herosection";

const latestServices = [
  {
    id: 1,
    title: "SuccessFactors Implementation",
    description: "Implementation services for SuccessFactors HR Core, Talent, and Analytics Modules. Optimize your costs, deadlines, and quality with our pre-configured solutions, certified by SAP.",
  },
  {
    id: 2,
    title: "SuccessFactors Support",
    description: "Flexible support services for the SuccessFactors systems guarantee continuity of service and continuous improvement. It includes release management, adoption, administrative, and technical support.",
  },
  {
    id: 3,
    title: "Data Modelling and Migration",
    description: "Organizes and aligns the data with SuccessFactors’ schemas and organizational requirements with tools and methodologies to speed up and simplify the data migration.",
  },
  {
    id: 4,
    title: "Integration and Data Management",
    description: "Successful data integration strategy to maintain high data quality and ensure consistency across systems. This includes carefully planned extraction, transformation, and loading (ETL) processes to transfer data accurately.",
  },
  {
    id: 5,
    title: "Employee Central",
    description: "Streamlined management of profiles and transactions, organizational structure, time, and employee benefits to ensure accurate and up-to-date employee records and clear reporting lines and hierarchy.",
  },
  {
    id: 6,
    title: "Employee Central Payroll",
    description: "Reduce manual effort, minimize errors, and improve processing speed with a modern payroll system for global payroll management and automated processes to streamline payments across diverse regions, ensuring compliance and accuracy",
  },
];

const ServicesCard = ({ services }) => (
  <div className="  flex flex-col border border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
    <div className="flex-grow flex flex-col">
      <h3 className="mb-[15px] md:mb-[25px] font-[600] 2xl:text-[26px] 4xl:text-[30px] line-clamp-4 text-[#1F3F69] 2xl:h-[70px] lg:text-[20px] lg:h-[54px] 4xl:h-[84px] text-[20px] md:text-[20px] ">{services.title}</h3>
      <p className='md:mb-[15px] mb-0 2xl:text-[20px] 4xl:text-[22px] xl:text-[19px] md:text-[18px] lg:text-[16px]  '>{services.description}</p>
    </div>
  </div>
);



const Services = () => {
  return (
    <div className="  text-black 2xl:pr-70 xl:pr-10 md:pr-8">
      <h2 className="text-black mb-6 2xl:text-[56px] xl:text-[46px] xl:w-[1000px] 2xl:w-[1300px]  4xl:text-[60px] 4xl:w-[1300px] lg:text-[38px] lg:w-[900px] text-[24px]  md:text-[32px] ">End-to-end SAP SuccessFactors Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
        {latestServices.map((services) => (
          <ServicesCard key={services.id} services={services} />
        ))}
      </div>
     <LearnMore/>
    </div>
  );
};



export default function Page() {

  const slides = [


    {
      id: 5,
      image: "/images/blog/blog-5-long-thumb.webp",
      category: "SAP SuccessFactors",
      industry: "Human Resources",
      date: "24 Dec 2024",
      heading:'SAP SuccessFactors in MS Office 365',
      url: 'insights/blogs/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration',
      title: "How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration",
      description: "Seamless integration between enterprise applications offers improved collaboration, efficiency, and productivity. Integrating SAP SuccessFactors with Microsoft Office 365 combines the strengths of a leading human experience management (HXM) solution and a robust suite of productivity tools.",
    },

    {
      id: 7,
      image: "/images/blog/blog-7-long-thumb.webp",
      category: "SAP SuccessFactors",
      industry: "Human Resources",
      date: "29 Oct 2024",
      heading:'Evaluate Performance with SAP SuccessFactors PMGM',
      url: 'insights/blogs/sap-successfactors-performance-and-goal-management',
      title: "SAP SuccessFactors Performance and Goal Management",
    },



    {
      id: 13,
      image: "/images/blog/blog-9-logn-thumb.webp",
      category: "SAP SuccessFactors",
      industry: "Human Resources",
      date: "12 Nov 2024",
      heading:'DEI in SuccessFactors',
      url: 'insights/blogs/how-sap-successfactors-supports-diversity-equity-and-inclusion-initiatives',
      title: "How SAP SuccessFactors Supports Diversity, Equity, and Inclusion Initiatives",
    },
    {
      id: 14,
      image: "/images/blog/blog-13-long-thumb.webp",
      category: "SAP SuccessFactors",
      industry: "Human Resources",
      date: "21 Jan 2025",
      heading:'Manage Remote Employee Lifecycle',
      url: 'insights/blogs/how-sap-successfactors-enhances-remote-work-management',
      title: "How SAP SuccessFactors Enhances Remote Work Management",
    },


  ];
  return (
    <div className="min-h-screen bg-white">
       <Seo
        title="SuccessFactors Consulting Services and Implementation Partner | Rialtes"
        description="SAP SuccessFactors consulting with Rialtes’ Success+ transforms HR with AI, automation, and insight. Your future-ready SuccessFactors implementation partner."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner/"
      />


       <section className="relative h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/success-factors/successfactor-banner.webp"
          alt="SuccessFactor"
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div
          className="
                    custom-container h-full relative
      "
        >
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-white text-[300] font-medium mb-2">SuccessFactors</h3>
            <h2 className="text-white 2xl:text-[56px] xl:text-[46px] xl:w-[500px] 2xl:w-[600px]  4xl:text-[60px] 4xl:w-[670px] lg:text-[38px] lg:w-[400px] leading-tight text-[24px] md:text-[32px]  ">
              HR Transformation Enabled Using SuccessFactors
            </h2>
            <div className="md:max-w-32 w-20  4xl:w-[160px] 2xl:w-[140px] lg:w-[100px] xl:w-[100px] pt-6">
              <Image
                src="/images/success-factors/sap-partner-logo.webp"
                alt="SAP Partner Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section> 
   {/* <HeroSection title="HR Transformation Enabled Using SuccessFactors" subtitle="SuccessFactors" mobimg="/images/success-factors/successfactor.webp" deskimg="/images/success-factors/successfactor-banner.webp" extraImg="/images/success-factors/sap-partner-logo.webp" /> */}

      <section
        className="custom-container"
      >

        <div className="py-8 bg-white">
          <div className="2xl:pr-72 xl:pr-40 md:pr-20">
            <div className="flex flex-col lg:flex-row items-center py-6">
              <div className="flex flex-col  xl:mb-0 mb-4 ">
                <h1 className=" md:pb-0 pb-4 2xl:text-[56px] xl:text-[46px] xl:w-[660px] 2xl:w-[780px]  4xl:text-[60px] 4xl:w-[870px] lg:text-[38px] lg:w-[550px] leading-tight text-[24px] md:text-[32px] ">Achieve Performance Excellence with SuccessFactors Consulting</h1>
              </div>
              <div className="flex flex-col w-full xl:w-1/2">
                <p className="text-[#000000]  2xl:text-[18px] 2xl:w-[480px] 4xl:text-[20px] 4xl:w-[550px]  xl:text-[16px] xl:w-[430px] lg:text-[14px] lg:w-[385px] md:text-[18px]">We go beyond SAP SuccessFactors implementation, offering end-to-end global HCM transformation that automates HR processes and enhances both user and employee experiences. By combining the SAP SuccessFactors platform with our artificial intelligence, machine learning, and analytics capabilities, we transform the human experience while aligning with business goals.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Latest Services Section */}
      <div
        className="custom-container lg:mt-20 md:mt-6"
      >
        <section className=" bg-white">

          <Services />

        </section>
      </div>


      {/* SuccessFactors Integration Solutions */}
      <div
        className="custom-container lg:mt-10 mt-6 md:mt-10"
      >
        <section className="py-10">
          <div className="">
            <h2 className="pb-8 lg:pb-12 text-black  2xl:text-[56px] xl:text-[46px] xl:w-[1000px] 2xl:w-[1200px]  4xl:text-[60px] 4xl:w-[1200px] lg:text-[38px] lg:w-[900px] leading-tight text-[24px]  md:text-[32px] ">SuccessFactors Integration Solutions</h2>
            <div className="flex md:flex-row flex-col justify-between gap-6 md:gap-1">
              <div className="flex items-center">
                <div className="md:h-20 h-16 mr-6">
                  <Image
                    className=""
                    src='/images/success-factors/sap-hcm-modules.svg'
                    alt="SAP HCM Modules"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    priority
                  />
                </div>
                <h3 className="text-black  md:h3-bold 2xl:text-[26px] 4xl:w-[256px] 4xl:text-[30px] 2xl:w-[200px] xl:text-[24px] md:text-[18px] lg:text-[22px] leading-tight lg:w-[220px] xl:w-[220px] text-[20px] w-[100px] md:w-[200px]">SAP HCM Modules</h3>
              </div>
              <div className="flex items-center">
                <div className="md:h-20 h-16 mr-6">
                  <Image
                    src='/images/success-factors/sap-analytics-cloud.svg'
                    alt="SAP Analytics Cloud"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    priority
                  />
                </div>
                <h3 className="text-black  md:h3-bold 2xl:text-[26px] 4xl:w-[256px] 4xl:text-[30px] 2xl:w-[200px] xl:text-[24px] md:text-[18px] lg:text-[22px] leading-tight lg:w-[230px] xl:w-[250px] text-[20px] w-[150px] md:w-[220px]">SAP Analytics Cloud</h3>
              </div>
              <div className="flex items-center">
                <div className="md:h-20 h-16 mr-6">
                  <Image
                    src='/images/success-factors/workforce-software.svg'
                    alt="Workforce Software"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    priority
                  />
                </div>
                <h3 className="text-black md:w-1/3 md:h3-bold 2xl:text-[26px] 4xl:w-[256px] 4xl:text-[30px] 2xl:w-[200px] xl:text-[24px] md:text-[18px] lg:text-[22px] leading-tight xl:w-[250px] text-[20px] w-[100px]">Workforce Software</h3>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Reimagine Employee Experiences and Optimize HR Operations */}
      < div className="bg-[#EDEDED] py-6 lg:mt-20 mt-2 md:mt-10" >
        <div
          className="custom-container"
        >
          <section className="py-10">
            <div className="">
              <h2 className="pb-8 text-black leading-tight 2xl:text-[56px] xl:text-[46px] xl:w-[800px] 2xl:w-[1000px]  4xl:text-[60px] 4xl:w-[1100px] lg:text-[38px] lg:w-[700px] text-[24px]  md:text-[32px]  ">Reimagine Employee Experiences and Optimize HR Operations</h2>
              <div className="flex md:flex-row flex-col gap-8 4xl:gap:10 ">
                <div className="flex flex-col xl:w-1/3 md:w-1/3">
                  <h2 className="text-[#0092E0] font-bold 2xl:text-[60px] 4xl:text-[70px] xl:text-[54px] md:text-[40px] lg:text-[50px] mb-2">290M</h2>
                  <p className="text-black 4xl:text-[24px] 2xl:text-[20px] lg:text-[16px] md:text-[20px] xl:text-[18px] 2xl:w-[200px] 4xl:w-[260px] xl:w-[180px] lg:w-[160px]">Users in more than 200 countries</p>
                </div>
                <div className="flex flex-col xl:w-1/3 md:w-1/3">
                  <h2 className="text-[#0092E0] font-bold 2xl:text-[60px] mb-2 4xl:text-[70px] xl:text-[54px] md:text-[40px] lg:text-[50px]" >25%</h2>
                  <p className="text-black 4xl:text-[24px] 2xl:text-[20px] lg:text-[16px] md:text-[20px] xl:text-[19px] 2xl:w-[240px] 4xl:w-[260px] xl:w-[220px] lg:w-[180px]">Increase in employee engagement</p>
                </div>
                <div className="flex flex-col xl:w-1/3 md:w-1/3">
                  <h2 className="text-[#0092E0] font-bold 2xl:text-[60px] mb-2 4xl:text-[70px] xl:text-[54px] md:text-[40px] lg:text-[50px]">60%</h2>
                  <p className="text-black 4xl:text-[24px] 2xl:text-[20px] lg:text-[16px] md:text-[20px] xl:text-[19px] 2xl:w-[240px] 4xl:w-[260px] xl:w-[220px] lg:w-[180px]">Reduction in compliance-related risks and errors</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>


      {/* Maximize HR Efficiency */}
      <div
        className="custom-container lg:mt-20 md:mt-8"
      >
        <section className="pb-10 pt-16 bg-white">
          <div className="">
          <h2 className="pb-4 text-black xl:hidden flex  leading-tight lg:text-[38px] lg:w-[480px] text-[24px]  md:text-[32px]  ">Maximize HR Efficiency in Your Organization</h2>
            <div className="flex flex-col-reverse md:flex-row gap-6 py-6">
              <div className="w-full">
                <h2 className="pb-6 text-black  xl:flex hidden 2xl:text-[56px] xl:text-[46px] xl:w-[630px] 2xl:w-[700px]  4xl:text-[60px] 4xl:w-[780px] lg:text-[38px] lg:w-[520px] leading-tight ">Maximize HR Efficiency in Your Organization</h2>
                <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-6 2xl:text-[18px] 4xl:text-[20px] xl:text-[18px] md:text-[16px] lg:text-[18px] 2xl:w-[600px] 4xl:w-[639px] leading-tight ">

                  <li className="pb-2">An experienced SAP partner with deep expertise across various industries </li>
                  <li className="pb-2">Tailored integration packages designed to meet unique client needs </li>
                  <li className="pb-2">Proactive approach to managing evolving customer environments and requirements</li>
                  <li className="pb-2">Comprehensive support for long-term analysis, implementation, and transition from on-premises to cloud </li>
                  <li className="pb-2">A well-established SuccessFactors Center of Excellence with ready-to-use content</li>
                </ul>
               <LearnMore/>
              </div>
              <div className="flex flex-col w-full h-auto">
                <div className="relative overflow-hidden  ">
                  <Image
                    className="w-full transition-transform duration-300 ease-out hover:scale-110"
                    src='/images/success-factors/Maximize HR Efficiency 2.webp'
                    alt="Maximize HR Efficiency in Your Organization"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Latest Customer Success Stories */}
      < div className="bg-[#F5F5F5] py-6 md:mt-10 mt-4 lg:mt-20" >
        <div
          className="custom-container"
        >
          <FeaturedCarousel />

        </div>
      </div>

      {/* Latest Blogs */}
      <div
        className=" mb-20
                custom-container lg:pr-0 md:mt-10 mt-4 lg:mt-20"
      >
       {slides && slides.length > 0 ? (
  <ServicesBlogs slides={slides || []} />
) : (
  <p>No blogs available at the moment.</p>
)}

      </div>

      {/* Explore More */}
      < div className="bg-[#808080] py-6 md:mt-10 mt-4 lg:mt-20" >
        <div
          className="
\   custom-container"
        >
          <ExploreMoreCarousel />

        </div>
      </div >


      {/* Contact Form */}
      < div
        className="py-16
custom-container
  text-black"
      >
        <ContactForm title={'Take the next step to operational excellence with us.'} className={'2xl:text-[56px] xl:text-[46px] xl:w-[1000px] 2xl:w-[1200px]  4xl:text-[60px] 4xl:w-[1200px] lg:text-[38px] lg:w-[900px] leading-tight text-[24px]  md:text-[32px] '} />

      </div >


    </div >
  );
}