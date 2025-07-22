"use client";
// pages/success-factors.js
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import Link from "next/link";
import { useState } from "react";


const latestServices = [
    {
        id: 1,
        title: "Cloud Deployment",
        description: "Flexibly deploy solutions in the cloud to significantly reduce the need for extensive on-premises infrastructure. Lower the initial setup costs and gain the agility to adapt to changing business needs quickly.",
    },
    {
        id: 2,
        title: "SAP Build",
        description: "Leverage generative AI and a low-code/no-code development environment to customize processes and add functionalities with minimal coding.",
    },
    {
        id: 3,
        title: "Integrated Analytics",
        description: "Real-time insights and analytics help businesses make informed decisions and optimize processes for better performance and strategic planning.",
    },
    {
        id: 4,
        title: "SAP S/4HANA Cloud, Public Edition",
        description: "Utilize SAP S/4HANA Cloud with industry best practices and SAP Business Technology Platform for a modular growth solution tailored for mid-sized and growing organizations.",
    },
    {
        id: 5,
        title: "SAP Business Technology Platform",
        description: "Enhance and extend your ERP capabilities with integrated AI and automation. Obtain real-time, comprehensive insights into all your data and create customized business processes without incurring high maintenance costs.",
    },
];

const ServicesCard = ({ services }) => (
    <div className="w-full h-full flex flex-col border border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
        <div className="flex-grow flex flex-col">
            <h3 className="mb-[15px] md:mb-[25px] font-[600] text-lg line-clamp-4 text-[#1F3F69]">{services.title}</h3>
            <p className='md:mb-[15px] mb-0'>{services.description}</p>

        </div>
    </div>
);



const growLatestServices = [
    {
        id: 1,
        image: "/images/sap-consulting/SAP Integration.webp",
        title: "Integrations",
        productsDetails: [
            'Connect applications, data, and processes across on-premises and cloud environments',
            'Pre-built APIs and connectors to manage connections across different protocols',
            'Apply process logic to direct data flow and integrate data from databases stored in hybrid storage environments',
        ],
    },

    {
        id: 2,
        image: "/images/sap-consulting/A-1.webp",
        title: "Application Development",
        productsDetails: [
            ' Create custom applications and extend existing SAP solutions',
            'Pro-Code, Low-Code, and No-Code app development with powerful tools such as SAP Business Application Studio and SAP Process Automation',
            'Unified Fiori-based user experience and extensions',
        ],
    },

    {
        id: 3,
        image: "/images/sap-consulting/A-2 (1).webp",
        title: "Intelligent Solutions",
        productsDetails: [
            'SAP Process Automation',
            'AI-powered chatbots and Predesigned AI models',
            'Future-ready business with the functionality of IoT, Big data, and Blockchain',
        ],
    },
    {

        id: 4,
        image: "/images/sap-consulting/A-3.webp",
        title: "Data and Analytics",
        productsDetails: [
            'Manage and analyze data from SAP Analytics Cloud and SAP S/4HANA Cloud',
            'SAP Warehouse Management Cloud',
            'Real-time operation management with interactive, and customizable dashboards',
        ],
    },

];
const latestServices2 = [
    {
        id: 1,
        title: "Unified Platform",
        description: "Effortlessly connect cloud and on-premises environments through a unified platform, empowering businesses to accelerate innovation around SAP and third-party applications.",
    },
    {
        id: 2,
        title: "Improved Decision-Making",
        description: "Facilitate data-driven insights and ensure confident business decisions by providing robust tools for managing, governing, and integrating enterprise data.",
    },
    {
        id: 3,
        title: "Enhanced Analytics",
        description: "Leverage the power of machine learning, artificial intelligence, business intelligence, and augmented analytics. Gain real-time insights into business processes and analyze scenarios for informed strategic planning.",
    },
    {
        id: 4,
        title: "App Development and Integration",
        description: "A versatile suite of tools and services for creating, deploying, and managing cloud-based applications. Enables seamless integration of diverse IT systems and processes, ensuring insight-driven user experiences.",
    },
    {
        id: 5,
        title: "Scalability and Flexibility",
        description: "Cloud-based infrastructure to effortlessly scale operations to match demand. Adaptability helps organizations optimize resources and control costs while effectively managing workload fluctuations.",
    },
];

