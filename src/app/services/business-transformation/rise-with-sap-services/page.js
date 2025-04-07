// "use client";
// // pages/success-factors.js
// import Head from "next/head";
// import Image from "next/image";
// import ContactForm from "../../../components/contactform";
// import FeaturedCarousel from '../../../components/servicesFeaturedCarousel';
// import ExploreMoreCarousel from '../../../components/servicesExploreMoreCarousel';
// import ServicesBlogs from "@/app/components/servicesBlogs";
// import { useState } from "react";
// import LearnMore from "@/app/components/learnMore";
// import Seo from "@/app/components/Seo";

// const latestServices = [
//   {
//     id: 1,
//     title: "Inability to quantify the incremental capabilities through next-generation business processes",
//   },
//   {
//     id: 2,
//     title: "The inability to integrate a broader technological ecosystem effectively",
//   },
//   {
//     id: 3,
//     title: "Digitally transforming business means disregarding years of efforts in the existing IT environment",
//   },
//   {
//     id: 4,
//     title: "Lack of real-time visibility on the overall performance",
//   },
//   {
//     id: 5,
//     title: "The fear of execution and inherent governance risk",
//   },
//   {
//     id: 6,
//     title: "Cyber-security is the last but most crucial point of concern",
//   },
// ];

// const ServicesCard = ({ services }) => (
//   <div className="w-full h-full flex flex-col border border-[#707070] p-10 transition ease-out duration-300 hover:border-[#D9F2FF] hover:bg-[#D9F2FF]">
//     <div className="flex-grow flex flex-col justify-center">
//       <p>{services.title}</p>
//     </div>
//   </div>
// );

// const Services = () => {
//   return (
//     <div className="container mx-auto text-black 2xl:pr-80 xl:pr-40 md:pr-20 pr-6">
//       <h2 className="text-black mb-6">Businesses never stop exploring newer growth opportunities</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
//         {latestServices.map((services) => (
//           <ServicesCard key={services.id} services={services} />
//         ))}
//       </div>
//       <LearnMore/>
//     </div>
//   );
// };



// export default function Page() {
//   const [slides, setSlides] = useState([]);

//   return (
//     <div className="min-h-screen bg-white">
//      <Seo
//         title="Rise with SAP Services: Future-Proof Your S/4HANA Strategy | Rialtes"
//         description="Rise with SAP and simplify your S/4HANA migration. Rialtes ensures a smooth, secure, and future-ready transformation for your enterprise."
//         keywords="home, website, welcome"
//       />

//       <section className="relative h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden">
//         <Image
//           src="/images/services/rise-with-sap/rise-with-sap-banner.webp"
//           alt="RISE with SAP"
//           fill
//           style={{ objectFit: "cover", objectPosition: "35% 20%" }}
//           priority
//         />
//         <div
//           className="
//               container h-full relative
//               ml-[15px] w-[calc(100%-15px)] mr-0
//               xl:ml-[280px] xl:w-[calc(100%-280px)]
//               md:ml-[100px] md:w-[calc(100%-100px)]
//               sm:mx-5 sm:w-[calc(100%-40px)]
//               xs:mx-4 xs:w-[calc(100%-32px)]"
//         >
//           <div className="container mx-auto px-6 h-full flex flex-col justify-center">
//             <div className="flex flex-col xl:place-self-end xl:text-white text-black">
//               <h3 className=" text-[300] font-medium mb-2">RISE with SAP</h3>
//               <h1 className="max-w-2xl">
//                 Gather, analyze and disseminate with ‘RISE with SAP’
//               </h1>
//             </div>
//             <div className="md:w-32 w-20 pt-6 xl:place-self-end">
//               <Image
//                 src="/images/success-factors/sap-partner-logo.webp"
//                 alt="SAP Partner Logo"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </section>


//       <section
//         className="
//         container
//         ml-[15px] w-[calc(100%-15px)] mr-0
//         xl:ml-[280px] xl:w-[calc(100%-280px)]
//         md:ml-[100px] md:w-[calc(100%-100px)]
//         sm:mx-5 sm:w-[calc(100%-40px)]
//         xs:mx-4 xs:w-[calc(100%-32px)]"
//       >

