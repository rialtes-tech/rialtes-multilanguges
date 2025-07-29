"use client";

import Image from "next/image";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../messages/en/homepage.json';
import esContent from '../../../../messages/es/homepage.json';

export default function servicesExploreMoreCarousel() {
  const t = useTranslations("exploreMore");
  const locale = useLocale();
  const homepageContent = locale === "es" ? esContent : enContent;
  const { slides } = homepageContent.exploreMore;
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
      <div className="carousel-button-group absolute top-0 lg:right-32 right-4 md:mt-4">
        <button className={currentSlide === 0 ? 'disable p-2 mr-2 group transition-all duration-300' : 'p-2 mr-2 group transition-all duration-300'} onClick={() => previous()}>
          <span className="sr-only">Previous slide</span>
          <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#707070" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#C3C3C3]">
            <path d="M3 7.5L11 0V15L3 7.5Z" fill="none" className="transition-all duration-300 fill-white group-hover:fill-[#C3C3C3] hover:fill-[#C3C3C3]" />
          </svg>
        </button>
        <button className="p-2 group transition-all duration-300" onClick={() => next()}>
          <span className="sr-only">Next slide</span>
          <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#707070" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#C3C3C3]">
            <path d="M12 7.5L4 0V15L12 7.5Z" fill="none" className="transition-all duration-300 fill-white group-hover:fill-[#C3C3C3]" />
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
        <span
          role="button"
          className={`w-3 h-1 md:px-8 px-4 mr-3 mb-4 ${active ? "bg-[#134874]" : "bg-[#D1D1D1]"}`}
          onClick={() => onClick()}
          aria-label="Custom Dots"
        />
      </li>
    );
  };

  return (
    <section className="relative sm:pb-10 pb-16">
      <div className=" mx-auto">
        <div className="flex flex-row justify-between md:mr-24 mr-0">
          <h2 className="text-white mb-14 mr-20 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">{t('headerTitle')}</h2>
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
          itemClass="carousel-item-padding-40-px lg:mb-[30px]"
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
              className={`flex md:flex-row flex-col sm:basis-1/4 border border-[#707070] sm:mr-4 mr-6 relative group text-white`}
            >
              <div className="w-full relative overflow-hidden group">
                <a href={slide.url} tabIndex={-1}
                  style={{ display: 'block' }}
                  className='relative block'>
                  <Image
                    className="transition-transform duration-300 group-hover:scale-105"
                    src={slide.image}
                    alt={slide.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority
                  />
                  <h4 className="absolute inset-0 p-6 my-4 line-clamp-4 md:line-clamp-none 4xl:text-[32px] xl:text-[24px] text-[22px] leading-tight">{slide.title}</h4>
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );

}