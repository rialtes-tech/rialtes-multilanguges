"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { SlControlPlay } from "react-icons/sl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Seo from "@/app/components/Seo";

const webinars = [
  {
    id: 1,
    title: "Let’s WhatsApp in Salesforce with AgentChat",
    date: "May 06, 2025",
    time: "10:00 AM CST",
    speaker: {
      name: "Lokesh Adhikari",
      role: "Associate Software Engineer",
      image: "/images/webinar/Lokesh.webp",
    },
    backgroundImage: "/images/webinar/Webinar_sli.webp",
    url: 'insights/webinars/let-whatsApp-in-salesforce-with-agentChat'
  },
  {
    id: 2,
    title: "Deliver End-to-End Customer Journey with Salesforce Automotive Cloud",
    date: "May 08, 2025",
    time: "10:00 AM CST",
    speaker: {
      name: "Divya Agarwal",
      role: "Associate Software Engineer",
      image: "/images/webinar/Divya.webp",
    },
    backgroundImage: "/images/webinar/Webinar_8.webp",
    url: 'insights/webinars/deliver-end-to-end-customer-journey-with-salesforce-automotive-cloud'
  },


];

const allWebinars = [
  {
    id: 1,
    title: "Salesforce CPQ: Bundle Configuration and Revenue Cloud Rules",
    date: "November 7, 2024",
    time: "10:00 AM CST",
    speaker: "Divya Agrawal",
    position: "Associate Software Engineer",
    image: "/images/webinar/webinar-thumb-1.webp",
  },
  {
    id: 2,
    title: "SAP Business AI: Setting Up Joule for SAP S/4 HANA Cloud",
    date: "November 5, 2024",
    time: "10:00 AM CST",
    speaker: "Kushagra Shah",
    position: "Senior Principal Consultant, SAP",
    image: "/images/webinar/webinar-thumb-3.webp",
  },
  {
    id: 3,
    title: "SAP Business AI: Setting Up Joule for SAP S/4 HANA Cloud",
    date: "November 5, 2024",
    time: "10:00 AM CST",
    speaker: "Kushagra Shah",
    position: "Senior Principal Consultant, SAP",
    image: "/images/webinar/webinar-thumb-1.webp",
  },
  // {
  //   id: 4,
  //   title: "Cloud Migration Strategies for Enterprise",
  //   date: "October 25, 2024",
  //   time: "11:00 AM CST",
  //   speaker: "Raj Patel",
  //   position: "Cloud Solutions Architect",
  //   image: "/images/webinar/webinar-thumb-3.webp",
  // },
  // {
  //   id: 5,
  //   title: "Data Analytics with Power BI",
  //   date: "October 20, 2024",
  //   time: "2:00 PM CST",
  //   speaker: "Lisa Johnson",
  //   position: "Data Analytics Specialist",
  //   image: "/images/webinar/webinar-thumb-1.webp",
  // },
  // {
  //   id: 6,
  //   title: "AI Implementation in Customer Service",
  //   date: "October 15, 2024",
  //   time: "1:00 PM CST",
  //   speaker: "Michael Zhang",
  //   position: "AI Solutions Manager",
  //   image: "/images/webinar/webinar-thumb-3.webp",
  // },
  // {
  //   id: 7,
  //   title: "DevOps Best Practices",
  //   date: "October 10, 2024",
  //   time: "11:00 AM CST",
  //   speaker: "Sarah Williams",
  //   position: "DevOps Engineer",
  //   image: "/images/webinar/webinar-thumb-1.webp",
  // },
  // {
  //   id: 8,
  //   title: "Cybersecurity Trends 2025",
  //   date: "October 5, 2024",
  //   time: "10:00 AM CST",
  //   speaker: "James Rodriguez",
  //   position: "Security Specialist",
  //   image: "/images/webinar/webinar-thumb-3.webp",
  // },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const carouselRef = useRef(null);
  const [hoveredBlog, setHoveredBlog] = useState(null);
  const [isRouterReady, setIsRouterReady] = useState(false);
  const router = useRouter();

  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const visibleWebinars = allWebinars.slice(0, visibleCount);

  const hasMore = visibleCount < allWebinars.length;

  useEffect(() => {
    setIsRouterReady(true);
  }, []);

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

  const handleClick = (blogName) => {
    return () => {
      if (isRouterReady) {
        router.push(blogName);
      }
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
        title="Webinar"
        canonical="https://www.rialtes.com/insights/webinars/"
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/webinar/webinar-header.webp"
          alt="Webinar Header"
          fill
          style={{ objectFit: "cover", objectPosition: "70% 20%" }}
          priority
        />
        <div
          className="
        container h-full relative
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="container mx-auto h-full flex flex-col justify-center">
            <h1 className="text-[#000000] max-w-2xl">
              A symphony of
              <br />
              expert voices
            </h1>
          </div>
        </div>
      </section>

      <div
        className="
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="py-16 bg-white">
          <div>
            <h2 className="xl:text-[28px]  font-medium">Deep Dive with Experts-Led Webinars Curated to Drive Results</h2>
            <p className="text-[#000000] text-[22px]  py-6 max-w-5xl mb-12 font-normal leading-tight">

              Our webinar series brings together industry leaders, seasoned consultants, and technology specialists for deep-dive conversations that move beyond theory into real-world impact. Whether you're navigating a digital transformation, optimizing your ERP systems, or exploring the frontiers of AI and automation, these sessions are designed to equip you with insights that put you on the right path.            </p>

            <div className="w-full">
              <div className="flex items-center mb-6 justify-between">
                <h2 className="w-full md:w-3/4">Upcoming webinar</h2>

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
                          <div className="w-full md:w-2/5 relative min-h-[250px] md:h-full overflow-hidden">

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
        <div>
        <section className=" px-4 py-8 lg:max-w-[800px] xl:max-w-[1600px]">
          <h2 className="mb-6">Past Webinar</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {visibleWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="border border-gray-200 overflow-hidden shadow-sm transition-shadow"
                onMouseEnter={handleMouseEnter(webinar.id)}
                onMouseLeave={handleMouseLeave(webinar.id)}
                onClick={handleClick("/about-us")}
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
                        height: "100%",
                        objectFit: "cover",
                      }}
                      priority
                    />
                  </div>
                </div>

                <div className="p-8 h-full flex flex-col items-start gap-2">
                  <h3 className="text-[#134874] mb-2 max-w-sm">
                    {webinar.title}
                  </h3>

                  <div className="text-sm text-gray-600 mb-3">
                    <p>{webinar.date}</p>
                    <p>{webinar.time}</p>
                  </div>

                  <div className="mb-4">
                    <p className="font-medium">{webinar.speaker}</p>
                    <p className="text-sm text-gray-600">{webinar.position}</p>
                  </div>

                  <button className="text-[#0092E0] hover:text-blue-700 font-medium text-sm">
                    Open Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="border border-gray-300 text-[#000000] py-2 px-6  hover:bg-gray-50 transition-colors"
              >
                Load more
              </button>
            </div>
          )}
        </section>
      </div>
      </div>


    </div>
  );
}
