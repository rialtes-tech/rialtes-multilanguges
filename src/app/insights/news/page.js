"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const latestCaseStudy = [
  {
    id: 1,
    image: "/images/news/generic thumb.webp",
    industry: "News",
    date: "4 April 2025",
    url: "/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh",
    title: "Rialtes Technologies Opens New Sales Office in Baddi, Himachal Pradesh.",
  },
  {

    id: 2,
    image: "/images/news/AdobeStock_1191609729.webp",
    industry: "News",
    date: "4 April 2025",
    url: "/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh",
    title: "Rialtes Technologies Opens New Sales Office in Baddi, Himachal Pradesh to Tap into Unexplored",
  },
  {
    id: 3,
    image: "/images/news/AdobeStock_1336683433.webp",
    industry: "News",
    date: "4 April 2025",
    url: "/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh",
    title: "Rialtes Technologies Opens New Sales Office in Baddi, Himachal Pradesh to Tap into Unexplored",
  },
  {
    id: 4,
    image: "/images/news/AdobeStock_371788649.webp",
    industry: "News",
    date: "4 April 2025",
    url: "/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh",
    title: "Rialtes Technologies Opens New Sales Office in Baddi, Himachal Pradesh to Tap into Unexplored",
  },
  {
    id: 5,
    image: "/images/news/dummy 1.webp", 
    industry: "News",
    date: "4 April 2025",
    url: "/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh",
    title: "Rialtes Technologies Opens New Sales Office in Baddi, Himachal Pradesh to Tap into Unexplored",
  },
  {
    id: 6,
    image: "/images/news/AdobeStock_961147936.webp",
    industry: "News",
    date: "4 April 2025",
    url: "/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh",
    title: "Rialtes Technologies Opens New Sales Office in Baddi, Himachal Pradesh to Tap into Unexplored",
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
          <div className="pb-2 md:pb-4">
            <span className="text-[#0092E0]">{casestudy.industry}</span>
            <span className="text-[#ACACAC]"> | </span>
            {casestudy.date}
          </div>
          <Link href={casestudy.url}>
            <h4 className="mb-2 md:mb-4 md:font-semibold xl:text-[30px] text-[20px] line-clamp-4">{casestudy.title}</h4>
          </Link>
        </div>
        <p className="text-[#0092E0] font-bold mt-5 xl:text-[20px] text-[18px]">Read More</p>
      </div>
    </div>
  );
  const CaseStudy = () => {
    const [visibleCaseStudy, setVisibleCaseStudy] = useState(6);
    const loadMoreCaseStudy = () => setVisibleCaseStudy((prev) => prev + 6);
    const isLoadMoreVisible = visibleCaseStudy < latestCaseStudy.length;
  
    return (
      <div className="text-black">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
          {latestCaseStudy.slice(0, visibleCaseStudy).map((casestudy) => (
            <CaseStudyCard key={casestudy.id} casestudy={casestudy} />
          ))}
        </div>
  
        {isLoadMoreVisible && (
          <div className="w-full mx-auto text-center md:py-20 py-10">
            <button
              type="button"
              className="border border-[#707070] font-medium w-[160px] h-[50px] relative group hover:bg-[#EDEDED]"
              onClick={loadMoreCaseStudy}
            >
              <span className="group-hover:pr-4 transition-all duration-300">Load more</span>
              <svg
                className="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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
      imgSrc: '/images/news/Latest news thumb.webp',
      category: 'News',
      date: '4 April 2025',
      url: "/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh",
      title: 'Rialtes Technologies Opens New Sales Office in Baddi, Himachal Pradesh.',
      description: 'Rialtes Technologies, a leading global consulting firm, has announced the grand opening of its new Sales'
    },
    {
      id: 2,
      imgSrc: '/images/news/AdobeStock_1336683433.webp',
      category: 'News',
      date: '4 April 2025',
      url: "/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh",
      title: 'Rialtes Technologies Opens New Sales Office in Baddi, Himachal Pradesh.',
      description: 'Rialtes Technologies, a leading global consulting firm, has announced the grand opening of its new Sales.'
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
      <div>
        <div className="flex flex-row justify-between md:mr-24 mr-0">
          <h2 className="text-black mb-6 xl:text-[60px] text-[30px]">Latest news</h2>
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
                <div className='pb-[10px]  text-[20px] sm:pb-[15px] lg:pb-[20px]'>
                  <span className='text-[#0092E0]'>{slide.category}</span> <span className='text-[#ACACAC]'>|</span> {slide.date}
                </div>
                <Link href={slide.url}><h3 className="pb-[10px] sm:pb-[15px] lg:pb-[20px] h3-bold xl:text-[35px]">{slide.title}</h3></Link>
                <p className="xl:text-[20px] text-[18px]">{slide.description}</p>
                <h4 className="xl:mt-20 text-[#0092E0] xl:text-[20px] mt-5">Read More</h4>
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
          src="/images/news/news header.webp"
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
              <h3 className="xl:text-[74px] text-[30px] font-normal mb-2">News</h3>
             
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
            <p className="text-[#000000] py-6 max-w-4xl xl:max-w-2xl xl:text-[20px] text-[18px]">Explore how we’re shaping the future of businesses worldwide. Your go-to source for the latest updates, achievements, and innovations from Rialtes. Stay informed with our latest news, press releases, and industry insights as we continue to push boundaries in process consulting, AI-driven enterprise solutions, and digital transformation.</p>
          </div>
        </div>
      </section>


      {/* Latest Studies */}
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

      {/* Latest news Section */}
      <div
        className="
          ml-[15px] w-[calc(100%-15px)] mr-0
          xl:ml-[280px] xl:w-[calc(100%-280px)]
          md:ml-[100px] md:w-[calc(100%-100px)]
          sm:mx-5 sm:w-[calc(100%-40px)]
          xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="xl:py-16 py-10 bg-white xl:pr-[142px]">

          <CaseStudy />

        </section>
      </div>

    </div>
  );
}