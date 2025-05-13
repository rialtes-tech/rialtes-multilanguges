
"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';
import Head from 'next/head';
import Link from 'next/link';
import Seo from './components/Seo';
import AutoTimerSlider from './newHome/page';
import { useMultipleScrollAnimation } from './hooks/useScrollAnimation';
import ContactForm from './components/contactform';

const carouselData = [
    {
        title: "Blogs",
        description:
            "Redefining the Future of Enterprise AI with SAP Joule",
        image: "/images/blog/jthumb.webp",
        link: '/insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule'
    },
    {
        title: "Blogs",
        description:
            "Automate Crucial Parts of your Healthcare Organization with athenahealth and Salesforce Integration",
        image: "/images/blog/blog-8.webp",
        link: '/insights/blogs/automate-crucial-parts-of-your-healthcare-organization-with-athenahealth-and-salesforce-integration'
    },
    {
        title: "Blogs",
        description:
            "SAP Business Data Cloud: The Intelligent Data Foundation for AI-Driven Business Success",
        image: "/images/blog/SAP Business cloud_Blog thumb.webp",
        link: '/insights/blogs/sap-business-data-cloud-the-intelligent-data-foundation-for-ai-driven-business-success'
    },
    {
        title: "Blogs",
        description:
            "Agentforce Agents Scales Enterprise Resource Planning Systems with AI",
        image: "/images/blog/blog-12.webp",
        link: '/insights/blogs/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai'
    },
    {
        title: "Blogs",
        description:
            "How SAP SuccessFactors Enhances Remote Work Management",
        image: "/images/blog/blog-13.webp",
        link: '/insights/blogs/how-sap-successfactors-enhances-remote-work-management'
    },
    {
        title: "Blogs",
        description:
            "How Salesforce Agentforce Actually Works",
        image: "/images/blog/blog-1.webp",
        link: '/insights/blogs/how-salesforce-agentforce-actually-works'
    },
];
const successStoryData = [
    {
        id: 1,
        imageUrl: '/images/homepage/stremline.webp',
        title: 'Manufacturing',
        description: 'Streamlined DevOps using Copado and Salesforce',
        url: 'insights/case-studies/streamlined-devops-using-copado-and-salesforce'


    },
    {
        id: 2,
        imageUrl: '/images/homepage/salesforce.webp',
        title: 'Healthcare',
        description: 'Salesforce Health Cloud, Prior Authorization',
        url: 'insights/case-studies/salesforce-health-cloud-prior-authorization'

    },
    {
        id: 3,
        imageUrl: '/images/homepage/mfg-2.webp',
        title: 'Manufacturing',
        description: 'Omnichannel case management with Salesforce Service Cloud',
        url: 'insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud'
    },
    {
        id: 4,
        imageUrl: '/images/homepage/realestate.webp',
        title: 'Public Sector',
        description: 'A public housing in US',
        theme: "light",
        url: '/insights/case-studies/a-public-housing-in-us'
    },
    {
        id: 5,
        imageUrl: '/images/homepage/healthcare-2.webp',
        title: 'Healthcare',
        description: 'Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP',
        url: 'insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap'

    },
    {
        id: 6,
        imageUrl: '/images/homepage/mfg-3.webp',
        title: 'Manufacturing',
        description: 'Streamlining Sales with Salesforce Sales Cloud for Manufacturing',
        url: 'insights/case-studies/optimizing-sales-processes-with-salesforce-sales-cloud-for-a-manufacturing-company/'
    },
    {
        id: 7,
        imageUrl: '/images/homepage/realestate-2.webp',
        title: 'Real Estate',
        description: 'RealForce Banking Module - ACH',
        url: 'insights/case-studies/realForce-banking-module-ach',
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
        setActiveIndexInsights((prevIndex) =>
            prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
        );
    };

    const handleNextInsights = () => {
        setActiveIndexInsights((prevIndex) =>
            prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
        );
    };


    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const slides = [
        {  link: "/insights/news/rialtes-joins-elite-group-as-an-official-salesforce-reseller-partner", image: '/images/news/sales-news.webp', imageMobile: '/images/homepage/sales-mobile.webp' },
        {  link: "/products/agentchat", image: '/images/homepage/agentchat.webp', imageMobile: '/images/homepage/agentcmob.webp' },
        {  link: "/industry/manufacturing-cloud-erp", image: '/images/homepage/manufact.webp', imageMobile: '/images/homepage/manmob.webp' },

    ]
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextInsights();
        }, 5000);
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
                canonical={"https://www.rialtes.com/"}


            />
            <div className="relative xl:w-[1360px] xl:h-[711px] w-[360px] md:w-full xl:ml-[280px] h-[400px] md:ml-[100px] overflow-hidden xl:container xl:m-auto mx-[35px] xl:mx-0 container">
                {slides.map((slide, index) => (
                    <React.Fragment key={index}>
                        <Link href={slide.link}>

                            <div
                                className={`absolute inset-0 transition-transform transform xl:hidden ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                                    }`}
                                style={{
                                    backgroundImage: `url(${slide.imageMobile})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div
                                    ref={refs[6]}
                                    className={`col-span-4 transition-all duration-1000 ease-out transform absolute inset-0 bg-opacity-50 flex flex-col xl:pl-[118px] justify-center items-start text-white p-8 ${inViews[6] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                        }`}
                                />
                            </div>
                        </Link>

                        <Link href={slide.link}>
                            <div
                                className={`absolute inset-0 transition-transform transform hidden xl:block ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                                    }`}
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div
                                    ref={refs[6]}
                                    className={`col-span-4 transition-all duration-1000 ease-out transform absolute inset-0 bg-opacity-50 flex flex-col xl:pl-[118px] justify-center items-start text-white p-8 ${inViews[6] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                        }`}
                                />
                            </div>
                        </Link>
                    </React.Fragment>
                ))}

                <div className="absolute bottom-0 right-[-4rem] xl:right-[-6rem] gap-5 transform -translate-x-1/2 flex items-center rounded-full shadow-lg">
                    <div className='text-white xl:text-[25px] font-light'>
                        {currentSlide + 1}/{slides.length}
                    </div>
                   
                  
                    <div className="flex">
                        <button   onClick={prevSlide} className="xl:h-[60px] xl:w-[60px] bg-white flex items-center justify-center  shadow-md hover:bg-gray-100">
                            <svg viewBox="0 0 24 24" fill="black" width="45">
                                <polygon points="15,6 9,12 15,18" />
                            </svg>
                        </button>

                        <button   onClick={nextSlide} className="xl:h-[60px] xl:w-[60px] bg-white flex items-center justify-center  shadow-md hover:bg-gray-100">
                            <svg viewBox="0 0 24 24" fill="black" width="45">
                                <polygon points="9,6 15,12 9,18" />
                            </svg>
                        </button>
                    </div>


                </div>
            </div>

            {/* //innovating section */}
            <section className='mx-[35px] md:ml-[100px]  mt-20 xl:ml-[280px] xl:mr-[246px]'>
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
                    <div className='xl:col-span-4 col-span-12 xl:border-r-[2px] border-black-900 mr-[-16px]'></div>

                    <div className='xl:col-span-8 col-span-12 xl:ml-[6rem]'>
                        <h1 className="xl:text-[130px] font-bold  xl:ml-0  text-[33px] outline-text pl-[22px] xl:pl-0 xl:h-[125px] xl:mt-[-8px] mt-0 border-l-[2px] xl:border-none border-gay-300 ml-32">with Impact</h1>
                        <h3 className='xl:text-[34px] text-[26px] text-[#0077CE]  font-bold !mt-[4.25rem] pr-16 xl:pr-0'>Beyond Business: A Commitment to Change</h3>
                        <p className='mt-5 pr-8 xl:pr-0'>Rialtes is more than a technology leader — we are advocates for positive change. From sustainability initiatives to empowering underrepresented voices, we’re dedicated to making a meaningful impact</p>
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
                <div className='grid xl:grid-cols-4 md:grid-cols-2 mt-16 gap-10 xl:gap-0'>
                    {successStoryData.map((success, index) => {
                        const isLight = success.theme === "light";
                        return (
                            <React.Fragment key={index}>
                                <Link href={success.url}>
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
                                            <p className="mb-5 text-[18px] ">{success.title}</p>
                                            <h3 className="font-medium leading-tight text-[24px] xl:text-[30px] pr-10 xl:pr-5">
                                                {success.description}
                                            </h3>
                                        </div>
                                    </div>

                                    {(index + 1) % 4 === 0 && (
                                        <div className="w-full xl:col-span-4 xl:mt-10"></div>
                                    )}
                                </Link>
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
                        <p className='mt-5 xl:mt-0 md:mt-5 lg:mt-mt-5 leading-tight pr-10 xl:pr-5'>We have domain expertise across various industries, enabling us to offer tailored IT consulting services to meet your specific industry needs. Transform your business with a quantifiable and pre-focussed system.</p>
                    </div>
                    <div className='col-span-2'></div>
                </div>

                <AutoTimerSlider />


            </section>
            <div className="relative h-auto flex justify-center xl:mx-[280px] md:ml-[100px] mx-[32px] mt-40">
                <div className="flex flex-col xl:flex-row justify-between">

                    <div className="xl:w-1/2 flex flex-col order-1 xl:order-2">

                        <div
                            ref={refs[2]}
                            className={`transition-all duration-1000 ease-out transform xl:pl-20 ${inViews[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                }`}
                        >
                            <h2 className="leading-tight">Insights</h2>
                            <p className="mt-10 leading-tight pr-10 xl:pr-0">
                                Stay ahead of the curve with expert perspectives, success stories, and the latest innovations in AI.
                            </p>
                        </div>
                        <div className="xl:w-1/2  xl:order-1 mt-10 xl:mt-0 xl:hidden block">
                            <img
                                src={carouselData[activeIndexInsights].image}
                                alt={carouselData[activeIndexInsights].title}
                                className="w-full xl:h-[850px] h-[435px] object-cover"
                            />
                        </div>
                        <div className="text-white space-y-6 bg-[#184671] p-10   xl:pl-20  pb-0 pr-0 xl:mt-[80px] xl:h-[610px] h-[400px]">
                            <h1 className="xl:text-[26px] text-[16px] mb-10 mt-16">
                                {carouselData[activeIndexInsights].title}
                            </h1>
                            <Link href={carouselData[activeIndexInsights].link} className='!mt-10'>
                                <p
                                    ref={refs[5]}
                                    className={`transition-all xl:text-[40px] font-normal text-[24px] xl:pr-10 duration-1000 ease-out transform pr-6 ${inViews[5] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                        }`}
                                >
                                    {carouselData[activeIndexInsights].description}
                                </p>
                            </Link>

                            <div className="flex  bottom-0 absolute right-0 items-center">
                                <div className="mr-10 text-white xl:text-[25px] text-[16px] min-w-[40px] text-right">
                                    {activeIndexInsights + 1} / {carouselData.length}
                                </div>


                                <div className="flex">
                        <button   onClick={handlePrevInsights} className="xl:h-[60px] xl:w-[60px] bg-white flex items-center justify-center  shadow-md hover:bg-gray-100">
                            <svg viewBox="0 0 24 24" fill="black" width="45">
                                <polygon points="15,6 9,12 15,18" />
                            </svg>
                        </button>

                        <button   onClick={handleNextInsights} className="xl:h-[60px] xl:w-[60px] bg-white flex items-center justify-center  shadow-md hover:bg-gray-100">
                            <svg viewBox="0 0 24 24" fill="black" width="45">
                                <polygon points="9,6 15,12 9,18" />
                            </svg>
                        </button>
                    </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/2 order-2 xl:order-1 mt-10 xl:mt-0 xl:block hidden">
                        <img
                            src={carouselData[activeIndexInsights].image}
                            alt={carouselData[activeIndexInsights].title}
                            className="w-full xl:h-[850px] h-[435px] object-cover"
                        />
                    </div>
                </div>
            </div>



            <section className='xl:ml-[280px] md:ml-[100px] xl:mr-[142px] mt-20 mx-[35px] grid xl:grid-cols-12 grid-cols-12'>
                <div
                    ref={refs[3]}
                    className={` transition-all duration-1000 ease-out xl:col-span-5 col-span-12 transform items-center   md:mr-0 xl:mr-0 ${inViews[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}
                >
                    <div className='flex items-end'>
                        <div className='text-[#073259] xl:text-[180px] text-[89px] font-extrabold xl:h-[219px] xl:ml-[-10px] h-[108px]'>LIFE</div>

                        <div className='text-[#073259] xl:text-[60px] text-[30px] font-extrabold'>@</div>
                    </div>
                    <div className='xl:text-[170px] text-[89px] text-[#0C8AD4] font-extralight xl:h-[219px] xl:ml-[-16px] h-[108px]  leading-tight xl:mt-[-35px]'>RIALTES</div>
                    <p className='xl:pr-[6rem] mt-10 pr-5'>Driven by innovation and fueled by human potential, our IT consulting company tackles the digital world’s toughest problems. Together, let’s simplify problems, enable solutions, and empower each other.</p>
                    {/* <button className="xl:!mt-16 !mt-10 px-6 py-4 xl:text-[20px] text-[12px] bg-[#134874] font-bold border border-white hover:bg-[#134874] text-white  transition">
                        Explore More
                    </button> */}
                </div>
                <div
                    ref={refs[4]}
                    className={` transition-all xl:mt-[11rem] mt-[4rem] xl:col-span-7 col-span-12 duration-1000 ease-out  transform items-center   md:mr-0 xl:mr-0 ${inViews[4] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}
                >
                    <Image
                        className="relative w-full h-full xl:ml-[-2rem]"
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