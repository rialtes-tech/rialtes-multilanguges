"use client";
// pages/success-factors.js
import Image from "next/image";
import ContactForm from "../../components/contactform";
import ExploreMoreCarousel from '../../components/servicesExploreMoreCarousel';
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";
import { HeroSection } from "@/app/components/herosection";
const schemaData={
  
  "@context": "https://schema.org",
  "@type": "WebPage",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/industry/hitech-semiconductor/"
  },
  "name": "Rialtes | Driving Digital Innovation for Hi-Tech & Semiconductor Companies",
  "headline": "Next-Gen IT Solutions for Hi-Tech & Semiconductor Industry",
  "description": "Explore how Rialtes enables semiconductor and hi-tech firms to scale operations, streamline supply chains, and innovate faster using Salesforce, SAP, and cloud-native solutions.",
  "about": {
    "@type": "Thing",
    "name": "Hi-Tech and Semiconductor Industry"
  },
  "keywords": "Salesforce for semiconductors, SAP solution for hi-tech industry, digital transformation in hi-tech, IT solutions for chip manufacturing, Rialtes consulting",
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "url": "https://www.rialtes.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  }

}


const latestServices = [
  {
    id: 1,
    title: "Integrated Supply Chain",
    description: "From procurement to delivery, we offer IT services that support every stage of integrated supply chain management. We’ll help you manage and centralize vendor and customer relations, contracts, and production variables using AI, machine learning, and RPA.",
  },
  {
    id: 2,
    title: "Investment Management",
    description: "We offer intelligent asset management solutions that enable you to seamlessly govern your finances, production, business operations, and IT operations. Using advanced technologies like predictive modelling and big data analytics, our team creates solutions that help predict and mitigate operational issues before they happen and maximize visibility into your business’s asset data.",
  },
  {
    id: 3,
    title: "Partner Management",
    description: "Achieve greater visibility into your partner and vendor relationships and optimize channel sales with customizable partner management software. Whether you want to build personalized distributor portals or speed up your partner onboarding process, Rialtes has the technical and strategic expertise to create the best solution for your business.",
  },
];

const ServicesCard = ({ services }) => (
  <div className="w-full h-full flex flex-col border border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
    <div className="flex-grow flex flex-col">
      <h3 className="mb-[15px] md:mb-[25px] font-[600] line-clamp-4 text-[#1F3F69]">{services.title}</h3>
      <p className='md:mb-[15px] mb-0'>{services.description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="mx-auto text-black">
      <h2 className="text-black mb-12">Hi-tech Segments We Serve</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
        {latestServices.map((services) => (
          <ServicesCard key={services.id} services={services} />
        ))}
      </div>
      <div className="mt-8">
        <LearnMore />
      </div>
    </div>
  );
};

