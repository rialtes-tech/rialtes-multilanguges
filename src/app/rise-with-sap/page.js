"use client";
// pages/success-factors.js
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../components/contactform";
import FeaturedCarousel from '../components/servicesFeaturedCarousel';
import ExploreMoreCarousel from '../components/servicesExploreMoreCarousel';
import ServicesBlogs from "@/app/components/servicesBlogs";
import { useState } from "react";

const latestServices = [
  {
    id: 1,
    title: "Inability to quantify the incremental capabilities through next-generation business processes",
  },
  {
    id: 2,
    title: "The inability to integrate a broader technological ecosystem effectively",
  },
  {
    id: 3,
    title: "Digitally transforming business means disregarding years of efforts in the existing IT environment",
  },
  {
    id: 4,
    title: "Lack of real-time visibility on the overall performance",
  },
  {
    id: 5,
    title: "The fear of execution and inherent governance risk",
  },
  {
    id: 6,
    title: "Cyber-security is the last but most crucial point of concern",
  },
];

const ServicesCard = ({ services }) => (
  <div className="w-full h-full flex flex-col border border-[#707070] p-10 transition ease-out duration-300 hover:border-[#D9F2FF] hover:bg-[#D9F2FF]">
    <div className="flex-grow flex flex-col justify-center">
      <p>{services.title}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="container mx-auto text-black 2xl:pr-80 xl:pr-40 md:pr-20 pr-6">
      <h2 className="text-black mb-6">Businesses never stop exploring newer growth opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
        {latestServices.map((services) => (
          <ServicesCard key={services.id} services={services} />
        ))}
      </div>
    </div>
  );
};



export default function Page() {
  const [slides, setSlides] = useState([]);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Rise with SAP | Company Name</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/services/rise-with-sap/rise-with-sap-banner.webp"
          alt="RISE with SAP"
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
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <div className="flex flex-col xl:place-self-end">
              <h3 className="text-white text-[300] font-medium mb-2">RISE with SAP</h3>
              <h1 className="text-white max-w-2xl">
                Gather, analyze and disseminate with ‘RISE with SAP’
              </h1>
            </div>
            <div className="md:w-32 w-20 pt-6 xl:place-self-end">
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
          <div className="container mx-auto 2xl:pr-80 xl:pr-40 md:pr-20">
            <div className="flex flex-col xl:flex-row items-center py-6">
              <div className="flex flex-col w-full xl:w-2/3 xl:mr-20 xl:mb-0 mb-4">
                <h2 className="text-black md:pb-0 pb-4">Pragmatic Approach To Solving Problems</h2>
              </div>
              <div className="flex flex-col w-full xl:w-2/3">
                <p className="text-[#000000]">Every business requires room for innovation to drive profitable growth. “Expect the unexpected” is inevitable in business; implementing RISE with SAP eases your approach to tackling real-time problems more practical, predictable, effective, and measurable.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Our Solution to Success */}
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
          <div className="container mx-auto">
            <h2 className="pb-6 text-black xl:hidden flex">Our Solution to Success</h2>
            <div className="flex flex-col md:flex-row xl:items-center py-6 gap-6">
              <div className="flex flex-col w-full">
                <div className="relative overflow-hidden mr-6">
                  <Image
                    className="w-full transition-transform duration-300 hover:scale-105"
                    src='/images/services/rise-with-sap/solution-to-success.webp'
                    alt="Our Solution to Success"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <h2 className="pb-6 text-black xl:flex hidden">Our Solution to Success</h2>
                <p className="text-black pb-6">RISE with SAP is the ultimate solution for every enterprise that needs to develop new business models to avoid operational disruptions and create a well-defined digital system to avoid business risks</p>
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 pb-6">
                  <li className="pb-4">SAP S/4HANA Migration </li>
                  <li className="pb-4">Robotic Process Automation </li>
                  <li className="pb-4">Conversational Chatbot </li>
                  <li className="pb-4">Customized Application</li>
                </ul>
              </div>

            </div>
          </div>
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
        <section className="pb-16 bg-white">

          <Services />

        </section>
      </div>


      {/* SuccessFactors Integration Solutions */}
      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="pb-10 text-black">The 3-Pronged Apparatus</h2>
            <div className="flex md:flex-row flex-col justify-between gap-6 mr-6">
              <div className="flex lg:flex-row md:flex-col lg:text-start md:text-center">
                <div className="md:h-20 h-16 lg:mr-6 md:mr-0 mr-6 lg:mb-0 mb-4 text-center">
                  <Image
                    className=""
                    src='/images/services/rise-with-sap/taking-the-lead.svg'
                    alt="Taking the lead"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    priority
                  />
                </div>
                <div className="flex flex-col lg:w-1/2">
                  <h3 className="text-black md:h3-bold">Taking the lead</h3>
                  <p className="text-black">Unlock new efficiency with intelligent automation</p>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col lg:text-start md:text-center">
                <div className="md:h-20 h-16 lg:mr-6 md:mr-0 mr-6 lg:mb-0 mb-4">
                  <Image
                    src='/images/services/rise-with-sap/constant-improvement.svg'
                    alt="Constant improvement"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    priority
                  />
                </div>
                <div className="flex flex-col lg:w-1/2">
                  <h3 className="text-black md:h3-bold">Constant improvement</h3>
                  <p className="text-black">Automate business processes with tailored insights</p>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col lg:text-start md:text-center">
                <div className="md:h-20 h-16 lg:mr-6 md:mr-0 mr-6 lg:mb-0 mb-4">
                  <Image
                    src='/images/services/rise-with-sap/secure-success.svg'
                    alt="Secure success"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    priority
                  />
                </div>
                <div className="flex flex-col lg:w-1/2">
                  <h3 className="text-black md:h3-bold">Secure success</h3>
                  <p className="text-black">With a trusted partner for the cloud on top of a versatile platform</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>


      {/* Enterprise-focused solutions for everything your business needs! */}
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
            <h2 className="pb-6 text-black xl:hidden flex">Enterprise-focused solutions for everything your business needs!</h2>
            <div className="flex flex-col-reverse md:flex-row gap-6 py-6">
              <div className="flex flex-col w-full">
                <h2 className="pb-6 text-black xl:flex hidden">Enterprise-focused solutions for everything your business needs!</h2>
                <p className="pb-6 text-black">No matter what your SLAs, cloud needs, or technical support requirements are, our comprehensive solutions are curated to serve all business needs, irrespective of location.</p>
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 pb-6">
                  <li className="pb-4">SAP S/4HANA Cloud </li>
                  <li className="pb-4">Business Process Transformation </li>
                  <li className="pb-4">Robotic Process Automation </li>
                  <li className="pb-4">Conversational Chatbot </li>
                  <li className="pb-4">Additional supporting partners</li>
                </ul>
              </div>
              <div className="flex flex-col w-full">
                <div className="relative overflow-hidden">
                  <Image
                    className="w-full transition-transform duration-300 hover:scale-105"
                    src='/images/services/rise-with-sap/enterprise-focused-solutions.webp'
                    alt="Enterprise-focused solutions for everything your business needs!"
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
  text-black py-6"
      >
        <ContactForm title={'Take the next step to operational excellence with us.'} className={'max-w-4xl'} />

      </div >


    </div >
  );
}