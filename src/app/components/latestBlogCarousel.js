"use client";

import Image from "next/image";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Link from "next/link";


export default function BlogsCarousel() {
  // if (!slides) {
  const slides = [
    
    {
    id: 27,
    image: "/images/blog/sap-cpi-feature-thumb.webp",
    category: "SAP",
    industry: "Generic",
    date: "Aug. 26, 2025",
    url: 'insights/blogs/sap-pi-po-to-cpi-migration-complete-guide',
    title: "Migrating from SAP PI/PO to SAP BTP Integration Suite (CPI)",
    description: "Enterprises can’t afford disconnected systems anymore; integration is the backbone of true digital transformation.For years, SAP Process Integration (PI) and Process Orchestration (PO) handled this role, connecting SAP and non-SAP landscapes.",
  },

    {
    id: 26,
    image: "/images/blog/big-reimage-slider.webp", 
    category: "Artificial Intelligence",
    industry: "Generic",
    date: "25 August 2025",
    url: 'insights/blogs/reimagine-enterprise-using-agentic-ai-systems',
    title: "Reimagine Enterprise Using Agentic AI Systems",
    description: "The way humans interact with AI is evolving. From isolated tools that do one thing well to intelligent agents that can plan trips, monitor logistics, assist the elderly, or manage inventory across global supply chains",
  },
   {
    id: 25,
    image: "/images/blog/small-slider.webp", 
    category: "Agentforce",
    industry: "Generic",
    date: "22 August 2025",
    url: 'insights/blogs/from-factory-to-feedback-how-agentforce-ai-elevates-customer-experience-in-manufacturing',
    title: "From Factory to Feedback: How Agentforce AI Elevates Customer Experience in Manufacturing",
    description: "Manufacturers today operate in a pressure cooker. You’re dealing with fluctuating demand, global supply chain fragility, rising customer expectations, and shrinking margins. It's not just about making products anymore",
  },
     {
    id: 24,
    image: "/images/blog/sustain-small-slider.webp", 
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "21 August 2025",
    url: 'insights/blogs/how-ai-is-powering-the-sustainable-future-of-our-planet',
    title: "How AI Is Powering the Sustainable Future of Our Planet",
    description: "We must reduce greenhouse gas emissions and transition to renewable energy sources to protect our planet and future generations. However, the hope for a sustainable future lies in conservation and innovation. Here’s how.",
  },
    {
    id: 23,
    image: "/images/blog/Agentforce-featured-blog.webp", 
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "29 July 2025",
    url: 'insights/blogs/how-agentforce-3-is-reshaping-automotive-manufacturing',
    title: "How Agentforce 3.0 is Reshaping Automotive Manufacturing",
    description: "Salesforce has launched Agentforce 3.0 — and it’s a significant leap forward. Agentforce has been a key part of Salesforce's AI strategy since its launch in September 2024.",
  },
   {
    id: 15,
    image: "/images/blog/blog-slider.webp", 
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "25 July 2025",
    url: 'insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters',
    title: "Agents vs. Copilots vs. Bots: A Strategic Comparison That Drives AI Adoption Right",
    description: "Tools like Agentforce are redefining how we view digital assistants, bringing distinctions between Agents, Copilots, and Bots to the forefront. The terms are frequently used within artificial intelligence-driven automation and conversational interfaces, each serving a distinct purpose.",
  },

     {
     id: 14,
    image: "/images/blog/slider.webp",
    category: "Agentforce",
    industry: "General",
    date: "21 July 2025",
    url: 'insights/blogs/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions',
    title: "Agentforce for Manufacturing: Exceed Customer Expectations with AI-Powered Salesforce Solutions",
    description: "We know that Artificial intelligence has transformed how we work, significantly boosting productivity by automating manual tasks and allowing teams to focus on high-value deliverables. With customer expectations soaring, they demand seamless, personalized experiences and instant support",
  },

  

    {
     id: 13,
    image: "/images/blog/agentexchange-Blog-feature-thumb.webp",
    category: "Agentforce",
    industry: "General",
    date: "02 July 2025",
    url: 'insights/blogs/discover-agentexchange-your-trusted-marketplace-for-agentforce-success',
    title: "Discover AgentExchange: Your Trusted Marketplace for Agentforce Success",
    description: "Salesforce has once again raised the bar in AI-driven business solutions with the launch of AgentExchange, ",
  },

  
     {
     id: 12,
    image: "/images/blog/Pharma Jewel of North India_Blog feature thumb.webp",
    category: "General",
    industry: "Manufacturing",
    date: "01 July 2025",
    url: 'insights/blogs/himachal-pradesh-the-pharma-jewel-of-north-india-with-the-largest-pharma-manufacturing-facilities',
    title: "Himachal Pradesh: The Pharma Jewel of North India with the Largest Pharma Manufacturing Facilities",
    description: "India’s rise as a pharmaceutical powerhouse on the global stage is remarkable.",
  },
{
    id: 11,
    image: "/images/blog/signavio-blog-feature-thumb.webp",
    category: "SAP Signavio",
    industry: "Generic",
    date: "Jun. 16, 2025",
    url: 'insights/blogs/why-sap-signavio-is-critical-for-a-successful-s4hana-implementation',
    title: "Why SAP Signavio is Critical for a Successful S/4HANA Implementation",
    description: "Ready for S/4HANA Implementation? Rialtes’ Voyager+ and SAP Signavio make the journey smooth, transparent, and built for scalable enterprise success.",
  },
  {
      id: 10,
      image: "/images/blog/Agentic Pharma_Blog feature thumb.webp",
      category: "AI",
      industry: "Pharma",
      date: "30 May 2025",
      url: 'insights/blogs/agentic-pharma-the-ai-driven-era-of-the-pharmaceutical-industry',
      title: "Agentic Pharma - The AI-driven era of the Pharmaceutical Industry",
    description:"The pharmaceutical industry has long been a pioneer in adopting new technologies, from cutting-edge lab equipment to intelligent data management systems.",
    },

    {
      id: 9,
      image: "/images/blog/sap-ariba-for-carousel.webp",
      category: "SAP",
      industry: "Manufacturing",
      date: "29 May 2025",
      url: "insights/blogs/how-does-sap-ariba-streamline-direct-and-indirect-procurement-needs",
      title: "How does SAP Ariba Streamline Direct and Indirect Procurement Needs?",
      description: "The term Procurement encompasses the entire process of acquiring goods or services, from identifying needs to supplying them.Solutions like Guided Sourcing enable companies to conduct market research,"


    },
    {
      id: 8,
      image: "/images/blog/successfactor-for-carousel.webp",
      category: "SAP SuccessFactors",
      industry: "Human Resources",
      date: "28 May 2025",
      url: "insights/blogs/how-sap-successfactors-integrations-enhance-hr-and-payroll-operations",
      title: "How SAP SuccessFactors Integrations Enhance HR and Payroll Operations",
      description: "Are payroll challenges slowing you down? SAP SuccessFactors turns payroll management from a hassle into a streamlined process that boosts employee satisfaction."
    },
    
    {
      id: 7,
      image: "/images/blog/jcarosel.webp",
      category: "SAP",
      industry: "SAP",
      date: "25 April 2025",
      url: 'insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule',
      title: "Redefining the Future of Enterprise AI with SAP Joule",
      description: "SAP’s generative AI copilot, Joule, designed to enhance organizational efficiency, collaboration, and analysis, marks a major step forward in intelligent automation within SAP systems. ",
    },
    {
      id: 6,
      image: "/images/blog/SAP Business cloud_Carousal.webp",
      category: "General",
      industry: "Generic",
      date: "22 April 2025",
      url: 'insights/blogs/sap-business-data-cloud-the-intelligent-data-foundation-for-ai-driven-business-success',
      title: "SAP Business Data Cloud: The Intelligent Data Foundation for AI-Driven Business Success",
      description: "Businesses increasingly rely on real-time data to drive decisions, optimize operations, and unlock AI-powered insights.",
    },

     {
    id: 5,
    image: "/images/blog/blog-14.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "03 Feb 2025",
    url: 'insights/blogs/salesforce-agentforce-top-features-youre-probably-not-using-but-should',
    title: "Powerful Features of Agentforce You Should Be Using",
    description: "Salesforce Agentforce features address CX gaps with intelligent routing, AI-led case resolution, and performance dashboards for better decisions.",
  },

  {
    id: 4,
    image: "/images/blog/blog-13.webp",
    category: "SAP SuccessFactors",
    industry: "Human Resources",
    date: "21 Jan 2025",
    url: 'insights/blogs/how-sap-successfactors-enhances-remote-work-management',
    title: "How SAP SuccessFactors Enhances Remote Work Management",
    description: "Remote work has rapidly transformed from a temporary solution to a need for many businesses worldwide. With businesses shifting towards remote work, operating a remote workforce can be challenging, particularly considering local dynamics and regulatory requirements.",
  },

   {
    id: 3,
    image: "/images/blog/blog-12.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "13 Jan 2025",
    url: 'insights/blogs/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai',
    title: "How Agentforce Agents Scale ERP Systems with AI",
    description: "Enterprise Resource Planning (ERP) systems are the backbone of many organizations, managing critical functions like finance, procurement, manufacturing, and supply chain operations. However, these systems often operate in silos, limiting their potential to provide real-time insights and seamless collaboration across departments.",
  },
   {
    id: 2,
    image: "/images/blog/agents-as-teammates-carousel-img.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "30 Dec 2024",
    url: 'insights/blogs/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce',
    title: "Meet Your New Teammate: AI Agents in Slack with Agentforce 2.0",
    description: "Agentforce agents do more than just gather data and insights—they provide fully customizable and independent AI functionalities that can link to any enterprise data and act on your behalf.",
  },
{
    id: 1,
    image: "/images/blog/blog-5.webp",
    category: "SAP SuccessFactors",
    industry: "Human Resources",
    date: "24 Dec 2024",
    url: 'insights/blogs/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration',
    title: "How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration",
    description: "Seamless integration between enterprise applications offers improved collaboration, efficiency, and productivity. Integrating SAP SuccessFactors with Microsoft Office 365 combines the strengths of a leading human experience management (HXM) solution and a robust suite of productivity tools.",
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
      <div className="flex carousel-button-group absolute top-0 xl:right-32 sm:right-6 max-sm:right-0  md:mt-4">
        <button aria-label="Previous slide" className={currentSlide === 0 ? 'disable bg-white p-2 mr-2 group transition-all duration-300' : 'bg-white p-0 mr-0 sm:p-2 sm:mr-2 group transition-all duration-300'} onClick={() => previous()}>
          <span className="sr-only">Previous slide</span>
          <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#707070" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#C3C3C3]">
            <path d="M3 7.5L11 0V15L3 7.5Z" fill="none" className="transition-all duration-300 group-hover:fill-[#C3C3C3] hover:fill-[#C3C3C3]" />
          </svg>
        </button>
        <button   aria-label="Next slide" className="bg-white p-2 group transition-all duration-300" onClick={() => next()}>
           <span className="sr-only">Next slide</span>
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
      <li>
      <div
      role="button"
        className={`w-3 h-1 md:px-8 px-4 mr-3 mb-4 ${active ? "bg-[#134874]" : "bg-[#D1D1D1]"}`}
        onClick={() => onClick()}
                aria-label="Custom Dots"

      />
      </li>
    );
  };

  return (
    <section className="relative sm:pb-10 pb-16 bg-white">
      <div className="mb-[36px] mx-auto">
        <div className="flex flex-row justify-between md:mr-24 mr-0">
          <h2 className="text-black mb-[43px] leading-tight text-[26px]  xl:text-[50px] 4xl:text-[60px]">Latest Blogs</h2>
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
              className="flex flex-col sm:basis-1/4 border border-[#707070] sm:mr-6 mb-4 h-full group"
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
              <div className="flex flex-col text-black py-4 px-6 flex-grow transition duration-300 ease-in-out group-hover:bg-[#F0F0F0]">
                <div className="flex flex-col">
                  <div className=" leading-tight text-[16px] 4xl:text-[17px]"><span className="text-[#0092E0]">{slide.category}</span> | {slide.date}</div>
                  <Link href={'/' + slide.url}><h5 className="my-3 sm:line-clamp-4 line-clamp-3 font-semibold leading-tight text-[16px]  xl:text-[18px] 4xl:text-[20px]">{slide.title}</h5></Link>
                </div>
                <p className="line-clamp-4  leading-tight text-[16px] xl:text-[16px] 4xl:text-[18px]">{slide.description}</p>
              </div>

            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}