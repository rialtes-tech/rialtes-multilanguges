"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';
import Seo from '../../app/components/Seo';
import Head from 'next/head';
import Link from 'next/link';
import { useMultipleScrollAnimation } from '../hooks/useScrollAnimation';
import ContactForm from '../components/contactform';
import AutoTimerSlider from '../newHome/page';
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
const Home = () => {

    const sectionCount = 10;
    const [refs, inViews] = useMultipleScrollAnimation(sectionCount);
    const [activeIndexInsights, setActiveIndexInsights] = useState(0);

    const handlePrevInsights = () => {
        setActiveIndexInsights((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
    };

    const handleNextInsights = () => {
        setActiveIndexInsights((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
    };

    const [currentSlide, setCurrentSlide] = useState(0);

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





    const slideRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const nextBtn = document.getElementsByClassName('next')[0];
        const prevBtn = document.getElementsByClassName('prev')[0];
        const slide = slideRef.current;

        // const handleNextClick = () => {
        //     if (isAnimating) return;
        //     setIsAnimating(true);

        //     const firstItem = slide.getElementsByClassName('item')[0];

        //     // Slide up
        //     firstItem.style.animation = 'slideUp 0.5s ease';
        //     setTimeout(() => {
        //         slide.appendChild(firstItem); // move first to end
        //         firstItem.style.animation = 'none';
        //         setIsAnimating(false);
        //     }, 500);
        // };
        const handleNextClick = () => {
            if (isAnimating) return;
            setIsAnimating(true);

            const slide = slideRef.current;
            const firstItem = slide.getElementsByClassName('item')[0];

            // Reset animation class if it existed
            firstItem.classList.remove('animate-card-open');
            void firstItem.offsetWidth; // Force reflow

            // Add the card open animation
            firstItem.classList.add('animate-card-open');

            setTimeout(() => {
                firstItem.classList.remove('animate-card-open');
                slide.appendChild(firstItem); // move to end
                setIsAnimating(false);
            }, 800); // match the animation duration
        };

        // const handlePrevClick = () => {
        //     if (isAnimating) return;
        //     setIsAnimating(true);

        //     const slide = slideRef.current;
        //     const items = slide.getElementsByClassName('item');
        //     const lastItem = items[items.length - 1];

        //     // Step 1: Add a temporary class for reverse animation
        //     lastItem.classList.add('slide-reverse');

        //     // Step 2: Wait for animation to finish, then move DOM
        //     setTimeout(() => {
        //         lastItem.classList.remove('slide-reverse');
        //         slide.insertBefore(lastItem, items[0]); // move to front
        //         setIsAnimating(false);
        //     }, 500); // duration matches CSS animation
        // };

        const handlePrevClick = () => {
            if (isAnimating) return;
            setIsAnimating(true);

            const slide = slideRef.current;
            const items = slide.getElementsByClassName('item');
            const lastItem = items[items.length - 1];

            // Reset any previous animation
            lastItem.classList.remove('animate-card-open');
            void lastItem.offsetWidth; // force reflow to restart animation

            // Add the card animation
            lastItem.classList.add('animate-card-open');

            setTimeout(() => {
                lastItem.classList.remove('animate-card-open');
                slide.insertBefore(lastItem, items[0]); // move to front
                setIsAnimating(false);
            }, 800); // duration matches cardOpen animation
        };

        nextBtn.addEventListener('click', handleNextClick);
        prevBtn.addEventListener('click', handlePrevClick);

        return () => {
            nextBtn.removeEventListener('click', handleNextClick);
            prevBtn.removeEventListener('click', handlePrevClick);
        };
    }, [isAnimating]);



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            handleNextInsights();
        }, 5000); // auto-slide every 5s
        return () => clearInterval(interval);
    }, []);



   

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
            <div className="relative xl:w-[1360px] xl:h-[711px] w-[350px] xl:ml-[280px] h-[400px] overflow-hidden xl:container xl:m-auto mx-[35px] xl:mx-0 container">
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
            <section className='mx-[35px]   mt-20 xl:ml-[280px] xl:mr-[246px]'>
                <Image
                    loading="lazy"
                    height='100'
                    width='280'
                    alt='Success Stories'
                    className='object-contain  w-[1360px] h-full transform group-hover:scale-110 group-hover:origin-center transition-transform duration-500'
                    src='/images/homepage/AdobeStock_406847557.svg'
                />
                <div
                    ref={refs[7]}
                    className={`transition-all  duration-1000 ease-out transform grid xl:grid-cols-12 grid-cols-1 ${inViews[7] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}

                >
                    <div className='xl:col-span-4 col-span-12 xl:border-r border-gray-300 mr-[-16px]'></div>

                    <div className='xl:col-span-8 col-span-12 xl:ml-[6rem]'>
                        <h1 className="xl:text-[120px] font-bold  xl:ml-0  text-[34px] outline-text  xl:h-[125px] xl:mt-[-8px] mt-0">with Impact</h1>
                        <h3 className='xl:text-[34px] text-[26px] text-[#0077CE]  font-bold !mt-[4.25rem] pr-16 xl:pr-0'>Beyond Business: A Commitment to Change</h3>
                        <p className='mt-5 pr-12 xl:pr-0'>Rialtes is more than a technology leader — we are advocates for positive change. From sustainability initiatives to empowering underrepresented voices, we’re dedicated to making a meaningful impact</p>
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
                                    <div className="w-full xl:col-span-4 xl:mt-10"></div>
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

                <AutoTimerSlider />


            </section>
            <div className="relative h-auto flex justify-center xl:mx-[280px] mx-[32px] mt-32">
                <div className="flex flex-col xl:flex-row justify-between">

                    <div className="xl:w-1/2 flex flex-col order-1 xl:order-2">

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
                        <div className="text-white space-y-6 bg-[#184671] p-10  xl:pl-20  pb-0 pr-0 xl:mt-[10rem] xl:h-[610px] h-[370px]">
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
                            <div className="flex  bottom-0 absolute right-0">
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
                        <div className='text-[#073259] xl:text-[180px] text-[89px] font-extrabold xl:h-[219px] xl:ml-[-10px] h-[108px]'>LIFE</div>

                        <div className='text-[#073259] xl:text-[60px] text-[30px] font-extrabold'>@</div>
                    </div>
                    <div className='xl:text-[180px] text-[89px] text-[#0C8AD4] font-extralight xl:h-[219px] xl:ml-[-16px] h-[108px] w-[675px] leading-tight xl:mt-[-35px]'>RIALTES</div>
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
            <section className='pb-20 mt-20 xl:px-[280px] mx-[35px] xl:mx-0 md:px-[100px]'>
                <ContactForm className='xl:w-[60rem] w-full xl:text-[60px] text-[26px] leading-tight' title='Ready to take the next step? Let’s kick off your journey to operational excellence' />
            </section>
        </div>
    )
}
export default Home