//         <div className="py-10 bg-white">
//           <div className="container mx-auto 2xl:pr-80 xl:pr-40 md:pr-20">
//             <div className="flex flex-col xl:flex-row items-center py-6">
//               <div className="flex flex-col w-full xl:w-2/3 xl:mr-20 xl:mb-0 mb-4">
//                 <h2 className="text-black md:pb-0 pb-4">Pragmatic Approach To Solving Problems</h2>
//               </div>
//               <div className="flex flex-col w-full xl:w-2/3">
//                 <p className="text-[#000000]">Every business requires room for innovation to drive profitable growth. “Expect the unexpected” is inevitable in business; implementing RISE with SAP eases your approach to tackling real-time problems more practical, predictable, effective, and measurable.</p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>


//       {/* Our Solution to Success */}
//       <div
//         className="
//         container
//         ml-[15px] w-[calc(100%-15px)] mr-0
//         xl:ml-[280px] xl:w-[calc(100%-280px)]
//         md:ml-[100px] md:w-[calc(100%-100px)]
//         sm:mx-5 sm:w-[calc(100%-40px)]
//         xs:mx-4 xs:w-[calc(100%-32px)]"
//       >
//         <section className="xl:pb-16 bg-white">
//           <div className="container mx-auto">
//             <h2 className="pb-6 text-black xl:hidden flex">Our Solution to Success</h2>
//             <div className="flex flex-col md:flex-row xl:items-center xl:py-6 gap-6">
//               <div className="flex flex-col w-full">
//                 <div className="relative overflow-hidden mr-6">
//                   <Image
//                     className="w-full transition-transform duration-300 hover:scale-105"
//                     src='/images/services/rise-with-sap/solution-to-success.webp'
//                     alt="Our Solution to Success"
//                     width={0}
//                     height={0}
//                     sizes="100vw"
//                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                     priority
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col w-full">
//                 <h2 className="pb-6 text-black xl:flex hidden">Our Solution to Success</h2>
//                 <p className="text-black pb-6">RISE with SAP is the ultimate solution for every enterprise that needs to develop new business models to avoid operational disruptions and create a well-defined digital system to avoid business risks</p>
//                 <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 pb-6">
//                   <li className="pb-4">SAP S/4HANA Migration </li>
//                   <li className="pb-4">Robotic Process Automation </li>
//                   <li className="pb-4">Conversational Chatbot </li>
//                   <li className="pb-4">Customized Application</li>
//                 </ul>
//               </div>

//             </div>
//             <div className="mt-[-15px] xl:mt-0">
//             <LearnMore/>

//             </div>

//           </div>
//         </section>
//       </div>


//       {/* Latest Services Section */}
//       <div
//         className="mt-16 xl:mt-0
//         container
//         ml-[15px] w-[calc(100%-15px)] mr-0
//         xl:ml-[280px] xl:w-[calc(100%-280px)]
//         md:ml-[100px] md:w-[calc(100%-100px)]
//         sm:mx-5 sm:w-[calc(100%-40px)]
//         xs:mx-4 xs:w-[calc(100%-32px)]"
//       >
//         <section className="pb-16 bg-white">

//           <Services />

//         </section>
//       </div>


