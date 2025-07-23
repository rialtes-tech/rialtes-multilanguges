import ContactForm from "@/app/[locale]/components/contactform;
import LearnMore from "@/app/[locale]/components/learnMore";
import Seo from "../../components/Seo";
;
import Image from "next/image";
import Script from "next/script";
import React from "react";
import UnorderedList from "@/app/[locale]/components/unorderedList";
export default function retailPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Nonprofit Digital Transformation and IT Solutions",
        "url": "https://www.rialtes.com/industry/nonprofit-digital-transformation-it-solutions/",
        "description": "Smart IT solutions and digital transformation by Rialtes empower nonprofits to streamline grants, donors, volunteers, and mission-critical operations.",
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
            "name": "Nonprofit Digital Transformation and IT Solutions",
            "description": "Salesforce and SAP-powered IT transformation for nonprofits. Streamline donor journeys, grants, volunteers, and outcomes with AI and automation.",
            "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "Singapore" }
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Nonprofit Digital Transformation Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Fundraising & Campaign Management",
                            "description": "Create personalized, multichannel donor campaigns with real-time engagement tracking and automated impact reporting."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Family & Household Donor Mapping",
                            "description": "Visualize household giving patterns, uncover networks, and manage legacy or collective donor relationships."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Salesforce Marketing Cloud for Nonprofits",
                            "description": "Run AI-powered donor journeys, trigger-based outreach, and personalized communications for increased retention."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Donor Relationship Management",
                            "description": "Manage 360-degree donor profiles, major gift planning, and loyalty programs with transparency and insight."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Volunteer Engagement Solutions",
                            "description": "Optimize volunteer recruitment, scheduling, and retention with personalized communication and self-service portals."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Program & Outcome Management",
                            "description": "Track real-time program impact, outcome metrics, and performance dashboards for stakeholders and funders."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Grant Lifecycle Automation",
                            "description": "Automate grant applications, approvals, fund allocation, compliance, and reporting with integrated workflows."
                        }
                    }
                ]
            }
        }
    }
    const whyChooseData = [
        "Deep non-profit domain expertise.",
        "Accelerated implementations with pre-built solutions tailored to non-profit needs.",
        "Certified Salesforce and SAP experts providing end-to-end services.",
        "Global presence to support diverse non-profit organizations.",
        "Focused on mission impact, transparency, and operational efficiency."
    ]
    const thoughtLeadershipData = [
        {
            title: "Key Challenges:",
            dataList: [
                "Disconnected systems preventing a unified view of donors, volunteers, and program beneficiaries.",
                "Limited ability to measure, track, and communicate real-time program outcomes and mission impact.",
                "Ineffective fundraising due to generic campaigns without personalization.",
                "Difficulty in attracting and retaining volunteers due to poor engagement systems.",
                "Labor-intensive grant management processes without visibility into fund utilization and compliance."
            ]
        },
        {
            title: "Rialtes Value Proposition:",
            dataList: [
                "Unified donor, volunteer, and program engagement ecosystems.",
                "Advanced data-driven insights for personalized outreach and impact measurement.",
                "Streamlined fundraising, grant, and volunteer processes with automation and AI.",
                "End-to-end lifecycle management from prospecting to stewardship.",
            ]
        }
    ]
    const preDeliveredData = [
        {
            title: "Donor Engagement Accelerator",
            desc: "Tailored solution for tracking donor interactions, pledge management, and customized stewardship journeys. Enables high-touch donor relationships."
        },
        {
            title: "Program & Outcome Tracking Framework",
            desc: "Real-time program performance monitoring linked to beneficiary outcomes and impact reporting for funders and boards."
        },
        {
            title: "Volunteer Management Bolt-On",
            desc: "A powerful tool for managing volunteer recruitment, skills tracking, event scheduling, and impact analysis, ensuring volunteers stay engaged and motivated."
        },
        {
            title: "Family & Household Mapping for Donors",
            desc: "Advanced visualization of household and family contributions to understand collective donor potential, supporting long-term relationship strategies."
        }
    ]
    const commonSectionData = [
        {
            title: "Fundraising & Campaign Management",
            title2: "Driving Engagement and Sustained Giving",
            desc: "Fundraising is the lifeline of every non-profit. Rialtes delivers tailored solutions to streamline every phase of fundraising — from campaign design to donor engagement and stewardship.",
            dataList: [
                "Create donor-centric, personalized campaigns that increase giving and retention.",
                "Manage multi-channel campaigns — email, SMS, events — from one unified platform.",
                "Enable donor segmentation for high-value prospects and recurring gift programs.",
                "Provide transparency to donors on how their contributions are used through automated impact reporting."
            ],
            bgColor: "#FCF0D9",
            deskImg: "/images/industry/non-profit-industry/fundraising-desk.webp",
            mobImg: "/images/industry/non-profit-industry/Mobile/fundraising-mob.webp"
        },
        {
            title: "Family & Household Mapping",
            title2: "Visualizing Donor Relationships",
            desc: "Understanding donor relationships beyond individuals is crucial for maximizing giving potential. Rialtes Family Chart solution helps non-profits uncover connections that lead to deeper engagement.",
            dataList: [
                "Identify collective giving opportunities from family foundations, households, or networks.",
                "Visualize complex donor ecosystems for tailored campaigns.",
                "Track multi-generational giving for legacy campaigns and long-term planning.",
                "Map relationships between donors, board members, and program participants for community building."
            ],
            bgColor: "#E6E6A1",
            deskImg: "/images/industry/non-profit-industry/family-desk.webp",
            mobImg: "/images/industry/non-profit-industry/Mobile/family-mob.webp"
        },
        {
            title: "Personalized Donor Outreach with Salesforce Marketing Cloud",
            desc: "Personalized and timely communication is the cornerstone of modern fundraising. Salesforce Marketing Cloud, powered by Rialtes’ expertise, transforms donor engagement.",
            title2: "",
            dataList: [
                "Deliver relevant, personalized communications based on donor interests and history.",
                "Trigger campaigns for lapsed donors, new donors, and major gift prospects.",
                "AI-powered content recommendations to improve donor response rates.",
                "Dynamic donor journeys that adjust based on behavior and giving patterns."
            ],
            bgColor: "#D8DBEF",
            deskImg: "/images/industry/non-profit-industry/personalized-desk.webp",
            mobImg: "/images/industry/non-profit-industry/Mobile/personalized-mob.webp"
        },
        {
            title: "Donor Management",
            title2: "Cultivating Long-Term Relationships",
            desc: "Strong donor relationships are built on thoughtful engagement and transparent communication. Rialtes empowers non-profits to manage this entire lifecycle effectively.",
            dataList: [
                "Complete 360-degree donor profiles, including giving, engagement, and communication history.",
                "Relationship management for major gifts, corporate sponsors, and grants.",
                "AI-driven donor journey planning for optimal engagement and retention.",
                "Comprehensive acknowledgment and recognition processes to foster loyalty."
            ],
            bgColor: "#E1E6C9",
            deskImg: "/images/industry/non-profit-industry/donor-desk.webp",
            mobImg: "/images/industry/non-profit-industry/Mobile/donor-mob.webp"
        },
        {
            title: "Volunteer Management",
            title2: "Empowering the Backbone of Non-Profits",
            desc: "Volunteers are a vital part of non-profit ecosystems. Rialtes offers comprehensive solutions to engage, manage, and retain them.",
            dataList: [
                "Streamlined registration, scheduling, and skills-based assignment for volunteers.",
                "Self-service volunteer portals for easy interaction and schedule management.",
                "Personalized communication and recognition programs to enhance retention.",
                "Real-time dashboards for volunteer engagement and contribution measurement."
            ],
            bgColor: "#F2D8C2",
            deskImg: "/images/industry/non-profit-industry/volunteer-desk.webp",
            mobImg: "/images/industry/non-profit-industry/Mobile/volunteer-mob.webp"
        },
        {
            title: "Program & Outcome Management",
            title2: "Measuring What Matters",
            desc: "Tracking the true impact of programs is essential for non-profits to attract funding and improve effectiveness. Rialtes makes this possible with advanced solutions.",
            dataList: [
                "End-to-end program lifecycle tracking, from design to delivery and evaluation.",
                "Real-time dashboards for outcome monitoring and impact assessment.",
                "AI-driven insights to optimize program operations and results.",
                "Transparent reporting for donors, boards, and grantors."
            ],
            bgColor: "#E6E1F7",
            deskImg: "/images/industry/non-profit-industry/program-desk.webp",
            mobImg: "/images/industry/non-profit-industry/Mobile/program-mob.webp"
        },
        {
            title: "Grant Management",
            title2: "Simplifying Complex Processes",
            desc: "Effective grant management ensures the right funding at the right time while meeting compliance needs. Rialtes simplifies this lifecycle.",
            dataList: [
                "Track grant opportunities, deadlines, and application progress.",
                "Streamlined workflows for collaborative grant writing and approvals.",
                "Post-award fund allocation and compliance tracking.",
                "Integrated reporting to demonstrate effective fund usage to grantors."
            ],
            bgColor: "#F0E4ED",
            deskImg: "/images/industry/non-profit-industry/grant-desk.webp",
            mobImg: "/images/industry/non-profit-industry/Mobile/grant-mob.webp"
        },
    ]
    return (
        <section className="min-h-screen">
            <Seo
                title="Nonprofit Digital Transformation and IT Solutions | Rialtes"
                description="Rialtes empowers nonprofits with smart IT solutions and digital transformation to streamline grants, donors, volunteers, and program operations seamlessly."
                canonical="https://www.rialtes.com/industry/nonprofit-digital-transformation-it-solutions/"
            />
            <Script
                id="schema-nonprofit"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* herosection */}
            <section className="relative group overflow-hidden h-[420px] lg:h-[550px] 4xl:h-[650px]">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/industry/non-profit-industry/hero-desk-banner.webp"
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
                        src="/images/industry/non-profit-industry/Mobile/hero-mob-banner.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "5% 20%" }}
                        priority
                    />
                </div>
                <div className="relative h-full custom-container sm:flex sm:items-center pt-[123px] sm:pt-0 ">
                    <div className="grid grid-cols-12 w-full">
                        <div className="4xl:col-span-7 sm:col-span-7 md:col-span-6 lg:col-span-6 col-span-9 max-[400px]:col-span-12">
                            <h3 className="text-[18px] md:text-[24px] font-bold">
                                Non-Profit Industry
                            </h3>
                            <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] lg:mt-[28.5px] w-[88%] sm:w-full">
                                Transforming Non-Profit Impact with Rialtes
                            </h2>
                            <h2 className="text-[#000000] text-[20px] leading-tight xl:text-[28px] 4xl:text-[35px] mt-[14px] lg:mt-[46px] font-bold">
                                End-to-End Technology Solutions for Purpose-Driven Organizations
                            </h2>
                        </div>
                        <div className="4xl:col-span-5 sm:col-span-5 md:col-span-6 lg:col-span-6 col-span-3">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description section */}
            <section className="custom-container xl:mt-[99px] mt-[50px]">
                <div className="md:w-[80%] lg:w-[70%] 4xl:w-[80%] sm:w-[90%]">
                    <h1 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[56px] ">
                        Driving Mission Impact for Non-Profits Through Technology and Strategy
                    </h1>
                    <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[43px] mt-[30px] w-[94%] md:w-[90%] lg:w-[90%]">
                        Rialtes empowers non-profits to overcome operational challenges and amplify their mission using Salesforce and SAP-based solutions. From donor and volunteer management to fundraising, grant tracking, and outcome measurement, our end-to-end services, including strategy, implementation, and ongoing support, help organizations achieve scalable growth. With ready-to-deploy accelerators tailored for non-profits, we fast-track digital transformation and maximize impact where it matters most.
                    </p>
                </div>
            </section>
            {/* thought leadership section */}
            <section className="custom-container xl:mt-[121px] mt-[72px] max-md:px-0">
                <div className="grid lg:grid-cols-12 grid-cols-1">
                    <div className="col-span-12 md:order-1 order-2">
                        <div className="grid md:grid-cols-12 grid-cols-1 lg:gap-[40px]">
                            <div className="4xl:col-span-5 xl:col-span-5 md:col-span-6 col-span-12 max-md:mt-[36px] max-md:px-[36px]">
                                <h2 className="text-[26px] xl:text-[40px] 4xl:text-[50px]">
                                    Thought Leadership
                                </h2>
                            </div>
                            <div className="4xl:col-span-7 xl:col-span-7 md:col-span-6 col-span-12 max-md:px-[36px]">
                                <h3 className="text-[22px] xl:text-[30px] 4xl:text-[36px] font-semibold max-md:mt-[14px] w-[90%] sm:w-[70%] md:w-full">
                                    Addressing the Modern Non-Profit Challenges
                                </h3>
                                <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] xl:mt-[19px] mt-[26px] sm:w-[80%] md:w-[90%] lg:w-[84%]">
                                    Non-profits today need to move beyond traditional ways of donor and program management to stay relevant and impactful.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:order-2 order-1 md:mt-[56px] mt-0">
                        <div>
                            <div className="md:block hidden w-full h-full">
                                <Image
                                    src="/images/industry/non-profit-industry/thought-leadership-desk.webp"
                                    alt="thought-leadership desktop img"
                                    width={0}
                                    height={0}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                            <div className="md:hidden block w-full h-full">
                                <Image
                                    src="/images/industry/non-profit-industry/Mobile/thought-leadership-mob.webp"
                                    alt="thought-leadership mob img"
                                    width={0}
                                    height={0}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[80px] 4xl:gap-[120px] gap-y-[40px] mt-[30px] xl:mt-[55px] max-md:px-[36px]">
                    {
                        thoughtLeadershipData.map((data, ind) => {
                            return (
                                <div key={ind}>
                                    <p className="xl:text-[28px] 4xl:text-[32px] text-[20px] leading-tight font-semibold">
                                        {data.title}
                                    </p>
                                    <UnorderedList arrName={data.dataList} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[19px] mt-[20px] pl-[20px]" liClassName="text-[16px] xl:text-[20px] leading-tight font-normal" />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* pre-delivered section */}
            <section className="custom-container xl:mt-[110px] mt-[89px]">
                <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[56px] md:w-[70%] lg:w-[50%] xl:w-[70%] 4xl:w-[70%]">
                    Rialtes Pre-Delivered Accelerators for Non-Profit Excellence
                </h2>
                <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight mb-[34px] xl:mb-[46px] xl:mt-[41px] mt-[26px] font-normal md:w-[80%] xl:w-[70%]">
                    Our proprietary, ready-to-deploy solutions drastically reduce deployment times and improve process efficiencies for non-profits.
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 xl:mt-[56px] mt-[26px] sm:w-[80%] md:gap-[40px] md:gap-y-[21px] gap-y-[16px]">
                    {
                        preDeliveredData.map((data, ind) => {
                            return (
                                <div className="pt-[33px] px-[28px] pb-[46px] xl:px-[48px] xl:pt-[52px] xl:pb-[42px] border border-[#707070] hover:bg-[#D9F2FF]" key={ind}>
                                    <p className="xl:text-[26px] 4xl:text-[30px] text-[20px] leading-tight font-bold text-[#006FBE]">
                                        {data.title}
                                    </p>
                                    <p className="xl:text-[18px] 4xl:text-[24px] text-[16px] leading-tight xl:mt-[27px] mt-[24px] font-normal">
                                        {data.desc}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mt-[30px] xl:mt-[58px]">
                    <LearnMore />
                </div>
            </section>
            {/* common sections */}
            <section className={`md:mt-[133px] mt-[90px] md:space-y-[190px] space-y-[89px]`}>
                {
                    commonSectionData.map((data, ind) => {
                        return (
                            <div key={ind} className="custom-container !pr-0 max-md:px-0 ">
                                <div className="relative max-md:pl-[36px]">
                                    <div className="absolute z-20 mt-[-36px] md:mt-[-40px] xl:mt-[-50px]">
                                        <p className="xl:text-[60px] 4xl:text-[70px] text-[50px] text-[#006FBE] ml-[32px] font-bold">{ind + 1}</p>
                                    </div>
                                    <div className="custom-container !pl-0 xl:pt-[88px] pt-[58px] border-b-4 border-[#006FBE]" style={{ backgroundColor: data.bgColor }}>
                                        {/* extension */}
                                        <div className="absolute top-0 left-0 md:left-[-20px] xl:left-[-40px] 4xl:left-[-100px] h-full w-[36px] md:w-[20px] xl:w-[40px] 4xl:w-[100px] z-0 border-t-4 border-[#006FBE]"
                                            style={{ backgroundColor: data.bgColor }}></div>
                                        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] 4xl:gap-[40px] gap-y-[22px]">
                                            <div className="md:col-span-6 col-span-12">
                                                <h2
                                                    className={`text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px]  ${ind === 3 || ind === 5 ? "xl:w-[60%] lg:w-[70%]" : "md:w-[80%] lg:w-[70%] xl:w-[80%] 4xl:w-[98%]"}`}>
                                                    {data.title}
                                                </h2>
                                            </div>
                                            <div className="md:col-span-6 col-span-12">
                                                {data.title2 && <h2 className={`text-[20px] leading-tight xl:text-[30px] 4xl:text-[36px] font-bold`}>
                                                    {data.title2}
                                                </h2>}
                                                <p className={`xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight ${ind == 2 ? "xl:mt-4" : "xl:mt-[32px]"}  mt-[16px] font-normal`}>
                                                    {data.desc}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] 4xl:gap-[60px] gap-y-[26px] md:mt-0 mt-[34px] relative">
                                            <div className="md:order-1 order-2">
                                                <p className={`xl:text-[28px] 4xl:text-[32px] text-[18px] leading-tight font-semibold md:mt-[80px] ${ind == 2 && "xl:mt-[51px]"}`}>
                                                    Significance:
                                                </p>
                                                <UnorderedList arrName={data.dataList} ulClassName={`xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[19px] mt-[22px] pl-[20px] xl:w-[88%] xl:pb-[182px] pb-[87px] ${ind == 2 && "xl:pb-[108px]"}`} liClassName="text-[16px] xl:text-[20px] leading-tight font-normal" />
                                            </div>
                                            <div className="md:order-2 order-1">
                                                <div className="md:block hidden w-full h-full relative">
                                                    <Image
                                                        src={data.deskImg}
                                                        alt="desktop img"
                                                        width={0}
                                                        height={0}
                                                        className={`w-full h-full object-cover absolute mt-[80px] ${ind == 2 && "md:mt-[50px] lg:mt-[30px]"}`}
                                                        priority
                                                    />
                                                </div>
                                                <div className="md:hidden block w-full h-full">
                                                    <Image
                                                        src={data.mobImg}
                                                        alt="mob img"
                                                        width={0}
                                                        height={0}
                                                        className="w-full h-full object-cover"
                                                        priority
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0">
                                        <div className={`z-20`}>
                                            <LearnMore />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })

                }
            </section>
            {/* seamless section */}
            <section className="custom-container md:mt-[207px] 4xl:mt-[267px] mt-[70px]">
                <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[56px] md:w-[60%] lg:w-[63%] 4xl:w-[80%]">
                    Seamless Platform Integrations for Unified Non-Profit Operations
                </h2>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:mt-[87px] mt-[43px] lg:gap-y-[127px] md:gap-[40px] lg:gap-0 md:gap-y-[50px] gap-y-[50px]">

                    {/* Card 1 */}
                    <div className="md:flex md:flex-col md:h-full">
                        <div className="md:flex md:flex-grow md:flex-col sm:w-[80%] lg:w-full lg:border-r lg:border-gray-700 lg:pr-[40px] max-lg:border-b max-lg:border-gray-700 max-lg:pb-[40px]">
                            <p className="xl:text-[26px] 4xl:text-[30px] text-[20px] leading-tight font-bold text-[#006FBE] xl:w-[80%]">
                                SAP S/4HANA
                            </p>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mb-[46px] xl:mt-[19px] mt-[14px] font-normal">
                                Manage financials, procurement, and donor fund allocation with full transparency.
                            </p>
                            <div className="md:mt-auto mt-[30px]">
                                <LearnMore />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="md:flex md:flex-col md:h-full">
                        <div className="md:flex md:flex-grow md:flex-col sm:w-[80%] lg:w-full lg:pl-[40px] lg:border-r lg:border-gray-700 lg:pr-[40px] max-lg:border-b max-lg:border-gray-700 max-lg:pb-[40px]">
                            <p className="xl:text-[26px] 4xl:text-[30px] text-[20px] leading-tight font-bold text-[#006FBE]">
                                Salesforce NPSP & Experience Cloud
                            </p>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mb-[46px] xl:mt-[19px] mt-[14px] font-normal">
                                Enhance donor, volunteer, and program engagement through intuitive platforms.
                            </p>
                            <div className="md:mt-auto mt-[30px]">
                                <LearnMore />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="md:flex md:flex-col md:h-full">
                        <div className="md:flex md:flex-grow md:flex-col sm:w-[80%] lg:w-full lg:pl-[40px] max-lg:border-b max-lg:border-gray-700 max-lg:pb-[40px]">
                            <p className="xl:text-[26px] 4xl:text-[30px] text-[20px] leading-tight font-bold text-[#006FBE] xl:w-[80%]">
                                SAP ARIBA
                            </p>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mb-[46px] xl:mt-[19px] mt-[14px] font-normal">
                                Optimize procurement processes for non-profit program needs.
                            </p>
                            <div className="md:mt-auto mt-[30px]">
                                <LearnMore />
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="md:flex md:flex-col md:h-full">
                        <div className="md:flex md:flex-grow md:flex-col sm:w-[80%] lg:w-full lg:border-r lg:border-gray-700 lg:pr-[40px] max-lg:border-b max-lg:border-gray-700 max-lg:pb-[40px]">
                            <p className="xl:text-[26px] 4xl:text-[30px] text-[20px] leading-tight font-bold text-[#006FBE]">
                                SAP CPI <br /><span className="xl:text-[18px] 4xl:text-[24px] text-[16px]">(Cloud Platform Integration)</span>
                            </p>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mb-[46px] xl:mt-[19px] mt-[14px] font-normal">
                                Ensure seamless data flow between Salesforce, SAP, and third-party solutions like donor portals.
                            </p>
                            <div className="md:mt-auto mt-[30px]">
                                <LearnMore />
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="md:flex md:flex-col md:h-full">
                        <div className="md:flex md:flex-grow md:flex-col sm:w-[80%] lg:w-full lg:pl-[40px]">
                            <p className="xl:text-[26px] 4xl:text-[30px] text-[20px] leading-tight font-bold text-[#006FBE]">
                                SAP BTP<br /> <span className="xl:text-[18px] 4xl:text-[24px] text-[16px]">(Business Technology Platform)</span>
                            </p>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mb-[46px] xl:mt-[19px] mt-[14px] font-normal">
                                Build custom apps, automate workflows, and integrate AI for smarter operations.
                            </p>
                            <div className="md:mt-auto mt-[30px]">
                                <LearnMore />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* enhanced engagement section */}
            <section className="custom-container md:mt-[121px] mt-[40px] bg-[#F0F0F0] xl:pt-[75px] pt-[43px] xl:pb-[146px] pb-[77px]">
                <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[56px] xl:w-[60%] sm:w-[70%] md:w-[50%] lg:w-[60%]">
                    Enhanced Engagement with Self-Service and AI
                </h2>
                <div className="grid md:grid-cols-2 grid-cols-1 xl:mt-[48px] mt-[47px] md:gap-[20px] gap-y-[93px] sm:gap-y-[0px]">
                    {/* col 1 */}
                    <div>
                        <div className="md:block hidden w-[80%] h-[60%]">
                            <Image
                                src="/images/industry/non-profit-industry/donor-volunteer-desk-img.webp"
                                alt="donor-volunteer desktop img"
                                width={0}
                                height={0}
                                className=" w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className="md:hidden block w-full h-[60%]">
                            <Image
                                src="/images/industry/non-profit-industry/Mobile/donor-volunteer-mob-img.webp"
                                alt="donor-volunteer mob img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className="sm:w-[80%] xl:w-[90%] 4xl:w-[80%]">
                            <h3 className="text-[20px] leading-tight xl:text-[36px] 4xl:text-[40px] xl:mt-[59px] mt-[29px] font-bold">
                                Donor & Volunteer Portals with Salesforce Experience Cloud
                            </h3>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[20px]">
                                Personalized dashboards and engagement tools for donors and volunteers.
                                <br /> <br /> Seamless access to giving history, event registrations, and communication preferences.
                            </p>
                        </div>
                    </div>
                    {/* col 2 */}
                    <div>
                        <div className="md:block hidden w-[80%] h-[60%]">
                            <Image
                                src="/images/industry/non-profit-industry/agentforce-desk-img.webp"
                                alt="agentforce desktop img"
                                width={0}
                                height={0}
                                className=" w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className="md:hidden block w-full h-[60%]">
                            <Image
                                src="/images/industry/non-profit-industry/Mobile/agentforce-mob-img.webp"
                                alt="agentforce mob img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className="sm:w-[80%] xl:w-[90%] 4xl:w-[80%]">
                            <h3 className="text-[20px] leading-tight xl:text-[36px] 4xl:text-[40px] xl:mt-[59px] mt-[29px] font-bold">
                                Agentforce for Non-Profit Case Management
                            </h3>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[20px]">
                                AI-powered donor and volunteer support, automating common queries and cases. <br /> <br /> Proactive service alerts for donor opportunities and engagement milestones.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[75px] gap-y-[29px] md:mt-[148px] xl:mt-[188px] sm:mt-[0px] mt-[93px]">
                    <div className="4xl:col-span-5 md:col-span-5 lg:col-span-6 col-span-12 flex justify-center">
                        <div className="md:block hidden w-full h-full">
                            <Image
                                src="/images/industry/non-profit-industry/data-cloud-desk-img.webp"
                                alt="data-cloud desktop img"
                                width={0}
                                height={0}
                                className=" w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className="md:hidden block w-full h-full">
                            <Image
                                src="/images/industry/non-profit-industry/Mobile/data-cloud-mob-img.webp"
                                alt="data-cloud mob img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                    <div className="4xl:col-span-5 md:col-span-5 lg:col-span-6 col-span-12">
                        <div className="sm:w-[80%] md:w-[90%] lg:w-[80%] flex flex-col items-center xl:w-full">
                            <h3 className="text-[20px] leading-tight xl:text-[36px] 4xl:text-[40px] font-bold">
                                Data Cloud for Unified Donor, Program, and Volunteer Insights
                            </h3>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[20px]">
                                Consolidated 360-degree views for smarter donor segmentation and program targeting.
                                <br />
                                <br />
                                AI-driven models to predict donor retention and volunteer engagement trends.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* learn more btn */}
            <div className="custom-container">
                <div className="absolute mt-[-50px]">
                    <LearnMore />
                </div>
            </div>
            {/* why choose section */}
            <section className="custom-container md:pr-0 xl:mt-[181px] mt-[94px] text-[#000000]">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] max-md:gap-y-[34px]">
                    <div className="md:col-span-6 col-span-12 md:order-1 order-2 xl:w-[90%]">
                        <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[56px]">
                            Why Choose Rialtes for Your Non-Profit Digital Transformation?
                        </h2>
                        <UnorderedList arrName={whyChooseData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[61px] mt-[24px] pl-[20px] 4xl:w-[74%]" liClassName="text-[16px] xl:text-[20px] leading-tight font-normal" />
                        <div className="mt-[46px] xl:mt-[84px]">
                            <LearnMore />
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12 md:order-2 order-1">
                        <div className="md:block hidden w-full h-full">
                            <Image
                                src="/images/industry/non-profit-industry/why-choose-desk-img.webp"
                                alt="why-choose desktop img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className="md:hidden block w-full h-full">
                            <Image
                                src="/images/industry/non-profit-industry/Mobile/why-choose-mob-img.webp"
                                alt="why-choose mob img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            < div className="custom-container lg:mt-[120px] lg:mb-[92px] mt-[73px] mb-[45px]">
                <ContactForm title={'Ready to Amplify Your Non-Profit’s Impact?'} subtitle="Partner with Rialtes to accelerate your automation journey. Our UiPath-certified experts are ready to help you unlock efficiency, reduce costs, and scale innovation." subtitle1="Contact us today for a free automation assessment!" className={"xl:text-[40px] 4xl:text-[60px] text-[26px] xl:w-[50%] 4xl:w-[50%] md:w-[50%]"} />
            </div >
        </section>
    )
}