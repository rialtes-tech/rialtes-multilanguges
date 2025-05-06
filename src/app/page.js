// "use client";
// import Image from 'next/image';
// import React, { useRef, useState } from 'react';
// import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import ContactForm from './components/contactform';
// import Seo from './components/Seo';
// import Link from 'next/link';
// import Head from 'next/head';

// const CustomArrow = ({ onClick, arrowType }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`${arrowType === 'prev' ? 'left-0' : 'right-0'}`}
//       style={{ zIndex: 10 }}
//     >
//       {arrowType === 'prev' ? <Image loading="lazy" className='w-5 h-5' width={100} height={100} src='/images/homepage/left.png' alt='arrowleft' /> : <Image className='w-5 h-5' width={100} height={100} alt='arrowright' src='/images/homepage/right.png' />}
//     </button>
//   );
// };
// const CustomDot = ({ active, index, handleDotClick }) => {
//   return (
//     <button
//       onClick={() => handleDotClick(index)}
//       className={`xl:w-20 w-10 h-[3px] mx-1 ${active ? 'bg-gray-500' : 'bg-gray-300'}`}
//     ></button>
//   );
// };
// const Home = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentIndexInsites, setCurrentIndexInsites] = useState(0);

//   const handleChange = (index) => {
//     setCurrentIndexInsites(index);
//   };

//   const handleDotClick = (index) => {
//     if (carouselRef.current && carouselRefInsites.current) {
//       carouselRef.current.goToSlide(index);
//       carouselRefInsites.current.goToSlide(index)
//       setCurrentIndex(index);
//       setCurrentIndexInsites(index);
//     }
//   };
//   const carouselRef = useRef(null);
//   const carouselRefInsites = useRef(null);


//   const goToPrevious = () => {
//     if (carouselRef.current && carouselRefInsites.current) {
//       const currentIndex = carouselRef.current.state.currentSlide;
//       const currentInsites = carouselRefInsites.current.state.currentSlide;
//       const prevInsites = currentInsites === 0 ? 4 : currentInsites - 1;
//       const prevIndex = currentIndex === 0 ? 4 : currentIndex - 1;
//       carouselRef.current.goToSlide(prevIndex);
//       carouselRefInsites.current.goToSlide(prevInsites);
//     }
//   };


//   const goToNext = () => {
//     if (carouselRef.current && carouselRefInsites.current) {
//       const currentIndex = carouselRef.current.state.currentSlide;
//       const currentInsites = carouselRefInsites.current.state.currentSlide;
//       const nextInsites = currentInsites === 4 ? 0 : currentInsites + 1;
//       const nextIndex = currentIndex === 4 ? 0 : currentIndex + 1;
//       carouselRef.current.goToSlide(nextIndex);
//       carouselRefInsites.current.goToSlide(nextInsites);
//     }
//   };

//   const renderIndicator = (clickHandler, isActive) => {
//     return (
//       <span
//         onClick={clickHandler}
//         role="button"
//         tabIndex={0}
//         style={{
//           display: 'inline-block',
//           width: '50px',
//           height: '3px',
//           backgroundColor: isActive ? '#134874' : 'gray',
//           margin: '0 5px',
//           cursor: 'pointer',
//           textAlign: 'left',
//           transition: 'background-color 0.3s ease'
//         }}
//       ></span>
//     );
//   };

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     },
//   }
//   const industryData = [
//     {
//       id: 1,
//       title: 'Healthcare',
//       description: 'Our Salesforce healthcare CRM integration can help medical service providers seamlessly integrate hospital software, harmonize patient data from various channels, MedTech services, and patient engagement solutions to facilitate exceptional patient care.',
//       knowMore: 'Know More',
//       url: 'industry/life-sciences/healthcare-medtech-patient-care'

