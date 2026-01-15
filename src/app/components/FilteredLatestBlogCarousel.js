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
            "id": 74,
            "image": "/images/blog/automated-warehouse-conveyor-system-logistics-thumbnail.webp",
            "category": "Kinaxis RapidResponse",
            "industry": "Generic",
            "date": "Jan. 13, 2026",
            "url": "/kinaxis-rapidresponse-demandplus-real-time-supply-chain/",
            "title": "Building a Real-Time, Resilient Supply Chain with Rialtes Demand+",
            "alt": "Automated warehouse with colorful light trails showing high-speed conveyor systems and efficient inventory movement in motion",
            "description": "Supply chains don’t break anymore. They bend, snap back, and get tested again almost immediately. Demand spikes without warning. Suppliers miss commitments."
        }, 
        {
            "id": 73,
            "image": "/images/blog/digital-connectivity-bridge-network-integration-thumb.webp",
            "category": "SAP Ariba",
            "industry": "Generic",
            "date": "Jan. 12, 2026",
            "url": "/sapbuyplus-sap-ariba-connected-procurement/",
            "title": "SAPBuy+: The Missing Link in Ariba Procurement",
            "alt": "Digital bridge with network connections linking smartphone to cloud representing SAP Ariba procurement integration system",
            "description": "Procurement has undergone more significant changes in the last five years than it did in the previous twenty. "
        },
        {
            "id": 72,
            "image": "/images/blog/data-analysis-business-strategy-thumbnail.webp",
            "category": "SAP Consulting",
            "industry": "Generic",
            "date": "Jan. 09, 2026",
            "url": "/sap-consulting-trust-through-accountability/",
            "title": "Accountability in SAP Consulting: What Enterprises Must Demand from Partners",
            "alt": "Team reviewing business data and performance metrics on a digital analytics dashboard",
            "description": "Enterprise SAP programs don’t fail because technology isn’t available; they fail when governance breaks down, when ownership blurs, and when decisions lack accountability. Large transformation programs involve multi-year roadmaps, cross-functional impact, and the kind of complexity where assumptions compound into risk quickly."
        },
        {
            "id": 71,
            "image": "/images/blog/fragmented-customer-journeys-feature-thumb.webp",
            "category": "Salesforce Marketing Cloud",
            "industry": "Generic",
            "date": "Jan. 08, 2026",
            "url": "/fragmented-customer-journeys-salesforce-marketing-cloud/",
            "title": "What Are Fragmented Customer Journeys and Why Do They Matter?",
            "alt": "Hexagonal tiles with human icons on a blue background representing fragmented customer journeys",
            "description": "Personalized marketing has been the promise for over a decade. Yet despite better tools, more data, and smarter platforms, customer engagement continues to fall short. "
        },
        {
            "id": 70,
            "image": "/images/blog/medical-diagnostic-imaging-analysis-multiple-screens-thumbnail.webp",
            "category": "Salesforce Life Sciences Cloud",
            "industry": " Life Sciences",
            "date": "Jan. 07, 2026",
            "url": "/crm-as-growth-engine-life-sciences/",
            "title": "Life Sciences CRM: Why Sales-Only Systems No Longer Work in Modern Healthcare",
            "alt": "Doctor analyzing patient diagnostics on multiple screens displaying brain scans, skeletal images, and real-time vital signs",
            "description": "For years, most life sciences organizations treated CRM as a sales enablement tool — a place to track accounts, schedule visits, manage samples, and record touchpoints. "
        },
        {
            "id": 69,
            "image": "/images/blog/voygernext/voyager-thumb.webp",
            "category": "Grow with SAP",
            "industry": "Generic",
            "date": "Jan. 06, 2026",
            "url": "/grow-with-sap-ai-ready-cloud-erp/",
            "title": "Grow with SAP: Your Fast-Track Ticket to an AI-First Tomorrow",
            "alt": "Grow with SAP AI-ready cloud ERP for an AI-first business future",
            "description": "According to McKinsey, more than 70 percent of organizations have already experimented with GenAI, and one in three expects AI to reshape core operations within the next three years."
        },
        {
            "id": 68,
            "image": "/images/blog/enterprise-growth-strategy-thumbnail.webp",
            "category": "Rise with SAP",
            "industry": "Generic",
            "date": "Jan. 05, 2026",
            "url": "/rise-with-sap-erp-transformation-strategy/",
            "title": "Why ERP Transformation Challenges Are Forcing Enterprises to Rethink Their Strategy",
            "alt": "Business leader on a path symbolizing enterprise growth and digital transformation",
            "description": "ERP modernization has been on boardroom agendas for years, yet success stories are still far fewer than expected. Leaders know transformation is necessary, but the path often turns bumpy."
        },
          {
            "id": 71,
            "image": "/images/blog/from-project-partner/thumb.webp",
            "category": "SAP Consulting",
            "industry": " Life Sciences",
            "date": "Jan. 02, 2026",
            "url": "/from-project-partner-to-strategic-sap-consulting-ally/",
            "title": "From Project Partner to Strategic Ally: Scaling SAP Consulting Engagements",
            "alt": "Doctor analyzing patient diagnostics on multiple screens displaying brain scans, skeletal images, and real-time vital signs",
            "description": "Enterprise SAP programs rarely end with one deployment. Once the core landscape is live, the real journey begins: expansion across business units. "
        },
        {
            "id": 67,
            "image": "/images/blog/strategic-partnership-digital-connection-thumbnail.webp",
            "category": "SAP Consulting",
            "industry": "Generic",
            "date": "Dec. 29, 2025",
            "url": "/what-makes-sap-consulting-companies-trustworthy/",
            "title": "What Makes SAP Consulting Companies Trustworthy for Enterprise Engagements",
            "alt": "Two people shaking hands with glowing digital lines symbolizing partnership and collaboration.",
            "description": "Trust is the filter that determines who even makes it onto the shortlist. In enterprise SAP programs, credibility is not a soft factor. It directly impacts risk, governance, and long-term value.With this blog, we focus on how enterprises assess trust and credibility in SAP consulting companies during the pre-selection stage, before formal evaluation and contracting begin."
        },
        {
            "id": 66,
            "image": "/images/blog/business-growth-journey-thumbnail.webp",
            "category": "Salesforce Consulting",
            "industry": "Generic",
            "date": "Dec. 23, 2025",
            "url": "/salesforce-consulting-playbook-enterprise-growth/",
            "title": "Salesforce Consulting Playbook: Strategies to Drive Growth and Efficiency",
            "alt": "Abstract blue figure climbing geometric steps symbolizing business growth and strategic progress",
            "description": "Salesforce has established itself as the enterprise CRM of record. But for many companies, it still falls short of becoming a true growth engine. The gap rarely comes down to features. It comes down to strategy."
        },
        {
            "id": 65,
            "image": "/images/blog/salesforce-consulting-cluster-2.2_blog-thumb.webp",
            "category": "Salesforce Consulting",
            "industry": "Generic",
            "date": "Dec. 22, 2025",
            "url": "/salesforce-integration-partners-for-enterprises-to-scale/",
            "title": "Integration Partners for Salesforce: Cutting Complexity, Increasing ROI",
            "alt": "Cloud integration icon on a smartphone representing Salesforce integration and enterprise system connectivity.",
            "description": "Salesforce sits at the center of enterprise digital strategy for a reason. It connects revenue, customer experience, service operations, and data-driven decision-making on a single platform."
        },
        {
            "id": 64,
            "image": "/images/blog/cloud-computing-digital-storage-thumbnail.webp",
            "category": "Salesforce Consulting",
            "industry": "Generic",
            "date": "Dec. 18, 2025",
            "url": "/partner-salesforce-right-way-for-growth/",
            "title": "Partner Salesforce the Right Way: Creating Strategic Relationships That Deliver Measurable Growth",
            "alt": "Hand holding a smartphone with a glowing cloud icon representing cloud computing and data storage",
            "description": "When an enterprise chooses to partner with Salesforce, the goal isn’t just implementation. It’s a long-term transformation. Strong partnerships with the right Salesforce partner companies can simplify complex processes, integrate disconnected systems, and unlock the true potential of the platform across every team."
        },
        {
            "id": 63,
            "image": "/images/blog/electric-vehicle-charging-energy-mobile.webp",
            "category": "Salesforce Automotive Cloud",
            "industry": "Automotive",
            "date": "Dec. 11, 2025",
            "url": "/digital-twin-in-automotive-industry-salesforce-cloud/",
            "title": "Automotive Digital Twin: How OEMs, Dealers, and EV Brands Achieve Success with Salesforce Automotive Cloud",
            "alt": "Electric vehicle charging port with glowing energy streams representing power and clean technology",
            "description": "The automotive industry is undergoing its biggest shift in decades. As vehicles become more connected and software-driven, a company’s success is not dependent only on engineering and manufacturing. The real advantage now lies in how effectively OEMs, suppliers, and mobility providers utilize data."
        },
        {
            "id": 62,
            "image": "/images/blog/digital-data-stream-mobile.webp",
            "category": "Managed Services",
            "industry": "Generic",
            "date": "Dec. 05, 2025",
            "url": "/sap-managed-services-enterprise-ai-strategy/",
            "title": "SAP Managed Services: The Enterprise AI Strategy Behind Always-On SAP Success",
            "alt": "Colorful digital lines and light trails forming a fast-moving futuristic data stream.",
            "description": "The majority of organizations rely on SAP to run finance, supply chain, HR, manufacturing, procurement, and customer operations. But the truth is simple — implementing SAP is only the starting line. The real value lies in keeping systems optimized, innovating continuously, and aligning SAP capabilities with evolving business priorities."
        },
        {
            "id": 61,
            "image": "/images/blog/future-of-digital-healthcare-mobile.webp",
            "category": "MediAina",
            "industry": "Life Sciences",
            "date": "Dec. 04, 2025",
            "url": "/reimagining-clinical-trial-patient-journey/",
            "title": "From Fragmented Care to Intelligent Ecosystems: Reimagining the Patient Journey in Clinical Trials",
            "alt": "People walking in a digital network landscape with a futuristic smart capsule floating above.",
            "description": "Clinical trials are supposed to measure the impact of medicine, yet for many participants, the experience feels more like a marathon of logistics. There are multiple portals, disconnected care teams, repetitive forms, unclear next steps, and little visibility into progress, which makes participation feel like work instead of care."
        },
        {
            "id": 60,
            "image": "/images/blog/patient-consultation-genomics-mobile.webp",
            "category": "MediAina",
            "industry": "Life Sciences",
            "date": "Dec. 03, 2025",
            "url": "/why-patient-drop-out-clinical-trials-and-how-to-prevent-it/",
            "title": "Why Clinical Trial Dropouts Happen — And How Digital Engagement Prevents Them",
            "alt": "Nurse showing medical information to a patient with a headscarf beside a digital DNA graphic.",
            "description": "Every clinical trial begins with optimism. Researchers design protocols with precision, investigators prepare sites, and patients sign up with real hope for better outcomes. But somewhere along the journey, many participants quietly step away."
        },
        {
            id: 59,
            image: "/images/blog/salesforce-managed-services-salesforceagent-plus-feature-thumb.webp",
            category: "Managed Services ",
            industry: "Generic",
            date: "02 Dec. 2025",
            url: '/scale-with-salesforce-managed-services-salesforceagentplus/',
            title: "Salesforce Managed Services: The Secret to Scaling Revenue, Not Just Maintaining CRM",
            alt: "Colorful fiber optic waves representing Salesforce managed services scaling revenue beyond CRM maintenance",
            description: "Most companies invest heavily in Salesforce, yet only a fraction unlock its real business value.",
        },
        {
            "id": 57,
            "image": "/images/blog/digital-data-interface-with-futuristic-touch-interaction-mobile.webp",
            "category": "SAP SuccessFactor",
            "industry": "HRMS",
            "date": "Nov. 27, 2025",
            "url": "/sap-successfactors-services-hr-transformation/",
            "title": "How SAP SuccessFactors Services Leverage Data & AI to Transform Modern HR",
            "alt": "Futuristic holographic data screens with code representing SAP SuccessFactors AI and data transforming modern HR",
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
                    {filteredBlogs.map((blog) => (
                        <div key={blog.id} className="flex flex-col sm:basis-1/4 border border-gray-300 hover:border-white sm:mr-6 mb-4 sm:h-[580px] md:h-full h-full lg:h-[580px] xl:h-[580px] 4xl:h-[650px] group">
                            <div className="h-[260px] 4xl:h-[300px] max-h-[300px]">
                                <Link href={'/insights/blogs' + blog.url}>
                                    <Image
                                        src={blog.image}
                                        alt={blog.alt}
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
                                        <span className='text-[#0092E0]'>{blog.category}
                                        </span>
                                        <span className='text-[#ACACAC]'> | </span>
                                        <span className={`${blog.category.length > 21 && "block mt-1"}`}>{blog.date}</span>
                                    </div>
                                    <Link href={'/insights/blogs' + blog.url}><h4 className="mb-2 md:mb-4 font-semibold line-clamp-3 xl:line-clamp-4 4xl:text-[25px] xl:text-[20px] text-[18px] leading-tight">{blog.title}</h4></Link>
                                </div>
                                <div className="flex flex-col">
                                    <p className='line-clamp-4 md:mb-4 mb-2 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'>{blog.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}