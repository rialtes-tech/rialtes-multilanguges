"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import FeaturedCarousel from '../../components/servicesFeaturedCarousel';
import ExploreMoreCarousel from '../../components/servicesExploreMoreCarousel';
import ServicesBlogs from "@/app/components/servicesBlogs";
import { useState } from "react";
import Link from "next/link";


export default function HealthCloud() {
    const [slides, setSlides] = useState([]);


    const salesForce = [
        {
            id: 1,
            imageUrl: '/images/revenue-cloud/customer-insight.svg',
            title: 'Customer Insight',
        },
        {
            id: 2,
            imageUrl: '/images/revenue-cloud/streamlined-revenue-efficiency.svg',
            title: 'Streamlined Revenue Efficiency',
        },
        {
            id: 3,
            imageUrl: '/images/revenue-cloud/enhanced-buyer-experience.svg',
            title: 'Enhanced Buyer Experience',
        },
        {
            id: 4,
            imageUrl: '/images/revenue-cloud/increased-conversion-rates.svg',
            title: 'Increased Conversion Rates',
        },
        {
            id: 5,
            imageUrl: '/images/revenue-cloud/optimized-product-delivery.svg',
            title: 'Optimized Product Delivery',
        }

    ]

    const salesForce2 = [
        {
            id: 1,
            title: 'Expert Revenue Cloud Consulting',
            description: 'If you’re unsure how to fully leverage Salesforce Revenue Cloud, we offer consulting services to help businesses customize the platform to fit their revenue operations. Our experts assess your needs in pricing, quoting, billing, and revenue recognition to deliver tailored solutions that boost efficiency.'
        },
        {
            id: 2,
            title: 'System Audit and Health Check',
            description: 'We provide an independent health check and system audit to help identify areas where efficiency and productivity can be enhanced. Continuous improvements establish a stable environment for standardization, reduce incident rates, and boost future readiness.'
        },
        {
            id: 3,
            title: 'Setup and Configuration',
            description: 'Unused rules, complex configurations, and redundant dashboards can hinder system performance. We will assess and refine the configuration to enhance the platform’s speed and align it with your business goals. Our approach customizes Salesforce Revenue Cloud to streamline CPQ processes and automate pricing, discounting, and proposals.'
        },
        {
            id: 4,
            title: 'Hassle-free Data Migration',
            description: 'Streamline the transition from legacy systems to Salesforce Revenue Cloud by migrating CPQ and billing data with custom configurations, ensuring data integrity and timely execution. Our expertise enhances functionality, scalability, and revenue management, allowing for a seamless transfer of data without disruptions.'
        },
        {
            id: 5,
            title: 'Upgrades and Integration',
            description: 'Revenue Cloud is most effective when integrated with systems like Sales Cloud, Marketing Cloud, payment gateways, and other CRM tools. We eliminate siloed systems by connecting revenue management processes with Salesforce and external ERPs. Our billing expertise ensures smooth integration, troubleshooting, and upgrades.'
        },
        {
            id: 6,
            title: 'Support And Maintenance',
            description: 'Ensure the success of your Salesforce Revenue Cloud implementation through enablement training, system upgrades, and ongoing maintenance. Our proactive approach enhances performance, addresses challenges, and drives improvement. The dedicated team handles common issues, data fixes, basic admin support, and post-release verifications.'
        }

    ]



    return (
        <section>
            <div className="relative h-[350px] sm:h-[500px] lg:h-[837px] overflow-hidden">
                <Image
                    src="/images/revenue-cloud/revenue-cloud-banner.webp"
                    alt="Revenue Cloud"
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
                    <div className="container mx-auto h-full flex flex-col justify-center">
                        <div className="flex flex-col">
                            <h4 className="text-white text-[300] font-medium mb-2">Salesforce Revenue Cloud</h4>
                            <h2 className="text-white max-w-lg">
                                Manage Revenue Streams and Customer Relationships in One Place
                            </h2>
                        </div>
                        <div className="lg:mt-10 mt-6">
                            <Image
                                src="/images/salesforce-consulting-services/salesforce-partner.webp"
                                className="md:w-[300px] w-[100px] h-full bg-transperent"
                                alt="Leadership Team"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className=" grid lg:grid-cols-10 gap-5 px-6 xl:px-[280px] md:px-[100px]  lg:mt-16 mt-5">
                <div className="lg:col-span-5">
                    <h1>Simplify your Company’s Revenue Generation with Revenue Cloud</h1>
                </div>
                <div className="lg:col-span-5">
                    <p>
                        Leverage the expertise of our Salesforce professionals to implement a highly effective revenue management solution. The comprehensive suite of cloud-based software solutions is designed to help businesses optimize and streamline their entire revenue lifecycle.
                    </p>
                </div>
            </div>
            <section className="lg:mt-20 px-6 xl:px-[280px] md:px-[100px] py-10">
                <h3 className="md:text-[30px] md:font-[300]">Revenue Cloud Process Flow</h3>
                <Image
                    src='/images/revenue-cloud/revenue-cloud-infographic.webp'
                    alt="Revenue Cloud Process Flow"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: '100%', height: '100%', objectFit: "cover",
                    }}
                    priority
                />
            </section>

            <section className="lg:mt-20 px-6 xl:px-[280px] md:px-[100px] mt-10">
                <h2>Streamline your Quote-to-Cash Process</h2>
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:mt-10 gap-5">
                    {salesForce.map((sales) => {
                        return (
                            <div key={sales.id}>
                                <div className="mt-10">
                                    <Image
                                        src={sales.imageUrl}
                                        alt="Salesforce Consulting Team"
                                        className="w-20 h-20"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        priority
                                    />
                                </div>
                                <h4 className="mt-5">{sales.title}</h4>
                            </div>
                        )
                    })}

                </div>
                <h2 className="mt-20">Salesforce Revenue Cloud Services for Optimized Sales Pipeline</h2>
                <div className="my-10">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-10 gap-5">
                        {salesForce2.map((sales) => {
                            return (
                                <div key={sales.id} className="border-2 p-8 hover:bg-[#D9F2FF] hover:border-transparent transition-all duration-300">

                                    <h3 className="mt-5 text-[#1F3F69]">{sales.title}</h3>
                                    <p className="mt-5">{sales.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6">
                        <Link href=''>Learn More</Link>
                    </button>
                </div>
            </section>

            {/* Reduce Revenue Pitfalls, Supercharge Your Sales Funnel */}
            < div className="bg-[#EDEDED] py-6" >
                <div
                    className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <section className="py-10">
                        <div className="container mx-auto">
                            <h2 className="pb-4 text-black">Reduce Revenue Pitfalls, Supercharge Your Sales Funnel</h2>
                            <p className="pb-8">Businesses using Revenue Cloud have reported:</p>
                            <div className="flex md:flex-row flex-col gap-6">
                                <div className="flex flex-col xl:w-1/4 md:w-1/3">
                                    <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2">40%</h2>
                                    <p className="text-black">Faster sales cycles due to automated CPQ</p>
                                </div>
                                <div className="flex flex-col xl:w-1/4 md:w-1/3">
                                    <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2">30%</h2>
                                    <p className="text-black">Boost in quote-to-cash efficiency</p>
                                </div>
                                <div className="flex flex-col xl:w-1/4 md:w-1/3">
                                    <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2">20-25%</h2>
                                    <p className="text-black">Reduction in administrative costs</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <section className="bg-[#F5F5F5] py-10">
                <div
                    className="xl:ml-[280px]  md:ml-[100px] px-6 lg:px-0 md:px-0"
                >
                    <FeaturedCarousel />
                </div>
            </section>


            <div
              className="mt-20 mb-20
                               ml-[15px] w-[calc(100%-15px)] mr-0
                               xl:ml-[280px] xl:w-[calc(100%-280px)]
                               md:ml-[100px] md:w-[calc(100%-100px)]
                               sm:mx-5 sm:w-[calc(100%-40px)]
                               xs:mx-4 xs:w-[calc(100%-32px)]"
            >
              <ServicesBlogs slides={slides} />
      
            </div>

            <section className='px-6 xl:pl-[280px] md:pl-[100px] lg:pr-0 lg:mt-20 bg-[#808080] pb-20 mt-10'>
                <ExploreMoreCarousel />
            </section>
            <section className="px-6 xl:pl-[280px] md:pl-[100px] lg:pr-0 lg:mt-20 pb-20 mt-10">
                <ContactForm />

            </section>
        </section>
    )
}