//     },
//     {
//       id: 2,
//       title: 'Real Estate',
//       description: 'Helping realtors, property owners, and brokers strengthen relationships and revenue by helping them navigate through client details, properties, and rental agreements with our property management software.',
//       knowMore: 'Know More',
//       url: 'industry/real-estate-property-management'
//     },
//     {
//       id: 3,
//       title: 'Manufacturing',
//       description: 'Streamline customer relationships, sales processes, and supply chain management in manufacturing companies. We offer solutions from Salesforce Manufacturing Cloud to SAP Manufacturing Software to help you keep your production lines running smoothly.',
//       knowMore: 'Know More',
//       url: 'industry/manufacturing-cloud-erp'
//     },
//     {
//       id: 4,
//       title: 'Hi-Tech',
//       description: 'Our services consulting covers the complete range of technologies and methodologies necessary for manufacturing, integrating, and maintaining complex products across platforms.',
//       knowMore: 'Know More',
//       url: 'industry/hitech-semiconductor'

//     },
//     {
//       id: 5,
//       title: 'Pharma & Biotech',
//       description: 'Drive innovation, ensure regulatory compliance, and accelerate time-to-market with our end-to-end digital solutions. We empower pharma and biotech companies with AI-driven platforms, Salesforce Life Sciences Cloud, and SAP S/4HANA to streamline R&D, regulatory, commercial, and supply chain operations.',
//       knowMore: 'Know More',
//       url: 'industry/life-sciences/pharma-biotech-digital-transformation'

//     },
//     {
//       id: 6,
//       title: 'Education',
//       description: 'Transform how institutions engage with students, manage enrollment, and personalize learning journeys. From student lifecycle management to alumni relations, our CRM and automation solutions help educational organizations deliver impactful, data-driven education experiences.',
//       knowMore: 'Know More',
//       url: 'industry/connected-education'

//     },
//     {
//       id: 7,
//       title: 'Medical Devices',
//       description: 'Simplify compliance, accelerate innovation, and streamline global operations with our tailored solutions for the medical device industry. From SAP S/4HANA and Salesforce Life Sciences Cloud to AI-driven automation, we help MedTech companies manage complex supply chains and enhance patient outcomes with implementation, integration, and support services.',
//       knowMore: 'Know More',
//       url: 'industry/life-sciences/medical-devices-it-solutions'

//     },
    
//   ]

//   const successStoryData = [
//     {
//       id: 1,
//       imageUrl: '/images/homepage/case study 1_thumb_long.webp',
//       title: 'HealthCare',
//       description: 'Mulesoft for Salesforce Health Cloud and SAP',
//       para: 'Expand',
//       url: 'insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap'

//     },
//     {
//       id: 2,
//       imageUrl: '/images/homepage/case study 2_thumb_long.webp',
//       title: 'Real Estate',
//       description: 'RealForce Banking Module - ACH',
//       para: 'Expand',
//       url: 'insights/case-studies/realForce-banking-module-ach'

//     },
//     {
//       id: 3,
//       imageUrl: '/images/homepage/case study 3_thumb_long.webp',
//       title: 'Manufacturing',
//       description: 'Streamlined DevOps using Copado and Salesforce',
//       para: 'Expand',
//       url: 'insights/case-studies/streamlined-devops-using-copado-and-salesforce'
//     },
//     {
//       id: 4,
//       imageUrl: '/images/homepage/case4.webp',
//       title: 'HealthCare',
//       description: 'Digitizing patient journey using Salesforce health cloud',
//       para: 'Expand',
//       url: 'insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud'
//     }
//   ]

//   const insightsdata = [
//     {
//       id: 1,
//       imageUrl: '/images/homepage/Blog 2 Long thumb.webp',
//       label: 'Blogs',
//       description: 'The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce',
//       url: 'insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce/'
//     },
//     {
//       id: 2,
//       imageUrl: '/images/homepage/Blog 4 Long thumb.webp',
//       label: 'Blogs',
//       description: 'Agentforce Testing Center: Redefining AI Testing with Synthetic Data',
//       url: 'insights/blogs/agentforce-testing-center-redefining-ai-testing-with-synthetic-data'
//     },
//     {
//       id: 3,
//       imageUrl: '/images/homepage/Blog 5 Long thumb.webp',
//       label: 'Blogs',
//       description: 'How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration',
//       url: 'insights/blogs/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration'
//     },

