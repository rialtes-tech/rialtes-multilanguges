"use client";

import Image from "next/image";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

export default function servicesFeaturedCarousel() {
  const slides = [
    {
      id: 1,
      url: "/insights/case-studies/streamlined-devops-using-copado-and-salesforce",
      imgSrc: "/images/case-studies/case study 3_thumb_n.webp",
      title: "Streamlined DevOps using Copado and Salesforce",
      description:
        "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
    },
    {
      id: 2,
      url: "/insights/case-studies/realForce-banking-module-ach",
      imgSrc: "/images/case-studies/case-study-2_thumb_n.webp",
      title: "RealForce Banking Module - ACH",
      description:
        "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
    },
    {
      id: 3,
      url: "/insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap",
      imgSrc: "/images/case-studies/case study 1_thumb_n.webp",
      title:
        "Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP",
      description:
        "A global medical technology company that develops and manufactures innovative products",
    },
  ];

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
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="flex carousel-button-group absolute md:top-0 top-[64px]  xl:right-52 lg:right-20 md:right-10 right-4 md:mt-20">
        <button
          className={
            currentSlide === 0
              ? "disable  p-2 mr-4 group transition-all duration-300"
              : " p-2 mr-4 group transition-all duration-300"
          }
          onClick={() => previous()}
        >
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
            className="group-hover:stroke-[#C3C3C3]"
          >
            <path
              d="M3 7.5L11 0V15L3 7.5Z"
              fill="none"
              className="transition-all duration-300 group-hover:fill-[#C3C3C3] hover:fill-[#C3C3C3]"
            />
          </svg>
        </button>
        <button
          className=" p-2 group transition-all duration-300"
          onClick={() => next()}
        >
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
            className="group-hover:stroke-[#C3C3C3]"
          >
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
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button
        className={`w-3 h-1 md:px-8 px-4 mr-3 mb-4 ${
          active ? "bg-[#134874]" : "bg-[#D1D1D1]"
        }`}
        onClick={() => onClick()}
      />
    );
  };

  return (
    <section className="relative pb-10">
      <div>
        <div className="flex flex-col justify-between">
          <h2 className="text-black mb-[87px] 4xl:w-[62%] xl:w-[55%] w-[50%] leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]  max-sm:text-[18px]">
            Get Inspired By Our Latest Customer Success Stories, Industry
            Insight, And More
          </h2>
          <div>
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
              // containerClass="carousel-container"
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
                  className="flex sm:flex-row flex-col basis-full xl:mr-12 sm:mr-6 mr-0 group"
                >
                  <div className="basis-full sm:basis-2/3 lg:basis-4/3">
                    <Link href={slide.url}>
                      <Image
                        src={slide.imgSrc}
                        alt={slide.title}
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
                    </Link>
                  </div>
                  <div className="flex flex-col text-black basis-full group-hover:bg-[#F0F0F0] bg-white sm:basis-2/3 py-6 sm:py-4 lg:py-10 sm:px-10 lg:px-16 px-6">
                    <Link href={slide.url}>
                      <h3 className="pb-[10px] sm:pb-[15px] lg:pb-[20px] h3-bold 4xl:text-[30px] xl:text-[24px] text-[20px]">
                        {slide.title}
                      </h3>
                    </Link>
                    <p className="pb-6 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{slide.description}</p>
                    <Link
                      href={slide.url}
                      className="font-medium text-[#0092E0] xl:text-[20px] text-[16px]"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
