"use client";
// pages/success-factors.js
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import FeaturedCarousel from '../../../components/servicesFeaturedCarousel';
import ExploreMoreCarousel from '../../../components/servicesExploreMoreCarousel';
import ServicesBlogs from "@/app/components/servicesBlogs";
import { useState } from "react";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";


const latestServices = [
  {
    id: 1,
    title: "Cloud Deployment",
    description: "Flexibly deploy solutions in the cloud to significantly reduce the need for extensive on-premises infrastructure. Lower the initial setup costs and gain the agility to adapt to changing business needs quickly.",
  },
  {
    id: 2,
    title: "SAP Build",
    description: "Leverage generative AI and a low-code/no-code development environment to customize processes and add functionalities with minimal coding.",
  },
  {
    id: 3,
    title: "Integrated Analytics",
    description: "Real-time insights and analytics help businesses make informed decisions and optimize processes for better performance and strategic planning.",
  },
  {
    id: 4,
    title: "SAP S/4HANA Cloud, Public Edition",
    description: "Utilize SAP S/4HANA Cloud with industry best practices and SAP Business Technology Platform for a modular growth solution tailored for mid-sized and growing organizations.",
  },
  {
    id: 5,
    title: "SAP Business Technology Platform",
    description: "Enhance and extend your ERP capabilities with integrated AI and automation. Obtain real-time, comprehensive insights into all your data and create customized business processes without incurring high maintenance costs.",
  },
];

const ServicesCard = ({ services }) => (
  <div className="w-full h-full flex flex-col border border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
    <div className="flex-grow flex flex-col">
      <h3 className="mb-[15px] md:mb-[25px] font-[600] text-lg line-clamp-4 text-[#1F3F69]">{services.title}</h3>
      <p className='md:mb-[15px] mb-0'>{services.description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="container mx-auto text-black 2xl:pr-80 xl:pr-40 md:pr-20 pr-6">
      <h2 className="text-black mb-6">GROW with SAP Solutions for Your Business</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
        {latestServices.map((services) => (
          <ServicesCard key={services.id} services={services} />
        ))}
      </div>
     <LearnMore/>
    </div>
  );
};

const growLatestServices = [
  {
    id: 1,
    image: "/images/services/grow-with-sap/digital-transformation-thumb.webp",
    title: "Accelerate Your Digital Transformation",
    description: "Grow with SAP offers a comprehensive suite of tools to help you embrace the power of SAP S/4HANA Cloud, a best-in-class, intelligent ERP solution.",
  },
  {
    id: 2,
    image: "/images/services/grow-with-sap/erp-solutions-thumb.webp",
    title: "Flexible and Scalable ERP Solutions",
    description: "Built with flexibility and scalability in mind, it allows your ERP system to grow with your needs, ensuring you have the right tools and resources to thrive.",
  },
  {
    id: 3,
    image: "/images/services/grow-with-sap/real-time-insights.webp",
    title: "Empower Your Team with Real-Time Insights",
    description: "Real-time, data-driven insights across all areas of your business—from finance and sales to operations and HR. With comprehensive analytics and reporting tools at your fingertips, make smarter decisions faster.",
  },
  {
    id: 4,
    image: "/images/services/grow-with-sap/industry-success.webp",
    title: "Built-In Best Practices for Industry Success",
    description: "SAP’s solutions are built with industry insights to help you succeed in delivering best practices and pre-configured solutions that address the unique challenges and opportunities in your sector.",
  },
  {
    id: 5,
    image: "/images/services/grow-with-sap/flexible-pricing.webp",
    title: "Flexible Pricing Options",
    description: "Find a solution that fits your budget and business stage, with pricing that adapts as you scale.",
  },
];

const GrowServicesCard = ({ services }) => (
  <div className="w-full h-full">
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
    <p className='md:mb-[15px]'>{services.description}</p>
   <LearnMore/>
  </div>
);

const GrowServices = () => {
  return (
    <div className="container mx-auto text-black lg:pr-20 md:pr-10 pr-6">
      <h2 className="pb-10 text-black">Fuel Your Growth with GROW with SAP</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pb-10">
        {growLatestServices.map((services) => (
          <GrowServicesCard key={services.id} services={services} />
        ))}
      </div>
    </div>
  );
};


