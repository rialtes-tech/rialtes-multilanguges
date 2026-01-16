
"use client";
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
const AutoTimerSlider = dynamic(() => import('./newHome/page'), { ssr: false });
import { useMultipleScrollAnimation } from './hooks/useScrollAnimation';
const ContactForm = dynamic(() => import('./components/contactform'), { ssr: false });
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Seo from './components/Seo';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rialtes Technologies",
    "description": "Global expert in IT services and IT consulting, Rialtes delivers AI-powered Salesforce and SAP solutions across industries.",
    "url": "https://www.rialtes.com",
    "logo": "https://www.rialtes.com/images/homepage/logo.svg",
    "contactPoint": {
        "@type": "ContactPoint",
        "email": "sales@rialtes.com",
        "contactType": "Sales",
        "areaServed": "US, CA, IN, SG"
    },
    "sameAs": [
        "https://www.linkedin.com/company/rialtes-technologies-llc",
        "https://www.instagram.com/rialtes_technologies",
        "https://www.youtube.com/@rialtes",
        "https://x.com/Rialtestech"
    ]
}
const carouselData = [
    {
        title: "Blogs",
        description:
            "SAP PI PO to SAP CPI Migration: A Complete Guide",
        image: "/images/homepage/insights5.webp",
        link: '/insights/blogs/sap-pi-po-to-cpi-migration-complete-guide'
    },
    {
        title: "Case Studies",
        description:
            "Transforming O2C and P2P Processes with SAP ERP Cloud Solutions",
        image: "/images/homepage/prp-processes.webp",
        link: '/insights/case-studies/sap-erp-cloud-solutions-automotive-case-study'
    },

    {
        title: "Blogs",
        description:
            "AI in Patient Engagement: How AI Agents Support MedTech in Remote Monitoring",
        image: "/images/homepage/insights4.webp",
        link: '/insights/blogs/ai-patient-engagement-medtech-remote-care'
    },
    {
        title: "Case Studies",
        description:
            "Transforming Student Success with Salesforce Education Cloud and Edu+",
        image: "/images/homepage/transforming-student.webp",
        link: '/insights/case-studies/transforming-student-success-with-salesforce-education-cloud-and-eduplus'
    },
    {
        title: "Blogs",
        description:
            "How to Build and Deploy Your First AI Agent with Agentforce (Step-by-Step Guide)",
        image: "/images/homepage/insights3.webp",
        link: '/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce'
    },
    {
        title: "Case Studies",
        description:
            "Leading Automotive Manufacturer Achieved 35% Higher Customer Satisfaction Score with AutoSense",
        image: "/images/homepage/leading-automotive.webp",
        link: '/insights/case-studies/leading-automotive-manufacturer-achieved-35percent-higher-customer-satisfaction-score-with-autosense'
    },
    {
        title: "Blogs",
        description:
            "What Makes SAP Consulting Companies Trustworthy for Enterprise Engagements",
        image: "/images/homepage/insights1.webp",
        link: '/insights/blogs/what-makes-sap-consulting-companies-trustworthy'
    },
    {
        title: "Blogs",
        description:
            "Salesforce Consulting Playbook: Strategies to Drive Growth and Efficiency",
        image: "/images/homepage/insights2.webp",
        link: '/insights/blogs/salesforce-consulting-playbook-enterprise-growth'
    },
    {
        title: "Blogs",
        description:
            "Integration Partners for Salesforce: Cutting Complexity, Increasing ROI",
        image: "/images/homepage/insights6.webp",
        link: '/insights/blogs/salesforce-integration-partners-for-enterprises-to-scale'
    },



];
const successStoryData = [
    {
        id: 1,
        imageUrl: '/images/homepage/stremline_with_bgc.webp',
        title: 'Manufacturing',
        description: 'Streamlined DevOps using Copado and Salesforce',
        url: 'insights/case-studies/streamlined-devops-using-copado-and-salesforce'


    },
    {
        id: 2,
        imageUrl: '/images/homepage/salesforce_with_bgc.webp',
        title: 'Healthcare',
        description: 'Salesforce Health Cloud, Prior Authorization',
        url: 'insights/case-studies/salesforce-health-cloud-prior-authorization'

    },
    {
        id: 3,
        imageUrl: '/images/homepage/mfg-2_with_bgc.webp',
        title: 'Manufacturing',
        description: 'Omnichannel case management with Salesforce Service Cloud',
        url: 'insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud'
    },
    {
        id: 4,
        imageUrl: '/images/homepage/public-sector-3_with_bgc.webp',
        title: 'Public Sector',
        description: "YARDI Transformation Journey with North America's Largest PHA",
        theme: "light",
        url: '/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams-journey-with-largest-pha-in-north-america'
    },
    {
        id: 5,
        imageUrl: '/images/homepage/healthcare-22.webp',
        title: 'Healthcare',
        description: 'Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP',
        url: 'insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap'

    },
    {
        id: 6,
        imageUrl: '/images/homepage/mfg-3_with_bgc.webp',
        title: 'Manufacturing',
        description: 'Streamlining Sales with Salesforce Sales Cloud for Manufacturing',
        url: 'insights/case-studies/optimizing-sales-processes-with-salesforce-sales-cloud-for-a-manufacturing-company/'
    },
    {
        id: 7,
        imageUrl: '/images/homepage/realestate-3_with_bgc.webp',
        title: 'Real Estate',
        description: 'Automating ACH and Journal Entries with Our Exelona Banking Module',
        url: 'insights/case-studies/realForce-banking-module-ach',
        theme: "light",

    },
    {
        id: 8,
        imageUrl: '/images/homepage/healthcareImg-new.webp',
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
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = useMemo(() => [
        { link: "/solutions/integration/sap-cloud-platform-integration-consulting/", alt: "Migrating from SAP PI/PO to SAP CPI to enable secure, intelligent, and cloud-first enterprise integration", title: "SAP CPI", image: '/images/homepage/sap-pi-po-to-sap-cpi-migration.webp', imageMobile: '/images/homepage/sap-pi-po-to-sap-cpi-migration-mobile.webp' },
        { link: "https://www.rialtes.com/products/agentchat", alt: "WhatsApp customer interactions embedded in Salesforce using AgentChat for secure and personalized messaging", image: '/images/homepage/whatsapp-salesforce-agentchat.webp', title: "Agentchat", imageMobile: '/images/homepage/whatsapp-salesforce-agentchat-mobile.webp' },
        { link: "/industry/education-cloud-it-solutions", alt: "Holistic education solutions modernizing academic operations and strengthening connections across institutions", image: '/images/homepage/holistic-education-solutions.webp', title: "Education", imageMobile: '/images/homepage/holistic-education-solutions-mobile.webp' },
    ], [])
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

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [slides]);


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

            <Script
                id="schema-homepage"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className="relative custom-container overflow-hidden">
                <div className="w-full max-[400px]:h-[340px] h-[480px] min-[500px]:h-[600px] sm:h-[780px] md:h-[700px] lg:h-[540px] xl:h-[550px] 2xl:h-[625px] 4xl:h-[700px] relative">
                    {slides.map((s, i) => (
                        <Link key={i} href={s.link}>
                            <div
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === currentSlide ? "opacity-100 z-30" : "opacity-0 z-20"
                                    }`}>
                                {/* Desktop */}
                                <div className="hidden md:block w-full h-full relative">
                                    <Image
                                        src={s.image}
                                        alt={s.title}
                                        fill
                                        priority={i === 0}
                                        className='max-lg:object-cover max-lg:object-[14%_20%]'
                                    />
                                </div>
                                {/* Mobile */}
                                <div className="block md:hidden w-full h-full relative">
                                    <Image
                                        src={s.imageMobile}
                                        alt={s.title}
                                        fill
                                        priority={i === 0}
                                        className='min-[400px]:object-cover'
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* Arrows */}
                    <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-4">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`lg:w-3 lg:h-3 w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white scale-110" : "bg-white/30"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* innovating section */}
            <section className='custom-container xl:mt-[98px] mt-[55px]'>
                <Image
                    priority
                    height='100'
                    width='280'
                    alt='Success Stories'
                    className='object-contain w-full h-full transform group-hover:scale-110 group-hover:origin-center transition-transform duration-500'
                    src='/images/homepage/innovative2.webp'
                    fetchPriority='high'
                />
                <div
                    ref={refs[7]}
                    className={`transition-all duration-1000 ease-out transform grid xl:grid-cols-12 grid-cols-1 ${inViews[7] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}

                >
                    <div className='lg:col-span-4 col-span-12 lg:border-r-[2px] border-black-900'></div>

                    <div className='lg:col-span-8 col-span-12 2xl:pl-[78px] lg:pl-[42px]'>
                        <h3 className="4xl:text-[110px] xl:text-[80px] md:text-[60px] sm:text-[46px] font-bold text-[33px] outline-text border-l-[2px] xl:border-none border-gay-300 ml-[34%] sm:ml-[35%] md:ml-[32%] pl-[20px] xl:pl-0 xl:ml-auto mt-[20px] leading-tight">with Impact</h3>
                        <h2 className='4xl:text-[32px] xl:text-[28px] text-[26px] text-[#0077CE] xl:mt-[30px] mt-[30px] font-bold leading-tight'>Beyond Business: A Commitment to Change</h2>
                        <p className='xl:mt-[27px] mt-[16px] 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'>Rialtes is more than a technology leader — we are advocates for positive change. From sustainability initiatives to empowering underrepresented voices, we’re dedicated to making a meaningful impact</p>
                    </div>

                </div>

            </section>


            {/* success stories section */}
            <section className='custom-container lg:pr-0 xl:mt-[147px] mt-[87px]'>
                <div
                    ref={refs[0]}
                    className={`col-span-4 transition-all duration-1000 ease-out transform items-center grid xl:grid-cols-12 grid-cols-1 ${inViews[0] ? "opacity-100 translate-y-0" : "translate-y-12"}`} >
                    <div className='col-span-5'>
                        <h2 className='4xl:text-[60px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] text-[26px]'>Success Stories</h2>
                    </div>
                    <div className='col-span-7'>
                        <p className='mt-5 xl:mt-0 md:mt-5 lg:mt-mt-5 pr-8 xl:pr-0 lg:w-[80%]'>Discover how we’ve harnessed the disruptive power of cutting-edge AI to help companies anticipate and act with insight and speed with IT consulting services.</p>
                    </div>
                    <div className='col-span-3'></div>
                </div>
                <div className='grid xl:grid-cols-4 md:grid-cols-2 mt-16 gap-10 xl:gap-0'>
                    {successStoryData.map((success, index) => {
                        // const isLight = success.theme === "light";
                        return (
                            <React.Fragment key={index}>
                                <Link href={success.url}>
                                    <div className="relative  xl:h-[486px] h-[391px] w-[97%] overflow-hidden group shadow-lg">
                                        <div
                                            className="absolute inset-0 transform scale-[1] w-full origin-bottom-left transition-transform duration-300 ease-in-out group-hover:scale-[1.9]"
                                            style={{
                                                backgroundImage: `url(${success.imageUrl})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'left center',
                                            }}></div>
                                        <div className="absolute inset-0 hover:text-white bg-black bg-opacity-10 group-hover:bg-opacity-50 transition duration-700"></div>
                                        <div className={`relative  z-10 p-6 text-white`}>
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

            {/* industry experties and solutions */}
            <section className='xl:mt-[158px] mt-[87px]'>
                <div
                    ref={refs[1]}
                    className={`custom-container transition-all duration-1000 ease-out transform items-center grid xl:grid-cols-12 grid-cols-1 ${inViews[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} >
                    <div className='col-span-6'>
                        <h2 className='4xl:text-[60px] 2xl:text-[48px] md:text-[32px] xl:text-[40px] text-[26px] leading-tight'>Industry Expertise & Solutions</h2>
                    </div>
                    <div className='col-span-6'>
                        <p className='mt-5 xl:mt-0 sm:mt-5 lg:mt-5 4xl:text-[20px] xl:text-[18px] text-[16px]'>We have domain expertise across various industries, enabling us to offer tailored IT consulting services to meet your specific industry needs. Transform your business with a quantifiable and pre-focussed system.</p>
                    </div>
                </div>
                <AutoTimerSlider />
            </section>

            {/* insights section */}
            <section>
                <div className="custom-container grid lg:grid-cols-2 lg:mt-[182px] mt-[97px] lg:h-[850px]">
                    {/* mob section */}
                    <div
                        ref={refs[2]}
                        className={`transition-all duration-1000 ease-out transform xl:pl-[68px] block lg:hidden mb-[23px] w-[90%] ${inViews[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                        <h2 className="leading-tight 4xl:text-[48px] xl:text-[42px] text-[32px] font-bold text-[#073259]">
                            Insights
                        </h2>
                        <p className="mt-6 xl:mt-10 text-[16px] 2xl:w-[70%] 4xl:text-[20px] xl:text-[18px] sm:w-[70%] mb-10">
                            Stay ahead of the curve with expert perspectives, success stories, and the latest innovations in AI.
                        </p>
                    </div>
                    <div className="h-full">
                        <div className="xl:block hidden h-full">
                            <Image
                                src={carouselData[activeIndexInsights].image}
                                alt={carouselData[activeIndexInsights].title}
                                className="w-full h-full object-cover"
                                priority
                                fetchPriority='high'
                                width={500}
                                height={500}
                            />
                        </div>

                        <div className="xl:hidden block">
                            <Image
                                src={carouselData[activeIndexInsights].image}
                                alt={carouselData[activeIndexInsights].title}
                                className="w-full md:h-[900px] sm:h-[500px] h-[435px] object-cover"
                                style={{ objectPosition: "35% 20%" }}
                                priority
                                fetchPriority='high'
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>

                    {/* desktop section */}
                    <div className="h-full flex flex-col justify-between pt-0">
                        <div
                            ref={refs[2]}
                            className={`transition-all duration-1000 ease-out transform lg:pl-[68px] lg:block hidden ${inViews[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                }`}
                        >
                            <h2 className="leading-tight 4xl:text-[48px] xl:text-[42px] text-[32px] font-bold text-[#073259]">
                                Insights
                            </h2>
                            <p className="mt-6 lg:mt-10 text-[16px] 3xl:w-[80%] 4xl:text-[20px] xl:text-[18px] leading-tight text-gray-700">
                                Stay ahead of the curve with expert perspectives, success stories, and the latest innovations in AI.
                            </p>
                        </div>

                        <div className="text-white space-y-6 bg-[#184671] lg:pl-[65px] pl-[29px] pt-[35px] lg:pt-[78px] lg:mt-0">
                            <div className="xl:text-[26px] text-[16px]">
                                {carouselData[activeIndexInsights].title}
                            </div>

                            <Link href={carouselData[activeIndexInsights].link}>
                                <p
                                    ref={refs[5]}
                                    className={`transition-all 4xl:text-[38px] xl:text-[30px] text-[24px] font-normal lg:pb-[60px] lg:pr-[40px] pr-[40px] lg:mt-[38px] mt-[13px] duration-1000 ease-out transform ${inViews[5] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                        }`}
                                >
                                    {carouselData[activeIndexInsights].description}
                                </p>
                            </Link>

                            <div className="flex items-center float-end gap-6">
                                <div className="text-white xl:text-[25px] text-[16px] min-w-[40px] text-right">
                                    {activeIndexInsights + 1} / {carouselData.length}
                                </div>

                                <div className="flex">
                                    <button aria-label="Previous Slide" onClick={handlePrevInsights} className="xl:h-[60px] xl:w-[60px] h-[45px] w-[45px] bg-white flex items-center justify-center shadow-md hover:bg-gray-100">
                                        <svg viewBox="0 0 24 24" fill="black" width="24">
                                            <polygon points="15,6 9,12 15,18" />
                                        </svg>
                                    </button>
                                    <button aria-label="Next Slide" onClick={handleNextInsights} className="xl:h-[60px] xl:w-[60px] h-[45px] w-[45px] bg-white flex items-center justify-center shadow-md hover:bg-gray-100">
                                        <svg viewBox="0 0 24 24" fill="black" width="24">
                                            <polygon points="9,6 15,12 9,18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* life at rialtes section */}

            <section className="custom-container xl:mt-[113px] mt-[77px] grid grid-cols-1 xl:grid-cols-12 gap-y-[40px] xl:gap-0">

                <div
                    ref={refs[3]}
                    className={`transition-all duration-1000 col-span-12 xl:col-span-5 ease-out transform ${inViews[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}
                >

                    <div className="text-[#073259] text-[56px] leading-[68px] md:text-[100px] md:leading-[120px] 4xl:text-[140px] 4xl:leading-[219px] lg:text-[80px] font-extrabold">
                        <span>LIFE</span>
                        <span className="text-[#073259] text-[24px] leading-[32px] md:text-[36px] md:leading-[44px] 4xl:text-[54px] 4xl:leading-[73px] lg:text-[40px] font-extrabold">
                            @
                        </span>
                        <p className="text-[#0C8AD4] text-[56px] leading-[68px] md:text-[100px] md:leading-[120px] xl:mt-[-64px] 4xl:text-[130px] xl:leading-[219px] lg:text-[100px] font-extralight">
                            RIALTES
                        </p>
                        <span></span>

                        <p className="text-[14px] leading-[20px] xl:text-[16px] xl:leading-[26px] 4xl:text-[20px] 4xl:leading-[30px] font-medium xl:mt-[27px] mt-[19px] xl:w-[90%] lg:w-[70%] md:w-[80%] w-[90%] ">
                            Driven by innovation and fueled by human potential, our IT consulting company tackles the digital world’s toughest problems. Together, let’s simplify problems, enable solutions, and empower each other.
                        </p>
                    </div>

                </div>
                <div
                    ref={refs[4]}
                    className={`transition-all col-span-12 xl:col-span-7 duration-1000  ease-out transform ${inViews[4] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}
                >
                    <Image
                        className="w-full h-auto xl:mt-[140px]"
                        src="/images/homepage/Group 508.webp"
                        alt="life at rialtes"
                        width={0}
                        height={0}
                        sizes="100vw"
                        loading="lazy"
                        fetchPriority='high'
                    />
                </div>
            </section>

            <section className='pb-20 mt-20 custom-container'>
                <ContactForm className='xl:w-[80%] 4xl:w-full w-full 4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] leading-tight' title='Ready to take the next step? Let’s kick off your journey to operational excellence' />
            </section>
        </div >
    )
}
export default Home