"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";

const featureBoxes = [
  {
    icon: "/images/data-cloud/customer-360-view.svg",
    title: "Customer 360 View",
    description:
      "Integrate customer data across business units to build, for both real-time, omni-channel marketing, transactional personalization, content, subscription, and e-commerce.",
  },
  {
    icon: "/images/data-cloud/zero-copy-integration.svg",
    title: "Zero Copy Integration",
    description:
      "Connect your databases, applications with zero copying delays and share data among multiple data sources on demand. No ETL, eliminate ingestion costs and keeping down operational costs.",
  },
  {
    icon: "/images/data-cloud/real-time-data-processing.svg",
    title: "Real-time Data Processing",
    description:
      "Processes in real-time and drives data-driven decision-making, optimize inventory management, influence services, improve customer satisfaction, add trusted promotions and recommendations in real-time.",
  },
  {
    icon: "/images/data-cloud/omnichannel-engagement.svg",
    title: "Omnichannel Engagement",
    description:
      "Build brand loyalty and trust by ensuring consistent experiences by managing data and service channels.",
  },
  {
    icon: "/images/data-cloud/privacy-and-compliance.svg",
    title: "Privacy and Compliance",
    description:
      "Monitor transactions, protect third-party relationships and data usage, adhering to GDPR and CCPA.",
  },
  {
    icon: "/images/data-cloud/personalized-marketing-campaigns.svg",
    title: "Personalized Marketing Campaigns",
    description:
      "Leverage unified customer profiles to deliver tailored and timely 1:1 targeted campaigns, seamless and secure omnichannel interactions that drive conversion rates.",
  },
];

const stats = [
  { percentage: "67%", description: "Tech resources freed up" },
  { percentage: "79%", description: "Companies witnessed a reduction in cost" },
  { percentage: "77%", description: "Organizations save 2 hours a week" },
];

const services = [
  {
    id: 1,
    image: "/images/data-cloud/managed-cloud-services.webp",
    title: "Managed Cloud Services",
    description:
      "With a comprehensive suite of managed services for both public, private, and hybrid cloud environments, empower enterprises to optimize their entire cloud infrastructure and applications.",
  },
  {
    id: 2,
    image: "/images/data-cloud/private-cloud-services.webp",
    title: "Private Cloud Services",
    description:
      "Experience the ideal blend of cloud flexibility with the utmost data compliance, and security of private infrastructure - providing you an isolation from the public cloud enterprise workloads.",
  },
  {
    id: 3,
    image: "/images/data-cloud/data-cloud-consulting.webp",
    title: "Data Cloud Consulting",
    description:
      "Tailored recommendations, best practices and certified expertise in maximizing the value of Salesforce Data Cloud within your organization.",
  },
  {
    id: 4,
    image: "/images/data-cloud/data-cloud-migration.webp",
    title: "Data Cloud Migration",
    description:
      "Develop and implement the best practices for securely and efficiently migrate the composition of cloud workloads from any environment with expert assessments and seamless workload migration solutions.",
  },
  {
    id: 5,
    image: "/images/data-cloud/data-cloud-implementation.webp",
    title: "Data Cloud Implementation",
    description:
      "Set up the necessary infrastructure, configure data sources, and ensure that your organization can fully utilize Salesforce Data Cloud.",
  },
];

