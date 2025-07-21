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
            imageUrl: '/images/services/data-analytics/data-cloud.webp',
            title: 'Data Cloud',
        },
        {
            id: 2,
            imageUrl: '/images/services/data-analytics/sap-datasphere.webp',
            title: 'SAP Datasphere',
        },
        {
            id: 3,
            imageUrl: '/images/services/data-analytics/sap-analytics-cloud.webp',
            title: 'SAP Analytics Cloud',
        },
        {
            id: 4,
            imageUrl: '/images/services/data-analytics/tableau.webp',
            title: 'Tableau',
        },
        {
            id: 5,
            imageUrl: '/images/services/data-analytics/Qlik.webp',
            title: 'Qlik',
        },
        {
            id: 6,
            imageUrl: '/images/services/data-analytics/power-bi.webp',
            title: 'Power BI',
        },
        {
            id: 7,
            imageUrl: '/images/services/data-analytics/snowflake.webp',
            title: 'Snowflake',
        },
        {
            id: 8,
            imageUrl: '/images/services/data-analytics/ms-azure.webp',
            title: 'Azure',
        }

    ]

    const salesForce2 = [
        {
            id: 1,
            title: 'Cloud Platform',
            description: 'Our robust cloud platform provides scalable infrastructure and secure storage solutions tailored to meet your data needs. Whether you’re handling large datasets or require real-time analytics, our platform ensures seamless integration and optimal performance. Leverage the power of cloud computing to streamline operations and drive innovation within your organization.'
        },
        {
            id: 2,
            title: 'Refined AI',
            description: 'Powered by advanced artificial intelligence algorithms, our refined AI solutions offer predictive analytics and actionable insights. From machine learning models to natural language processing, our AI capabilities enable you to uncover hidden patterns in your data and make informed decisions.'
        },
        {
            id: 3,
            title: 'Analytic Engine',
            description: 'Our analytic engine is the powerhouse behind extracting meaningful patterns and trends from complex data sets. Using cutting-edge analytics techniques, it transforms raw data into valuable business intelligence. From predictive analytics to real-time reporting, the analytic engine empowers organizations to unlock the full potential of their data assets.'
        },
    ]

    const optimizeData = [
        {
            id: 1,
            image: '/images/services/data-analytics/consolidation-and-curation.webp',
            title: "Consolidation and Curation",
            description: "Consolidating all data in one place to create a single source of truth for all stakeholders. Ensuring consistent quality audits and streamlining access for everyone to connect with the needed data. Businesses can confidently rely on the insights generated from these robust data pipelines.",
            listitems: (<ul className="list-disc marker:text-[#0092E0] marker:text-2xl text-black pl-5 pb-6"><li>High-quality data</li> <li>Drive decision-making</li> <li>Power advanced technologies</li></ul>)
        },
        {
            id: 2,
            image: '/images/services/data-analytics/artificial-intelligence-machine-learning.webp',
            title: "Artificial Intelligence/Machine learning",
            description: "Maximize business value by identifying, implementing, and operationalizing AI and ML solutions for your business applications. Leverage analytical models to uncover profitable insights and maximize the return on your data investments.",
            listitems: (<ul className="list-disc marker:text-[#0092E0] marker:text-2xl text-black pl-4 pb-6"><li>Forecasting & optimizing models </li> <li>Cloud AI/ML services</li> <li>AI-driven application development</li></ul>)
        },
        {
            id: 3,
            image: '/images/services/data-analytics/data-science.webp',
            title: "Data Science",
            description: "Our team provides data ingestion, preparation, and machine learning model development, along with customizing statistical models for various use cases. Specialization in data science services to help you leverage your data, make informed decisions, and adapt swiftly to market changes.",
            listitems: (<ul className="list-disc marker:text-[#0092E0] marker:text-2xl text-black pl-4 pb-6"><li>Data mining</li> <li>Text mining and NLP</li> <li>ML to track customer behavior</li></ul>)
        },
        {
            id: 4,
            image: '/images/services/data-analytics/bi-and-data-visualization.webp',
            title: "BI and Data Visualization",
            description: "Self-service data analytics solution and data visualization that turns massive datasets into meaningful information. Curated, high-quality datasets clarify the narrative and accelerate decision-making, enabling companies to adapt swiftly. Gain insights, generate customized reports, and build a decision support system with dynamic charts, infographics, and heat maps.",
            listitems: (<ul className="list-disc marker:text-[#0092E0] marker:text-2xl text-black pl-4 pb-6"><li>360-degree visibility</li> <li>BI integration</li> <li>Report scheduling and automation</li></ul>)
        },
    ];

    const dataAnalytics = [
        {
            id: 1,
            image: '/images/services/data-analytics/deep-technology-expertise.webp',
            title: "Deep Technology Expertise",
            description: "Tap into our proven design patterns, refined through delivering hundreds of transformative data-driven digital solutions, to stay ahead of emerging technologies and shifting customer preferences.",
        },
        {
            id: 2,
            image: '/images/services/data-analytics/offering-big-data-analytics.webp',
            title: "Offering Big Data Analytics",
            description: "With extensive domain expertise and a proven history of successful data and analytics projects, we empower clients to design and implement optimal strategies for extracting insights from data, driving innovation, and boosting profitability.",
        },
        {
            id: 3,
            image: '/images/services/data-analytics/extensive-partner-ecosystem.webp',
            title: "Extensive Partner Ecosystem",
            description: "Establish a dependable data foundation with our partner ecosystem, built on over 30 years of experience as a trusted engineering and implementation partner for top data technology providers.",
        },
        {
            id: 4,
            image: '/images/services/data-analytics/snowflake-end-to-end-integration.webp',
            title: "Snowflake end-to-end Integration",
            description: "Our custom enterprise-wide integrations ensure every client maximizes the value of their data. We streamline the entire data lifecycle, from ingestion to insight, and provide the foundation needed to transition seamlessly to data-driven decision-making.",
        },
    ];



    return (
        <section>
            <div className="relative h-[350px] sm:h-[500px] lg:h-[837px] overflow-hidden">
                <Image
                    src="/images/services/data-analytics/data-analytics-banner.webp"
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
                            <h4 className="text-white text-[300] font-medium mb-2">Data Analytics</h4>
                            <h2 className="text-white max-w-lg">
                                Reinvent your Business with Data
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-10 gap-5 px-4 xl:px-[280px] md:px-[100px]  lg:mt-16 mt-5">
                <div className="lg:col-span-5">
                    <h1 className="lg:max-w-lg">Unlock the Value in Your Data</h1>
                </div>
                <div className="lg:col-span-5">
                    <p>
                        Step into the transformative world of data analytics with our specialized data analytics services. Anticipate market changes and adapt quickly by leveraging data to optimize costs and streamline processes. Our dedication guides your businesses on a tailored data journey, powered by agile methodologies and AI capabilities.
                    </p>
                </div>
            </div>

            <section className="lg:mt-20 px-6 xl:px-[280px] md:px-[100px] mt-10">
                <div className="container text-black 2xl:pr-60 xl:pr-40 md:pr-20 pr-6">
                    <h2 className="pb-10 text-black">Data Analytics Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 lg:gap-28">
                        {optimizeData.map((services) => (
                            <div key={services.id} className="w-full h-full">
                                <div className="relative overflow-hidden">
                                    <Image
                                        className="w-full transition-transform duration-300 hover:scale-105"
                                        src={services.image}
                                        alt={services.title}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="my-6 md:my-8 font-semibold h3-bold line-clamp-2">{services.title}</h3>
                                </div>
                                <p className='md:mb-[15px] mb-10'>{services.description}</p>
                                {services.listitems}
                                <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6">
                                    <Link href=''>Learn More</Link>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="max-w-3xl">
                    <h2 className="mt-20 pb-6">Elevate Your Data Strategy to New Heights</h2>
                    <p className="pb-6">Running a business requires making the right decisions at the right time. Having the right data and insights by your side makes it simple.</p>
                </div>
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

            {/* Transform Data into Actionable Analytics */}
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
                            <h2 className="pb-8 text-black">Transform Data into Actionable Analytics</h2>
                            <div className="flex md:flex-row flex-col gap-6">
                                <div className="flex flex-col xl:w-1/4 md:w-1/3">
                                    <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2">1%</h2>
                                    <p className="text-black md:w-2/3">of data in business is analyzed and interpreted</p>
                                </div>
                                <div className="flex flex-col xl:w-1/4 md:w-1/3">
                                    <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2">50%</h2>
                                    <p className="text-black md:w-2/3">of Businesses are unclear about their Data & AI needs</p>
                                </div>
                                <div className="flex flex-col xl:w-1/4 md:w-1/3">
                                    <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2">85%</h2>
                                    <p className="text-black md:w-2/3">of Businesses see AI to achieve competitive advantage in the industry</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <section className="lg:mt-20 px-6 xl:px-[280px] md:px-[100px] mt-10">
                <div className="container text-black 2xl:pr-80 xl:pr-40 md:pr-20 pr-6">
                    <h2 className="pb-10 text-black">Data Analytics Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-28">
                        {dataAnalytics.map((services) => (
                            <div key={services.id} className="w-full h-full">
                                <div className="relative overflow-hidden">
                                    <Image
                                        className="w-full transition-transform duration-300 hover:scale-105"
                                        src={services.image}
                                        alt={services.title}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="my-6 md:my-8 font-semibold h3-bold line-clamp-2">{services.title}</h3>
                                </div>
                                <p className='md:mb-[15px] mb-10'>{services.description}</p>
                                <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6">
                                    <Link href=''>Learn More</Link>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="lg:my-20 px-6 xl:px-[280px] md:px-[100px] my-10">
                <h2>Technologies We Work with</h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:mt-10 md:gap-10 gap-6">
                    {salesForce.map((sales) => {
                        return (
                            <div key={sales.id}>
                                <div className="mt-10 md:max-w-[220px] max-w-full border-b border-[#707070] pb-4">
                                    <Image
                                        src={sales.imageUrl}
                                        alt={sales.title + ' Techs'}
                                        className="w-full h-full"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        priority
                                    />
                                </div>
                                <p className="mt-5">{sales.title}</p>
                            </div>
                        )
                    })}

                </div>
            </section>

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
