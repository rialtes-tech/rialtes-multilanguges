"use client";
import Image from "next/image";
import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Link from "next/link";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../messages/en/insight.json';
import esContent from '../../../../../messages/es/insight.json';
import frContent from '../../../../../messages/fr/insight.json';
import { changeLocalization } from "../../components/changeLocalization";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/"
  },
  "name": "Rialtes Blogs | Expert Insights on Digital Transformation",
  "headline": "Insights That Drive Innovation – Salesforce & SAP Blogs",
  "description": "Stay updated with expert blogs from Rialtes on Salesforce, SAP, Yardi, MuleSoft, and more. Learn how technology trends are shaping industries and driving business success.",
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
  const t = useTranslations('blogs')
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { latestBlogs, industries, categories, slides } = blogsContent.blogs;

  const BlogCard = ({ blog }) => (
    <div className="border border-[#707070] w-full h-full flex flex-col group">
      <div className="max-h-[300px]">
        <Link href={'/insights/blogs' + blog.url}>
          <Image
            src={blog.image}
            alt={blog.title}
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
          <div className='pb-2 md:pb-4 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight'>
            <span className='text-[#0092E0]'>{blog.category}</span>
            <span className='text-[#ACACAC]'> | </span>
            {blog.date}
          </div>
          <Link href={'/insights/blogs' + blog.url}><h4 className="mb-2 md:mb-4 font-semibold line-clamp-3 xl:line-clamp-4 4xl:text-[25px] xl:text-[20px] text-[18px]  leading-tight">{blog.title}</h4></Link>
        </div>
        <div className="flex flex-col">
          <p className='line-clamp-4 md:mb-4 mb-2 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'>{blog.description}</p>
        </div>
      </div>
    </div>
  );

  const BlogList = () => {
    const [visibleBlogs, setVisibleBlogs] = useState(6);
    const [showOptionsIndustry, setShowOptionsIndustry] = useState(false);
    const [showOptionsCategory, setShowOptionsCategory] = useState(false);

    const loadMoreBlogs = () => {
      setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 6);
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

    const filterBlogsByIndustry = (industry) => {
      setSelectedIndustry(industry);
      setShowOptionsIndustry(false);
    };

    const filteredBlogs = selectedIndustry === t('all') ? latestBlogs : latestBlogs.filter(blog => blog.industry === selectedIndustry);

    const [selectedCategory, setSelectedCategory] = useState(t('all'));

    const filterBlogsByCategory = (category) => {
      setSelectedCategory(category);
      setShowOptionsCategory(false);
    };

    const filteredBlogsByCategory = selectedCategory === t('all') ? filteredBlogs : filteredBlogs.filter(blog => blog.category === selectedCategory);

    const isLoadMoreVisible = visibleBlogs < filteredBlogsByCategory.length;

    return (
      <div>
        <div className="flex md:flex-row flex-col pb-4">
          <div className="flex flex-col md:pb-0 pb-4 justify-center">
            <h2 className="text-black 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight ">{t('latestBlogsTitle')}</h2>
          </div>
          <div className="relative flex flex-row max-[320px]:flex-col md:ml-auto h-[60px] mt-4 max-[320px]:mb-12 max-[320px]:gap-2">
            <div className="relative">
              <button className='relative border border-[#707070] sm:w-40 w-36 py-4 px-2 sm:mr-6 mr-2 text-l hover:bg-[#EDEDED] focus:bg-[#EDEDED]' onClick={toggleOptionsIndustry}>
                <span className="pr-5 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight">{selectedIndustry === t('all') ? t('industryTitle') : selectedIndustry}</span>
                <svg
                  className='w-6 h-6 absolute right-2 top-1/2 transform -translate-y-1/2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
                </svg>
              </button>
              {showOptionsIndustry && (
                <div className='absolute bg-white border border-[#707070] w-[165px] md:w-[250px] sm:mr-4 mr-0 sm:right-0 right-2 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'>
                  <ul>
                    {industries.map((industry, index) => (
                      <li
                        key={index}
                        className={`px-5 py-2 cursor-pointer ${index === 0 ? 'pt-4' : index === industries.length - 1 ? 'pb-4' : ''
                          }`}
                        onClick={() => filterBlogsByIndustry(industry)}
                      >
                        {industry}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="relative">
              <button className='relative border border-[#707070] py-4 px-2 sm:w-40 w-36 text-l hover:bg-[#EDEDED] focus:bg-[#EDEDED]' onClick={toggleOptionsCategory}>
                <span className="pr-5 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight">{selectedCategory === t('all') ? t('categoryTitle') : selectedCategory}</span>
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
              {showOptionsCategory && (
                <div className='absolute bg-white border border-[#707070] w-[200px] md:w-[250px] right-0 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'>
                  <ul>
                    {categories.map((category, index) => (
                      <li
                        key={category}
                        className={`px-5 ${index === 0 ? 'pt-4' : 'py-2'} ${index === categories.length - 1 ? 'pb-4' : ''} cursor-pointer`}
                        onClick={() => filterBlogsByCategory(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='w-full'>
          <p className='text-xl py-4 4xl:text-[30px] xl:text-[22px] text-[20px]  leading-tight'>{t('searchTitle')} {selectedIndustry} {t('industry')} / {selectedCategory} {t('category')}</p>
        </div>

        {filteredBlogsByCategory.length === 0 ? (
          <p className='text-center text-xl py-4'>{t('noBlogs')}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
            {filteredBlogsByCategory.slice(0, visibleBlogs).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
        {isLoadMoreVisible && (
          <div className='flex justify-center text-center md:py-20 py-10'>
            <button
              type='button'
              className={`border border-[#707070]  font-medium w-[160px] h-[50px] relative group hover:bg-[#EDEDED] ${visibleBlogs >= filteredBlogsByCategory.length ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
              onClick={loadMoreBlogs}
              disabled={visibleBlogs >= filteredBlogsByCategory.length}
            >
              <span className='group-hover:pr-7 transition-all duration-300 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'> {t('loadMore')}</span>
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
        partialVisibilityGutter: 150,
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
        <div className="flex carousel-button-group absolute top-0 lg:right-40 right-4 max-[360px]:right-[-15px] md:mt-4">
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
            aria-label="Custom Dots" /></li>
      );
    };

    return (
      <section className="relative pb-10 bg-white">
        <div className="mb-[36px]">
          <div className="flex flex-row justify-between md:mr-24 mr-0">
            <h2 className="text-black mb-[36px] text-[26px] xl:text-[40px] 4xl:text-[60px] leading-tight"> {t('featuredTitle')}</h2>
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
              <div key={slide.id} className="flex sm:flex-row flex-col md:mr-4 sm:mr-2 group items-stretch h-full">
                <div className="basis-full  xl:h-[500px]">
                  <Link href={'/insights/blogs' + slide.url}>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      priority
                      className="object-cover w-full h-full"
                    />
                  </Link>
                </div>
                <div className="flex flex-col basis-full py-4 sm:py-4 md:py-6 xl:py-10 sm:px-10 md:px-12 xl:px-16 px-4 transition duration-300 ease-in-out group-hover:bg-[#F0F0F0] h-full">
                  <div className='pb-[10px] sm:pb-[15px] lg:pb-[20px] 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'>
                    <span className='text-[#0092E0]'>{slide.category}</span> <span className='text-[#ACACAC]'>|</span> {slide.date}
                  </div>
                  <Link href={'/insights/blogs' + slide.url}><h3 className="pb-[10px] sm:pb-[15px] lg:pb-[20px] font-semibold sm:line-clamp-none  text-[18px] xl:text-[20px]  4xl:text-[30px] leading-tight ">{slide.title}</h3></Link>
                  <p className="xl:line-clamp-none line-clamp-5 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight">{slide.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        canonical="https://www.rialtes.com/insights/blogs/"
      />
      <Script
        id="schema-blogs"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative group overflow-hidden h-[350px] md:h-[500px] 4xl:h-[650px]">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/blog-header-web.webp"
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
            src="/images/blog/blog-header-mobile.webp"
            alt="mobile banner"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "35% 60%" }}
          />
        </div>

        <div className="relative h-full custom-container flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12 xl:col-span-7 lg:col-span-9">
              <h3 className="text-white text-[18px] md:text-[24px] font-bold">
                {t('blogsTitle')}
              </h3>
              <h1 className="text-white text-[26px] xl:text-[40px] 4xl:text-[60px] leading-tight mt-[11.5px] md:mt-[28.5px]">
                {t('blogSubTitle')}<br /> {t('blogSubTitleOne')} <br /> {t('blogSubTitleTwo')}
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container">
        <div className="md:py-10 py-6 bg-white">
          <div className="">
            <p className="text-[#000000] py-6 sm:max-w-2xl 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight"> {t('blogDesc')}</p>
          </div>
        </div>
      </section>
      {/* Featured Section */}
      <div className="custom-container lg:pr-0">
        <FeaturedCarousel />
      </div>
      {/* Latest Blogs Section */}
      <div className="custom-container">
        <section className="py-16 bg-white">
          <BlogList />
        </section>
      </div>
    </div>
  );
}