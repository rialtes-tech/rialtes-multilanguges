"use client";
import ContactForm from "@/app/[locale]/components/contactform;
import LearnMore from "@/app/[locale]/components/learnMore";
import Seo from "@/app/[locale]/components/Seo";
;
import Image from "next/image";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
export default function Page() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Travel and Hospitality IT Solutions",
        "url": "https://www.rialtes.com/industry/travel-hospitality-it-solutions/",
        "description": "Rialtes delivers advanced travel and hospitality IT solutions powered by SAP, Salesforce, Oracle, and MuleSoft. Our services include AI-driven booking, loyalty management, guest personalization, real-time inventory and capacity management, and seamless back-end integration for the travel, transportation, and hospitality sectors.",
        "publisher": {
            "@type": "Organization",
            "name": "Rialtes",
            "url": "https://www.rialtes.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.rialtes.com/images/homepage/logo.svg"
            },
            "sameAs": [
                "https://www.linkedin.com/company/rialtes-technologies-llc/",
                "https://www.youtube.com/@rialtes"
            ]
        },
        "mainEntity": {
            "@type": "Service",
            "name": "Travel and Hospitality IT Solutions",
            "description": "Travel and hospitality solutions built on SAP, Salesforce, and AI to enable smart booking, personalization, loyalty, and operational efficiency.",
            "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "Singapore" }
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Travel and Hospitality Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "AI-Powered Booking and Itinerary Management",
                            "description": "Automated, real-time travel booking and personalized itinerary suggestions based on traveler behavior and preferences."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Dynamic Pricing & Yield Management",
                            "description": "AI-driven pricing optimization based on demand forecasting and real-time data."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Guest Experience & Loyalty Management",
                            "description": "Integrated loyalty platforms, gamification, and personalized engagement using Salesforce and SAP solutions."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Real-Time Inventory & Capacity Management",
                            "description": "Optimize rooms, flights, transport assets using SAP Data Cloud and AI-based forecasting tools."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "MuleSoft, Oracle & SAP Integration",
                            "description": "Seamless back-end integration of ERP, HCM, and CRM systems for unified workflows and data accuracy."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Cloud & Tableau Analytics",
                            "description": "Actionable insights via unified dashboards, real-time analytics, and predictive forecasting."
                        }
                    }
                ]
            }
        }
    }
    const endToEndData = [
        "Industry-specific advisory services to shape your digital roadmap.",
        "Custom solution architecture and design for unique TTH needs.",
        "Ready-to-use accelerators to fast-track deployment and reduce costs.",
        "Robust quality assurance and testing to ensure flawless performance.",
        "Agile implementation and integration using SAP, Salesforce, and MuleSoft.",
        "Continuous optimization and innovation post-go-live to keep you competitive."
    ]
    const industryData = [
        "Intelligent travel booking engines and reservation systems.",
        "Dynamic pricing and yield management tools.",
        "Property and guest experience management bolt-ons for hospitality.",
        "Transportation & fleet management solutions.",
        "Loyalty & rewards platform extensions for enhanced customer retention.",
    ]
    const optimizeData = [
        "Real-time inventory visibility for rooms, flights, seats, and transport assets.",
        "AI-powered demand forecasting to optimize pricing and availability.",
        "Dynamic pricing based on real-time trends and demand.",
        "Cross-channel inventory sync between direct and OTA bookings.",
        "Integrated capacity management to prevent overbooking and missed opportunities.",
    ]
    const personalizedData = [
        "Unified customer profiles for hyper-targeted campaigns.",
        "AI-driven segmentation to create unique travel and guest experiences.",
        "Multi-Channel Engagement: email, SMS, social, web, and mobile.",
        "Dynamic personalization based on travel preferences and behaviors.",
        "Automated pre-trip, in-trip, and post-trip journeys to keep customers engaged.",
    ]
    const rightTechData = [
        "Rialtes guides you in choosing, designing, and integrating solutions that truly work for your business.",
        "Combining SAP, Salesforce, Oracle, and MuleSoft for a 360-degree solution.",
        "AI, Automation, and Self-Service tools to improve efficiency and delight customers.",
        "Scalable, secure, and future-proof architectures designed for long-term growth.",
    ]
    const aiPoweredData = [
        "AI chatbots and virtual assistants for 24/7 traveler and guest support.",
        "Predictive maintenance for fleets and transport infrastructure.",
        "AI-Driven demand forecasting for dynamic pricing and resource allocation.",
        "Personalized travel and stay recommendations based on customer behavior.",
        "AI-powered fraud prevention and risk management."
    ]
    const quickCommereceData = [
        "Instant upgrades and cross-sell opportunities during booking.",
        "Mobile-first experiences for check-in, concierge, and service requests.",
        "Real-time pricing and availability to capture every opportunity.",
        "Automated upsell and cross-sell at key touchpoints.",
    ]
    const smarterServiceData = [
        "Agentforce AI-powered service bots for real-time issue resolution.",
        "Personalized agent interactions using complete customer context.",
        "Data Cloud unified traveler/guest profiles for personalized service.",
        "Predictive customer support to address issues before they arise.",
        "Streamlined case management for rapid resolutions."
    ]
    const elavateTravelData = [
        "End-to-end travel booking and reservation management.",
        "AI-Powered travel itinerary recommendations based on preferences.",
        "Disruption and delay management solutions for proactive traveler engagement.",
        "Integrated loyalty management and personalized rewards.",
        "Mobile-first traveler experience apps for bookings, check-ins, and updates."
    ]
    const flawlessData = [
        "SAP S/4HANA for finance, procurement, HR, and supply chain.",
        "Oracle ERP and HCM for complete enterprise process management.",
        "MuleSoft APIs for real-time connection between customer platforms and operational systems.",
        "End-to-end workflows from booking to billing, operations to customer service.",
        "Data synchronization to ensure consistency and accuracy."
    ]
    const futureReadyData = [
        "Multi-level loyalty programs tailored for TTH customers.",
        "AI-based customer recognition for personalized offers and experiences.",
        "Seamless loyalty redemption and upsell opportunities.",
        "Gamification strategies to boost engagement and retention.",
        "Partner program integrations with airlines, hotels, and transport services."
    ]
    const turnSectionData = [
        "Unified dashboards for customer insights, sales, and operations.",
        "Real-time analytics for demand, capacity, and financial performance.",
        "Predictive analytics to forecast trends and optimize pricing.",
        "Tableau-powered visualizations for interactive and actionable insights.",
        "Tableau-powered visualizations for interactive and actionable insights."
    ]
    return (
        <section>
            <div className="min-h-screen bg-white">
                <Seo
                    title="Travel and Hospitality IT Solutions | SAP and Salesforce | Rialtes"
                    description="Reimagine travel and hospitality IT solutions with AI, SAP, and Salesforce to enable real-time booking, loyalty programs, personalization, and efficiency."
                    keywords="home, website, welcome"
                    canonical="https://www.rialtes.com/industry/travel-hospitality-it-solutions/"
                />
                <Script
                    id="schema-travel"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
                {/* herosection */}
                <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
                    <div className="hidden md:block">
                        <Image
                            src="/images/industry/travel-transporation/hero-section-desktop-banner.webp"
                            alt="desktop banner"
                            fill
                            style={{ objectFit: "cover", objectPosition: "55% 20%" }}
                            priority
                            className="transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    {/* Mobile Image */}
                    <div className="block md:hidden">
                        <Image
                            src="/images/industry/travel-transporation/Mobile/hero-section-mob-banner.webp"
                            alt="mobile banner"
                            fill
                            style={{ objectFit: "cover", objectPosition: "5% 20%" }}
                            priority
                        />
                    </div>
                    <div className="relative h-full custom-container flex items-center">
                        <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                            <div className="col-span-12">
                                <h3 className="text-[#000000] text-[18px] md:text-[24px] font-bold max-lg:w-[80%] md:w-[50%] lg:w-full">
                                    Travel Transportation and Hospitality Industry
                                </h3>
                                <h1 className="text-[#00000] text-[26px] leading-[38px] md:text-[36px] md:leading-[50px] lg:text-[60px] lg:leading-[73px] mt-[11.5px] md:mt-[28.5px] max-md:w-[69%] max-[380px]:w-[85%]">
                                    Powering the Next-Gen <br className="hidden md:block" /> Travel, Transportation & <br className="hidden md:block" /> Hospitality Experience
                                </h1>
                            </div>
                            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                            </div>
                        </div>
                    </div>
                </section>
                {/* page description section */}
                <section className="custom-container xl:mt-[135px] mt-[42px]">
                    <div className="grid grid-cols-1 xl:grid-cols-12 w-full xl:gap-[47px] gap-y-[32px] md:w-[80%] xl:w-full">
                        <div className="xl:col-span-7 col-span-12">
                            <h2 className="xl:text-[54px] 2xl:text-[57px] leading-tight text-[26px] 2xl:w-[90%]">
                                Elevating Customer Journeys, Modernizing Operations, and Unlocking New Revenue with AI, SAP, and Salesforce
                            </h2>
                        </div>
                        <div className="xl:col-span-5 col-span-12">
                            <p className="xl:text-[22px] leading-tight text-[16px] font-normal">
                                At Rialtes, we specialize in transforming the Travel, Transportation, and Hospitality (TTH) industry through future-ready solutions built on SAP, Salesforce, MuleSoft, and Oracle. From airlines to hotels, cruise lines to logistics providers, our domain expertise enable businesses to deliver unforgettable customer experiences.
                                <br /> <br />
                                With our global presence in the US, Canada, India, and Singapore, and as a certified partner of SAP and Salesforce, Rialtes offers seamless advisory, implementation, and post-go-live services, powered by pre-built accelerators tailored for the TTH industry.
                            </p>
                        </div>

                    </div>
                </section>
                {/* end to end section */}
                <section className="custom-container md:pr-0  max-md:px-0 xl:mt-[156px] mt-[102px]">
                    <div className="custom-container  md:pl-0 bg-[#727272]">
                        <div className="grid grid-cols-1 md:grid-cols-12 w-full md:gap-[40px] gap-y-[34px] md:pt-[75px] pt-[40px]">
                            <div className="xl:col-span-7 md:col-span-6 col-span-12 text-[#FFFFFF] md:pl-[61px] md:order-1 order-2">
                                <h2 className="text-[26px] xl:text-[60px] leading-tight 2xl:w-[88%]">
                                    Why Choose Rialtes for End-to-End Industry-Focused Transformation:
                                </h2>
                                <p className="text-[16px] xl:text-[20px] leading-tight font-normal xl:mt-[48px] mt-[34px]">With Rialtes, you get a partner who understands the nuances of TTH and delivers measurable outcomes.</p>
                                <UnorderedList arrName={endToEndData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[48px] mt-[38px] pl-[20px]" liClassName="text-[16px] xl:text-[20px] leading-tight font-light" />
                            </div>
                            <div className="xl:col-span-5 md:col-span-6 col-span-12 md:order-2 order-1">
                                <div className="hidden md:block relative w-full h-full">
                                    <Image
                                        src="/images/industry/travel-transporation/end-to-end-desktop-img.webp"
                                        alt="end-to-end desktop image"
                                        className="h-full w-full"
                                        width={0}
                                        height={0}
                                        style={{ objectFit: "cover", objectPosition: "75% 20%" }}
                                        priority
                                    />
                                </div>
                                {/* Mobile Image */}
                                <div className="block md:hidden relative w-full h-[400px] sm:h-[600px] md:h-[700px]">
                                    <Image
                                        src="/images/industry/travel-transporation/Mobile/end-to-end-mob-img.webp"
                                        alt="end-to-end mobile image"
                                        fill
                                        style={{ objectFit: "cover", objectPosition: "80% 20%" }}
                                        priority
                                        className="h-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="xl:mt-[49px] mt-[42px] md:pl-[60px]">
                            <LearnMore />
                        </div>
                    </div>
                </section>
                {/* industry focused section */}
                <section className="text-[#ffffff] relative">
                    <div className=" lg:mt-[86px] mt-[46px]">
                        {/* Mobile View */}
                        <div className="block lg:hidden">
                            <Image
                                src="/images/industry/travel-transporation/Mobile/industry-focused-mob-img.webp"
                                alt="industry-focused-mob-img"
                                className="w-full h-auto"
                                priority
                                width={0}
                                height={0}
                            />
                            <div className="border-none px-[35px] pt-[42px] z-10  xl:pb-[144px] pb-[77px]" style={{
                                background: "#073259",
                            }}>
                                <h2 className="text-[26px] xl:text-[60px] leading-tight">
                                    Launch Fast and Stay Ahead with Industry-Focused Accelerators:
                                </h2>
                                <p className="text-[16px] xl:text-[20px] leading-tight font-normal xl:mt-[37px] mt-[14px]">
                                    Our purpose-built accelerators reduce time-to-market and ensure fast realization of value, so you can focus on your customers, and are designed for Travel, Transportation, and Hospitality cover:
                                </p>
                                <UnorderedList arrName={industryData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[48px] mt-[38px] pl-[20px]" liClassName="text-[16px] xl:text-[20px] leading-tight font-light" />
                                <div className="absolute bottom-[-20px] xl:pl-[61px] lg:pl-[26px]">
                                    <LearnMore bgcolor="#006FBE" />
                                </div>
                            </div>
                        </div>

                        {/* Desktop View */}
                        <div className="hidden lg:block w-full h-[980px] lg:h-[670px] xl:h-[1150px] 2xl:h-[1000px] 3xl:h-[950px]">
                            <Image
                                src="/images/industry/travel-transporation/industry-focused-desk-img.webp"
                                alt="industry-focused mobile image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                style={{ objectPosition: "35% 20%" }}
                                priority
                            />
                            <div className="absolute inset-0 lg:top-[-87px]">
                                <div className="custom-container w-full h-full flex items-start justify-end">
                                    <div className="relative 3xl:w-[48%] 2xl:w-[54%] xl:w-[48%] lg:w-[42%] w-[60%] h-full">
                                        <div
                                            className="absolute inset-0 z-0 pointer-events-none"
                                            style={{
                                                background: "#073259",
                                                mixBlendMode: "multiply",
                                                opacity: 0.93,
                                            }}
                                        />
                                        <div className="relative z-10 h-full flex flex-col justify-center px-[26px] xl:px-[61px] overflow-y-auto">
                                            <h2 className="text-[26px] 2xl:text-[60px] xl:text-[52px] leading-tight">
                                                Launch Fast and Stay Ahead with Industry-Focused Accelerators:
                                            </h2>
                                            <p className="text-[16px] xl:text-[20px] leading-tight font-normal xl:mt-[37px] mt-[14px]">
                                                Our purpose-built accelerators reduce time-to-market and ensure fast realization of value, so you can focus on your customers, and are designed for Travel, Transportation, and Hospitality cover:
                                            </p>
                                            <UnorderedList arrName={industryData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[48px] mt-[38px] pl-[20px]" liClassName="text-[16px] xl:text-[20px] leading-tight font-light" />
                                        </div>
                                        <div className="absolute bottom-[-20px] xl:pl-[61px] lg:pl-[26px]">
                                            <LearnMore bgcolor="#006FBE" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* elevate travel section */}
                <section className="custom-container lg:pr-0 max-lg:px-0 lg:mt-[120px] mt-[10px]">
                    <div className="grid lg:grid-cols-12 grid-cols-1">
                        <div className="lg:col-span-5 col-span-12 lg:order-1 order-2">
                            <div className="bg-[#006FBE] text-[white] lg:py-[55px] lg:px-[64px] lg:w-[500px] xl:w-[600px] 3xl:w-[800px] 2xl:w-[700px] max-lg:px-[36px] pb-[42px] pt-[150px] lg:z-20 relative">
                                <h2 className="text-[26px] xl:text-[54px] 2xl:text-[60px] leading-tight">
                                    Elevate the Travel Experience
                                </h2>
                                <h3 className="text-[22px] xl:text-[36px] leading-tight font-semibold xl:mt-[37px] mt-[14px]">
                                    Tailored Solutions for Travel Industry Leaders
                                </h3>
                                <p className="text-[16px] xl:text-[20px] leading-tight font-normal xl:mt-[40px] mt-[26px]  md:w-[70%] lg:w-[90%]">
                                    With Rialtes, every journey becomes a brand-defining moment, empowering travel businesses to create seamless, hyper-personalized experiences:
                                </p>
                                <UnorderedList arrName={elavateTravelData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[37px] mt-[26px] pl-[20px] md:w-[90%] lg:w-[90%]" liClassName="text-[16px] xl:text-[20px] leading-tight font-light" />
                            </div>
                        </div>
                        <div className="lg:col-span-7 col-span-12 lg:order-2 order-1 max-lg:px-[36px]">
                            {/* Desktop Image */}
                            <div className="hidden lg:block relative w-full h-full top-[-52px] right-0 z-0">
                                <Image
                                    src="/images/industry/travel-transporation/elavate-travel-desk-img.webp"
                                    alt="elavate-travel desktop image"
                                    className="w-full h-full"
                                    width={0}
                                    height={0}
                                    style={{ objectFit: "cover", objectPosition: "45% 20%" }}
                                    priority
                                />
                            </div>
                            {/* Mobile Image */}
                            <div className="block lg:hidden w-full h-[500px] sm:h-[700px] md:h-[750px] relative">
                                <Image
                                    src="/images/industry/travel-transporation/Mobile/elavate-travel-mob-img.webp"
                                    alt="elavate-travel mobile image"
                                    width={0}
                                    height={0}
                                    style={{ objectFit: "cover", objectPosition: "20% 20%" }}
                                    priority
                                    className="h-full w-full absolute top-[110px] z-20"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* personalized engagement section */}
                <section className="xl:mt-0 mt-[65px] w-full h-full relative">
                    {/*  Desktop */}
                    <div className="hidden md:block h-full">
                        <Image
                            src="/images/industry/travel-transporation/personalized-img-desk1.webp"
                            alt="personalized desktop background"
                            width={0}
                            height={0}
                            className="h-full w-full"
                            priority
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    {/*  Mobile */}
                    <div className="block md:hidden h-full">
                        <Image
                            src="/images/industry/travel-transporation/Mobile/personalized-img-mob.webp"
                            alt="personalized mobile background"
                            className="h-full w-full"
                            priority
                            width={0}
                            height={0}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="bg-[#EDECE8] mt-[-60px] sm:mt-[-90px] md:mt-0 xl:mt-[-54px] pb-[74px]">
                        <div className="custom-container">
                            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[80px] xl:gap-[40px]">
                                <div>
                                    <h2 className="text-[26px] 2xl:text-[60px] xl:text-[50px] leading-tight">
                                        Personalized Engagement with Salesforce Marketing Cloud + Travel & Hospitality Cloud
                                    </h2>
                                    <p className="text-[16px] xl:text-[20px] leading-tight font-normal xl:mt-[53px] mt-[26px] xl:w-[90%]">Unlock deeper connections and drive repeat business through intelligent marketing:</p>
                                </div>
                                <div>
                                    <UnorderedList arrName={personalizedData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc md:mt-[0px] mt-[38px] pl-[20px]" liClassName="text-[16px] xl:text-[20px] leading-tight font-normal" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute md:left-1/2 bottom-[-26px] max-md:ml-[36px] md:ml-[40px] lg:ml-[36px]">
                        <LearnMore />
                    </div>
                </section>
                {/* optimize section */}
                <section className="relative xl:mt-[114px] mt-[79px]  max-md:px-0">
                    <div className="custom-container max-md:px-0">
                        {/* Mobile Background */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/industry/travel-transporation/Mobile/optimize-asset-mob-img.webp"
                                alt="mobile background"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop Background */}
                        <div className="hidden md:block w-full 3xl:h-[950px] 2xl:h-[1050px] xl:h-[1070px] lg:h-[700px] md:h-[750px]">
                            <Image
                                src="/images/industry/travel-transporation/optimize-asset-desk-img.webp"
                                alt="mobile background"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                style={{ objectPosition: '25% 20%' }}
                                priority
                            />
                        </div>
                    </div>
                    <div className="z-10 md:pt-[80px] md:pb-[80px] pb-[79px] md:pr-[36px] md:absolute md:top-0">
                        <div className="custom-container max-md:px-0">
                            <div className="grid md:grid-cols-12 grid-cols-1 text-[#FFFFFF]">
                                <div className="md:col-span-6 col-span-12"></div>
                                <div className="md:col-span-6 col-span-12  max-md:bg-[#5DA8D3]  max-md:pt-[31px]  max-md:pb-[68px] max-md:px-[36px]">
                                    <h2 className="text-[26px] xl:text-[54px] leading-tight">
                                        Optimize Every Asset
                                    </h2>
                                    <h3 className="text-[22px] xl:text-[42px] leading-tight font-semibold xl:mt-[46px] mt-[26px]">
                                        Real-Time Inventory and Capacity Management with Data Cloud
                                    </h3>
                                    <p className="text-[16px] xl:text-[20px] leading-tight font-normal xl:mt-[37px] mt-[14px]">
                                        Maximize utilization, reduce wastage, and increase revenue:
                                    </p>
                                    <UnorderedList arrName={optimizeData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[37px] mt-[38px] pl-[20px]" liClassName="text-[16px] xl:text-[20px] leading-tight font-light" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute md:left-1/2 md:bottom-[-26px] bottom-[60px]  max-md:ml-[36px]">
                        <LearnMore />
                    </div>
                </section>
                {/* driving repeat section */}
                <section className="xl:mt-[79px] md:mt-[61px] mt-0 custom-container max-md:px-0 md:pl-0">
                    <div className="grid md:grid-cols-12 grid-cols-1">
                        <div className="grid md:col-span-6 lg:col-span-8 custom-container md:pr-0 md:pt-[78px] pt-[44px] bg-[#EBEBEB] md:order-1 order-2">
                            <div className="md:pr-[40px]">
                                <h2 className="text-[26px] xl:text-[60px] leading-tight w-full">
                                    Driving Repeat Business
                                </h2>
                                <h3 className="text-[22px] xl:text-[42px] leading-tight font-semibold xl:mt-[18px] mt-[22px]">
                                    Future-Ready Loyalty Management Solutions
                                </h3>
                                <p className="text-[16px] xl:text-[20px] leading-tight font-normal xl:mt-[40px] mt-[20px] 2xl:w-[80%]">
                                    Keep your guests and travelers coming back for more by building emotional loyalty, not just transactional.
                                </p>
                                <UnorderedList arrName={futureReadyData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[37px] mt-[38px] pl-[20px] lg:w-[90%]" liClassName="text-[16px] xl:text-[20px] leading-tight font-normal" />
                                <div className="mt-[44px]">
                                    <LearnMore />
                                </div>
                            </div>
                        </div>
                        <div className="grid md:col-span-6 lg:col-span-4 relative md:order-2 order-1">
                            {/* Mobile Background */}
                            <div className="block md:hidden absolute bottom-0 w-full h-1/2 bg-[#EBEBEB] z-10 pointer-events-none" />
                            <div className="block md:hidden w-full h-full px-[36px] relative z-20">
                                <Image
                                    src="/images/industry/travel-transporation/Mobile/driving-repeat-mob-img.webp"
                                    alt="driving-repeat mobile background"
                                    className="w-full h-full object-cover"
                                    width={0}
                                    height={0}
                                    priority
                                />
                            </div>
                            {/* Desktop Background */}
                            <div className="hidden md:block absolute top-0 left-0 w-1/2 h-full bg-[#EBEBEB] z-10 pointer-events-none" />
                            <div className="hidden md:flex w-full items-center z-20">
                                <Image
                                    src="/images/industry/travel-transporation/driving-repeat-desk-img.webp"
                                    alt="driving-repeat mobile background"
                                    className="w-full h-[80%] py-auto object-cover"
                                    width={0}
                                    height={0}
                                    style={{ objectPosition: '85% 20%' }}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* flawless backend section  */}
                <section className="custom-container xl:mt-[75px] mt-[60px] lg:pr-0 max-md:px-0">
                    <div className="bg-[#073259] custom-container md:pl-0">
                        <div className="grid md:grid-cols-12 grid-cols-1 lg:gap-[65px] md:gap-[40px]  gap-y-[30px] md:pt-[94px] md:pb-[103px] pb-[55px]">
                            <div className="md:col-span-6 col-span-12">
                                {/* Mobile img */}
                                <div className="block md:hidden w-full h-full">
                                    <Image
                                        src="/images/industry/travel-transporation/Mobile/flawless-backend-mob-img.webp"
                                        alt="flawless-backend mobile background"
                                        className="w-full h-full object-cover"
                                        width={0}
                                        height={0}
                                        priority

                                    />
                                </div>
                                {/* Desktop img */}
                                <div className="hidden md:block w-full h-full">
                                    <Image
                                        src="/images/industry/travel-transporation/flawless-backend-desk-img.webp"
                                        alt="flawless-backend mobile background"
                                        className="w-full h-full object-cover"
                                        width={0}
                                        height={0}
                                        style={{ objectPosition: '25% 20%' }}
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="text-[#ffffff] md:col-span-6 col-span-12">
                                <h2 className="text-[26px] xl:text-[54px] leading-tight">
                                    Flawless Back-End Connectivity
                                </h2>
                                <h3 className="text-[22px] xl:text-[42px] leading-tight font-semibold xl:mt-[29px] mt-[20px]">
                                    SAP, Oracle, MuleSoft Integration
                                </h3>
                                <p className="text-[16px] xl:text-[20px] leading-tight font-normal xl:mt-[29px] mt-[26px]">
                                    Integrate your front-end experience with robust back-end operations:
                                </p>
                                <UnorderedList arrName={flawlessData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[29px] mt-[32px] pl-[20px]" liClassName="text-[16px] xl:text-[20px] leading-tight font-light" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* turn data section */}
                <section className="relative bg-[url('/images/industry/travel-transporation/Mobile/turn-data-mob-bg.webp')] 
                               md:bg-[url('/images/industry/travel-transporation/turn-data-desk-bg.webp')] bg-cover bg-center bg-no-repeat lg:mt-[76px] mt-[68px]">
                    <div className="custom-container h-full flex items-center max-md:px-0">
                        <div className="relative w-full max-md:mt-[162px]  max-md:mx-auto md:w-1/2 xl:w-1/2">
                            <div className="absolute inset-0 bg-[#363636] mix-blend-multiply z-0"></div>
                            <div className="relative z-10 text-white xl:pt-[49px] xl:pb-[77px] xl:px-[77px] pt-[55px] pb-[51px] px-[36px]">
                                <h2 className="text-[26px] xl:text-[54px] leading-tight">
                                    Turn Data into Action
                                </h2>
                                <h3 className="text-[22px] xl:text-[42px] leading-tight font-semibold xl:mt-[32px] mt-[23px]">
                                    Data Visualization with Tableau and Data Cloud
                                </h3>
                                <p className="text-[16px] xl:text-[20px] leading-tight font-normal xl:mt-[32px] mt-[23px]">
                                    Enable data-driven leadership and operational excellence:
                                </p>
                                <UnorderedList arrName={turnSectionData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[29px] mt-[32px] pl-[20px] lg:w-[90%]" liClassName="text-[16px] xl:text-[20px] leading-tight font-light" />
                                <p className="text-[16px] xl:text-[20px] leading-tight font-normal xl:mt-[63px] mt-[32px] md:ml-[10px]">
                                    Let data lead the way to better decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* why the right technology section */}
                <section className="xl:mt-[86px] mt-[53px] relative">
                    {/* Mobile Background */}
                    <div className="block md:hidden w-full h-full">
                        <Image
                            src="/images/industry/travel-transporation/Mobile/right-technology-mob-img.webp"
                            alt="right-technology mobile background"
                            className="w-full h-full object-cover"
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                    {/* Desktop Background */}
                    <div className="hidden md:block w-full h-full">
                        <Image
                            src="/images/industry/travel-transporation/right-technology-desk-img.webp"
                            alt="right-technology mobile background"
                            className="w-full h-full object-cover"
                            width={0}
                            height={0}
                            style={{ objectPosition: '25% 20%' }}
                            priority
                        />
                    </div>
                    <div className="custom-container text-[#ffffff] md:mt-[-16%] mt-[-40%] relative">
                        <div className="bg-[#006FBE] lg:px-[70px] px-[26px]">
                            <div className="grid lg:grid-cols-2 grid-cols-1 lg:py-[77px] pt-[38px] pb-[55px] lg:gap-[80px] xl:gap-[40px]">
                                <div>
                                    <h2 className="text-[26px] lg:text-[36px] xl:text-[60px] leading-tight lg:mt-[20px] xl:mt-0">
                                        Why the Right Technology Partner Makes All the Difference
                                    </h2>
                                </div>
                                <div>
                                    <p className="text-[16px] xl:text-[20px] leading-tight font-normal lg:mt-0 mt-[17px]">
                                        Choosing the right solution isn’t just about software, it’s about business outcomes:
                                    </p>
                                    <UnorderedList arrName={rightTechData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[37px] mt-[38px] pl-[20px]" liClassName="text-[16px] xl:text-[20px] leading-tight font-light" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Ai powered section */}
                <section className="xl:mt-[102px] mt-[64px] custom-container max-md:px-0">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[20px] xl:gap-[40px] md:gap-[60px] gap-y-[44px]">
                        <div className="md:order-1 order-2 max-md:px-[36px] 2xl:col-span-6 md:col-span-6  lg:col-span-7 col-span-12 lg:pt-[20px] xl:pt-0">
                            <h2 className="xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px]">
                                AI-Powered Transformation
                            </h2>
                            <h3 className="xl:text-[42px] text-[22px] font-semibold xl:mt-[34px] mt-[26px] leading-[27px] xl:leading-[52px] w-full">
                                How AI is Revolutionizing TTH
                            </h3>
                            <p className=" xl:text-[22px] text-[16px] leading-[19px] xl:leading-[30px] font-normal xl:mt-[42px] mt-[20px]">
                                Rialtes helps you adopt AI in ways that matter to your customers and your bottom line.
                            </p>
                            <UnorderedList arrName={aiPoweredData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[44px] mt-[26px] pl-[20px]" liClassName="text-[16px] xl:text-[20px] leading-tight font-normal" />
                        </div>
                        <div className="md:order-2 order-1 2xl:col-span-6 md:col-span-6 lg:col-span-5 col-span-12">
                            {/* Mobile Background */}
                            <div className="block md:hidden w-full h-full">

                                <Image
                                    src="/images/industry/travel-transporation/Mobile/ai-powered-mob-img.webp"
                                    alt="mobile background"
                                    className="w-full h-full object-cover"
                                    width={0}
                                    height={0}
                                    priority
                                />
                            </div>
                            {/* Desktop Background */}
                            <div className="hidden md:block w-full h-full">
                                <Image
                                    src="/images/industry/travel-transporation/ai-powered-desk-img.webp"
                                    alt="mobile background"
                                    className="w-full h-full object-cover"
                                    width={0}
                                    height={0}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="xl:mt-[20px] mt-[36px] max-md:ml-[36px]">
                        <LearnMore />
                    </div>
                </section>
                {/* quick commerce section */}
                <section className="xl:mt-[102px] mt-[64px] custom-container max-lg:px-0 lg:pl-0">
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-[20px] xl:gap-[60px] lg:gap-[60px] gap-y-[44px]">
                        <div className="order-2 max-lg:px-[36px] lg:col-span-5 col-span-12 lg:pt-[20px] xl:pt-0">
                            <h2 className="2xl:text-[60px] xl:text-[54px] text-[26px] leading-[32px] xl:leading-[73px]">
                                Quick Commerce & Instant Experiences
                            </h2>
                            <h3 className="xl:text-[42px] text-[22px] font-semibold xl:mt-[34px] mt-[26px] leading-[27px] xl:leading-[52px] w-full">
                                Real-Time Travel and Hospitality with SAP & Salesforce
                            </h3>
                            <p className=" xl:text-[22px] text-[16px] leading-[19px] xl:leading-[30px] font-normal xl:mt-[42px] mt-[20px]">
                                Partner with Rialtes to offer experiences as fast and personalized as your customers expect.SAP and Salesforce enabling real-time bookings and confirmations.
                            </p>
                            <UnorderedList arrName={quickCommereceData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[44px] mt-[26px] pl-[20px]" liClassName="text-[16px] xl:text-[20px] leading-tight font-normal" />
                            <div className="xl:mt-[40px] mt-[36px]">
                                <LearnMore />
                            </div>
                        </div>
                        <div className="order-1 lg:col-span-7 col-span-12">
                            {/* Mobile Background */}
                            <div className="block lg:hidden w-full h-full">
                                <Image
                                    src="/images/industry/travel-transporation/Mobile/quick-commerce-mob-img.webp"
                                    alt="quick-commerce mobile background"
                                    className="w-full h-full object-cover"
                                    width={0}
                                    height={0}
                                    priority
                                />
                            </div>
                            {/* Desktop Background */}
                            <div className="hidden lg:block w-full h-full">
                                <Image
                                    src="/images/industry/travel-transporation/quick-commerce-desk-img.webp"
                                    alt="quick-commerce mobile background"
                                    className="w-full h-full object-cover"
                                    width={0}
                                    height={0}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* smarter service section */}
                <section className="md:pt-[98px] md:mt-0 mt-[67px] custom-container max-md:px-0 bg-[#F5F5F5]">
                    <h2 className="2xl:text-[60px] xl:text-[56px] text-[26px] md:block hidden leading-tight">
                        Smarter Service & Support
                    </h2>
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[20px] xl:mt-[48px] xl:gap-[40px] 2xl:gap-[80px] md:gap-[60px] gap-y-[44px]">
                        <div className="md:order-1 order-2 max-md:px-[36px] 2xl:col-span-5 lg:col-span-7 md:col-span-6 col-span-12 md:pt-[20px] xl:pt-0">
                            <h2 className="xl:text-[60px] text-[26px] md:hidden leading-tight font-normal">
                                Smarter Service & Support
                            </h2>
                            <h3 className="xl:text-[42px] text-[22px] font-semibold md:mt-0 mt-[26px] leading-[27px] xl:leading-[52px] w-full">
                                Agentforce and Data Cloud in TTH
                            </h3>
                            <p className="xl:text-[22px] text-[16px] leading-[19px] xl:leading-[30px] font-normal xl:mt-[34px] mt-[23px]">
                                Deliver service that makes every customer feel valued and understood.
                            </p>
                            <UnorderedList arrName={smarterServiceData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[44px] mt-[22px] pl-[20px]" liClassName="text-[16px] xl:text-[20px] leading-tight font-normal" />
                            <div className="xl:mt-[36px] mt-[36px]">
                                <LearnMore />
                            </div>
                        </div>
                        <div className="md:order-2 order-1 2xl:col-span-7 lg:col-span-5 md:col-span-6 col-span-12">
                            {/* Mobile Background */}
                            <div className="block md:hidden w-full h-full px-[36px]">

                                <Image
                                    src="/images/industry/travel-transporation/Mobile/smarter-service-mob-img.webp"
                                    alt="smarter-service mobile background"
                                    className="w-full h-full object-cover"
                                    width={0}
                                    height={0}
                                    priority
                                />
                            </div>
                            {/* Desktop Background */}
                            <div className="hidden md:block w-full h-full">
                                <Image
                                    src="/images/industry/travel-transporation/smarter-service-desk-img.webp"
                                    alt="smarter-service mobile background"
                                    className="w-full h-full object-cover"
                                    width={0}
                                    height={0}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact Form */}
                <section className="custom-container xl:mt-[104px] xl:mb-[166px] mt-[45px] mb-[45px]">
                    <ContactForm title={'Ready to Redefine the Future of Travel, Transportation & Hospitality?'} subtitle="Whether you’re an airline, hotel chain, cruise line, rideshare, or logistics provider, Rialtes can help you lead in a competitive world with technology, strategy, and execution that deliver results." subtitle1=" Contact Rialtes today to start your transformation journey — because great experiences start with great partners." className={"xl:w-[80%]"} />
                </section>
            </div>
        </section>
    )
}