"use client";
// pages/success-factors.js
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import FeaturedCarousel from '../../../components/servicesFeaturedCarousel';
import CarouselComponent from "../../../components/useCarousel";
import ServicesBlogs from "@/app/components/servicesBlogs";
import { useState } from "react";
import Link from "next/link";
import Seo from "@/app/components/Seo";


const solutionSuccess = [
    {
        id: 1,
        imageUrl: '/images/sap-consulting/RISE with SAP thumb.png',
        title: 'RISE with SAP',
        description: 'RISE with SAP is the ultimate solution for every enterprise that needs to develop new business models to avoid operational disruptions and create a well-defined digital system.',
        productsDetails: [
            'SAP S/4HANA Migration',
            'Robotic Process Automation',
            'Conversational Chatbot',
            'Customized Application'
        ],
        knowMore: '/services/business-transformation/rise-with-sap-services'
    },
    {
        id: 2,
        imageUrl: '/images/sap-consulting/thumb 1.webp',
        title: 'GROW with SAP',
        description: 'Grow with SAP services offers comprehensive solutions, community support, and resources to help you adopt Cloud ERP quickly and reliably',
        productsDetails: [
            'Accelerate Your Digital Transformation',
            'Flexible and Scalable ERP Solutions',
            'Increase in operational efficiency',
            'Integrated AI and automation',
            'Flexible Pricing Options'
        ],
        knowMore: '/services/business-transformation/grow-with-sap-services'

    },
    {
        id: 3,
        imageUrl: '/images/sap-consulting/Successfactor thumb.png',
        title: 'SuccessFactors',
        description: 'SuccessFactors provides end-to-end global HCM transformation, automating HR processes to keep employees engaged and aligned with organizational needs, all while easing the workload for HR leaders.',
        productsDetails: [
            'Employee Central & Employee Central Payroll',
            'Talent Acquisition',
            'SAP HR Analytics and Workforce Planning',
            'SAP Learning Management'
        ],
        knowMore: '/services/hxm-transformation/successplus-successfactors-implementation-partner'

    }, {
        id: 4,
        imageUrl: '/images/sap-consulting/SAP Ariba.webp',
        title: 'SAP Ariba',
        description: 'Transform your procurement strategy to enhance innovation and value through spend management, strategic sourcing, and cost savings, while improving operations, decision-making, and contract management',
        productsDetails: [
            'Procurement and supply chain metrics',
            'Improved accuracy of operational task',
            'Effective compliance management',
            'Automation of time-consuming processes',
            'Increased visibility of tail-end spend'
        ],
        knowMore: '/services/spend-management/sapbuyplus-ariba-implementation-partner'

    },]


