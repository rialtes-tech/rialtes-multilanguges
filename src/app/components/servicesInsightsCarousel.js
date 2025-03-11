"use client";

import Image from "next/image";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Link from "next/link";


export default function servicesInsightsCarousel({ padding }) {
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
    {
      id: 5,
      image: "/images/blog/blog-5-long-thumb.webp",
      category: "SAP SuccessFactors",
      industry: "Human Resources",
      date: "24 Dec 2024",
      url: '/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration',
      title: "How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration",
      description: "Seamless integration between enterprise applications offers improved collaboration, efficiency, and productivity. Integrating SAP SuccessFactors with Microsoft Office 365 combines the strengths of a leading human experience management (HXM) solution and a robust suite of productivity tools.",
    },
    {
      id: 6,
      image: "/images/blog/blog-6-long-thumb.webp",
      category: "Cloud Green Technology",
      industry: "Agriculture",
      date: "17 Sept 2024",
      url: '/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow',
      title: "Agriculture 4.0. How Do Digital Technologies Transform Farming for a Better Tomorrow?",
      description: "Agriculture plays a significant role in India’s growing economy and its future cannot be accomplished without digital tools and technological innovation.",
    },
    // Add more blog objects as needed
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
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
      <div className="carousel-button-group absolute top-0 lg:right-32 right-4 md:mt-4">
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
        className={`w-3 h-1 md:px-8 px-4  mr-3 mb-4 ${active ? "bg-[#134874]" : "bg-[#D1D1D1]"}`}
        onClick={() => onClick()}
      />
    );
  };

  return (
    <section className="relative pb-8 bg-white">
      <div className={"container mx-auto "+ padding ? padding : ''}>
        <div className="flex flex-row justify-between md:mr-24 mr-0">
          <h2 className="text-black mb-6">Insights</h2>
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
          dotListClass="custom-dot-list-style !justify-start !pl-6 flex-wrap"
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
              className={`flex md:flex-row flex-col border border-[#707070] sm:mr-4 mr-6 mb-4 relative group md:min-h-[450px] min-h-[350px] text-white`}
            >
              <div className="min-w-full relative">
                
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority
                  />
                
                <div className="absolute inset-0 p-6 my-4 group-hover:opacity-0">
                  <h4 className="line-clamp-4 md:line-clamp-4">{slide.category}</h4>
                </div>
              </div>

              <div className="absolute inset-0 bg-[#134874] bg-opacity-80 p-6 md:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
                <h4 className="my-4 line-clamp-4 md:line-clamp-none">{slide.category}</h4>
                <div className="flex flex-col justify-between">
                  <p className="line-clamp-4 mb-4">{slide.title}</p>
                  <Link href={'/blog' + slide.url}><span className="font-medium">Learn more &#8594;</span></Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );

}