//     {
//       id: 5,
//       imageUrl: '/images/blog/blog-9-logn-thumb.webp',
//       label: 'Blogs',
//       description: 'How SAP SuccessFactors Supports Diversity, Equity, and Inclusion Initiatives',
//       url: 'insights/blogs/how-sap-successfactors-supports-diversity-equity-and-inclusion-initiatives'
//     },
//     {
//       id: 6,
//       imageUrl: '/images/blog/blog-10-long-thumb.webp',
//       label: 'Blogs',
//       description: 'Enhancing Compliance: The Importance of Sanctioned Party List Screening in SAP GTS for Third-Party Transactions',
//       url: 'insights/blogs/enhancing-compliance-the-importance-of-sanctioned-party-list-screening-in-sap-gts-for-third-party-transactions'
//     },
//     {
//       id: 7,
//       imageUrl: '/images/blog/blog-11-long-thumb.webp',
//       label: 'Blogs',
//       description: 'Agents as Teammates: Revolutionizing Slack Collaboration with Agentforce',
//       url: 'insights/blogs/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce'
//     }, {
//       id: 8,
//       imageUrl: '/images/blog/blog-12-long-thumb.webp',
//       label: 'Blogs',
//       description: 'Agentforce Agents Scales Enterprise Resource Planning Systems with AI',
//       url: 'insights/blogs/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai'
//     }, {
//       id: 9,
//       imageUrl: '/images/blog/blog-13-long-thumb.webp',
//       label: 'Blogs',
//       description: 'How SAP SuccessFactors Enhances Remote Work Management',
//       url: 'insights/blogs/how-sap-successfactors-enhances-remote-work-management'
//     },



//   ];


//   const CarouselItem = ({ imageUrl, label, description, alt, url }) => (
//     <div className="relative group overflow-hidden w-[95%]">
//       <div className='absolute w-full inset-0 bg-black opacity-30 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 group-hover:bg-[#134874]'></div>
//       <Image
//         loading="lazy"
//         className="object-contain w-full h-full transform group-hover:scale-110 group-hover:origin-center transition-transform duration-500"
//         height="100"
//         width="280"
//         alt={alt}
//         src={imageUrl}
//       />
//       <div className="absolute w-full pt-5 pl-5 inset-0 bg-black bg-opacity-30 text-white  group-hover:opacity-100 transition-opacity duration-300">
//         <span>{label}</span>
//         <p className="absolute mb-5 bottom-10">{description}</p>
//         <Link href={'/' + url}>
//           <p className="bottom-0 absolute mb-5">Learn More →</p>
//         </Link>
//       </div>
//     </div>
//   );
//   return (
//     <section>
//       <Head>
       
//         <link rel="icon" href="/images/homepage/Rialtes symbol 1.jpg" />
//       </Head>

//       <Seo
//         title="IT Services and IT Consulting Company | Rialtes"
//         description="Unlock success with Rialtes’ IT services and IT consulting. Powered by AI innovation, we drive efficiency, elevate performance, and fuel sustainable growth."
//         keywords="home, website, welcome"


//       />
//       {/* main slider */}
//       <section>
//         <ResponsiveCarousel
//           autoPlay={true}
//           infiniteLoop={true}
//           interval={2000}
//           renderIndicator={renderIndicator}
//         >

