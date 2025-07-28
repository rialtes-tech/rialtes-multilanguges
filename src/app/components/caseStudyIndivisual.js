"use client";

import Image from "next/image";
import Link from "next/link";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

export default function servicesFeaturedCarousel({ slides }) {
  

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 250,
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
      <div className="flex carousel-button-group absolute top-0 xl:right-52 lg:right-20 md:right-10 right-4 md:mt-20">
        <button aria-label="Previous slide" className={currentSlide === 0 ? 'disable  p-2 mr-4 group transition-all duration-300' : ' p-2 mr-4 group transition-all duration-300'} onClick={() => previous()}>
          <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#707070" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#C3C3C3]">
            <path d="M3 7.5L11 0V15L3 7.5Z" fill="none" className="transition-all duration-300 group-hover:fill-[#C3C3C3] hover:fill-[#C3C3C3]" />
          </svg>
        </button>
        <button aria-label="Next slide" className=" p-2 group transition-all duration-300" onClick={() => next()}>
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
    <section className="relative pb-10">
      <div>
        <div className="flex flex-row justify-between md:mr-24 mr-0 pr-3">
          <h2 className="text-black mb-10  sm:mr-0 mr-20  4xl:w-[70%] xl:w-[55%] w-[55%] leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">Get Inspired By Our Latest Customer Success Stories, Industry Insight, And More</h2>
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
            <div key={slide.id} className="flex sm:flex-row flex-col basis-full xl:mr-12 sm:mr-6 mr-0 group">
              <div className="basis-full sm:basis-2/3 lg:basis-4/3">
                <Link href={slide?.url}>
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
              <div className="flex flex-col text-black basis-full group-hover:bg-[#F0F0F0] bg-white sm:basis-2/3 py-6 sm:py-4 lg:py-10 sm:px-10 lg:px-16 px-6">
                <Link href={slide?.url}><h3 className="pb-[10px] sm:pb-[15px] lg:pb-[20px] h3-bold  4xl:text-[30px] xl:text-[22px] text-[20px] leading-tight">{slide.title}</h3></Link>
                <p className="pb-6 text-[16px] xl:text-[18px] 4xl:text-[24px] leading-tight">{slide.description}</p>
                <Link href={slide?.url} className="font-medium text-[#0092E0] text-[24px] ">Know More</Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
