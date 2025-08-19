"use client";
import Image from "next/image";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../messages/en/homepage.json';
import esContent from '../../../../messages/es/homepage.json';
import frContent from '../../../../messages/fr/homepage.json';

import { changeLocalization } from "./changeLocalization";
export default function servicesFeaturedCarousel() {
  const t = useTranslations('featuredCarousel')
  const locale = useLocale();
  const homepageContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { slides } = homepageContent.featuredCarousel;
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
      <div className="flex carousel-button-group absolute md:top-0 top-[64px] xl:right-52 lg:right-20 md:right-10 right-4 md:mt-20">
        <button
          className={
            currentSlide === 0
              ? "disable p-2 mr-4 group transition-all duration-300"
              : " p-2 mr-4 group transition-all duration-300"
          }
          onClick={() => previous()}
          aria-label="Previous slide"
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
            className="group-hover:stroke-[#C3C3C3]">
            <path
              d="M3 7.5L11 0V15L3 7.5Z"
              fill="none"
              className="transition-all duration-300 group-hover:fill-[#C3C3C3] hover:fill-[#C3C3C3]" />
          </svg>
        </button>
        <button
          className=" p-2 group transition-all duration-300"
          onClick={() => next()}
          aria-label="Next slide"
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
            className="group-hover:stroke-[#C3C3C3]">
            <path
              d="M12 7.5L4 0V15L12 7.5Z"
              fill="none"
              className="transition-all duration-300 group-hover:fill-[#C3C3C3]" />
          </svg>
        </button>
      </div>
    );
  };
  const CustomDot = ({ onClick, ...rest }) => {
    const {
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <li>
        <span
          role="button"
          className={`w-3 h-1 md:px-8 px-4 mr-3 mb-4 ${active ? "bg-[#134874]" : "bg-[#D1D1D1]"
            }`}
          onClick={() => onClick()}
          aria-label="Custom Dots"

        />
      </li>
    );
  };
  return (
    <section className="relative pb-10">
      <div>
        <div className="flex flex-col justify-between">
          <h2 className="text-black mb-[87px] 4xl:w-[62%] xl:w-[55%] w-[50%] leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]  max-md:text-[18px]">
            {t('getInspiredTitle')}
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
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style !justify-start flex-wrap"
              itemClass="carousel-item-padding-40-px mb-[30px]"
              partialVisible={true}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}
              renderDotsOutside={true}
              customDot={<CustomDot />}>
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex h-full  md:flex-row flex-col basis-full xl:mr-12 md:mr-6 mr-0 group">
                  <div className="basis-full md:basis-2/3 lg:basis-4/3">
                    <Link href={slide.url} tabIndex={-1}>
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
                        priority />
                    </Link>
                  </div>
                  <div className="flex flex-col text-black basis-full group-hover:bg-[#F0F0F0] bg-white md:basis-2/3 py-6 md:py-4 lg:py-10 md:px-10 lg:px-16 px-6">
                    <Link href={slide.url} tabIndex={-1}>
                      <h3 className="pb-[10px] md:pb-[15px] lg:pb-[20px] h3-bold 4xl:text-[30px] xl:text-[24px] text-[20px]">
                        {slide.title}
                      </h3>
                    </Link>
                    <p className="pb-6 text-[16px] xl:text-[18px] 4xl:text-[24px] leading-tight">{slide.description}</p>
                    <Link tabIndex={-1}
                      href={slide.url}
                      className="font-medium text-[#0092E0] xl:text-[24px] text-[16px]">
                      {t('knowMoreTitle')}
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
