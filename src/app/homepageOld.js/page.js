"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';
import Seo from '../../app/components/Seo';
import Head from 'next/head';
import { useMultipleScrollAnimation } from '../hooks/useScrollAnimation';

import ContactForm from '../components/contactform';
const carouselData = [
    {
        title: "LIFE SCIENCE",
        description:
            "Our Salesforce healthcare CRM integration can help medical service providers seamlessly integrate hospital software.",
        image: "/images/homepage/industry1.webp",
        label: "MANUFACTURING",
    },
    {
        title: "LIFE SCIENCE2",
        description:
            "Our Salesforce healthcare CRM integration can help medical service providers seamlessly integrate hospital software.",
        image: "/images/homepage/industry2.webp",
        label: "MANUFACTURING",
    },
    {
        title: "REAL ESTATE",
        description:
            "CRM solutions for real estate help manage leads, automate tasks, and enhance property listings visibility.",
        image: "/images/homepage/industry3.webp",
        label: "REAL ESTATE",
    },
    {
        title: "HI-TECH",
        description:
            "Empower your digital transformation journey with tailored hi-tech solutions powered by Salesforce.",
        image: "/images/homepage/industry4.webp",
        label: "HI-TECH",
    },
    {
        title: "AUTOMOTIVE",
        description:
            "Drive digital innovation with CRM tools for smarter customer engagement and faster service cycles.",
        image: "/images/homepage/industry5.webp",
        label: "AUTOMOTIVE",
    },
];

const successStoryData = [
    {
        id: 1,
        imageUrl: '/images/homepage/stremline.webp',
        title: 'Manufacturing',
        description: 'Streamlined DevOps using Copado and Salesforce',
        url: 'insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap'

    },
    {
        id: 2,
        imageUrl: '/images/homepage/salesforce.webp',
        title: 'Healthcare',
        description: 'Salesforce Health Cloud, Prior Authorization',
        url: 'insights/case-studies/realForce-banking-module-ach'

    },
    {
        id: 3,
        imageUrl: '/images/homepage/mfg-2.webp',
        title: 'Manufacturing',
        description: 'Omnichannel case management with Salesforce Service Cloud',
        url: 'insights/case-studies/streamlined-devops-using-copado-and-salesforce'
    },
    {
        id: 4,
        imageUrl: '/images/homepage/realestate.webp',
        title: 'Public Sector',
        description: 'A public housing in US',
        url: 'insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud',
        theme: "light",
    },
    {
        id: 5,
        imageUrl: '/images/homepage/healthcare-2.webp',
        title: 'Healthcare',
        description: 'Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP',
        url: 'insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud'
    },
    {
        id: 6,
        imageUrl: '/images/homepage/mfg-3.webp',
        title: 'Manufacturing',
        description: 'Streamlining Sales with Salesforce Sales Cloud for Manufacturing',
        url: 'insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud'
    },
    {
        id: 7,
        imageUrl: '/images/homepage/realestate-2.webp',
        title: 'Real Estate',
        description: 'RealForce Banking Module - ACH',
        url: 'insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud',
        theme: "light",

    },
    {
        id: 8,
        imageUrl: '/images/homepage/healtcare-3.webp',
        title: 'Healthcare',
        description: 'Digitizing patient journey using Salesforce health cloud',
        url: 'insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud',
        theme: "light",

    }

]

