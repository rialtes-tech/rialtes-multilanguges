'use client'
import Image from "next/image";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../messages/en/insight.json';
import esContent from '../../../../messages/es/insight.json';
import frContent from '../../../../messages/fr/insight.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import { useEffect, useRef, useState } from "react";

export default function page({ url }) {
    const t = useTranslations("blogs");
    const carouselRef = useRef(null);
    const [isLastSlide, setIsLastSlide] = useState(false);
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
    });

    const { latestBlogs } = blogsContent.blogs

    // returning all blogs except current page url
    const filteredBlogsData = latestBlogs.filter((elem) => {
        const blogSlug = elem.url.replace(/\/$/, "").split("/").pop();
        const currentSlug = url.replace(/\/$/, "");

        return blogSlug !== currentSlug;
    });


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40,
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
            <div className="flex carousel-button-group absolute top-0 xl:right-32 sm:right-6 max-sm:right-0 md:mt-4">
                <button aria-label="Previous slide" className={currentSlide === 0 ? 'disable bg-white p-2 mr-2 group transition-all duration-300' : 'bg-white p-0 mr-0 sm:p-2 sm:mr-2 group transition-all duration-300'} onClick={() => previous()}>
                    <span className="sr-only">Previous slide</span>
                    <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#707070" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#C3C3C3]">
                        <path d="M3 7.5L11 0V15L3 7.5Z" fill="none" className="transition-all duration-300 group-hover:fill-[#C3C3C3] hover:fill-[#C3C3C3]" />
                    </svg>
                </button>
                <button aria-label="Next slide" className="bg-white p-2 group transition-all duration-300" onClick={() => next()}>
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
    const handleBeforeChange = (nextSlide, state) => {
        const totalItems = state.totalItems;
        const slidesToShow = state.slidesToShow;

        const maxValidSlide = totalItems - slidesToShow;

        setIsLastSlide(nextSlide >= maxValidSlide);
    };
    useEffect(() => {
        if (isLastSlide) {
            const timer = setTimeout(() => {
                carouselRef.current.goToSlide(0);
                setIsLastSlide(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isLastSlide]);

    return (
        <section className="relative pb-8 lg:pb-4">
            <div className="mb-[36px] mx-auto">
                <div className="flex flex-row justify-between md:mr-24 mr-0">
                    <p className="mb-[43px] leading-tight 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] font-normal">{t('latestBlogsTitle')}</p>
                </div>
                <Carousel
                    ref={carouselRef}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    partialVisible={!isLastSlide}
                    ssr={true}
                    infinite={false}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style !justify-start flex-wrap"
                    itemClass="carousel-item-padding-40-px"
                    arrows={false}
                    beforeChange={handleBeforeChange}
                    renderButtonGroupOutside={true}
                    customButtonGroup={<ButtonGroup />}
                    renderDotsOutside={true}
                    customDot={<CustomDot />}
                >
                    {filteredBlogsData.slice(0, 9).map((slide) => (
                        <div key={slide.id} className="flex flex-col sm:basis-1/4 border border-gray-300 hover:border-white sm:mr-6 mb-4 sm:h-[580px] md:h-full h-full lg:h-[580px] xl:h-[600px] 4xl:h-[680px] group">
                            <div className="h-[260px] 4xl:h-[300px] max-h-[300px]">
                                <Link href={'/insights/blogs' + slide.url}>
                                    <Image
                                        src={slide.image}
                                        alt={slide.alt}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        priority
                                        className="cursor-pointer"
                                    />
                                </Link>
                                <div className="inset-0 bg-[#0092E053] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col transition duration-300 ease-in-out group-hover:bg-[#F0F0F0]">
                                <div>
                                    <div className='pb-2 md:pb-4 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'>
                                        <span className='text-[#0092E0]'>{slide.category}
                                        </span>
                                        <span className='text-[#ACACAC]'> | </span>
                                        <span className={`${slide.category.length > 21 && "block mt-1"}`}>{slide.date}</span>
                                    </div>
                                    <Link href={'/insights/blogs' + slide.url}><h4 className="mb-2 md:mb-4 font-semibold line-clamp-3 xl:line-clamp-4 4xl:text-[25px] xl:text-[20px] text-[18px] leading-tight">{slide.title}</h4></Link>
                                </div>
                                <div className="flex flex-col">
                                    <p className='line-clamp-4 md:mb-4 mb-2 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'>{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}