//       {/* SuccessFactors Integration Solutions */}
//       <div
//         className="
//         container
//         ml-[15px] w-[calc(100%-15px)] mr-0
//         xl:ml-[280px] xl:w-[calc(100%-280px)]
//         md:ml-[100px] md:w-[calc(100%-100px)]
//         sm:mx-5 sm:w-[calc(100%-40px)]
//         xs:mx-4 xs:w-[calc(100%-32px)]"
//       >
//         <section className="xl:py-16">
//           <div className="container mx-auto">
//             <h2 className="pb-10 text-black">The 3-Pronged Apparatus</h2>
//             <div className="flex md:flex-row flex-col justify-between gap-6 mr-6">
//               <div className="flex lg:flex-row md:flex-col lg:text-start md:text-center">
//                 <div className="md:h-20 h-16 lg:mr-6 md:mr-0 mr-6 lg:mb-0 mb-4 text-center">
//                   <Image
//                     className=""
//                     src='/images/services/rise-with-sap/taking-the-lead.svg'
//                     alt="Taking the lead"
//                     width={0}
//                     height={0}
//                     sizes="100vw"
//                     style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//                     priority
//                   />
//                 </div>
//                 <div className="flex flex-col lg:w-1/2">
//                   <h3 className="text-black md:h3-bold">Taking the lead</h3>
//                   <p className="text-black">Unlock new efficiency with intelligent automation</p>
//                 </div>
//               </div>
//               <div className="flex lg:flex-row md:flex-col lg:text-start md:text-center">
//                 <div className="md:h-20 h-16 lg:mr-6 md:mr-0 mr-6 lg:mb-0 mb-4">
//                   <Image
//                     src='/images/services/rise-with-sap/constant-improvement.svg'
//                     alt="Constant improvement"
//                     width={0}
//                     height={0}
//                     sizes="100vw"
//                     style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//                     priority
//                   />
//                 </div>
//                 <div className="flex flex-col lg:w-1/2">
//                   <h3 className="text-black md:h3-bold">Constant improvement</h3>
//                   <p className="text-black">Automate business processes with tailored insights</p>
//                 </div>
//               </div>
//               <div className="flex lg:flex-row md:flex-col lg:text-start md:text-center">
//                 <div className="md:h-20 h-16 lg:mr-6 md:mr-0 mr-6 lg:mb-0 mb-4">
//                   <Image
//                     src='/images/services/rise-with-sap/secure-success.svg'
//                     alt="Secure success"
//                     width={0}
//                     height={0}
//                     sizes="100vw"
//                     style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//                     priority
//                   />
//                 </div>
//                 <div className="flex flex-col lg:w-1/2">
//                   <h3 className="text-black md:h3-bold">Secure success</h3>
//                   <p className="text-black">With a trusted partner for the cloud on top of a versatile platform</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//       </div>


//       {/* Enterprise-focused solutions for everything your business needs! */}
//       <div
//         className="
//         container
//         ml-[15px] w-[calc(100%-15px)] mr-0
//         xl:ml-[280px] xl:w-[calc(100%-280px)]
//         md:ml-[100px] md:w-[calc(100%-100px)]
//         sm:mx-5 sm:w-[calc(100%-40px)]
//         xs:mx-4 xs:w-[calc(100%-32px)]"
//       >
//         <section className="py-16 bg-white">
//           <div className="container mx-auto">
//             <h2 className="pb-6 text-black xl:hidden flex">Enterprise-focused solutions for everything your business needs!</h2>
//             <div className="flex flex-col-reverse md:flex-row gap-6 xl:py-6">
//               <div className="flex flex-col w-full">
//                 <h2 className="pb-6 text-black xl:flex hidden">Enterprise-focused solutions for everything your business needs!</h2>
//                 <p className="pb-6 text-black">No matter what your SLAs, cloud needs, or technical support requirements are, our comprehensive solutions are curated to serve all business needs, irrespective of location.</p>
//                 <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 pb-6">
//                   <li className="pb-4">SAP S/4HANA Cloud </li>
//                   <li className="pb-4">Business Process Transformation </li>
//                   <li className="pb-4">Robotic Process Automation </li>
//                   <li className="pb-4">Conversational Chatbot </li>
//                   <li className="pb-4">Additional supporting partners</li>
//                 </ul>
//               </div>
//               <div className="flex flex-col w-full">
//                 <div className="relative overflow-hidden">
//                   <Image
//                     className="w-full transition-transform duration-300 hover:scale-105"
//                     src='/images/services/rise-with-sap/enterprise-focused-solutions.webp'
//                     alt="Enterprise-focused solutions for everything your business needs!"
//                     width={0}
//                     height={0}
//                     sizes="100vw"
//                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                     priority
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="mt-[-50px] xl:mt-0">
//             <LearnMore/>

//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Latest Customer Success Stories */}
//       < div className="bg-[#F5F5F5] py-6" >
//         <div
//           className="
//         container
//         ml-[15px] w-[calc(100%-15px)] mr-0
//         xl:ml-[280px] xl:w-[calc(100%-280px)]
//         md:ml-[100px] md:w-[calc(100%-100px)]
//         sm:mx-5 sm:w-[calc(100%-40px)]
//         xs:mx-4 xs:w-[calc(100%-32px)]"
//         >
//           <FeaturedCarousel />

//         </div>
//       </div>

