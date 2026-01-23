"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import FeaturedCarousel from '../../../components/servicesFeaturedCarousel';
import ExploreMoreCarousel from '../../../components/servicesExploreMoreCarousel';
import BreadCrumbs from '../../../components/BreadCrumbs'
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Salesforce Revenue Cloud Consulting Services",
    "url": "https://www.rialtes.com/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting/",
    "description": "Rialtes provides Salesforce Revenue Cloud Consulting services to streamline quote-to-cash, automate pricing, improve billing, and integrate revenue operations for business growth.",
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
        "name": "Salesforce Revenue Cloud Consulting",
        "serviceType": "Revenue Operations Optimization, CPQ Implementation, Billing Integration",
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
            "audienceType": "Revenue Operations Leaders, Sales Directors, Finance Teams, CPQ Admins, CRM Managers"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Salesforce Revenue Cloud Services by Rialtes",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Revenue Cloud Consulting",
                        "description": "Tailored Revenue Cloud solutions for pricing, quoting, billing, and revenue recognition optimization."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "System Audit and Health Check",
                        "description": "Review and optimize your existing Revenue Cloud configuration for better performance and stability."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Setup and Configuration",
                        "description": "Streamline CPQ and billing processes through efficient platform setup and customization."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Data Migration",
                        "description": "Seamless transition from legacy systems to Revenue Cloud with secure CPQ and billing data migration."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Integration and Upgrades",
                        "description": "Integrate Revenue Cloud with Sales Cloud, ERPs, and CRMs for unified revenue management."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Support and Maintenance",
                        "description": "Post-implementation support, upgrades, admin help, and issue resolution for Salesforce Revenue Cloud."
                    }
                }
            ]
        }
    }
}
export default function HealthCloud() {
    const revenueStats = [
        {
            value: "40%",
            description: "Faster sales cycles due to automated CPQ",
            widthClasses: "xl:w-[240px] lg:w-[220px] 2xl:w-[260px] 4xl:w-[312px]",
        },
        {
            value: "30%",
            description: "Boost in quote-to-cash efficiency",
            widthClasses: "xl:w-[220px] lg:w-[200px] 2xl:w-[240px] 4xl:w-[312px]",
        },
        {
            value: "20-25%",
            description: "Reduction in administrative costs",
            widthClasses: "xl:w-[220px] lg:w-[200px] 2xl:w-[240px] 4xl:w-[312px]",
        },
    ];
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
                title="Salesforce Revenue Cloud Implementation Partner | Rialtes"
                description="Rialtes, a trusted Salesforce Revenue Cloud implementation partner, offers tailored solutions to transform sales, billing, and revenue operations."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting/"
            />
            <Script
                id="schema-revenue-cloude"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
                
            {/* breadcrumb */}
            <BreadcrumbSchema currPage="Salesforce Revenue Cloud" />

            <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px]  ">
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
                        style={{ objectFit: "cover", objectPosition: "55% 20%" }}
                        fill
                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                        <div className="col-span-12 xl:col-span-7 lg:col-span-9">
                            <h3 className="text-white text-[14px] md:text-[20px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 4xl:text-[24px] font-bold">
                                Salesforce Revenue Cloud
                            </h3>
                            <h2 className="text-white   text-[24px]  md:text-[30px]  lg:text-[50px]  mt-[11.5px] md:mt-[10px] xl:text-[40px] 2xl:text-[50px] 4xl:text-[60px] w-[300px] md:w-[370px] lg:w-[600px] xl:w-[500px] 2xl:w-[650px] 4xl:w-[778px] leading-tight ">
                                Manage Revenue Streams and Customer Relationships in One Place
                            </h2>
                            <Image
                                src="/images/salesforce-consulting-services/salesforce-partner.webp"
                                alt="SAP Partner Logo"
                                width={0}
                                height={0}
                                priority
                                className="mt-5 w-[120px] md:w-[150px] lg:w-[190px] xl:w-[180px] 2xl:w-[240px] 4xl:w-[300px]" />
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>
            <section className="custom-container">
                {/* breadcrumb */}
                <BreadCrumbs currPage="Salesforce Revenue Cloud" />
                <div className="py-8 bg-white">
                    <div className="2xl:pr-72 xl:pr-40 md:pr-20 4xl:pr-20">
                        <div className="flex flex-col lg:flex-row items-center py-6 ">
                            <div className="flex flex-col  xl:mb-0 mb-4 ">
                                <h1 className=" md:pb-0 pb-4 2xl:text-[56px] xl:text-[52px] xl:w-[650px] 2xl:w-[700px]  4xl:text-[60px] 4xl:w-[740px] lg:text-[42px] lg:w-[520px] leading-tight text-[26px] md:text-[30px] ">Simplify your Company’s Revenue Generation with Revenue Cloud</h1>
                            </div>
                            <div className="flex flex-col w-full ">
                                <p className="text-[#000000]  2xl:text-[18px] 2xl:w-[520px] 4xl:text-[20px] 4xl:w-[580px]  xl:text-[16px] xl:w-[460px] lg:text-[14px] lg:w-[400px] md:text-[18px] 4xl:pl-10 2xl:pl-8 xl:pl-8 lg:pl-6"> Leverage the expertise of our Salesforce professionals to implement a highly effective revenue management solution. The comprehensive suite of cloud-based software solutions is designed to help businesses optimize and streamline their entire revenue lifecycle.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:mt-20 custom-container py-10">
                <h3 className="text-[24px] md:text-[24px] lg:text-[30px] xl:text-[34px] 2xl:text-[38px] 4xl:text-[40px] leading-tight  font-normal">Revenue Cloud Process Flow</h3>
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
                <h2 className="text-[24px] md:text-[30px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px] 4xl:text-[60px] leading-tight   font-normal">Streamline your Quote-to-Cash Process</h2>
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:mt-10 gap-5">
                    {salesForce.map((sales) => {
                        return (
                            <div key={sales.id}>
                                <div className="mt-10">
                                    <Image
                                        src={sales.imageUrl}
                                        alt={`${sales.title} image`}
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
                                <h4 className="mt-5 text-[18px] md:text-[22px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] 4xl:text-[30px] w-[200px] md:w-[210px] lg:w-[160px] xl:w-[180px] 2xl:w-[220px] 4xl:w-[256px]">{sales.title}</h4>
                            </div>
                        )
                    })}

                </div>
                <h2 className="text-[24px] md:text-[30px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px] 4xl:text-[60px] leading-tight  font-normal mt-20 lg:mt-40 2xl:w-[980px] 4xl:w-[1084px] xl:w-[860px] lg:w-[730px] ">Salesforce Revenue Cloud Services for Optimized Sales Pipeline</h2>
                <div className="my-10">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-10 gap-5">
                        {salesForce2.map((sales) => {
                            return (
                                <div key={sales.id} className="border-2 p-10 hover:bg-[#D9F2FF] hover:border-transparent transition-all duration-300">
                                    <h3 className="mt-5 text-[#1F3F69] text-[22px] md:text-[24px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 4xl:text-[30px] md:w-[210px] lg:w-[230px] xl:w-[240px] 2xl:w-[260px] 4xl:w-[301px]">{sales.title}</h3>
                                    <p className="mt-5 text-[16px] md:text-[18px] lg:text-[14px] xl:text-[18px] 2xl:text-[20px] 4xl:text-[22px] 4xl:w-[304px] 2xl:w-[290px] xl:w-[260px] lg:w-[200px]">{sales.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <LearnMore />
                </div>
            </section>
            {/* Reduce Revenue Pitfalls, Supercharge Your Sales Funnel */}
            <section className="bg-[#fffafa] py-6 " >
                <div className="custom-container">
                    <div>
                        <div className="py-10">
                            <h2 className="pb-4 text-black text-[24px] md:text-[30px] lg:text-[30px] xl:text-[34px] 2xl:text-[38px] 4xl:text-[40px] leading-tight font-normal 2xl:w-[1080px] 4xl:w-[1190px] xl:w-[1000px] lg:w-[990px]">
                                Reduce Revenue Pitfalls, Supercharge Your Sales Funnel
                            </h2>
                            <p className="pb-8 text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[18px] 4xl:text-[20px]">
                                Businesses using Revenue Cloud have reported:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {revenueStats.map((item, index) => (
                                    <div key={index} className={`flex flex-col ${item.widthClasses}`}>
                                        <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2 2xl:text-[56px] 4xl:text-[70px] xl:text-[50px] md:text-[40px] lg:text-[40px]">
                                            {item.value}
                                        </h2>
                                        <p className="text-black 4xl:text-[24px] 2xl:text-[20px] lg:text-[16px] md:text-[20px] xl:text-[18px]">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#F5F5F5] py-20 ">
                <div className="custom-container xl:pr-0">
                    <FeaturedCarousel />
                </div>
            </section>
            <section className='custom-container md:!pr-0 lg:mt-20 bg-[#808080] mt-10 py-20'>
                <ExploreMoreCarousel />
            </section>
            <section className="custom-container lg:mt-20 pb-20 mt-10">
                <ContactForm />
            </section>
        </section>
    )
}
