import ContactForm from "@/app/components/contactform";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";
import Image from "next/image";
import Script from "next/script";
import UnorderedList from "@/app/components/unorderedList";
import BreadCrumbs from '@/app/components/BreadCrumbs'
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";

export default function retailPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Retail Industry Digital Transformation Solutions",
        "url": "https://www.rialtes.com/industry/retail-industry-digital-transformation/",
        "description": "Rialtes empowers retail industry digital transformation through SAP and Salesforce. We offer AI-powered personalization, inventory intelligence, omnichannel engagement, and seamless backend integration tailored for retailers.",
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
            "name": "Retail Industry Digital Transformation Solutions",
            "description": "SAP and Salesforce-powered digital solutions for the retail industry, enabling AI personalization, inventory intelligence, and omnichannel success.",
            "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "Singapore" }
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Retail Industry Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Fashion Retail Accelerators",
                            "description": "Fashion-specific SAP and Salesforce solutions including trend forecasting, real-time inventory, loyalty, and omnichannel experiences."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Salesforce Marketing Cloud for Retail",
                            "description": "Hyper-personalized marketing campaigns, automated customer journeys, segmentation, and engagement analytics."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Data Cloud Inventory Management",
                            "description": "AI-powered real-time inventory management, demand forecasting, and smart replenishment across all retail locations."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Retail Loyalty Program Design",
                            "description": "Multi-tier loyalty programs, AI-driven customer insights, gamification, and personalized retention strategies."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "SAP, Oracle, and MuleSoft Integration",
                            "description": "Unified backend integration across SAP S/4HANA, Oracle ERP, Salesforce, and MuleSoft for smooth retail operations."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Retail Analytics with Data Cloud & Tableau",
                            "description": "Executive-level dashboards and AI-driven insights for customer behavior, sales forecasting, and marketing performance."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Quick Commerce Enablement",
                            "description": "Accelerated delivery, real-time updates, optimized routing, and integrated SAP/Salesforce mobile commerce."
                        }
                    }
                ]
            }
        }
    }
    const newRealityData = [
        {
            title: "Fragmented Customer Journeys:",
            subtitle: "Shoppers move between digital and physical touchpoints expecting consistent experiences."
        },
        {
            title: "Dynamic Consumer Preferences:",
            subtitle: "Demand for personalization and socially conscious brands."
        },
        {
            title: "Operational Complexities:",
            subtitle: "Multi-channel inventory management, supply chain challenges, and cost pressures."
        },
        {
            title: "Technology Overload:",
            subtitle: "Navigating countless tools without clear integration."
        },
    ];
    const chooseRialtesData = [
        {
            imgUrl: "/images/industry/retail-industry/img-1.svg",
            desc: "Strategic Retail Advisory and Business Architecture"
        },
        {
            imgUrl: "/images/industry/retail-industry/img-2.svg",
            desc: "Customized Solution Design & Industry Blueprints"
        },
        {
            imgUrl: "/images/industry/retail-industry/img-3.svg",
            desc: "Pre-Built Accelerators for Rapid Deployment"
        },
        {
            imgUrl: "/images/industry/retail-industry/img-4.svg",
            desc: "Quality Assurance & Performance Engineering"
        },
        {
            imgUrl: "/images/industry/retail-industry/img-5.svg",
            desc: "Integration of Front and Back Office (SAP, Salesforce, Oracle, MuleSoft)"
        },
        {
            imgUrl: "/images/industry/retail-industry/img-6.svg",
            desc: "Post Go-Live Support, Optimization & Innovation"
        },
    ];
    const fashionRetailData = [
        "Manage complex product hierarchies from seasonal collections to custom fits.",
        "Deliver personalized omnichannel experiences online, in-store, mobile.",
        "Optimize inventory across channels with real-time updates.",
        "Harness AI for trend forecasting, demand planning, and customer preferences.",
        "Enhance customer retention with smart loyalty programs."
    ]
    const loyaltyData = [
        "Multi-tiered loyalty programs with flexible rewards (points, discounts, early access).",
        "Personalized recognition based on purchase history and behavior.",
        "Gamified experiences to increase engagement.",
        "AI-powered insights on loyalty performance and churn risks.",
    ]
    const frictionlessData = [
        "SAP S/4HANA and Oracle ERP for order-to-cash, finance, and procurement.",
        "Salesforce Commerce and Marketing Cloud for customer engagement.",
        "MuleSoft as middleware for API-driven, real-time data flow.",
        "Automated workflows — from orders and inventory to invoicing and logistics.",
    ]
    const rightData = [
        "Build a tailored tech stack aligned with business goals.",
        "Select optimal SAP, Salesforce, Oracle components.",
        "Use our accelerators for rapid ROI and minimal disruption.",
        "Future-proof your operations for scalability and agility.",
    ]
    const aiPoweredRetailData = [
        "AI chatbots for instant, personalized service and FAQs.",
        "Predictive analytics for demand, trends, and customer behavior.",
        "Smart product recommendations and upselling.",
        "AI-driven dynamic pricing and inventory optimization.",
        "AI-powered fraud prevention and loss reduction."
    ]
    const fastData = [
        "Instant inventory checks and fulfillment.",
        "AI-optimized delivery routing and last-mile logistics.",
        "Real-time customer updates and personalized promotions.",
        "SAP CAR and Salesforce Commerce integrations for end-to-end quick commerce.",
        "Pre-integrated mobile apps and POS extensions."
    ]
    const proprietaryData = [
        {
            title: "Fashion Retail Bolt-On",
            desc: "Trend lifecycle management, AI collections, digital showrooms.",
        },
        {
            title: "Restaurant Bolt-On",
            desc: "Menu management, dynamic pricing, integrated loyalty.",
        },
        {
            title: "Inventory and Loyalty Plugins",
            desc: "Ready-to-use, flexible, and scalable.",
        },
    ]
    const aiPoweredCustomerData = [
        {
            mobImgUrl: "/images/industry/retail-industry/mobile/aiPowered-agentforce-mob-img.webp",
            deskImgUrl: "/images/industry/retail-industry/aiPowered-agentforce-desk-img.webp",
            title: "Agentforce",
            desc: "AI-powered service cloud bots, virtual agents, and personalized support journeys."
        },
        {
            mobImgUrl: "/images/industry/retail-industry/mobile/aiPowered-datacloud-mob-img.webp",
            deskImgUrl: "/images/industry/retail-industry/aiPowered-datacloud-desk-img.webp",
            title: "Data Cloud",
            desc: "Unified 360° customer profiles for personalized offers, support, and upselling."
        },
    ]
    const actionableData = [
        "Unified dashboards combining sales, marketing, and customer service data.",
        "Advanced analytics for demand forecasting, trend analysis, and pricing optimization.",
        "AI-driven insights for faster decision-making.",
        "Interactive Tableau visualizations for intuitive, executive-level reporting."
    ]
    const hyperPersonalizationData = [
        "Segment audiences based on behavior, demographics, and preferences.",
        "Design AI-driven, personalized campaigns that drive conversions.",
        "Launch automated journeys from abandoned cart to loyalty promotions.",
        "Analyze campaign success and customer engagement in real-time.",
        "Integrate seamlessly with commerce, service, and loyalty platforms."
    ]
    const realTimeData = [
        "Real-time inventory tracking across all locations.",
        "AI-based demand forecasting for optimal stock levels.",
        "Dynamic product allocation and smart replenishment.",
        "Full visibility for customers, staff, and partners, ensuring fulfillment confidence.",
        "Integration with ecommerce, POS, and warehouse systems."
    ]
    return (
        <section className="min-h-screen">
            <Seo
                title="Digital Transformation in Retail Industry with SAP | Rialtes"
                description="Drive retail industry digital transformation with SAP and Salesforce. Rialtes fuels innovation and growth with agile, intelligent, customer-first solutions."
                canonical="https://www.rialtes.com/industry/retail-industry-digital-transformation"
            />
            <Script
                id="schema-retail"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
             {/* breadcrumb schema */}
      <BreadcrumbSchema
        currPage="Retail"
      />
            {/* herosection */}
            <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px]  ">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/industry/retail-industry/hero-section-desk-banner.webp"
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
                        src="/images/industry/retail-industry/mobile/hero-section-mob-banner.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "5% 20%" }}
                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                        <div className="col-span-12">
                            <h3 className="text-[#FFFFFF] text-[18px] md:text-[24px]  font-bold lg:w-full">
                                Retail Industry
                            </h3>
                            <h1 className="text-[#FFFFFF] text-[26px] leading-[34px] md:text-[36px] md:leading-[50px] lg:text-[40px]  2xl:text-[60px] xl:text-[50px] 2xl:leading-[73px] xl:leading-[65px] lg:leading-[50px] mt-[11.5px] md:mt-[28.5px] max-[350px]:text-[22px] max-[350px]:leading-[30px]">
                                Rialtes: Your Trusted <br /> Partner for Retail <br /> Industry Innovation
                            </h1>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb */}
            <div className="custom-container">
                <BreadCrumbs currPage="Retail" />
            </div>
            {/* page description section */}
            <section className="custom-container xl:mt-[135px] mt-[42px]">
                <h2 className="4xl:text-[60px] 2xl:text-[56px] xl:text-[45px] 2xl:w-[88%] lg:text-[40px] xl:w-[80%] lg:w-[79%]  text-[26px] leading-tight font-light max-[390px]:text-[24px] md:text-[29px] ">
                    Empowering Retailers to Thrive in a Customer-Centric, AI-Driven World
                </h2>
                <p className="4xl:text-[22px] 2xl:text-[20px] xl:text-[18px]   text-[16px] leading-[19px] xl:leading-[30px] lg:leading-[25px] xl:mt-[34px] mt-[23px] lg:w-[68%] max-md:w-[94%]">
                    In the retail world, success lies in creating seamless, personalized experiences across every channel while managing operational complexity behind the scenes. At Rialtes, we empower retailers to embrace the future of commerce by unifying business processes, customer engagement, and intelligent analytics through strategic partnerships with SAP, Salesforce, MuleSoft, and Oracle.
                    <br /><br />
                    Our proprietary pre-built accelerators for fashion and restaurant verticals ensure you go to market faster, smarter, and with a customer-first focus.
                </p>
            </section>
            {/* retails new reality */}
            <section className="custom-container xl:mt-[96px] mt-[59px] max-md:px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] gap-y-[41px]">
                    <div className="md:col-span-6 col-span-12 md:order-1 order-2 max-md:px-[36px]">
                        <h2 className="4xl:text-[60px] 2xl:text-[56px] xl:text-[45px] lg:text-[40px] md:text-[29px] text-[26px] leading-tight">
                            Retail’s New Reality
                        </h2>
                        <h3 className="4xl:text-[36px] 2xl:text-[34px] xl:text-[30px] lg:text-[28px] text-[22px] font-semibold md:mt-[24px] mt-[23px] leading-tight   lg:w-[465px] 4xl:w-[585px] 2xl:w-[550px] xl:w-[500px] ">
                            Challenges and Opportunities in a Digital-First World
                        </h3>
                        <ul className="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[34px] mt-[23px] pl-[20px] md:pb-[49px]">
                            {newRealityData.map((data, ind) => (
                                <li className="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] leading-tight font-normal" key={ind}>
                                    <span className="font-bold">{data.title} </span>{data.subtitle}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-6 col-span-12 md:order-2 order-1">
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/mobile/new-reality-mob-img.webp"
                                alt="new-reality mobile image"
                                className="w-full h-full object-cover"
                                width={375}
                                height={250}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/new-reality-desk-img.webp"
                                alt="new-reality mobile image"
                                className="w-full h-full object-cover"
                                width={1200}
                                height={630}
                                priority
                                style={{ objectPosition: '80% 20%' }}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-[#163055] md:w-[90%] 2xl:w-[80%] max-md:mx-[36px] text-[#ffffff] max-md:mt-[35px]">
                    <p className="4xl:text-[24px] 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[18px] leading-tight py-[24px] px-[24px] lg:pl-[31px] font-light">
                        We help you turn these challenges into growth opportunities by crafting modern, AI-powered, integrated solutions tailored for retail.
                    </p>
                </div>
                <div className="lg:mt-[50px] mt-[36px] max-md:mx-[36px]">
                    <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" />
                </div>
            </section>
            {/* why choose rialtes section */}
            <section className="xl:mt-[63px] mt-[60px] bg-[#EFEFEF] md:relative">
                <div className="custom-container xl:pt-[82px] pt-[52px]">
                    <h2 className="4xl:text-[60px] 2xl:text-[56px] xl:text-[45px] lg:text-[40px] md:text-[29px] text-[26px] leading-tight font-light">
                        Why Choose Rialtes
                    </h2>
                    <h2 className="4xl:text-[36px] 2xl:text-[34px] xl:text-[30px] lg:text-[28px] text-[22px] leading-tight font-semibold mt-[23px] xl:mt-[34px]">
                        Complete, End-to-End Retail Transformation with ‘Retail+’
                    </h2>
                    <p className="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px]  leading-tight xl:mt-[37px] mt-[23px]">
                        Our Retail+ offering delivers a 360° transformation journey:
                    </p>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:mt-[87px] mt-[61px] sm:gap-[60px] gap-y-[40px] max-sm:w-[84%] 4xl:w-[83%] 2xl:w-[82%] xl:w-[84%] lg:w-[85%]">
                        {
                            chooseRialtesData.map((data, ind) => {
                                return (
                                    <div key={ind}>
                                        <Image
                                            src={data.imgUrl}
                                            alt="mobile image"
                                            className="lg:w-[138px] lg:h-[138px] w-[100px] h-[100px] object-cover"
                                            width={375}
                                            height={250}
                                            priority
                                        />
                                        <p className="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px]  leading-tight font-bold mt-[34px]">
                                            {data.desc}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="md:absolute bottom-[-50px] md:ml-[80px]">
                        <div className="bg-[#163055] md:w-[70%] lg:w-[60%] xl:w-[70%] 2xl:w-[60%] text-[#ffffff] max-md:mt-[60px] mx-auto">
                            <p className=" 4xl:text-[24px] 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[18px]  leading-tight py-[24px] px-[28px] md:px-[24px] lg:pl-[31px] font-light">
                                With global presence (US, Canada, India, Singapore), we bring unparalleled expertise and commitment. </p>
                        </div>
                    </div>
                    <div className="xl:mt-[78px] mt-[54px]">
                        <LearnMore />
                    </div>
                </div>
            </section>
            {/* fashion retail section */}
            <section className="xl:mt-[81px] mt-[93px] text-[#ffffff] md:pt-[63px]">
                <div className="relative">
                    <>
                        <div className="custom-container max-lg:px-0">
                            <div className="lg:pt-[63px] pb-[130px] lg:pb-[43px] xl:pb-[63px] bg-[#4DADC7] relative max-lg:px-[36px]">
                                <div className="hidden lg:block absolute top-0 2xl:left-[-120px] lg:left-[-50px]  h-full bg-[#4DADC7] z-0 2xl:w-[120px] lg:w-[50px]" />
                                <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[41px]">
                                    <div className="lg:col-span-6 col-span-12 lg:order-1 order-2 relative">
                                        <div className="lg:pr-[20px]">
                                            <h2 className="4xl:text-[52px] 2xl:text-[48px] xl:text-[40px]  md:text-[29px] lg:text-[38px] text-[26px] leading-tight max-[400px]:text-[22px]">
                                                Fashion Retail Redefined
                                            </h2>
                                            <div className="lg:pr-[70px]">
                                                <p className="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px]   leading-tight font-normal xl:mt-[36px] mt-[15px] max-[400px]:text-[16px]">
                                                    Fashion is dynamic. So should your retail technology be. Rialtes helps fashion brands:
                                                </p>
                                                <UnorderedList arrName={fashionRetailData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[44px] mt-[21px] pl-[20px] lg:pb-[49px]" liClassName="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] max-[400px]:text-[16px] leading-tight font-normal" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-[-170px] 2xl:bottom-[-102px] 4xl:bottom-[-107px] xl:bottom-[-98px] md:bottom-[-130px]">
                                            <div className="bg-[#163055] text-[#ffffff] max-lg:mt-[35px]">
                                                <p className="4xl:text-[24px] 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[18px]  leading-tight  py-[24px] px-[24px] lg:pl-[31px] font-light">
                                                    Our fashion-specific accelerators ensure that your brand remains a trendsetter, not a follower.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-6 col-span-12 lg:order-2 order-1">
                                        {/* Mobile image */}
                                        <div className="block md:hidden w-full h-full">
                                            <Image
                                                src="/images/industry/retail-industry/mobile/fashion-mob-img.webp"
                                                alt="fashion mobile image"
                                                className="w-full h-full object-cover"
                                                width={375}
                                                height={250}
                                                priority
                                            />
                                        </div>
                                        {/* Desktop image */}
                                        <div className="hidden md:block w-full h-full">
                                            <Image
                                                src="/images/industry/retail-industry/fashion-desk-img.webp"
                                                alt="fashion desktop image"
                                                className="w-full h-full object-cover"
                                                width={1200}
                                                height={630}
                                                priority
                                                style={{ objectPosition: '30% 20%' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </section>
            {/* salesforce marketing section  */}
            <section className="custom-container xl:mt-[158px] md:mt-[100px] mt-[88px] lg:pl-0 max-lg:px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-y-[36px] md:gap-[40px] xl:gap-[50px] 2xl:gap-[80px] relative">
                    <div className="md:col-span-6 col-span-12">
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/mobile/hyper-mob-img.webp"
                                alt="hyper mobile image"
                                className="w-full h-full object-cover"
                                width={375}
                                height={250}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/hyper-desk-img.webp"
                                alt="hyper mobile image"
                                className="w-full h-full object-cover"
                                width={1200}
                                height={630}
                                style={{ objectPosition: '40% 20%' }}
                                priority
                            />
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12 max-md:px-[36px] md:pr-[36px]">
                        <h2 className="4xl:text-[60px] 2xl:text-[56px] xl:text-[45px] lg:text-[40px] md:text-[29px] text-[26px] leading-tight">
                            Salesforce Marketing Cloud + Retail Cloud
                        </h2>
                        <h3 className="4xl:text-[30px] 2xl:text-[28px] xl:text-[24px]  text-[20px] font-semibold md:mt-[31px] mt-[22px] leading-tight w-[92%] max-[400px]:text-[18px] lg:w-[80%] 4xl:[97%] 2xl:w-[90%] xl:w-[90%]">
                            Engage the right customers, at the right time, with the right message.
                        </h3>
                        <div className="lg:pr-[120px]">
                            <p className="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] leading-tight font-normal xl:mt-[31px] mt-[22px]">
                                Rialtes leverages Salesforce Marketing Cloud and Retail Cloud to:
                            </p>
                            <UnorderedList arrName={hyperPersonalizationData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[25px] mt-[18px] pl-[30px] mb-[166px] sm:mb-[136px] md:mb-[106px]" liClassName="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] leading-tight font-normal" />
                        </div>
                    </div>
                    <div className="absolute bottom-[-35px] right-0">
                        <div className="bg-[#163055] text-[#ffffff] max-lg:mt-[35px] max-md:mx-[36px] md:mr-[36px] lg:mr-auto xl:mr-[100px]">
                            <p className="4xl:text-[24px] 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[18px]   leading-tight py-[24px] px-[24px] lg:pl-[31px] font-light">
                                Deliver delightful experiences that turn browsers into loyal brand advocates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*real time section */}
            <section className="lg:mt-[84px] mt-[62px] relative">
                {/* Background Image */}
                <div className="w-full h-auto hidden md:block md:h-[760px] lg:h-[710px] xl:h-[1000px] 2xl:h-[1080px] 3xl:h-[1036px] 4xl:h-[1136px]">
                    <Image
                        src="/images/industry/retail-industry/real-time-desk-img.webp"
                        alt="Real-Time Inventory"
                        className="w-full h-full object-cover"
                        width={1200}
                        height={630}
                        style={{ objectPosition: "90% 20%" }}
                        priority
                    />
                </div>
                <div className="w-full h-auto block md:hidden">
                    <Image
                        src="/images/industry/retail-industry/mobile/real-time-mob-img.webp"
                        alt="Real-Time Inventory Mobile"
                        className="w-full h-full object-cover"
                        width={375}
                        height={250}
                        priority
                    />
                </div>
                <div className="relative md:absolute md:inset-0 md:flex md:items-stretch max-md:mt-[-170px]">
                    <div className="custom-container md:h-full">
                        <div className="bg-[rgba(0,111,190,0.85)] h-full w-full md:w-[52%] xl:w-[55%] 2xl:w-[54%] 3xl:w-[54%] text-white flex flex-col xl:pt-[68px] xl:px-[77px] pt-[25px] px-[33px]">
                            <div>
                                <h2 className="4xl:text-[60px] 2xl:text-[52px] xl:text-[45px] lg:text-[35px] md:text-[26px] text-[26px] leading-tight max-[400px]:text-[22px] ">
                                    Data Cloud-Powered Inventory Management in Real-Time
                                </h2>
                                <h3 className="4xl:text-[30px] 2xl:text-[28px] xl:text-[26px] lg:text-[22px] text-[22px] font-semibold mt-[22px] md:mt-[29px] leading-tight max-[400px]:text-[20px]">
                                    Never lose a sale due to stockouts again.
                                </h3>
                                <p className="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px]  font-normal mt-[22px] md:mt-[29px] leading-tight">
                                    Our Data Cloud-based inventory solutions ensure:
                                </p>
                                <UnorderedList arrName={realTimeData} ulClassName="list-disc mt-[18px] md:mt-[16px] pl-[20px] xl:space-y-[27px] space-y-[19px] lg:pr-[35px]" liClassName="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] leading-tight font-normal" />
                            </div>
                            <div className="mt-auto pt-[40px]">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* loyalty program section */}
            <section className="custom-container xl:mt-[86px] mt-[61px]">
                <div className="grid md:grid-cols-12 grid-cols-1">
                    <div className="md:col-span-5 col-span-12">
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/mobile/loyalty-mob-img.webp"
                                alt="loyalty mobile image"
                                className="w-full h-full object-cover"
                                width={375}
                                height={250}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/loyalty-desk-img.webp"
                                alt="loyalty mobile image"
                                className="w-full h-full object-cover"
                                width={1200}
                                height={630}
                                style={{ objectPosition: '50% 20%' }}
                                priority
                            />
                        </div>
                    </div>
                    <div className="md:col-span-7 col-span-12 max-md:px-[36px] bg-[#EFEFEF]">
                        <div className="md:mx-[40px] md:pt-[64px] md:pb-[56px] pb-[31px] pt-[34px] 4xl:pr-[170px] 2xl:pr-[130px] xl:pr-[120px] ">
                            <h2 className="4xl:text-[60px] 2xl:text-[56px] xl:text-[45px] lg:text-[40px] md:text-[29px] text-[26px]  leading-tight max-[400px]:text-[24px]">
                                Loyalty Programs that Inspire Repeat Business
                            </h2>
                            <h3 className="4xl:text-[34px] 2xl:text-[32px] xl:text-[28px] lg:text-[24px] text-[22px]  font-semibold md:mt-[34px] mt-[22px] leading-tight w-[92%] lg:w-[80%] xl:w-full max-[400px]:text-[18px]">
                                Smart, Personalized, Rewarding
                            </h3>
                            <p className="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px]  leading-tight font-normal xl:mt-[31px] mt-[18px]">
                                Loyalty is earned, not given. Rialtes makes it easier with:
                            </p>
                            <UnorderedList arrName={loyaltyData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[34px] mt-[23px] pl-[20px] md:pb-[49px]" liClassName="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] leading-tight font-normal" />
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1">
                    <div className="md:col-span-5 col-span-12"></div>
                    <div className="md:col-span-7 col-span-12">
                        <div className="bg-[#163055] text-[#ffffff]">
                            <p className="4xl:text-[26px] 2xl:text-[24px] xl:text-[20px]  text-[18px] leading-tight py-[24px] px-[20px] lg:pl-[31px] font-light max-[400px]:text-[16px]">
                                Turn occasional buyers into lifelong brand ambassadors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* frictionless backend section */}
            <section className="custom-container xl:mt-[96px] mt-[59px] max-md:px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] gap-y-[41px]">
                    <div className="md:col-span-6 col-span-12 md:order-1 order-2 max-md:px-[36px]">
                        <h2 className="4xl:text-[60px] 2xl:text-[56px] xl:text-[45px] lg:text-[40px] md:text-[29px] text-[26px] leading-tight max-[350px]:text-[20px]">
                            Frictionless Backend Integration
                        </h2>
                        <h3 className="4xl:text-[36px] 2xl:text-[32px] xl:text-[28px] lg:text-[24px] text-[18px]  font-semibold md:mt-[35px] mt-[24px] leading-tight max-[350px]:text-[16px]  w-full">
                            SAP, Oracle, MuleSoft-Powered Operations
                        </h3>
                        <p className="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px]  leading-tight font-normal xl:mt-[31px] mt-[24px] max-[350px]:text-[16px]">
                            Retail success needs harmony between customer-facing and backend systems. Rialtes connects:
                        </p>
                        <UnorderedList arrName={frictionlessData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[34px] mt-[23px] pl-[20px] md:pb-[49px]" liClassName="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] leading-tight font-normal max-[350px]:text-[16px]" />
                        <div className="bg-[#163055] text-[#ffffff] md:mt-[39px] mt-[35px]">
                            <p className="4xl:text-[24px] 2xl:text-[22px] xl:text-[20px]  text-[18px] leading-tight py-[24px] px-[24px] lg:pl-[31px] font-light">
                                Achieve operational excellence with zero silos.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12 md:order-2 order-1">
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/mobile/frictionless-mob-img.webp"
                                alt="frictionless mobile image"
                                className="w-full h-full object-cover"
                                width={375}
                                height={250}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/frictionless-desk-img.webp"
                                alt="frictionless mobile image"
                                className="w-full h-full object-cover"
                                width={1200}
                                height={630}
                                style={{ objectPosition: '80% 20%' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* actionable section */}
            <section className="custom-container xl:mt-[67px] mt-[51px] max-md:px-0 relative">
                {/* Mobile image */}
                <div className="block md:hidden w-full h-full">
                    <Image
                        src="/images/industry/retail-industry/mobile/actionable-mob-img.webp"
                        alt="actionable mobile image"
                        className="w-full h-full object-cover"
                        width={375}
                        height={250}
                        priority
                    />
                </div>
                {/* Desktop image */}
                <div className="hidden md:block w-full h-full">
                    <Image
                        src="/images/industry/retail-industry/actionable-desk-img.webp"
                        alt="actionable mobile image"
                        className="w-full h-full object-cover"
                        width={1200}
                        height={630}
                        priority
                    />
                </div>
                <div className="relative">
                    <div className="md:mt-[-16%] mt-[-30%]">
                        <div className="bg-[#FFC143] xl:pt-[48px] pt-[34px] xl:pl-[67px] xl:pr-[40px] max-md:mx-[36px] px-[35px] text-[#000000] lg:w-[95%] md:w-[90%]">
                            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[25px]">
                                <div className="flex flex-col h-full">
                                    <h2 className="4xl:text-[60px] 2xl:text-[52px] xl:text-[45px] lg:text-[40px] md:text-[29px] text-[26px] leading-tight max-[400px]:text-[22px] font-light">
                                        Actionable Insights with Data Cloud & Tableau
                                    </h2>
                                    <p className="4xl:text-[36px] 2xl:text-[32px] xl:text-[28px] lg:text-[24px] text-[20px] leading-tight xl:mt-[31px] mt-[23px]">
                                        See the Future, Now
                                    </p>
                                    <div className="mt-auto max-lg:hidden">
                                        <LearnMore />
                                    </div>
                                </div>
                                <div>
                                    <p className="4xl:text-[30px] 2xl:text-[28px] xl:text-[26px] lg:text-[20px] text-[18px] font-semibold leading-tight lg:mt-0 mt-[23px] max-[400px]:text-[16px]">
                                        Transform retail data into real business outcomes.
                                    </p>
                                    <p className="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px]   leading-tight lg:mt-[27px] mt-[23px]">
                                        Rialtes helps you unlock the power of data:
                                    </p>
                                    <div className="lg:pr-[75px]">
                                        <UnorderedList arrName={actionableData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[34px] mt-[27px] pl-[20px] pb-[48px] md:pb-[52px]" liClassName="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] leading-tight font-normal" />
                                    </div>
                                    <div className="mt-auto block lg:hidden">
                                        <LearnMore />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* making right section */}
            <section className="custom-container xl:mt-[71px] mt-[51px] lg:pr-0 max-md:px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] 2xl:gap-[80px] gap-y-[41px]">
                    <div className="md:col-span-5 col-span-12 md:order-1 order-2 max-md:px-[36px]">
                        <h2 className="4xl:text-[60px] 2xl:text-[52px] xl:text-[45px] lg:text-[40px] md:text-[29px] text-[26px] leading-tight max-[400px]:text-[22px]">
                            Making the Right Tech Choices
                        </h2>
                        <h3 className="4xl:text-[36px] 2xl:text-[32px] xl:text-[28px] lg:text-[24px] text-[20px] leading-tight font-semibold md:mt-[31px] mt-[23px]  w-full lg:w-[80%] xl:w-full">
                            How Retailers Can Win with Rialtes
                        </h3>
                        <p className="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px]  font-normal xl:mt-[41px] mt-[23px]">
                            Choosing the right tools shapes your brand’s future. Rialtes guides you to:
                        </p>
                        <UnorderedList arrName={rightData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[24px] mt-[23px] pl-[20px] xl:w-[80%]" liClassName="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] leading-tight font-normal" />
                    </div>
                    <div className="md:col-span-7 col-span-12 md:order-2 order-1">
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/mobile/right-mob-img.webp"
                                alt="right mobile image"
                                className="w-full h-full object-cover"
                                width={375}
                                height={250}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/right-desk-img.webp"
                                alt="right mobile image"
                                className="w-full h-full object-cover"
                                width={1200}
                                height={630}
                                style={{ objectPosition: '30% 20%' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* ai powered retail section */}
            <section className="custom-container xl:mt-[123px] mt-[65px] lg:pl-0 max-lg:px-0 bg-[#B2D6D9]">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] xl:gap-[50px] 2xl:gap-[80px]">
                    <div className="md:col-span-6 col-span-12">
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/mobile/ai-powered-mob-img.webp"
                                alt="ai-powered mobile image"
                                className="w-full h-full object-cover"
                                width={375}
                                height={250}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/ai-powered-desk-img.webp"
                                alt="ai-powered mobile image"
                                className="w-full h-full object-cover"
                                width={1200}
                                height={630}
                                style={{ objectPosition: '40% 20%' }}
                                priority
                            />
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12 max-md:px-[36px] md:pr-[36px] lg:pr-auto lg:pt-[60] pt-[41px]">
                        <h2 className="4xl:text-[60px] 2xl:text-[52px] xl:text-[45px] lg:text-[40px] md:text-[29px] text-[26px] leading-tight max-[400px]:text-[22px]">
                            AI-Powered Retail
                        </h2>
                        <h3 className="4xl:text-[36px] 2xl:text-[32px] xl:text-[28px] lg:text-[24px] text-[20px] leading-tight font-semibold md:mt-[39px] mt-[23px]  w-[92%] lg:w-[80%] xl:w-full max-[350px]:text-[18px]">
                            The New Standard for Exceptional Customer Experience
                        </h3>
                        <div className="max-md:pr-[20px]">
                            <p className="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] leading-tight font-normal xl:mt-[41px] mt-[23px]">
                                Artificial Intelligence is transforming every facet of retail:
                            </p>
                            <UnorderedList arrName={aiPoweredRetailData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[24px] mt-[23px] pl-[20px] xl:w-[95%]" liClassName="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] leading-tight font-normal" />
                        </div>
                        <p className="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] leading-tight font-normal xl:mt-[31px] mt-[44px] xl:w-[84%]">
                            With Rialtes, AI becomes an integrated part of your customer and operational strategy.
                        </p>
                        <div className="xl:mt-[74px] mt-[31px]">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </section>
            {/* fast flexible section */}
            <section className="custom-container xl:mt-[74px] mt-[53px] lg:pl-0 max-lg:px-0 bg-[#EAC84C]">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] xl:gap-[20px] 2xl:gap-[80px]">
                    <div className="2xl:col-span-7 md:col-span-6 col-span-12">
                        {/* Mobile Background */}
                        <div
                            className="block md:hidden w-full bg-cover h-[365px] sm:h-[630px]"
                            style={{ backgroundImage: "url('/images/industry/retail-industry/mobile/fast-mob-img.webp')" }}
                        />

                        {/* Desktop Background */}
                        <div className="hidden md:block w-full h-full bg-cover" style={{ backgroundImage: "url('/images/industry/retail-industry/fast-desk-img.webp')", backgroundPosition: "8% 20%" }} />
                    </div>


                    <div className="2xl:col-span-5 md:col-span-6 col-span-12 max-md:px-[36px] md:pr-[36px] lg:pr-auto xl:pt-[72px] md:pt-[35px] pt-[30px] lg:pb-[97px] pb-[83px]">
                        <h2 className="4xl:text-[60px] 2xl:text-[52px] xl:text-[45px] lg:text-[40px] md:text-[29px] text-[26px] leading-tight max-[400px]:text-[22px]">
                            Fast, Flexible, and Seamless
                        </h2>
                        <h3 className="4xl:text-[36px] 2xl:text-[32px] xl:text-[28px] lg:text-[24px] text-[20px] leading-tight font-semibold md:mt-[39px] mt-[23px]   lg:w-[80%] xl:w-[90%] max-[400px]:text-[18px]">
                            Quick Commerce Solutions Powered by SAP & Salesforce
                        </h3>
                        <p className="4xl:text-[30px] 2xl:text-[28px] xl:text-[27px] lg:text-[24px] text-[18px] leading-tight font-semibold xl:mt-[41px] mt-[24px]  max-[400px]:text-[16px]">
                            Speed is the new loyalty in retail. Rialtes helps you embrace Quick Commerce:
                        </p>
                        <UnorderedList arrName={fastData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[34px] mt-[31px] pl-[20px] lg:pr-[70px]" liClassName="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] leading-tight font-normal" />
                        <div className="absolute">
                            <div className="bg-[#163055] text-[#ffffff] mr-[25px] lg:mt-[62px] mt-[35px] max-sm:w-[84%] ">
                                <p className="4xl:text-[24px] 2xl:text-[22px] xl:text-[20px]  text-[20px] leading-tight xl:py-[24px] xl:px-[44px] py-[23px] px-[32px] lg:pl-[31px] font-light max-[400px]:text-[18px]">
                                    Deliver in minutes, delight for years.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* proprietary section */}
            <section className="bg-[url('/images/industry/retail-industry/mobile/properietary-mob-img.webp')]
                           md:bg-[url('/images/industry/retail-industry/properietary-desk-img.webp')]
                           bg-cover bg-no-repeat bg-center xl:pt-[99px] pt-[42px] pb-[71px] xl:pb-[82px] lg:mt-[94px] mt-[89px] text-[#FFFFFF]">
                <div className="custom-container">
                    <h2 className="4xl:text-[60px] 2xl:text-[52px] xl:text-[45px] lg:text-[40px] md:text-[29px] text-[26px] leading-tight max-[400px]:text-[22px] ">
                        Proprietary Rialtes Accelerators
                    </h2>
                    <h3 className="4xl:text-[36px] 2xl:text-[32px] xl:text-[28px] lg:text-[24px] text-[20px]  font-semibold xl:mt-[32px] mt-[23px] leading-tight">
                        Faster Time to Value
                    </h3>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:mt-[45px] mt-[23px] md:gap-[40px] gap-y-[20px] w-full ">
                        {
                            proprietaryData.map((data, ind) => {
                                return (
                                    <div key={ind} className="card bg-[#ffffff] xl:py-[55px] py-[34px] 2xl:px-[60px] px-[28px] xl:px-[50px]">
                                        <p className="4xl:text-[26px] 2xl:text-[22px] xl:text-[20px]  text-[20px]  text-[#0A6BB8] leading-tight font-semibold">{data.title}</p>
                                        <p className="4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] text-[16px] leading-tight xl:mt-[32px] mt-[23px] text-[#000000]">{data.desc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p className="text-[16px] 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px]  leading-tight xl:mt-[92px] mt-[31px]">
                        These accelerators help reduce deployment time and costs.
                    </p>
                </div>
            </section>
            {/* ai powered customer section */}
            <section className="custom-container xl:mt-[124px] mt-[58px] max-md:pr-0">
                <h2 className="4xl:text-[60px] 2xl:text-[52px] xl:text-[45px] lg:text-[40px] md:text-[29px] text-[26px] leading-tight max-[400px]:text-[22px]  2xl:w-[80%] xl:w-[78%] max-md:pr-[36px]">
                    AI-Powered Customer Engagement with Agentforce and 360° Insights with Data Cloud
                </h2>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[20px] gap-y-[94px] md:mt-[106px] xl:mt-[126px] mt-[94px]">
                    {
                        aiPoweredCustomerData.map((data, ind) => {
                            return (
                                <div key={ind} className="card bg-[#EDEDED] lg:pb-[52px] py-[34px] lg:px-[58px] px-[28px] relative">
                                    {/* Mobile image */}
                                    <div className="block md:hidden w-[calc(100%-60px)] h-[360px] absolute top-[-50px] left-0">
                                        <Image
                                            src={data.mobImgUrl}
                                            alt="AI-Powered mobile image"
                                            className="w-full h-full object-cover"
                                            width={375}
                                            height={250}
                                            style={{ objectPosition: "64% 20%" }}
                                            priority
                                        />
                                    </div>
                                    {/* Desktop image */}
                                    <div className="hidden md:block md:w-[calc(100%-60px)] lg:h-[420px] md:h-[360px] absolute top-[-50px] left-0">
                                        <Image
                                            src={data.deskImgUrl}
                                            alt="AI-Powered desktop image"
                                            className="w-full h-full object-cover"
                                            width={1200}
                                            height={630}
                                            style={{ objectPosition: "60% 20%" }}
                                            priority
                                        />
                                    </div>
                                    <div className="lg:mt-[380px] md:mt-[320px] mt-[320px]">
                                        <p className="4xl:text-[36px] 2xl:text-[32px] xl:text-[28px] lg:text-[24px] text-[20px] text-[#0A6BB8] leading-tight font-semibold">{data.title}</p>
                                        <p className="4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight xl:mt-[29px] mt-[20px] text-[#000000]">{data.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* Contact Form */}
            < div className="custom-container md:mt-[129px] xl:mb-[104px] mt-[41px] mb-[45px]">
                <ContactForm title={'Let’s Transform Retail Together — With Rialtes as Your Strategic Partner'} subtitle="Ready to reimagine your retail journey? Rialtes brings the tools, expertise, and innovation you need to thrive in today’s demanding landscape." subtitle1=" Contact us today to unlock the future of retail." className={"xl:w-[70%] 2xl:w-[75%] lg:w-[70%] 4xl:text-[60px] 2xl:text-[52px] xl:text-[45px] lg:text-[40px] md:text-[29px] text-[26px] leading-tight max-[400px]:text-[22px] "} />
            </div >
        </section>
    )
}