const Services2 = () => {
    return (
        <div className="container mx-auto text-black 2xl:pr-80 xl:pr-40 md:pr-20 pr-6">
            <h2 className="text-black mb-6 xl:w-[70%] w-full">Migrate to SAP BTP to Simplify Business Adoption</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
                {latestServices2.map((services) => (
                    <ServicesCard key={services.id} services={services} />
                ))}
            </div>
        </div>
    );
};
const GrowServicesCard = ({ services }) => (
    <div className="w-full h-full">
        <div className="relative overflow-hidden">
            <Image
                className="w-full transition-transform duration-300 hover:scale-105 h-[275px]"
                src={services.image}
                alt={services.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', objectFit: 'cover' }}
                priority
            />
        </div>
        <div className="flex flex-col pt-4">
            <h3 className="font-semibold h3-bold line-clamp-2">{services.title}</h3>
        </div>
        <ul>
            {services?.productsDetails?.map((details, index) => {
                return (
                    <li
                        key={index}
                        className="font-medium mt-3 flex items-start before:content-['•'] before:text-[#0092E0] before:text-4xl before:font-bold before:mr-2  before:leading-[0.5]"
                    >
                        {details}
                    </li>

                )
            })}
        </ul>

    </div>
);

const GrowServices = () => {
    return (
        <div className="container mx-auto text-black lg:pr-20 md:pr-10 pr-6">
            <h2 className="pb-10 text-black xl:w-[75%] w-full">Innovate Intelligent enterprise SAP applications with SAP BTP Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-20">
                {growLatestServices.map((services) => (
                    <GrowServicesCard key={services.id} services={services} />
                ))}
            </div>
        </div>
    );
};


export default function Page() {

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Grow with SAP | Company Name</title>
                <meta name="description" content="About our company" />
            </Head>

            <section className="relative h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden">
                <Image
                    src="/images/sap-consulting/SAP BTP banner.webp"
                    alt="GROW with SAP"
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
                            <h3 className="text-white text-[300] font-medium mb-2">SAP BTP</h3>
                            <h1 className="text-white max-w-2xl">
                                Unified Enterprise Solution to Bring Innovation & Drive Agility
                            </h1>
                        </div>
                        <div className="md:w-32 w-20 pt-6">
                            <Image
                                src="/images/sap-consulting/SAP-partner-logo.webp"
                                alt="SAP Partner Logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >

                <div className="py-10 bg-white">
                    <div className="container mx-auto 2xl:pr-72 xl:pr-40 md:pr-20">
                        <div className="flex flex-col xl:flex-row py-6 xl:gap-32">
                            <div className="flex flex-col w-full xl:max-w-lg xl:mb-0 mb-4">
                                <h2 className="text-black md:pb-0 pb-4">Streamline Operations and Create an Effective Workplace with SAP BTP</h2>
                            </div>
                            <div className="flex flex-col w-full">
                                <p className="text-[#000000]">We provide SAP BTP solutions to optimize operations and improve data management through a unified platform. Our services address data analytics, AI, application development, automation, and integration, helping companies tackle complex business challenges using intelligent technologies like AI/ML with S/4HANA and SAP Cloud Platform.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <div
                className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <section className="py-16 bg-white">
                    <GrowServices />
                </section>
            </div>
            {/* Latest Services Section */}
            <div
                className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <section className="pb-16 bg-white">

                    <Services2 />

                </section>
            </div>

            {/* We Help You Grow and Thrive */}


            {/* Take the Lead in Your Industry */}
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
                            <h2 className="pb-8 text-black xl:w-[60%] w-full">Enhanced Business Value and Maximized ROI with SAP BTP</h2>
                            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                                <div className="flex flex-col">
                                    <p className="text-black mb-3">Organizations using SAP BTP have reported a</p>
                                    <h4 className="text-[#0092E0] mb-2 xl:text-2xl text-sm ">three-year ROI of</h4>
                                    <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2">495%</h2>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-black">Businesses achieve an</p>
                                    <h4 className="text-[#0092E0] mb-2 xl:text-2xl text-sm">annual benefit of</h4>

                                    <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2">$195,000</h2>

                                </div>
                                <div className="flex flex-col">
                                    <p className="text-black mb-2">12-month project shortened to</p>
                                    <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2">2 Months</h2>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>



         





            {/* Contact Form */}
            < div
                className=" mt-20 mb-20
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black py-6"
            >
                <ContactForm title={'Take the next step to operational excellence with us.'} className={"max-w-4xl"} />

            </div >


        </div >
    );
}