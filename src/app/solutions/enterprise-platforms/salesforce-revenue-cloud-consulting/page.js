"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import FeaturedCarousel from '../../../components/servicesFeaturedCarousel';
import ExploreMoreCarousel from '../../../components/servicesExploreMoreCarousel';
import ServicesBlogs from "@/app/components/servicesBlogs";
import { useState } from "react";
import Link from "next/link";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";


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
            <Seo
                title="Salesforce Revenue Cloud Implementation Partners | Rialtes"
                description="Grow with SAP and harness AI-driven ERP to streamline operations, boost efficiency, and drive business transformation seamlessly. Partner with Rialtes today!"
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting/"
            />


            <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/revenue-cloud/revenue-cloud-banner.webp"
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
                        src="/images/revenue-cloud/revenue-cloud-banner-mob.webp"
                        alt="mobile banner"
                        fill
                        priority
                    />
                </div>

                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                        <div className="col-span-12 xl:col-span-7 lg:col-span-9">
                            <h3 className="text-white text-[18px] md:text-[24px] font-bold">
                                Salesforce Revenue Cloud
                            </h3>
                            <h2 className="text-white   text-[26px] leading-[38px] md:text-[36px] md:leading-[50px] lg:text-[60px] lg:leading-[73px] w-[90%] lg:w-[92%] mt-[11.5px] md:mt-[28.5px]">
                                Manage Revenue Streams and Customer Relationships in One Place
                            </h2>
                            <Image
                                src="/images/salesforce-consulting-services/salesforce-partner.webp"
                                alt="SAP Partner Logo"
                                width={0}
                                height={0}
                                priority
                                className="mt-5 w-[25%] sm:w-[16%] md:w-[14%] lg:w-[16%]"
                            />
                        </div>

                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>

            <div className="custom-container grid lg:grid-cols-10 gap-9 lg:mt-16 mt-5">
                <div className="lg:col-span-5">
                    <h1 className="text-[26px] leading-[38px] xl:text-[60px] xl:leading-[73px] font-light">Simplify your Company’s Revenue Generation with Revenue Cloud</h1>
                </div>
                <div className="lg:col-span-5">
                    <p className="xl:text-[22px] text-[16px] font-normal leading-[19px] xl:leading-[30px] w-[96%] xl:w-[80%]">
                        Leverage the expertise of our Salesforce professionals to implement a highly effective revenue management solution. The comprehensive suite of cloud-based software solutions is designed to help businesses optimize and streamline their entire revenue lifecycle.
                    </p>
                </div>
            </div>
            <section className="lg:mt-20 custom-container py-10">
                <h3 className="text-[26px] leading-[38px] xl:text-[60px] xl:leading-[73px] font-normal">Revenue Cloud Process Flow</h3>
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

            <section className="lg:mt-20 custom-container mt-10 pb-10">
                <h2 className="text-[26px] leading-[38px] xl:text-[60px] xl:leading-[73px] font-normal">Streamline your Quote-to-Cash Process</h2>
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
                <h2 className="text-[26px] leading-[38px] xl:text-[60px] xl:leading-[73px] font-normal mt-20">Salesforce Revenue Cloud Services for Optimized Sales Pipeline</h2>
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
                    <LearnMore />
                </div>
            </section>

            {/* Reduce Revenue Pitfalls, Supercharge Your Sales Funnel */}
            < div className="bg-[#EDEDED] py-6" >
                <div
                    className="custom-container">
                    <section className="py-5">
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
                    className="custom-container"
                >
                    <FeaturedCarousel />
                </div>
            </section>


            <div
                className="mt-20 mb-20 custom-container"
            >
                <ServicesBlogs slides={slides} />

            </div>

            <section className='custom-container md:!pr-0 lg:mt-20 bg-[#808080]  mt-10 py-10'>
                <ExploreMoreCarousel />
            </section>
            <section className="custom-container lg:mt-20 pb-20 mt-10">
                <ContactForm />

            </section>
        </section>
    )
}
