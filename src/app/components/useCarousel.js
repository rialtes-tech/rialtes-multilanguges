"use client";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

export default function servicesInsightsCarousel() {
  const slides = [
    { id: 1, category: "Healthcare", description: "Our Salesforce healthcare CRM can help medical service providers seamlessly integrate hospital software, harmonize patient data from various channels, MedTech services, and patient engagement solutions to facilitate exceptional patient care." },
    { id: 2, category: "Real Estate", description: "Helping realtors, property owners, and brokers strengthen relationships and revenue by helping them navigate through client details, properties, and rental agreements with our property management software." },
    { id: 3, category: "Manufacturing", description: "Streamline customer relationships, sales processes, and supply chain management in manufacturing companies with Salesforce. We offer solutions from Salesforce Manufacturing Cloud to SAP Manufacturing Software to help you keep your production lines running smoothly." },
    { id: 4, category: "Hi-tech", description: "Our Salesforce consulting services cover the complete range of technologies and methodologies necessary for creating, integrating, and maintaining Salesforce product ecosystems across platforms." },
    { id: 5, category: "Finance", description: "From banking payment solutions to financial services automation, our dedicated team helps you achieve operational excellence and build customer trust." },
    { id: 6, category: "Public Sector", description: "For critical public sector projects, we deliver the finest in private sector technology—from AI and automation to cloud solutions. With proven methodologies, trusted expertise, and cutting-edge software, we're shaping the future of the public sector" },
  ];

  // Limit to only 6 items
  const limitedSlides = [
    // First slide: Healthcare, Real Estate, Manufacturing, Hi-tech
    [slides[0], slides[1], slides[2], slides[3]],
    
    // Second slide: Manufacturing, Hi-tech, Finance, Public Sector
    [slides[2], slides[3], slides[4], slides[5]],
  ];
  // Adjust the responsive settings for showing 4 items on the first slide, 2 on the second
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,  // Show 4 items per slide for desktop
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 575 },
      items: 2,  // Show 2 items per slide for tablets
      centerMode: true,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,  // Show 1 item per slide for mobile
      centerMode: true,
    },
  };

  const ButtonGroup = ({ next, previous, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group absolute top-0 lg:right-32 right-4 md:mt-4">
        <button className={currentSlide === 0 ? 'disable bg-white p-2 mr-2 group transition-all duration-300' : 'bg-white p-2 mr-2 group transition-all duration-300'} onClick={() => previous()}>
          <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#707070" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#C3C3C3]">
            <path d="M3 7.5L11 0V15L3 7.5Z" fill="none" className="transition-all duration-300 group-hover:fill-[#C3C3C3] hover:fill-[#C3C3C3]" />
          </svg>
        </button>
        <button className="bg-white p-2 group transition-all duration-300" onClick={() => next()}>
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
      <button
        className={`w-3 h-1 md:px-8 px-4  mr-3 mb-4 ${active ? "bg-[#134874]" : "bg-[#D1D1D1]"}`}
        onClick={() => onClick()}
      />
    );
  };

  return (
    <section className="relative pb-8 bg-white">
      <div>
        <div className="flex flex-row justify-between md:mr-24 mr-0 pb-5">
          <div>
            <h2 className="text-black mb-6">Different industries, different mindsets</h2>
            <p className="w-[60%]">Your business success is influenced by your people. Transform your business with a quantifiable and process-focused system.</p>
          </div>
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
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`flex md:flex-row flex-col sm:basis-1/4 border border-[#707070] sm:mr-4 mb-4 relative group md:min-h-[450px] min-h-[350px]`}
            >
              <div className="min-h-[350px] min-w-full relative">
                <div className="absolute inset-0 p-6 my-4">
                  <div className=" mt-3 font-bold text-[18px]">{slide.category}</div>
                  <p className="mt-3">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