//           <div className="relative">
//             <div className='xl:block hidden'>
//               <a
//                 href="/insights/news/rialtes-becomes-certified-databricks-partner-to-deliver-next-gen-ai-and-data-services-across-sap-and-salesforce-ecosystems"
//                 style={{ display: 'block' }}
//                 className="relative block"
//               >
//                 <Image
//                   width={0}
//                   height={0}
//                   sizes="100vw"
//                   priority
//                   className="w-full h-[400px] xl:h-full md:h-full bg-fixed cursor-pointer object-left"
//                   alt="demo"
//                   src="/images/homepage/Databricks Partner-01 2.webp"
//                   rel="preload"
//                   quality={60}                 
//                 />
//               </a>
//             </div>
//             <div className='xl:hidden block'>
//               <a
//                 href="/insights/news/rialtes-becomes-certified-databricks-partner-to-deliver-next-gen-ai-and-data-services-across-sap-and-salesforce-ecosystems"
//                 style={{ display: 'block' }}
//                 className="relative block"
//               >
//                 <Image
//                   width={0}
//                   height={0}
//                   sizes="100vw"
//                   priority
//                   className="w-full h-[400px] sm:h-[768px] xl:h-full  bg-fixed cursor-pointer object-left "
//                   alt="demo"
//                   src="/images/homepage/Databricks Partner-02 2.webp"
//                   rel="preload"
//                   quality={60}     
//                 />
//               </a>
//             </div>

//             <div
//               className="
//                   h-full
//                  ml-[15px] w-[calc(100%-15px)] mr-0
//                  xl:ml-[280px] xl:w-[calc(100%-280px)]
//                  md:ml-[100px] md:w-[calc(100%-100px)]
//                  sm:mx-5 sm:w-[calc(100%-40px)]
//                  xs:mx-4 xs:w-[calc(100%-32px)]"
//             >
//               {/* <div className="absolute xl:top-[20rem] top-20">
//                 <div className="text-left">
//                   <h3 className="text-white xl:text-[50px] font-normal xl:w-[55%]">Rialtes Opens new Sales Office in Himachal Pradesh, India</h3>
//                   <a
//                     href="/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh"
//                     style={{ display: 'block' }}
//                     className="relative block"
//                   >
//                     <p className="text-white xl:text-[30px] xl:mt-32 mt-20 cursor-pointer">
//                       Know more
//                     </p>
//                   </a>
//                 </div>
//               </div> */}
//             </div>
//           </div>








//           {/* First Slide */}
//           <div className="relative">
//             <a
//               style={{ display: 'block' }}
//               className="relative"
//             >
//               <div className='xl:block hidden'>
//                 <Image
//                   width={0}
//                   height={0}
//                   sizes="100vw"
//                   priority
//                   className="w-full h-[300px] xl:h-full md:h-full bg-fixed cursor-pointer object-left xl:block hidden"
//                   alt="demo"
//                   src="/images/homepage/automotive.webp"
//                   rel="preload"
//                   quality={60}     
//                 />
//               </div>
//               <div className='xl:hidden block'>
//                 <Image
//                   width={0}
//                   height={0}
//                   sizes="100vw"
//                   priority
//                   className="w-full h-[400px]  xl:h-full  bg-fixed cursor-pointer object-left "
//                   alt="demo"
//                   src="/images/homepage/mobile 1 1.webp"
//                   rel="preload"
//                   quality={60}     
//                 />
//               </div>
//             </a>
//           </div>

//           {/* Second Slide */}
//           <div className="relative">
//             <a
//               href="/industry/life-sciences/healthcare-medtech-patient-care"
//               style={{ display: 'block' }}
//               className="relative block"
//             >
//               <div className='xl:block hidden'>
//                 <Image
//                   width={0}
//                   height={0}
//                   sizes="100vw"
//                   style={{ width: '100%', objectFit: 'cover' }}
//                   priority
//                   className="w-full h-[300px] xl:h-full md:h-full object-left"
//                   alt="demo"
//                   src="/images/homepage/lifescience.webp"
//                   rel="preload"
//                   quality={60}     
//                 />
//               </div>

//               <div className='xl:hidden block'>
//                 <Image
//                   width={0}
//                   height={0}
//                   sizes="100vw"
//                   style={{ width: '100%', objectFit: 'cover' }}
//                   priority
//                   className="w-full h-[400px] xl:h-full md:h-full bg-fixed cursor-pointer object-left "
//                   alt="demo"
//                   src="/images/homepage/mobile 2 1.webp"
//                   rel="preload"
//                   quality={60}     
//                 />
//               </div>
//             </a>
//           </div>

