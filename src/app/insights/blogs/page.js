"use client";
// pages/blog.js
import Image from "next/image";
import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Link from "next/link";
import Seo from "@/app/components/Seo";
import Script from "next/script";
const schemaData={
  
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/"
  },
  "name": "Rialtes Blogs | Expert Insights on Digital Transformation",
  "headline": "Insights That Drive Innovation – Salesforce & SAP Blogs",
  "description": "Stay updated with expert blogs from Rialtes on Salesforce, SAP, Yardi, MuleSoft, and more. Learn how technology trends are shaping industries and driving business success.",
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  }

}

const latestBlogs = [
   {
    id: 26,
    image: "/images/blog/big-reimage-slider.webp", 
    category: "Artificial Intelligence",
    industry: "Generic",
    date: "25 August 2025",
    url: '/reimagine-enterprise-using-agentic-ai-systems',
    title: "Reimagine Enterprise Using Agentic AI Systems",
    description: "The way humans interact with AI is evolving. From isolated tools that do one thing well to intelligent agents that can plan trips, monitor logistics, assist the elderly, or manage inventory across global supply chains",
  },
  {
    id: 25,
    image: "/images/blog/small-slider.webp", 
    category: "Agentforce",
    industry: "Generic",
    date: "22 August 2025",
    url: '/from-factory-to-feedback-how-agentforce-ai-elevates-customer-experience-in-manufacturing',
    title: "From Factory to Feedback: How Agentforce AI Elevates Customer Experience in Manufacturing",
    description: "Manufacturers today operate in a pressure cooker. You’re dealing with fluctuating demand, global supply chain fragility, rising customer expectations, and shrinking margins. It's not just about making products anymore",
  },

   {
    id: 24,
    image: "/images/blog/sustain-small-slider.webp", 
    category: "Artificial Intelligence",
    industry: "Generic",
    date: "21 August 2025",
    url: '/how-ai-is-powering-the-sustainable-future-of-our-planet',
    title: "How AI Is Powering the Sustainable Future of Our Planet",
    description: "We must reduce greenhouse gas emissions and transition to renewable energy sources to protect our planet and future generations. However, the hope for a sustainable future lies in conservation and innovation. Here’s how.",
  },
   {
    id: 23,
    image: "/images/blog/Agentforce-featured-blog.webp", 
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "29 July 2025",
    url: '/how-agentforce-3-is-reshaping-automotive-manufacturing',
    title: "How Agentforce 3.0 is Reshaping Automotive Manufacturing",
    description: "Salesforce has launched Agentforce 3.0 — and it’s a significant leap forward. Agentforce has been a key part of Salesforce's AI strategy since its launch in September 2024.",
  },
   {
    id: 4,
    image: "/images/blog/blog-slider.webp", 
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "25 July 2025",
    url: '/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters',
    title: "Agents vs. Copilots vs. Bots: A Strategic Comparison That Drives AI Adoption Right",
    description: "Tools like Agentforce are redefining how we view digital assistants, bringing distinctions between Agents, Copilots, and Bots to the forefront. The terms are frequently used within artificial intelligence-driven automation and conversational interfaces, each serving a distinct purpose.",
  },
  {
     id: 22,
   image: "/images/blog/slider.webp",
    category: "Agentforce",
    industry: "General",
    date: "21 July 2025",
    url: '/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions',
    title: "Agentforce for Manufacturing: Exceed Customer Expectations with AI-Powered Salesforce Solutions",
    description: "We know that Artificial intelligence has transformed how we work, significantly boosting productivity by automating manual tasks and allowing teams to focus on high-value deliverables. With customer expectations soaring, they demand seamless, personalized experiences and instant support",
  },

    // Add more blog objects as needed
{
     id: 21,
    image: "/images/blog/agentexchange-Blog-feature-thumb.webp",
    category: "Agentforce",
    industry: "General",
    date: "02 July 2025",
    url: '/discover-agentexchange-your-trusted-marketplace-for-agentforce-success',
    title: "Discover AgentExchange: Your Trusted Marketplace for Agentforce Success",
    description: "Salesforce has once again raised the bar in AI-driven business solutions with the launch of AgentExchange, ",
  },
  {
     id: 20,
    image: "/images/blog/Pharma Jewel of North India_Blog feature thumb.webp",
    category: "General",
    industry: "Manufacturing",
    date: "01 July 2025",
    url: '/himachal-pradesh-the-pharma-jewel-of-north-india-with-the-largest-pharma-manufacturing-facilities',
    title: "Himachal Pradesh: The Pharma Jewel of North India with the Largest Pharma Manufacturing Facilities",
    description: "India’s rise as a pharmaceutical powerhouse on the global stage is remarkable.",
  },
 {
    id: 19,
    image: "/images/blog/Agentic Pharma_Blog feature thumb.webp",
    category: "AI",
    industry: "Pharma",
    date: "30 May 2025",
    url: '/agentic-pharma-the-ai-driven-era-of-the-pharmaceutical-industry',
    title: "Agentic Pharma - The AI-driven era of the Pharmaceutical Industry",
    description:"The pharmaceutical industry has long been a pioneer in adopting new technologies, from cutting-edge lab equipment to intelligent data management systems.",
    },

   {
    id:18,
    image:"/images/blog/sap-ariba-for-carousel.webp",
    category:"SAP",
    industry:"Manufacturing",
    date:"29 May 2025",
    url:'/how-does-sap-ariba-streamline-direct-and-indirect-procurement-needs',
    title:"How does SAP Ariba Streamline Direct and Indirect Procurement Needs?",
    description:"The term Procurement encompasses the entire process of acquiring goods or services, from identifying needs to supplying them"


  },
  
 
    {
    id: 17,
    image: "/images/blog/successfactor-for-carousel.webp",
    category: "SAP SuccessFactors",
    industry: "Human Resources",
    date: "28 May 2025",
    url: "/how-sap-successfactors-integrations-enhance-hr-and-payroll-operations",
    title: "How SAP SuccessFactors Integrations Enhance HR and Payroll Operations",
    description: "Are payroll challenges slowing you down? SAP SuccessFactors turns payroll management from a hassle into a streamlined process that boosts employee satisfaction."


  },
{
    id: 16,
    image: "/images/blog/jcarosel.webp",
    category: "SAP",
    industry: "SAP",
    date: "25 April 2025",
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
    id: 14,
    image: "/images/blog/blog-14.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "03 Feb 2025",
    url: '/salesforce-agentforce-top-features-youre-probably-not-using-but-should',
    title: "Powerful Features of Agentforce You Should Be Using",
    description: "Salesforce Agentforce features address CX gaps with intelligent routing, AI-led case resolution, and performance dashboards for better decisions.",
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
    id: 12,
    image: "/images/blog/blog-12.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "13 Jan 2025",
    url: '/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai',
    title: "How Agentforce Agents Scale ERP Systems with AI",
    description: "Enterprise Resource Planning (ERP) systems are the backbone of many organizations, managing critical functions like finance, procurement, manufacturing, and supply chain operations. However, these systems often operate in silos, limiting their potential to provide real-time insights and seamless collaboration across departments.",
  },
   {
    id: 11,
    image: "/images/blog/agents-as-teammates-carousel-img.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "30 Dec 2024",
    url: '/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce',
    title: "Meet Your New Teammate: AI Agents in Slack with Agentforce 2.0",
    description: "Agentforce agents do more than just gather data and insights—they provide fully customizable and independent AI functionalities that can link to any enterprise data and act on your behalf.",
  },
{
    id: 10,
    image: "/images/blog/blog-5.webp",
    category: "SAP SuccessFactors",
    industry: "Human Resources",
    date: "24 Dec 2024",
    url: '/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration',
    title: "How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration",
    description: "Seamless integration between enterprise applications offers improved collaboration, efficiency, and productivity. Integrating SAP SuccessFactors with Microsoft Office 365 combines the strengths of a leading human experience management (HXM) solution and a robust suite of productivity tools.",
  },
   {
    id: 9,
    image: "/images/blog/blog-10-long-thumb.webp",
    category: "SAP GTS",
    industry: "Generic",
    date: "19 Dec 2024",
    url: '/enhancing-compliance-the-importance-of-sanctioned-party-list-screening-in-sap-gts-for-third-party-transactions',
    title: "Enhancing Compliance: The Importance of Sanctioned Party List Screening in SAP GTS for Third-Party Transactions",
    description: "Maintaining compliance with international trade regulations is a must. Companies engaged in cross-border trade must ensure that their transactions comply with government-imposed sanctions and export control laws.",
  },
  {
    id: 8,
    image: "/images/blog/blog-4.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "25 Nov 2024",
    url: '/agentforce-testing-center-redefining-ai-testing-with-synthetic-data',
    title: "Agentforce Testing Center: Redefining AI Testing with Synthetic Data",
    description: "Salesforce has introduced a new feature called Testing Center within its agentic AI platform, Agentforce. This addition allows enterprise users to test and monitor AI agents before deploying them in production.",
  },
   {
    id: 7,
    image: "/images/blog/blog-9.webp",
    category: "Diversity & Inclusion",
    industry: "Human Resources",
    date: "12 Nov 2024",
    url: '/how-sap-successfactors-supports-diversity-equity-and-inclusion-initiatives',
    title: "How SAP SuccessFactors Supports Diversity, Equity, and Inclusion Initiatives",
    description: "Diversity, Equity, and Inclusion (DEI) are no longer optional components of a modern workplace; they are foundational pillars for innovation, employee engagement, and long-term organizational success.",
  },
{
    id: 6,
    image: "/images/blog/blog-88.webp",
    category: "Integration",
    industry: "Healthcare",
    date: "11 Nov 2024",
    url: '/automate-crucial-parts-of-your-healthcare-organization-with-athenahealth-and-salesforce-integration',
    title: "Automate Your Healthcare Organization with athenahealth and Salesforce Integration",
    description: "Historical evidence strongly indicates that a healthcare industry fragmented by disparate systems results in operational inefficiencies, duplicative work, patient safety issues, and rising costs to manage an increasingly complex healthcare market.",
  },
  {
    id: 5,
    image: "/images/blog/blog-7.webp",
    category: "SAP SuccessFactors",
    industry: "Human Resources",
    date: "29 Oct 2024",
    url: '/sap-successfactors-performance-and-goal-management',
    title: "SAP SuccessFactors Performance and Goal Management",
    description: "Achieving your organization’s goals is a key responsibility your entire team shares. When your team’s strategy aligns with its goals and the broader organizational objectives, doing the right thing becomes instinctive.",
  },
 
  {
    id: 3,
    image: "/images/blog/blog-2.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "21 Oct 2024",
    url: '/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce',
    title: "The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce",
    description: "As businesses scale, the complexity of managing customer interactions multiplies, driving the need for more intelligent and streamlined support systems.  Salesforce Agentforce provides a robust platform for customer service automation, now enhanced by the groundbreaking Atlas Reasoning Engine.",
  },
  {
    id: 2,
    image: "/images/blog/blog-1.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "30 Sept 2024",
    url: '/how-salesforce-agentforce-actually-works',
    title: "How Salesforce Agentforce Actually Works",
    description: "Salesforce Agentforce, although a newer addition to the Salesforce ecosystem, is making rounds, particularly in organizations that deal with large teams of agents, such as sales agents, customer service representatives, and field service personnel.",
  },
  {
    id: 1,
    image: "/images/blog/blog-6.webp",
    category: "Cloud Green Technology",
    industry: "Agriculture",
    date: "17 Sept 2024",
    url: '/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow',
    title: "Agriculture 4.0. How Do Digital Technologies Transform Farming for a Better Tomorrow?",
    description: "Agriculture plays a significant role in India’s growing economy and its future cannot be accomplished without digital tools and technological innovation.",
  },

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
        <div className='pb-2 md:pb-4 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight'>
          <span className='text-[#0092E0]'>{blog.category}</span>
          <span className='text-[#ACACAC]'> | </span>
          {blog.date}
        </div>
        <Link href={'/insights/blogs' + blog.url}><h4 className="mb-2 md:mb-4 font-semibold line-clamp-3 xl:line-clamp-4 4xl:text-[25px] xl:text-[20px] text-[18px]  leading-tight">{blog.title}</h4></Link>
      </div>
      <div className="flex flex-col">
        <p className='line-clamp-4 md:mb-4 mb-2 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'>{blog.description}</p>
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
    <div className=" ">
      <div className="flex md:flex-row flex-col pb-4">
        <div className="flex flex-col md:pb-0 pb-4 justify-center">
          <h2 className="text-black 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight ">Latest Blogs</h2>
        </div>
        <div className="relative flex flex-row max-[320px]:flex-col md:ml-auto h-[60px] mt-4 max-[320px]:mb-12 max-[320px]:gap-2">
          <div className="relative">
            <button className='relative border border-[#707070] sm:w-40 w-36 py-4 px-2 sm:mr-6 mr-2 text-l hover:bg-[#EDEDED] focus:bg-[#EDEDED]' onClick={toggleOptionsIndustry}>
              <span className="pr-5 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight">{selectedIndustry === 'All' ? 'Industry' : selectedIndustry}</span>
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
              <div className='absolute bg-white border border-[#707070] w-[165px] md:w-[250px] sm:mr-4 mr-0 sm:right-0 right-2 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight'>
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
              <span className="pr-5 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight">{selectedCategory === 'All' ? 'Category' : selectedCategory}</span>
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
              <div className='absolute bg-white border border-[#707070] w-[200px] md:w-[250px] right-0 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight'>
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
        <p className='text-xl py-4 4xl:text-[30px] xl:text-[22px] text-[20px]  leading-tight'>Search result by {selectedIndustry} industry / {selectedCategory} category</p>
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
            <span className='group-hover:pr-7 transition-all duration-300 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'>Load more</span>
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
      <div className="flex carousel-button-group absolute top-0 lg:right-40 right-4 max-[360px]:right-[-15px] md:mt-4">
        <button   aria-label="Previous slide" className={currentSlide === 0 ? 'disable bg-white p-2 mr-2 group transition-all duration-300' : 'bg-white p-0 mr-0 sm:p-2 sm:mr-2 group transition-all duration-300'} onClick={() => previous()}>
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
    <section className="relative pb-10 bg-white">
      <div className="mb-[36px]">
        <div className="flex flex-row justify-between md:mr-24 mr-0">
          <h2 className="text-black mb-[36px] text-[26px] xl:text-[40px]  4xl:text-[60px] leading-tight ">Featured Blogs</h2>
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
            <div key={slide.id} className="flex sm:flex-row flex-col md:mr-4 sm:mr-2 group items-stretch h-full">
              <div className="basis-full h-full ">
                <Link href={'/insights/blogs' + slide.url}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority
                    className="object-cover w-full h-full"
                  />
                </Link>
              </div>
              <div className="flex flex-col basis-full py-4 sm:py-4 md:py-6 xl:py-10 sm:px-10 md:px-12 xl:px-16 px-4 transition duration-300 ease-in-out group-hover:bg-[#F0F0F0] h-full">
                <div className='pb-[10px] sm:pb-[15px] lg:pb-[20px] 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'>
                  <span className='text-[#0092E0]'>{slide.category}</span> <span className='text-[#ACACAC]'>|</span> {slide.date}
                </div>
                <Link href={'/insights/blogs' + slide.url}><h3 className="pb-[10px] sm:pb-[15px] lg:pb-[20px] font-semibold sm:line-clamp-none  text-[18px] xl:text-[20px]  4xl:text-[30px] leading-tight ">{slide.title}</h3></Link>
                <p className="xl:line-clamp-none line-clamp-5 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight">{slide.description}</p>
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
        title="Rialtes Blogs | Salesforce, SAP, AI, and Cloud Insights"
        description="Read expert blogs on Salesforce, SAP, cloud, and AI. Stay ahead with the latest innovation and digital transformation insights from Rialtes."
        canonical="https://www.rialtes.com/insights/blogs/"
      />
        <Script
        id="schema-blogs"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px]  ">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/blog-header-web.webp"
            alt="desktop banner"
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
 
       
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/blog/blog-header-mobile.webp"
            alt="mobile banner"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "35% 60%" }}
          />
        </div>

        <div className="relative h-full custom-container flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12 xl:col-span-7 lg:col-span-9">

              <h3 className="text-white text-[18px] md:text-[24px] font-bold">
                Blogs
              </h3>

              <h1 className="text-white text-[26px] xl:text-[40px] 4xl:text-[60px] leading-tight mt-[11.5px] md:mt-[28.5px]">
                Your Guide to<br /> Intelligent Enterprise <br />Transformation
              </h1>

            </div>

            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            </div>
          </div>
        </div>
      </section>

      <section
        className="custom-container">

        <div className="md:py-10 py-6 bg-white">
          <div className="">
            <p className="text-[#000000] py-6 sm:max-w-2xl 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight">Stay ahead in the digital transformation journey with expert insights from Rialtes. Our blog covers the latest trends, best practices, and innovations in SAP, Salesforce, AI, and enterprise technology.</p>
          </div>
        </div>
      </section>


      {/* Featured Section */}
      <div
        className="custom-container lg:pr-0"
      >
        <FeaturedCarousel />

      </div>

      {/* Latest Blogs Section */}
      <div
        className="
       custom-container"
      >
        <section className="py-16 bg-white">

          <BlogList />




        </section>
      </div>
    </div>
  );
}