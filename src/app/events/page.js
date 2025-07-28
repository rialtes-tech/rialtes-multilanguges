"use client";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Link from "next/link";

const allWebinars = [
  {
    id: 1,
    title: "SAP S/4 HANA: Sourcing and Procurement in S/4 HANA Public Cloud",
    date: "November 12, 2024",
    time: "10:00 AM CST",
    speaker: "Sapana Chauhan",
    position: "Associate Software Engineer",
    image: "/images/events/webinar-thumb-1.webp",
  },
  {
    id: 2,
    title: "Salesforce CPQ: Bundle Configuration and Revenue Cloud Rules",
    date: "November 7, 2024",
    time: "10:00 AM CST",
    speaker: "Divya Agrawal",
    position: "Associate Software Engineer",
    image: "/images/events/webinar-thumb-2.webp",
  },
  {
    id: 3,
    title: "SAP Business AI: Setting Up Joule for SAP S/4 HANA Cloud",
    date: "November 5, 2024",
    time: "10:00 AM CST",
    speaker: "Kushagra Shah",
    position: "Senior Principal Consultant, SAP",
    image: "/images/events/webinar-thumb-3.webp",
  },
];

const allEvents = [
  {
    id: 1,
    image: "/images/events/opentext-world.webp",
    dates: "18-21",
    date: "March 2024",
    fulldate: "March 18, 2024",
    url: '/',
    title: "OpenText World 2024",
    description: "The digital landscape is evolving at a lightning pace, and in this scenario, it is imperative for businesses to accelerate their transformation journey by keeping automation and innovation at the forefront.",
    location: "The Venetian, Las Vegas | Booth #306"
  },
  {
    id: 2,
    image: "/images/events/aws.webp",
    dates: "2-6",
    date: "December 2024",
    fulldate: "December 2, 2024",
    url: '/',
    title: "AWS re:Invent 2024",
    description: "The MedTech Conference is a global hub for the medical technology sector, bringing together forward-thinking professionals, industry leaders, and MedTech innovators.",
    location: "Las Vegas, NV | Booth #779"
  },
  {
    id: 3,
    image: "/images/events/world-economic.webp",
    dates: "15-19",
    date: "January 2025",
    fulldate: "January 15, 2024",
    url: '/',
    title: "World Economic Forum, Davos",
    description: "In the wake of generative AI’s mainstream adoption, organizations worldwide grappled with its impact in 2023. Now a year later at Davos, a deeper understanding of AI’s potential has emerged, signalling a shift from strategy to execution.",
    location: "Toronto, Canada | Booth #628"
  },
  {
    id: 4,
    image: "/images/events/world-economic.webp",
    dates: "15-19",
    date: "April 2025",
    fulldate: "April 15, 2025",
    url: '/',
    title: "World Economic Forum, Davos",
    description: "In the wake of generative AI’s mainstream adoption, organizations worldwide grappled with its impact in 2023. Now a year later at Davos, a deeper understanding of AI’s potential has emerged, signalling a shift from strategy to execution.",
    location: "Toronto, Canada | Booth #628"
  },
];

const FeaturedCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "/images/events/opentext-world-slider.webp",
      dates: "18-21",
      date: "November 2024",
      url: '/',
      title: "OpenText World 2024",
      description: "The digital landscape is evolving at a lightning pace, and in this scenario, it is imperative for businesses to accelerate their transformation journey by keeping automation and innovation at the forefront.",
      location: "The Venetian, Las Vegas | Booth #306"
    },
    {
      id: 2,
      image: "/images/events/aws-slider.webp",
      dates: "2-6",
      date: "December 2024",
      url: '/',
      title: "AWS re:Invent 2024",
      description: "The MedTech Conference is a global hub for the medical technology sector, bringing together forward-thinking professionals, industry leaders, and MedTech innovators.",
      location: "Las Vegas, NV | Booth #779"
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
        <button   aria-label="Previous slide" className={currentSlide === 0 ? 'disable bg-white p-2 mr-2 group transition-all duration-300' : 'bg-white p-2 mr-2 group transition-all duration-300'} onClick={() => previous()}>
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
      <div className="container mx-auto">
        <div className="flex flex-row justify-between md:mr-24 mr-0">
          <h2 className="text-black mb-6 md:pr-40 pr-20">Featured partner and industry events</h2>
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
            <div key={slide.id} className="flex sm:flex-row flex-col md:mr-4 sm:mr-2 group max">
              <div className="w-full md:w-2/5">
                <Link href={'/blog' + slide.url}>
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
              <div className="flex flex-col w-full md:w-3/5 py-4 sm:py-4 md:py-6 xl:py-10 sm:px-10 md:px-12 xl:px-16 px-4 transition duration-300 ease-in-out group-hover:bg-[#F0F0F0]">
                <div className='pb-[10px] sm:pb-[15px] lg:pb-[30px]'>
                  <p className="text-[#0092E0] md:text-[40px] text-[20px] font-bold">{slide.dates}</p>
                  <span>{slide.date}</span>
                </div>
                <Link href={'/blog' + slide.url}><h3 className="text-[#134874] pb-[10px] sm:pb-[15px] lg:pb-[20px] h3-bold sm:line-clamp-none line-clamp-3">{slide.title}</h3></Link>
                <p className="line-clamp-4 pb-6">{slide.description}</p>
                <div className="pb-6 font-semibold md:text-[18px]"><span className=" text-black">{slide.location}</span></div>
                <div className="flex">
                  <button className="bg-[#0092E0] hover:bg-[#ffffff] hover:text-[#0092E0] border-[1px] border-[solid] border-[#0092E0] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6">
                    <Link href=''>Register Now</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default function About() {
  const [eventCategory, setEventCategory] = useState("upcoming");
  const [filteredEvents, setVisibleEvents] = useState(allEvents);
  const [hoveredBlog, setHoveredBlog] = useState(null);
  const [isRouterReady, setIsRouterReady] = useState(false);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const currentDate = new Date();

// Filter events based on the category (upcoming or past)
const filterEvents = (category) => {
  const filtered = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return category === "upcoming" ? eventDate >= currentDate : eventDate < currentDate;
  });
  setVisibleEvents(filtered);
};

// Filter events based on search query
const filterEventsBySearch = (query) => {
  const filtered = allEvents.filter((event) =>
    event.title.toLowerCase().includes(query.toLowerCase()) &&
    (eventCategory === "upcoming" ? new Date(event.date) >= currentDate : new Date(event.date) < currentDate)
  );
  setVisibleEvents(filtered);
};

// Handle category change (Upcoming / Past)
const handleCategoryChange = (category) => {
  setEventCategory(category);
  filterEvents(category);
};

