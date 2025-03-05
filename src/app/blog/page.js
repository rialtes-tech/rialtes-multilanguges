"use client";
// pages/blog.js
import Head from "next/head";
import Image from "next/image";
import { useState } from 'react';

const latestBlogs = [
  {
    id: 1,
    image: "images/blog/blog-1.webp",
    category: "SAP",
    industry: "Retail & e-Commerce",
    date: "25 Oct 2024",
    title: "Mastering Time and Attendance Management with SAP SuccessFactors",
    description: "Time recording is crucial for paying employees, invoicing customers, and allocating costs, particularly in manufacturing, the public sector, and professional services. It ties into vacation booking",
  },
  {
    id: 2,
    image: "images/blog/blog-2.webp",
    category: "Salesforce",
    industry: "Hi-tech",
    date: "25 Oct 2024",
    title: "Committing to a Greener Planet: Why We’re Pledging to 1t.org’s One Trillion Trees Initiative",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    id: 3,
    image: "images/blog/blog-3.webp",
    category: "Integration",
    industry: "Real Estate",
    date: "25 Oct 2024",
    title: "Optimizing Healthcare Operations with KIPU EMR Integration and Salesforce",
    description: "Time recording is crucial for paying employees, invoicing customers, and allocating costs, particularly in manufacturing, the public sector, and professional services. It ties into vacation booking",
  },
  {
    id: 4,
    image: "images/blog/blog-4.webp",
    category: "AI",
    industry: "Healthcare",
    date: "25 Oct 2024",
    title: "Maximize Business Potential with Integration of SAP S/4HANA with SAP Business Technology Platform (BTP)",
    description: "Time recording is crucial for paying employees, invoicing customers, and allocating costs, particularly in manufacturing, the public sector, and professional services. It ties into vacation booking",
  },
  {
    id: 5,
    image: "images/blog/blog-5.webp",
    category: "Cloud Migration",
    industry: "Finance",
    date: "25 Oct 2024",
    title: "From Insights to Action: Leveraging Salesforce Data Cloud for 360° Customer Views",
    description: "Time recording is crucial for paying employees, invoicing customers, and allocating costs, particularly in manufacturing, the public sector, and professional services. It ties into vacation booking",
  },
  {
    id: 6,
    image: "images/blog/blog-6.webp",
    category: "Cloud Analytics",
    industry: "Manufacturing",
    date: "25 Oct 2024",
    title: "SAP SuccessFactors Performance and Goal Management",
    description: "Time recording is crucial for paying employees, invoicing customers, and allocating costs, particularly in manufacturing, the public sector, and professional services. It ties into vacation booking",
  },
  {
    id: 7,
    image: "images/blog/blog-7.webp",
    category: "SAP",
    industry: "Retail & e-Commerce",
    date: "25 Oct 2024",
    title: "Mastering Time and Attendance Management with SAP SuccessFactors",
    description: "Time recording is crucial for paying employees, invoicing customers, and allocating costs, particularly in manufacturing, the public sector, and professional services. It ties into vacation booking",
  },
  {
    id: 8,
    image: "images/blog/blog-8.webp",
    category: "Salesforce",
    industry: "Hi-tech",
    date: "25 Oct 2024",
    title: "Committing to a Greener Planet: Why We’re Pledging to 1t.org’s One Trillion Trees Initiative",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    id: 9,
    image: "images/blog/blog-9.webp",
    category: "Integration",
    industry: "Real Estate",
    date: "25 Oct 2024",
    title: "Optimizing Healthcare Operations with KIPU EMR Integration and Salesforce",
    description: "Time recording is crucial for paying employees, invoicing customers, and allocating costs, particularly in manufacturing, the public sector, and professional services. It ties into vacation booking",
  },
  {
    id: 10,
    image: "images/blog/blog-10.webp",
    category: "AI",
    industry: "Healthcare",
    date: "25 Oct 2024",
    title: "Maximize Business Potential with Integration of SAP S/4HANA with SAP Business Technology Platform (BTP)",
    description: "Time recording is crucial for paying employees, invoicing customers, and allocating costs, particularly in manufacturing, the public sector, and professional services. It ties into vacation booking",
  },
  {
    id: 11,
    image: "images/blog/blog-11.webp",
    category: "Cloud Migration",
    industry: "Finance",
    date: "25 Oct 2024",
    title: "From Insights to Action: Leveraging Salesforce Data Cloud for 360° Customer Views",
    description: "Time recording is crucial for paying employees, invoicing customers, and allocating costs, particularly in manufacturing, the public sector, and professional services. It ties into vacation booking",
  },
  {
    id: 12,
    image: "images/blog/blog-12.webp",
    category: "Cloud Analytics",
    industry: "Manufacturing",
    date: "25 Oct 2024",
    title: "SAP SuccessFactors Performance and Goal Management",
    description: "Time recording is crucial for paying employees, invoicing customers, and allocating costs, particularly in manufacturing, the public sector, and professional services. It ties into vacation booking",
  },
  // Add more blog objects as needed
];

