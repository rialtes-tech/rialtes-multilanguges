"use client";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useRef } from 'react';
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../messages/en/homepage.json';
import esContent from '../../../../messages/es/homepage.json';
import frContent from '../../../../messages/fr/homepage.json';
import { changeLocalization } from './changeLocalization';

export default function servicesInsightsCarousel() {
  const t = useTranslations('useCarouselComponent')
  const locale = useLocale();
  const homepageContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { slides } = homepageContent.useCarouselComponent;
  const carouselRef = useRef(null);

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
              className="transition-all duration-300 group-hover:fill-[#C3C3C3] hover:fill-[#C3C3C3]" />
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
        <span
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
        <p className="w-full md:col-span-7 2xl:col-span-6 col-span-12 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{t('title')}</p>

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
  className="flex border border-[#707070] sm:mr-4 mb-4 relative"
>
  <div
    className={`w-full h-[300px] sm:h-full relative bg-white
      ${locale === "es"
        ? "md:h-[300px] 4xl:h-[500px] 2xl:h-[450px] xl:h-[500px]"
        : locale === "fr"
        ? "md:h-[300px] 4xl:h-[500px] 2xl:h-[450px] xl:h-[500px]"
        : "md:h-[300px] 4xl:h-[450px] 2xl:h-[400px] xl:h-[450px]"
      }`}
  >
    <div className="absolute inset-0 py-[42px] px-[36px]">
      <div className="mt-3 font-semibold text-[18px] xl:text-[22px] 4xl:text-[30px]">
        {slide.category}
      </div>
      <p className="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
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
