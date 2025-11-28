'use client'
import Image from "next/image";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function page({ url }) {
    const carouselRef = useRef(null);
    const [isLastSlide, setIsLastSlide] = useState(false);
    const latestBlogs = [
        {
            "id": 57,
            "image": "/images/blog/digital-data-interface-with-futuristic-touch-interaction-mobile.webp",
            "category": "SAP SuccessFactor",
            "industry": "HRMS",
            "date": "Nov. 27, 2025",
            "url": "/sap-successfactors-services-hr-transformation/",
            "title": "How SAP SuccessFactors Services Leverage Data & AI to Transform Modern HR",
            "alt":"",
            "description": "In 2025, a quiet revolution is transforming the way HR operates. The field of HR is evolving continuously. Expectations have changed, not in the sensational ways that make headlines each week, but through a more subtle, systemic shift."
        },
        {
            id: 58,
            image: "/images/blog/digital-medical-hologram-feature-thumb.webp",
            category: "MediAIna",
            industry: "Life Sciences",
            date: "25 Nov. 2025",
            url: '/how-digital-innovation-transforms-clinical-trial-management/',
            title: "How Digital Innovation is Transforming Clinical Trial Management",
            alt: "Digital medical hologram representing modern clinical trial technologies and innovations in life sciences research.",
            description: "Clinical trials have always been the core of medical progress. But here’s the bitter truth: usual trials are often slow, expensive, and feel disconnected from the digital-first world in which patients now live",
        },
        {
            "id": 56,
            "image": "/images/blog/digital-touchscreen-technology-mobile.webp",
            "category": "MediAIna",
            "industry": "Life Sciences",
            "date": "Nov. 20, 2025",
            "url": "/ai-in-clinical-trials-rare-disease-enrolment/",
            "title": "5 Proven Ways AI Accelerates Patient Enrolment in Rare Disease Clinical Trials",
            "alt": "Person interacting with digital touchscreen interface displaying AI and futuristic technology elements",
            "description": "Clinical trials are the lifeblood of medical innovation, especially when it comes to rare diseases. Yet, one of the biggest hurdles in developing new therapies isn’t the science"
        },
        {
            id: 3,
            image: "/images/blog/digital-brain-ai-circuit-technology-illustration-mobile.webp",
            category: "Salesforce Agentforce",
            industry: "Generic",
            date: "Nov. 19, 2024",
            url: '/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce/',
            title: "The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce",
            alt: "Digital brain circuit illustration with glowing connections on dark blue tech background showing AI concept",
            description: "As businesses scale, the complexity of managing customer interactions multiplies, driving the need for more intelligent and streamlined support systems.  Salesforce Agentforce provides a robust platform for customer service automation, now enhanced by the groundbreaking Atlas Reasoning Engine.",
        },
        {
            id: 55,
            image: "/images/blog/digital-network-touch-data-connection-visualization-mobile.webp",
            category: "Integration",
            industry: "Generic",
            date: "Nov. 12, 2025",
            url: "/boost-enterprise-agility-with-sap-consulting-implementation-services/",
            title: "Boost Enterprise Agility with Tailored SAP Consulting and Implementation Services",
            alt: "Hand interacting with digital network nodes representing SAP-powered enterprise agility.",
            description: "Today, adaptability defines survival; custom SAP development has become a core driver of enterprise agility and growth. "
        },
        {
            id: 54,
            image: "/images/blog/futuristic-data-analytics-visualization-mobile.webp",
            category: "SAP Consulting",
            industry: "Generic",
            date: "Nov. 11, 2025",
            url: "/sap-implementation-strategies-for-2026-success/",
            title: "Proven SAP Implementation Strategies that Minimize Risk and Accelerate ROI",
            alt: "Smart city illustration connected through cloud systems and unified SAP data architecture.",
            description: "We know that implementing SAP isn’t just about upgrading a system. It’s about reshaping how an enterprise operates,from finance and supply chain to HR and customer experience."
        },
        {
            id: 53,
            image: "/images/blog/digital-transformation-journey-ai-mobile.webp",
            category: "SAP Consulting",
            industry: "Generic",
            date: "Nov. 10, 2025",
            url: "/why-enterprises-choose-sap-consulting-partners/",
            title: "Why Leading Enterprises Choose Top SAP Consulting Partners for Growth and Innovation",
            alt: "Person walking through a digital pathway symbolizing an AI-driven transformation journey.",
            description: "Enterprises have been operating in a complex landscape with scattered data, legacy systems, siloed teams, and mounting customer expectations."
        },
        {
            id: 52,
            image: "/images/blog/exelona-cluster-feature-thumb.webp",
            category: "Exelona",
            industry: "Real Estate",
            date: "Nov. 04, 2025",
            url: "/what-does-a-single-source-of-truth-mean-for-real-estate/",
            title: "What Does a 'Single Source of Truth' Mean for Real Estate From Lead to Lease",
            alt: "Real estate analytics interface illustrating integrated data for a single source of truth",
            description: "In property management, it’s rarely the big things that slow teams down. It’s the countless small inefficiencies, mismatched lease data, duplicate records, or time wasted verifying spreadsheets. "
        },
        {
            id: 51,
            image: "/images/blog/crm-erp-convergence-for-real-estate-mobile.webp",
            category: "Exelona",
            industry: "Real Estate",
            date: "Nov. 03, 2025",
            url: "/erp-crm-convergence-real-estate-leaders-guide/",
            title: "CRM + ERP Convergence: How Real Estate Leaders Break System Silos and Cut Costs",
            alt: "Cloud dashboard showing AI-enabled real estate operations and integrated property systems",
            description: "Here’s something every property leader already knows but rarely says out loud: the technology stack that was meant to simplify operations has ended up complicating it."
        },
        {
            id: 50,
            image: "/images/blog/digital-puzzle-technology-integration-thumb.webp",
            category: "Integration",
            industry: "Real Estate",
            date: "Oct. 31, 2025",
            url: "/smart-api-integrations-for-real-estate-2026/",
            title: "5 Essential API Integrations for Real Estate Firms to Accelerate Growth",
            alt: "Tech puzzle graphic showing key API integrations that support real estate digital growth.",
            description: "Every real estate business hits a wall at some point, usually when its systems stop talking to each other. You’ve got a property management tool here, a finance system there, and a CRM somewhere else holding your lead data hostage. "
        },

        {
            "id": 49,
            "image": "/images/blog/ai-sla-billing-efficiency-feature-carousel.webp",
            "category": "Exelona",
            "industry": "Real Estate",
            "date": "Oct. 27, 2025",
            "url": "/tracking-service-level-agreements-without-losing-mind/",
            "title": "How Do You Track SLAs and Billing Without Losing Your Mind?",
            "alt": "AI dashboard tracking SLAs and automated billing to improve service accuracy and efficiency.",
            "description": " A service-level agreement (SLA) outlines the expected level of service from a vendor. It specifies the metrics used to measure that service and the remedies available if the agreed-upon service levels are not met."
        },
        {
            id: 48,
            image: "/images/blog/conversational-ai-in-real-estate-mobile.webp",
            category: "Exelona",
            industry: "Real Estate",
            date: "Oct. 20, 2025",
            url: "/conversational-ai-in-real-estate-scale-resident-support/",
            title: "Conversational AI in Real Estate: Scale Resident Support Without Adding Staff",
            alt: "AI chatbot interface supporting real estate teams with automated responses and tenant assistance",
            description: "Resident support in property management is getting harder to scale. Between maintenance requests, rent inquiries,"
        },
        {
            id: 47,
            image: "/images/blog/ai-property-operations-predictive-maintenance-mobile.webp",
            category: "Exelona",
            industry: "Real Estate",
            date: "Oct. 13, 2025",
            url: "/ai-in-real-estate-reduce-opex-with-predictive-maintenance/",
            title: "AI in Property Operations: Cut Downtime 30% and Reduce Opex with Predictive Maintenance",
            alt: "AI dashboard predicting equipment issues to reduce downtime in property operations",
            description: "Here’s the truth about property operations: they have always been a balancing act between cost, comfort, and continuity."
        },
        {
            id: 46,
            image: "/images/blog/Salesforce Consulting Cluster 1.1_Blog feature thumb.webp",
            category: "Salesforce Consulting",
            industry: "Generic",
            date: "Oct. 10, 2025",
            url: "/how-top-salesforce-partners-help-enterprises-thrive-and-innovate/",
            title: "How Top Salesforce Partners Help Enterprises Thrive and Innovate",
            alt: "Salesforce cloud icons showing enterprise system connections for CRM optimization.",
            description: "Salesforce has become the foundation for modern enterprise CRM solutions, helping organizations unify data, streamline processes, and deliver personalized customer experiences. "
        }

    ];
    const filteredBlogs = latestBlogs.filter((elem) => {

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
            <div className="flex carousel-button-group absolute top-0 xl:right-32 sm:right-6 max-sm:right-0  md:mt-4">
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
                    <p className="mb-[43px] leading-tight 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] font-normal"> Latest Blogs</p>
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
                    beforeChange={handleBeforeChange}
                    arrows={false}
                    renderButtonGroupOutside={true}
                    customButtonGroup={<ButtonGroup />}
                    renderDotsOutside={true}
                    customDot={<CustomDot />}>
                    {filteredBlogs.map((slide) => (
                        <div key={slide.id} className="flex flex-col sm:basis-1/4 border border-gray-300 hover:border-white sm:mr-6 mb-4 sm:h-[580px] md:h-full h-full lg:h-[580px] xl:h-[550px] 4xl:h-[600px] group">

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
                            <div className="flex flex-col text-black py-4 px-6 flex-grow transition duration-300 ease-in-out group-hover:bg-[#F0F0F0]">
                                <div className="flex flex-col">
                                    <div className=" leading-tight text-[16px] 4xl:text-[17px]"><span className="text-[#0092E0]">{slide.category}</span> | {slide.date}</div>
                                    <Link href={'/insights/blogs' + slide.url}><p className="my-3 sm:line-clamp-4 line-clamp-3 font-semibold leading-tight 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{slide.title}</p></Link>
                                </div>
                                <p className="line-clamp-4 leading-tight 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{slide.description}</p>
                            </div>

                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}