export default function Page() {
    const [slides, setSlides] = useState([]);

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="SAP Consulting and Implementation Services Company | Rialtes"
                description="Our SAP consulting and implementation services, with AI at their core, simplify the process, so you can focus on what matters most—growing your business."
                keywords="home, website, welcome"
                canonical={"https://www.rialtes.com/solutions/enterprise-platforms/sap-consulting/"}
            />


            {/* hero section */}
            <section className="relative group overflow-hidden h-[399px] lg:h-[650px]">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/sap-consulting/SAP-Consulting-banner.webp"
                        alt="desktop banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/sap-consulting/SAP-Consulting-banner-mob.webp"
                        alt="mobile banner"
                        fill
                        priority
                    />
                </div>

                <div className="relative h-full custom-container grid grid-cols-12 sm:items-center">
                    <div className="md:col-span-3 sm:col-span-1 col-span">
                       
                    </div>
                    <div className="md:col-span-9 sm:col-span-11 col-span-12">
                        <div className="md:pl-[12rem] pl-[80px] sm:pl-[200px]">
                            <h3 className="text-[18px] md:text-[24px] font-bold  text-black leading-tight">SAP Consulting</h3>
                            <h2 className=" text-black leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] md:w-full mt-[11.5px] md:mt-[28.5px] ">
                                Leaning towards a better tomorrow.
                            </h2>
                            <h3 className="text-[18px]  text-black md:text-[24px] font-bold mt-[16px] xl:mt-[29.5px] w-[100%] md:w-[90%] leading-tight">
                                Leveraging SAP Consulting Services for reliable business operations.
                            </h3>
                            <Image
                                src="/images/success-factors/sap-partner-logo.webp"
                                alt="SAP Partner Logo"
                                width={0}
                                height={0}
                                priority
                                className="mt-5 w-[25%] sm:w-[16%] md:w-[14%] lg:w-[16%]"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* leverage sap section */}

            <section className="w-full custom-container xl:mt-[124px] mt-[53px] xl:mb-[0px] mb-[52px]">
                <div className="grid md:grid-cols-2 xl:gap-[40px] gap-[39px]">

                    <div>
                        <h1 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]  xl:w-[100%] w-[90%]">Leverage SAP Consulting Services for Reliable Business Operations</h1>
                    </div>

                    <div className="w-full">
                        <p className="text-[16px] xl:text-[18px] 4xl:text-[20px]  font-normal leading-tight  xl:w-[90%] w-[96%]">What matters the most is – effort. SAP Implementation Consulting with us helps you grow your business exponentially and limit your struggles tangentially. We understand your requirements and offer you just the right amount of it.</p>
                    </div>
                </div>
            </section>

            {/* our solutions to success section */}
            <section className="2xl:mt-[164px] xl:mt-[90px] mt-[64px] custom-container">
                <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] font-Light ">Our Solutions to Success</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-[44px]">
                    {solutionSuccess.map((product) => {
                        return (
                            <div key={product.id} className="border-2">
                                <div className="relative group overflow-hidden m-3">
                                    <Image
                                        src={product.imageUrl}
                                        alt="Salesforce Consulting Team"
                                        className="transform w-full h-full transition-transform duration-500 group-hover:scale-110"
                                        height={0} width={0}
                                        priority
                                    // sizes="100vw"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className=" xl:text-[22px] 4xl:text-[30px] font-bold text-[#1F3F69] leading-tight">{product.title}</h3>
                                    <p className="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{product.description}</p>
                                    <ul className="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                                        {product?.productsDetails?.map((details, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="font-medium flex mt-3 items-start before:content-['•'] before:text-[#0092E0] before:text-4xl before:font-bold before:mr-2  before:leading-[0.5]"
                                                >
                                                    {details}
                                                </li>

                                            )
                                        })}
                                    </ul>
                                    <h5 className="text-[#0092E0] mt-10 font-bold cursor-pointer xl:text-[20px] text-[16px]">
                                        <Link href={product?.knowMore}>Know More</Link>
                                    </h5>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </section>


            {/* sap industry section */}
            <section className="mt-[84px]">
                <div
                    className="custom-container md:!pr-0"
                >
                    <h2 className="text-black leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] md:w-[60%] xl:w-[80%]">SAP Industry Focused Solutions Tailored to Meet the Needs of Different Organizations</h2>
                    <div className="mt-[51px]">
                    </div>
                    <CarouselComponent />
                </div>
            </section>

            {/* get inspired section */}
            <section className="bg-[#F5F5F5] lg:mt-32 mt-10 pb-20 pt-20">
                <div
                    className="custom-container md:!pr-0 "
                >
                    <FeaturedCarousel />
                </div>
            </section>

            {/*life science section */}
            <section className='mt-[113px] relative'>
                <div className='group overflow-hidden'>
                    <div>
                        <Image
                            quality={100}
                            layout="responsive"
                            loading="lazy"
                            width='100'
                            height='100'
                            className='w-full 3xl:!h-[500px] 2xl:!h-[500px] xl:!h-[500px] lg:!h-[380px] md:!h-[384px] sm:!h-[360px] !h-[480px] object-cover transition-transform duration-500 transform group-hover:scale-110'
                            alt='Life Section'
                            src='/images/sap-consulting/RISE with SAP highlight.webp'
                        />
                    </div>
                </div>

                <div className="custom-container">
                    <div className='bg-[#134874] absolute text-white 
  w-[90%] max-w-[500px] pt-[52px] pb-[22px] px-[32px]
  top-[-10%] 
  md:right-[40px]
  lg:right-[40px]
  xl:right-[40px]
  2xl:right-[200px]
  left-1/2 md:left-auto 
  -translate-x-1/2 md:translate-x-0'>


                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] font-light ">RISE with SAP</h2>
                        <p className='text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-medium t mt-[23px]'>
                            Simplify the business of transformation through a customizable, subscription-based “as a service” model that empowers you to move to the cloud and S/4HANA at your own pace. As an SAP Gold Partner, we bring deep SAP application, business process, and technology expertise to help you take full advantage of RISE.
                        </p>
                        <Link href='/services/business-transformation/rise-with-sap-services'>
                            <p className='mt-8 cursor-pointer pb-10 '>Learn More →</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            < div
                className="pb-20
  custom-container
  text-black xl:mt-[125px] mt-[80px] "
            >
                <ContactForm title={'Take the next step to operational excellence with us.'} className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[60%] 4xl:w-[80%]" />

            </div >
        </div >
    );
}