//       {/* Latest Blogs */}
//       <div
//               className="mt-20 mb-20
//                                ml-[15px] w-[calc(100%-15px)] mr-0
//                                xl:ml-[280px] xl:w-[calc(100%-280px)]
//                                md:ml-[100px] md:w-[calc(100%-100px)]
//                                sm:mx-5 sm:w-[calc(100%-40px)]
//                                xs:mx-4 xs:w-[calc(100%-32px)]"
//             >
//               <ServicesBlogs slides={slides} />

//             </div>
//       {/* Explore More */}
//       < div className="bg-[#808080] py-6" >
//         <div
//           className="
//         container
//         ml-[15px] w-[calc(100%-15px)] mr-0
//         xl:ml-[280px] xl:w-[calc(100%-280px)]
//         md:ml-[100px] md:w-[calc(100%-100px)]
//         sm:mx-5 sm:w-[calc(100%-40px)]
//         xs:mx-4 xs:w-[calc(100%-32px)]"
//         >
//           <ExploreMoreCarousel />

//         </div>
//       </div >


//       {/* Contact Form */}
//       < div
//         className="
//   container
//         ml-[15px] w-[calc(100%-15px)] mr-0
//         xl:ml-[280px] xl:w-[calc(100%-280px)]
//         md:ml-[100px] md:w-[calc(100%-100px)]
//   sm:mx-5 sm:w-[calc(100%-40px)]
//   xs:mx-4 xs:w-[calc(100%-32px)]
//   text-black py-16"
//       >
//         <ContactForm title={'Take the next step to operational excellence with us.'} className={'max-w-4xl'} />

//       </div >


//     </div >
//   );
// }

"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/components/Seo";
import Link from "next/link";


