"use client";
// pages/blog.js
import Image from "next/image";
import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Link from "next/link";
import Seo from "@/app/components/Seo";


const latestBlogs = [
    {
    id: 17,
    image: "/images/blog/Agentic Pharma_Blog feature thumb.webp",
    category: "AI",
    industry: "Pharma",
    date: "30 April 2025",
    url: '/agentic-pharma-the-ai-driven-era-of-the-pharmaceutical-industry',
    title: "Agentic AI Pharma: Automating Complex Pharma Workflows ",
    description: "Agentic AI pharma simplifies complexity. Goal-driven, adaptive, and context-aware, it manages complex, multi-step workflows with minimal human intervention",
    },
    {
    id:18,
    image:"/images/blog/sap-ariba-for-carousel.webp",
    category:"SAP",
    industry:"Manufacturing",
    date:"29 May 2025",
    url:'/how-does-sap-ariba-streamline-direct-and-indirect-procurement-needs',
    title:"How does SAP Ariba Streamline Direct and Indirect Procurement Needs?",
    description:"The term Procurement encompasses the entire process of acquiring goods or services, from identifying needs to supplying them.Solutions like Guided Sourcing enable companies to conduct market research,"


  },
   {
    id:19,
    image:"/images/blog/successfactor-for-carousel.webp",
    category:"SAP SuccessFactors",
    industry:"Human Resources",
    date:"28 May 2025",
    url:"/how-sap-successfactors-integrations-enhance-hr-and-payroll-operations",
    title:"How SAP SuccessFactors Integrations Enhance HR and Payroll Operations",
    description:"Are payroll challenges slowing you down? SAP SuccessFactors turns payroll management from a hassle into a streamlined process that boosts employee satisfaction."


  },
  {
    id: 16,
    image: "/images/blog/jcarosel.webp",
    category: "SAP",
    industry: "SAP",
    date: "22 April 2025",
    url: '/redefining-the-future-of-enterprise-ai-with-sap-joule',
    title: "Redefining the Future of Enterprise AI with SAP Joule",
    description: "SAP’s generative AI copilot, Joule, designed to enhance organizational efficiency, collaboration, and analysis, marks a major step forward in intelligent automation within SAP systems. ",
  },
  {
    id: 15,
    image: "/images/blog/SAP Business cloud_Carousal.webp",
    category: "General",
    industry: "Generic",
    date: "22 April 2025",
    url: '/sap-business-data-cloud-the-intelligent-data-foundation-for-ai-driven-business-success',
    title: "SAP Business Data Cloud: The Intelligent Data Foundation for AI-Driven Business Success",
    description: "Businesses increasingly rely on real-time data to drive decisions, optimize operations, and unlock AI-powered insights.",
  },
  {
    id: 1,
    image: "/images/blog/blog-1.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "30 Sept 2024",
    url: '/how-salesforce-agentforce-actually-works',
    title: "How Salesforce Agentforce Actually Works",
    description: "Salesforce Agentforce, although a newer addition to the Salesforce ecosystem, is making rounds, particularly in organizations that deal with large teams of agents, such as sales agents, customer service representatives, and field service personnel.",
  },
  {
    id: 2,
    image: "/images/blog/blog-2.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "21 Oct 2024",
    url: '/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce',
    title: "The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce",
    description: "As businesses scale, the complexity of managing customer interactions multiplies, driving the need for more intelligent and streamlined support systems.  Salesforce Agentforce provides a robust platform for customer service automation, now enhanced by the groundbreaking Atlas Reasoning Engine.",
  },
  {
    id: 3,
    image: "/images/blog/blog-3.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "28 Oct 2024",
    url: '/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters',
    title: "Agents vs. Copilots vs. Bots: What’s the Difference and Why It Matters",
    description: "Tools like Agentforce are redefining how we view digital assistants, bringing distinctions between Agents, Copilots, and Bots to the forefront. The terms are frequently used within artificial intelligence-driven automation and conversational interfaces, each serving a distinct purpose.",
  },
  {
    id: 4,
    image: "/images/blog/blog-4.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "25 Nov 2024",
    url: '/agentforce-testing-center-redefining-ai-testing-with-synthetic-data',
    title: "Agentforce Testing Center: Redefining AI Testing with Synthetic Data",
    description: "Salesforce has introduced a new feature called Testing Center within its agentic AI platform, Agentforce. This addition allows enterprise users to test and monitor AI agents before deploying them in production.",
  },
  {
    id: 5,
    image: "/images/blog/blog-5.webp",
    category: "SAP SuccessFactors",
    industry: "Human Resources",
    date: "24 Dec 2024",
    url: '/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration',
    title: "How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration",
    description: "Seamless integration between enterprise applications offers improved collaboration, efficiency, and productivity. Integrating SAP SuccessFactors with Microsoft Office 365 combines the strengths of a leading human experience management (HXM) solution and a robust suite of productivity tools.",
  },
  {
    id: 6,
    image: "/images/blog/blog-6.webp",
    category: "Cloud Green Technology",
    industry: "Agriculture",
    date: "17 Sept 2024",
    url: '/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow',
    title: "Agriculture 4.0. How Do Digital Technologies Transform Farming for a Better Tomorrow?",
    description: "Agriculture plays a significant role in India’s growing economy and its future cannot be accomplished without digital tools and technological innovation.",
  },
  {
    id: 7,
    image: "/images/blog/blog-7.webp",
    category: "SAP SuccessFactors",
    industry: "Human Resources",
    date: "29 Oct 2024",
    url: '/sap-successfactors-performance-and-goal-management',
    title: "SAP SuccessFactors Performance and Goal Management",
    description: "Achieving your organization’s goals is a key responsibility your entire team shares. When your team’s strategy aligns with its goals and the broader organizational objectives, doing the right thing becomes instinctive.",
  },
  {
    id: 8,
    image: "/images/blog/blog-8.webp",
    category: "Integration",
    industry: "Healthcare",
    date: "11 Nov 2024",
    url: '/automate-crucial-parts-of-your-healthcare-organization-with-athenahealth-and-salesforce-integration',
    title: "Automate Crucial Parts of your Healthcare Organization with athenahealth and Salesforce Integration",
    description: "Historical evidence strongly indicates that a healthcare industry fragmented by disparate systems results in operational inefficiencies, duplicative work, patient safety issues, and rising costs to manage an increasingly complex healthcare market.",
  },
  {
    id: 9,
    image: "/images/blog/blog-9.webp",
    category: "Diversity & Inclusion",
    industry: "Human Resources",
    date: "12 Nov 2024",
    url: '/how-sap-successfactors-supports-diversity-equity-and-inclusion-initiatives',
    title: "How SAP SuccessFactors Supports Diversity, Equity, and Inclusion Initiatives",
    description: "Diversity, Equity, and Inclusion (DEI) are no longer optional components of a modern workplace; they are foundational pillars for innovation, employee engagement, and long-term organizational success.",
  },
  {
    id: 10,
    image: "/images/blog/blog-10.webp",
    category: "SAP GTS",
    industry: "Generic",
    date: "19 Dec 2024",
    url: '/enhancing-compliance-the-importance-of-sanctioned-party-list-screening-in-sap-gts-for-third-party-transactions',
    title: "Enhancing Compliance: The Importance of Sanctioned Party List Screening in SAP GTS for Third-Party Transactions",
    description: "Maintaining compliance with international trade regulations is a must. Companies engaged in cross-border trade must ensure that their transactions comply with government-imposed sanctions and export control laws.",
  },
  {
    id: 11,
    image: "/images/blog/blog-11.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "30 Dec 2024",
    url: '/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce',
    title: "Agents as Teammates: Revolutionizing Slack Collaboration with Agentforce",
    description: "Agentforce agents do more than just gather data and insights—they provide fully customizable and independent AI functionalities that can link to any enterprise data and act on your behalf.",
  },
  {
    id: 12,
    image: "/images/blog/blog-12.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "13 Jan 2025",
    url: '/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai',
    title: "Agentforce Agents Scales Enterprise Resource Planning Systems with AI",
    description: "Enterprise Resource Planning (ERP) systems are the backbone of many organizations, managing critical functions like finance, procurement, manufacturing, and supply chain operations. However, these systems often operate in silos, limiting their potential to provide real-time insights and seamless collaboration across departments.",
  },
  {
    id: 13,
    image: "/images/blog/blog-13.webp",
    category: "SAP SuccessFactors",
    industry: "Human Resources",
    date: "21 Jan 2025",
    url: '/how-sap-successfactors-enhances-remote-work-management',
    title: "How SAP SuccessFactors Enhances Remote Work Management",
    description: "Remote work has rapidly transformed from a temporary solution to a need for many businesses worldwide. With businesses shifting towards remote work, operating a remote workforce can be challenging, particularly considering local dynamics and regulatory requirements.",
  },
  {
    id: 14,
    image: "/images/blog/blog-14.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "03 Feb 2025",
    url: '/salesforce-agentforce-top-features-youre-probably-not-using-but-should',
    title: "Salesforce Agentforce: Top Features You’re Probably Not Using (But should!)",
    description: "Agentforce was one of Salesforce’s major announcements last year. It introduced “AI agents,” marking a significant shift in its AI strategy. It embodies Salesforce’s vision for the Third Wave of AI by moving beyond the early, more assistive AI models to a generation of intelligent agents that are more accurate, reliable, and actively engaged in driving customer outcomes",
  },
  // Add more blog objects as needed
 
];