const images = [
    { name: 'Switzerland', url: '/images/homepage/industry1.webp' },
    { name: 'Finland', url: '/images/homepage/industry2.webp' },
    { name: 'Iceland', url: '/images/homepage/industry3.webp' },
    { name: 'Australia', url: '/images/homepage/industry4.webp' },
];
const Home = () => {
    const sectionCount = 10; // Update this if you add more sections
    const [refs, inViews] = useMultipleScrollAnimation(sectionCount);

const slideRef = useRef(null);


    const [fadeIn, setFadeIn] = useState(true);
    const [inViews2, setInViews] = useState(Array(carouselData.length).fill(false));
    const refs2 = useRef(carouselData.map(() => React.createRef()));


   
    const [isAnimating, setIsAnimating] = useState(false);

    const [direction, setDirection] = useState("");
    const sliderRef = useRef();
  
   
  


    
    const [items, setItems] = useState(images);



    const moveSlider = (dir) => {
        setDirection(dir);
        setItems((prev) => {
          if (dir === "next") {
            return [...prev.slice(1), prev[0]];
          } else {
            return [prev[prev.length - 1], ...prev.slice(0, -1)];
          }
        });
      };
    const nextSlideIndu = () => {
        setItems(prev => [...prev.slice(1), prev[0]]);
    };

    const prevSlideIndus = () => {
        setItems(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    };




    const [activeIndexInsights, setActiveIndexInsights] = useState(0);

    const handlePrevInsights = () => {
        setActiveIndexInsights((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
    };

    const handleNextInsights = () => {
        setActiveIndexInsights((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
    };

    const [currentSlide, setCurrentSlide] = useState(0);
    const textRef = useRef(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const slides = [
        { headline: 'Headline 1', subHeadline: 'Sub Headline 1', image: '/images/homepage/banner-1.webp' },
        { headline: 'Headline 2', subHeadline: 'Sub Headline 2', image: '/images/homepage/Asset3.webp' },
    ]
    const handleScroll = () => {
        const element = textRef.current;
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('animate-slideIn');
        }
    };

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll);
    }



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const [activeIndex, setActiveIndex] = useState(0);












    const [activeIndexIndustry, setActiveIndexIndustry] = useState(0);

    const handleNext = () => {
        setActiveIndexIndustry((prev) => (prev + 1) % carouselData.length);
    };

    const handlePrev = () => {
        setActiveIndexIndustry((prev) =>
            (prev - 1 + carouselData.length) % carouselData.length
        );
    };


    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // auto-slide every 5s
        return () => clearInterval(interval);
    }, []);


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         handleNextInsights();
    //     }, 3000); // Change slide every 3 seconds

    //     return () => clearInterval(interval); // Cleanup interval on component unmount
    // }, []);

    const currentIndustry = carouselData[activeIndexIndustry];

    const visibleCards = 4;

    const getVisibleItems = () => {
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const visibleCount = isMobile ? 2.5 : 4; // 2 full + 1 partial on mobile

        const extendedData = [...carouselData.slice(activeIndexIndustry), ...carouselData.slice(0, activeIndexIndustry)];
        return extendedData.slice(0, Math.ceil(visibleCount));
    };
    return (
        <div>
            <Head>

                <link rel="icon" href="/images/homepage/Rialtes symbol 1.jpg" />
            </Head>

            <Seo
                title="IT Services and IT Consulting Company | Rialtes"
                description="Unlock success with Rialtes’ IT services and IT consulting. Powered by AI innovation, we drive efficiency, elevate performance, and fuel sustainable growth."
                keywords="home, website, welcome"


            />
            <div className="relative xl:w-full xl:h-[711px] w-[350px] xl:ml-[280px] h-[400px] overflow-hidden xl:container xl:m-auto mx-[35px] xl:mx-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-transform transform  ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'}`} style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                        <div
                            ref={refs[6]}
                            className={`col-span-4 transition-all duration-1000 ease-out transform  absolute inset-0  bg-opacity-50 flex flex-col xl:pl-[118px] justify-center items-start text-white p-8 ${inViews[6] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                }`}
                        >
                            <h1 className="font-bold">{slide.headline}</h1>
                            <h3>{slide.subHeadline}</h3>
                            <div className="flex space-x-2 mt-6">
                                {slides.map((_, i) => (
                                    <div key={i} className={`h-1 w-[60px] ${i === currentSlide ? 'bg-white' : 'bg-gray-500'}`}></div>
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
                <div className="absolute bottom-0 right-[-5rem] gap-5 transform -translate-x-1/2 flex items-center rounded-full shadow-lg">
                    <div className='text-white xl:text-[35px] font-light'>
                        {currentSlide + 1}/{slides.length}
                    </div>
                    <div>
                        <button onClick={prevSlide} className="bg-white p-5  shadow-lg">
                            &lt;
                        </button>

                        <button onClick={nextSlide} className="bg-white p-5  shadow-lg">
                            &gt;
                        </button>
                    </div>

                </div>
            </div>

            {/* //innovating section */}
            <section className='mt-20'>
                <div className='container xl:mx-auto mx-[35px]'>
                    <div>
                        <Image
                            loading="lazy"
                            height='100'
                            width='280'
                            alt='Success Stories'
                            className='object-contain xl:w-full w-[350px] h-full transform group-hover:scale-110 group-hover:origin-center transition-transform duration-500'
                            src='/images/homepage/AdobeStock_406847557.svg'
                        />
                    </div>
                    <div className='grid xl:grid-cols-12 grid-cols-1'>
                        <div className='xl:col-span-4 col-span-12 border-r border-gray-300 mr-[-16px]'></div>
                        <div className='xl:col-span-1 col-span-12'></div>

                        <div ref={textRef} className='xl:col-span-7 col-span-12 transition-opacity duration-1000 opacity-0'>
                            {/* <Image
                                loading="lazy"
                                height='100'
                                width='280'
                                alt='Success Stories'
                                className='object-contain xl:w-[807px] w-[193px]'
                                src='/images/homepage/with-Impact.svg'
                            /> */}
                            <h1 className="xl:text-[8rem] font-bold ml-[11rem] xl:ml-0 text-[2rem] outline-text tracking-wider xl:h-[125px]">with Impact</h1>

                            <h3 className='xl:text-[34px] text-[26px] text-[#0077CE]  font-bold mt-12 pr-16 xl:pr-0'>Beyond Business: A Commitment to Change</h3>
                            <p className='mt-5 pr-12 xl:pr-0'>Rialtes is more than a technology leader — we are advocates for positive change. From sustainability initiatives to empowering underrepresented voices, we’re dedicated to making a meaningful impact</p>
                        </div>

                    </div>

                </div>
            </section>


            <section className='xl:mt-32 mt-20 xl:ml-[280px] md:mx-[100px] mx-[35px] xl:mx-0 md:mr-0 xl:mr-0'>
                <div

                    ref={refs[0]}
                    className={`col-span-4 transition-all duration-1000 ease-out transform items-center grid xl:grid-cols-12 grid-cols-1 ${inViews[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}

                >
                    <div className='col-span-4'>
                        <h2>Success Stories</h2>
                    </div>
                    <div className='col-span-5'>
                        <p className='mt-5 xl:mt-0 md:mt-5 lg:mt-mt-5 pr-8 xl:pr-0'>Discover how we’ve harnessed the disruptive power of cutting-edge AI to help companies anticipate and act with insight and speed with IT consulting services.</p>

                    </div>
                    <div className='col-span-3'></div>

                </div>
                <div className='grid xl:grid-cols-4 mt-16 gap-10 xl:gap-0'>
                    {successStoryData.map((success, index) => {
                        const isLight = success.theme === "light";
                        return (
                            <React.Fragment key={index}>
                                <div className="relative  xl:h-[486px] h-[391px] w-[97%] overflow-hidden group shadow-lg">
                                    <div
                                        className="absolute  inset-0 transform scale-[1] w-full origin-bottom-left transition-transform duration-300 ease-in-out group-hover:scale-[1.9]"
                                        style={{
                                            backgroundImage: `url(${success.imageUrl})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'left center',
                                        }}
                                    ></div>

                                    <div className="absolute inset-0 hover:text-white bg-black bg-opacity-10 group-hover:bg-opacity-50 transition duration-700"></div>
                                    <div className={`relative  z-10 p-6  ${isLight ? 'text-black' : 'text-white'}`}>
                                        <p className="mb-5 text-[18px]">{success.title}</p>
                                        <h3 className="font-medium leading-tight text-[24px]">
                                            {success.description}
                                        </h3>
                                    </div>
                                </div>

                                {(index + 1) % 4 === 0 && (
                                    <div className="w-full xl:col-span-4 xl:mt-10 mt-0"></div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>

            </section>

            <section className='mt-20 xl:mx-0'>
                <div
                    ref={refs[1]}
                    className={`col-span-5 mx-[35px] xl:mx-0 transition-all duration-1000 ease-out transform items-center grid xl:grid-cols-12 grid-cols-1 xl:ml-[280px] md:mx-[100px] md:mr-0 xl:mr-0 ${inViews[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}
                >
                    <div className='col-span-4'>
                        <h2 className='leading-tight'>Industry Expertise & Solutions</h2>
                    </div>
                    <div className='col-span-1'></div>
                    <div className='col-span-5'>
                        <p className='mt-5 xl:mt-0 md:mt-5 lg:mt-mt-5 leading-tight pr-10 xl:pr-0'>We have domain expertise across various industries, enabling us to offer tailored IT consulting services to meet your specific industry needs. Transform your business with a quantifiable and pre-focussed system.</p>
                    </div>
                    <div className='col-span-2'></div>
                </div>

                {/* <div
                    className={`relative w-full xl:h-screen h-[851px] xl:mt-10 mt-16 bg-cover bg-center transition-all duration-1000 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        backgroundImage: `url(${carouselData[activeIndexIndustry].image})`,
                    }}
                >
                    <div className={`absolute inset-0 bg-black bg-opacity-40 z-0 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}></div>

                    <div className="relative z-10 flex xl:flex-row flex-col justify-between xl:items-center xl:h-full h-[90%] xl:gap-10 xl:ml-[280px]">
                        <div
                            ref={refs.current[7]}
                            className={`col-span-4 mx-[35px] xl:mx-0 max-w-md text-white space-y-6 xl:mt-40 mt-14 transition-all duration-1000 ease-in-out transform ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                        >
                            <div className="w-8 h-1 bg-white mb-2"></div>
                            <h1 className="xl:text-[36px] text-[28px] xl:font-bold font-semibold">{carouselData[activeIndexIndustry].title}</h1>
                            <p>{carouselData[activeIndexIndustry].description}</p>
                            <button className="xl:!mt-16 !mt-8 px-6 py-4 xl:text-[20px] font-bold border border-white hover:bg-white hover:text-black transition">
                                Know More →
                            </button>
                        </div>

                        <div className="flex flex-col xl:mt-40">
                            <div className="flex gap-4 mb-8 overflow-hidden xl:w-[calc(339px*3+170px)] ml-[35px] xl:ml-0">
                                {getVisibleItems().map((item, index) => {
                                    const globalIndex = (activeIndexIndustry + index) % carouselData.length;
                                    const isActive = globalIndex === activeIndexIndustry;

                                    return (
                                        <div
                                            key={index}
                                            onClick={() => setActiveIndexIndustry(globalIndex)}
                                            className={`relative cursor-pointer overflow-hidden transition-all duration-700 ease-in-out ${isActive ? "z-30 scale-110 animate-imageIn" : "z-10 opacity-70 hover:opacity-100"}`}
                                            style={{
                                                width: index === 3 ? "xl:170px" : "xl:339px",
                                                flexShrink: 0,
                                                transformOrigin: "bottom center",
                                            }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.label}
                                                className={`xl:h-[371px] h-[168px] xl:w-[339px] w-[155px] object-cover shadow-xl transition-all duration-700 ease-in-out ${isActive ? "scale-110 brightness-75 blur-[1px] z-0" : "scale-100 brightness-100 blur-0 z-30"}`}
                                            />
                                            <div className="xl:absolute xl:bottom-0 xl:!left-0 text-white xl:text-[23px] text-[12px] p-1 xl:w-full text-center bg-black bg-opacity-50">
                                                {item.label}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex items-center xl:gap-4 gap-0 xl:w-full w-[70%] ml-[35px] xl:ml-0">
                                <button onClick={handlePrev} className="bg-white text-black p-2 hover:bg-gray-200 cursor-pointer">◀</button>
                                <button onClick={handleNext} className="bg-white text-black p-2 hover:bg-gray-200">▶</button>
                                <div className="w-full border-t border-white"></div>
                                <div className="text-white xl:text-[40px] text-[30px] ml-5">{carouselData.length}</div>
                            </div>
                        </div>
                    </div>

                    <button className="bg-[#134874] xl:text-[20px] ml-[8rem] xl:ml-0 xl:right-[20rem] absolute xl:bottom-12 bottom-[-2rem] text-[14px] hover:bg-white hover:text-[#134874] border border-[#134874] font-semibold text-white py-5 px-8 transition duration-300 z-40">
                        <Link href="/industry">View All Industry</Link>
                    </button>
                </div> */}

                {/* <div className="container2">

                    <div className="slide" ref={slideRef}>


                        <div className="item" style={{ backgroundImage: `url("https://i.ibb.co/qCkd9jS/img1.jpg")` }}>
                            <div className="content">
                                <div className="name">Switzerland</div>
                                <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                <button>See More</button>
                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: `url("https://i.ibb.co/jrRb11q/img2.jpg")` }}>
                            <div className="content">
                                <div className="name">Finland</div>
                                <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                <button>See More</button>
                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: `url("https://i.ibb.co/NSwVv8D/img3.jpg")` }}>
                            <div className="content">
                                <div className="name">Iceland</div>
                                <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                <button>See More</button>
                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: `url("https://i.ibb.co/Bq4Q0M8/img4.jpg")` }}>
                            <div className="content">
                                <div className="name">Australia</div>
                                <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                <button>See More</button>
                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: `url("https://i.ibb.co/jTQfmTq/img5.jpg")` }}>
                            <div className="content">
                                <div className="name">Netherland</div>
                                <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                <button>See More</button>
                            </div>
                        </div>


                    </div>

                    <div className="button">
                        <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
                        <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
                    </div>

                </div> */}
                 <div className={`relative w-screen h-screen overflow-hidden ${direction === 'next' ? 'next' : direction === 'prev' ? 'prev' : ''}`} ref={sliderRef}>
      <div className="absolute inset-0">
        {items.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-500 ${i === 0 ? 'z-10' : 'z-0'}`}
          >
            <img src={img} alt="slide" className="w-full h-full object-cover" />
            <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 max-w-[80%] text-white text-shadow px-4">
              <div className="text-5xl font-bold leading-tight animate-fade-in delay-400">MAGIC SLIDER</div>
              <div className="text-5xl font-bold text-green-400 animate-fade-in delay-600">TYPE</div>
              <div className="mt-4 animate-fade-in delay-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="grid grid-cols-2 gap-2 mt-5 animate-fade-in delay-1000">
                <button className="bg-white text-black px-4 py-2 font-semibold">SEE MORE</button>
                <button className="border border-white text-white px-4 py-2 font-semibold">SEE MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-5 z-20">
        {items.map((img, i) => (
          <div key={i} className="w-[150px] h-[220px] overflow-hidden rounded-2xl shadow-lg">
            <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-32 right-1/2 translate-x-1/2 flex gap-5 z-30">
        <button
          onClick={() => moveSlider("prev")}
          className="w-10 h-10 bg-green-400 rounded-full text-white font-bold hover:bg-white hover:text-black transition"
        >
          {'<'}
        </button>
        <button
          onClick={() => moveSlider("next")}
          className="w-10 h-10 bg-green-400 rounded-full text-white font-bold hover:bg-white hover:text-black transition"
        >
          {'>'}
        </button>
      </div>
    </div>

            </section>
            <div className="relative w-full h-auto flex justify-center xl:ml-[280px] mx-[32px] mt-32 container">
                <div className="flex flex-col xl:flex-row justify-between w-full">

                    {/* RIGHT SIDE (TEXT & CAROUSEL) ON DESKTOP */}
                    <div className="xl:w-1/2 flex flex-col order-1 xl:order-2">

                        {/* ✅ Top: Insights Title + Description */}
                        <div
                            ref={refs[2]}
                            className={`transition-all duration-1000 ease-out transform xl:pl-20 ${inViews[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                }`}
                        >
                            <h2 className="leading-tight">Insights</h2>
                            <p className="mt-5 leading-tight pr-10 xl:pr-0">
                                Stay ahead of the curve with expert perspectives, success stories, and the latest innovations in AI.
                            </p>
                        </div>
                        <div className="xl:w-1/2  xl:order-1 mt-10 xl:mt-0 xl:hidden block">
                            <img
                                src={carouselData[activeIndexInsights].image}
                                alt={carouselData[activeIndexInsights].title}
                                className="w-full xl:h-[909px] h-[435px] object-cover"
                            />
                        </div>

                        {/* ✅ Bottom: Blue Content Box */}
                        <div className="text-white space-y-6 bg-[#184671] p-10  xl:pl-20  pb-0 pr-0 xl:mt-[11rem] xl:h-[610px] h-[376px]">
                            <h1 className="xl:text-[26px] text-[16px]">
                                {carouselData[activeIndexInsights].title}
                            </h1>
                            <p
                                ref={refs[5]}
                                className={`transition-all xl:text-[40px] text-[24px] xl:pr-10 duration-1000 ease-out transform pr-6 ${inViews[5] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                    }`}
                            >
                                {carouselData[activeIndex].description}
                            </p>

                            {/* Pagination + Arrows */}
                            <div className="flex items-center xl:!mt-[8rem] mt-[4rem] justify-end">
                                <div className="mr-10 text-white xl:text-[35px] text-[16px] min-w-[40px] text-right">
                                    {activeIndexInsights + 1} / {carouselData.length}
                                </div>
                                <button
                                    onClick={handlePrevInsights}
                                    className="bg-white text-black p-2 border hover:bg-gray-200 xl:h-[69px] xl:w-[69px]"
                                >
                                    ◀
                                </button>
                                <button
                                    onClick={handleNextInsights}
                                    className="bg-white text-black p-2 border hover:bg-gray-200 xl:h-[69px] xl:w-[69px]"
                                >
                                    ▶
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ✅ Middle: Image — appears 2nd on mobile, left on desktop */}
                    <div className="xl:w-1/2 order-2 xl:order-1 mt-10 xl:mt-0 xl:block hidden">
                        <img
                            src={carouselData[activeIndexInsights].image}
                            alt={carouselData[activeIndexInsights].title}
                            className="w-full xl:h-[909px] h-[435px] object-cover"
                        />
                    </div>

                </div>
            </div>



            <section className='xl:ml-[280px] xl:mr-[142px] mt-20 mx-[35px] grid xl:grid-cols-12 grid-cols-12'>
                <div
                    ref={refs[3]}
                    className={` transition-all duration-1000 ease-out xl:col-span-5 col-span-12 transform items-center   md:mr-0 xl:mr-0 ${inViews[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}
                >
                    <div className='flex items-end'>
                        <div className='text-[#073259] xl:text-[180px] text-[89px] font-extrabold xl:h-[219px] h-[108px]'>LIFE</div>

                        <div className='text-[#073259] xl:text-[60px] text-[30px] font-extrabold'>@</div>
                    </div>
                    <div className='xl:text-[180px] text-[89px] text-[#0C8AD4] font-extralight xl:h-[219px] h-[108px] w-[675px] leading-tight xl:mt-[-35px]'>RIALTES</div>
                    <p className='xl:pr-20 mt-10 pr-10'>Driven by innovation and fueled by human potential, our IT consulting company tackles the digital world’s toughest problems. Together, let’s simplify problems, enable solutions, and empower each other.</p>
                    <button className="xl:!mt-16 !mt-10 px-6 py-4 xl:text-[20px] text-[12px] bg-[#134874] font-bold border border-white hover:bg-[#134874] text-white  transition">
                        Explore More
                    </button>
                </div>
                <div
                    ref={refs[4]}
                    className={` transition-all xl:mt-[10rem] mt-[4rem] xl:col-span-7 col-span-12 duration-1000 ease-out  transform items-center   md:mr-0 xl:mr-0 ${inViews[4] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}
                >
                    <Image
                        className="relative w-full h-full xl:ml-[2rem]"
                        src='/images/homepage/Group 508.webp'
                        alt="Our Solution to Success"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                    />
                </div>
            </section>
            <section className='pb-20 mt-20 xl:px-[280px] mx-[35px] md:px-[100px]'>
                <ContactForm className='xl:w-[60rem] w-full xl:text-[60px] text-[26px] leading-tight' title='Ready to take the next step? Let’s kick off your journey to operational excellence' />
            </section>
        </div>
    )
}
export default Home