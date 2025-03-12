"use client";
// pages/case-study.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import BlogsCarousel from '../components/latestBlogCarousel';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const latestCaseStudy = [
  {
    id: 1,
    image: "/images/case-studies/case-study-1_thumb.webp",
    industry: "Manufacturing",
    date: "8 Jan 2025",
    url: "/case-study-3",
    title: "Streamlined DevOps using Copado and Salesforce",
    description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
  },
  {
    id: 2,
    image: "/images/case-studies/case-study-2_thumb.webp",
    industry: "Real Estate",
    date: "22 Dec 2024",
    url: "/case-study-2",
    title: "RealForce Banking Module - ACH",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
  },
  {
    id: 3,
    image: "/images/case-studies/case-study-3_thumb.webp",
    industry: "Healthcare",
    date: "17 Nov 2024",
    url: "/case-study-1",
    title: "Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP",
    description: "A global medical technology company that develops and manufactures innovative products",
  },
  {
    id: 4,
    image: "/images/case-studies/case-study-4_thumb.webp",
    industry: "Manufacturing",
    date: "14 Oct 2024",
    url: "/case-study-7",
    title: "Omnichannel case management with Salesforce Service Cloud",
    description: "A leading provider of high-performance analog semiconductors for wireless and wired connectivity.",
  },
  {
    id: 5,
    image: "/images/case-studies/case-study-5_thumb.webp",
    industry: "Public Sector",
    date: "27 Sept 2024",
    url: "/case-study-6",
    title: "A public housing in US",
    description: "A Public housing authority responsible for managing affordable housing programs across multiple counties in their zone.",
  },
  {
    id: 6,
    image: "/images/case-studies/case-study-6_thumb.webp",
    industry: "Real Estate",
    date: "4 Sept 2024",
    url: "/case-study-5",
    title: "Yardi Managed Services",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
  },
  {
    id: 7,
    image: "/images/case-studies/case-study-7_thumb.webp",
    industry: "Healthcare",
    date: "25 Oct 2024",
    url: "/case-study-4",
    title: "Digitizing patient journey using Salesforce health cloud",
    description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
  },
  {
    id: 8,
    image: "/images/case-studies/case-study-8_thumb.webp",
    industry: "Healthcare",
    date: "25 Oct 2024",
    url: "/case-study-8",
    title: "Salesforce Health Cloud, Prior Authorization",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
  },
  // Add more case study objects as needed
];

