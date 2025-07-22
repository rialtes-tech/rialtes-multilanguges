"use client";
// pages/success-factors.js
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../components/contactform";
import FeaturedCarousel from '../components/servicesFeaturedCarousel';
import CarouselComponent from "../components/useCarousel";
import ServicesBlogs from "@/app/components/servicesBlogs";
import { useState } from "react";
import Link from "next/link";


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
        knowMore: '/rise-with-sap'

    },
    {
        id: 2,
        imageUrl: '/images/sap-consulting/SAP Integration.png',
        title: 'SAP Integration',
        description: 'Experience a smooth integration process with our SAP System Integrators. Our SAP Integration Services offer you managed infrastructure, fully managed dedicated servers, private cloud with one tenant, hybrid cloud, and cooperative support packages.',
        productsDetails: [
            'Integration consulting',
            'Integration development, consolidation, and migration',
            'Integration architecture design',
            'Maintenance of integrated applications'
        ],
        knowMore: '/salesforce-consulting/salesforce-manage'

    },
    {

        id: 3,
        imageUrl: '/images/sap-consulting/SAP Managed Services.png',
        title: 'SAP Managed Services',
        description: 'As your SAP Managed Service Provider, we offer transformational business intelligence.',
        productsDetails: [
            'Managed Infrastructure, Migration & Provisioning',
            'SAP Implementation & Support',
            'Monitoring and Audits',
            'Security & Governance',
            'Business Continuity',
        ],
        knowMore: '/salesforce-consulting/salesforce-manage'

    },
    {
        id: 4,
        imageUrl: '/images/sap-consulting/Application Development thumb.png',
        title: 'Application Development',
        description: 'Turn raw data into insights by unifying and transforming it, unlocking a sea of opportunities for your business.',
        productsDetails: [
            'Customer 360 view',
            'Zero copy integration',
            'Omnichannel engagement'
        ],
        knowMore: '/salesforce-consulting/salesforce-manage'

    },
    {
        id: 5,
        imageUrl: '/images/sap-consulting/SAP Analytics Cloud thumb.png',
        title: 'SAP Analytics Cloud',
        description: 'Follow a structured strategy for implementing Salesforce, right from initial planning to post-implementation support.',
        productsDetails: [
            'Optimized sales and revenue growth',
            'Targeted marketing campaign',
            'Strengthened customer relationships',
            'Works seamlessly with MuleSoft, Tableau, and more'
        ],
        knowMore: '/salesforce-consulting/salesforce-manage'

    },
    {
        id: 6,
        imageUrl: '/images/sap-consulting/GROW with SAP thumb.png',
        title: 'GROW with SAP',
        description: 'Follow a structured strategy for implementing Salesforce, right from initial planning to post-implementation support.',
        productsDetails: [
            'Optimized sales and revenue growth',
            'Targeted marketing campaign',
            'Strengthened customer relationships',
            'Works seamlessly with MuleSoft, Tableau, and more'
        ],
        knowMore: '/grow-with-sap'

    },
    {
        id: 7,
        imageUrl: '/images/sap-consulting/Successfactor thumb.png',
        title: 'Successfactor',
        description: 'Follow a structured strategy for implementing Salesforce, right from initial planning to post-implementation support.',
        productsDetails: [
            'Optimized sales and revenue growth',
            'Targeted marketing campaign',
            'Strengthened customer relationships',
            'Works seamlessly with MuleSoft, Tableau, and more'
        ],
        knowMore: '/success-factors'

    },
    {
        id: 8,
        imageUrl: '/images/sap-consulting/SAP Analytics Cloud thumb.png',
        title: 'Integration',
        description: 'Follow a structured strategy for implementing Salesforce, right from initial planning to post-implementation support.',
        productsDetails: [
            'Optimized sales and revenue growth',
            'Targeted marketing campaign',
            'Strengthened customer relationships',
            'Works seamlessly with MuleSoft, Tableau, and more'
        ],
        knowMore: '/salesforce-consulting/salesforce-manage'

    },
    {
        id: 8,
        imageUrl: '/images/sap-consulting/SAP Analytics Cloud thumb.png',
        title: 'ARIBA',
        description: 'Follow a structured strategy for implementing Salesforce, right from initial planning to post-implementation support.',
        productsDetails: [
            'Optimized sales and revenue growth',
            'Targeted marketing campaign',
            'Strengthened customer relationships',
            'Works seamlessly with MuleSoft, Tableau, and more'
        ],
        knowMore: '/sap/sap-ariba'

    },
    {
        id: 8,
        imageUrl: '/images/sap-consulting/SAP Analytics Cloud thumb.png',
        title: 'BTP',
        description: 'Follow a structured strategy for implementing Salesforce, right from initial planning to post-implementation support.',
        productsDetails: [
            'Optimized sales and revenue growth',
            'Targeted marketing campaign',
            'Strengthened customer relationships',
            'Works seamlessly with MuleSoft, Tableau, and more'
        ],
        knowMore: '/sap/sap-btp'

    },


]





