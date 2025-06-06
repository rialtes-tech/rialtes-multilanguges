import ContactForm from "@/app/components/contactform";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";
import Image from "next/image";

export default function retailPage() {

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
        "Manage complex product hierarchies — from seasonal collections to custom fits.",
        "Deliver personalized omnichannel experiences — online, in-store, mobile.",
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

    return (
        <section className="min-h-screen">
            <Seo
                title="Travel and Hospitality IT Solutions | SAP and Salesforce | Rialtes"
                description="Reimagine travel and hospitality IT solutions with AI, SAP, and Salesforce to enable real-time booking, loyalty programs, personalization, and efficiency."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/industry/travel-hospitality-it-solutions/"
            />
            {/* <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            /> */}
            {/* herosection */}
            <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
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
                        src="/images/industry/retail-industry/Mobile/hero-section-mob-banner.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "5% 20%" }}
                        priority
                    />
                </div>

                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                        <div className="col-span-12">
                            <h3 className="text-[#FFFFFF] text-[18px] md:text-[24px] font-bold lg:w-full">
                                Retail Industry
                            </h3>
                            <h1 className="text-[#FFFFFF] text-[26px] leading-[38px] md:text-[36px] md:leading-[50px] lg:text-[60px] lg:leading-[73px] mt-[11.5px] md:mt-[28.5px]">
                                Rialtes: Your Trusted <br /> Partner for Retail <br /> Industry Innovation <br /> and Growth
                            </h1>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>

            {/* page description section */}
            <section className="custom-container xl:mt-[135px] mt-[42px]">
                <h2 className="xl:text-[60px] text-[26px] leading-tight font-light">
                    Empowering Retailers to Thrive in a Customer-Centric, AI-Driven World
                </h2>

                <p className="xl:text-[22px] text-[16px] leading-[19px] xl:leading-[30px] xl:mt-[34px] mt-[23px] xl:w-[80%] max-md:w-[94%]">
                    In today’s rapidly evolving retail ecosystem, success lies in creating seamless, personalized experiences across every channel — while managing operational complexity behind the scenes. At Rialtes, we empower retailers to embrace the future of commerce by unifying business processes, customer engagement, and intelligent analytics through strategic partnerships with SAP, Salesforce, MuleSoft, and Oracle.

                    <br /><br />
                    Our proprietary pre-built accelerators for fashion and restaurant verticals ensure you go to market faster, smarter, and with a customer-first focus.
                </p>
            </section>

            {/* retails new reality */}
            <section className="custom-container xl:mt-[96px] mt-[59px] max-md:px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] gap-y-[41px]">
                    <div className="md:col-span-6 col-span-12 md:order-1 order-2 max-md:px-[36px]">
                        <h2 className="xl:text-[60px] text-[26px] leading-tight">
                            Retail’s New Reality
                        </h2>
                        <h3 className="xl:text-[42px] text-[22px] font-semibold md:mt-[24px] mt-[23px] leading-tight w-[92%] lg:w-[80%] xl:w-full">
                            Challenges and Opportunities in a Digital-First World
                        </h3>
                        <p className="xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[37px] mt-[23px]">
                            Retailers today face unprecedented disruption:
                        </p>
                        <ul className="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[34px] mt-[23px] pl-[20px] md:pb-[49px]">
                            {newRealityData.map((data, ind) => (
                                <li
                                    className="text-[16px] xl:text-[22px] leading-tight font-normal"
                                    key={ind}
                                >
                                    <span className="font-bold">{data.title} </span>{data.subtitle}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-6 col-span-12 md:order-2 order-1">
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">

                            <Image
                                src="/images/industry/retail-industry/Mobile/new-reality-mob-img.webp"
                                alt="mobile image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/new-reality-desk-img.webp"
                                alt="mobile image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                style={{ objectPosition: '80% 20%' }}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-[#163055] md:w-[90%] 2xl:w-[80%] max-md:mx-[36px] text-[#ffffff] max-md:mt-[35px]">
                    <p className="xl:text-[24px] text-[18px] leading-tight py-[24px] px-[24px] lg:pl-[31px] font-light">
                        At Rialtes, we help you turn these challenges into growth opportunities by crafting modern, AI-powered, integrated solutions tailored for retail.
                    </p>
                </div>

                <div className="lg:mt-[50px] mt-[36px] max-md:mx-[36px]">
                    <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" />
                </div>
            </section>


            {/* why choose rialtes section */}
            <section className="xl:mt-[63px] mt-[60px] bg-[#EFEFEF] md:relative">
                <div className="custom-container xl:pt-[82px] pt-[52px]">
                    <h2 className="xl:text-[60px] text-[26px] leading-tight font-light">
                        Why Choose Rialtes
                    </h2>
                    <h2 className="xl:text-[32px] 2xl:text-[36px] text-[22px] leading-tight font-semibold mt-[23px] xl:mt-[34px]">
                        Complete, End-to-End Retail Transformation with ‘RetailNext+’
                    </h2>
                    <p className="xl:text-[22px] text-[16px] leading-tight xl:mt-[37px] mt-[23px]">
                        Our ‘RetailNext+’ offering delivers a 360° transformation journey:
                    </p>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:mt-[87px] mt-[61px] sm:gap-[60px] gap-y-[40px] max-sm:w-[84%] 2xl:w-[84%] lg:w-full">
                        {
                            chooseRialtesData.map((data, ind) => {
                                return (
                                    <div key={ind}>
                                        <Image
                                            src={data.imgUrl}
                                            alt="mobile image"
                                            className="lg:w-[138px] lg:h-[138px] w-[100px] h-[100px] object-cover"
                                            width={0}
                                            height={0}
                                        />


                                        <p className="xl:text-[22px] text-[18px] leading-tight font-bold mt-[34px]">
                                            {data.desc}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="md:absolute bottom-[-50px] md:ml-[80px]">
                        <div className="bg-[#163055] md:w-[70%] lg:w-[60%] xl:w-[70%] 2xl:w-[60%] text-[#ffffff] max-md:mt-[60px] mx-auto">
                            <p className=" xl:text-[24px] text-[18px] leading-tight py-[24px] px-[28px] md:px-[24px] lg:pl-[31px] font-light">
                                With global presence (US, Canada, India, Singapore), we bring unparalleled expertise and commitment.
                            </p>
                        </div>
                    </div>
                    <div className="xl:mt-[78px] mt-[54px]">
                        <LearnMore />
                    </div>
                </div>
            </section>

            {/* fashion retail section */}
            <section className="xl:mt-[136px] mt-[93px] text-[#ffffff] md:pt-[63px]">
                <div className="relative">
                    <div className="">
                        <div className="custom-container max-lg:px-0">
                            <div className="lg:pt-[63px] pb-[130px] xl:pb-[63px] bg-[#4DADC7] relative max-lg:px-[36px]">
                                <div className="hidden lg:block absolute top-0 2xl:left-[-120px] lg:left-[-50px]  h-full bg-[#4DADC7] z-0 2xl:w-[120px] lg:w-[50px]" />
                                <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[41px]">
                                    <div className="lg:col-span-6 col-span-12 lg:order-1 order-2 relative">
                                        <div className="lg:pr-[60px]">
                                            <h2 className="xl:text-[58px] text-[26px] leading-tight">
                                                Fashion Retail Redefined
                                            </h2>
                                            <h3 className="xl:text-[36px] text-[20px] font-semibold lg:mt-[36px] mt-[15px] leading-tight w-[92%] lg:w-[80%] xl:w-full">
                                                Stay Ahead of Trends with Rialtes Smart Solutions
                                            </h3>
                                            <p className="xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[36px] mt-[15px]">
                                                Fashion is dynamic. So should your retail technology be. Rialtes helps fashion brands:
                                            </p>
                                            <ul className="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[44px] mt-[21px] pl-[20px] lg:pb-[49px]">
                                                {fashionRetailData.map((data, ind) => (
                                                    <li
                                                        className="text-[16px] xl:text-[22px] leading-tight font-normal"
                                                        key={ind}
                                                    >
                                                        {data}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="absolute bottom-[-170px] 2xl:bottom-[-110px] xl:bottom-[-140px] lg:bottom-[-90px]">
                                            <div className="bg-[#163055] text-[#ffffff] max-lg:mt-[35px]">
                                                <p className="xl:text-[24px] text-[18px] leading-tight py-[24px] px-[24px] lg:pl-[31px] font-light">
                                                    Our fashion-specific accelerators ensure that your brand remains a trendsetter, not a follower.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-6 col-span-12 lg:order-2 order-1">
                                        {/* Mobile image */}
                                        <div className="block md:hidden w-full h-full">
                                            <Image
                                                src="/images/industry/retail-industry/Mobile/fashion-mob-img.webp"
                                                alt="mobile image"
                                                className="w-full h-full object-cover"
                                                width={0}
                                                height={0}
                                            />
                                        </div>
                                        {/* Desktop image */}
                                        <div className="hidden md:block w-full h-full">
                                            <Image
                                                src="/images/industry/retail-industry/fashion-desk-img.webp"
                                                alt="desktop image"
                                                className="w-full h-full object-cover"
                                                width={0}
                                                height={0}
                                                style={{ objectPosition: '30% 20%' }}
                                            />
                                        </div>
                                    </div>
                                </div>

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
                                src="/images/industry/retail-industry/Mobile/loyalty-mob-img.webp"
                                alt="mobile image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/loyalty-desk-img.webp"
                                alt="mobile image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                style={{ objectPosition: '50% 20%' }}
                            />
                        </div>
                    </div>
                    <div className="md:col-span-7 col-span-12 max-md:px-[36px] bg-[#EFEFEF]">
                        <div className="md:ml-[40px] md:pt-[64px] md:pb-[56px] pb-[31px] pt-[34px] md:pr-[60px]">
                            <h2 className="xl:text-[60px] text-[26px] leading-tight">
                                Loyalty Programs that Inspire Repeat Business
                            </h2>
                            <h3 className="xl:text-[42px] text-[22px] font-semibold md:mt-[34px] mt-[22px] leading-tight w-[92%] lg:w-[80%] xl:w-full">
                                Smart, Personalized, Rewarding
                            </h3>
                            <p className="xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[31px] mt-[18px]">
                                Loyalty is earned, not given. Rialtes makes it easier with:
                            </p>
                            <ul className="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[34px] mt-[23px] pl-[20px] md:pb-[49px]">
                                {loyaltyData.map((data, ind) => (
                                    <li
                                        className="text-[16px] xl:text-[22px] leading-tight font-normal"
                                        key={ind}
                                    >
                                        {data}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="grid md:grid-cols-12 grid-cols-1">
                    <div className="md:col-span-5 col-span-12"></div>
                    <div className="md:col-span-7 col-span-12">
                        <div className="bg-[#163055] text-[#ffffff]">
                            <p className="xl:text-[24px] text-[18px] leading-tight py-[24px] px-[36px] lg:pl-[31px] font-light">
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
                        <h2 className="xl:text-[60px] text-[26px] leading-tight">
                            Frictionless Backend Integration
                        </h2>
                        <h3 className="xl:text-[42px] text-[22px] font-semibold md:mt-[35px] mt-[24px] leading-tight w-[92%] lg:w-[80%] xl:w-full">
                            SAP, Oracle, MuleSoft-Powered Operations
                        </h3>
                        <p className="xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[31px] mt-[24px]">
                            Retail success needs harmony between customer-facing and backend systems. Rialtes connects:
                        </p>
                        <ul className="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[34px] mt-[23px] pl-[20px] md:pb-[49px]">
                            {newRealityData.map((data, ind) => (
                                <li
                                    className="text-[16px] xl:text-[22px] leading-tight font-normal"
                                    key={ind}
                                >
                                    <span className="font-bold">{data.title} </span>{data.subtitle}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-6 col-span-12 md:order-2 order-1">
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">

                            <Image
                                src="/images/industry/retail-industry/Mobile/new-reality-mob-img.webp"
                                alt="mobile image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/new-reality-desk-img.webp"
                                alt="mobile image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                style={{ objectPosition: '80% 20%' }}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-[#163055] md:w-[90%] 2xl:w-[80%] max-md:mx-[36px] text-[#ffffff] max-md:mt-[35px]">
                    <p className="xl:text-[24px] text-[18px] leading-tight py-[24px] px-[24px] lg:pl-[31px] font-light">
                        At Rialtes, we help you turn these challenges into growth opportunities by crafting modern, AI-powered, integrated solutions tailored for retail.
                    </p>
                </div>

                <div className="lg:mt-[50px] mt-[36px] max-md:mx-[36px]">
                    <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" />
                </div>
            </section>
            {/* Contact Form */}
            < div className="custom-container lg:mt-[129px] xl:mb-[104px] mt-[41px] mb-[45px]">
                <ContactForm title={'Let’s Transform Retail Together — With Rialtes as Your Strategic Partner'} subtitle="Ready to reimagine your retail journey? Rialtes brings the tools, expertise, and innovation you need to thrive in today’s demanding landscape." subtitle1=" Contact us today to unlock the future of retail." className={"xl:w-[90%] 2xl:w-[70%] lg:w-[90%]"} />
            </div >
        </section>
    )
}