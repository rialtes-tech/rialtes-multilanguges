"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { SlControlPlay } from "react-icons/sl";
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
    "@id": "https://www.rialtes.com/insights/webinars/"
  },
  "name": "Rialtes Webinars | Learn from Industry Experts",
  "headline": "Expert Webinars on Salesforce, SAP & Digital Innovation",
  "description": "Discover Rialtes' on-demand and upcoming webinars covering Salesforce, SAP, MuleSoft, Yardi, and more. Gain practical insights from real-world implementations and expert discussions.",
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  }

}

const webinars = [
];


export default function About() {
  const t = useTranslations('webinars')
  const locale = useLocale();
  const webinarsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { allWebinars } = webinarsContent.webinars;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const carouselRef = useRef(null);
  const [hoveredBlog, setHoveredBlog] = useState(null);

  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const visibleWebinars = allWebinars.slice(0, visibleCount);

  const hasMore = visibleCount < allWebinars.length;

  const handleMouseEnter = (blogName) => {
    return () => {
      setHoveredBlog(blogName);
    };
  };

  const handleMouseLeave = () => {
    return () => {
      setHoveredBlog(null);
    };
  };


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    if (currentIndex < webinars.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getSlideWidth = () => {
    if (isMobile) return 100;
    if (isTablet) return 80;
    return 80;
  };

  const getPeekWidth = () => {
    if (isMobile) return 0;
    if (isTablet) return 10;
    return 10;
  };

  const getTransformDistance = () => {
    const fullSlideWidth = getSlideWidth();
    return currentIndex * fullSlideWidth;
  };

  const hasNextSlide = currentIndex < webinars.length - 1;
  return (
    <div className="min-h-screen">
      <Seo
        title="SAP and Salesforce Tech Webinars by a Trusted Partner | Rialtes"
        description="Salesforce tech webinars and SAP sessions by Rialtes. Learn from experts, explore innovations, and boost your digital transformation strategy."
        canonical="https://www.rialtes.com/insights/webinars/"
      />
      <Script
        id="webinar-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[350px] md:h-[500px]  4xl:h-[650px]  overflow-hidden">-
        <Image
          src="/images/webinar/webinar-header.webp"
          alt="Webinar Header"
          fill
          style={{ objectFit: "cover", objectPosition: "70% 20%" }}
          priority
        />
        <div
          className="custom-container h-full relative"
        >
          <div className="h-full flex flex-col justify-center">
            <h1  className="
          text-[#000000] 
          max-w-2xl leading-tight 
          text-[26px] md:text-[35px] xl:text-[40px] 4xl:text-[60px] 
          bg-white/80 px-3 py-2 rounded-md 
          md:bg-transparent md:px-0 md:py-0 md:rounded-none
        ">
              {t('headerTitle')}
              <br />
              {t('headerTitleOne')}
            </h1>
          </div>
        </div>
      </section>

      <div
        className="custom-container xl:!pr-0"
      >
        {webinars.length > 0 && (
          <section className="py-16 bg-white">
            <div>
              <h2 className="xl:text-[28px]  font-medium">{t('headerSubTitle')}</h2>
              <p className="text-[#000000] text-[22px]  py-6 max-w-5xl mb-12 font-normal leading-tight">
                {t('headerDesc')}</p>
              <div className="w-full">
                <div className="flex items-center mb-6 justify-between">
                  <h2 className="w-full md:w-3/4 xl:text-[40px] 4xl:text-[56px]">{t('upcomingTitle')}</h2>

                  <div className="w-1/4 hidden sm:block">
                    <div className="h-full flex gap-10">
                      <SlControlPlay
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        style={{
                          color: "#707070",
                          height: "100px",
                          width: "30px",
                          transition: "transform 0.3s ease",
                        }}
                        className={`${currentIndex === 0
                          ? "opacity-50 cursor-not-allowed"
                          : "opacity-100 cursor-pointer"
                          } ${"rotate-180 hover:fill-current"}`}
                      />
                      <SlControlPlay
                        onClick={nextSlide}
                        disabled={currentIndex === webinars.length - 1}
                        style={{
                          color: "#707070",
                          height: "100px",
                          width: "30px",
                          transition: "transform 0.3s ease",
                        }}
                        className={`${currentIndex === webinars.length - 1
                          ? "opacity-50 cursor-not-allowed"
                          : "opacity-100 cursor-pointer"
                          } ${"hover:fill-current"}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden" ref={carouselRef}>
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${getTransformDistance()}%)`,
                    }}
                  >
                    {webinars.map((webinar, index) => (
                      <div
                        key={webinar.id}
                        style={{
                          width: `${getSlideWidth()}%`,
                          paddingRight: `${getPeekWidth()}%`,
                          flexShrink: 0,
                        }}
                      >
                        <Link href={'/' + webinar.url}>
                          <div
                            className="flex flex-col md:flex-row bg-white h-[600px] md:h-[400px]"
                            onMouseEnter={handleMouseEnter(webinar.id)}
                            onMouseLeave={handleMouseLeave(webinar.id)}
                            style={{
                              transition: "background-color 0.3s ease",
                              backgroundColor:
                                hoveredBlog === webinar.id
                                  ? "#f1f1f1"
                                  : "transparent",
                              border:
                                hoveredBlog === webinar.id
                                  ? "1px solid #a6a6a6"
                                  : "",
                              cursor: "pointer",
                              width: "100%",
                            }}
                          >
                            <div key={index} className="w-full md:w-2/5 relative min-h-[250px] md:h-full overflow-hidden">

                              <div
                                className="h-full w-full"
                                style={{
                                  transition: "transform 0.3s ease",
                                  transform:
                                    hoveredBlog === webinar.id
                                      ? "scale(1.05)"
                                      : "scale(1)",
                                }}
                              >
                                <Image
                                  src={webinar.backgroundImage}
                                  alt={`${webinar.title} background`}
                                  fill
                                  style={{ objectFit: "cover" }}
                                />

                              </div>
                            </div>

                            <div className="w-full md:w-3/5 p-4 md:p-4 xl:p-12 flex flex-col justify-between h-full">
                              <div>
                                <h3 className="text-[#134874] mb-4 max-w-xl">
                                  {webinar.title}
                                </h3>

                                <div className="mb-6">
                                  <p className="text-gray-700">{webinar.date}</p>
                                  <p className="text-gray-700">{webinar.time}</p>
                                </div>
                              </div>

                              <div className="flex items-center">
                                <div className="w-24 h-24 overflow-hidden mr-4 flex-shrink-0 border border-gray-200 relative">
                                  <Image
                                    src={webinar.speaker.image}
                                    alt={webinar.speaker.name}
                                    fill
                                    style={{ objectFit: "cover" }}
                                  />
                                </div>
                                <div>
                                  <p className="font-semibold">
                                    {webinar.speaker.name}
                                  </p>
                                  <p className="text-sm text-gray-600">
                                    {webinar.speaker.role}
                                  </p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </Link>
                      </div>
                    ))}

                    <div
                      style={{
                        width: `${getPeekWidth()}%`,
                        flexShrink: 0,
                        visibility: "hidden",
                      }}
                    />
                  </div>
                </div>

                <div className="flex justify-start mt-6 space-x-2">
                  {webinars.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${index === currentIndex
                        ? "w-12 bg-[#134874]"
                        : "w-12 bg-gray-300"
                        }`}
                      aria-label={`Go to webinar ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="block sm:hidden mt-2">
                  {" "}
                  <div className="w-2/5 h-full flex gap-10">
                    <SlControlPlay
                      onClick={prevSlide}
                      disabled={currentIndex === 0}
                      style={{
                        height: "100px",
                        width: "30px",
                        transition: "transform 0.3s ease",
                      }}
                      className={`${currentIndex === 0
                        ? "opacity-50 cursor-not-allowed"
                        : "opacity-100 cursor-pointer"
                        } ${"rotate-180 hover:fill-current"}`}
                    />
                    <SlControlPlay
                      onClick={nextSlide}
                      disabled={currentIndex === webinars.length - 1}
                      style={{
                        height: "100px",
                        width: "30px",
                        transition: "transform 0.3s ease",
                      }}
                      className={`${currentIndex === webinars.length - 1
                        ? "opacity-50 cursor-not-allowed"
                        : "opacity-100 cursor-pointer"
                        } ${"hover:fill-current"}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        <div>
        </div>
      </div>
      <div className="custom-container xl:!pr-[142px]">
        <section className="py-8 lg:max-w-[800px] xl:max-w-[1600px] mb-10">
          <h2 className="mb-6 text-[26px] xl:text-[40px] md:text-[35px] 4xl:text-[60px]">{t('PastWebinars')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {visibleWebinars.map((webinar) => (
              <Link href={'/' + webinar.url} key={webinar.id}>
                <div
                  className="border border-gray-200 overflow-hidden shadow-sm transition-shadow flex flex-col h-full"
                  onMouseEnter={handleMouseEnter(webinar.id)}
                  onMouseLeave={handleMouseLeave(webinar.id)}
                  style={{
                    transition: "background-color 0.3s ease",
                    backgroundColor:
                      hoveredBlog === webinar.id ? "#f1f1f1" : "transparent",
                    border: hoveredBlog === webinar.id ? "1px solid #f1f1f1" : "",
                    cursor: "pointer",
                  }}
                >
                  <div className="w-full overflow-hidden">
                    <div
                      className="h-full w-full"
                      style={{
                        transition: "transform 0.3s ease",
                        transform:
                          hoveredBlog === webinar.id ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      <Image
                        src={webinar.image}
                        alt={webinar.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                          aspectRatio: "16 / 9", // Ensures consistent image ratio
                          objectFit: "cover",
                        }}
                        priority
                      />
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow items-start gap-2 ">
                    <h3 className="text-[#134874] mb-2  xl:text-[20px] 4xl:text-[30px]">{webinar.title}</h3>

                    <div className="text-sm text-gray-600 mb-3">
                      <p>{webinar.date}</p>
                      <p className="mt-3">{webinar.time}</p>
                    </div>

                    <div className="mb-4">
                      <p className="font-medium">{webinar.speaker}</p>
                      <p className="text-sm text-gray-600">{webinar.position}</p>
                    </div>

                    <div className="mt-auto">
                      <button className="text-[#0092E0] hover:text-blue-700 font-medium text-sm">
                        {t('openNow')}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {hasMore && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="border border-gray-300 text-[#000000] py-2 px-6  hover:bg-gray-50 transition-colors"
              >
                {t('loadMore')}
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}