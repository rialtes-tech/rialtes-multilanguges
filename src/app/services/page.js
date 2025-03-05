"use client";
// pages/services.js
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../components/contactform";
import InsightsCarousel from '../components/servicesInsightsCarousel';

const latestServices = [
  {
    id: 1,
    image: "images/services/salesforce.png",
    title: "Salesforce",
    description: "Enhance your people, processes, and tools with a Salesforce partner that meets your unique needs.",
  },
  {
    id: 2,
    image: "images/services/sap.png",
    title: "SAP",
    description: "Value-driven managed SAP services for clients to help modernize and streamline their SAP workloads with better ROI",
  },
  {
    id: 3,
    image: "images/services/ai.png",
    title: "Artificial Intelligence",
    description: "Accelerate your journey towards Enterprise AI for an AI-led business transformation",
  },
  {
    id: 4,
    image: "images/services/yardi.png",
    title: "YARDI",
    description: "Manage your property portfolio seamlessly with a single, central property management solution that caters to a broad range of real estate needs",
  },
  {
    id: 5,
    image: "images/services/data-analytics.png",
    title: "Data Analytics",
    description: "Transform data into information, insights, and improved business outcomes with a solid data and AI strategy tailored to your industry.",
  },
  {
    id: 6,
    image: "images/services/cloud-migration.png",
    title: "Cloud Migration",
    description: "Cloud migration services for a seamless transition. Become a scalable, robust, and intelligent enterprise by migrating from on-premises to cloud infrastructure.",
  },
  {
    id: 7,
    image: "images/services/quality-management.png",
    title: "Quality Management",
    description: "Facing in-house testing challenges? Reduce development costs, save time, and boost profitability with a streamlined testing process designed to enhance the performance of your software.",
  },
  {
    id: 8,
    image: "images/services/integration.png",
    title: "Integration",
    description: "Seamlessly integrate applications, data, and processes into business-critical enterprise systems.",
  },
];

const ServicesCard = ({ services }) => (
  <div className="w-full h-full flex flex-col pb-6">
    <div className="relative overflow-hidden">
      <img src={services.image} alt={services.title} className="w-full transition-transform duration-300 hover:scale-105" />
    </div>
    <div className="flex-grow flex flex-col pt-4">
      <h3 className="mb-[10px] md:mb-[15px] font-semibold text-lg line-clamp-4">{services.title}</h3>
      <p className='text-sm font-medium line-clamp-4 md:mb-[15px] mb-10'>{services.description}</p>
    </div>
    <div className="flex flex-col">
      <a href="#" className="text-[#0092E0] font-medium">Know more</a>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="container mx-auto px-6 text-black xl:pr-96 md:pr-20">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
        {latestServices.map((services) => (
          <ServicesCard key={services.id} services={services} />
        ))}
      </div>
    </div>
  );
};



export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Services | Company Name</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/services/services-banner.webp"
          alt="Services"
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div
          className="
                          container h-full relative
                          ml-[280px] w-[calc(100%-280px)] mr-0
                   
                          xl:ml-[200px] xl:w-[calc(100%-200px)]
                          lg:ml-[150px] lg:w-[calc(100%-150px)]
                          md:ml-[100px] md:w-[calc(100%-100px)]
                          sm:mx-5 sm:w-[calc(100%-40px)]
                          xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <h3 className="text-white text-[300] font-medium mb-2">Services</h3>
            <h1 className="text-white max-w-2xl">
              Comprehensive Solutions to Transform Experiences and Shape your Digital Future
            </h1>
          </div>
        </div>
      </section>


      <section
        className="
        container
        ml-[280px] w-[calc(100%-280px)] mr-0
        
        xl:ml-[200px] xl:w-[calc(100%-200px)]
        lg:ml-[150px] lg:w-[calc(100%-150px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >

        <div className="py-10 bg-white">
          <div className="container mx-auto px-6 xl:pr-72 md:pr-20">
            <div className="flex flex-col xl:flex-row items-center py-6">
              <div className="flex flex-col w-full xl:w-2/3 xl:mr-4 xl:mb-0 mb-4">
                <h2 className="text-black md:pb-0 pb-4">Our Enterprise Management Services For A Secure And Sustainable Future</h2>
              </div>
              <div className="flex flex-col w-full xl:w-1/4">
                <p className="text-[#000000]">Rialtes is a trusted partner with leading organizations working towards a shared goal of providing you with tailored data-driven solutions that simplify, enable, and empower you to solve your biggest business challenges.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Latest Services Section */}
      <div
        className="
        container
        ml-[280px] w-[calc(100%-280px)] mr-0

        xl:ml-[200px] xl:w-[calc(100%-200px)]
        lg:ml-[150px] lg:w-[calc(100%-150px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="pb-16 bg-white">

          <Services />

        </section>
      </div>

      {/* Latest Blogs */}
      <div
        className="
        container
        ml-[280px] w-[calc(100%-280px)] mr-0
        
        xl:ml-[200px] xl:w-[calc(100%-200px)]
        lg:ml-[150px] lg:w-[calc(100%-150px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <InsightsCarousel />
        <div className="py-10"></div>

      </div>


      {/* Contact Form */}
      <div
        className="
        container
        ml-[280px] w-[calc(100%-280px)] mr-0
        
        xl:ml-[200px] xl:w-[calc(100%-200px)]
        lg:ml-[150px] lg:w-[calc(100%-150px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]
        text-black pb-6"
      >
        <ContactForm />

      </div>


    </div>
  );
}