const BlogCard = ({ blog }) => (
  <div className="border border-[#707070] w-full h-full flex flex-col group">
    <div className="max-h-[300px]">
      <Link href={'/insights/blogs' + blog.url}>
        <Image
          src={blog.image}
          alt={blog.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          priority
        />
      </Link>
    </div>
    <div className="p-6 flex-grow flex flex-col transition duration-300 ease-in-out group-hover:bg-[#F0F0F0]">
      <div>
        <div className='pb-2 md:pb-4'>
          <span className='text-[#0092E0]'>{blog.category}</span>
          <span className='text-[#ACACAC]'> | </span>
          {blog.date}
        </div>
        <Link href={'/insights/blogs' + blog.url}><h4 className="mb-2 md:mb-4 md:font-semibold line-clamp-3 xl:line-clamp-4">{blog.title}</h4></Link>
      </div>
      <div className="flex flex-col">
        <p className='line-clamp-4 md:mb-4 mb-2'>{blog.description}</p>
      </div>
    </div>
  </div>
);

const BlogList = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [showOptionsIndustry, setShowOptionsIndustry] = useState(false);
  const [showOptionsCategory, setShowOptionsCategory] = useState(false);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 6);
  };

  const toggleOptionsIndustry = () => {
    setShowOptionsIndustry(!showOptionsIndustry);
    setShowOptionsCategory(false);
  };

  const toggleOptionsCategory = () => {
    setShowOptionsCategory(!showOptionsCategory);
    setShowOptionsIndustry(false);
  };


  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const filterBlogsByIndustry = (industry) => {
    setSelectedIndustry(industry);
    setShowOptionsIndustry(false);
  };

  const filteredBlogs = selectedIndustry === 'All' ? latestBlogs : latestBlogs.filter(blog => blog.industry === selectedIndustry);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterBlogsByCategory = (category) => {
    setSelectedCategory(category);
    setShowOptionsCategory(false);
  };

  const filteredBlogsByCategory = selectedCategory === 'All' ? filteredBlogs : filteredBlogs.filter(blog => blog.category === selectedCategory);

  const isLoadMoreVisible = visibleBlogs < filteredBlogsByCategory.length;

  return (
    <div className="container mx-auto xl:pr-[150px]">
      <div className="flex md:flex-row flex-col pb-4">
        <div className="flex flex-col md:pb-0 pb-4">
          <h2 className="text-black">Latest Blogs</h2>
        </div>
        <div className="relative flex md:flex-row md:ml-auto h-[60px]">
          <div className="relative">
            <button className='relative border border-[#707070] sm:w-40 w-36 py-4 px-2 sm:mr-4 mr-2 text-l hover:bg-[#EDEDED] focus:bg-[#EDEDED]' onClick={toggleOptionsIndustry}>
              <span className="pr-5">{selectedIndustry === 'All' ? 'Industry' : selectedIndustry}</span>
              <svg
                className='w-6 h-6 absolute right-2 top-1/2 transform -translate-y-1/2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
              </svg>
            </button>
            {showOptionsIndustry && (
              <div className='absolute bg-white border border-[#707070] w-[165px] md:w-[250px] sm:mr-4 mr-0 sm:right-0 right-2'>
                <ul>
                  <li className='px-5 pt-4 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('All')}>All</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('Agriculture')}>Agriculture</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('Finance')}>Finance</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('Generic')}>Generic</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('Healthcare')}>Healthcare</li>
                  <li className='px-5 pb-4 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('Hi-tech')}>Hi-tech</li>
                  <li className='px-5 pb-4 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('Human Resources')}>Human Resources</li>
                  <li className='px-5 pb-4 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('Manufacturing')}>Manufacturing</li>
                  <li className='px-5 pb-4 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('Public Sector')}>Public Sector</li>
                  <li className='px-5 pb-4 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('Retail & Ecommerce')}>Retail & Ecommerce</li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <button className='relative border border-[#707070] py-4 px-2 sm:w-40 w-36 text-l hover:bg-[#EDEDED] focus:bg-[#EDEDED]' onClick={toggleOptionsCategory}>
              <span className="pr-5">{selectedCategory === 'All' ? 'Category' : selectedCategory}</span>
              <svg
                className='w-6 h-6 absolute right-2 top-1/2 transform -translate-y-1/2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
              </svg>
            </button>
            {showOptionsCategory && (
              <div className='absolute bg-white border border-[#707070] w-[200px] md:w-[250px] right-0'>
                <ul>
                  <li className='px-5 pt-4 pb-2 cursor-pointer' onClick={() => filterBlogsByCategory('All')}>All</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Diversity & Inclusion')}>Diversity & Inclusion</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Green Technology')}>Green Technology</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Grow with SAP')}>Grow with SAP</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Integration')}>Integration</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Rise with SAP')}>Rise with SAP</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Salesforce Agentforce')}>Salesforce Agentforce</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Salesforce Data Cloud')}>Salesforce Data Cloud</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Salesforce Health Cloud')}>Salesforce Health Cloud</li>
                  <li className='px-5 pb-4 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Salesforce MuleSoft')}>Salesforce MuleSoft</li>
                  <li className='px-5 pb-4 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('SAP BTP')}>SAP BTP</li>
                  <li className='px-5 pb-4 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('SAP GTS')}>SAP GTS</li>
                  <li className='px-5 pb-4 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('SAP S/4HANA')}>SAP S/4HANA</li>
                  <li className='px-5 pb-4 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('SAP SuccessFactors')}>SAP SuccessFactors</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='w-full'>
        <p className='text-xl py-4'>Search result by {selectedIndustry} industry / {selectedCategory} category</p>
      </div>

      {filteredBlogsByCategory.length === 0 ? (
        <p className='text-center text-xl py-4'>No Blogs Found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
          {filteredBlogsByCategory.slice(0, visibleBlogs).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}

      {isLoadMoreVisible && (
        <div className='flex justify-center text-center md:py-20 py-10'>
          <button
            type='button'
            className={`border border-[#707070]  font-medium w-[160px] h-[50px] relative group hover:bg-[#EDEDED] ${visibleBlogs >= filteredBlogsByCategory.length ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
            onClick={loadMoreBlogs}
            disabled={visibleBlogs >= filteredBlogsByCategory.length}
          >
            <span className='group-hover:pr-4 transition-all duration-300'>Load more</span>
            <svg
              className='w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

const FeaturedCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "/images/blog/blog-1.webp",
      category: "Salesforce Agentforce",
      industry: "Generic",
      date: "30 Sept 2024",
      url: '/how-salesforce-agentforce-actually-works',
      title: "How Salesforce Agentforce Actually Works",
      description: "Salesforce Agentforce, although a newer addition to the Salesforce ecosystem, is making rounds, particularly in organizations that deal with large teams of agents, such as sales agents, customer service representatives, and field service personnel.",
    },
    {
      id: 2,
      image: "/images/blog/blog-2.webp",
      category: "Salesforce Agentforce",
      industry: "Generic",
      date: "21 Oct 2024",
      url: '/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce',
      title: "The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce",
      description: "As businesses scale, the complexity of managing customer interactions multiplies, driving the need for more intelligent and streamlined support systems.  Salesforce Agentforce provides a robust platform for customer service automation, now enhanced by the groundbreaking Atlas Reasoning Engine.",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 150,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 575 },
      items: 1,
      centerMode: true,
      slidesToSlide: 1,
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
      <div className="flex carousel-button-group absolute top-0 lg:right-40 right-4 md:mt-4">
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
    <section className="relative pb-10 bg-white">
      <div className="mb-[36px]">
        <div className="flex flex-row justify-between md:mr-24 mr-0">
          <h2 className="text-black mb-[36px]">Featured Blogs</h2>
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
            <div key={slide.id} className="flex sm:flex-row flex-col md:mr-4 sm:mr-2 group">
              <div className="basis-full">
                <Link href={'/insights/blogs' + slide.url}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority
                  />
                </Link>
              </div>
              <div className="flex flex-col basis-full py-4 sm:py-4 md:py-6 xl:py-10 sm:px-10 md:px-12 xl:px-16 px-4 transition duration-300 ease-in-out group-hover:bg-[#F0F0F0]">
                <div className='pb-[10px] sm:pb-[15px] lg:pb-[20px]'>
                  <span className='text-[#0092E0]'>{slide.category}</span> <span className='text-[#ACACAC]'>|</span> {slide.date}
                </div>
                <Link href={'/insights/blogs' + slide.url}><h3 className="pb-[10px] sm:pb-[15px] lg:pb-[20px] h3-bold sm:line-clamp-none line-clamp-3">{slide.title}</h3></Link>
                <p className="xl:line-clamp-none line-clamp-5">{slide.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}


export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black">

      <Seo
        title="Blog"
        canonical="https://www.rialtes.com/insights/blogs/"
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/blog-header.webp"
          alt="Blogs"
          fill
          style={{ objectFit: "cover", objectPosition: "11% 20%" }}
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
            <div className="flex flex-col">
              <h3 className="text-[300] font-medium mb-2">Blogs</h3>
              <h1 className="max-w-2xl ">
                Expert Insights for Digital Success
              </h1>
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

        <div className="md:py-10 py-6 bg-white">
          <div className="container mx-auto">
            <p className="text-[#000000] py-6 sm:max-w-2xl">Stay ahead in the digital transformation journey with expert insights from Rialtes. Our blog covers the latest trends, best practices, and innovations in SAP, Salesforce, AI, and enterprise technology.</p>
          </div>
        </div>
      </section>


      {/* Featured Section */}
      <div
        className="
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <FeaturedCarousel />

      </div>

      {/* Latest Blogs Section */}
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

          <BlogList />




        </section>
      </div>
    </div>
  );
}