//           {/* Third Slide */}
//           <div className="relative">
//             <a
//               href="/industry/hitech-semiconductor"
//               style={{ display: 'block' }}
//               className="relative block"
//             >
//               <div className='xl:block hidden'>
//                 <Image
//                   width={0}
//                   height={0}
//                   sizes="100vw"
//                   style={{ width: '100%', objectFit: 'cover' }}
//                   priority
//                   className="w-full h-[326px] xl:h-full md:h-full object-left"
//                   alt="demo"
//                   src="/images/homepage/semiconductor 1.webp"
//                   rel="preload"
//                   quality={60}     
//                 />
//               </div>
//               <div className='xl:hidden block'>
//                 <Image
//                   sizes="100vw"
//                   priority
//                   className="w-full h-[400px] xl:h-full md:h-full bg-fixed cursor-pointer object-left "
//                   alt="demo"
//                   src="/images/homepage/mobile 3 1.webp"
//                   rel="preload"
//                   quality={60}     
//                    fill


//                 />
//               </div>

//             </a>
//           </div>
//         </ResponsiveCarousel>

//       </section>
//       {/* success stories section */}
//       {/* //show 8 */}
//       {/* // 4 cards show 1 dash */}
//       <section className='xl:mt-20 mx-6 xl:mx-[280px] md:mx-[100px] md:mr-0 xl:mr-0'>
//         <div className='items-center grid xl:grid-cols-3 grid-cols-1'>
//           <h2>Success Stories</h2>
//           <p className='mt-5 xl:mt-0 md:mt-5 lg:mt-mt-5'>Discover how we’ve harnessed the disruptive power of cutting-edge AI to help companies anticipate and act with insight and speed with IT consulting services.</p>
//           <div className='justify-center gap-10 hidden xl:flex'>
//             <CustomArrow arrowType="prev" onClick={goToPrevious} />
//             <CustomArrow arrowType="next" onClick={goToNext} />
//           </div>
//         </div>
//         <Carousel className='xl:mt-16 mt-5 '
//           ref={carouselRef}
//           draggable={true}
//           responsive={responsive}
//           ssr={true}
//           infinite={true}
//           autoPlay={false}
//           autoPlaySpeed={2000}
//           keyBoardControl={true}
//           itemClass="carousel-item-padding-40-px xl:block hidden"
//           selectedItem={currentIndex}
//           onChange={handleChange}

//         >
//           {successStoryData.map((success) => {
//             return (
//               <div key={success.id} className='relative group overflow-hidden w-[95%]'>
//                 <div className='absolute w-full  bg-black  transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 group-hover:bg-[#134874]'></div>
//                 <Image
//                   loading="lazy"
//                   height='100'
//                   width='280'
//                   alt='Success Stories'
//                   className='object-contain w-full h-full transform group-hover:scale-110 group-hover:origin-center transition-transform duration-500'
//                   src={success?.imageUrl}
//                 />
//                 {/* Title with hover effect */}
//                 <div className="absolute w-full pt-5 pl-5 inset-0 bg-black bg-opacity-30 text-white  group-hover:opacity-100 transition-opacity duration-300">
//                   <span> {success.title}</span>
//                   <p className="absolute mb-5 bottom-10">{success.description}</p>
//                   <Link href={'/' + success.url}>
//                     <p className="bottom-0 absolute mb-5">{success.para} →</p>

//                   </Link>
//                 </div>
//               </div>
//             )
//           })}
//         </Carousel>
//         <div className="dots-container xl:block hidden">
//           {successStoryData.map((_, index) => (
//             <CustomDot
//               key={index}
//               active={currentIndex === index}
//               index={index}
//               handleDotClick={handleDotClick}
//             />
//           ))}
//         </div>
//         <div className='xl:hidden  gap-10 grid'>
//           {successStoryData.map((success) => {
//             return (
//               <div key={success.id} className='relative group overflow-hidden w-[95%]'>
//                 <div className='absolute w-full inset-0 bg-black opacity-50 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 group-hover:bg-[#134874]'></div>
//                 <Image
//                   loading="lazy"
//                   height='100'
//                   width='280'
//                   alt='Success Stories'
//                   className='object-contain w-full h-full transform group-hover:scale-110 group-hover:origin-center transition-transform duration-500'
//                   src={success?.imageUrl}
//                 />
//                 {/* Title with hover effect */}
//                 <div className="absolute w-full pt-5 pl-5 inset-0 bg-black bg-opacity-50 text-white  group-hover:opacity-100 transition-opacity duration-300">
//                   <span> {success.title}</span>
//                   <p className="absolute mb-5 bottom-10">{success.description}</p>
//                   <Link href={'/' + success.url}>
//                     <p className="bottom-0 absolute mb-5">{success.para} →</p>

