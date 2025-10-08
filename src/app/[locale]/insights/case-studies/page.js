"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../messages/en/insight.json';
import esContent from '../../../../../messages/es/insight.json';
import frContent from '../../../../../messages/fr/insight.json';
import { changeLocalization } from "../../components/changeLocalization";
import useUrl from "@/app/[locale]/components/useUrl";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'

const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/case-studies/"
  },
  "name": "Rialtes Case Studies | Proven Salesforce and SAP Implementations",
  "headline": "Real Results with Salesforce and SAP – Customer Success Stories",
  "description": "Explore how Rialtes empowers organizations across industries with Salesforce, SAP, Yardi, and MuleSoft solutions. Discover real-world case studies that showcase innovation, efficiency, and digital transformation.",
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  }


}

export default function Page() {
  const currUrl = useUrl()
  const t = useTranslations('caseStudy')
  const locale = useLocale();
  const caseStudyContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { latestCaseStudy, slides, industries } = caseStudyContent.caseStudy;

  const CaseStudyCard = ({ casestudy }) => (
    <div className="border border-[#707070] w-full h-full flex flex-col group">
      <div className="relative overflow-hidden">
        <Link href={casestudy.url}>
          <Image
            className="w-full transition-transform duration-300 hover:scale-84"
            src={casestudy.image}
            alt={casestudy.title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            priority
          />
        </Link>
      </div>
      <div className="p-6 flex-grow flex flex-col transition duration-300 ease-in-out group-hover:bg-[#F0F0F0]">
        <div>
          <div className='pb-2 md:pb-4 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'>
            <span className='text-[#0092E0] '>{casestudy.industry}</span>
            <span className='text-[#ACACAC] '> | </span>
            {casestudy.date}
          </div>
          <Link href={casestudy.url}><h4 className="mb-2 md:mb-4 md:font-semibold line-clamp-4 text-[20px] xl:text-[22px]  4xl:text-[25px] leading-tight ">{casestudy.title}</h4></Link>
        </div>
        <div className="flex flex-col">
          <p className='line-clamp-4 md:mb-4 mb-2 leading-tight text-[16px] xl:text-[18px] 4xl:text-[20px]'>{casestudy.description}</p>
        </div>
      </div>
    </div>
  );

  const CaseStudy = () => {
    const [visibleCaseStudy, setvisibleCaseStudy] = useState(6);
    const [showOptionsIndustry, setShowOptionsIndustry] = useState(false);
    const [showOptionsCategory, setShowOptionsCategory] = useState(false);

    const loadMoreCaseStudy = () => {
      setvisibleCaseStudy((prevvisibleCaseStudy) => prevvisibleCaseStudy + 6);
    };

    const toggleOptionsIndustry = () => {
      setShowOptionsIndustry(!showOptionsIndustry);
      setShowOptionsCategory(false);
    };

    const toggleOptionsCategory = () => {
      setShowOptionsCategory(!showOptionsCategory);
      setShowOptionsIndustry(false);
    };


    const [selectedIndustry, setSelectedIndustry] = useState(t('all'));

    const filterCaseStudyByIndustry = (industry) => {
      setSelectedIndustry(industry);
      setShowOptionsIndustry(false);
    };

    const filteredBlogs = selectedIndustry === t('all') ? latestCaseStudy : latestCaseStudy.filter(blog => blog.industry === selectedIndustry);

    const [selectedCategory, setSelectedCategory] = useState(t('all'));

    const filterCaseStudyByCategory = (category) => {
      setSelectedCategory(category);
      setShowOptionsCategory(false);
    };

    const filteredCaseStudyByCategory = selectedCategory === t('all') ? filteredBlogs : filteredBlogs.filter(blog => blog.category === selectedCategory);

    const isLoadMoreVisible = visibleCaseStudy < filteredCaseStudyByCategory.length;

    return (
      <div className=" text-black">
        <div className="flex sm:flex-row flex-col pb-4 sm:items-center">
          <div className="flex flex-col sm:pb-0 pb-4">
            <h2 className="text-black leading-tight text-[26px] xl:text-[40px] 4xl:text-[60px]">{t('searchByTitle')}  {selectedIndustry} {t('searchByTitleone')}</h2>
          </div>
          <div className="relative flex sm:flex-row sm:ml-auto h-[60px]">
            <div className="relative">
              <button className='relative border border-[#707070] sm:w-40 w-36 py-4 px-2 text-l hover:bg-[#EDEDED] focus:bg-[#EDEDED]' onClick={toggleOptionsIndustry}>
                <span className="pr-5 leading-tight text-[16px] xl:text-[18px] 4xl:text-[20px]">{selectedIndustry === t('all') ? t('industry') : selectedIndustry}</span>
                <svg
                  className='w-6 h-6 absolute right-2 top-1/2 transform -translate-y-1/2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
                </svg>
              </button>
              {showOptionsIndustry && (
                <div className='absolute bg-white border border-[#707070] w-[165px] md:w-[250px] right-0 z-10'>
                  <ul className="leading-tight text-[16px] xl:text-[18px] 4xl:text-[20px]">
                    {industries.map((industry, index) => {
                      const isFirst = index === 0;
                      const isLast = index === industries.length - 1;
                      return (
                        <li
                          key={industry}
                          className={`px-5 py-2 cursor-pointer ${isFirst ? 'pt-4' : ''} ${isLast ? 'pb-4' : ''}`}
                          onClick={() => filterCaseStudyByIndustry(industry)}
                        >
                          {industry}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

          </div>
        </div>
        <div className="py-6"></div>

        {filteredCaseStudyByCategory.length === 0 ? (
          <p className='text-center text-xl py-4 leading-tight text-[16px] xl:text-[18px] 4xl:text-[20px]'>{t('noCaseTitle')} </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
            {filteredCaseStudyByCategory.slice(0, visibleCaseStudy).map((casestudy) => (
              <CaseStudyCard key={casestudy.id} casestudy={casestudy} />
            ))}
          </div>
        )}

        {isLoadMoreVisible && (
          <div className='w-full mx-auto text-center md:py-20 py-10'>
            <button
              type='button'
              className={`border border-[#707070]  font-medium w-[190px] h-[50px] relative group hover:bg-[#EDEDED] ${visibleCaseStudy >= filteredCaseStudyByCategory.length ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
              onClick={loadMoreCaseStudy}
              disabled={visibleCaseStudy >= filteredCaseStudyByCategory.length}
            >
              <span className='group-hover:pr-7 transition-all duration-300 leading-tight text-[16px] xl:text-[18px] 4xl:text-[20px]'>{t('loadmore')}</span>
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
      </div>
    );
  };

  const FeaturedCarousel = () => {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        partialVisibilityGutter: 200,
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
        <div className="flex carousel-button-group absolute top-0 xl:right-[175px] sm:right-6 right-0 md:mt-4">
          <button className={currentSlide === 0 ? 'disable bg-white p-2 mr-5 group transition-all duration-300' : 'bg-white p-0 mr-0 sm:p-2 sm:mr-5 group transition-all duration-300'} onClick={() => previous()}>
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
        <div className="mb-[36px] mx-auto">
          <div className="flex flex-row justify-between md:mr-24 mr-0">
            <h2 className="text-black xl:mb-[82px] mb-[40px] 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight ">{t('latestTitle')}</h2>
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
              <div key={slide.id} className="flex md:flex-row flex-col md:basis-[95%] basis-[100%] border border-[#707070] xl:mr-12 mr-3 group max-sm:h-[700px] md:h-[600px] lg:h-full mb-[26px]">
                <div className="basis-full md:basis-2/3 lg:basis-4/3">
                  <Link href={slide.url}>
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
                <div className="flex flex-col text-black basis-full group-hover:bg-[#F0F0F0] md:basis-2/3  md:py-4 lg:py-10 md:px-10 lg:px-16 p-6 ">
                  <div className='pb-[10px] md:pb-[15px] lg:pb-[20px] 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight'>
                    <span className='text-[#0092E0] '>{slide.category}</span> <span className='text-[#ACACAC] '>|</span> {slide.date}
                  </div>
                  <Link href={slide.url}><h3 className="pb-[10px] md:pb-[15px] lg:pb-[20px] font-semibold leading-tight 4xl:text-[30px] xl:text-[25px] text-[20px] ">{slide.title}</h3></Link>
                  <p className="4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight">{slide.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Seo
      title={t('seoTitle')}
      description={t('seoDescription')}
      canonical="https://www.rialtes.com/insights/case-studies/" />

      <Script
        id="schema-case-study"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative group overflow-hidden 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[500px] h-[380px]">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/case-studies/case-study-header.webp"
            alt="desktop banner"
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/case-studies/case-study-main-banner.webp"
            alt="Case study banner"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "35% 60%" }}
          />
        </div>

        <div className="relative h-full custom-container flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12 xl:col-span-7 lg:col-span-9">
              <h3 className="text-white text-[18px] xl:text-[24px] font-bold">
                {t('headerTitle')}
              </h3>
              <h1 className="text-white 4xl:w-[70%] xl:w-[50%] text-[26px] xl:text-[40px]  4xl:text-[60px] leading-tight mt-[11px] md:mt-[28px]">
                {t('headerSubTitle')}
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            </div>
          </div>
        </div>
      </section>
      <section
        className="custom-container">
        <div className="xl:mt-[64px] mt-[34px] bg-white">
          <p className="text-[#000000] py-6 max-w-2xl xl:max-w-4xl 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight">{t('headerDesc')}</p>
        </div>
      </section>
      {/* Latest Studies */}
      <div
        className="custom-container lg:pr-0 xl:mt-[84px] mt-[44px]">
        <FeaturedCarousel />
      </div>

      {/* Latest Case Study Section */}
      <div
        className="custom-container xl:mt-[84px] mt-[44px]">
        <CaseStudy />
      </div>

      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </div>
  );
}