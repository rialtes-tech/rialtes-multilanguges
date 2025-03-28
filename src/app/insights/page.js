"use client";
// pages/insights.js
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ContactForm from "../components/contactform";

export default function InsightsPage() {
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
    <div className="min-h-scree">
      <Head>
        <title>Insights | Blogs, Case Studies and Events</title>
        <meta
          name="description"
          content="Explore our latest insights, blogs, case studies and upcoming events"
        />
      </Head>

      {/* Hero Section with Deep Blue Gradient Background */}
      <section className="relative h-[350px] md:h-[450px] xl:h-[650px] bg-[url('/images/insights/insight-header-banner.webp')] bg-cover bg-center overflow-hidden">
        <div
          className="
        container h-full
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="absolute inset-0 opacity-70"></div>
          <div className="absolute inset-0 opacity-50"></div>
          <div className="container mx-auto h-full flex flex-col justify-center">
            <h1 className="xl:text-[#000000] text-white max-w-2xl">INSIGHTS</h1>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="mb-16  md:mt-[100px] xl:mt-[100px] lg:max-w-[800px] xl:max-w-[1600px]">
          <h2 className="text-[#000000] text-[20px] sm:text-[26px] py-6 my-8 max-w-4xl">
            Take a tour of our insights section to see our latest blogs, press
            releases, case studies, news coverage, updates and upcoming events.
          </h2>

          <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-6">
            <h2>Featured Blog</h2>
            <div className="hidden sm:block">
              {" "}
              <Link
                href="/insights/blogs"
                className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-3 px-8 transition duration-300 relative overflow-hidden"
              >
                <span className="inline-flex items-center">See All Blogs</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:flex-col xl:flex-row">
            <div
              className="border w-full xl:w-2/5 lg:w-full border-gray-200 overflow-hidden"
              onMouseEnter={handleMouseEnter("blog1")}
              onMouseLeave={handleMouseLeave("blog1")}
              onClick={handleClick("/insights/blogs/how-salesforce-agentforce-actually-works")}
              style={{ cursor: "pointer" }}
            >
              <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden">
                <div
                  className="h-full w-full"
                  style={{
                    transition: "transform 0.3s ease",
                    transform:
                      hoveredBlog === "blog1" ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <Image
                    src="/images/blog/blog-1.webp"
                    alt="Green computing illustration showing tree and circuit integration"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div
                className="p-6 h-full"
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredBlog === "blog1" ? "#f1f1f1" : "transparent",
                }}
              >
                <div className="flex flex-row items-center mb-4">
                  <span className="text-[#0092E0] font-medium">
                  Salesforce Agentforce
                  </span>
                  <span className="mx-2">|</span>
                  <span className="text-sm">30 Sept 2024</span>
                </div>

                <h3 className="mb-3">
                How Salesforce Agentforce Actually Works
                </h3>

                <p className="mb-4">
                Salesforce Agentforce, although a newer addition to the Salesforce ecosystem, is making rounds, particularly in organizations that deal with large teams of agents, such as sales agents, customer service representatives, and field service personnel.
                </p>

                <Link
                  href="/insights/blogs/how-salesforce-agentforce-actually-works"
                  className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group"
                >
                  <span>Read More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="flex flex-col space-y-6 w-full xl:w-3/5 lg:w-full">
              <div
                className="border border-gray-200 overflow-hidden flex flex-col sm:flex-row h-auto sm:h-[400px]"
                onMouseEnter={handleMouseEnter("blog2")}
                onMouseLeave={handleMouseLeave("blog2")}
                onClick={handleClick("/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce")}
                style={{ cursor: "pointer" }}
              >
                <div className="relative h-48 sm:h-auto sm:w-1/2 overflow-hidden">
                  <div
                    className="h-full w-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "blog2" ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/blog/blog-2.webp"
                      alt="Diversity illustration"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <div
                  className="p-6 sm:p-8 sm:w-1/2 bg-white flex flex-col justify-between"
                  style={{
                    transition: "background-color 0.3s ease",
                    backgroundColor:
                      hoveredBlog === "blog2" ? "#f1f1f1" : "transparent",
                  }}
                >
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-[#0092E0] text-sm font-medium">
                    Salesforce Agentforce
                    </span>
                    <span className="text-gray-500 mx-2">|</span>
                    <span className="text-gray-600 text-sm">21 Oct 2024</span>
                  </div>

                  <h3 className="mb-3">
                  The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce
                  </h3>

                  <p className="mb-2">
                  As businesses scale, the complexity of managing customer interactions multiplies, driving the need for more intelligent and streamlined support systems.  Salesforce Agentforce provides a robust platform for customer service automation.
                  </p>

                  <div className="mt-auto">
                    <Link
                      href="/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce"
                      className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group"
                    >
                      <span>Read More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="border border-gray-200 overflow-hidden flex flex-col sm:flex-row h-auto sm:h-[400px]"
                onMouseEnter={handleMouseEnter("blog3")}
                onMouseLeave={handleMouseLeave("blog3")}
                onClick={handleClick("/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters")}
                style={{ cursor: "pointer" }}
              >
                <div className="relative h-48 sm:h-auto sm:w-1/2 overflow-hidden">
                  <div
                    className="h-full w-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "blog3" ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/blog/blog-3.webp"
                      alt="Diversity illustration"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <div
                  className="p-6 sm:p-8 sm:w-1/2 bg-white flex flex-col justify-between"
                  style={{
                    transition: "background-color 0.3s ease",
                    backgroundColor:
                      hoveredBlog === "blog3" ? "#f1f1f1" : "transparent",
                  }}
                >
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-[#0092E0] text-sm font-medium">
                      Salesforce Agentforce
                    </span>
                    <span className="text-gray-500 mx-2">|</span>
                    <span className="text-gray-600 text-sm">28 Oct 2024</span>
                  </div>

                  <h3 className="mb-3">
                    Agents vs. Copilots vs. Bots: What&apos;s the Difference and
                    Why It Matters
                  </h3>

                  <p className="mb-2">
                    Tools like Agentforce are redefining how we view digital
                    assistants, bringing distinctions between Agents, Copilots,
                    and Bots to the forefront.
                  </p>

                  <div className="mt-auto">
                    <Link
                      href="/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters"
                      className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group"
                    >
                      <span>Read More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block sm:hidden mt-12">
            {" "}
            <Link
              href="/insights/blogs"
              className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-3 px-8 transition duration-300 relative overflow-hidden"
            >
              <span className="inline-flex items-center">See All Blogs</span>
            </Link>
          </div>
        </section>
      </div>

      {/* Case Studies Section */}

      <section className="mt-16 py-16 bg-[#f1f1f1]">
        <div
          className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="lg:max-w-[800px]  xl:max-w-[1600px]">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-6">
              <div>
                <h2 className="mb-1">Case Studies</h2>
                <p>Find our latest work and collaborations</p>
              </div>

              <div className="hidden sm:block">
                <Link
                  href="/insights/case-studies"
                  className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-3 px-8 transition duration-300 relative overflow-hidden"
                >
                  <span className="inline-flex items-center">
                    See All Case Studies
                  </span>
                </Link>
              </div>
            </div>

            <div
              className="border h-full border-gray-200 overflow-hidden mb-6 flex flex-col md:flex-row"
              onMouseEnter={handleMouseEnter("case-study-1")}
              onMouseLeave={handleMouseLeave("case-study-1")}
              onClick={handleClick("/insights/case-studies/salesforce-health-cloud-prior-authorization")}
              style={{
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                backgroundColor:
                  hoveredBlog === "case-study-1" ? "#f1f1f1" : "#ffffff",
              }}
            >

              <div className="md:w-2/5 h-[300px] md:h-[400px] overflow-hidden">
                  <div
                    className="h-full w-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "case-study-1"
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/case-studies/case-study-8_thumb.webp"
                      alt="Diversity illustration"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
              </div>
              <div className="w-full h-full">
                <div className="md:w-3/5 p-6 xl:p-12 max-w-2xl">
                  <div className="flex flex-row items-center mb-3">
                    <span className="text-[#0092E0]">
                      Healthcare and Life Sciences
                    </span>{" "}
                    <span className="mx-2">|</span>
                    <span className="text-sm">25 Oct 2024</span>
                  </div>
                    <h3 className="mb-3">
                    Salesforce Health Cloud, Prior Authorization
                    </h3>
                  <p>
                    A global medical technology company that develops and
                    manufactures innovative products used by doctors to
                    diagnose, treat, and monitor people with cardiovascular and
                    endovascular conditions.
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              <div
                className="border border-gray-200 bg-[#ffffff] overflow-hidden"
                onMouseEnter={handleMouseEnter("case-study-2")}
                onMouseLeave={handleMouseLeave("case-study-2")}
                onClick={handleClick("/insights/case-studies/streamlined-devops-using-copado-and-salesforce")}
                style={{
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredBlog === "case-study-2" ? "#f1f1f1" : "#ffffff",
                }}
              >
                <div className="h-80 overflow-hidden">
                  <div
                    className="h-full "
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "case-study-2"
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/case-studies/case study 3_thumb_Carousal_n 1.webp"
                      alt="Diversity illustration"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-row items-center mb-3">
                    <span className="text-[#0092E0]">Manufacturing</span>{" "}
                    <span className="mx-2">|</span>
                    <span className="text-sm">8 Jan 2025</span>
                  </div>
                  <h3 className="mb-2">
                    Streamlined DevOps using Copado and Salesforce
                  </h3>
                  <p className="">
                    A leading manufacturer that specializes in building
                    innovative materials for residential and commercial
                    construction projects.
                  </p>
                </div>
              </div>

              <div
                className="border border-gray-200 bg-[#ffffff] overflow-hidden"
                onMouseEnter={handleMouseEnter("case-study-3")}
                onMouseLeave={handleMouseLeave("case-study-3")}
                onClick={handleClick("/insights/case-studies/realForce-banking-module-ach")}
                style={{
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredBlog === "case-study-3" ? "#f1f1f1" : "#ffffff",
                }}
              >
                <div className="h-80 overflow-hidden">
                  <div
                    className="h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "case-study-3"
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/case-studies/case study 2_thumb_Carousal_n 1.webp"
                      alt="Diversity illustration"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-row items-center mb-3">
                    <span className="text-[#0092E0]">Real Estate</span>{" "}
                    <span className="mx-2">|</span>
                    <span className="text-sm">22 Dec 2024</span>
                  </div>
                  <h3 className="mb-2">RealForce Banking Module - ACH</h3>
                  <p className="">
                    A multifamily real estate firm based out of the US that
                    specializes in managing and investing in multifamily
                    properties.
                  </p>
                </div>
              </div>

              <div
                className="border border-gray-200 bg-[#ffffff] overflow-hidden"
                onMouseEnter={handleMouseEnter("case-study-4")}
                onMouseLeave={handleMouseLeave("case-study-4")}
                onClick={handleClick("/insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap")}
                style={{
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredBlog === "case-study-4" ? "#f1f1f1" : "#ffffff",
                }}
              >
                <div className="h-80 overflow-hidden">
                  <div
                    className="h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "case-study-4"
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/case-studies/case study 1_thumb_Carousal 2.webp"
                      alt="Diversity illustration"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-row items-center mb-3">
                    <span className="text-[#0092E0]">Healthcare</span>{" "}
                    <span className="mx-2">|</span>
                    <span className="text-sm">17 Nov 2024</span>
                  </div>
                  <h3 className="mb-2">
                    Automate Order Processing using Mulesoft for Salesforce
                    Health Cloud and SAP
                  </h3>
                  <p className="">
                    A global medical technology company that develops and
                    manufactures
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="block sm:hidden mt-12">
            {" "}
            <Link
              href="/insights/case-studies"
              className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-3 px-8 transition duration-300 relative overflow-hidden"
            >
              <span className="inline-flex items-center">
                See All Case Studies
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      {/* <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="mt-16 lg:max-w-[800px]  xl:max-w-[1600px]">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-normal">Events</h2>
            <div className="hidden sm:block">
              <Link
                href="/events"
                className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-3 px-8 transition duration-300 relative overflow-hidden"
              >
                <span className="inline-flex items-center">See All Events</span>
              </Link>
            </div>
          </div>

          <div className="">
            <div
              className="w-full flex flex-col md:flex-row pt-6"
              onMouseEnter={handleMouseEnter("event-1")}
              onMouseLeave={handleMouseLeave("event-1")}
              onClick={handleClick("/about-us")}
              style={{
                cursor: "pointer",
                borderBottom: "1px solid #000000",
                transition: "background-color 0.3s ease",
                backgroundColor:
                  hoveredBlog === "event-1" ? "#f1f1f1" : "transparent",
              }}
            >
              <div className="w-full md:w-2/6 flex flex-row md:flex-col xl:flex-row">
                <div className="w-1/2 overflow-hidden mb-6">
                  <div
                    className="w-full h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "event-1" ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/insights/open-test-event-1.webp"
                      alt="Leadership Team"
                      width={0}
                      height={0}
                      sizes="80vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      priority
                    />
                  </div>
                </div>
                <div className="inset-0 flex flex-col w-1/2 items-center md:items-start xl:items-center justify-start p-3 pt-0 mb-4 md:mb-0 md:mr-4">
                  <div className="text-4xl md:text-4xl font-bold text-[#0092E0]">
                    18-21
                  </div>
                  <div className="sm:text-left">
                    <div className="text-sm md:text-base mt-1">November</div>
                    <div className="text-sm md:text-base">2024</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/6 flex flex-col md:flex-col xl:flex-row md:gap-8 mb-4 md:mb-0">
                <div className="max-w-[650px] mx-0 md:mx-6 pt-0">
                  <h3 className="font-bold text-[#134874] mb-4">
                    OpenText World 2024
                  </h3>
                  <p className="mb-4">
                    The digital landscape is evolving at a lightning pace, and
                    in this scenario, it is imperative for businesses to
                    accelerate their transformation journey by keeping
                    automation and
                  </p>
                  <h3 className="sm:text-[20px]">
                    The Venetian, Las Vegas | Booth #306
                  </h3>
                </div>

                <div className="flex items-center sm:mb-[100px] md:mb-[0px] mx-0 md:mx-6 mt-3 md:mt-0">
                  <Link
                    href="/events/opentext-world"
                    className="text-[#0092E0] font-semibold"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="w-full flex flex-col md:flex-row pt-6"
              onMouseEnter={handleMouseEnter("event-2")}
              onMouseLeave={handleMouseLeave("event-2")}
              onClick={handleClick("/about-us")}
              style={{
                cursor: "pointer",
                borderBottom: "1px solid #000000",
                transition: "background-color 0.3s ease",
                backgroundColor:
                  hoveredBlog === "event-2" ? "#f1f1f1" : "transparent",
              }}
            >
              <div className="w-full md:w-2/6 flex flex-row md:flex-col xl:flex-row">
                <div className="w-1/2 overflow-hidden mb-6">
                  <div
                    className="w-full h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "event-2" ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/insights/aws-event-2.webp"
                      alt="Leadership Team"
                      width={0}
                      height={0}
                      sizes="80vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      priority
                    />
                  </div>
                </div>
                <div className="inset-0 flex flex-col w-1/2 items-center md:items-start xl:items-center justify-start p-3 pt-0 mb-4 md:mb-0 md:mr-4">
                  <div className="text-4xl md:text-4xl font-bold text-[#0092E0]">
                    2-6
                  </div>
                  <div className="sm:text-left">
                    <div className="text-sm md:text-base mt-1">December</div>
                    <div className="text-sm md:text-base">2024</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/6 flex flex-col md:flex-col xl:flex-row md:gap-8 mb-4 md:mb-0">
                <div className="max-w-[650px] mx-0 md:mx-6 pt-0">
                  <h3 className="font-bold text-[#134874] mb-4">
                    AWS re:Invent 2024
                  </h3>
                  <p className="mb-4">
                    The MedTech Conference is a global hub for the medical
                    technology sector, bringing together forward-thinking
                    professionals, industry leaders, and MedTech innovators.
                  </p>
                  <h3 className="sm:text-[20px]">Las Vegas, NV | Booth #779</h3>
                </div>

                <div className="flex items-center sm:mb-[100px] md:mb-[0px] mx-0 md:mx-6 mt-3 md:mt-0">
                  <Link
                    href="/events/opentext-world"
                    className="text-[#0092E0] font-semibold"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="w-full flex flex-col md:flex-row pt-6"
              onMouseEnter={handleMouseEnter("event-3")}
              onMouseLeave={handleMouseLeave("event-3")}
              onClick={handleClick("/about-us")}
              style={{
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                backgroundColor:
                  hoveredBlog === "event-3" ? "#f1f1f1" : "transparent",
              }}
            >
              <div className="w-full md:w-2/6 flex flex-row md:flex-col xl:flex-row">
                <div className="w-1/2 overflow-hidden mb-6">
                  <div
                    className="w-full h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "event-3" ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/insights/world-economy-event-2.webp"
                      alt="Leadership Team"
                      width={0}
                      height={0}
                      sizes="80vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      priority
                    />
                  </div>
                </div>
                <div className="inset-0 flex flex-col w-1/2 items-center md:items-start xl:items-center justify-start p-3 pt-0 mb-4 md:mb-0 md:mr-4">
                  <div className="text-4xl md:text-4xl font-bold text-[#0092E0]">
                    15-19
                  </div>
                  <div className="sm:text-left">
                    <div className="text-sm md:text-base mt-1">January</div>
                    <div className="text-sm md:text-base">2025</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/6 flex flex-col md:flex-col xl:flex-row md:gap-8 mb-4 md:mb-0">
                <div className="max-w-[650px] mx-0 md:mx-6 pt-0">
                  <h3 className="font-bold text-[#134874] mb-4">
                    World Economic Forum, Davos
                  </h3>
                  <p className="mb-4">
                    In the wake of generative AI's mainstream adoption,
                    organizations worldwide grappled with its impact in 2023.
                    Now a year later at Davos, a deeper understanding of AI's
                  </p>
                  <h3 className="sm:text-[20px]">
                    Toronto, Canada | Booth #628
                  </h3>
                </div>

                <div className="flex items-center sm:mb-[100px] md:mb-[0px] mx-0 md:mx-6 mt-3 md:mt-0">
                  <Link
                    href="/events/opentext-world"
                    className="text-[#0092E0] font-semibold"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="block sm:hidden mt-12">
            {" "}
            <Link
              href="/events"
              className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-3 px-8 transition duration-300 relative overflow-hidden"
            >
              <span className="inline-flex items-center">See All Events</span>
            </Link>
          </div>
        </section>
      </div> */}

      {/* Webinar Section */}
      {/* <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="mt-16 mb-16 lg:max-w-[800px]  xl:max-w-[1600px]">
          <div className="flex flex-col justify-between items-start md:flex-row mb-8">
            <h2 className="text-3xl font-normal mb-2 md:mb-0">Webinars</h2>
            <div className="hidden sm:block">
              <Link
                href="/events"
                className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-3 px-8 transition duration-300 relative overflow-hidden"
              >
                <span className="inline-flex items-center">
                  See All Webinars
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <div
              className="border border-gray-200 overflow-hidden bg-white"
              onMouseEnter={handleMouseEnter("webinar-1")}
              onMouseLeave={handleMouseLeave("webinar-1")}
              onClick={handleClick("/about-us")}
              style={{
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                backgroundColor:
                  hoveredBlog === "webinar-1" ? "#f1f1f1" : "transparent",
              }}
            >
              <div className="">
                <div className="w-full overflow-hidden">
                  <div
                    className="w-full h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "webinar-1"
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/insights/sap-s4-hana-webinar-1.webp"
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
              </div>
              <div
                className="p-6"
              // style={{ backgroundColor: isHovered ? "#f1f1f1" : "ffffff" }}
              >
                <h3 className=" text-[#134874] mb-4 min-h-[4rem]">
                  SAP S/4 HANA: Sourcing and Procurement in S/4 HANA Public
                  Cloud
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="font-medium">November 12, 2024</span>
                    <span className="mx-2">|</span>
                    <span>10:00 AM CST</span>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold">Sapana Chauhan</div>
                    <div className="">Associate Software Engineer</div>
                  </div>
                </div>
                <Link
                  href="/blog/diversity"
                  className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group"
                >
                  <span>Register Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div
              className="border border-gray-200 overflow-hidden bg-white"
              onMouseEnter={handleMouseEnter("webinar-2")}
              onMouseLeave={handleMouseLeave("webinar-2")}
              onClick={handleClick("/about-us")}
              style={{
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                backgroundColor:
                  hoveredBlog === "webinar-2" ? "#f1f1f1" : "transparent",
              }}
            >
              <div className="">
                <div className="w-full overflow-hidden">
                  <div
                    className="w-full h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "webinar-2"
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/insights/salesforce-webinar-2.webp"
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
              </div>
              <div className="p-6">
                <h3 className="text-[#134874] mb-4 min-h-[4rem]">
                  Salesforce CPQ: Bundle Configuration and Revenue Cloud Rules
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="font-medium">November 7, 2024</span>
                    <span className="mx-2">|</span>
                    <span>10:00 AM CST</span>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold">Divya Agrawal</div>
                    <div className="">Associate Software Engineer</div>
                  </div>
                </div>
                <Link
                  href="/blog/diversity"
                  className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group"
                >
                  <span>Register Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div
              className="border border-gray-200 overflow-hidden bg-white"
              onMouseEnter={handleMouseEnter("webinar-3")}
              onMouseLeave={handleMouseLeave("webinar-3")}
              onClick={handleClick("/about-us")}
              style={{
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                backgroundColor:
                  hoveredBlog === "webinar-3" ? "#f1f1f1" : "transparent",
              }}
            >
              <div className="">
                <div className="w-full overflow-hidden">
                  <div
                    className="t w-full h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "webinar-3"
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/insights/sap-business-webinar-3.webp"
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
              </div>
              <div className="p-6">
                <h3 className="text-[#134874] mb-4 min-h-[4rem]">
                  SAP Business AI: Setting Up Joule for SAP S/4 HANA Cloud
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="font-medium">November 5, 2024</span>
                    <span className="mx-2">|</span>
                    <span>10:00 AM CST</span>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold">Kushagra Shah</div>
                    <div className="">Senior Principal Consultant, SAP</div>
                  </div>
                </div>
                <Link
                  href="/blog/diversity"
                  className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group"
                >
                  <span>Register Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="block sm:hidden mt-12">
            {" "}
            <Link
              href="/events"
              className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-3 px-8 transition duration-300 relative overflow-hidden"
            >
              <span className="inline-flex items-center">See All Webinars</span>
            </Link>
          </div>
        </section>
      </div> */}

      {/* Contact Form Section */}
      <div
        className="py-16
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]
        text-black"
      >
        <ContactForm title={'Take the next step to operational excellence with us.'} className={'max-w-4xl'} />
      </div>
    </div>
  );
}