//                   </Link>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </section>
//       {/* shaping our services section */}
//       {/* <section>
//         <div className='flex  mx-6 xl:mx-[280px] md:mx-[100px]  xl:mr-[400px] mt-20 '>
//           <div className=''>
//             <h2 className='xl:w-[75%] w-full'>Shaping Tomorrow with Our Services</h2>
//           </div>
//           <p className='xl:col-span-1 mt-5 xl:mt-0 md:mt-5 lg:mt-mt-5 w-[40%]'>Rialtes partnered with the most innovative enterprise software companies to provide you with tailored data-driven solutions that simplify, enable, and empower you to solve your biggest business challenges.</p>
//         </div>
//         <div className='grid gap-5 xl:ml-[280px] md:ml-[100px]  mx-6 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10'>
//           {ourServices.map((service) => {
//             return (
//               <div key={service.id} className='relative group overflow-hidden'>
//                 <Image loading="lazy" height='100' width='280' alt='Services' src={service.imageUrl} className='transform transition-transform duration-500 group-hover:scale-110 w-full' />
//                 <h4 className='absolute top-0 pt-5 pl-5 text-white opacity-80'>{service.title}</h4>
//               </div>
//             )
//           })}
//         </div>
//       </section> */}

//       {/* industries experties section section*/}
//       <section>
//         <div className='bg-[#EFEFEF] mt-20 py-10'>
//           <div className='grid xl:grid-cols-2 grid-cols-1 xl:ml-[280px] md:mx-[300px]  mx-6 pt-10'>
//             <div>
//               <h2 className='xl:w-[70%] w-full'>Industry Expertise and Solutions</h2>
//             </div>
//             <p className='mt-3'>We have domain expertise across various industries, enabling us to offer tailored IT consulting services to meet your specific industry needs. Transform your business with a quantifiable and pre-focussed system.</p>
//           </div>
//           <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:ml-[230px] md:ml-[100px] px-6 mt-16 sm:px-0 xl:gap-0 gap-10'>
//             {industryData.map((industry, index) => {
//               const showDivider = [1, 2, 4, 5,7,8].includes(index);
//               const hideOnMobile = index >= industryData.length - 3; //
//               return (
//                 <div
//                 key={industry.id}
//                 className={`relative ${showDivider ? 'xl:border-l-[3px] xl:h-20' : 'h-full'}`}
//               >
//                   <div
//                     className={`group hover:bg-white transition-all duration-300 xl:h-[300px] relative xl:p-10 md:p-2 p-3`}
//                   >
//                     <h3 className="font-bold">{industry.title}</h3>
//                     <p className="mt-3 text-[15px]">{industry.description}</p>
//                     <Link href={'/' + industry.url}>
//                       <p className="text-[#0092E0] font-bold mt-5 cursor-pointer">
//                         {industry.knowMore}
//                         <span className="ml-2 text-[#0092E0] transform translate-x-0 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                           &#8594;
//                         </span>
//                       </p>
//                     </Link>
//                   </div>
//                 </div>

