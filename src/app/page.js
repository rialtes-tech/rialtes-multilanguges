"use client";
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ContactForm from '../app/components/contactform';
import Seo from './components/Seo';

const CustomArrow = ({ onClick, arrowType }) => {
  return (
    <button
      onClick={onClick}
      className={`${arrowType === 'prev' ? 'left-0' : 'right-0'}`}
      style={{ zIndex: 10 }}
    >
      {arrowType === 'prev' ? <Image loading="lazy" className='w-5 h-5' width={100} height={100} src='/images/homepage/left.png' alt='arrowleft' /> : <Image className='w-5 h-5' width={100} height={100} alt='arrowright' src='/images/homepage/right.png' />}
    </button>
  );
};
const CustomDot = ({ active, index, handleDotClick }) => {
  return (
    <button
      onClick={() => handleDotClick(index)}
      className={`xl:w-20 w-10 h-[3px] mx-1 ${active ? 'bg-gray-500' : 'bg-gray-300'}`}
    ></button>
  );
};
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexInsites, setCurrentIndexInsites] = useState(0);

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  const handleDotClick = (index) => {
    if (carouselRef.current && carouselRefInsites.current) {
      carouselRef.current.goToSlide(index);
      carouselRefInsites.current.goToSlide(index)
      setCurrentIndex(index);
      setCurrentIndexInsites(index);
    }
  };
  const carouselRef = useRef(null);
  const carouselRefInsites = useRef(null);


  const goToPrevious = () => {
    if (carouselRef.current && carouselRefInsites.current) {
      const currentIndex = carouselRef.current.state.currentSlide;
      const currentInsites = carouselRefInsites.current.state.currentSlide;
      const prevInsites = currentInsites === 0 ? 4 : currentInsites - 1;
      const prevIndex = currentIndex === 0 ? 4 : currentIndex - 1;
      carouselRef.current.goToSlide(prevIndex);
      carouselRefInsites.current.goToSlide(prevInsites);
    }
  };


  const goToNext = () => {
    if (carouselRef.current && carouselRefInsites.current) {
      const currentIndex = carouselRef.current.state.currentSlide;
      const currentInsites = carouselRefInsites.current.state.currentSlide;
      const nextInsites = currentInsites === 4 ? 0 : currentInsites + 1;
      const nextIndex = currentIndex === 4 ? 0 : currentIndex + 1;
      carouselRef.current.goToSlide(nextIndex);
      carouselRefInsites.current.goToSlide(nextInsites);
    }
  };

  const renderIndicator = (clickHandler, isActive) => {
    return (
      <span
        onClick={clickHandler}
        role="button"
        tabIndex={0}
        style={{
          display: 'inline-block',
          width: '50px',
          height: '3px',
          backgroundColor: isActive ? '#134874' : 'gray',
          margin: '0 5px',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'background-color 0.3s ease'
        }}
      ></span>
    );
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
  }
  const industryData = [
    {
      id: 1,
      title: 'Healthcare',
      description: 'Our Salesforce healthcare CRM integration can help medical service providers seamlessly integrate hospital software, harmonize patient data from various channels, MedTech services, and patient engagement solutions to facilitate exceptional patient care.',
      knowMore: 'Know More'
    },
    {
      id: 2,
      title: 'Real Estate',
      description: 'Helping realtors, property owners, and brokers strengthen relationships and revenue by helping them navigate through client details, properties, and rental agreements with our property management software.',
      knowMore: 'Know More'
    },
    {
      id: 3,
      title: 'Manufacturing',
      description: 'Streamline customer relationships, sales processes, and supply chain management in manufacturing companies. We offer solutions from Salesforce Manufacturing Cloud to SAP Manufacturing Software to help you keep your production lines running smoothly.',
      knowMore: 'Know More'
    },
    {
      id: 4,
      title: 'Finance',
      description: 'From banking payment solutions to financial services automation, our dedicated and knowledgeable team is ready to help you achieve operational excellence and build customer trust while staying compliant with government regulations.',
      knowMore: 'Know More'
    },
    {
      id: 5,
      title: 'Hi-tech',
      description: 'Our services consulting covers the complete range of technologies and methodologies necessary for manufacturing, integrating, and maintaining complex products across platforms.',
      knowMore: 'Know More'
    },
    {
      id: 6,
      title: 'Retail & e-Commerce',
      description: 'We streamline business processes by connecting everyone with the information they need. We offer Salesforce Sales and other solutions for businesses that collect sales, marketing, and customer data and help them improve sales strategies.',
      knowMore: 'Know More'
    },
  ]

  const successStoryData = [
    {
      id: 1,
      imageUrl: '/images/homepage/case1.webp',
      title: 'HealthCare',
      description: 'Real-time patient interaction with mobile app',
      para: 'Expand'
    },
    {
      id: 2,
      imageUrl: '/images/homepage/case2.webp',
      title: 'Real Estate',
      description: 'A Public Housing authority in US',
      para: 'Expand'
    },
    {
      id: 3,
      imageUrl: '/images/homepage/case3.webp',
      title: 'Manufacturing',
      description: 'Digitalize loyalty programs using Salesforce, DocuSign & SAP',
      para: 'Expand'
    },
    {
      id: 4,
      imageUrl: '/images/homepage/case4.webp',
      title: 'Real Estate',
      description: 'RealForce Banking Modul-ACH, ConAM',
      para: 'Expand'
    }
  ]
  const ourServices = [
    {
      id: 1,
      imageUrl: '/images/homepage/AI.png',
      title: 'Artificial Intelligence',
    },
    {
      id: 2,
      imageUrl: '/images/homepage/shap2.png',
      title: 'Salesforce',
    },
    {
      id: 3,
      imageUrl: '/images/homepage/sap.png',
      title: 'SAP',
    }, {
      id: 4,
      imageUrl: '/images/homepage/Yardi.png',
      title: 'Yardi',
    }, {
      id: 5,
      imageUrl: '/images/homepage/cloud.png',
      title: 'Cloud Migration',
    }, {
      id: 6,
      imageUrl: '/images/homepage/dataa.png',
      title: 'Data Analytics',
    }, {
      id: 7,
      imageUrl: '/images/homepage/quolity.png',
      title: 'Quality Management',
    },
    {
      id: 8,
      imageUrl: '/images/homepage/Integration.png',
      title: 'Integration',
    },
  ]
  const insightsdata = [
    {
      id: 1,
      imageUrl: '/images/homepage/Blog1.webp',
      label: 'Blogs',
      description: 'The Data Cloud Trinity: How Unification Insights, and Activation Drive Smarter Business Decisions',
    },
    {
      id: 2,
      imageUrl: '/images/homepage/event-blog.png',
      label: 'Events',
      description: 'How Events Are Shaping The Future of Data Science',
    },
    {
      id: 3,
      imageUrl: '/images/homepage/insites.png',
      label: 'News',
      description: 'Breaking News: Big Data in the News!',
    },
    {
      id: 4,
      imageUrl: '/images/homepage/blog4.png',
      label: 'Case Study',
      description: 'Case Study: Leveraging Data for Business Growth',
    },
  ];


  const CarouselItem = ({ imageUrl, label, description, alt }) => (
    <div className="relative group overflow-hidden w-[95%]">
      <div className='absolute w-full inset-0 bg-black opacity-50 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 group-hover:bg-[#134874]'></div>
      <Image
        loading="lazy"
        className="object-contain w-full h-full transform group-hover:scale-110 group-hover:origin-center transition-transform duration-500"
        height="100"
        width="280"
        alt={alt}
        src={imageUrl}
      />
      <div className="absolute w-full pt-5 pl-5 inset-0 bg-black bg-opacity-50 text-white  group-hover:opacity-100 transition-opacity duration-300">
        <span>{label}</span>
        <p className="absolute mb-5 bottom-10">{description}</p>
        <p className="bottom-0 absolute mb-5">Learn More →</p>
      </div>
    </div>
  );
  return (
    <section>
      <Seo
        title="Home Page - My Rialtes"
        description="Welcome to the Rialtes"
        keywords="home, website, welcome"
      />
      {/* main slider */}
      <section>
        <ResponsiveCarousel autoPlay={true} infinite={true} 
          autoPlaySpeed={3000} renderIndicator={renderIndicator}>
          <div className='relative'>
            <Image width={0}
              height={0}
              sizes="100vw"

              style={{
                width: "100%",
                objectFit: "cover",

              }}
              priority className='w-full h-[300px] xl:h-full md:h-full bg-fixed' alt='demo' src='/images/homepage/Asset1.webp' />
            <div className='absolute text-white top-1/3 xl:left-[280px] left-[30px] md:left-[100px] text-left'>
              <div className='xl:text-5xl text-xl'>AI-Powered Insights for</div>
              <div className='xl:left-20 absolute xl:text-2xl text-lg'>Smarter Customer Engagement</div>

            </div>
            <h4 className='bottom-[15%] absolute text-white xl:left-[280px] left-[30px] text-left md:left-[100px]'>Know More</h4>

          </div>
          <div className='relative'>
            <Image width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              priority className='w-full h-[300px] xl:h-full md:h-full' alt='demo' src='/images/homepage/Asset2.webp' />

            <div className='absolute text-black top-1/3 xl:left-[280px] left-[30px] md:left-[100px] text-left'>
              <div className='xl:text-5xl text-xl'>Your Complete Path to</div>
              <div className='xl:left-20 absolute xl:text-2xl text-lg'>Scalable and Intelligent ERP</div>

            </div>
            <h4 className='bottom-[15%] absolute text-black xl:left-[280px] left-[30px] text-left md:left-[100px]'>Know More</h4>
          </div>
          <div className='relative'>
            <Image width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              priority className='w-full h-[300px] xl:h-full md:h-full' alt='demo' src='/images/homepage/Asset3.webp' />

            <div className='absolute text-white top-1/3 xl:left-[280px] left-[30px] md:left-[100px] text-left'>
              <div className='xl:text-5xl text-xl'>Streamline HR processes</div>
              <div className='xl:left-20 absolute xl:text-2xl text-lg'>for the Modern Workspace</div>

            </div>
            <h4 className='bottom-[15%] absolute text-white xl:left-[280px] left-[30px] text-left md:left-[100px]'>Know More</h4>

          </div>
        </ResponsiveCarousel>
      </section>
      {/* success stories section */}
      <section className='xl:mt-20 mx-6 xl:mx-[280px] md:mx-[100px] md:mr-0 xl:mr-0'>
        <div className='items-center grid xl:grid-cols-3 grid-cols-1'>
          <h2>Success Stories</h2>
          <p className='mt-5 xl:mt-0 md:mt-5 lg:mt-mt-5'>Discover how we’ve harnessed the disruptive power of cutting-edge AI to help companies anticipate and act with insight and speed with IT consulting services.</p>
          <div className='justify-center gap-10 hidden xl:flex'>
            <CustomArrow arrowType="prev" onClick={goToPrevious} />
            <CustomArrow arrowType="next" onClick={goToNext} />
          </div>
        </div>
        <Carousel className='xl:mt-16 mt-5'
          ref={carouselRef}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          itemClass="carousel-item-padding-40-px"
          selectedItem={currentIndex}
          onChange={handleChange}

        >
          {successStoryData.map((success) => {
            return (
              <div key={success.id} className='relative group overflow-hidden w-[95%]'>
                <div className='absolute w-full inset-0 bg-black opacity-50 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 group-hover:bg-[#134874]'></div>
                <Image
                  loading="lazy"
                  height='100'
                  width='280'
                  alt='Success Stories'
                  className='object-contain w-full h-full transform group-hover:scale-110 group-hover:origin-center transition-transform duration-500'
                  src={success?.imageUrl}
                />
                {/* Title with hover effect */}
                <div className="absolute w-full pt-5 pl-5 inset-0 bg-black bg-opacity-50 text-white  group-hover:opacity-100 transition-opacity duration-300">
                  <span> {success.title}</span>
                  <p className="absolute mb-5 bottom-10">{success.description}</p>
                  <p className="bottom-0 absolute mb-5">{success.para} →</p>
                </div>
              </div>
            )
          })}
        </Carousel>
        <div className="dots-container">
          {successStoryData.map((_, index) => (
            <CustomDot
              key={index}
              active={currentIndex === index}
              index={index}
              handleDotClick={handleDotClick}
            />
          ))}
        </div>
      </section>
      {/* shaping our services section */}
      <section>
        <div className='flex  mx-6 xl:mx-[280px] md:mx-[100px]  xl:mr-[400px] mt-20 '>
          <div className=''>
            <h2 className='xl:w-[75%] w-full'>Shaping Tomorrow with Our Services</h2>
          </div>
          <p className='xl:col-span-1 mt-5 xl:mt-0 md:mt-5 lg:mt-mt-5 w-[40%]'>Rialtes partnered with the most innovative enterprise software companies to provide you with tailored data-driven solutions that simplify, enable, and empower you to solve your biggest business challenges.</p>
        </div>
        <div className='grid gap-5 xl:ml-[280px] md:ml-[100px]  mx-6 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10'>
          {ourServices.map((service) => {
            return (
              <div key={service.id} className='relative group overflow-hidden'>
                <Image loading="lazy" height='100' width='280' alt='Services' src={service.imageUrl} className='transform transition-transform duration-500 group-hover:scale-110 w-full' />
                <h4 className='absolute top-0 pt-5 pl-5 text-white opacity-80'>{service.title}</h4>
              </div>
            )
          })}
        </div>
      </section>

      {/* industries experties section section*/}
      <section>
        <div className='bg-[#EFEFEF] mt-20 xl:pb-28'>
          <div className='grid xl:grid-cols-2 grid-cols-1 xl:ml-[280px] md:mx-[300px]  mx-6 pt-10'>
            <div>
            <h2 className='xl:w-[70%] w-full'>Industry Expertise and Solutions</h2>
            </div>
            <p>We have domain expertise across various industries, enabling us to offer tailored IT consulting services to meet your specific industry needs. Transform your business with a quantifiable and pre-focussed system.</p>
          </div>
          <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:ml-[230px] md:ml-[100px] px-6 mt-16 sm:px-0'>
            {industryData.map((industry, index) => {
              const showDivider = [1, 2, 4, 5].includes(index);
              return (
                <div key={industry.id} className={`relative ${showDivider ? 'xl:border-l-[3px] xl:h-20' : 'h-full'}`}>
                  <div
                    className={`group hover:bg-white transition-all duration-300 h-[400px] relative xl:p-10 md:p-2 p-3`}
                  >
                    <h3 className="font-bold">{industry.title}</h3>
                    <p className="mt-3 text-[15px]">{industry.description}</p>
                    <p className="text-[#0092E0] font-bold mt-5 cursor-pointer">
                      {industry.knowMore}
                      <span className="ml-2 text-[#0092E0] transform translate-x-0 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        &#8594;
                      </span>
                    </p>
                  </div>
                </div>

              )
            })}
          </div>
        </div>
      </section>
      <section className='mx-6 xl:ml-[280px] md:ml-[100px]  xl:mr-0 mt-20'>
        <div className='flex justify-between items-center'>
          <h2>Insights</h2>
          <div className='flex justify-center gap-5 xl:pr-16 pr-10'>
            <CustomArrow arrowType="prev" onClick={goToPrevious} />
            <CustomArrow arrowType="next" onClick={goToNext} />
          </div>
        </div>
        <Carousel
          swipeable={true}
          draggable={false}
          ref={carouselRefInsites}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          itemClass="carousel-item-padding-40-px "
          className='mt-5 gap-5 grid xl:grid-cols-3 grid-cols-1'
          selectedItem={currentIndexInsites}
          onChange={handleChange}
        >
          {insightsdata.map((item, index) => (
            <div key={index}>
              <CarouselItem
                imageUrl={item.imageUrl}
                label={item.label}
                description={item.description}
                alt={`Insites${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
        <div className="dots-container">
          {successStoryData.map((_, index) => (
            <CustomDot
              key={index}
              active={currentIndexInsites === index}
              index={index}
              handleDotClick={handleDotClick}
            />
          ))}
        </div>
      </section>

      {/*life science section */}
      <section className='xl:mt-40 mt-5 relative'>
        <div className='group overflow-hidden'>
          <div>
            <Image quality={100} layout="responsive" loading="lazy" width='100' height='100' className='w-full h-full hidden xl:block transition-transform duration-500 transform group-hover:scale-110' alt='Life Section' src='/images/homepage/lifesci.png' />
          </div>
        </div>
        <div className='bg-[#134874] hidden xl:block absolute p-8 text-white xl:w-[410px] xl:h-[410px] xl:right-[20rem] xl:top-[-3rem] top-[392px]'>
          <h2>Life Science</h2>
          <p className='mt-5'>Rialtes is committed to driving innovation in healthcare technology to empower medical professionals with the tools they need to improve patient care. We have helped Healthcare providers tackle their unique challenges and build a healthier future through Salesforce.</p>
          <p className='mt-8 cursor-pointer pb-10'>Learn More →</p>
        </div>
      </section>

      {/* life at rialtes section */}
      <section className='xl:mt-20 xl:mx-[280px] md:mx-[100px] md:mt-20 mt-10  mx-6'>
        <div className='flex gap-16 xl:flex-row flex-col'>
          <div className='xl:w-1/2'>
            <h2>Life at Rialtes</h2>
            <p className='mt-5'>Driven by innovation and fueled by human potential, our IT consulting company tackles the digital world’s toughest problems. Together, let’s simplify problems, enable solutions, and empower each other.</p>
          </div>
          <div className='relative group overflow-hidden xl:w-1/2'>
            <Image loading="lazy" height={325} width={1250} alt='Rialtes Life' className='transform transition-transform duration-500 group-hover:scale-110' src='/images/homepage/lifeat.png' />
          </div>
        </div>
      </section>
      {/* //form section */}
      <section className='pb-20 mt-20 xl:px-[280px]  md:px-[100px] px-6'>
        <ContactForm className='xl:w-[75%] w-full' title='Ready to take the next step? Let’s kick off your journey to operational excellence'/>
      </section>

    </section>

  )
}
export default Home