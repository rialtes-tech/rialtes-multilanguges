"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/components/Seo";
import LearnMore from "@/app/components/learnMore";
import Script from "next/script";
import UnorderedList from "@/app/components/unorderedList";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Salesforce Marketing Cloud Consulting & Implementation Services",
    "alternateName": "Advantage+ Salesforce Marketing Cloud Services",
    "url": "https://www.rialtes.com/solutions/salesforce-marketing-cloud",
    "description": "Salesforce Marketing Cloud Consulting & Implementation Services by Rialtes’ Advantage+ deliver AI-powered, personalized journeys across channels—driving real ROI.",
    "provider": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg",
        "sameAs": [
            "https://www.linkedin.com/company/rialtes-technologies-llc",
            "https://x.com/Rialtestech",
            "https://www.youtube.com/@rialtes"
        ]
    },
    "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "Singapore" },
        { "@type": "Country", "name": "India" },
        { "@type": "Continent", "name": "Europe" }
    ],
    "serviceType": "Salesforce Marketing Cloud Strategy, Setup, Personalization, Integration, and Support",
    "category": "Salesforce Marketing Cloud Services",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Advantage+ Marketing Cloud Services Catalog",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Advisory & Strategy Development",
                    "description": "Align marketing goals with Salesforce Marketing Cloud capabilities using a tailored roadmap, industry insights, and future-ready strategies."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Implementation & Configuration",
                    "description": "Deploy Salesforce Marketing Cloud rapidly with custom configurations that match your audience engagement needs, campaign goals, and data models."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Creative & Design Services",
                    "description": "Design responsive email templates, landing pages, and personalized customer journeys that elevate brand experience across digital channels."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Quality Assurance & Optimization",
                    "description": "Perform multi-channel testing, validate automations, and optimize journey performance with QA checkpoints across the entire marketing funnel."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Integration & Data Readiness",
                    "description": "Enable seamless integration with Salesforce Clouds, CRMs, ERPs, and third-party platforms while preparing data for real-time personalization."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Post Go-Live Support & Analytics",
                    "description": "Get continuous support, campaign monitoring, training, and advanced analytics to measure ROI, improve engagement, and enhance scalability."
                }
            }
        ]
    },
    "additionalProperty": [
        {
            "@type": "PropertyValue",
            "name": "Deep Salesforce Marketing Cloud Expertise",
            "value": "Hands-on experience across Journey Builder, Email Studio, Mobile Studio, Datorama, and more."
        },
        {
            "@type": "PropertyValue",
            "name": "Driving Business Growth with Salesforce Marketing Cloud",
            "value": "Support for scalable B2B/B2C marketing, segmentation, and ROI-focused campaigns."
        },
        {
            "@type": "PropertyValue",
            "name": "Reimagine B2B & B2C Marketing with AI and Data Cloud",
            "value": "Deliver real-time personalization, predictive insights, and AI-optimized journeys at scale."
        }
    ]
}
const latestServices = [
    {
        id: 1,
        title: "Advisory & Strategy Development",
        description: "Align your marketing objectives with scalable Salesforce solutions.",
    },
    {
        id: 2,
        title: "Implementation & Configuration",
        description: "Rapid deployment tailored to your unique customer engagement needs.",
    },
    {
        id: 3,
        title: "Creative & Design Services",
        description: "Beautiful, responsive email templates, landing pages, and customer journeys.",
    },
    {
        id: 4,
        title: "Quality Assurance & Optimization",
        description: "End-to-end testing to ensure seamless multi-channel campaigns.",
    },
    {
        id: 5,
        title: "Integration & Data Readiness",
        description: "Connect Salesforce Marketing Cloud with Sales Cloud, Service Cloud, CRM, ERP, and third-party apps.",
    },
    {
        id: 6,
        title: "Post Go-Live Support & Analytics",
        description: "Ongoing optimization, training, and advanced analytics for continuous ROI.",
    },
];
const moreSalesforce = [
    {
        title: "Salesforce Service Cloud",
        description: "Elevate customer support.",
    },
    {
        title: "Salesforce Community Cloud",
        description: "Build vibrant customer and partner portals.",
    },
    {
        title: "Agentforce Campaign Management",
        description: "AI-powered campaign orchestration.",
    },
    {
        title: "Salesforce Data Cloud",
        description: "Advanced customer segmentation and real-time data insights.",
    },
];
const ServicesCard = ({ services }) => (
    <div className="flex flex-col border border-[#707070] p-6 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
        <div className="flex-grow flex flex-col">
            <h3 className="mb-[15px] md:mb-[25px]  font-semibold  text-[#0A6BB8] 4xl:text-[30px] text-[20px] leading-tight">{services.title}</h3>
            <p className='md:mb-[15px] mb-0  4xl:text-[24px] text-[16px] font-normal pr-12 xl:pr-0 4xl:pr-0 leading-tight'>{services.description}</p>
        </div>
    </div>
);
const SalesforceExplore = () => {
    return (
        <section className="bg-[#EAF8FD] pt-16 pb-16 xl:pb-0 4xl:pb-0">
            <div className="custom-container">
                <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] font-light mb-12">
                    Explore More with Salesforce
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 text-left">
                    {moreSalesforce.map((service, index) => (
                        <div key={index} className="flex flex-col items-start justify-between h-full">
                            <div>
                                <h3 className="text-[#005BA1] font-semibold 4xl:text-[36px] text-[20px] mb-5 leading-tight pr-[7rem] xl:pr-0 4xl:pr-0">{service.title}</h3>
                                <p className="text-black xl:mb-5 4xl:text-[22px] text-[16px] leading-tight pr-[5rem] xl:pr-0 4xl:pr-10">{service.description}</p>
                            </div>
                            <div>
                                <LearnMore />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
const Services = () => {
    return (
        <div className="text-black 2xl:pr-70 xl:pr-10 md:pr-8">
            <div className="grid 4xl:grid-cols-12">
                <div className="4xl:col-span-12">
                    <h2 className="text-black mb-6  xl:text-[40px] 4xl:pr-[2rem] xl:pr-80 4xl:text-[60px]  text-[26px]  leading-tight mt-16 xl:mt-0 4xl:mt-0 pr-[4rem]">Advantage+: A Full-Spectrum Marketing Transformation Approach</h2>
                    <p className="4xl:text-[22px] text-[16px] my-12">Our Advantage+ framework ensures that every phase of your marketing journey is expertly guided:</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
                {latestServices.map((services) => (
                    <ServicesCard key={services.id} services={services} />
                ))}
            </div>
            <div className="4xl:mt-10 xl:mt-10 mt-5">
                <LearnMore />
            </div>

        </div>
    );
};
const deepData1 = [
    "Journey Builder for dynamic, personalized customer journeys.",
    "Email Studio for impactful, data-driven email marketing campaigns.",
    "Mobile Studio for SMS and push notifications.",
    "Advertising Studio to engage customers across Google, Facebook, LinkedIn, and other digital platforms.",
]
const deepData2 = [
    "Datorama (Marketing Cloud Intelligence) for end-to-end marketing analytics and ROI optimization.",
    "Customer Segmentation and Audience Studio for precision-targeting.",
    "Marketing Cloud Personalization for real-time engagement.",
    "Marketing Analytics & Einstein AI for predictive insights and customer behavior modeling.",
]
const marketingFeatures = [
    {
        title: "Scalable B2B & B2C Marketing:",
        description: "Seamlessly manage both complex B2B relationships and high-volume B2C campaigns."
    },
    {
        title: "Hyper-Personalized Email Marketing:",
        description: "Personalized content powered by AI and real-time data."
    },
    {
        title: "Customer Segmentation & Targeting:",
        description: "Reach the right audience with precision."
    },
    {
        title: "Omni-Channel Campaign Management:",
        description: "Consistent communication across email, mobile, social, and web."
    },
    {
        title: "Salesforce Agentforce Campaigns:",
        description: "Integrate marketing and sales efforts for lead-to-customer conversion."
    },
    {
        title: "Marketing Analytics and Reporting:",
        description: "Actionable insights and dashboards."
    }
];
const aiMarketingData = [
    {
        title: "AI-Driven Campaign Optimization:",
        description: "Predictive targeting and customer journey refinement using Einstein AI."
    },
    {
        title: "Real-Time Customer Insights:",
        description: "Unified view of customer interactions across channels via Data Cloud."
    },
    {
        title: "Next-Gen Agentforce Campaign Management:",
        description: "Enable sales and marketing teams to collaborate on customer outreach with AI-generated recommendations."
    },
    {
        title: "Dynamic Segmentation:",
        description: "AI-driven segments that evolve based on real-time customer behavior."
    }
];
const agentChatData = [
    {
        title: "Instant Deployment:",
        description: "Go live in minutes — no complex setup required."
    },
    {
        title: "Universal Salesforce Compatibility:",
        description: "Works seamlessly with Sales, Service, Marketing, and Experience Clouds."
    },
    {
        title: "Multi-Role and Secure:",
        description: "Supports robust role-based access and enterprise-grade security models."
    },
    {
        title: "End-to-End Record Delegation:",
        description: "Assign Cases, Leads, Work Orders, and Custom Records by type, ensuring seamless workflows."
    },
    {
        title: "Enhanced Customer Experience:",
        description: "Enable real-time two-way WhatsApp conversations directly from Salesforce, improving engagement and resolution rates."
    }
];
const yourGrowthData = [
    "SAP Certified Partner with proven CPI integration success stories.",
    "Global presence: United States, Canada, Singapore, India.",
    "Industry-specific accelerators for Manufacturing, Semiconductor, Automotive, High-Tech.",
    "Deep expertise in SAP, Salesforce, Oracle, Mulesoft, Tableau, Kinaxis integrations.",
    "End-to-end support from advisory to post-go-live optimization.",
]
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Salesforce Marketing Cloud Consulting & Implementation Services"
                description="Salesforce marketing cloud consulting & implementation services by Rialtes Advantage+ deliver AI-powered, personalized journeys across channels, driving real ROI"
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/services/lob/salesforce-marketing-cloud-implementation-consulting/"
            />
            <Script
                id="schema-salesforce-marketing"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative group overflow-hidden md:pb-[12rem] xs:pb-20 xl:pb-[12rem] 4xl:pb-[12rem] lg:pb-[12rem] pb-20">
                <div className="xl:block hidden pt-20">
                    <Image
                        src="/images/services/lob/advantageplus/desktop/banner.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        className="objet-[49%_20%]"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/services/lob/advantageplus/mobile/banner.webp"
                        alt=""
                        fill
                        priority
                        className="h-full"
                    />
                </div>

                <div
                    className="relative
        custom-container"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 xl:mt-20 4xl:mt-20 mt-16 mx-auto">
                        <div className="xl:col-span-7 col-span-12 pr-5 ">
                            <h3 className="text-white text-[20px] xl:text-[24px] font-bold mb-2 break-words ">
                                Advantage+
                            </h3>

                            <h2 className="text-white  leading-tight break-words 4xl:text-[60px] xl:text-[40px] text-[26px]  xl:mt-10 4xl:mt-10 mt-5 4xl:pr-0 xl:pr-0 md:pr-[22rem] sm:pr-20 xs:pr-16">
                                Fueling Growth Through Personalized Marketing
                            </h2>

                            <h1 className="xl:mt-8 4xl:mt-8 mt-5 text-[18px] xl:text-[23px] 4xl:text-[35px] xl:pr-[15rem] 4xl:pr-[10rem] text-white font-bold  leading-tight  pr-[7rem] md:pr-[25rem]">
                                Rialtes’ Salesforce Marketing Cloud Services
                            </h1>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        </div>
                    </div>


                </div>
            </section>
            {/* page description */}
            <section className="mt-16 custom-container">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="4xl:col-span-10 xl:col-span-8 col-span-12">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:mb-8 pr-[2rem] xl:pr-0 4xl:pr-0">
                            Deliver Hyper-Personalized, Data-Driven Experiences with Advantage+
                        </h2>
                        <p className="text-[16px] 4xl:text-[22px] leading-tight mt-5 4xl:pr-[25px] pr-[2rem] xl:pr-0">We help organizations harness the power of Salesforce Marketing Cloud with our Advantage+ Services, a comprehensive suite of advisory, implementation, and support services for rapid adoption. As a Salesforce Certified Consulting Partner with offices in the U.S., Canada, India, and Singapore, Rialtes combines industry expertise with Marketing Cloud proficiency to drive transformation in B2B and B2C sectors. </p>
                        {/* <p className="text-[16px] 4xl:text-[22px] leading-tight  mt-5 4xl:pr-4 pr-12 xl:pr-0"> As a Salesforce Certified Consulting Partner with offices across the United States, Canada, India, and Singapore, Rialtes combines deep industry expertise with Salesforce Marketing Cloud proficiency to drive impactful sales and marketing transformation across B2B and B2C industries, including automotive, manufacturing, healthcare, real estate, and retail.</p> */}
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                    </div>
                </div>
            </section>
            {/* advantage+ section */}
            <div className="custom-container lg:mt-20  4xl:pr-[457px]">
                <section className=" bg-white">
                    <Services />
                </section>
            </div>
            {/* deep salesforce section */}
            <section>
                <div className="relative w-full xl:mt-[40px] mt-16 4xl:mt-10">
                    <div className="w-full xl:h-[1083px]">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/services/lob/advantageplus/desktop/deep-under.webp"
                                alt="Warehouse"
                                fill
                                className="object-cover"
                                priority
                                sizes="100vw"
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/services/lob/advantageplus/mobile/deep.webp"
                                alt="Warehouse"
                                priority
                                width={0}
                                height={0}
                                className="w-full"
                                sizes="100vw"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:absolute 4xl:mt-[-465px] xl:mt-[-440px] mt-[-75px] md:mt-0 custom-container">
                    <div className="xl:col-span-10 col-span-12 bg-[#006FBE] px-10 xl:pt-12 4xl:pt-12  pt-[2rem] z-[9]  text-white ">
                        <h2 className="4xl:text-[60px] text-[26px] leading-tight xl:text-[40px] xl:pr-32">Deep Salesforce Marketing Cloud Expertise</h2>
                        <p className="mt-5 4xl:pr-[25rem] xl:pr-48 4xl:text-[22px] text-[16px] pr-10">At Rialtes, we bring years of hands-on experience in Salesforce Marketing Cloud, covering:</p>
                    </div>
                    <div className="col-span-1 bg-[#006FBE]"></div>
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-1 absolute 4xl:mt-[-183px] xl:mt-[-225px] 2xl:mt-[-250px] mt-0  custom-container">
                    <div className="xl:col-span-6 col-span-12 bg-[#006FBE] xl:px-14 4xl:px-20 px-8 4xl:pb-14 xl:pb-14 text-white ">
                        <UnorderedList arrName={deepData1} ulClassName="list-disc leading-tight xl:space-y-5 xl:pb-16 4xl:pb-16 space-y-3 font-normal marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] text-[16px] xl:mt-8 mt-5 4xl:pr-16 pr-10 xl:pr-0" liClassName="" />
                        <div className="absolute 4xl:mt-[-25px] xl:mt-[-18px] xl:block hidden">
                            <LearnMore />
                        </div>
                    </div>
                    <div className="xl:col-span-5 col-span-12 bg-[#006FBE] xl:px-14 4xl:px-16 4xl:pl-0 px-8 xl:pb-14 4xl:pb-14 pb-20 text-white">
                        <UnorderedList arrName={deepData2} ulClassName="list-disc leading-tight xl:space-y-5 space-y-3 font-normal marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] text-[16px] xl:mt-8 mt-5 pr-5 xl:pr-0" liClassName="" />
                        <div className="absolute xl:hidden block bottom-0">
                            <LearnMore />
                        </div>
                    </div>
                    <div className="xl:col-span-3 col-span-12"></div>
                </div>
            </section>
            {/* driving business section*/}
            <section className="xl:mt-64 4xl:mt-[25rem] custom-container 4xl:pl-0 4xl:pr-[192px] xl:pl-0 max-md:pl-0 md:mt-[-17rem]">
                <div className="grid lg:grid-cols-12 grid-cols-1 xss:mt-[55rem] xs:mt-[55rem] sm:mt-[40rem] mt-[60rem] md:mt-[54rem]  lg:mt-[20rem] xl:mt-0 4xl:mt-0">
                    <div className="lg:col-span-7 col-span-12 4xl:pr-[60px] xl:pr-20 lg:pr-10">
                        <Image
                            src="/images/services/lob/advantageplus/desktop/driving.webp"
                            alt="Warehouse"
                            priority
                            width={0}
                            height={0}
                            className="w-full h-full object-cover"
                            sizes="100vw"
                        />
                    </div>
                    <div className="lg:col-span-5 col-span-12 max-md:px-[35px]">
                        <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight pt-10 lg:pt-0 4xl:pt-0 pr-10 lg:pr-0 4xl:pr-0">Driving Business Growth with Salesforce Marketing Cloud</h2>
                        <p className="4xl:pt-10 xl:pt-3 pt-5 pr-10 lg:pr-0 4xl:pr-0">Our expertise helps organizations achieve:</p>
                        <ul className="list-disc 4xl:space-y-5 lg:space-y-2 space-y-3 marker:font-bold marker:text-2xl pl-5 text-[16px] 4xl:text-[20px] leading-tight 4xl:mt-8 mt-3 4xl:pr-[11rem] xl:pr-0 pr-12">
                            {marketingFeatures.map((feature, index) => (
                                <li key={index}>
                                    <span className="font-bold">{feature.title} </span>
                                    {feature.description}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </section>
            {/* reimagine section */}
            <div className="relative 4xl:mt-[20rem] 4xl:pl-[142px]  pb-20 custom-container mt-[16rem] max-md:px-0 xl:mt-[18rem]">
                <div className="bg-[#F0F0F0] relative 4xl:pl-[142px] 4xl:h-[1340px] xl:h-[865px] 2xl:h-[915px]">
                    <div className="relative z-10 -mt-32 4xl:mr-[-140px] xl:mr-[-70px] xl:ml-[80px] 4xl:ml-0">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/services/lob/advantageplus/desktop/reimage.webp"
                                alt="Cloud Technology"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto object-cover absolute 4xl:mt-[-100px] xl:mt-[-100px] max-md:px-[35px]"
                                priority
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/services/lob/advantageplus/mobile/reimage.webp"
                                alt="Cloud Technology"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto object-cover absolute 4xl:mt-[-100px] xl:mt-[-100px] max-md:px-[35px] mt-[-80px]"
                                priority
                            />
                        </div>
                    </div>

                    <div className="relative z-20 mt-10 grid xl:grid-cols-2 gap-10 px-4 xl:px-0 max-md:px-[35px]">
                        <div className="4xl:mt-[40rem] mt-[15rem] xs:mt-[17rem]  md:mt-[43rem] xl:mt-[29rem] xl:ml-[5rem] 4xl:ml-0 2xl:mt-[32rem]">
                            <h2 className="text-[26px] xl:text-[40px] 4xl:text-[60px] leading-tight pr-10 xl:pr-0 4xl:pr-0">
                                Reimagine B2B & B2C Marketing with AI and Data Cloud
                            </h2>
                            <p className="mt-5 text-[16px] 4xl:text-[22px]">
                                Leveraging Salesforce Data Cloud and Agentforce, Rialtes transforms how organizations manage and execute marketing campaigns:
                            </p>
                            <div className="mt-6 xl:block hidden 4xl:mt-[275px] xl:mt-[85px]">
                                <LearnMore />
                            </div>
                        </div>
                        <div className="4xl:mt-[40rem]  xl:mt-[29rem] 2xl:mt-[32rem]">
                            <ul className="list-disc marker:text-black marker:font-bold 4xl:pl-5 4xl:p-10 4xl:pt-0 4xl:pb-5 text-[16px] 4xl:text-[22px] space-y-3 pr-12 xl:pr-20 4xl:pr-24">
                                {aiMarketingData.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.title}</strong> {item.description}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-[16px] 4xl:text-[22px] mt-5 xl:mt-5 4xl:mt-5 pr-12 xl:pr-0 4xl:pr-0">
                                By harnessing AI and real-time data, Rialtes enables clients to move from reactive to proactive marketing, improving engagement rates and customer loyalty.
                            </p>
                            <div className="mt-5 xl:hidden block">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* introducing agentchat section */}
            <section className="relative 4xl:mt-[9rem] mt-[1rem] xl:mt-[9rem]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/services/lob/advantageplus/desktop/agentchat.webp"
                        alt="Cloud Technology"
                        width={0}
                        height={0}
                        className="w-full object-cover mt-[-100px]"
                        sizes="100vw"
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/services/lob/advantageplus/mobile/introducing-agentchat.webp"
                        alt="Cloud Technology"
                        width={0}
                        height={0}
                        className="w-full object-cover mt-[-100px]"
                        sizes="100vw"
                        priority
                    />
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-12 absolute xl:top-[-8rem] 4xl:top-[-8rem]  md:top-[57rem]">
                    <div className="xl:col-span-6 col-span-12"></div>
                    <div className="xl:col-span-5 col-span-12 bg-[#184671] text-white pt-12 4xl:px-14 xl:px-10 px-10">
                        <h2 className="4xl:text-[50px] text-[26px] xl:text-[38px] leading-tight font-light">Introducing AgentChat</h2>
                        <h3 className="4xl:text-[35px] text-[24px] xl:text-[25px] mt-5 leading-tight pr-12 xl:pr-0 4xl:pr-0">Transforming WhatsApp Conversations for Salesforce Users</h3>
                        <h3 className="mt-5 leading-tight 4xl:text-[30px] text-[20px] pr-14 xl:pr-0 4xl:pr-0">Revolutionize Customer Engagement with WhatsApp + Salesforce</h3>
                        <p className="mt-5 leading-tight font-light 4xl:text-[22px] text-[16px] pr-12 xl:pr-0 4xl:pr-0">Meet AgentChat, Rialtes’ proprietary bi-directional WhatsApp conversational app built natively on the Salesforce Platform — designed to accelerate customer interactions across any Salesforce Cloud.</p>
                        <h3 className="mt-5 4xl:text-[30px] text-[20px]">Key Features of AgentChat:</h3>
                        <ul className="list-disc marker:text-white marker:font-bold pl-5 text-[16px] 4xl:text-[20px] leading-tight  4xl:space-y-5 xl:space-y-4 space-y-4 mt-5 pr-8 xl:pr-0 4xl:pr-16">
                            {agentChatData.map((feature, index) => (
                                <li key={index}>
                                    <strong>{feature.title}</strong> {feature.description}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 4xl:text-[22px] text-[16px] font-light 4xl:pr-6">AgentChat is the perfect solution for customer service, sales inquiries, order updates, and marketing outreach — all managed securely within Salesforce.</p>
                        <div className="mt-5">
                            <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                </div>
            </section>
            {/* your growth section */}
            <section className="4xl:mt-[14rem] 2xl:mt-[10rem] custom-container relative 4xl:pr-[142px]
    mt-[88rem] 
  xs:mt-[72rem] 
  sm:mt-[58rem] 
  md:mt-[52rem] 
  lg:mt-[80rem] 
  xl:mt-[15rem]  max-md:px-0">
                <div className="grid grid-cols-1 xl:grid-cols-2 items-stretch relative">
                    <div className="relative z-0 order-1 xl:order-2 4xl:ml-[-300px] xl:ml-[-211px]">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/services/lob/advantageplus/desktop/your-growth.webp"
                                alt="Cloud Technology"
                                width={0}
                                height={0}
                                className="w-full h-full mt-10 xl:mt-20 object-cover"
                                sizes="100vw"
                                priority
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/services/lob/advantageplus/mobile/your-growth.webp"
                                alt="Cloud Technology"
                                width={0}
                                height={0}
                                className="w-full h-full mt-10  object-cover"
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                    <div className="bg-[#3991AB] text-white z-10 4xl:p-10 4xl:pl-14 relative 4xl:pb-28 xl:pb-20 4xl:pt-10 order-2 xl:order-1 max-md:px-[35px] md:px-[35px] xl:pl-12 xl:pt-8 xl:mb-[70px] 4xl:mb-20">
                        <h2 className="text-[26px] xl:text-[40px] 4xl:text-[55px] leading-tight pt-10 xl:pt-0 4xl:pt-0">
                            Your Growth Partners
                        </h2>
                        <h3 className="mt-4 xl:mt-3 text-[20px] xl:text-[26px] 4xl:text-[36px] font-semibold pr-20 leading-tight xl:pr-0 4xl:pr-0">
                            Across Every Industry Touchpoint
                        </h3>
                        <p className="mt-4 xl:mt-5 text-[16px] 4xl:text-[22px] leading-tight font-light 4xl:pr-6">
                            Whether you’re launching targeted campaigns, scaling global marketing, or deepening customer relationships,
                            Rialtes’ Advantage+ Marketing Cloud Services are designed to drive growth, efficiency, and innovation.
                        </p>
                        <UnorderedList arrName={yourGrowthData} ulClassName="list-disc pl-5 mt-4 xl:mt-8 space-y-3 4xl:space-y-5 xl:space-y-3 text-[16px] 4xl:text-[22px] leading-tight font-normal marker:text-white 4xl:pr-[20px] pr-10" liClassName="" />
                        <div className="xl:absolute xl:mt-2 bottom-0 mt-8 4xl:mt-2">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </section>

            {/* explore more section */}
            <div className="mt-[4rem] 4xl:mt-[5rem] xl:mt-[3rem]">
                <section className=" bg-white">
                    <SalesforceExplore />
                </section>
            </div>

            {/* contact form section */}
            <div className="custom-container text-black py-16">
                <ContactForm title={'Ready to Accelerate Your Marketing? Let’s Talk!'} className={"leading-tight xl:max-w-[65%] max-w-full 4xl:text-[60px] xl:text-[40px] md:text-[26px] font-light"} />
            </div >
        </div >
    );
}