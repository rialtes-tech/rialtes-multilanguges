"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
    image: "/images/data-cloud/data-cloud-consulting.webp",
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
  const router = useRouter();

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

  const handleClick = (blogName) => {
    return () => {
      if (isRouterReady) {
        router.push(blogName);
      }
    };
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Webinar | Rialtes</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/data-cloud/salesforce-data-cloud-header.webp"
          alt="Webinar Header"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
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
          <div className="container mx-auto h-full flex flex-col justify-center items-end">
            <div className="w-full lg:w-4/5 xl:w-1/2">
              <h3 className="text-[#000000] text-[300] font-medium mb-2 text-left">
                Data Cloud
              </h3>
              <h1 className="text-[#000000] max-w-2xl">
                Harness the Potential of Salesforce Data Cloud
              </h1>
              <h3 className="max-w-3xl">
                Drive automation, predictive, and generative AI, as well as
                analytics, within the world’s leading AI-powered CRM
              </h3>
              <div className="h-24 mb-4 relative overflow-hidden mt-6">
                <div className="w-full">
                  <Image
                    src="/images/data-cloud/salesforce-partner.webp"
                    alt="Leadership Team"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "25%",
                      height: "25%",
                      objectFit: "cover",
                    }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        <section className="pt-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-[#000000] md:max-w-xl xl:max-w-4xl mb-8">
              What Is Salesforce Data Cloud?
            </h2>
            <p className="md:max-w-xl xl:max-w-4xl mb-8">
              Businesses are flooded with vast amounts of data from an
              increasing array of systems, sources, and platforms. The sheer
              scale and diversity of this data can be overwhelming, leaving
              organizations to manage and navigate through countless records
              daily.
            </p>
            <p className="md:max-w-xl xl:max-w-4xl">
              Salesforce Data Cloud is designed to assist businesses in
              consolidating customer data from various touchpoints. Combining
              data from multiple sources helps create a unified 360-degree view
              of each customer, fostering more personalized and effective
              marketing campaigns.
            </p>
          </div>
        </section>
      </div>

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
        <section className="py-8 md:max-w-3xl xl:max-w-6xl my-10">
          <h2 className="text-[#000000] max-w-4xl mb-10">
            Creating Personalized & Impactful Customer Experiences for Your
            Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {featureBoxes.map((feature, index) => (
              <div
                key={index}
                className="bg-white border hover:bg-[#D9F2FF] p-12 flex flex-col h-full"
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
                  <h3 className="text-[#1F3F69] mt-2">{feature.title}</h3>
                </div>
                <p className="text-[#000000] mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <section className="bg-gray-200 py-8">
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
          <div className="max-w-5xl">
            <h3 className="text-left text-2xl md:text-3xl mb-6 font-[300] max-w-[700px]">
              Unite Your Entire Organization around Delivering an Enhanced
              Customer Experience.
            </h3>
            <div className="flex flex-wrap justify-between gap-8 md:gap-16 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-left  max-w-52">
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-[#0092E0]">
                      {stat.percentage}
                    </span>
                  </div>
                  <p className="text-[#000000]">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
        <section className="py-12 md:max-w-3xl xl:max-w-7xl">
          <h2 className="text-left mb-10">
            Our Salesforce Data Cloud Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-12 xl:gap-28">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col"
                onMouseEnter={handleMouseEnter(service.id)}
                onMouseLeave={handleMouseLeave(service.id)}
              >
                <div className="h-48 bg-gray-300 mb-4 relative overflow-hidden">
                  <div
                    className="w-full"
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
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      priority
                    />
                  </div>
                </div>
                <h3 className="h3-bold mb-3">{service.title}</h3>
                <p className="text-[#000000]">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Contact Form Section */}
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
        <section className="py-16 lg:max-w-[800px]  xl:max-w-[1600px]">
          <div className="container max-w-3xl">
            <h2 className="text-gray-800 mb-4 md:mb-8">
              Take the next step to operational excellence with us.
            </h2>

            <form className="max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Surname*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Job Title*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <textarea
                  placeholder="Message*"
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <div>
                <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
                  Let's Begin
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
