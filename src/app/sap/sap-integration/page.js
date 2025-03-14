"use client";
// pages/success-factors.js
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import Link from "next/link";
import { useState } from "react";




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
        image: "/images/sap-consulting/AdobeStock_611914145 copy.webp",
        title: "Data Integration and Management",
        description: 'Deep expertise in SAP Data Services, SAP S/4HANA, and various other data-related technologies allows us to offer a comprehensive range of data integration and management services. Our integration process includes tools for connecting data between different systems, with a focus on data mapping, validation, and transformation.'
    },

    {
        id: 2,
        image: "/images/sap-consulting/AdobeStock_493221997 copy.webp",
        title: "Integration Consulting",
        description: 'Providing expert consulting and guidance to help organizations seamlessly integrate SAP with other systems and applications. This involves evaluating existing systems, defining integration requirements, and recommending the most effective integration strategies.'
    },

    {
        id: 3,
        image: "/images/sap-consulting/AdobeStock_1053508188.png",
        title: "SAP and non-SAP apps Integration",
        description: 'Enhance business productivity and performance by integrating SAP and non-SAP applications, systems, and processes using various integration methods. Standard and custom SAP application integration with Salesforce, payment gateways, eCommerce solutions, etc.'
    },
    {

        id: 4,
        image: "/images/sap-consulting/AdobeStock_877805890 copy.webp",
        title: "Cloud and On-premises Apps",
        description: 'Build an effective hybrid cloud environment to effectively connect your cloud and on-premises applications. Leveraging the SAP Cloud Platform and connectivity tools, we can assist you build the necessary integration model, seamlessly connecting and orchestrating data, processes, applications, and systems using best practices and proven approaches.'
    },
    {

        id: 5,
        image: "/images/sap-consulting/AdobeStock_895154198 copy.webp",
        title: "SAP Business Technology Platform",
        description: 'We focus on enhancing and extending your ERP capabilities with integrated AI and automation. Obtain real-time, comprehensive insights into all your data and create customized business processes without incurring high maintenance costs.'
    },

];
const latestServices2 = [
    {
        id: 1,
        title: "Configuration",
        description: "Enable real-time processes, test queries, generate schemas, and support standard or custom objects with custom APIs..",
    },
    {
        id: 2,
        title: "Monitoring",
        description: "Enhanced process monitoring system in place to handle errors.",
    },
    {
        id: 3,
        title: "Security",
        description: "Authenticate every step with a user session ID, 0auth 2.0, and two-way SSL.",
    },

];

const Services2 = () => {
    return (
        <div className="container mx-auto text-black 2xl:pr-80 xl:pr-40 md:pr-20 pr-6">
            <h2 className="text-black mb-6 xl:w-[70%] w-full">Journey from Capabilities to Success in 3 Steps</h2>
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
            <p className="mt-5">{services.description}</p>
        </div>


    </div>
);

const GrowServices = () => {
    return (
        <div className="container mx-auto text-black lg:pr-20 md:pr-10 pr-6">
            <h2 className="pb-10 text-black xl:w-[75%] w-full">SAP Cloud Integration Services: Key to a Proactive Organization</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
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
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="relative h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden">
                <Image
                    src="/images/sap-consulting/SAP integration banner (1).webp"
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
                            <h3 className="text-white text-[300] font-medium mb-2">SAP INTEGRATION</h3>
                            <h1 className="text-white max-w-2xl">
                                Boost operational efficiency by 60% with our SAP Integration services
                            </h1>
                        </div>
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
                                <h2 className="text-black md:pb-0 pb-4">Discover, Evaluate, and Develop Flawless Integration Solutions</h2>
                            </div>
                            <div className="flex flex-col w-full">
                                <p className="text-[#000000]">Digital transformation is vital when it comes to agility and operational insight. Taking calculated risks is a part of smarter decision-making. Implementing SAP integration delivers a unified experience to customers, partners, and employees alike. Maximize business value by integrating diverse SAP and external systems, facilitating improved data management.</p>
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

                    <h2 className="xl:w-[60%] w-full">Step Back, Relax, and Leave the Challenges to Us</h2>
                    <ul className="list-disc mt-10 marker:text-[#0092E0]">
                        <li className="mt-2">Using industry norms of an intuitive digital transformation to optimize every complex task.
                        </li>
                        <li className="mt-5"> We have a team of prodigious minds who are proficient in third-party apps and APIs.</li>
                        <li className="mt-5">Create engaging customer experiences and eliminate extensive maintenance requirements.</li>

                        <li className="mt-5"> Access to some of the most brilliant minds who have deep knowledge of leading enterprise platforms.</li>
                    </ul>
                </section>
            </div>


            <div
                className="mt-20
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <section className="pb-16 bg-white">

                    <h2 className="xl:w-[60%] w-full">Technologies We Work with</h2>
                    <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 mt-10">
                        <div>
                            <Image
                                src="/images/sap-consulting/MuleSoft-Logo.wine copy.webp"
                                alt="GROW with SAP"
                                className="w-[150px]"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    objectFit: "cover",
                                }}
                                priority
                            />
                            <h4 className="mt-5">Mulesoft</h4>
                        </div>
                        <div>
                            <Image
                                src="/images/sap-consulting/Dell_Boomi_Logo_Sans_RGB copy.webp"
                                alt="GROW with SAP"
                                className="w-[150px]"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    objectFit: "cover",
                                }}
                                priority
                            />
                            <h4 className="mt-5">Dell Boomi</h4>
                        </div> <div>
                            <Image
                                src="/images/sap-consulting/616850bf7aafb0a2cf7e4ea1_sZs4qY21RNWgv2QDH7lN copy.webp"
                                alt="GROW with SAP"
                                className="w-[150px]"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    objectFit: "cover",
                                }}
                                priority
                            />
                            <h4 className="mt-5">SAP CPI</h4>
                        </div> <div>
                            <Image
                                src="/images/sap-consulting/workato-logo-1 copy.webp"
                                alt="GROW with SAP"
                                className="w-[150px]"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    objectFit: "cover",
                                }}
                                priority
                            />
                            <h4 className="mt-5">Workato</h4>
                        </div> <div>
                            <Image
                                src="/images/sap-consulting/informatica-vector-logo copy.webp"
                                alt="GROW with SAP"
                                className="w-[150px]"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    objectFit: "cover",
                                }}
                                priority
                            />
                            <h4 className="mt-5">Informatica</h4>
                        </div>

                    </div>
                </section>
            </div>

            {/* We Help You Grow and Thrive */}

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