export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Rise with SAP Services: Future-Proof Your S/4HANA Strategy | Rialtes"
                description="Rise with SAP and simplify your S/4HANA migration. Rialtes ensures a smooth, secure, and future-ready transformation for your enterprise."
                keywords="home, website, welcome"
            />

            <section className="relative group overflow-hidden h-[350px] lg:h-[650px]">
                <Image
                    src="/images/services/rise-with-sap/header.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                    className="transform transition-transform duration-500 group-hover:scale-110"
                />
                <div
                    className="
         h-full relative
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 mt-20">
                        <div className="xl:col-span-5 col-span-12">
                            <h3 className="text-white xl:text-[24px] font-medium mb-2">Voyager+</h3>
                            <h1 className="text-white xl:text-[60px] leading-tight">
                                Accelerate Your Digital Transformation with Rialtes Voyager+ for RISE with SAP
                            </h1>
                            <div className="md:w-32 w-20 pt-6">
                                <Image
                                    src="/images/success-factors/sap-partner-logo.webp"
                                    alt="SAP Partner Logo"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                        </div>
                        <div className="xl:col-span-7 col-span-12">
                        </div>
                    </div>

                </div>
            </section>




            <section
                className="mt-16
              ml-[15px] w-[calc(100%-15px)] mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]
              sm:mx-5 sm:w-[calc(100%-40px)]
              xs:mx-4 xs:w-[calc(100%-32px)]"
            >

                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-8 col-span-11">
                        <h2 className="text-[25px] xl:text-[55px]  mt-5">
                            Unlock the Future of Intelligent Enterprise with a Trusted SAP Partner
                        </h2>
                        <p className="xl:text-[22px] mt-5">At Rialtes, we help organizations future-proof their business with RISE with SAP — combining deep industry expertise, a certified SAP team, and proven methodologies. As a certified SAP partner with global presence in the United States, Canada, India, and Singapore, Rialtes is uniquely positioned to deliver end-to-end SAP S/4HANA transformations that go beyond technology and drive real business outcomes. </p>
                        <p className="xl:text-[22px] mt-5">Our proprietary Voyager+ framework brings together SAP License Advisory, Solution Design, Implementation, Quality Assurance, Integration, and Post-Go-Live Support — creating a seamless, value-driven journey for organizations adopting RISE with SAP.</p>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                    </div>
                </div>

            </section>


            <div className="bg-[#DBDBDB]  mt-10">
                <section
                    className="xl:mt-32 mt-10 
              ml-[15px] w-[calc(100%-15px)] mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]
              sm:mx-5 sm:w-[calc(100%-40px)]
              xs:mx-4 xs:w-[calc(100%-32px)]"
                >

                    <div className="grid xl:grid-cols-12 grid-cols-1">
                        <div className="xl:col-span-5 col-span-12 xl:py-16">
                            <h2 className="text-[25px] xl:text-[55px]">
                                Why Choose RISE with SAP + Rialtes?
                            </h2>
                            <p className="xl:text-[22px] mt-5">RISE with SAP is not just an ERP — it’s a comprehensive business transformation offering that bundles SAP S/4HANA Cloud, SAP Business Technology Platform (BTP), Business Process Intelligence with SAP Signavio, and partner-managed services into a single contract.</p>
                            <h3 className="xl:text-[30px] mt-10 font-bold">With Rialtes Voyager+, you can:</h3>
                            <ul className="list-disc space-y-5 xl:text-[20px] pl-5 marker:font-bold marker:text-2xl">
                                <li className="mt-5"><span className="font-bold">Simplify your SAP transformation </span>with an all-in-one approach.</li>
                                <li><span className="font-bold">Accelerate cloud adoption </span> and reduce technical debt.</li>
                                <li><span className="font-bold">Reimagine business processes </span>using SAP Signavio.</li>
                                <li><span className="font-bold">Leverage AI and automation </span> to optimize operations.</li>
                            </ul>
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12 mt-5 xl:mt-0">
                            <Image
                                src="/images/services/rise-with-sap/why rialtes.webp"
                                alt="SAP Partner Logo"
                                width={0}
                                height={0}
                                className="w-full xl:h-[750px] mt-[-58px] transform transition-transform duration-500 group-hover:scale-110"
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>

                </section>
            </div>



            <section className="relative h-[2270px] overflow-hidden mt-5 xl:mt-0">
                <Image
                    src="/images/services/rise-with-sap/Greenfield background.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />
                <div
                    className="
                 container h-full relative
                 ml-[15px] w-[calc(100%-15px)] mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
                 sm:mx-5 sm:w-[calc(100%-40px)]
                 xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1  mt-20 text-white">
                        <div className="xl:col-span-10 col-span-12">
                            <div className="mt-5">
                                <h2 className="text-[25px] xl:text-[60px]">Greenfield and Brownfield: </h2>
                                <h2 className=" text-[25px] xl:text-[60px]">Two Roads to SAP S/4HANA Success</h2>
                            </div>
                        </div>
                        <div className="xl:col-span-2 col-span-12">
                            {/* Empty space for larger screens */}
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-12 grid-cols-1  mt-10 text-white bg-[#0C723F] xl:p-12 p-5">
                        <div className="xl:col-span-7 col-span-12">
                            <h2 className="xl:text-[45px] leading-tight font-medium">
                                Greenfield Implementation-Reimagine from Ground Up
                            </h2>
                        </div>

                        <div className="xl:col-span-4 col-span-12">
                            <p className="xl:text-[22px]">For organizations looking to rebuild business processes and start fresh on SAP S/4HANA, Greenfield is the right approach.</p>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1  bg-white pt-10 pb-32 pr-10 pl-10">

                        <div className="xl:col-span-5 col-span-12">
                            <h3 className="xl:text-[30px] font-bold">Our Greenfield Approach Includes:</h3>

                            <ul className="list-disc space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-10">
                                <li><span className="font-bold">Vision and Strategy Alignment — </span>Define business goals and digital vision.</li>
                                <li><span className="font-bold">Process Reimagination with SAP Best Practices and Signavio — </span>Redesign processes to leverage the latest innovations.</li>
                                <li><span className="font-bold">Solution Design and Prototyping —</span> Develop future-state architecture and rapid prototyping.</li>
                                <li><span className="font-bold">  SAP S/4HANA Cloud Configuration — </span> Build system aligned with fit-to-standard and tailored needs.</li>
                            </ul>
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12 mt-20">
                            <ul className="list-disc space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px]">
                                <li><span className="font-bold"> Data Strategy and Clean Migration — </span>Ensure accurate, clean data migration from legacy platforms.</li>
                                <li><span className="font-bold">Integration Framework Design with SAP BTP and CPI — </span>Plan integrations with internal and external systems.</li>
                                <li><span className="font-bold"> User Training and Change Management — </span>Drive adoption and organizational readiness.</li>
                                <li><span className="font-bold">Go-Live and Hypercare Support — </span>Smooth transition with strong post-go-live governance.</li>
                            </ul>
                        </div>
                    </div>
                    <p className="xl:text-[26px] bg-[#0C8AD4] p-5 pl-10 text-white  w-[93%] mt-[-50px] ml-[50px]">Best for companies aiming for next-gen processes and cloud-first ERP.</p>
                    <div className="grid xl:grid-cols-12 grid-cols-1   mt-20 text-white bg-[#713A18] p-12">
                        <div className="xl:col-span-7 col-span-12">
                            <h2 className="xl:text-[45px] text-[25px] font-medium  leading-tight">
                                Brownfield Implementation- Seamless System Conversion
                            </h2>
                        </div>

                        <div className="xl:col-span-4 col-span-12">
                            <p className="xl:text-[22px]">For enterprises seeking to retain existing processes and data while migrating to S/4HANA, the Brownfield approach offers a cost-effective, faster route.</p>
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-12 grid-cols-1  bg-white pt-10 pb-32 pr-10 pl-10">
                        <div className="xl:col-span-5 col-span-12">
                            <h3 className="xl:text-[30px] font-bold">Our Brownfield Expertise Covers:</h3>
                            <ul className="list-disc space-y-5  marker:font-bold marker:text-2xl pl-5 text-[20px] mt-10">
                                <li><span className="font-bold">System Landscape and Fit Assessment — </span>Evaluate existing ECC setup and assess conversion readiness.</li>
                                <li><span className="font-bold">Custom Code and Data Analysis — </span> Review, simplify, and adapt custom developments.</li>
                                <li><span className="font-bold">Technical System Conversion — </span> Execute SAP S/4HANA conversion using SAP-certified tools.</li>
                            </ul>
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12 mt-20">
                            <ul className="list-disc space-y-5  marker:font-bold marker:text-2xl pl-5 text-[20px]">
                                <li><span className="font-bold"> Data Transformation and Validation — </span>Migrate high-integrity data with minimal disruption.</li>
                                <li><span className="font-bold">Functional Testing and Optimization — </span>Ensure system alignment and performance.</li>
                                <li><span className="font-bold"> Post-Go-Live Optimization and Support — </span>Fine-tune processes and system behaviour post-migration.</li>
                            </ul>
                        </div>
                    </div>
                    <p className="xl:text-[26px] bg-[#0C8AD4] p-5 pl-10 text-white  w-[93%] mt-[-50px] ml-[50px]">Ideal for organizations focused on modernization without disrupting core operations.</p>

                    <button className="text-[20px] border-[1px] border-[solid]  border-[#134874] font-semibold bg-white text-black p-5 py-5  transition duration-300 order-4 mt-16">
                        <Link href='/contact-s'>Learn More</Link>
                    </button>
                </div>

            </section>



            <div
                className="
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black py-20"
            >
                <div className="grid xl:grid-cols-12 grid-cols-1 items-center gap-20">
                    <div className="xl:col-span-8 col-span-12">
                        <h2 className="text-[25px] xl:text-[60px] mt-5 leading-tight">
                            Leveraging SAP Signavio and SAP Activate Methodology
                        </h2>
                        <h3 className="xl:text-[40px] mt-5">Proven Framework for Success</h3>
                    </div>

                    <div className="xl:col-span-4 col-span-12">
                        <p className="xl:text-[22px]">At Rialtes, we blend SAP Signavio’s Business Process Intelligence (BPI) with SAP Activate Methodology to ensure strategic alignment and flawless execution.</p>
                    </div>
                </div>
            </div>


            <div
                className="mb-20
  container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black"
            >
                <h2 className="xl:text-[30px] font-bold">Our Activate-Based Delivery Model:</h2>

                <div className="overflow-x-auto mt-5">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#D0EEFF] text-left">
                                <th className="p-4 text-[16px] md:text-[30px] font-bold">Phase</th>
                                <th className="p-4 text-[16px] md:text-[30px] font-bold">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {[
                                { title: "Discover", desc: "Value discovery, business case, and strategy.." },
                                { title: "Prepare", desc: "Team onboarding, planning, and initial scoping." },
                                { title: "Explore", desc: "Fit-to-standard analysis and process design." },
                                { title: "Realize", desc: "System configuration, integrations, and testing." },
                                { title: "Deploy", desc: "Migration, training, and go-live execution." },
                                { title: "Run", desc: "Continuous optimization and support." }

                            ].map((item, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? "bg-[#F2F2F2]" : "bg-white"} text-left mt-5`}>
                                    <td className="p-4 text-[16px] md:text-[26px]">{item.title}</td>
                                    <td className="p-4 text-[16px] md:text-[26px]">{item.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div
                className="mb-20 xl:mr-[142px] absolute mt-0
        ml-[15px] 
        xl:ml-[280px]
       
  text-black"
            >
                <div className="grid xl:grid-cols-12 grid-cols-1  bg-[#068EDA] gap-8">
                    <div className="xl:col-span-3 col-span-12 pl-10 xl:w-[355px]">
                        <Image
                            src="/images/services/rise-with-sap/SAP Signavio.webp"
                            alt="SAP Partner Logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                            priority
                        />
                    </div>
                    <div className="xl:col-span-9 col-span-12 text-white p-3 pl-10">
                        <p className="xl:text-[26px]">By embedding SAP Signavio into Explore and Realize phases, we optimize processes and ensure business alignment, driving higher user adoption and system value.</p>
                    </div>
                </div>

            </div>
            <div className="bg-[#DBDBDB] py-20 mt-40">
                <div
                    className=" mb-20 container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black"
                >

                    <div className="grid xl:grid-cols-12 grid-cols-1">
                        <div className="xl:col-span-8 mt-16">
                            <h2 className="text-[25px] xl:text-[60px]">Extending Value: Rialtes’ BTP and Integration Expertise</h2>
                        </div>
                        <div className="xl:col-span-4 col-span-12">
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-12 grid-cols-1 mt-10 gap-5">
                        <div className="xl:col-span-5 col-span-12">
                            <h3 className="xl:text-[30px] font-bold">BTP Competency for Tailored Solutions</h3>
                            <p className="mt-5 xl:text-[22px]">Our certified SAP Business Technology Platform (BTP) experts enable advanced extensions, workflows, and integrations to customize and future-proof SAP S/4HANA solutions.</p>
                            <ul className="list-disc space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5 text-[20px]">
                                <li className="mt-4">Custom App Development and Extensions</li>
                                <li>Process Automation with SAP Build</li>
                                <li>Analytics and Data Intelligence</li>
                                <li> Seamless API and event-driven integrations</li>
                            </ul>
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12">
                            <h3 className="xl:text-[30px] font-bold">SAP CPI for Enterprise-Grade Integration</h3>
                            <p className="mt-5 xl:text-[22px]">We enable secure, scalable integration using SAP Cloud Platform Integration (CPI) to connect S/4HANA with SAP and non-SAP systems like Salesforce, Workday, and ServiceNow.</p>

                        </div>
                    </div>
                </div>
            </div>



            <section className="relative h-[500px] xl:h-[589px]  mt-5 xl:mt-0">
                <Image
                    src="/images/services/rise-with-sap/Connected SAP Solutions.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />
                <div
                    className="
                  h-full relative
                 ml-[15px] w-[calc(100%-15px)] mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
                 sm:mx-5 sm:w-[calc(100%-40px)]
                 xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1">
                        <div className="xl:col-span-8 col-span-12">
                            <h2 className="text-[25px] xl:text-[60px]  mt-10 text-white leading-tight">
                                Connected SAP Solutions — Unlocking Synergy with S/4HANA
                            </h2>
                        </div>
                        <div className="xl:col-span-3 col-span-12">
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-12 grid-cols-1 mt-10">
                        <div className="xl:col-span-9 col-span-12 flex xl:flex-row flex-col gap-5">
                            <div className="flex-1 pl-8 pr-8 pt-10 pb-10 bg-white text-black">
                                <h3 className="xl:text-[30px] font-bold">SAP SuccessFactors + S/4HANA</h3>
                                <p className="xl:text-[20px] mt-5">Rialtes integrates SAP SuccessFactors for seamless HR and talent management, enabling end-to-end workforce lifecycle linked directly to core ERP functions like payroll, projects, and finance.</p>
                            </div>
                            <div className="flex-1 pl-8 pr-8 pt-10 pb-10 bg-white text-black">
                                <h3 className="xl:text-[30px] font-bold">SAP Ariba + S/4HANA</h3>
                                <p className="xl:text-[20px] mt-5">With SAP Ariba, we deliver comprehensive procurement transformation, fully integrated into S/4HANA for direct and indirect sourcing, supplier collaboration, and spend analysis.</p>
                            </div>
                            <div className="flex-1 pl-8 pr-8 pt-10 pb-10 bg-white text-black">
                                <h3 className="xl:text-[30px] font-bold">Direct and Indirect Procurement</h3>
                                <p className="xl:text-[20px] mt-5">Design and implement optimized procurement processes that reduce costs, enhance compliance, and improve supplier performance.</p>
                            </div>
                        </div>
                        <div className="xl:col-span-3 col-span-12">
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-[#184671] py-20">
                <div
                    className="
                  h-full relative
                 ml-[15px] w-[calc(100%-15px)] mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
                 sm:mx-5 sm:w-[calc(100%-40px)]
                 xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="relative h-[665px] mt-20">
                        <Image
                            src="/images/services/rise-with-sap/Agentchat banner.webp"
                            alt=""
                            fill
                            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                            priority
                            className="w-full"
                        />
                        <div className="grid xl:grid-cols-12 grid-cols-1 absolute left-10">
                            <div className="xl:col-span-5 col-span-12 w-[720px] h-[360px]">
                                <h2 className="text-[25px] xl:text-[50px] bg-white text-black  p-12">Conversational AI with AgentChat — WhatsApp Business, Made for SAP and Salesforce</h2>
                            </div>
                            <div className="xl:col-span-7 col-span-12">
                            </div>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white mt-10">
                        <div className="xl:col-span-4 col-span-12">
                            <h2 className="xl:text-[40px] font-bold leading-tight">Transform Customer and Supplier Engagement with AgentChat</h2>
                            <p className="xl:text-[22px] mt-5">
                                AgentChat is a bi-directional WhatsApp conversational app built within Salesforce, designed to integrate seamlessly with SAP S/4HANA and Salesforce Clouds.
                            </p>
                            <button className="text-[20px] border-[1px] border-[solid]  border-[#134874] font-semibold bg-white text-black p-3  transition duration-300 order-4 mt-16">
                                <Link href='/products/agentchat'>Know More</Link>
                            </button>
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12">
                            <h3 className="xl:text-[30px] font-bold">Key Features:</h3>
                            <ul className="list-disc space-y-5 xl:text-[20px] pl-5 marker:font-bold marker:text-2xl">
                                <li className="mt-5"><span className="font-bold">Quick Setup — </span> Go live in minutes.</li>
                                <li><span className="font-bold"> Enterprise-Grade Security & Role Management — </span> Supports multiple roles and secure access.</li>
                                <li><span className="font-bold"> Process Delegation — </span> Manage Cases, Orders, Leads, and Work Orders by record type.</li>
                                <li><span className="font-bold"> Cross-Platform Engagement — </span>  Unified communications between SAP, Salesforce, and WhatsApp.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div className="py-20 mt-10">
                <div
                    className="
                  h-full relative
                 ml-[15px] w-[calc(100%-15px)] mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
                 sm:mx-5 sm:w-[calc(100%-40px)]
                 xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1">
                        <div className="xl:col-span-4 col-span-12 relative h-[563px]">
                            <Image
                                src="/images/services/rise-with-sap/AI and Data-Driven Innovation.webp"
                                alt=""
                                fill
                                style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                                priority
                                className="w-full "
                            />
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12 text-black">
                            <h2 className="text-[25px] xl:text-[59px] leading-tight">AI and Data-Driven Innovation: Agentforce and SAP Data Cloud</h2>
                            <p className="mt-5 xl:text-[22px]">With SAP Data Cloud and Salesforce Agentforce AI, Rialtes brings intelligent insights, automation, and customer segmentation to modern SAP environments.</p>
                            <ul className="list-disc space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5 xl:text-[20px] font-medium">
                                <li className="mt-4">AI-Powered Analytics and Campaigns</li>
                                <li>Dynamic Customer and Supplier Journeys</li>
                                <li> Predictive Maintenance and Forecasting</li>
                                <li> Unified Data for Personalized Engagement</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            {/* Contact Form */}
            <div
                className="
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black py-20"
            >
                <ContactForm title={'Partner with Rialtes to Transform Your SAP Landscape'} className={"max-w-[55rem] font-medium"} />
            </div >
        </div >
    );
}