export default function Page() {
  const [slides, setSlides] = useState([]);

  return (
    <div className="min-h-screen bg-white">
       <Seo
        title="Grow with SAP Solutions: AI-Powered ERP for the Future | Rialtes"
        description="Grow with SAP and harness AI-driven ERP to streamline operations, boost efficiency, and drive business transformation seamlessly. Partner with Rialtes today!"
        keywords="home, website, welcome"
      />

      <section className="relative h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/services/grow-with-sap/grow-with-sap-banner.webp"
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
              <h3 className="text-white text-[300] font-medium mb-2">GROW with SAP</h3>
              <h1 className="text-white max-w-2xl">
                Quick and easy Cloud ERP implementation with ‘GROW with SAP’
              </h1>
            </div>
            <div className="md:w-32 w-20 pt-6">
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
            <div className="flex flex-col xl:flex-row py-6">
              <div className="flex flex-col w-full xl:max-w-lg xl:mr-4 xl:mb-0 mb-4">
                <h2 className="text-black md:pb-0 pb-4">Empowering Your Business to Scale and Succeed</h2>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[#000000]">We understand that as your business grows, so do your support needs, and we’re here to help every step of the way. Grow with SAP services provides a comprehensive solution, community support, and learning resources to help you adopt Cloud ERP with speed, reliability, and ongoing innovation.</p>
              </div>
            </div>

          </div>
        </div>
      </section>



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
        <section className="pb-16 bg-white">

          <Services />

        </section>
      </div>

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

      {/* Take the Lead in Your Industry */}
      < div className="bg-[#EDEDED] py-6" >
        <div
          className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <section className="py-10">
            <div className="container mx-auto">
              <h2 className="pb-8 text-black">Take the Lead in Your Industry</h2>
              <div className="flex md:flex-row flex-col gap-6">
                <div className="flex flex-col xl:w-1/4 md:w-1/3">
                  <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2">30%</h2>
                  <p className="text-black">Saved in infrastructure and IT management costs</p>
                </div>
                <div className="flex flex-col xl:w-1/4 md:w-1/3">
                  <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2">20%</h2>
                  <p className="text-black">Increase in operational efficiency</p>
                </div>
                <div className="flex flex-col xl:w-1/4 md:w-1/3">
                  <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2">400K</h2>
                  <p className="text-black">SAP customers worldwide</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>



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
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="pb-6 text-black xl:hidden flex">We Help You Grow and Thrive</h2>
            <div className="flex md:flex-row flex-col-reverse gap-6 py-6">
              <div className="w-full mr-4">
                <h2 className="pb-6 text-black xl:flex hidden">We Help You Grow and Thrive</h2>
                <p className="pb-6 text-black">At Rialtes, we’re committed to being more than just a technology provider; we’re your partner in growth. With Grow with SAP, you’ll benefit from:</p>
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 pb-6">
                  <li className="pb-4"><span className="font-semibold">Expert Guidance:</span> Our dedicated consultants and industry experts will work with you to create a roadmap that aligns with your business objectives. </li>

                  <li className="pb-4"><span className="font-semibold">Continuous Innovation:</span> Stay ahead of the curve with regular updates, new features, and continuous improvements to your SAP solutions. </li>

                  <li className="pb-4"><span className="font-semibold">Community and Networking Opportunities:</span> Access a global community of SAP customers and partners to share insights, best practices, and growth strategies.</li>
                </ul>
                <LearnMore/>
              </div>
              <div className="flex flex-col w-full">
                <div className="relative overflow-hidden">
                  <Image
                    className="w-full transition-transform duration-300 ease-out hover:scale-110"
                    src='/images/services/grow-with-sap/grow-and-thrive.webp'
                    alt="We Help You Grow and Thrive"
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
      < div className="bg-[#F5F5F5] py-6" >
        <div
          className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <FeaturedCarousel />

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
        container
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
        className="
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black py-20"
      >
        <ContactForm title={'Take the next step to operational excellence with us.'} className={"max-w-4xl"} />

      </div >


    </div >
  );
}