// Handle search query change
const handleSearchChange = (event) => {
  const query = event.target.value;
  setSearchQuery(query);
  filterEventsBySearch(query); // Apply search filter
};

  useEffect(() => {
    filterEvents(eventCategory); // Initial load based on "upcoming" category
  }, [eventCategory]);

  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const visibleFilteredEvents = filteredEvents.slice(0, visibleCount);

  const hasMore = visibleCount < allEvents.length;

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
      </Head>

      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="xl:py-16 py-10 bg-white">
          <div className="container mx-auto">
            <h1 className="text-[#000000] py-6 max-w-xl mb-12">
              Hear from our experts at events all over the world
            </h1>
          </div>
        </section>
      </div>

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


      <div
        className="
              container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
              sm:mx-5 sm:w-[calc(100%-40px)]
              xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="container py-32 xl:pr-40 pr-6">

          {/* Search Input */}
          <div className="flex justify-center mb-10">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-4 border border-[#707070] w-full focus:outline-none"
              placeholder="Type to search"
            />
          </div>

          <div className="flex mb-8">
            <button
              className={` border-[1px] border-[solid] md:py-6 py-4 md:px-8 px-4 transition duration-300 mr-4 ${eventCategory === "upcoming" ? "bg-[#0092E0] text-white hover:bg-[#ffffff] hover:text-[#0092E0]" : "bg-[#ffffff] hover:text-[#ffffff] hover:bg-[#0092E0] hover:border-[#0092E0]"
                }`}
              onClick={() => handleCategoryChange("upcoming")}
            >
              Upcoming events
            </button>
            <button
              className={`border-[1px] border-[solid] md:py-6 py-4 md:px-8 px-4 transition duration-300 ${eventCategory === "past" ? "bg-[#0092E0] text-white hover:bg-[#ffffff] hover:text-[#0092E0]" : "bg-[#ffffff] hover:text-[#ffffff] hover:bg-[#0092E0] hover:border-[#0092E0]"
                }`}
              onClick={() => handleCategoryChange("past")}
            >
              Past events
            </button>
          </div>

          <div className="grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 xl:gap-0 md:gap-6 gap-6">
            {filteredEvents.map((webinar) => (
              <div
                key={webinar.id}
                className="xl:border-b border border-gray-200 overflow-hidden shadow-sm transition-shadow flex xl:flex-row flex-col xl:py-10"
                onMouseEnter={handleMouseEnter(webinar.id)}
                onMouseLeave={handleMouseLeave(webinar.id)}
                onClick={handleClick("/about-us")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredBlog === webinar.id ? "#f1f1f1" : "transparent",
                  cursor: "pointer",
                }}
              >
                <div className="min-w-[250px] min-h-[220px] overflow-hidden">
                  <div
                    className="h-full w-full overflow-hidden"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === webinar.id ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    <Image
                      src={webinar.image}
                      alt={webinar.title}
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

                <div className="flex flex-col xl:px-10 px-6 py-6 xl:w-1/4">
                  <span className="text-[#0092E0] text-[40px] font-bold">{webinar.dates}</span>
                  <span className="text-[20px]">{webinar.date}</span>
                </div>

                <div className="xl:h-full flex flex-col items-start gap-2 xl:px-0 xl:pb-0 px-6 pb-6">
                  <h3 className="text-[#134874] mb-2 font-bold">
                    {webinar.title}
                  </h3>

                  <div className="text-sm text-gray-600 mb-3 max-w-xl">
                    <p className="pb-10">{webinar.description}</p>
                    <p className="text-black text-[20px]">{webinar.location}</p>
                  </div>
                </div>

                <div className="mb-4 flex xl:justify-center xl:pl-6 px-6">
                  <button className="text-[#0092E0] hover:text-blue-700 font-medium text-md">
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-8">
              <button
                type='button'
                className={`border border-[#707070]  font-medium w-[160px] h-[50px] relative group hover:bg-[#EDEDED] cursor-pointer`}
                onClick={handleLoadMore}
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
        </section>
      </div>

      <div
        className="
              container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
              sm:mx-5 sm:w-[calc(100%-40px)]
              xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="container py-10 xl:pr-40 pr-6">
          <div className="flex flex-row justify-between items-center mb-10">
            <h2>Webinars</h2>
            <button className="bg-[#ffffff] hover:bg-[#134874] hover:text-white border-[1px] border-[solid] border-[#134874] font-semibold text-[#134874] py-3 px-8 transition duration-300 order-4">
              <Link href='/webinar'>See All Webinars &#8594;</Link>
            </button>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {allWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="border border-gray-200 overflow-hidden shadow-sm transition-shadow"
                onMouseEnter={handleMouseEnter(webinar.id)}
                onMouseLeave={handleMouseLeave(webinar.id)}
                onClick={handleClick("/about-us")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredBlog === webinar.id ? "#f1f1f1" : "transparent",
                  border: hoveredBlog === webinar.id ? "1px solid #f1f1f1" : "",
                  cursor: "pointer",
                }}
              >
                <div className="w-full overflow-hidden">
                  <div
                    className="h-full w-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === webinar.id ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    <Image
                      src={webinar.image}
                      alt={webinar.title}
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

                <div className="p-8 h-full flex flex-col items-start gap-2">
                  <h3 className="text-[#134874] mb-2">
                    {webinar.title}
                  </h3>

                  <div className="text-gray-600 mb-3">
                    <p>{webinar.date}</p>
                    <p>{webinar.time}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-medium">{webinar.speaker}</h3>
                    <p className="text-gray-600">{webinar.position}</p>
                  </div>

                  <button className="text-[#0092E0] hover:text-blue-700 font-medium">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