//               )
//             })}
//           </div>
//         </div>
//       </section>
//       <section className='mx-6 xl:ml-[280px] md:ml-[100px]  xl:mr-0 mt-20'>
//         <div className='flex justify-between items-center'>
//           <h2>Insights</h2>
//           <div className='flex justify-center gap-5 xl:pr-16 pr-10'>
//             <CustomArrow arrowType="prev" onClick={goToPrevious} />
//             <CustomArrow arrowType="next" onClick={goToNext} />
//           </div>
//         </div>
//         <Carousel
//           swipeable={true}
//           draggable={false}
//           ref={carouselRefInsites}
//           responsive={responsive}
//           ssr={true}
//           infinite={true}
//           autoPlay={true}
//           autoPlaySpeed={2000}
//           keyBoardControl={true}
//           itemClass="carousel-item-padding-40-px "
//           className='mt-5 gap-5 grid xl:grid-cols-3 grid-cols-1'
//           selectedItem={currentIndexInsites}
//           onChange={handleChange}
//         >
//           {insightsdata.map((item, index) => (
//             <div key={index}>
//               <CarouselItem
//                 imageUrl={item.imageUrl}
//                 label={item.label}
//                 description={item.description}
//                 url={item.url}
//                 alt={`Insites${index + 1}`}
//               />
//             </div>
//           ))}
//         </Carousel>
//         <div className="dots-container">
//           {successStoryData.map((_, index) => (
//             <CustomDot
//               key={index}
//               active={currentIndexInsites === index}
//               index={index}
//               handleDotClick={handleDotClick}
//             />
//           ))}
//         </div>
//       </section>

//       {/*life science section */}
//       <section className='xl:mt-40 mt-5 relative'>
//         <div className='group overflow-hidden'>
//           <div>
//             <Image quality={100} layout="responsive" loading="lazy" width='100' height='100' className='w-full h-full hidden xl:block transition-transform duration-500 transform group-hover:scale-110' alt='Life Section' src='/images/homepage/Life Science.webp' />
//           </div>
//         </div>
//         <div className='bg-[#134874] hidden xl:block absolute p-12 text-white xl:w-[532px] xl:h-[500px] xl:right-[20rem] xl:top-[-3rem] top-[392px]'>
//           <h2>Life Science</h2>
//           <p className='mt-5'>Rialtes is committed to driving innovation in healthcare technology to empower medical professionals with the tools they need to improve patient care. We have helped Healthcare providers tackle their unique challenges and build a healthier future through Salesforce.</p>
//           <Link href='/industry/life-sciences/healthcare-medtech-patient-care'>
//             <p className='mt-10 cursor-pointer pb-10'>Learn More →</p>
//           </Link>
//         </div>
//       </section>

//       {/* life at rialtes section */}
//       <section className='xl:mt-20 xl:mx-[280px] md:mx-[100px] md:mt-20 mt-10  mx-6'>
//         <div className='flex xl:gap-16 gap-5 xl:flex-row flex-col'>
//           <div className='xl:w-1/2'>
//             <h2>Life at Rialtes</h2>
//             <p className='mt-5'>Driven by innovation and fueled by human potential, our IT consulting company tackles the digital world’s toughest problems. Together, let’s simplify problems, enable solutions, and empower each other.</p>
//           </div>
//           <div className='relative group overflow-hidden xl:w-1/2'>
//             <Image loading="lazy" height={325} width={1250} alt='Rialtes Life' className='transform transition-transform duration-500 group-hover:scale-110' src='/images/homepage/Group 508.webp' />
//           </div>
//         </div>
//       </section>

//       {/* <div className="relative w-80 h-96 overflow-hidden group rounded-lg shadow-lg">
//   <div className="absolute inset-0 transform scale-[1]  origin-bottom-right transition-transform duration-300 ease-in-out group-hover:scale-[1.9] group-hover:translate-xy-[10px]"
//       style={{
//         backgroundImage: "url('/images/homepage/healtcare 2.webp')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'left center',
//       }}
//       >
//   </div>

//   <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-50 transition duration-700"></div>

//   <div className="relative z-10 p-6 text-white">
//     <p className="text-sm mb-2">Healthcare</p>
//     <h2 className="text-xl font-semibold leading-tight">
//       Salesforce Health Cloud, Prior Authorization
//     </h2>
//   </div>
// </div> */}

