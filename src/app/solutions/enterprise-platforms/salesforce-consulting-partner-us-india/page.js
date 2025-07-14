"use client";
import Image from "next/image";
import Seo from "../../../components/Seo";
import ContactForm from "../../../components/contactform";
import CarouselComponent from "../../../components/useCarousel";
import InsightsCarousel from '../../../components/servicesInsightsCarousel';
import FeaturedCarousel from '../../../components/servicesFeaturedCarousel';
import Link from "next/link";
import LearnMore from "@/app/components/learnMore";
import React from "react";
import Script from "next/script";
export default function SalesForceConsulting() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Salesforce Consulting Services",
        "url": "https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting/",
        "description": "Rialtes provides comprehensive Salesforce consulting services including implementation, integration, migration, and support to help businesses scale, automate processes, and enhance customer engagement.",
        "inLanguage": "en",
        "publisher": {
            "@type": "Organization",
            "name": "Rialtes",
            "url": "https://www.rialtes.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.rialtes.com/images/homepage/logo.svg"
            }
        },
        "mainEntity": {
            "@type": "Service",
            "name": "Salesforce Consulting Services",
            "serviceType": "Salesforce Implementation, Integration, Migration, Support, Agentforce & Data Cloud Solutions",
            "provider": {
                "@type": "Organization",
                "name": "Rialtes",
                "url": "https://www.rialtes.com"
            },
            "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "Singapore" }
            ],
            "audience": {
                "@type": "Audience",
                "audienceType": "Enterprise Leaders, CIOs, IT Heads, CRM Managers, Customer Experience Teams"
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Salesforce Consulting Services by Rialtes",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Salesforce Implementation Services",
                            "description": "Customized Salesforce implementations to align CRM functionality with business needs."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Salesforce Integration Services",
                            "description": "Connect Salesforce with ERP, third-party apps, and APIs for seamless data flow."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Salesforce Migration Services",
                            "description": "Smooth data migration from legacy CRMs or other platforms to Salesforce with zero data loss."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Salesforce Support Services",
                            "description": "Ongoing CRM support, maintenance, and optimization for peak system performance."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Salesforce Agentforce Solutions",
                            "description": "Create and deploy autonomous AI agents for 24/7 support and service automation."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Salesforce Data Cloud Implementation",
                            "description": "Unify customer data for actionable insights and 360° engagement with Data Cloud."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Salesforce Lightning App Development",
                            "description": "Custom apps using Lightning framework for enhanced UX and faster workflows."
                        }
                    }
                ]
            }
        }
    }
    const salesForce = [
        {
            id: 1,
            imageUrl: '/images/salesforce-consulting-services/light.svg',
            title: 'Lightning Services',
            description: 'Dedicated app developers are at your disposal for the development of an app closely knit for enhanced customer experience.'
        },
        {
            id: 2,
            imageUrl: '/images/salesforce-consulting-services/inte.svg',
            title: 'Integration Services',
            description: 'Salesforce Integration services like never before to help you deliver a connected experience for seamless data flow – on the go'
        },
        {
            id: 3,
            imageUrl: '/images/salesforce-consulting-services/imple.svg',
            title: 'Implementation Services',
            description: 'We know how to move beyond Salesforce basics, customizing and extending its capabilities with our implementation solutions.'
        },
        {
            id: 4,
            imageUrl: '/images/salesforce-consulting-services/mig.svg',
            title: 'Migration Services',
            description: 'With a user-friendly UI, interact with your customers with sleek visuals, unleash next-gen analytics, and improve your user engagement.'
        },
        {
            id: 5,
            imageUrl: '/images/salesforce-consulting-services/light.svg',
            title: 'Contact Support',
            description: 'End-to-end monitoring and user support to identify and resolve challenges faced in the implementation cycle.'
        },

    ]
    const salesForceProduct = [
        {
            id: 3,
            imageUrl: '/images/salesforce-consulting-services/agentforce.png',
            title: 'Salesforce Agentforce',
            description: 'Build and customize autonomous AI agents to help your employees and customers 24/7.',
            productsDetails: [
                'Resolve customer inquiries',
                'Handle prospects',
                'Build campaigns',
                'Automate sales process'
            ],
            knowMore: '/solutions/artificial-intelligence/salesforce-agentforce-consulting'

        },
        {
            id: 4,
            imageUrl: '/images/salesforce-consulting-services/lap.webp',
            title: 'Salesforce Data Cloud',
            description: 'Turn raw data into insights by unifying and transforming it, unlocking a sea of opportunities for your business.',
            productsDetails: [
                'Customer 360 view',
                'Zero copy integration',
                'Omnichannel engagement'
            ],
            knowMore: '/solutions/data-ai/salesforce-data-cloud-consulting'

        },
        // {
        //     id: 5,
        //     imageUrl: '/images/salesforce-consulting-services/lap.webp',
        //     title: 'Salesforce Implementation',
        //     description: 'Follow a structured strategy for implementing Salesforce, right from initial planning to post-implementation support.',
        //     productsDetails: [
        //         'Optimized sales and revenue growth',
        //         'Targeted marketing campaign',
        //         'Strengthened customer relationships',
        //         'Works seamlessly with MuleSoft, Tableau, and more'
        //     ],
        //     knowMore: '/salesforce-consulting/salesforce-manage'

        // },

    ]
    const businessDetails = [
        {
            id: 1,
            title: 'World’s #1 CRM ',
            description: 'A customer-first approach since inception offers options for integrating custom platforms, conversational AI, and modern app development features.'
        },

        {
            id: 2,
            title: 'Breathes Transparency',
            description: 'A magnum opus in the tech industry, Salesforce services enable a seamless unification of Sales, commerce, IT, and marketing, for personalized experiences.'
        },
        {
            id: 3,
            title: 'Instant Benefits',
            description: 'Expect high ROI in no time. From design to implementation, everything’s a breeze with Salesforce’s rapid solution process.'
        },
        {
            id: 4,
            title: 'Scale with flexibility ',
            description: 'Small, mid-sized, or large enterprises, Salesforce caters to it all.'
        },
        {
            id: 5,
            title: 'Industry Pioneers',
            description: 'Over 96% of Salesforce users vouch for its efficiency, exceeding ROI expectations, and offering impeccable customer service'
        },

    ]
    const growthData = [
        {
            percentage: "1%",
            label: "growth",
            description: "revenue for our customer",
        },
        {
            percentage: "35%",
            label: "growth",
            description: "customer service level\nsatisfaction",
        },
        {
            percentage: "45%",
            label: "growth",
            description: "decision-making\nefficiency",
        },
    ];

    return (
        <div>
            <Seo
                title="Top Salesforce Consulting and Implementation Partners | Rialtes"
                description="Partner with Rialtes—your Salesforce consulting services partner in the US and India for AI-enabled Salesforce implementation and integration success."
                canonical={"https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/"}
            />
            <Script
                id="schema-salesforce-consulting"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />


            <div className='relative group overflow-hidden'>
                <Image
                    src="/images/salesforce-consulting-services/banner.webp"
                    alt="Salesforce Consulting Team"
                    className="transform transition-transform duration-500 group-hover:scale-110 xl:h-full h-[250px] md:h-[350px] lg:h-[450px]"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        objectFit: "cover",
                    }}
                    priority
                />
                <div className="absolute custom-container  top-[10%] lg:text-start lg:top-[25%] sm:top-[20%] text-black">
                    <h1 className="font-bold 4xl:text-[24px] xl:text-[20px] text-[18px]">Salesforce Consulting Services</h1>
                    <h2 className="md:w-[46%]  lg:w-[37%]  xl:w-[48%]  2xl:w-[41%] 4xl:w-[56%] 4xl:text-[60px] xl:text-[40px] text-[26px]">Transform how you engage with your clients</h2>
                    <Image
                        src="/images/salesforce-consulting-services/salesforce-partner.webp"
                        className="w-[22%] h-full bg-transperent lg:mt-20 lg:m-0 mt-5"
                        alt="Leadership Team"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>

            <div className="grid lg:grid-cols-10 xl:gap-16 gap-5 px-6 custom-container mt-5 lg:mt-16">
                <div className="lg:col-span-6 4xl:col-span-6 2xl:col-span-5 ">
                    <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
                        Retaining Your Clients Or Aiming For Repeats: Make It Viable With Salesforce Consulting
                    </h2>
                </div>

                <div className="lg:col-span-4">
                    <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight xl:mr-[96px]">
                        Rialtes is a trusted partner in the Salesforce community. We know how to move beyond Salesforce basics, customizing and extending its capabilities with our Salesforce solutions. We have a resource-based dynamic system to set up cloud architecture seamlessly and automate your business processes.
                    </p>
                </div>
            </div>


            {/* section crm consulting */}
            <section className="mt-16 px-6  custom-container ">
                <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">Our Salesforce CRM Consulting Services</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-10 gap-5 mt-10">
                    {salesForce.map((sales) => {
                        return (
                            <div key={sales.id} className="border-2 p-8 hover:bg-[#A9D6EE] hover:border-transparent transition-all duration-300 ">
                                <div>
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
                                <h3 className="mt-5 4xl:text-[30px] xl:text-[22px] text-[20px] text-[#1F3F69] leading-tight font-bold">{sales.title}</h3>
                                <p className="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{sales.description}</p>
                            </div>
                        )
                    })}
                </div>
                <LearnMore />
            </section>
            {/* Salesforce product */}

            <section className="mt-20  px-6  custom-container">
                <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">Salesforce Products</h2>
                <p className="lg:mt-3 mb-8 mt-3 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">Well, Salesforce consulting is just one part of an array of solutions.</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-5 gap-5">
                    {salesForceProduct.map((product) => {
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
                                    <h3 className="mt-5 leading-tight 4xl:text-[30px] xl:text-[22px] text-[20px] font-bold text-[#1F3F69]">{product.title}</h3>
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
                                    <h5 className="text-[#0092E0] mt-10 font-bold  underline cursor-pointer text-[16px] xl:text-[19px] 4xl:text-[24px] leading-tight">
                                        <Link href={product?.knowMore}>Know More</Link>
                                    </h5>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </section>

            {/* your business */}
            <section className="mt-16 px-6 custom-container">
                <h2 className="font-normal xl:w-[71%] 4xl:w-[93%] w-full leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">Understanding and targeting the customers correctly for your business</h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:mt-10 xl:gap-20 gap-5 pb-16">
                    {businessDetails.map((bussiness) => {
                        return (
                            <div key={bussiness.id}>
                                <h3 className="font-bold mt-3  4xl:text-[30px] xl:text-[22px] text-[20px] leading-tight">{bussiness.title}</h3>
                                <p className="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{bussiness.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Action section */}
            <section className="bg-[#EDEDED] lg:mt-10 mt-5 py-[70px]">
                <div className="px-6 custom-container">
                    <h3 className=" mb-10 text-[#000000] 4xl:text-[40px] xl:text-[30px] text-[22px]">
                        Action is what matters and not just words
                    </h3>
                    <div className="grid lg:grid-cols-10 grid-cols-1">
                        <div className="col-span-1 lg:col-span-6 grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-20 lg:gap-20">
                            {growthData.map((item, index) => (
                                <div key={index}>
                                      <div className="absolute inset-0 bg-white/5 rounded pointer-events-none" aria-hidden="true" />

                                    <div className="px-2 bg-[#EDEDED] py-1 rounded text-[#0092E0] font-bold 4xl:text-[70px] xl:text-[40px] text-[23px]">
                                        {item.percentage}
                                    </div>
                                    <div className="px-2 rounded leading-[20px] text-[#0092E0] font-bold 4xl:text-[50px] xl:text-[35px] text-[20px]">
                                        {item.label}
                                    </div>

                                    <p className="mt-10 text-[18px] xl:text-[20px] 4xl:text-[24px] leading-tight whitespace-nowrap">
                                        {item.description.split("\n").map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="col-span-1 lg:col-span-4"></div>
                    </div>

                </div>
            </section>


            {/* different industries different mindset */}
            <section className=" custom-container lg:mt-20 mt-5 pb-20">
                <div>
                    <h2 className="text-black mb-6 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">Different industries, different mindsets</h2>
                    <CarouselComponent />
                </div>
            </section>
            <section className="bg-[#F5F5F5]  custom-container xl:mt-12 mt-10 pb-20 pt-20">
                <div
                    className=""
                >
                    <FeaturedCarousel />
                </div>
            </section>
            <section className=' custom-container lg:mt-20 mt-10'>
                <InsightsCarousel />
            </section>

            <section className='xl:mt-40 relative'>
                <div className='group overflow-hidden'>
                    <div className='w-full'>
                        <Image quality={100} layout="responsive" priority width='100' height='100' className='w-full lg:!h-[500px] hidden xl:block transition-transform duration-500 transform group-hover:scale-110' alt='Life Section' src='/images/homepage/agentforce-banner.webp' />
                    </div>
                </div>
                <div className='bg-[#0077CE] hidden xl:block absolute p-10 text-white lg:w-[28%] lg:right-[8rem] lg:top-[-3.5rem] top-[392px]'>
                    <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">Agentforce</h2>
                    <p className='mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight'>Salesforce Agentforce is a robust platform that enables organizations to create, customize, and deploy autonomous AI agents across various business functions, including sales, marketing, customer service, and e-commerce.</p>
                    <Link href='/solutions/artificial-intelligence/salesforce-agentforce-consulting'>
                        <p className='mt-8'>Learn More <span> &#8594;</span></p>
                    </Link>
                </div>
            </section>
            <section className="pb-20  custom-container  pt-10 mt-20">
                <ContactForm className='xl:w-[85%] w-full leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]' title={'Take the next step to operational excellence with Salesforce Consulting.'} />
            </section>
        </div>
    )
}