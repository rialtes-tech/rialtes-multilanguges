"use client";
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ContactForm from '../app/components/contactform';
import Seo from './components/Seo';
import Link from 'next/link';
import Head from 'next/head';

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
    setCurrentIndexInsites(index);
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
      knowMore: 'Know More',
      url: 'industry/life-sciences/healthcare-medtech-patient-care'

    },
    {
      id: 2,
      title: 'Real Estate',
      description: 'Helping realtors, property owners, and brokers strengthen relationships and revenue by helping them navigate through client details, properties, and rental agreements with our property management software.',
      knowMore: 'Know More',
      url: 'industry/real-estate-property-management'
    },
    {
      id: 3,
      title: 'Manufacturing',
      description: 'Streamline customer relationships, sales processes, and supply chain management in manufacturing companies. We offer solutions from Salesforce Manufacturing Cloud to SAP Manufacturing Software to help you keep your production lines running smoothly.',
      knowMore: 'Know More',
      url: 'industry/manufacturing-cloud-erp'
    },
    {
      id: 4,
      title: 'Hi-Tech',
      description: 'Our services consulting covers the complete range of technologies and methodologies necessary for manufacturing, integrating, and maintaining complex products across platforms.',
      knowMore: 'Know More',
      url: 'industry/hitech-semiconductor'

    },
    {
      id: 5,
      title: 'Pharma & Biotech',
      description: 'Drive innovation, ensure regulatory compliance, and accelerate time-to-market with our end-to-end digital solutions. We empower pharma and biotech companies with AI-driven platforms, Salesforce Life Sciences Cloud, and SAP S/4HANA to streamline R&D, regulatory, commercial, and supply chain operations.',
      knowMore: 'Know More',
      url: 'industry/life-sciences/pharma-biotech-digital-transformation'

    },
    {
      id: 6,
      title: 'Education',
      description: 'Transform how institutions engage with students, manage enrollment, and personalize learning journeys. From student lifecycle management to alumni relations, our CRM and automation solutions help educational organizations deliver impactful, data-driven education experiences.',
      knowMore: 'Know More',
      url: 'industry/connected-education'

    },
    {
      id: 7,
      title: 'Medical Devices',
      description: 'Simplify compliance, accelerate innovation, and streamline global operations with our tailored solutions for the medical device industry. From SAP S/4HANA and Salesforce Life Sciences Cloud to AI-driven automation, we help MedTech companies manage complex supply chains and enhance patient outcomes with implementation, integration, and support services.',
      knowMore: 'Know More',
      url: 'industry/life-sciences/medical-devices-it-solutions'

    },
    
  ]

  const successStoryData = [
    {
      id: 1,
      imageUrl: '/images/homepage/case study 1_thumb_long.webp',
      title: 'HealthCare',
      description: 'Mulesoft for Salesforce Health Cloud and SAP',
      para: 'Expand',
      url: 'insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap'

    },
    {
      id: 2,
      imageUrl: '/images/homepage/case study 2_thumb_long.webp',
      title: 'Real Estate',
      description: 'RealForce Banking Module - ACH',
      para: 'Expand',
      url: 'insights/case-studies/realForce-banking-module-ach'

    },
    {
      id: 3,
      imageUrl: '/images/homepage/case study 3_thumb_long.webp',
      title: 'Manufacturing',
      description: 'Streamlined DevOps using Copado and Salesforce',
      para: 'Expand',
      url: 'insights/case-studies/streamlined-devops-using-copado-and-salesforce'
    },
    {
      id: 4,
      imageUrl: '/images/homepage/case4.webp',
      title: 'HealthCare',
      description: 'Digitizing patient journey using Salesforce health cloud',
      para: 'Expand',
      url: 'insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud'
    }
  ]

  const insightsdata = [
    {
      id: 1,
      imageUrl: '/images/homepage/Blog 2 Long thumb.webp',
      label: 'Blogs',
      description: 'The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce',
      url: 'insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce/'
    },
    {
      id: 2,
      imageUrl: '/images/homepage/Blog 4 Long thumb.webp',
      label: 'Blogs',
      description: 'Agentforce Testing Center: Redefining AI Testing with Synthetic Data',
      url: 'insights/blogs/agentforce-testing-center-redefining-ai-testing-with-synthetic-data'
    },
    {
      id: 3,
      imageUrl: '/images/homepage/Blog 5 Long thumb.webp',
      label: 'Blogs',
      description: 'How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration',
      url: 'insights/blogs/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration'
    },

    {
      id: 5,
      imageUrl: '/images/blog/blog-9-logn-thumb.webp',
      label: 'Blogs',
      description: 'How SAP SuccessFactors Supports Diversity, Equity, and Inclusion Initiatives',
      url: 'insights/blogs/how-sap-successfactors-supports-diversity-equity-and-inclusion-initiatives'
    },
    {
      id: 6,
      imageUrl: '/images/blog/blog-10-long-thumb.webp',
      label: 'Blogs',
      description: 'Enhancing Compliance: The Importance of Sanctioned Party List Screening in SAP GTS for Third-Party Transactions',
      url: 'insights/blogs/enhancing-compliance-the-importance-of-sanctioned-party-list-screening-in-sap-gts-for-third-party-transactions'
    },
    {
      id: 7,
      imageUrl: '/images/blog/blog-11-long-thumb.webp',
      label: 'Blogs',
      description: 'Agents as Teammates: Revolutionizing Slack Collaboration with Agentforce',
      url: 'insights/blogs/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce'
    }, {
      id: 8,
      imageUrl: '/images/blog/blog-12-long-thumb.webp',
      label: 'Blogs',
      description: 'Agentforce Agents Scales Enterprise Resource Planning Systems with AI',
      url: 'insights/blogs/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai'
    }, {
      id: 9,
      imageUrl: '/images/blog/blog-13-long-thumb.webp',
      label: 'Blogs',
      description: 'How SAP SuccessFactors Enhances Remote Work Management',
      url: 'insights/blogs/how-sap-successfactors-enhances-remote-work-management'
    },



  ];


  const CarouselItem = ({ imageUrl, label, description, alt, url }) => (
    <div className="relative group overflow-hidden w-[95%]">
      <div className='absolute w-full inset-0 bg-black opacity-30 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 group-hover:bg-[#134874]'></div>
      <Image
        loading="lazy"
        className="object-contain w-full h-full transform group-hover:scale-110 group-hover:origin-center transition-transform duration-500"
        height="100"
        width="280"
        alt={alt}
        src={imageUrl}
      />
      <div className="absolute w-full pt-5 pl-5 inset-0 bg-black bg-opacity-30 text-white  group-hover:opacity-100 transition-opacity duration-300">
        <span>{label}</span>
        <p className="absolute mb-5 bottom-10">{description}</p>
        <Link href={'/' + url}>
          <p className="bottom-0 absolute mb-5">Learn More →</p>
        </Link>
      </div>
    </div>
  );
  return (
    <section>
      <Head>
       
        <link rel="icon" href="/images/homepage/Rialtes symbol 1.jpg" />
      </Head>

      <Seo
        title="IT Services and IT Consulting Company | Rialtes"
        description="Unlock success with Rialtes’ IT services and IT consulting. Powered by AI innovation, we drive efficiency, elevate performance, and fuel sustainable growth."
        keywords="home, website, welcome"


      />
      {/* main slider */}
      <section>
        <ResponsiveCarousel
          autoPlay={true}
          infiniteLoop={true}
          interval={2000}
          renderIndicator={renderIndicator}
        >

          <div className="relative">
            <div className='xl:block hidden'>
              <a
                href="/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh"
                style={{ display: 'block' }}
                className="relative block"
              >
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  className="w-full h-[400px] xl:h-full md:h-full bg-fixed cursor-pointer object-left"
                  alt="demo"
                  src="/images/homepage/inauguration-14 2.webp"
                  rel="preload"
                  quality={60}                 
                />
              </a>
            </div>
            <div className='xl:hidden block'>
              <a
                href="/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh"
                style={{ display: 'block' }}
                className="relative block"
              >
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  className="w-full h-[400px] sm:h-[768px] xl:h-full  bg-fixed cursor-pointer object-left "
                  alt="demo"
                  src="/images/homepage/inauguration-15 1.webp"
                  rel="preload"
                  quality={60}     
                />
              </a>
            </div>

            <div
              className="
                  h-full
                 ml-[15px] w-[calc(100%-15px)] mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
                 sm:mx-5 sm:w-[calc(100%-40px)]
                 xs:mx-4 xs:w-[calc(100%-32px)]"
            >
              <div className="absolute xl:top-[20rem] top-20">
                <div className="text-left">
                  <h3 className="text-white xl:text-[50px] font-normal xl:w-[55%]">Rialtes Opens new Sales Office in Himachal Pradesh, India</h3>
                  <a
                    href="/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh"
                    style={{ display: 'block' }}
                    className="relative block"
                  >
                    <p className="text-white xl:text-[30px] xl:mt-32 mt-20 cursor-pointer">
                      Know more
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>








          {/* First Slide */}
          <div className="relative">
            <a
              style={{ display: 'block' }}
              className="relative"
            >
              <div className='xl:block hidden'>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  className="w-full h-[300px] xl:h-full md:h-full bg-fixed cursor-pointer object-left xl:block hidden"
                  alt="demo"
                  src="/images/homepage/automotive.webp"
                  rel="preload"
                  quality={60}     
                />
              </div>
              <div className='xl:hidden block'>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  className="w-full h-[400px]  xl:h-full  bg-fixed cursor-pointer object-left "
                  alt="demo"
                  src="/images/homepage/mobile 1 1.webp"
                  rel="preload"
                  quality={60}     
                />
              </div>
            </a>
          </div>

          {/* Second Slide */}
          <div className="relative">
            <a
              href="/industry/life-sciences/healthcare-medtech-patient-care"
              style={{ display: 'block' }}
              className="relative block"
            >
              <div className='xl:block hidden'>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', objectFit: 'cover' }}
                  priority
                  className="w-full h-[300px] xl:h-full md:h-full object-left"
                  alt="demo"
                  src="/images/homepage/lifescience.webp"
                  rel="preload"
                  quality={60}     
                />
              </div>

              <div className='xl:hidden block'>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', objectFit: 'cover' }}
                  priority
                  className="w-full h-[400px] xl:h-full md:h-full bg-fixed cursor-pointer object-left "
                  alt="demo"
                  src="/images/homepage/mobile 2 1.webp"
                  rel="preload"
                  quality={60}     
                />
              </div>
            </a>
          </div>

          {/* Third Slide */}
          <div className="relative">
            <a
              href="/industry/hitech-semiconductor"
              style={{ display: 'block' }}
              className="relative block"
            >
              <div className='xl:block hidden'>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', objectFit: 'cover' }}
                  priority
                  className="w-full h-[326px] xl:h-full md:h-full object-left"
                  alt="demo"
                  src="/images/homepage/semiconductor 1.webp"
                  rel="preload"
                  quality={60}     
                />
              </div>
              <div className='xl:hidden block'>
                <Image
                  sizes="100vw"
                  priority
                  className="w-full h-[400px] xl:h-full md:h-full bg-fixed cursor-pointer object-left "
                  alt="demo"
                  src="/images/homepage/mobile 3 1.webp"
                  rel="preload"
                  quality={60}     
                   fill


                />
              </div>

            </a>
          </div>
        </ResponsiveCarousel>

      </section>
      {/* success stories section */}
      {/* //show 8 */}
      {/* // 4 cards show 1 dash */}
      <section className='xl:mt-20 mx-6 xl:mx-[280px] md:mx-[100px] md:mr-0 xl:mr-0'>
        <div className='items-center grid xl:grid-cols-3 grid-cols-1'>
          <h2>Success Stories</h2>
          <p className='mt-5 xl:mt-0 md:mt-5 lg:mt-mt-5'>Discover how we’ve harnessed the disruptive power of cutting-edge AI to help companies anticipate and act with insight and speed with IT consulting services.</p>
          <div className='justify-center gap-10 hidden xl:flex'>
            <CustomArrow arrowType="prev" onClick={goToPrevious} />
            <CustomArrow arrowType="next" onClick={goToNext} />
          </div>
        </div>
        <Carousel className='xl:mt-16 mt-5 '
          ref={carouselRef}
          draggable={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          itemClass="carousel-item-padding-40-px xl:block hidden"
          selectedItem={currentIndex}
          onChange={handleChange}

        >
          {successStoryData.map((success) => {
            return (
              <div key={success.id} className='relative group overflow-hidden w-[95%]'>
                <div className='absolute w-full  bg-black  transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 group-hover:bg-[#134874]'></div>
                <Image
                  loading="lazy"
                  height='100'
                  width='280'
                  alt='Success Stories'
                  className='object-contain w-full h-full transform group-hover:scale-110 group-hover:origin-center transition-transform duration-500'
                  src={success?.imageUrl}
                />
                {/* Title with hover effect */}
                <div className="absolute w-full pt-5 pl-5 inset-0 bg-black bg-opacity-30 text-white  group-hover:opacity-100 transition-opacity duration-300">
                  <span> {success.title}</span>
                  <p className="absolute mb-5 bottom-10">{success.description}</p>
                  <Link href={'/' + success.url}>
                    <p className="bottom-0 absolute mb-5">{success.para} →</p>

                  </Link>
                </div>
              </div>
            )
          })}
        </Carousel>
        <div className="dots-container xl:block hidden">
          {successStoryData.map((_, index) => (
            <CustomDot
              key={index}
              active={currentIndex === index}
              index={index}
              handleDotClick={handleDotClick}
            />
          ))}
        </div>
        <div className='xl:hidden  gap-10 grid'>
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
                  <Link href={'/' + success.url}>
                    <p className="bottom-0 absolute mb-5">{success.para} →</p>

                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      {/* shaping our services section */}
      {/* <section>
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
      </section> */}

      {/* industries experties section section*/}
      <section>
        <div className='bg-[#EFEFEF] mt-20 py-10'>
          <div className='grid xl:grid-cols-2 grid-cols-1 xl:ml-[280px] md:mx-[300px]  mx-6 pt-10'>
            <div>
              <h2 className='xl:w-[70%] w-full'>Industry Expertise and Solutions</h2>
            </div>
            <p className='mt-3'>We have domain expertise across various industries, enabling us to offer tailored IT consulting services to meet your specific industry needs. Transform your business with a quantifiable and pre-focussed system.</p>
          </div>
          <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:ml-[230px] md:ml-[100px] px-6 mt-16 sm:px-0 xl:gap-0 gap-10'>
            {industryData.map((industry, index) => {
              const showDivider = [1, 2, 4, 5,7,8].includes(index);
              const hideOnMobile = index >= industryData.length - 3; //
              return (
                <div
                key={industry.id}
                className={`relative ${showDivider ? 'xl:border-l-[3px] xl:h-20' : 'h-full'} ${
                  hideOnMobile ? 'hidden sm:block' : ''
                }`}
              >
                  <div
                    className={`group hover:bg-white transition-all duration-300 xl:h-[300px] relative xl:p-10 md:p-2 p-3`}
                  >
                    <h3 className="font-bold">{industry.title}</h3>
                    <p className="mt-3 text-[15px]">{industry.description}</p>
                    <Link href={'/' + industry.url}>
                      <p className="text-[#0092E0] font-bold mt-5 cursor-pointer">
                        {industry.knowMore}
                        <span className="ml-2 text-[#0092E0] transform translate-x-0 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          &#8594;
                        </span>
                      </p>
                    </Link>
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
                url={item.url}
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
            <Image quality={100} layout="responsive" loading="lazy" width='100' height='100' className='w-full h-full hidden xl:block transition-transform duration-500 transform group-hover:scale-110' alt='Life Section' src='/images/homepage/Life Science.webp' />
          </div>
        </div>
        <div className='bg-[#134874] hidden xl:block absolute p-8 text-white xl:w-[410px] xl:h-[410px] xl:right-[20rem] xl:top-[-3rem] top-[392px]'>
          <h2>Life Science</h2>
          <p className='mt-5'>Rialtes is committed to driving innovation in healthcare technology to empower medical professionals with the tools they need to improve patient care. We have helped Healthcare providers tackle their unique challenges and build a healthier future through Salesforce.</p>
          <Link href='/industry/life-sciences/healthcare-medtech-patient-care'>
            <p className='mt-8 cursor-pointer pb-10'>Learn More →</p>
          </Link>
        </div>
      </section>

      {/* life at rialtes section */}
      <section className='xl:mt-20 xl:mx-[280px] md:mx-[100px] md:mt-20 mt-10  mx-6'>
        <div className='flex xl:gap-16 gap-5 xl:flex-row flex-col'>
          <div className='xl:w-1/2'>
            <h2>Life at Rialtes</h2>
            <p className='mt-5'>Driven by innovation and fueled by human potential, our IT consulting company tackles the digital world’s toughest problems. Together, let’s simplify problems, enable solutions, and empower each other.</p>
          </div>
          <div className='relative group overflow-hidden xl:w-1/2'>
            <Image loading="lazy" height={325} width={1250} alt='Rialtes Life' className='transform transition-transform duration-500 group-hover:scale-110' src='/images/homepage/life2.webp' />
          </div>
        </div>
      </section>
      {/* //form section */}
      <section className='pb-20 mt-20 xl:px-[280px]  md:px-[100px] px-6'>
        <ContactForm className='xl:w-[75%] w-full' title='Ready to take the next step? Let’s kick off your journey to operational excellence' />
      </section>

    </section>

  )
}
export default Home