const growLatestServices = [
  {
    id: 1,
    image: "/images/industry/hi-tech/accelerate-digital-transformation.webp",
    title: "Accelerate Digital Transformation",
    description: "Unlock new avenues for growth through digital transformation. We guide you through a seamless transition into digital maturity, ensuring your business stays ahead of the curve and engages with potential online resources and customers. ",
    listitems: (<ul className="list-disc marker:text-[#0092E0] marker:text-2xl text-black pl-5 pb-6"><li>Comprehensive Strategy Planning</li> <li>Implementation of Modern Technologies</li> <li>Integration of Tech Tools with Legacy Systems</li></ul>)
  },
  {
    id: 2,
    image: "/images/industry/hi-tech/unleashing-the-power-of-iot.webp",
    title: "Unleashing The Power of IoT",
    description: "The Internet of Things is changing how we do business in today’s consumer-driven marketplace. Stay ahead with our leading IoT consulting services. Turn your vision into reality and bring unprecedented efficiency to your operations.",
    listitems: (<ul className="list-disc marker:text-[#0092E0] marker:text-2xl text-black pl-4 pb-6"><li>IoT device management</li> <li>Security Protocols</li> <li>Analytics and insights</li></ul>)
  },
  {
    id: 3,
    image: "/images/industry/hi-tech/faster-time-to-market-with-product-lifecycle-management.webp",
    title: "Faster Time-to-Market with Product Lifecycle Management",
    description: "Accelerate your development cycles and get your products to market faster than your competitors. With our advanced product lifecycle management, we make the process smooth and efficient.",
    listitems: (<ul className="list-disc marker:text-[#0092E0] marker:text-2xl text-black pl-4 pb-6"><li>Feature prioritization</li> <li>Version control</li> <li>Collaborative workflows</li></ul>)
  },
  {
    id: 4,
    image: "/images/industry/hi-tech/navigating-semiconductor-manufacturing.webp",
    title: "Navigating Semiconductor Manufacturing",
    description: "Enhance production efficiency and minimize waste in your semiconductor manufacturing processes with our specialized semiconductor manufacturing software. This ensures you get the project management needed based on the unique markers and systems surrounding semiconductor microchips.",
    listitems: (<ul className="list-disc marker:text-[#0092E0] marker:text-2xl text-black pl-4 pb-6"><li>Process automation</li> <li>Quality control analytics</li> <li>Supply chain management</li></ul>)
  },
  {
    id: 5,
    image: "/images/industry/hi-tech/hi-tech-software-solutions-for-scalability.webp",
    title: "Hi-Tech Software Solutions for Scalability",
    description: "Meet your growing demands without compromising on performance with our tailored  hi-tech software solutions. We work with your unique needs in an Agile environment to craft tailored solutions using modern tools and services.",
    listitems: (<ul className="list-disc marker:text-[#0092E0] marker:text-2xl text-black pl-4 pb-6"><li>Microservices architecture</li> <li>Application modernization</li> <li>Testing services for quality assurance</li></ul>)
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
      <h3 className="my-[20px] font-semibold h3-bold line-clamp-2">{services.title}</h3>
    </div>
    <p className='md:mb-[15px]'>{services.description}</p>
    {services.listitems}
    <div className="mt-[10px] xl:mt-0">   <LearnMore />
    </div>
  </div>
);

const GrowServices = () => {
  return (
    <div className="text-black">
      <h2 className="pb-10 text-black">Boost Solutions & Innovation with Rialtes</h2>
      <p className="pb-8">The tech world continually shifts and moves like a living creature lost in a cave. Every day, you hear about incredible innovation that transforms how we do business. If you want to stay updated on the latest tools, benefits, and features of how the Hi-Tech world moves, you will benefit from our team at Rialtes. With services ranging from IoT consulting services to semiconductor manufacturing software, we are your comprehensive guide to all things digital.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-16 md:gap-14 lg:gap-28 mt-[20px] xl:mt-[40px]">
        {growLatestServices.map((services) => (
          <GrowServicesCard key={services.id} services={services} />
        ))}
      </div>
    </div>
  );
};


export default function Page() {
  return (
    <div className="min-h-screen bg-white">

      <Seo
        title="IT and Software Solutions for Hi-Tech Semiconductors Industry | Rialtes"
        description="Struggling with complex supply chains or legacy systems? IT and software solutions for hi-tech semiconductors from Rialtes deliver agility and precision."
        canonical="https://www.rialtes.com/industry/hitech-semiconductor/"
      />
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <HeroSection title="Accelerate innovation and meet the rapid demand of digital enterprises" subtitle="HI-TECH" deskimg="/images/industry/hi-tech/hi-tech-banner.webp" mobimg="/images/industry/hi-tech/hitech-mob-banner.webp" />

      <section
        className="custom-container"
      >

        <div className="py-10 bg-white">
          <div className="flex flex-col xl:flex-row py-6 2xl:gap-32 xl:gap-[24px] gap-y-[24px]">
            <div className="flex flex-col xl:mb-0 mb-4">
              <h1 className="text-black md:pb-0 pb-4 xl:text-[44px] ">Uncomplicate your tech stack with simple solutions for Hi-Tech enterprises</h1>
            </div>
            <div className="flex flex-col w-full xl:max-w-xl">
              <p className="text-[#000000]">You engineer and manufacture complex products to make consumers’ lives easier. From semiconductor production to biotech technology design, we make hi-tech industry processes simple and seamless with customizable technology solutions. Our experienced team understands the unique challenges hi-tech industries face, from supply chain volatility to evolving customer demands.</p>
            </div>
          </div>
        </div>
      </section>


      {/* We Help You Grow and Thrive */}
      <div
        className="custom-container"
      >
        <section className="xl:py-16 bg-white">
          <GrowServices />
        </section>
      </div>



      {/* Latest Services Section */}
      <div
        className="py-10 mt-8 lg:mt-0  custom-container">
        <section className="pb-16 bg-white">

          <Services />

        </section>
      </div>
      {/* Explore More */}
      < div className="bg-[#808080] py-6" >
        <div
          className="custom-container lg:pr-0"
        >
          <ExploreMoreCarousel />

        </div>
      </div >


      {/* Contact Form */}
      < div
        className="py-20 custom-container  text-black"
      >
        <ContactForm title={'Take the next step to operational excellence with us.'} className={"max-w-4xl"} />

      </div >


    </div >
  );
}