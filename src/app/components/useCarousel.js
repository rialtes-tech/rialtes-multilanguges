"use client";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useRef } from 'react';
export default function servicesInsightsCarousel() {
  const carouselRef = useRef(null);
  const slides = [
    { id: 1, category: "Healthcare", description: "We understand the dynamics of the healthcare industry. Our MedTech services ensure the smooth operation of technical and mechanical systems within healthcare facilities" },
    { id: 2, category: "Real Estate", description: "Enhance your enterprise-wide operations and real estate management with cutting-edge digital technologies and preconfigured integrations through our tailored SAP Real Estate Management solutions." },
    { id: 3, category: "Manufacturing", description: "Streamline customer relationships, sales processes, and supply chain management in manufacturing companies. We offer manufacturing Software to help you keep your production lines running smoothly." },
    { id: 4, category: "Hi-tech", description: "Our consulting services cover the complete range of technologies and methodologies necessary for creating, integrating, and maintaining Salesforce product ecosystems across platforms." },
    ];
  // Adjust the responsive settings for showing 4 items on the first slide, 2 on the second
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,  // Show 4 items per slide for desktop
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 575 },
      items: 2,  // Show 2 items per slide for tablets
      centerMode: true,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,  // Show 1 item per slide for mobile
      centerMode: true,
    },
  };
  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="carousel-button-group flex">
        <button
          className="bg-white p-2 mr-2 group transition-all duration-300"
          onClick={() => previous()}
          aria-label="Previous slide">
           <span className="sr-only">Previous slide</span>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#707070"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-[#C3C3C3]">
            <path
              d="M3 7.5L11 0V15L3 7.5Z"
              fill="none"
              className="transition-all duration-300 group-hover:fill-[#C3C3C3] hover:fill-[#C3C3C3]"/>
          </svg>
        </button>
        <button
          className="bg-white p-2 group transition-all duration-300"
          onClick={() => next()}
          aria-label="Next slide">
           <span className="sr-only">Next slide</span>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#707070"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-[#C3C3C3]">
            <path
              d="M12 7.5L4 0V15L12 7.5Z"
              fill="none"
              className="transition-all duration-300 group-hover:fill-[#C3C3C3]"
            />
          </svg>
        </button>
      </div>
    );
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
    return (
       <li>
        <div
         role="button"
          className={`w-3 h-1 md:px-8 px-4  mr-3 mb-4 ${active ? "bg-[#134874]" : "bg-[#D1D1D1]"}`}
          onClick={() => onClick()}
          aria-label="Custom Dots"

        />
        </li>
    );
  };

  return (
    <section className="relative pb-8 bg-white">
      <div className='grid  grid-cols-12  mb-[55px]'>
        <p className="w-full md:col-span-7 2xl:col-span-6 col-span-12 text-[16px] md:text-[18px] 4xl:text-[20px] leading-tight">Your business success is influenced by your people. Transform your business with a quantifiable and process-focused system.</p>

        <div className='md:col-span-4 flex justify-end col-span-12 max-md:mt-6'>
          <ButtonGroup
            next={() => carouselRef.current.next()}
            previous={() => carouselRef.current.previous()}
          />

        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between md:mr-24 mr-0 pb-5">
        </div>
        <Carousel
          swipeable={true}
          ref={carouselRef}
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
          renderDotsOutside={true}
          customDot={<CustomDot />}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex md:flex-row flex-col sm:basis-1/4 border border-[#707070] sm:mr-4 mb-4 relative group">
              {/* Optional: Add an image or background here if needed */}
              <div className="w-full h-full min-h-[380px] sm:min-h-[380px] md:min-h-[330px] lg:min-h-[470px] xl:min-h-[420px] 2xl:min-h-[450px] relative bg-white">
                <div className="absolute inset-0 py-[42px] px-[36px] md:px-[30px]">
                  <div className="mt-3 font-semibold text-[18px]  xl:text-[22px] 4xl:text-[30px] ">
                    {slide.category}
                  </div>
                  <p className="mt-5 text-[16px] md:text-[18px] 4xl:text-[20px] leading-tight">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
