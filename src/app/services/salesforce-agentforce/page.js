import ContactForm from "@/app/components/contactform";
import LearnMore from "@/app/components/learnMore";
import Image from "next/image";

export default function page() {
    const startYourAIData = [
        {
            title: "Rapid AI-readiness assessments",
            subtitle: "tailored to your industry."
        },
        {
            title: "Conversational AI deployment",
            subtitle: "for Sales, Service, and Field teams."
        },
        {
            title: "Einstein GPT and AI automation",
            subtitle: "for proactive customer care and smarter sales. "
        },
        {
            title: "Agentforce enablement workshops",
            subtitle: "to train and onboard teams."
        },
        {
            title: "Pre-built AI bots",
            subtitle: "for case management, lead nurturing, and knowledge sharing."
        },
    ]
    const unlockData = [
        "Real-time, AI-ready unified profiles with Zero Copy.",
        "Connect Salesforce and SAP data without duplication.",
        "End-to-end visibility for Sales, Service, and Marketing teams."
    ]
    const rialChatData = [
        "Instant WhatsApp messaging embedded inside Salesforce.",
        "Auto-responses, case creation, and agent collaboration.",
        "Pre-built AI chatbots for Agentforce and Service Cloud.",
        "Personalized notifications and marketing campaigns."
    ]
    const ourGlobalData = [
        "24x7 Global Support Teams in the USA, Canada, India, and Singapore.",
        "Onsite Consulting & Hybrid Models for high-impact collaboration.",
        "Fully Offshore Delivery for cost-effective scalability.",
        "Led by PMP & Scrum-certified Project Managers ensuring agility and governance."
    ]
    const rialtesSalesforceData = [
        "300+ Salesforce Certifications across key modules: Agentforce, Sales, Service, Data Cloud, Marketing, MuleSoft, Tableau.",
        "Certified Salesforce Architects, Consultants, and AI Experts.",
        "Industry-specific expertise to tailor Salesforce to your business needs.",
        "Cross-cloud specialists for Sales, Service, AI, and Industry Clouds."
    ]
    const migrateData = [
        "Low-risk, rapid migrations with minimal disruption.",
        "Data security and compliance at every step.",
        " AI and future-ready Salesforce architecture post-migration.",
    ]
    const ourSalesforceData = [
        {
            title: "Healthcare Cloud",
            desc: "Patient journeys, HIPAA compliance, care collaboration."
        },
        {
            title: "Manufacturing Cloud",
            desc: "Partner, dealer, and distributor portals; service ops."
        },
        {
            title: "Education Cloud",
            desc: "Student lifecycle, alumni, and donor management."
        },
        {
            title: "Automotive Cloud",
            desc: "Connected vehicle, dealer management, service scheduling."
        },
        {
            title: "Real Estate Cloud",
            desc: "Customer engagement, property management, lead nurturing."
        },
        {
            title: "Transportation Cloud",
            desc: "Loyalty, booking, service optimization."
        },
        {
            title: "Life Sciences Cloud",
            desc: "Clinical trial management, patient engagement, compliance."
        },
    ]
    const whyChooseData = [
        {
            img: "/images/services/salesforce-agentforce/Mobile/why-choose- (1).svg",
            data: "Salesforce Managed Services, AI enablement, and Data Cloud experts."
        },
        {
            img: "/images/services/salesforce-agentforce/Mobile/why-choose- (2).svg",
            data: "Global delivery with a local touch."
        },
        {
            img: "/images/services/salesforce-agentforce/Mobile/why-choose- (3).svg",
            data: "24x7 support to keep you running — and growing."
        },
        {
            img: "/images/services/salesforce-agentforce/Mobile/why-choose- (4).svg",
            data: "RialChat (WhatsApp Integration) included — Free."
        },
        {
            img: "/images/services/salesforce-agentforce/Mobile/why-choose- (5).svg",
            data: "Deep focus on Agentforce and AI transformation journeys."
        },
    ]
    const certifiedData = [
        "Salesforce Architect-led design and roadmaps.",
        "PMP/Scrum-certified leadership for agile, transparent delivery.",
        "AI, Data Cloud, and Agentforce consultants for next-gen Salesforce.",
        "Ongoing enhancements and business alignment through SalesforceAgent+."
    ]
    const salesforceagentData = [
        {
            title: "Transform Sales & Service Cloud Operations",
            list: [
                "Optimize end-to-end Sales and Service processes.",
                "Intelligent case management, AI-powered lead conversion, omnichannel service.",
                "Proactive enhancements and business process realignment."
            ]
        },
        {
            title: "Lightning Component Development & UX Modernization",
            list: [
                "Custom Lightning Web Components (LWC) and dynamic user experiences.",
                "Responsive, mobile-friendly, and tailored UI solutions.",
                "Performance and accessibility optimization."
            ]
        },
        {
            title: "Seamless Mulesoft Integrations",
            list: [
                "API-led, scalable integrations with SAP, Oracle, NetSuite, Workday, and others.",
                "Secure, real-time data exchange via MuleSoft.",
                "Event-driven, future-proof architecture."
            ]
        },
        {
            title: "Hassle-Free Salesforce Data Migrations",
            list: [
                "Smooth transition from legacy CRMs and spreadsheets.",
                "Full data mapping, transformation, and cleansing.",
                "Industry-compliant, secure, and staged data migrations."
            ]
        },
        {
            title: "Industry Cloud Expertise",
            list: [
                "Healthcare, Manufacturing, Education, Automotive, Real Estate, Transportation, and Life Sciences.",
                "Tailored workflows and compliance (HIPAA, ISO, etc.).",
                "Pre-built accelerators for rapid deployment."
            ]
        },
        {
            title: "Tableau CRM & Salesforce Data Cloud Support",
            list: [
                "Advanced analytics and AI insights with Tableau CRM.",
                "Unified customer profiles with Salesforce Data Cloud (CDP).",
                "Zero Copy architecture leveraging SAP Data Cloud — no data duplication."
            ]
        },
        {
            title: "Marketing Cloud & Personalization Services",
            list: [
                "Intelligent customer journeys and personalized campaigns.",
                "Cross-cloud marketing with Journey Builder, Email Studio, Interaction Studio.",
                "Deep engagement analytics and conversion tracking."
            ]
        },
    ]
    return (
        <section>
            {/* herosection */}
            <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/services/salesforce-agentforce/hero-desk-banner.webp"
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
                        src="/images/services/salesforce-agentforce/Mobile/hero-mob-banner.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "5% 40%" }}
                        priority
                    />
                </div>

                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                        <div className="col-span-12">
                            <h3 className="text-[18px] lg:text-[24px] font-bold">
                                Salesforce Agent+
                            </h3>
                            <h1 className="text-[26px] leading-[38px] md:text-[36px] md:leading-[50px] lg:text-[56px] 2xl:text-[60px] lg:leading-[73px] mt-[11.5px] md:mt-[28.5px]">
                                Unleash the Power of <br /> Salesforce with Rialtes <br /> Salesforce Agent+
                            </h1>
                            <h4 className="text-[18px] lg:text-[35px] font-bold xl:mt-[23px] mt-[15px]">
                                AI-Ready, Always-On <br /> Managed Services
                            </h4>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>

            {/* page desc section */}
            <section className="custom-container xl:mt-[135px] mt-[42px]">
                <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px]">
                    <div className="lg:col-span-6 xl:col-span-7 col-span-12">
                        <h2 className="2xl:text-[60px] xl:text-[54px] text-[26px] leading-tight font-light md:w-[90%] lg:w-full">
                            Reimagine Salesforce. Empower Your Agents. Deliver Customer Magic.
                        </h2>
                    </div>
                    <div className="lg:col-span-6 xl:col-span-5 col-span-12">
                        <p className="xl:text-[22px] text-[16px] leading-tight mt-[23px] lg:mt-[10px]">
                            At Rialtes, we go beyond traditional Salesforce support. SalesforceAgent+ is our next-gen Managed Services offering, designed to keep your Salesforce platform future-ready, AI-enabled, and continuously optimized — with 24x7 global support, AI-driven solutions like Agentforce, and seamless integration across your enterprise.
                        </p>
                    </div>
                </div>
            </section>

            {/* start your AI section */}
            <section className="xl:mt-[94px] mt-[49px]">
                {/* Mobile image */}
                <div className="block md:hidden w-full h-full">
                    <Image
                        src="/images/services/salesforce-agentforce/Mobile/start-your-ai-mob-img.webp"
                        alt="mobile image"
                        className="w-full h-full object-cover"
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                {/* Desktop image */}
                <div className="hidden md:block w-full h-full 4xl:pr-[80px] 2xl:pr-[60px] xl:pr-[40px] lg:pr-[20px]">
                    <Image
                        src="/images/services/salesforce-agentforce/start-your-ai-desk-img.webp"
                        alt="mobile image"
                        className="w-full h-full object-cover"
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                <div className="relative z-20 2xl:mt-[-230px] xl:mt-[-160px] lg:mt-[-120px] md:mt-[-120px] sm:mt-[-180px] mt-[-120px]">
                    <div className="custom-container">
                        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] 2xl:gap-[80px] bg-[#006FBE] xl:pt-[64px] pt-[26px] xl:pl-[61px] 2xl:pl-[81px] xl:pr-[81px] px-[26px] md:px-[36px] text-[#ffffff]">
                            <div className="lg:col-span-6 xl:col-span-6 col-span-12">
                                <div className="h-full flex flex-col">

                                    <div className="xl:mb-[61px]">
                                        <h2 className="xl:text-[60px] text-[26px] leading-tight font-light">
                                            Start Your AI Journey Now
                                        </h2>
                                        <h3 className="xl:text-[36px] text-[22px] mt-[18px] xl:mt-[31px] leading-tight font-semibold">
                                            Agentforce Adoption Services with Rialtes
                                        </h3>
                                        <p className="xl:text-[22px] text-[16px] leading-tight xl:mt-[28px] mt-[23px] font-light">
                                            Agentforce is revolutionizing customer and agent interactions — and Rialtes makes adoption easy and impactful:
                                        </p>
                                    </div>


                                    <div className="mt-auto lg:block hidden">
                                        <LearnMore />
                                    </div>
                                </div>

                            </div>
                            <div className="lg:col-span-6 xl:col-span-6 col-span-12">
                                <ul className="list-disc xl:space-y-[27px] space-y-[19px]">
                                    {
                                        startYourAIData.map((data, ind) => {
                                            return (
                                                <>
                                                    <li className="xl:text-[22px] text-[16px] leading-tight lg:mt-0 mt-[23px]" key={ind}>
                                                        <span className="font-bold">{data.title}</span> {data.subtitle}
                                                    </li>
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                                <p className="xl:text-[24px] text-[17px] leading-tight xl:mt-[36px] mt-[38px] font-light lg:mb-[56px]">
                                    Accelerate your AI strategy with Rialtes — seamlessly, securely, and fast.
                                </p>

                                <div className="mt-[48px] lg:hidden block">
                                    <LearnMore />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* salesforceagent section */}
            <section className="custom-container lg:mt-[98px] mt-[48px]">
                <h2 className="xl:text-[60px] text-[26px] leading-tight font-light">
                    SalesforceAgent+ Managed Services
                </h2>
                <h3 className="xl:text-[36px] text-[22px] leading-tight font-semibold xl:mt-[34px] mt-[15px] 2xl:w-[70%] xl:w-[80%] lg:w-[70%] md:w-[80%] sm:w-[70%]">
                    Powering Continuous Salesforce Innovation. Always-On Support. AI-Driven Innovation. Industry-Specific Solutions.
                </h3>

                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] xl:gap-y-[89px] lg:gap-y-[59px] gap-y-[68px] xl:mt-[106px] mt-[59px] 2xl:w-[80%] md:w-[86%] sm:w-[70%] xl:w-full">
                    {

                        salesforceagentData.map((data, ind) => {
                            return (
                                <div className="border border-[#707070] xl:px-[40px] xl:pb-[46px] xl:pt-[90px] px-[21px] pb-[34px] pt-[55px]">
                                    <p key={ind} className="xl:text-[30px] text-[20px] leading-tight text-[#006FBE] font-semibold bg-[#ffffff] xl:mt-[-116px] md:mt-[-72px] mt-[-70px] w-fit">
                                        {data.title}
                                    </p>
                                    <ul className="list-disc xl:space-y-[27px] space-y-[19px] xl:mt-[54px] mt-[30px] xl:ml-[26px] ml-[20px]">
                                        {
                                            data.list.map((listData, ind) => {
                                                return (
                                                    <li key={ind} className="xl:text-[22px] text-[20px] leading-tight">{listData}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            {/* unlock ai section */}
            <section className="custom-container xl:mt-[71px] mt-[72px]">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-y-[36px] lg:gap-[60px] 2xl:gap-[80px]">
                    <div>
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/Mobile/unlock-mob-img.webp"
                                alt="mobile image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/unlock-desk-img.webp"
                                alt="mobile image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                    </div>
                    <div className="my-auto">

                        <h2 className="xl:text-[60px] text-[26px] leading-tight font-light">
                            Unlock AI and Data Synergy
                        </h2>
                        <h3 className="xl:text-[36px] text-[22px] mt-[18px] xl:mt-[31px] leading-tight font-semibold">
                            Salesforce Data Cloud + SAP Data Cloud Zero Copy
                        </h3>
                        <ul className="list-disc xl:mt-[35px] mt-[29px] lg:ml-[26px] ml-[20px]">
                            {
                                unlockData.map((data, ind) => {
                                    return (
                                        <li key={ind} className="xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[23px]">
                                            {data}
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div className="mt-[40px] xl:mt-[53px] xl:p-[32px] p-[24px] bg-[#006FBE] text-[#ffffff] md:w-[90%] lg:w-full">
                            <p className="xl:text-[24px] text-[18px] leading-tight">
                                Drive real-time decisions without slowing down operations.
                            </p>
                        </div>


                        <div className="xl:mt-[53px] mt-[39px]">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </section>

            {/* rial chat section */}
            <section className="xl:mt-[134px] mt-[72px]">
                {/* Mobile image */}
                <div className="block lg:hidden w-full h-full">
                    <Image
                        src="/images/services/salesforce-agentforce/Mobile/rial-chat-mob-img.webp"
                        alt="mobile image"
                        className="w-full h-full object-cover"
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                {/* Desktop image */}
                <div className="2xl:mx-[80px] xl:mx-[40px] lg:mx-[20px]">
                    <div className="hidden lg:block w-full h-full">
                        <Image
                            src="/images/services/salesforce-agentforce/rial-chat-desk-img.webp"
                            alt="mobile image"
                            className="w-full h-full object-cover"
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                </div>
                <div>
                    <div className="custom-container max-lg:px-0">
                        <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[21px] lg:gap-[60px] 2xl:gap-[80px] bg-[#006FBE] xl:pb-[106px] pb-[77px] xl:pt-[64px] pt-[26px] xl:pl-[61px] 2xl:pl-[81px] xl:pr-[81px] px-[26px] md:px-[36px] text-[#ffffff]">
                            <div className="lg:col-span-6 xl:col-span-6 col-span-12">
                                <div className="h-full flex flex-col">

                                    <div>
                                        <h2 className="2xl:text-[60px] lg:text-[50px] text-[26px] leading-tight font-light">
                                            RialChat – FREE WhatsApp Service Included with SalesforceAgent+!
                                        </h2>
                                        <h3 className="xl:text-[36px] text-[22px] mt-[18px] xl:mt-[31px] leading-tight font-semibold">
                                            Turn Every Chat into a Customer Moment.
                                        </h3>
                                    </div>


                                </div>

                            </div>
                            <div className="lg:col-span-6 xl:col-span-6 col-span-12">
                                <p className="xl:text-[22px] text-[16px] leading-tight font-light">
                                    With every SalesforceAgent+ subscription, you get RialChat — our enterprise-grade WhatsApp integration for Salesforce — FREE.
                                </p>
                                <ul className="list-disc xl:space-y-[27px] space-y-[19px] xl:mt-[36px] mt-[25px] xl:ml-[26px] ml-[20px]">
                                    {
                                        rialChatData.map((data, ind) => {
                                            return (
                                                <>
                                                    <li className="xl:text-[22px] text-[16px] leading-tight lg:mt-0 mt-[23px]" key={ind}>
                                                        {data}
                                                    </li>
                                                </>
                                            )
                                        })
                                    }
                                </ul>

                            </div>
                        </div>
                        <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[21px] lg:gap-[20px] px-[36px] xl:pl-[61px] 2xl:pl-[81px] xl:mt-[-50px] lg:mt-[-40px] mt-[-40px] xl:pr-[81px]">
                            <div className="lg:col-span-9 col-span-12">
                                <div className="xl:py-[28px] xl:px-[31px] py-[22px] px-[25px] bg-[#073259] text-[#ffffff] sm:w-fit">
                                    <p className="xl:text-[24px] text-[18px] leading-tight">
                                        Engage customers where they are — at no extra cost!
                                    </p>
                                </div>
                            </div>
                            <div className="lg:col-span-3 col-span-12">
                                <div className="flex flex-row w-full lg:mt-[-10px] xl:mt-0">
                                    <div className="lg:ml-auto">
                                        <LearnMore />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* our global section */}
            <section section className="custom-container xl:mt-[117px] mt-[58px]">
                <h2 className="xl:text-[60px] text-[26px] leading-tight font-light 2xl:w-[90%] md:w-[80%] lg:w-full">
                    Our Global, Scalable, 24x7 Salesforce Support Delivery Model
                </h2>

                <h3 className="xl:text-[36px] text-[16px] leading-tight xl:mt-[36px] mt-[22px] font-semibold w-[80%] lg:w-full">
                    Flexible, High-Touch, and Cost-Effective
                </h3>
                <ul className="list-disc xl:space-y-[27px] space-y-[19px] xl:mt-[58px] mt-[25px] xl:ml-[26px] ml-[20px] md:w-[65%] lg:w-[55%] 2xl:w-[50%]">
                    {
                        ourGlobalData.map((data, ind) => {
                            return (
                                <>
                                    <li className="xl:text-[22px] text-[16px] leading-tight" key={ind}>
                                        {data}
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>

            </section>

            {/* rialtes salesforce section */}
            <section className="custom-container xl:mt-[129px] mt-[72px]">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-y-[36px] lg:gap-[60px] 2xl:gap-[80px]">
                    <div>
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/Mobile/rialtes-salesforce-mob-img.webp"
                                alt="mobile image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/rialtes-salesforce-desk-img.webp"
                                alt="mobile image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                    </div>
                    <div className="my-auto">

                        <h2 className="xl:text-[60px] text-[26px] leading-tight font-light">
                            Rialtes Salesforce Expertise
                        </h2>
                        <h3 className="xl:text-[36px] text-[22px] mt-[18px] xl:mt-[35px] leading-tight font-semibold">
                            The Force Behind Your Success
                        </h3>
                        <ul className="list-disc xl:mt-[52px] mt-[31px] lg:ml-[26px] ml-[20px]">
                            {
                                rialtesSalesforceData.map((data, ind) => {
                                    return (
                                        <li key={ind} className="xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[23px]">
                                            {data}
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div className="mt-[54px] xl:mt-[32px] xl:px-[31px]  xl:py-[26px] p-[24px] bg-[#163055] text-[#ffffff] md:w-[90%] lg:w-full">
                            <p className="xl:text-[24px] text-[18px] leading-tight">
                                Your success is powered by expertise that’s always a step ahead.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* our salesforce section */}
            <section>
                <div className="xl:mt-[155px] mt-[110px] bg-[url('/images/services/salesforce-agentforce/Mobile/our-salesforce-mob-bg.webp')] md:bg-[url('/images/services/salesforce-agentforce/our-salesforce-desk-bg.webp')] bg-cover bg-no-repeat bg-center xl:pt-[84px] pt-[52px] xl:pb-[103px] pb-[142px] text-[#ffffff]">
                    <div className="custom-container">
                        <h2 className="xl:text-[60px] text-[26px] leading-tight font-light xl:w-[80%] lg:w-[40%] sm:w-[60%]">
                            Our Salesforce Industry Cloud Specializations
                        </h2>

                        <h3 className="xl:text-[36px] text-[16px] leading-tight xl:mt-[47px] mt-[31px]">
                            Built for Your Business
                        </h3>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-[20px] gap-y-[21px] lg:mt-[65px] mt-[38px] xl:w-[96%] 2xl:w-[90%] md:w-[90%] sm:w-[70%]">
                            {
                                ourSalesforceData.map((data, ind) => {
                                    return (
                                        <div key={ind} className="2xl:pt-[39px] 2xl:px-[49px] 2xl:pb-[49px] pt-[33px] px-[28px] pb-[38px] bg-[#ffffff]">
                                            <p className="xl:text-[26px] text-[20px] leading-tight text-[#006FBE] font-semibold">
                                                {data.title}
                                            </p>
                                            <p className="xl:text-[22px] text-[16px] leading-tight xl:mt-[23px] mt-[16px] text-[#000000]">
                                                {data.desc}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                </div>
                <div className="custom-container">
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[21px] lg:gap-[20px] xl:mt-[-50px] lg:mt-[-40px] mt-[-40px]">
                        <div className="lg:col-span-9 col-span-12">
                            <div className="xl:py-[28px] xl:px-[31px] py-[22px] px-[25px] bg-[#006FBE] text-[#ffffff] sm:w-fit">
                                <p className="xl:text-[24px] text-[18px] leading-tight">
                                    Whatever your industry, Rialtes helps Salesforce work smarter for you.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-3 col-span-12">
                            <div className="flex flex-row w-full lg:mt-[-10px] xl:mt-0">
                                <div className="lg:ml-auto">
                                    <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* migrate salesforce section */}
            <section className="custom-container xl:mt-[197px] mt-[72px]">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[36px] md:gap-[20px]">

                    <div className="my-auto md:order-1 order-2">

                        <h2 className="xl:text-[50px] 2xl:text-[60px]  text-[26px] leading-tight font-light">
                            Migrate to Salesforce
                        </h2>
                        <h3 className="xl:text-[36px] text-[20px] mt-[24px] xl:mt-[37px] leading-tight font-semibold">
                            Seamlessly and Strategically
                        </h3>
                        <p className="xl:text-[22px] text-[16px] leading-tight xl:mt-[37px] mt-[23px] font-normal xl:w-[80%]">
                            Whether migrating from legacy CRMs, Zoho, HubSpot, Dynamics, or custom systems, Rialtes ensures:
                        </p>
                        <ul className="list-disc xl:mt-[52px] mt-[31px] md:ml-[26px] ml-[20px] xl:w-[80%]">
                            {
                                migrateData.map((data, ind) => {
                                    return (
                                        <li key={ind} className="xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[23px]">
                                            {data}
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div className="mt-[34px] xl:mt-[63px] xl:pl-[31px] xl:py-[26px] p-[24px] bg-[#163055] text-[#ffffff] w-fit md:w-[90%] lg:w-full">
                            <p className="xl:text-[24px] text-[18px] leading-tight">
                                Migrate confidently. Operate smarter. Grow faster.
                            </p>
                        </div>

                    </div>
                    <div className="md:order-2 order-1">
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/Mobile/migrate-mob-img.webp"
                                alt="mobile image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/migrate-desk-img.webp"
                                alt="mobile image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* certified salesforce section */}
            <section className="custom-container xl:mt-[125px] mt-[83px] md:pl-0 max-md:px-0">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div>
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/Mobile/certified-mob-img.webp"
                                alt="mobile image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/certified-desk-img.webp"
                                alt="mobile image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>

                    </div>
                    <div className="bg-[#67C774] xl:pt-[47px] xl:px-[60px] 2xl:px-[80px] xl:pb-[92px] pt-[41px] px-[26px] pb-[79px] md:mt-[20%] max-md:mx-[36px]">
                        <h2 className="2xl:text-[60px] xl:text-[58px] text-[26px] leading-tight font-light sm:w-[80%] md:w-full">
                            Certified Salesforce Architects & AI Strategists for Every Project
                        </h2>
                        <ul className="list-disc xl:mt-[44px] mt-[28px] md:ml-[26px] ml-[20px]">
                            {
                                certifiedData.map((data, ind) => {
                                    return (
                                        <li key={ind} className="xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[23px]">
                                            {data}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="absolute xl:mt-[40px] mt-[30px]">
                            <LearnMore />
                        </div>
                    </div>

                </div>
            </section>

            {/* why choose section */}
            <section className="custom-container xl:mt-[125px] mt-[83px]">
                <h2 className="xl:text-[60px] text-[26px] leading-tight font-light">
                    Why Choose Rialtes?
                </h2>
                <h3 className="xl:text-[36px] text-[20px] mt-[20px] xl:mt-[40px] leading-tight font-semibold sm:w-[70%] md:w-[50%] 2xl:w-[50%] xl:w-[54%] lg:w-[40%]">
                    Your Trusted Salesforce AI & Managed Services Partner
                </h3>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[60px] gap-y-[60px] xl:gap-y-[80px] 2xl:gap-y-[110px] xl:gap-[60px] 2xl:gap-[80px] xl:mt-[68px] mt-[70px]">
                    {
                        whyChooseData.map((data, ind) => {
                            return (
                                <div className="" key={ind}>
                                    <div>
                                        <Image
                                            src={data.img}
                                            alt="mobile image"
                                            className="lg:w-[139px] lg:h-[139px] w-[100px] h-[100px]"
                                            width={0}
                                            height={0}
                                            priority
                                        />
                                    </div>

                                    <p className="xl:text-[26px] text-[18px] leading-tight lg:mt-[45px] mt-[32px] font-semibold md:w-[80%] xl:w-full 2xl:w-[90%] sm:w-[48%]">
                                        {data.data}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            {/* Contact Form */}
            < div className="custom-container xl:mt-[117px] xl:mb-[104px] mt-[104px] mb-[45px]">
                <ContactForm title={'Let’s Elevate Your Salesforce Together!'} subtitle="Ready to unlock AI, boost productivity, and optimize Salesforce?" subtitle1="Contact Rialtes to discover how SalesforceAgent+ can supercharge your Salesforce ecosystem." />
            </div >
        </section>
    )
}