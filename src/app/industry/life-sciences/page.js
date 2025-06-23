import ContactForm from "@/app/components/contactform";
import Image from "next/image";

export default function page() {
    const whyRialtesData = [
        {
            title: "Industry-Proven Accelerators",
            desc: "Body Map, Patient Interaction, and Clinical Trial Solutions tailored for fast, compliant deployment."
        },
        {
            title: "End-to-End Services",
            desc: "From Advisory and Implementation to Post-Go-Live Optimization and Quality Assurance."
        },
        {
            title: "Strategic Partnerships",
            desc: "Powered by SAP, Salesforce, MuleSoft, and Oracle."
        },
        {
            title: "Deep Expertise",
            desc: "Serving Pharma, Payers, Providers, MedTech, and Public Health."
        },
        {
            title: "AI & Data Cloud-Driven Insights",
            desc: "For smarter, faster decisions and patient-centric engagement."
        },
    ]

    const seamlessData = [
        "API-Led Integration connecting SAP, Oracle, Salesforce, and EMRs.",
        "Order-to-Cash, Procure-to-Pay Automation.",
        "Regulatory Data Sync, Financial and Clinical Data Flow."
    ]

    const thoughLeadershipData = [
        "Navigating stringent global regulations like HIPAA, GDPR, and FDA 21 CFR Part 11.",
        "Accelerating time-to-market for life-saving drugs, therapies, and devices.",
        "Enhancing patient and provider engagement with real-time, personalized experiences.",
        "Enabling value-based care through seamless payer-provider collaboration.",
        "Leveraging AI for clinical trial optimization, safety, and real-world evidence."
    ]

    const prebuiltData = [
        "Body Map: Interactive visualization for patient medical history and clinical insights.",
        "Patient Interaction: End-to-end patient engagement journey with real-time communications.",
        "Clinical Trial Management Accelerators for seamless trial operations and compliance.",
    ]

    const commonSectionData = [
        {
            title: "Payers Module",
            subtitle: "Intelligent Care Management for Health Insurers",
            dataList: [
                "Member and Plan Management for personalized health solutions.",
                "AI-Powered Claims Adjudication, Utilization Management, and Fraud Detection.",
                "Value-Based Care and Population Health Insights.",
                "Real-Time Payer-Provider Collaboration using Salesforce Health Cloud."
            ],
            blueCard: "Deliver efficient, personalized care and manage cost with real-time analytics.",
            mobImg: "/images/industry/life-science/Mobile/payers-module-mob.webp",
            deskImg: "/images/industry/life-science/payers-module-desk.webp",
        },
        {
            title: "Provider Network Solutions",
            subtitle: "Seamless Care Coordination and Provider Engagement",
            dataList: [
                "Provider Onboarding, Credentialing, and Relationship Management.",
                "Care Pathways for chronic, acute, and preventative care.",
                "AI-Driven Patient Risk Stratification and personalized care models.",
                "Referral and Provider Collaboration Platforms integrated via Salesforce."
            ],
            blueCard: "Enhancing patient experiences with connected, coordinated care.",
            mobImg: "/images/industry/life-science/Mobile/provider-mob.webp",
            deskImg: "/images/industry/life-science/provider-desk.webp",
        },
        {
            title: "Pharma Innovation",
            subtitle: "Fast-Tracking Patient Access, Safety, and Compliance",
            dataList: [
                "End-to-end Patient Support Programs (PSPs) and HCP Engagement.",
                "AI-Driven Market Access and Payer Negotiation Tools.",
                "Integrated Pharmacovigilance and Drug Safety Monitoring.",
                "Salesforce Health Cloud for patient-centric program orchestration."
            ],
            blueCard: "Smarter, faster, and safer therapy launches.",
            mobImg: "/images/industry/life-science/Mobile/pharma-mob.webp",
            deskImg: "/images/industry/life-science/pharma-desk.webp",
        },
        {
            title: "MedTech Revolution",
            subtitle: "Connected Devices and Remote Monitoring for Better Care",
            dataList: [
                "Complete Device Lifecycle and Patient Management.",
                "Predictive Maintenance and AI Diagnostics for medical equipment.",
                "Field Service and Technician Scheduling through Service Cloud.",
                "Integrated Remote Monitoring and Digital Health Platforms."
            ],
            blueCard: "Deliver superior patient outcomes with connected MedTech solutions.",
            mobImg: "/images/industry/life-science/Mobile/medtech-mob.webp",
            deskImg: "/images/industry/life-science/medtech-desk.webp",
        },
        {
            title: "Public Health Excellence",
            subtitle: "Data-Driven, Community-Focused Health Services",
            dataList: [
                "Surveillance, Outbreak Management, and Case Tracking.",
                "Vaccination and Preventive Care Management.",
                "AI-Powered Social Determinants of Health (SDOH) Analysis.",
                "Public Health Community Outreach and Behavioral Health Programs."
            ],
            blueCard: "Strengthening community health through data and AI insights.",
            mobImg: "/images/industry/life-science/Mobile/public-health-mob.webp",
            deskImg: "/images/industry/life-science/public-health-desk.webp",
        },
        {
            title: "Hyper-Personalized Patient Engagement",
            subtitle: "Salesforce Marketing Cloud + Life Sciences Cloud",
            dataList: [
                "Patient and HCP Segmentation with AI.",
                "Omnichannel Campaigns (Email, SMS, Social).",
                "Personalized Education and Adherence Programs.",
                "Compliance-Driven Patient Journeys."
            ],
            blueCard: "Transforming patient engagement into meaningful outcomes.",
            mobImg: "/images/industry/life-science/Mobile/hyper-mob.webp",
            deskImg: "/images/industry/life-science/hyper-desk.webp",
        },
        {
            title: "Supply Chain & Inventory Excellence",
            subtitle: "Powered by Data Cloud",
            dataList: [
                "Real-Time Inventory and Supply Chain Visibility.",
                "AI-Driven Demand Forecasting and Cold Chain Compliance.",
                "Integrated Logistics and Distribution Network.",
            ],
            blueCard: "Ensuring life-saving therapies and devices reach patients on time.",
            mobImg: "/images/industry/life-science/Mobile/supply-chain-mob.webp",
            deskImg: "/images/industry/life-science/supply-chain-desk.webp",
        },
    ]

    const commonSectionData1 = [
        {
            title: "Advanced Data Visualization",
            subtitle: "Insights with Tableau & Data Cloud",
            dataList: [
                "Patient Outcomes Dashboards.",
                "Sales & Market Access Visualizations.",
                "Real-World Evidence and Safety Reporting.",
                "Predictive Analytics for Care and Compliance."
            ],
            blueCard: "Transform raw data into actionable intelligence.",
            mobImg: "/images/industry/life-science/Mobile/advanced-mob.webp",
            deskImg: "/images/industry/life-science/advanced-desk.webp",
        },
        {
            title: "AI-Driven Future",
            subtitle: "Transforming Life Sciences with Intelligence",
            dataList: [
                "Accelerated Clinical Trials and Drug Discovery.",
                "AI in Patient Risk Detection and Personalization.",
                "Chatbots and Virtual Assistants for patient communication.",
                "AI-Driven Compliance Monitoring and Pharmacovigilance."
            ],
            blueCard: "AI is revolutionizing patient care, therapy development, and safety.",
            mobImg: "/images/industry/life-science/Mobile/ai-driven-mob.webp",
            deskImg: "/images/industry/life-science/ai-driven-desk.webp",
        },
        {
            title: "Quick Commerce in Life Sciences",
            subtitle: "Fast-Tracking Therapies and Devices to Patients",
            dataList: [
                "On-Demand Drug Fulfillment and Delivery.",
                "Rapid Medical Device Distribution and Setup.",
                "AI-Powered Logistics and Supply Chain Optimization.",
            ],
            blueCard: "Deliver healthcare at the speed of need — powered by SAP & Salesforce.",
            mobImg: "/images/industry/life-science/Mobile/quick-mob.webp",
            deskImg: "/images/industry/life-science/quick-desk.webp",
        },
    ]
    return (
        <section className="min-h-screen">
            {/* herosection */}
            <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/industry/life-science/hero-desk-banner.webp"
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
                        src="/images/industry/life-science/Mobile/hero-mob-banner.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "5% 40%" }}
                        priority
                    />
                </div>

                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full text-[#ffffff]">
                        <div className="col-span-12">
                            <h3 className="text-[18px] lg:text-[24px] font-bold">
                                Life Sciences Industry
                            </h3>
                            <h1 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px] w-[67%] sm:w-full">
                                Powering the Next <div className="sm:block hidden" /> Era of Life Sciences
                            </h1>
                            <h4 className="text-[20px] leading-tight xl:text-[28px] 4xl:text-[35px] font-bold xl:mt-[23px] mt-[15px]">
                                Intelligent, Connected, <div /> and Patient-Centric <div /> Solutions
                            </h4>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>

            {/* page description section */}
            <section className="custom-container xl:mt-[119px] mt-[44px]">
                <div className="">
                    <h2 className="2xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light w-[90%] md:w-[90%] lg:w-[60%] xl:w-[66%] 2xl:w-[90%] 4xl:w-[80%]">
                        Delivering Innovation and Compliance for Pharma, MedTech, Payers, Providers & Public Health through SAP, Salesforce & AI
                    </h2>
                    <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight mt-[19px] xl:mt-[49px] w-[80%] lg:w-[60%] xl:w-[70%]">
                        In a world where patient-centricity, compliance, and innovation are critical, life sciences organizations must move fast, stay compliant, and deliver exceptional value. Rialtes partners with global life sciences leaders to redefine their business models, connect ecosystems, and unlock the potential of AI and cloud technologies.
                    </p>
                </div>
            </section>

            {/* did u know section */}
            <section className="custom-container xl:mt-[124px] mt-[56px]">
                <div className="grid md:grid-cols-12 grid-cols-1 border border-[#707070]">
                    <div className="md:col-span-7 col-span-12 border-r border-[#707070]">
                        <div className="relative pt-[33px] pb-[26px] pl-[26px] pr-[23px] xl:pt-[58px] xl:pb-[50px] xl:pl-[49px] xl:pr-[44px]">
                            <p className="xl:text-[36px] 4xl:text-[50px] text-[26px] leading-tight text-[#038EF4] italic w-fit bg-[#ffffff] px-[14px] top-[-20px] absolute">Did you know?</p>
                            <p className="xl:text-[22px] 4xl:text-[28px] text-[18px] leading-tight">
                                The global life sciences market is projected to reach <span className="xl:text-[28px] 4xl:text-[35px] text-[22px] text-[#038EF4] font-bold"> $3.6 trillion by 2030.</span>
                            </p>
                        </div>
                        <div className="pt-[30px] pb-[23px] pl-[26px] pr-[22px] xl:pt-[31px] xl:pb-[30px] xl:pl-[49px] xl:pr-[44px] border-t border-[#707070]">
                            <p className="xl:text-[22px] 4xl:text-[28px] text-[18px] leading-tight">
                                <span className="xl:text-[28px] 4xl:text-[35px] text-[22px] text-[#038EF4] font-bold"> Over 65% </span> of life sciences organizations cite “delivering personalized patient experiences” as a top priority.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-5 col-span-12">
                        <div className="pt-[29px] pb-[25px] pl-[26px] pr-[26px] xl:pt-[57px] xl:pb-[68px] xl:pl-[57px] xl:pr-[57px] max-md:border-t max-md:border-[#707070]">
                            <p className="xl:text-[22px] 4xl:text-[28px] text-[18px] leading-tight">
                                <span className="xl:text-[28px] 4xl:text-[35px] text-[22px] text-[#038EF4] font-bold"> AI adoption in life sciences is growing at a CAGR of 30% </span> - revolutionizing R&D, clinical trials, and patient engagement.
                            </p>
                        </div>
                    </div>
                </div>
                <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight mt-[31px] xl:mt-[54px]">
                    With pre-built accelerators like Body Map and Patient Interaction tools, our deep domain expertise, and strategic partnerships with SAP, Salesforce, MuleSoft, and Oracle, Rialtes helps life sciences companies achieve intelligent, compliant, and patient-focused outcomes — faster and better.
                </p>
            </section>

            {/* why rialtes */}
            <section className="custom-container max-md:px-0 lg:pr-0 xl:mt-[100px] mt-[54px]">
                <div className="relative text-[#ffffff]">

                    <div className="absolute inset-0 -z-10">
                        {/* Mobile Image */}
                        <img
                            src="/images/industry/life-science/Mobile/why-rialtes-mob.webp"
                            alt="Why Rialtes Mobile"
                            className="w-full h-full object-cover md:hidden"
                        />
                        {/* Desktop Image */}
                        <img
                            src="/images/industry/life-science/why-rialtes-desk.webp"
                            alt="Why Rialtes Desktop"
                            className="w-full h-full object-cover hidden md:block"
                        />
                    </div>

                    <div className="max-md:px-[36px] lg:pt-[76px] md:pl-[61px] pt-[38px]">
                        <h2 className="2xl:text-[50px] xl:text-[38px] text-[26px] leading-tight font-light w-[90%] md:w-[50%] lg:w-[36%] xl:w-[50%] 2xl:w-[52%]">
                            Why Rialtes is Your Strategic Partner in Life Sciences Digital Transformation
                        </h2>
                        <p className="xl:text-[30px] 4xl:text-[42px] text-[18px] leading-tight mt-[16px] xl:mt-[28px]">
                            Our Promise to Life <br /> Sciences Companies
                        </p>

                        <div className="">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-[20px] gap-y-[23px] xl:mt-[85px] mt-[68px] sm:w-[70%] md:w-[90%] xl:w-[90%] 4xl:w-[80%]">
                                {
                                    whyRialtesData.map((data, ind) => (
                                        <div key={ind} className="bg-[#ffffff] pt-[40px] pb-[31px] pl-[32px] pr-[22px] xl:pt-[51px] xl:pb-[47px] xl:px-[36px]">
                                            <p className="xl:text-[26px] 4xl:text-[30px] text-[22px] leading-tight text-[#038EF4]">{data.title}</p>
                                            <p className="xl:text-[20px] 4xl:text-[24px] text-[16px] leading-tight xl:mt-[28px] mt-[16px] text-[#000000]">
                                                {data.desc}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* prebuilt section */}
            <section className="custom-container 4xl:!pl-[142px] xl:!pl-[52px] lg:!pl-[42px] md:pr-0 max-md:px-0">
                {/* Mobile Image */}
                <img
                    src="/images/industry/life-science/Mobile/pre-build-mob.webp"
                    alt="Why Rialtes Mobile"
                    className="w-full h-full object-cover md:hidden"
                />
                {/* Desktop Image */}
                <img
                    src="/images/industry/life-science/pre-build-desk.webp"
                    alt="Why Rialtes Desktop"
                    className="w-full h-full object-cover hidden md:block"
                />
            </section>
            {/* Contact Form */}
            < div className="custom-container xl:mt-[117px] xl:mb-[104px] mt-[104px] mb-[45px]">
                <ContactForm title={'Ready to Transform Life Sciences with Rialtes?'} subtitle="Partner with Rialtes to unlock innovation, compliance, and patient-centric solutions across the life sciences ecosystem." subtitle1="Contact us today to discover how Rialtes can drive growth and patient impact for your organization." className="sm:w-[66%] 2xl:w-[60%] 4xl:w-[80%] 4xl:text-[60px] xl:text-[40px] text-[26px]" />
            </div >
        </section>
    )
}