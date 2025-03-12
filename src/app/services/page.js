"use client";
// pages/services.js
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../components/contactform";
import ServicesBlogs from "@/app/components/servicesBlogs";


const latestServices = [
  {
    id: 1,
    image: "/images/services/salesforce.png",
    title: "Salesforce",
    description: "Enhance your people, processes, and tools with a Salesforce partner that meets your unique needs.",
  },
  {
    id: 2,
    image: "/images/services/sap.png",
    title: "SAP",
    description: "Value-driven managed SAP services for clients to help modernize and streamline their SAP workloads with better ROI",
  },
  {
    id: 3,
    image: "/images/services/ai.png",
    title: "Artificial Intelligence",
    description: "Accelerate your journey towards Enterprise AI for an AI-led business transformation",
  },
  {
    id: 4,
    image: "/images/services/yardi.png",
    title: "YARDI",
    description: "Manage your property portfolio seamlessly with a single, central property management solution that caters to a broad range of real estate needs",
  },
  {
    id: 5,
    image: "/images/services/data-analytics.png",
    title: "Data Analytics",
    description: "Transform data into information, insights, and improved business outcomes with a solid data and AI strategy tailored to your industry.",
  },
  {
    id: 6,
    image: "/images/services/cloud-migration.png",
    title: "Cloud Migration",
    description: "Cloud migration services for a seamless transition. Become a scalable, robust, and intelligent enterprise by migrating from on-premises to cloud infrastructure.",
  },
  {
    id: 7,
    image: "/images/services/quality-management.png",
    title: "Quality Management",
    description: "Facing in-house testing challenges? Reduce development costs, save time, and boost profitability with a streamlined testing process designed to enhance the performance of your software.",
  },
  {
    id: 8,
    image: "/images/services/integration.png",
    title: "Integration",
    description: "Seamlessly integrate applications, data, and processes into business-critical enterprise systems.",
  },
];

const ServicesCard = ({ services }) => (
  <div className="w-full h-full flex flex-col pb-6">
    <div className="relative overflow-hidden">
      <Image
        className="w-full transition-transform duration-300 ease-out hover:scale-105"
        src={services.image}
        alt={services.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        priority
      />
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
    <div className="container mx-auto text-black 2xl:pr-80 xl:pr-40 md:pr-20">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
        {latestServices.map((services) => (
          <ServicesCard key={services.id} services={services} />
        ))}
      </div>
    </div>
  );
};


const slides = [
  {
    id: 1,
    image: "/images/blog/blog-1-long-thumb.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "30 Sept 2024",
    url: '/how-salesforce-agentforce-actually-works',
    title: "How Salesforce Agentforce Actually Works",
    description: "Salesforce Agentforce, although a newer addition to the Salesforce ecosystem, is making rounds, particularly in organizations that deal with large teams of agents, such as sales agents, customer service representatives, and field service personnel.",
  },
  {
    id: 2,
    image: "/images/blog/blog-2-long-thumb.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "21 Oct 2024",
    url: '/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce',
    title: "The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce",
    description: "As businesses scale, the complexity of managing customer interactions multiplies, driving the need for more intelligent and streamlined support systems.  Salesforce Agentforce provides a robust platform for customer service automation, now enhanced by the groundbreaking Atlas Reasoning Engine.",
  },
  {
    id: 8,
    image: "/images/blog/blog-6-long-thumb.webp",
    category: "Integration",
    industry: "Healthcare",
    date: "17 Sept 2024",
    url: '/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow',
    title: "Agriculture 4.0. How Do Digital Technologies Transform Farming for a Better Tomorrow?",
    description: "Agriculture plays a significant role in India’s growing economy and its future cannot be accomplished without digital tools and technological innovation.",
  },
  {
    id: 9,
    image: "/images/blog/blog-6-long-thumb.webp",
    category: "Diversity & Inclusion",
    industry: "Human Resources",
    date: "17 Sept 2024",
    url: '/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow',
    title: "Agriculture 4.0. How Do Digital Technologies Transform Farming for a Better Tomorrow?",
    description: "Agriculture plays a significant role in India’s growing economy and its future cannot be accomplished without digital tools and technological innovation.",
  },
  {
    id: 10,
    image: "/images/blog/blog-6-long-thumb.webp",
    category: "SAP GTS",
    industry: "Generic",
    date: "17 Sept 2024",
    url: '/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow',
    title: "Agriculture 4.0. How Do Digital Technologies Transform Farming for a Better Tomorrow?",
    description: "Agriculture plays a significant role in India’s growing economy and its future cannot be accomplished without digital tools and technological innovation.",
  },
  {
    id: 13,
    image: "/images/blog/blog-6-long-thumb.webp",
    category: "SAP SuccessFactors",
    industry: "Human Resources",
    date: "17 Sept 2024",
    url: '/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow',
    title: "Agriculture 4.0. How Do Digital Technologies Transform Farming for a Better Tomorrow?",
    description: "Agriculture plays a significant role in India’s growing economy and its future cannot be accomplished without digital tools and technological innovation.",
  },
  {
    id: 3,
    image: "/images/blog/blog-3-long-thumb.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "28 Oct 2024",
    url: '/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters',
    title: "Agents vs. Copilots vs. Bots: What’s the Difference and Why It Matters",
    description: "Tools like Agentforce are redefining how we view digital assistants, bringing distinctions between Agents, Copilots, and Bots to the forefront. The terms are frequently used within artificial intelligence-driven automation and conversational interfaces, each serving a distinct purpose.",
  },
  {
    id: 4,
    image: "/images/blog/blog-4-long-thumb.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "25 Nov 2024",
    url: '/agentforce-testing-center-redefining-ai-testing-with-synthetic-data',
    title: "Agentforce Testing Center: Redefining AI Testing with Synthetic Data",
    description: "Salesforce has introduced a new feature called Testing Center within its agentic AI platform, Agentforce. This addition allows enterprise users to test and monitor AI agents before deploying them in production.",
  },
 
  
];

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
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
                          sm:mx-5 sm:w-[calc(100%-40px)]
                          xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="container mx-auto h-full flex flex-col justify-center">
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
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >

        <div className="py-10 bg-white">
          <div className="container mx-auto xl:pr-72 md:pr-20">
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
      {/* Contact Form */}
      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
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