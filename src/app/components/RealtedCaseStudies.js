'use client'
import Image from "next/image";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Link from "next/link";

export default function page({ url, currTopic }) {
    const latestCaseStudy = [
        {
            id: 15,
            image: "/images/case-studies/Small thumb.webp",
            industry: "Education",
            date: "21 August 2025",
            url: "/insights/case-studies/transforming-student-success-with-salesforce-education-cloud-and-eduplus/",
            title: "Transforming Student Success with Salesforce Education Cloud and Edu+",
            description: "A leading private university in North America with over 25,000 students and multiple academic programs across undergraduate, graduate, and continuing education divisions."

        },
        {
            id: 14,
            image: "/images/case-studies/AutoSense Warranty Management Modules_Case study feature thumb.webp",
            industry: "Automotive",
            date: "30 June 2025",
            url: "/insights/case-studies/leading-automotive-manufacturer-achieved-35percent-higher-customer-satisfaction-score-with-autosense/",
            title: "Leading Automotive Manufacturer Achieved 35% Higher Customer Satisfaction Score with AutoSense",
            description: "A prominent global automotive car manufacturer, known for its innovation and high-performance vehicles, was facing challenges with its legacy warranty management system."
        },
        {
            id: 13,
            image: "/images/case-studies/Adaptis_featured CS.webp",
            industry: "Manufacturing",
            date: "10 June 2025",
            url: "/insights/case-studies/warranty-claim-submission-using-experience-cloud/",
            title: "40% Enhanced Adoption of Warranty Application Using Salesforce Experience Cloud Capability",
            description: "Know how Rialtes used Salesforce Experience Cloud to streamline warranty claims and improve customer satisfaction for a roofing manufacturer.",

        },
        {
            id: 12,
            image: "/images/case-studies/revolutionary-filter.webp",
            industry: "Manufacturing",
            date: "03 June 2025",
            url: "/insights/case-studies/revolutionizing-dealer-management-for-a-leading-automotive-manufacturer-with-autosense/",
            title: "Revving Up Dealer Management with AutoSense by Rialtes",
            description: "A renowned global automotive manufacturer, recognized for its cutting-edge vehicles, faced significant challenges with their outdated dealer portal."
        },
        {
            id: 11,
            image: "/images/case-studies/adaptis-for-carousel.webp",
            industry: "Manufacturing",
            date: "30 May 2025",
            url: "/insights/case-studies/warranty-claim-submission-mobile-i-pad-using-experience-cloud/",
            title: "Claim in 4 Minutes: Rialtes Builds Mobile-First Portal to Transform Claims Experience",
            description: "A leading manufacturer of high-quality roofing solutions designed to protect what matters most.Specializing in durable and innovative products for residential"
        },
        {
            id: 1,
            image: "/images/case-studies/fiory-carosel.webp",
            industry: "Manufacturing",
            date: "28 May 2025",
            url: "/insights/case-studies/empowering-a-leading-roofing-manufacturer-with-self-service-order-prioritization-using-sap-fiori/",
            title: "150 Orders a Day, Zero Manual Work: The Fiori-Powered Self-Service Order Prioritization",
            description: "Despite the client's significant technological investments in manufacturing, their order management process relied heavily on manual intervention. Customers who wanted to prioritize certain sales orders had to call the sales team and share their list of urgent orders.",
        },
        {
            id: 2,
            image: "/images/case-studies/carosel.webp",
            industry: "Manufacturing",
            date: "26 Mar 2025",
            url: "/insights/case-studies/optimizing-sales-processes-with-salesforce-sales-cloud-for-a-manufacturing-company/",
            title: "Streamlining Sales with Salesforce Sales Cloud for Manufacturing",
            description: "The company is a leading manufacturer specializing in customized water treatment equipment. Each product is uniquely designed based on specific customer requirements, meaning no two products are alike. ",
        },
        {

            id: 3,
            image: "/images/case-studies/case study 3_thumb_n.webp",
            industry: "Manufacturing",
            date: "08 Jan 2025",
            url: "/insights/case-studies/streamlined-devops-using-copado-and-salesforce/",
            title: "DevOps Transformation using Copado and Salesforce",
            description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
        },
        {
            id: 4,
            image: "/images/case-studies/case-study-2_thumb_n.webp",
            industry: "Real Estate",
            date: "22 Dec 2024",
            url: "/insights/case-studies/realForce-banking-module-ach/",
            title: "Automating ACH and Journal Entries with Our Exelona Banking Module",
            description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
        },
        {
            id: 5,
            image: "/images/case-studies/case study 1_thumb_n.webp",
            industry: "Healthcare",
            date: "17 Nov 2024",
            url: "/insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap/",
            title: "Automating Order Processing in Healthcare using MuleSoft",
            description: "A global medical technology company that develops and manufactures innovative products",
        },
        {
            id: 6,
            image: "/images/case-studies/case-study-4_thumb.webp",
            industry: "Manufacturing",
            date: "14 Oct 2024",
            url: "/insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud/",
            title: "Transforming Omnichannel Case Management Using Salesforce Service Cloud",
            description: "A leading provider of high-performance analog semiconductors for wireless and wired connectivity.",
        },
        {
            id: 7,
            image: "/images/case-studies/case-study-5_thumb.webp",
            industry: "Public Sector",
            date: "27 Sept 2024",
            url: "/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams-journey-with-largest-pha-in-north-america/",
            title: "Trusted YARDI Partner for North America’s Largest PHA",
            description: "A Public housing authority responsible for managing affordable housing programs across multiple counties in their zone.",
        },
        {
            id: 8,
            image: "/images/case-studies/case-study-6_thumb.webp",
            industry: "Real Estate",
            date: "04 Sept 2024",
            url: "/insights/case-studies/yardi-managed-services/",
            title: "Reduced Downtime for a Multifamily Real Estate Firm Using Yardi Managed Services",
            description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
        },
        {
            id: 9,
            image: "/images/case-studies/case-study-7_thumb.webp",
            industry: "Healthcare",
            date: "16 Aug 2024",
            url: "/insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud/",
            title: "Digitizing the Patient Journey Using Salesforce Health Cloud",
            description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
        },
        {
            id: 10,
            image: "/images/case-studies/case-study-8_thumb.webp",
            industry: "Healthcare",
            date: "02 Aug 2024",
            url: "/insights/case-studies/salesforce-health-cloud-prior-authorization/",
            title: "Digitizing Prior Authorization for Better Patient Outcomes",
            description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
        },
    ];

    const filteredCases = latestCaseStudy.filter((elem) => {
        const caseIndustry = elem.industry;
        const caseSlug = elem.url.split("/").pop();
        return caseSlug !== url && caseIndustry == currTopic;
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

            <div className="flex carousel-button-group absolute max-[415px]:pt-[50px] top-0 xl:right-32 sm:right-6 max-sm:right-0 md:mt-4">
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
            active,
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
                <div className="flex flex-col justify-between">
                    <h2 className="mb-[43px] leading-tight 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px]"> Related Case Studies</h2>
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
                    containerClass="carousel-container max-[415px]:pt-[40px]"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style !justify-start flex-wrap"
                    itemClass="carousel-item-padding-40-px"
                    partialVisible={true}
                    arrows={false}
                    renderButtonGroupOutside={true}
                    customButtonGroup={filteredCases.length > 3 && <ButtonGroup />}
                    renderDotsOutside={true}
                    customDot={<CustomDot />}
                >
                    {filteredCases.slice(0, 7).map((slide) => (
                        <div
                            key={slide.id}
                            className="flex flex-col sm:basis-1/4 border border-[#707070] sm:mr-6 mb-4 max-[415px]:h-[460px] h-[520px] sm:h-[500px] md:h-[520px] lg:h-[520px] xl:h-[500px] 3xl:h-[550px] 4xl:h-[600px] group">

                            <div className="max-h-[300px]">
                                <Link href={slide.url}>
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
                                    <div className=" leading-tight text-[16px] 4xl:text-[17px]"><span className="text-[#0092E0]">{slide.industry}</span> | {slide.date}</div>
                                    <Link href={slide.url}><h5 className="my-3 sm:line-clamp-4 line-clamp-3 font-semibold leading-tight 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{slide.title}</h5></Link>
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