const BlogCard = ({ blog }) => (
  <div className="border border-[#707070] w-full h-full flex flex-col group">
    <img src={blog.image} alt={blog.title} className="w-full" />
    <div className="p-6 flex-grow flex flex-col justify-between transition duration-300 ease-in-out group-hover:bg-[#F0F0F0]">
      <div>
        <div className='pb-2 md:pb-4'>
          <span className='text-[#0092E0]'>{blog.category}</span>
          <span className='text-[#ACACAC]'> | </span>
          {blog.date}
        </div>
        <h4 className="mb-2 md:mb-4 md:font-semibold line-clamp-4">{blog.title}</h4>
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
  };

  const toggleOptionsCategory = () => {
    setShowOptionsCategory(!showOptionsCategory);
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
    <div className="container mx-auto px-6">
      <div className="flex md:flex-row flex-col pb-4">
        <div className="flex flex-col md:pb-0 pb-4">
          <h2 className="text-black">Latest Blogs</h2>
        </div>
        <div className="relative flex md:flex-row md:ml-auto h-[60px]">
          <div className="relative">
            <button className='relative border border-[#707070] w-40 py-4 px-2 sm:mr-4 mr-4 text-l w-100 hover:bg-[#EDEDED] focus:bg-[#EDEDED]' onClick={toggleOptionsIndustry}>
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
              <div className='absolute bg-white border border-[#707070] w-full md:w-[250px] sm:mr-4 mr-0 right-0'>
                <ul>
                  <li className='px-5 pt-4 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('All')}>All</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('Healthcare')}>Healthcare</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('Real Estate')}>Real Estate</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('Manufacturing')}>Manufacturing</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('Finance')}>Finance</li>
                  <li className='px-5 pb-4 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('Hi-tech')}>Hi-tech</li>
                  <li className='px-5 pb-4 py-2 cursor-pointer' onClick={() => filterBlogsByIndustry('Retail & e-Commerce')}>Retail & e-Commerce</li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <button className='relative border border-[#707070] py-4 px-2 w-40 text-l w-100 hover:bg-[#EDEDED] focus:bg-[#EDEDED]' onClick={toggleOptionsCategory}>
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
              <div className='absolute bg-white border border-[#707070] w-full md:w-[250px] right-0'>
                <ul>
                  <li className='px-5 pt-4 pb-2 cursor-pointer' onClick={() => filterBlogsByCategory('All')}>All</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('SAP')}>SAP</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Salesforce')}>Salesforce</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Real Estate')}>Real Estate</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Healthcare')}>Healthcare</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('AI')}>AI</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Cloud Migration')}>Cloud Migration</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Cloud Analytics')}>Cloud Analytics</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Yardi')}>Yardi</li>
                  <li className='px-5 pb-4 py-2 cursor-pointer' onClick={() => filterBlogsByCategory('Integration')}>Integration</li>
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imgSrc: '/images/blog/slider-blog-1.webp',
      category: 'Data Cloud',
      date: 'January 30, 2025',
      title: 'The Data Cloud Trinity: How Unification, Insights, and Activation Drive Smarter Business Decisions',
      description: 'Salesforce Data Cloud is a transformative tool that streamlines data for businesses. Unifying data from various sources creates a real-time view of customers, enabling smarter decisions,'
    },
    {
      imgSrc: '/images/blog/slider-blog-2.webp',
      category: 'Agentforce',
      date: 'February 3, 2025',
      title: 'Salesforce Agentforce: Top Features You’re Probably Not Using (But should!)',
      description: 'Agentforce was one of Salesforce’s major announcements last year. It introduced “AI agents,” marking a significant shift in its AI strategy.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlideIndex = (currentSlide + 1) % slides.length;

  return (
    <section className="relative pb-16 bg-white">
      <div className="container mx-auto pl-6">
        <div className="flex flex-row justify-between md:mr-24 mr-0">
          <h2 className="text-black mb-6">Featured</h2>
          <div className="flex">
            <button className="bg-white p-2 mr-2 group transition-all duration-300" onClick={prevSlide}>
              <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#707070" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#C3C3C3]">
                <path d="M3 7.5L11 0V15L3 7.5Z" fill="none" className="transition-all duration-300 group-hover:fill-[#C3C3C3] hover:fill-[#C3C3C3]" />
              </svg>
            </button>
            <button className="bg-white p-2 group transition-all duration-300" onClick={nextSlide}>
              <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#707070" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#C3C3C3]">
                <path d="M12 7.5L4 0V15L12 7.5Z" fill="none" className="transition-all duration-300 group-hover:fill-[#C3C3C3]" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden flex">
          <div className="flex sm:flex-row flex-col sm:basis-[95%] basis-[100%] md:mr-4 sm:mr-2 group">
            <div className="basis-full sm:basis-2/3 lg:basis-4/3">
              <Image
                src={slides[currentSlide].imgSrc}
                alt={slides[currentSlide].title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="flex flex-col basis-full sm:basis-2/3 py-6 sm:py-4 lg:py-10 sm:px-10 lg:px-16 px-0 transition duration-300 ease-in-out group-hover:bg-[#F0F0F0]">
              <div className='pb-[10px] sm:pb-[15px] lg:pb-[20px]'>
                <span className='text-[#0092E0]'>{slides[currentSlide].category}</span> <span className='text-[#ACACAC]'>|</span> {slides[currentSlide].date}
              </div>
              <h3 className="pb-[10px] sm:pb-[15px] lg:pb-[20px] h3-bold">{slides[currentSlide].title}</h3>
              <p>{slides[currentSlide].description}</p>
            </div>
          </div>
          <div className="sm:basis-[5%] basis-[0%] basis-none">
            <Image
              src={slides[nextSlideIndex].imgSrc}
              alt={slides[nextSlideIndex].title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              priority
            />
          </div>

        </div>
        <div className="flex justify-start mt-6 sm:mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-1 md:px-8 px-4 mr-3 ${currentSlide === index ? 'bg-[#134874]' : 'bg-[#D1D1D1]'}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};




export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>Blog | Company Name</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/blog-header.webp"
          alt="Blogs"
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
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
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <h1 className="text-black max-w-2xl">Blogs</h1>
          </div>
        </div>
      </section>


      <section
        className="
        container
        ml-[280px] w-[calc(100%-280px)] mr-0
        
        xl:ml-[200px] xl:w-[calc(100%-200px)]
        lg:ml-[150px] lg:w-[calc(100%-150px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >

        <div className="md:py-10 py-6 bg-white">
          <div className="container mx-auto px-6">
            <p className="text-[#000000] py-6 sm:max-w-4xl xl:w-1/2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          </div>
        </div>
      </section>


      {/* Featured Section */}
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
        <FeaturedCarousel />

      </div>

      {/* Latest Blogs Section */}
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
        <section className="pb-16 bg-white">

          <BlogList />

        </section>
      </div>
    </div>
  );
}