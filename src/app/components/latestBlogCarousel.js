"use client";

import Image from "next/image";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Link from "next/link";


export default function BlogsCarousel() {
  // if (!slides) {
  const slides = [
    {
    id: 12,
    image: "/images/blog/Agentic Pharma_Blog feature thumb.webp",
    category: "Healthcare",
    industry: "Healthcare",
    date: "30 April 2025",
    url: '/Agentic-Pharma-The-AI-driven-era-of-the-Pharmaceutical-Industry',
    title: "Agentic AI Pharma: Automating Complex Pharma Workflows ",
    description: "Agentic AI pharma simplifies complexity. Goal-driven, adaptive, and context-aware, it manages complex, multi-step workflows with minimal human intervention",
    },

    {
      id: 9,
      image: "/images/blog/jthumb.webp",
      category: "SAP",
      industry: "SAP",
      date: "22 April 2025",
      url: 'insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule',
      title: "Redefining the Future of Enterprise AI with SAP Joule",
      description: "SAP’s generative AI copilot, Joule, designed to enhance organizational efficiency, collaboration, and analysis, marks a major step forward in intelligent automation within SAP systems. ",
    },
    {
      id: 8,
      image: "/images/blog/SAP Business cloud_Carousal.webp",
      category: "General",
      industry: "Generic",
      date: "22 April 2025",
      url: 'insights/blogs/sap-business-data-cloud-the-intelligent-data-foundation-for-ai-driven-business-success',
      title: "SAP Business Data Cloud: The Intelligent Data Foundation for AI-Driven Business Success",
      description: "Businesses increasingly rely on real-time data to drive decisions, optimize operations, and unlock AI-powered insights.",
    },
    {
      id: 1,
      image: "/images/blog/blog-1.webp",
      category: "Salesforce Agentforce",
      industry: "Generic",
      date: "30 Sept 2024",
      url: 'insights/blogs/how-salesforce-agentforce-actually-works',
      title: "How Salesforce Agentforce Actually Works",
      description: "Salesforce Agentforce, although a newer addition to the Salesforce ecosystem, is making rounds, particularly in organizations that deal with large teams of agents, such as sales agents, customer service representatives, and field service personnel.",
    },
    {
      id: 2,
      image: "/images/blog/blog-2.webp",
      category: "Salesforce Agentforce",
      industry: "Generic",
      date: "21 Oct 2024",
      url: 'insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce',
      title: "The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce",
      description: "As businesses scale, the complexity of managing customer interactions multiplies, driving the need for more intelligent and streamlined support systems.  Salesforce Agentforce provides a robust platform for customer service automation, now enhanced by the groundbreaking Atlas Reasoning Engine.",
    },
    {
      id: 3,
      image: "/images/blog/blog-3.webp",
      category: "Salesforce Agentforce",
      industry: "Generic",
      date: "28 Oct 2024",
      url: 'insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters',
      title: "Agents vs. Copilots vs. Bots: What’s the Difference and Why It Matters",
      description: "Tools like Agentforce are redefining how we view digital assistants, bringing distinctions between Agents, Copilots, and Bots to the forefront. The terms are frequently used within artificial intelligence-driven automation and conversational interfaces, each serving a distinct purpose.",
    },
    {
      id: 4,
      image: "/images/blog/blog-4.webp",
      category: "Salesforce Agentforce",
      industry: "Generic",
      date: "25 Nov 2024",
      url: 'insights/blogs/agentforce-testing-center-redefining-ai-testing-with-synthetic-data',
      title: "Agentforce Testing Center: Redefining AI Testing with Synthetic Data",
      description: "Salesforce has introduced a new feature called Testing Center within its agentic AI platform, Agentforce. This addition allows enterprise users to test and monitor AI agents before deploying them in production.",
    },
    {
      id: 5,
      image: "/images/blog/blog-5.webp",
      category: "SAP SuccessFactors",
      industry: "Human Resources",
      date: "24 Dec 2024",
      url: 'insights/blogs/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration',
      title: "How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration",
      description: "Seamless integration between enterprise applications offers improved collaboration, efficiency, and productivity. Integrating SAP SuccessFactors with Microsoft Office 365 combines the strengths of a leading human experience management (HXM) solution and a robust suite of productivity tools.",
    },
    {
      id: 6,
      image: "/images/blog/blog-6.webp",
      category: "Cloud Green Technology",
      industry: "Agriculture",
      date: "17 Sept 2024",
      url: 'insights/blogs/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow',
      title: "Agriculture 4.0. How Do Digital Technologies Transform Farming for a Better Tomorrow?",
      description: "Agriculture plays a significant role in India’s growing economy and its future cannot be accomplished without digital tools and technological innovation.",
    },
    // Add more blog objects as needed
  ];
  // }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 575 },
      items: 2,
      centerMode: true,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
      centerMode: true,
    },
  };

  const ButtonGroup = ({ next, previous, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="flex carousel-button-group absolute top-0 xl:right-32 right-6 md:mt-4">
        <button className={currentSlide === 0 ? 'disable bg-white p-2 mr-2 group transition-all duration-300' : 'bg-white p-2 mr-2 group transition-all duration-300'} onClick={() => previous()}>
          <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#707070" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#C3C3C3]">
            <path d="M3 7.5L11 0V15L3 7.5Z" fill="none" className="transition-all duration-300 group-hover:fill-[#C3C3C3] hover:fill-[#C3C3C3]" />
          </svg>
        </button>
        <button className="bg-white p-2 group transition-all duration-300" onClick={() => next()}>
          <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#707070" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#C3C3C3]">
            <path d="M12 7.5L4 0V15L12 7.5Z" fill="none" className="transition-all duration-300 group-hover:fill-[#C3C3C3]" />
          </svg>
        </button>
      </div>
    );
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
    return (
      <button
        className={`w-3 h-1 md:px-8 px-4 mr-3 mb-4 ${active ? "bg-[#134874]" : "bg-[#D1D1D1]"}`}
        onClick={() => onClick()}
      />
    );
  };

  return (
    <section className="relative sm:pb-10 pb-16 bg-white">
      <div className=" mx-auto">
        <div className="flex flex-row justify-between md:mr-24 mr-0">
          <h2 className="text-black mb-6">Latest Blogs</h2>
        </div>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style !justify-start flex-wrap"
          itemClass="carousel-item-padding-40-px"
          partialVisible={true}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          renderDotsOutside={true}
          customDot={<CustomDot />}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex flex-col sm:basis-1/4 border border-[#707070] mr-6 mb-4 h-full group"
            >

              <div className="max-h-[300px]">
              <Link href={'/' + slide.url}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  priority
                  className="cursor-pointer"
                />
                </Link>
                <div className="inset-0 bg-[#0092E053] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col justify-between text-black py-4 px-6 flex-grow transition duration-300 ease-in-out group-hover:bg-[#F0F0F0]">
                <div className="flex flex-col">
                  <div><span className="text-[#0092E0]">{slide.category}</span> | {slide.date}</div>
                  <Link href={'/'+slide.url}><h5 className="my-3 sm:line-clamp-4 line-clamp-3 font-bold">{slide.title}</h5></Link>
                </div>
                <p className="line-clamp-4">{slide.description}</p>
              </div>

            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}