export default function Page() {
    const [slides, setSlides] = useState([]);

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>SAP Consulting | Rialtes</title>
                <meta name="description" content="About our company" />
            </Head>

            <section className="relative h-[350px] sm:h-[500px] lg:h-[650px] group overflow-hidden">
                <Image
                    src="/images/sap-consulting/SAP Consulting banner.png"
                    alt="RISE with SAP"
                    className="transform transition-transform duration-500 group-hover:scale-110"
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
                    <div className="container  text-black mx-auto px-6 h-full flex flex-col justify-center">
                        <div className="flex flex-col xl:place-self-end">
                            <h3 className="text-[200] font-bold mb-2">SAP Consulting</h3>
                            <h1 className="max-w-2xl">
                                Leaning towards a better tomorrow.
                            </h1>
                            <h3 className="w-[75%] font-bold">Leveraging SAP Consulting Services for reliable business operations.</h3>
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
                    <div className="container mx-auto 2xl:pr-80 xl:pr-40 md:pr-20">
                        <div className="flex flex-col xl:flex-row items-center py-6">
                            <div className="flex flex-col w-full xl:w-2/3 xl:mr-20 xl:mb-0 mb-4">
                                <h2 className="text-black md:pb-0 pb-4">Reducing Efforts, Increasing Efficiency.</h2>
                            </div>
                            <div className="flex flex-col w-full xl:w-2/3">
                                <p className="text-[#000000]">What matters the most is – effort. SAP Implementation Consulting with us helps you grow your business exponentially and limit your struggles tangentially. We understand your requirements and offer you just the right amount of it.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="lg:mt-20 mt-10 px-6 xl:pl-[280px] xl:pr-[418px] md:pl-[100px] lg:pr-0">
                <h2>Our Solution to Success</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-5 gap-5">
                    {solutionSuccess.map((product) => {
                        return (
                            <div key={product.id} className="border-2">
                                <div className="relative group overflow-hidden m-3">
                                    <Image
                                        src={product.imageUrl}
                                        alt="Salesforce Consulting Team"
                                        className="transform transition-transform duration-500 group-hover:scale-110"
                                        height={325} width={1250}
                                        sizes="100vw"
                                        priority
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="mt-5 text-[22px] font-bold text-[#1F3F69]">{product.title}</h3>
                                    <p className="mt-5">{product.description}</p>
                                    <ul className="mt-5">
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
                                    <h5 className="text-[#0092E0] mt-10 font-bold cursor-pointer">
                                        <Link href={product?.knowMore}>Know More</Link>
                                    </h5>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </section>


            <section className="lg:mt-32 mt-10 pb-20">
                <div
                    className="xl:ml-[280px]  md:ml-[100px] px-6 lg:px-0 md:px-0"
                >
                    <h2 className="text-black mb-6 xl:pr-[400px] pr-0">SAP Industry Focused Solutions Tailored to Meet the Needs of Different Organizations</h2>

                    <CarouselComponent />
                </div>
            </section>

            <section className="bg-[#F5F5F5] lg:mt-32 mt-10 pb-20 pt-20">
                <div
                    className="
                    ml-[15px] w-[calc(100%-15px)] mr-0
                    xl:ml-[280px] xl:w-[calc(100%-280px)]
                    md:ml-[100px] md:w-[calc(100%-100px)]
                    sm:mx-5 sm:w-[calc(100%-40px)]
                    xs:mx-4 xs:w-[calc(100%-32px)] "
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
            {/*life science section */}
            <section className='xl:mt-40 mt-5 relative'>
                <div className='group overflow-hidden'>
                    <div>
                        <Image quality={100} layout="responsive" loading="lazy" width='100' height='100' className='w-full h-full hidden xl:block transition-transform duration-500 transform group-hover:scale-110' alt='Life Section' src='/images/sap-consulting/RISE with SAP highlight.webp' />
                    </div>
                </div>
                <div className='bg-[#134874] hidden xl:block absolute p-8 text-white xl:w-[410px] xl:h-[410px] xl:right-[20rem] xl:top-[-3rem] top-[392px]'>
                    <h2>RISE with SAP</h2>
                    <p className='mt-5'>Simplify the business of transformation through a customizable, subscription-based “as a service” model that empowers you to move to the cloud and S/4HANA at your own pace. As an SAP Gold Partner, we bring deep SAP application, business process, and technology expertise to help you take full advantage of RISE.</p>
                    <p className='mt-8 cursor-pointer pb-10'>Learn More →</p>
                </div>
            </section>
            {/* Contact Form */}
            < div
                className="pb-20 mt-20
  container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black py-6"
            >
                <ContactForm title={'Take the next step to operational excellence with us.'} className={'max-w-4xl'} />

            </div >
        </div >
    );
}