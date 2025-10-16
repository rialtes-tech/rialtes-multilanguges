'use client'
import Image from "next/image";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Link from "next/link";

export default function page({ url }) {
    const latestBlogs = [
        {
            id: 44,
            image: "/images/blog/Salesforce Consulting Cluster 1.1_Blog feature thumb.webp",
            category: "Salesforce",
            industry: "Generic",
            date: "Oct. 10, 2025",
            url: "insights/blogs/how-top-salesforce-partners-help-enterprises-thrive-and-innovate/",
            title: "How Top Salesforce Partners Help Enterprises Thrive and Innovate",
            description: "Salesforce has become the foundation for modern enterprise CRM solutions, helping organizations unify data, streamline processes, and deliver personalized customer experiences. "
        },
        {
            id: 43,
            image: "/images/blog/patient-experience-platform-mediAIna-transforming-long-term-care-mobile.webp",
            category: "MediAIna",
            industry: "Generic",
            date: "Oct. 07, 2025",
            url: 'insights/blogs/patient-experience-platform-transforming-long-term-care/',
            title: "How a Patient Experience Platform Transforms Care from Diagnosis to Long-Term Management",
            description: "Providing healthcare has always been about more than just diagnosis. For patients, the real journey begins after they receive a diagnosis, navigating treatment options, managing chronic conditions, and learning how to live with ongoing care needs.",
        },
        {
            id: 46,
            image: "/images/blog/salesforce-consulting-cluster-feature-thumb.webp",
            category: "Salesforce",
            industry: "Generic",
            date: "Oct. 06, 2025",
            url: 'insights/blogs/salesforce-development-services-to-boost-crm-efficiency/',
            title: "Boost Your CRM Efficiency with Tailored Salesforce Development Services",
            description: "Customer Relationship Management (CRM) is the beating heart of modern enterprises. It drives how sales teams close deals, how service teams respond to customers, and how marketing delivers personalized campaigns.",
        },
        {
            id: 42,
            image: "/images/blog/digital-patient-journeys-mobile.webp",
            category: "MediAIna",
            industry: "Generic",
            date: "Sep. 30, 2025",
            url: 'insights/blogs/digital-patient-journeys-ai-healthcare-life-sciences/',
            title: "The Future of Digital Patient Journeys: How AI is Reshaping Life Sciences",
            description: "The healthcare industry is standing at a turning point. Patients no longer want fragmented experiences, waiting weeks for appointments, repeating their history at every touchpoint, or dealing with disconnected portals.",
        },
        {
            id: 45,
            image: "/images/blog/salesforce-implementation-partners-strategies-mobile.webp",
            category: "Salesforce",
            industry: "Generic",
            date: "Sep. 29, 2025",
            url: 'insights/blogs/salesforce-implementation-partner-strategies-reduce-risk-maximize-roi/',
            title: "Seamless Salesforce Implementation: Partner Strategies That Reduce Risk & Maximize ROI",
            description: "Salesforce is the world’s leading CRM platform, powering enterprises across industries to better manage customers, data, and processes.",
        },
        {
            id: 41,
            image: "/images/blog/connected-care-ecosystem-mobile.webp",
            category: "MediAIna",
            industry: "Generic",
            date: "Sep. 18, 2025",
            url: 'insights/blogs/connected-care-ecosystem-pharma-medtech/',
            title: "Why Connected Care Ecosystems Are the Next Big Bet for Pharma & MedTech",
            description: "The life sciences industry is at an inflection point. Pharma and MedTech organizations are no longer judged only by how well they innovate in labs or build medical devices.",
        },
        {
            id: 40,
            image: "/images/blog/ai-agents-in-manufacturing-mobile.webp",
            category: "AI",
            industry: "Generic",
            date: "Sep. 17, 2025",
            url: "insights/blogs/implementing-ai-agents-in-manufacturing-operations/",
            title: "5 Signs You’re Ready to Implement AI Agents in Your Manufacturing Operations",
            description: "Today, manufacturers are faced with a choice: continue adding incremental automation to existing systems or make a significant leap into AI-driven operations that are capable of learning, adapting, and taking action.",
        },
        {
            id: 39,
            image: "/images/blog/sap-industry-mobile-banner.webp",
            category: "SAP",
            industry: "Generic",
            date: "Sep. 16, 2025",
            url: "insights/blogs/sap-build-for-manufacturing-4-0/",
            title: "Accelerating Industry 4.0 with SAP Build: Low-Code Tools for Smarter Manufacturing",
            description: "Industry 4.0 has transformed factories into connected ecosystems where machines, people, and processes work in sync.",
        },
        {
            id: 38,
            image: "/images/blog/agentforce-ai-erp-mobile.webp",
            category: "Agentforce",
            industry: "Generic",
            date: "Sep. 15, 2025",
            url: "insights/blogs/how-agentforce-ai-transforms-erp-systems/",
            title: "How Agentforce AI Transforms ERP Systems: Automation, Predictive Insights, and Scalability",
            description: "Enterprise Resource Planning (ERP) systems are the backbone of many organizations, managing critical functions like finance, procurement, manufacturing, and supply chain operations.",
        },
        {
            id: 37,
            image: "/images/blog/data-cloud-ecom-mobile-banner.webp",
            category: "Artificial Intelligence",
            industry: "Generic",
            date: "Sep. 12, 2025",
            url: "insights/blogs/ecommerce-in-salesforce-data-cloud-smarter-cx-driving-loyalty/",
            title: "Predictive Ecommerce in Salesforce: How Data Cloud Shapes Smarter Customer Experiences",
            description: "Predictive analytics has always been crucial in helping businesses deliver personalized experiences.Salesforce Data Cloud empowers companies to leverage predictive analytics and data-driven insights to craft transformative e-commerce strategies.",
        },
        {
            id: 36,
            image: "/images/blog/ai-that-listens-mob-banner.webp",
            category: "Artificial Intelligence",
            industry: "Generic",
            date: "Sep. 11, 2025",
            url: "insights/blogs/how-large-language-models-improve-customer-experience/",
            title: "AI That Listens, Learns, and Delivers: How Large Language Models Are Transforming Customer Experience",
            description: "Great customer experience begins with great listening. But we are not just talking about hearing the words; it’s about understanding intent, emotion, context, and history.",
        },
        {
            id: 35,
            image: "/images/blog/ai-in-patient-mobile-banner.webp",
            category: "Artificial Intelligence",
            industry: "Generic",
            date: "Sep. 09, 2025",
            url: "insights/blogs/ai-patient-engagement-medtech-remote-care/",
            title: "AI in Patient Engagement: How AI Agents Support MedTech in Remote Monitoring",
            description: "Early detection of health deterioration is vital for patients with chronic conditions or those recovering from surgery.",
        },
        {
            id: 34,
            image: "/images/blog/industry4-mobile-banner.webp",
            category: "Agentforce",
            industry: "Generic",
            date: "Sep. 08, 2025",
            url: "insights/blogs/how-agentforce-ai-predicts-prevents-downtime-in-manufacturing/",
            title: "How Agentforce AI Predicts and Prevents Downtime in Industry 4.0 Manufacturing",
            description: "The promise of Industry 4.0 has been laid out: factories that can think, adapt, and optimize in real time.",
        },
        {
            id: 33,
            image: "/images/blog/first-ai-agent-mob-banner.webp",
            category: "Artificial Intelligence",
            industry: "Generic",
            date: "Sep. 02, 2025",
            url: "insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce/",
            title: "Build and Deploy Your First AI Agent Using Agentforce",
            description: "By 2028, 33% of enterprise software apps will utilize agentic AI. The transition from Predictive to Generative AI has accelerated, allowing businesses to move beyond simple forecasting to defining optimal actions. Despite ethical concerns, the value of training AI for growth is clear. Teaching AI to understand human language enhances its ability to respond and perform useful tasks.",
        },
        {
            id: 32,
            image: "/images/blog/byond-robotics-mobile-banner.webp",
            category: "Artificial Intelligence",
            industry: "Generic",
            date: "Sep. 01, 2025",
            url: "insights/blogs/why-ai-agents-are-the-future-of-smart-manufacturing/",
            title: "Beyond Automation: Why AI Agents Power Smart Manufacturing",
            description: "Agentforce brings in autonomous agents that close the gap between production and experience. That means fewer silos, faster decisions, and smarter systems.",
        },
        {
            id: 30,
            image: "/images/blog/sap-cpi-feature-thumb.webp",
            category: "SAP",
            industry: "Generic",
            date: "Aug. 26, 2025",
            url: "insights/blogs/sap-pi-po-to-cpi-migration-complete-guide/",
            title: "Migrating from SAP PI/PO to SAP BTP Integration Suite (CPI)",
            description: "Enterprises can’t afford disconnected systems anymore; integration is the backbone of true digital transformation.For years, SAP Process Integration (PI) and Process Orchestration (PO) handled this role, connecting SAP and non-SAP landscapes.",
        },
    ];

    // returning all blogs except current page url
    const filteredBlogs = latestBlogs.filter((elem) => {
        const blogSlug = elem.url.split("/").pop();
        return blogSlug !== url;
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

    return (
        <section className="relative pb-8 lg:pb-4">
            <div className="mb-[36px] mx-auto">
                <div className="flex flex-row justify-between md:mr-24 mr-0">
                    <h2 className="mb-[43px] leading-tight 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px]"> Latest Blogs</h2>
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
                    {filteredBlogs.slice(0, 9).map((slide) => (
                        <div
                            key={slide.id}
                            className="flex flex-col sm:basis-1/4 border border-[#707070] sm:mr-6 mb-4 sm:h-[580px] md:h-full h-full lg:h-[600px] group"
                        >

                            <div className="max-h-[300px]">
                                <Link href={'/' + slide.url}>
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
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
                                    <Link href={'/' + slide.url}><h5 className="my-3 sm:line-clamp-4 line-clamp-3 font-semibold leading-tight 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{slide.title}</h5></Link>
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