export default function DataCloud() {
  const [hoveredBlog, setHoveredBlog] = useState(null);
  const [isRouterReady, setIsRouterReady] = useState(false);

  useEffect(() => {
    setIsRouterReady(true);
  }, []);

  const handleMouseEnter = (blogName) => {
    return () => {
      setHoveredBlog(blogName);
    };
  };

  const handleMouseLeave = () => {
    return () => {
      setHoveredBlog(null);
    };
  };

  return (
    <div className="min-h-screen">
      <Seo
        title="Salesforce Data Cloud Implementation and Consulting Services | Rialtes"
        description="Expert Salesforce Data Cloud implementation and consulting to fuel growth, boost decisions, accelerate innovation, and drive stronger outcomes with Rialtes."
        keywords="home, website, welcome"
        canonical={"https://www.rialtes.com/solutions/data-ai/salesforce-data-cloud-consulting/"}
      />

      {/* hero section */}
      <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/data-cloud/salesforce-data-cloud-header.webp"
            alt="desktop banner"
            fill
            style={{ objectFit: "cover", objectPosition: "55% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />

        </div>

        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/data-cloud/salesforce-data-cloud-header.webp"
            alt="mobile banner"
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
          />
        </div>

        <div className="relative h-full custom-container flex items-center text-[#000000]">
          <div className="grid grid-cols-12 w-full">

            <div className="4xl:col-span-5 md:col-span-4 col-span-4">
            </div>
            <div className="4xl:col-span-7 md:col-span-8 col-span-8">
              <h3 className="text-[18px] md:text-[24px] font-bold max-lg:w-[60%] md:w-[50%] lg:w-full">
                Data Cloud
              </h3>
              <h1 className="text-[26px] leading-tight xl:text-[44px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px]">
                Harness the Potential <br /> of Salesforce Data Cloud
              </h1>
              <h3 className="font-bold leading-tight mt-10 xl:text-[26px] 4xl:text-[30px] text-[20px] md:block hidden">
                Drive automation, predictive, and generative AI, as well as analytics, within the world’s leading AI-powered CRM
              </h3>
              <div className="w-full mt-10">
                <Image
                  src="/images/data-cloud/salesforce-partner.webp"
                  alt="Leadership Team"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "30%",
                    height: "30%",
                    objectFit: "cover",
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* page description */}
      <div className="custom-container">
        <section className="pt-16 bg-white">
          <div className="mx-auto">
            <h2 className="text-[#000000] 4xl:text-[60px] xl:text-[40px] text-[26px] mb-8">
              What Is Salesforce Data Cloud?
            </h2>
            <p className="md:max-w-xl xl:max-w-4xl mb-8 4xl:text-[22px] xl:text-[18px] text-[16px]">
              Businesses are flooded with vast amounts of data from an
              increasing array of systems, sources, and platforms. The sheer
              scale and diversity of this data can be overwhelming, leaving
              organizations to manage and navigate through countless records
              daily.
            </p>
            <p className="md:max-w-xl xl:max-w-4xl 4xl:text-[22px] xl:text-[18px] text-[16px]">
              Salesforce Data Cloud is designed to assist businesses in
              consolidating customer data from various touchpoints. Combining
              data from multiple sources helps create a unified 360-degree view
              of each customer, fostering more personalized and effective
              marketing campaigns.
            </p>
          </div>
        </section>
      </div>

      {/* creating section */}
      <div className="custom-container">
        <section className="py-8 my-10">
          <h2 className="text-[#000000] lg:w-[70%] xl:w-[76%] 4xl:w-[90%] 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight">
            Creating Personalized & Impactful Customer Experiences for Your
            Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:mt-[67px] mt-[48px]">
            {featureBoxes.map((feature, index) => (
              <div
                key={index}
                className="bg-white border hover:bg-[#D9F2FF] 4xl:p-12 p-8 flex flex-col h-full"
              >
                <div className="flex flex-col items-start mb-4">
                  <div className="w-16 h-16 flex-shrink-0 mb-4">
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={feature.icon}
                        alt="Employee and Client-centric approach"
                        width={100}
                        height={100}
                        priority
                      />
                    </div>
                  </div>
                  <h3 className="text-[#1F3F69] mt-2 4xl:text-[30px] xl:text-[24px] text-[20px]">{feature.title}</h3>
                </div>
                <p className="text-[#000000] mt-2 4xl:text-[22px] xl:text-[18px] text-[16px]">{feature.description}</p>
              </div>
            ))}
          </div>
          <LearnMore />
        </section>
      </div>

      {/* Stats Section */}
      <section className="bg-[#EDEDED] xl:pt-[83px] xl:pb-[76px] py-[40px]">
        <div
          className="custom-container"
        >
          <div className="">
            <h3 className="text-left 4xl:text-[36px] xl:text-[30px] text-[26px] mb-6 font-[300] max-w-[900px]">
              Unite Your Entire Organization around Delivering an Enhanced
              Customer Experience.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 xl:mt-[64px] mt-[46px]">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-[#0092E0]">
                      {stat.percentage}
                    </span>
                  </div>
                  <p className="text-[#000000] 4xl:text-[22px] xl:text-[18px] text-[16px] lg:w-[70%] md:w-[90%] w-[90%]">{stat.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="custom-container">
        <section className="pb-12 pt-20">
          <h2 className="text-left mb-10 leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px] ">
            Our Salesforce Data Cloud Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-20 xl:gap-12 xl:gap-y-[60px] mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col h-full"
                onMouseEnter={handleMouseEnter(service.id)}
                onMouseLeave={handleMouseLeave(service.id)}
              >
                <div className="mb-4">
                  <div
                    className="w-full h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === service.id ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    <Image
                      src={service.image}
                      alt="Leadership Team"
                      width={0}
                      height={0}
                      style={{
                        objectFit: "cover",
                      }}
                      className="h-full w-full"
                      priority
                    />
                  </div>
                </div>
                <h3 className="h3-bold mb-3 4xl:text-[26px] xl:text-[22px] text-[18px] mt-6">{service.title}</h3>
                <p className="text-[#000000] 4xl:text-[22px] xl:text-[18px] text-[16px] mb-6">{service.description}</p>
                <div className="mt-auto">
                  <LearnMore />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 custom-container">
        <ContactForm title="Take the next step to operational excellence with us." className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] 4xl:w-[80%] xl:w-[70%]" />
      </div>
    </div>
  );
}
