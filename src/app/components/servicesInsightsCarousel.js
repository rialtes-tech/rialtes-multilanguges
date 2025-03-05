"use client";

import Image from "next/image";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';


export default function servicesInsightsCarousel() {
  const slides = [
    {
      id: 1,
      category: "Blog 1",
      image: "/images/blog/blog-1.webp",
      title: "Mastering Time and Attendance Management with SAP SuccessFactors",
      description: "Time recording is crucial for paying employees, invoicing customers, and allocating costs, particularly in manufacturing, the public sector, and professional services. It ties into vacation booking",
    },
    {
      id: 2,
      category: "Blog 2",
      image: "/images/blog/blog-2.webp",
      title: "Committing to a Greener Planet: Why We’re Pledging to 1t.org’s One Trillion Trees Initiative",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      id: 3,
      category: "Blog 3",
      image: "/images/blog/blog-3.webp",
      title: "Optimizing Healthcare Operations with KIPU EMR Integration and Salesforce",
      description: "Time recording is crucial for paying employees, invoicing customers, and allocating costs, particularly in manufacturing, the public sector, and professional services. It ties into vacation booking",
    },
    {
      id: 4,
      category: "Blog 4",
      image: "/images/blog/blog-4.webp",
      title: "Maximize Business Potential with Integration of SAP S/4HANA with SAP Business Technology Platform (BTP)",
      description: "Time recording is crucial for paying employees, invoicing customers, and allocating costs, particularly in manufacturing, the public sector, and professional services. It ties into vacation booking",
    },
    {
      id: 5,
      category: "Blog 5",
      image: "/images/blog/blog-5.webp",
      title: "From Insights to Action: Leveraging Salesforce Data Cloud for 360° Customer Views",
      description: "Time recording is crucial for paying employees, invoicing customers, and allocating costs, particularly in manufacturing, the public sector, and professional services. It ties into vacation booking",
    },
    {
      id: 6,
      category: "Blog 6",
      image: "/images/blog/blog-6.webp",
      title: "SAP SuccessFactors Performance and Goal Management",
      description: "Time recording is crucial for paying employees, invoicing customers, and allocating costs, particularly in manufacturing, the public sector, and professional services. It ties into vacation booking",
    },
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
      <div className="container mx-auto pl-6">
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
              className={`flex md:flex-row flex-col sm:basis-1/4 border border-[#707070] sm:mr-4 mb-4 relative group md:min-h-[450px] min-h-[350px] text-white`}
            >
              <div className="min-h-[350px] min-w-full relative">
                <Image
                  className="min-h-[350px]"
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
                  <a href="#" className="font-medium">Learn more &#8594;</a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );

}