//       {/* //form section */}
//       <section className='pb-20 mt-20 xl:px-[280px]  md:px-[100px] px-6'>
//         <ContactForm className='w-full xl:text-[60px] text-[26px] leading-tight' title='Ready to take the next step? Let’s kick off your journey to operational excellence' />
//       </section>

//     </section>

//   )
// }
// export default Home

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
        url:'insights/case-studies/salesforce-health-cloud-prior-authorization'

    },
    {
        id: 3,
        imageUrl: '/images/homepage/mfg-2.webp',
        title: 'Manufacturing',
        description: 'Omnichannel case management with Salesforce Service Cloud',
        url:'insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud'
    },
    {
        id: 4,
        imageUrl: '/images/homepage/realestate.webp',
        title: 'Public Sector',
        description: 'A public housing in US',
        theme: "light",
        url:'/insights/case-studies/a-public-housing-in-us'
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
        url:'insights/case-studies/optimizing-sales-processes-with-salesforce-sales-cloud-for-a-manufacturing-company/'
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
        { headline: 'Headline', link: "/insights/news/rialtes-becomes-certified-databricks-partner-to-deliver-next-gen-ai-and-data-services-across-sap-and-salesforce-ecosystems", subHeadline: 'Sub Headline', image: '/images/homepage/databricks.png', imageMobile: '/images/homepage/mobile5.jpg' },
        // { headline: 'Headline', link: "", subHeadline: 'Sub Headline', image: '/images/homepage/ban1.jpg', imageMobile: '/images/homepage/mobile1.jpg' },
        // { headline: 'Headline', link: "/products/agentchat", subHeadline: 'Sub Headline', image: '/images/homepage/banner2.jpg', imageMobile: '/images/homepage/mobile2.jpg' },
        { headline: 'Headline', link: "/products/agentchat", subHeadline: 'Sub Headline', image: '/images/homepage/banner3.jpg', imageMobile: '/images/homepage/mobile3.jpg' },
        { headline: 'Headline', link: "/industry/manufacturing-cloud-erp", subHeadline: 'Sub Headline', image: '/images/homepage/banner4.jpg', imageMobile: '/images/homepage/mobile4.jpg' },

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

                <div className="absolute bottom-0 right-[-4rem] xl:right-[-7rem] gap-5 transform -translate-x-1/2 flex items-center rounded-full shadow-lg">
                    <div className='text-white xl:text-[35px] font-light'>
                        {currentSlide + 1}/{slides.length}
                    </div>
                    <div>
                        <button
                            onClick={prevSlide}
                            className="bg-white p-2 border hover:bg-gray-200 xl:h-[69px] xl:w-[69px]"
                        >
                            ◀
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-white p-2 border hover:bg-gray-200 xl:h-[69px] xl:w-[69px]"
                        >
                            ▶
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
                    <div className='xl:col-span-4 col-span-12 xl:border-r border-gray-300 mr-[-16px]'></div>

                    <div className='xl:col-span-8 col-span-12 xl:ml-[6rem]'>
                        <h1 className="xl:text-[130px] font-bold  xl:ml-0  text-[33px] outline-text pl-[22px] xl:pl-0 xl:h-[125px] xl:mt-[-8px] mt-0 border-l xl:border-none border-gay-300 ml-32">with Impact</h1>
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
            <div className="relative h-auto flex justify-center xl:mx-[280px] md:ml-[100px] mx-[32px] mt-32">
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
                        <div className="text-white space-y-6 bg-[#184671] p-10   xl:pl-20  pb-0 pr-0 xl:mt-[10rem] xl:h-[610px] h-[400px]">
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

                            <div className="flex  bottom-0 absolute right-0">
                                <div className="mr-10 text-white xl:text-[35px] text-[16px] min-w-[40px] text-right">
                                    {activeIndexInsights + 1} / {carouselData.length}
                                </div>
                                <button
                                    onClick={handleNextInsights}
                                    className="bg-white text-black p-2 border hover:bg-gray-200 xl:h-[69px] xl:w-[69px]"
                                >
                                    ◀
                                </button>
                                <button
                                    onClick={handlePrevInsights}
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