const CaseStudyCard = ({ casestudy }) => (
  <div className="border border-[#707070] w-full h-full flex flex-col group">
    <div className="relative overflow-hidden">
      <Link href={casestudy.url}>
        <Image
          className="w-full transition-transform duration-300 hover:scale-105"
          src={casestudy.image}
          alt={casestudy.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          priority
        />
      </Link>
    </div>
    <div className="p-6 flex-grow flex flex-col justify-between transition duration-300 ease-in-out group-hover:bg-[#F0F0F0]">
      <div>
        <div className='pb-2 md:pb-4'>
          <span className='text-[#0092E0]'>{casestudy.industry}</span>
          <span className='text-[#ACACAC]'> | </span>
          {casestudy.date}
        </div>
        <Link href={casestudy.url}><h4 className="mb-2 md:mb-4 md:font-semibold line-clamp-4">{casestudy.title}</h4></Link>
      </div>
      <div className="flex flex-col">
        <p className='line-clamp-4 md:mb-4 mb-2'>{casestudy.description}</p>
      </div>
    </div>
  </div>
);

const CaseStudy = () => {
  const [visibleCaseStudy, setvisibleCaseStudy] = useState(6);
  const [showOptionsIndustry, setShowOptionsIndustry] = useState(false);
  const [showOptionsCategory, setShowOptionsCategory] = useState(false);

  const loadMoreCaseStudy = () => {
    setvisibleCaseStudy((prevvisibleCaseStudy) => prevvisibleCaseStudy + 6);
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

  const filterCaseStudyByIndustry = (industry) => {
    setSelectedIndustry(industry);
    setShowOptionsIndustry(false);
  };

  const filteredBlogs = selectedIndustry === 'All' ? latestCaseStudy : latestCaseStudy.filter(blog => blog.industry === selectedIndustry);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterCaseStudyByCategory = (category) => {
    setSelectedCategory(category);
    setShowOptionsCategory(false);
  };

  const filteredCaseStudyByCategory = selectedCategory === 'All' ? filteredBlogs : filteredBlogs.filter(blog => blog.category === selectedCategory);

  const isLoadMoreVisible = visibleCaseStudy < filteredCaseStudyByCategory.length;

  return (
    <div className="container mx-auto text-black xl:pr-[150px] pr-6">
      <div className="flex md:flex-row flex-col pb-4 sm:items-center">
        <div className="flex flex-col md:pb-0 pb-4">
          <h3 className="text-black">Search result by {selectedIndustry} industry</h3>
        </div>
        <div className="relative flex md:flex-row md:ml-auto h-[60px]">
          <div className="relative">
            <button className='relative border border-[#707070] sm:w-40 w-36 py-4 px-2 text-l hover:bg-[#EDEDED] focus:bg-[#EDEDED]' onClick={toggleOptionsIndustry}>
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
              <div className='absolute bg-white border border-[#707070] w-[165px] md:w-[250px] right-0 z-10'>
                <ul>
                  <li className='px-5 pt-4 py-2 cursor-pointer' onClick={() => filterCaseStudyByIndustry('All')}>All</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterCaseStudyByIndustry('Healthcare')}>Healthcare</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterCaseStudyByIndustry('Manufacturing')}>Manufacturing</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterCaseStudyByIndustry('Real Estate')}>Real Estate</li>
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterCaseStudyByIndustry('Hi tech')}>Hi tech</li>
                  {/* <li className='px-5 py-2 cursor-pointer' onClick={() => filterCaseStudyByIndustry('Finance')}>Finance</li> */}
                  <li className='px-5 py-2 cursor-pointer' onClick={() => filterCaseStudyByIndustry('Public Sector')}>Public Sector</li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>

      <div className="py-6"></div>

      {filteredCaseStudyByCategory.length === 0 ? (
        <p className='text-center text-xl py-4'>No Case Study Found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
          {filteredCaseStudyByCategory.slice(0, visibleCaseStudy).map((casestudy) => (
            <CaseStudyCard key={casestudy.id} casestudy={casestudy} />
          ))}
        </div>
      )}

      {isLoadMoreVisible && (
        <div className='w-full mx-auto text-center md:py-20 py-10'>
          <button
            type='button'
            className={`border border-[#707070]  font-medium w-[160px] h-[50px] relative group hover:bg-[#EDEDED] ${visibleCaseStudy >= filteredCaseStudyByCategory.length ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
            onClick={loadMoreCaseStudy}
            disabled={visibleCaseStudy >= filteredCaseStudyByCategory.length}
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
      imgSrc: '/images/case-studies/case-study-slider-thumb-1.webp',
      category: 'Healthcare and Life Sciences',
      date: '25 Oct 2024',
      url: "/case-study-1",
      title: 'Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP',
      description: 'The MedTech company’s manual order processing involved manual data entry across Salesforce, including sales & patient management, and SAP, including finance & accounting.'
    },
    {
      id: 2,
      imgSrc: '/images/case-studies/case-study-slider-thumb-2.webp',
      category: 'Healthcare and Life Sciences',
      date: '25 Oct 2024',
      url: "/case-study-4",
      title: 'Digitizing patient journey using Salesforce health cloud',
      description: 'The MedTech company had recently implemented a new patient journey system. However, the system lacked functionalities to effectively guide patients through their healthcare experience.'
    }
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 200,
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
      <div className="flex carousel-button-group absolute top-0 xl:right-[175px] right-6 md:mt-4">
        <button className={currentSlide === 0 ? 'disable bg-white p-2 mr-5 group transition-all duration-300' : 'bg-white p-2 mr-5 group transition-all duration-300'} onClick={() => previous()}>
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
      <div className="container mx-auto">
        <div className="flex flex-row justify-between md:mr-24 mr-0">
          <h2 className="text-black mb-6">Latest Studies</h2>
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
            <div key={slide.id} className="flex sm:flex-row flex-col sm:basis-[95%] basis-[100%] border border-[#707070] xl:mr-12 mr-6 group">
              <div className="basis-full sm:basis-2/3 lg:basis-4/3">
                <Link href={slide.url}>
                  <Image
                    src={slide.imgSrc}
                    alt={slide.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority
                  />
                </Link>
              </div>
              <div className="flex flex-col text-black basis-full group-hover:bg-[#F0F0F0] sm:basis-2/3 py-4 sm:py-4 lg:py-10 sm:px-10 lg:px-16 px-4">
                <div className='pb-[10px] sm:pb-[15px] lg:pb-[20px]'>
                  <span className='text-[#0092E0]'>{slide.category}</span> <span className='text-[#ACACAC]'>|</span> {slide.date}
                </div>
                <Link href={slide.url}><h3 className="pb-[10px] sm:pb-[15px] lg:pb-[20px] h3-bold">{slide.title}</h3></Link>
                <p>{slide.description}</p>
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
    <div className="min-h-screen bg-white">
      <Head>
        <title>Case Study | Company Name</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/case-study-header.webp"
          alt="Case Study"
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
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
              <h3 className="text-white text-[300] font-medium mb-2">Case Studies</h3>
              <h1 className="text-white max-w-2xl">
                Rial Results, Rial Impact
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
          sm:mx-6 sm:w-[calc(100%-40px)]
          xs:mx-4 xs:w-[calc(100%-32px)]"
      >

        <div className="md:py-10 py-6 bg-white">
          <div className="container mx-auto">
            <p className="text-[#000000] py-6 max-w-4xl xl:max-w-2xl">Discover how Rialtes empowers businesses with transformative SAP and Salesforce solutions. Our case studies highlight real-world success stories, showcasing how organizations across industries have leveraged our expertise to optimize operations, enhance customer experiences, and drive growth.</p>
          </div>
        </div>
      </section>


      {/* Latest Studies */}
      <div
        className="
        container
          ml-[15px] w-[calc(100%-15px)] mr-0
          xl:ml-[280px] xl:w-[calc(100%-280px)]
          md:ml-[100px] md:w-[calc(100%-100px)]
          sm:mx-5 sm:w-[calc(100%-40px)]
          xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <FeaturedCarousel />

      </div>

      {/* Latest Case Study Section */}
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

          <CaseStudy />

        </section>
      </div>

      {/* Latest Blogs */}
      <div
        className="
        container
          ml-[15px] w-[calc(100%-15px)] mr-0
          xl:ml-[280px] xl:w-[calc(100%-280px)]
          md:ml-[100px] md:w-[calc(100%-100px)]
          sm:mx-5 sm:w-[calc(100%-40px)]
          xs:mx-4 xs:w-[calc(100%-32px)]
          mb-10"
      >
        <BlogsCarousel />

      </div>
    </div>
  );
}