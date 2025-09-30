"use client";
import Image from "next/image";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Link from "next/link";


export default function RelatedTopicsCarousel({ slides }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
      <div className="flex carousel-button-group absolute top-0 lg:right-32 sm:right-4 right-0 md:mt-4">
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
    <section className="relative pb-6 bg-white">
      <div className="mb-[36px]">
        <div className="flex flex-row max-md:flex-col justify-between md:mr-24 mr-0">
          <h2 className="text-black xl:mb-[82px] mb-[40px]  4xl:text-[60px]  2xl:text-[48px]   xl:text-[42px] md:text-[28px]">Related <br className="block min-[360px]:hidden"/> Topics</h2>
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
          containerClass="carousel-container pb-4"
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
              className="flex flex-col sm:basis-1/4 border border-[#707070] sm:mr-4 h-full group"
            >
              <div className="relative max-h-[300px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  priority
                />
                <div className="absolute inset-0 bg-[#0092E053] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col  text-black py-4 px-6 flex-grow transition duration-300 ease-in-out group-hover:bg-[#F0F0F0]">
                <div className="flex flex-col">
                  <div><span className="text-[#0092E0]">{slide.category}</span> | {slide.date}</div>
                  <Link href={'/'+slide.url}><h5 className="my-3 sm:line-clamp-4 line-clamp-3 font-bold">{slide.title}</h5></Link>

                </div>
                <p className="line-clamp-4">{slide.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}