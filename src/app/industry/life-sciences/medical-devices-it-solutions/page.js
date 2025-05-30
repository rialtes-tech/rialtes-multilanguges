
"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform"
import Seo from "@/app/components/Seo";
import Link from "next/link";
import { HeroSection } from "@/app/components/herosection";


const CriticalChallengesSection = () => {
    const challenges = [
        {
            id: 1,
            title: "Regulatory Compliance & Quality Management",
            imageMobile: "/images/medical/Regulatory Compliance.webp",
            imageDesktop: "/images/medical/Regulatory Compliance & Quality Management.webp",
            points: [
                "Navigating complex, evolving global regulations.",
                "Difficulty in managing documentation, traceability, and audits.",
                "Integrating quality management and corrective action systems (CAPA)."
            ]
        },
        {
            id: 2,
            title: " Supply Chain Complexity & Order Fulfillment",
            imageMobile: "/images/medical/Supply Chain Complexity.webp",
            imageDesktop: "/images/medical/Supply Chain Complexity & Order Fulfillment.webp",
            points: [
                "Disconnected systems for inventory, manufacturing, and order management.",
                "Struggles with tracking serialized medical devices across geographies.",
                "Managing recalls and returns with compliance and efficiency."
            ]
        },
        {
            id: 3,
            title: "Clinical Trial & Patient Outcome Tracking",
            imageMobile: "/images/medical/Clinical Trial & Patient.webp",
            imageDesktop: "/images/medical/Clinical Trial.webp",
            points: [
                "Inadequate tools for end-to-end clinical trial management.",
                "Limited real-time data on device performance and patient outcomes.",
                "Challenges in patient engagement and post-market surveillance."
            ]
        },
        {
            id: 4,
            title: "Remote Monitoring & AI-Powered Predictive Insights",
            imageMobile: "/images/medical/Remote Monitoring (3).webp",
            imageDesktop: "/images/medical/Remote Monitoring (1).webp",
            points: [
                "Lack of real-time patient data from implanted or wearable devices.",
                "Missed opportunities to predict failures or adverse events.",
                "Inability to optimize device performance based on real-world usage data."
            ]
        },
    ];

    return (
        <section className="sm:mt-[200px] mt-[320px]">

            <div className="custom-container">
                <div className="grid md:grid-cols-12 grid-cols-1">
                    <div className="3xl:col-span-10 lg:col-span-11 md:col-span-9 col-span-12">
                        <h2 className="lg:text-[60px] text-[26px] leading-tight">
                            Top 4 Critical Challenges Facing the Medical Device Industry Today
                        </h2>
                    </div>
                </div>

                {challenges.map((challenge, index) => (
                    <div
                        key={challenge.id}
                        className="relative grid lg:grid-cols-12 grid-cols-1 lg:mt-[80px]"
                    >
                        <div className="absolute lg:top-20 top-[100px] w-full border-t border-[#007bff] z-0"></div>
                        <div className="lg:col-span-6 col-span-12 z-10 flex flex-col mt-[60px] lg:mt-0">
                            <div className="bg-[#007bff] text-white lg:w-[157px] h-[73px] w-[73px] lg:h-[148px] flex items-center justify-center lg:text-[100px] text-[60px] font-bold z-10 order-1">
                                {challenge.id}
                            </div>

                            {/* Mobile Image */}
                            <div className="block lg:hidden order-2 mt-14">
                                <Image
                                    src={challenge.imageMobile}
                                    alt={challenge.title}
                                    width={800}
                                    height={600}
                                    className="w-full object-cover max-sm:mx-auto sm:w-[80%]"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="order-3">
                                <h2 className="lg:text-[42px] text-[28px] xl:font-bold font-medium mb-6 lg:mt-[46px] mt-[36px] leading-tight sm:w-[80%] lg:w-full">
                                    {challenge.title}
                                </h2>
                                <ul className="list-disc lg:space-y-4 marker:font-bold marker:text-2xl pl-5 lg:text-[20px] text-[16px] lg:mt-[46px] mt-[25px]">
                                    {challenge.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>


                        <div className="lg:col-span-1 col-span-12 order-4 lg:order-2"></div>

                        {/* Desktop Image */}
                        <div className="relative lg:col-span-5 col-span-12 z-10 hidden lg:block order-5">
                            <Image
                                src={challenge.imageDesktop}
                                alt={challenge.title}
                                width={800}
                                height={600}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default function Page() {
    return (
        <div className="bg-white">
            <Seo
                title="Medical Devices"
                canonical="https://www.rialtes.com/industry/life-sciences/medical-devices-it-solutions/"
            />

            <HeroSection title="Transforming Medical Device Innovation & Compliance" subtitle="Medical Devices" h3title="Rialtes Life Sciences & Medical Devices Solutions" deskimg="/images/medical/Medical device banner.webp" mobimg="/images/medical/medical-header.webp" />


            <section
                className="xl:mt-16 mt-4 custom-container"
            >

                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-10 col-span-12 leading-tight font-medium">

                        <p className="xl:text-[22px] text-[16px] mt-10"> In today’s fast-evolving Medical Device industry, companies are under immense pressure to innovate faster, improve patient outcomes, ensure regulatory compliance, and manage complex global supply chains. At Rialtes, we bring deep domain expertise in Medical Devices, SAP S/4 HANA, Salesforce Life Sciences Cloud, and AI-driven solutions to deliver end-to-end consulting, advisory, implementation, integration, and post-go-live services that help medical device companies accelerate their growth while staying compliant and patient-centric.</p>
                        <p className="xl:text-[22px] text-[16px] mt-5"> With offices in the United States, Canada, India, and Singapore, Rialtes operates as a global partner equipped to solve real-world challenges with next-generation digital solutions.</p>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                    </div>
                </div>
            </section>


            {/* thought leadership section */}
            <section className="relative group overflow-hidden xl:h-[1000px] 2xl:h-[960px] lg:h-[700px] md:h-[650px] sm:h-[850px] h-[900px] xl:mt-24 mt-16 text-white">
                {/* Desktop Image */}
                <div className="md:block hidden">
                    <Image
                        src="/images/medical/TL Medical Device.webp"
                        alt="medical device img"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Mobile Image */}
                <div className="md:hidden block">
                    <Image
                        src="/images/medical/TL-(3).webp"
                        alt="medical device img"
                        fill
                        className="object-cover sm:object-[35%_0%] object-[20%_0]"
                        priority
                    />
                </div>

                <div className="custom-container absolute md:mt-[86px] lg:mt-[106px] max-md:bottom-[52px] md:bottom-auto">
                    <div className="grid md:grid-cols-12 grid-cols-1">
                        <div className="md:col-span-7 2xl:col-span-6 col-span-12">
                            <h2 className="xl:text-[60px] text-[26px] xl:mt-10 mt-5">Thought Leadership:</h2>
                            <h3 className="xl:text-[42px] text-[22px] xl:mt-5 mt-3 font-bold leading-tight xl:w-[90%]">
                                Helping Medical Device Companies Move from Compliance to Competitive Advantage
                            </h3>
                            <p className="xl:text-[22px] text-[16px] mt-5 leading-tight">
                                Rialtes focuses on bringing together strategy, technology, and patient-centric design, helping Medical Device companies:
                            </p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 leading-tight">
                                <li>Deliver compliant and seamless patient journeys from device prescription to outcome tracking.</li>
                                <li>Integrate clinical, supply chain, and sales operations into a unified digital ecosystem.</li>
                                <li>Leverage AI for proactive monitoring, predictive maintenance, and improved device performance.</li>
                                <li>Accelerate time-to-market for innovative medical devices through agile, compliant processes.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* why partner with rialtes */}
            <section className="relative h-[1200px] lg:h-[1100px] md:h-[900px] sm:h-[1160px] xl:h-[1000px]" >
                <div className="lg:block hidden">
                    <Image
                        src="/images/medical/why-rialtes.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "65% 20%" }}
                        priority
                    />
                </div>
                <div className="lg:hidden block">
                    <Image
                        src="/images/medical/why-rialtes-medical.webp"
                        alt=""
                        priority
                        className="object-cover sm:object-[35%_50%] md:object-[35%_70%] object-[20%_50%]"
                        fill
                    />
                </div>

                <div className="custom-container">
                    <div className="relative p-6 md:p-12 lg:w-[828px] lg:h-[350px]">
                        <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
                        <div className="relative bg-opacity-80 text-white z-10 xl:p-4 rounded-lg ">
                            <h2 className="lg:text-[60px] text-[26px] leading-tight">Why Partner with Rialtes for Medical Device Transformation</h2>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-[-260px] sm:bottom-[-80px] md:bottom-[-80px]">
                    <div className="custom-container grid grid-cols-1 gap-[21px] lg:gap-[32px] md:grid-cols-2 xl:grid-cols-3 text-black relative z-10">
                        {[
                            {
                                title: "Deep expertise in Salesforce Life Sciences Cloud and SAP S/4 HANA.",
                            },
                            {
                                title: "Proven ability to integrate AI, IoT, and real-time data into medical devices ecosystems.",

                            },
                            {
                                title: "End-to-end compliance, quality, and patient-centric frameworks.",

                            },
                            {
                                title: "Global delivery with local expertise in regulatory markets.",

                            },
                            {
                                title: "Proprietary tools like RialChat and Agentforce for real-time engagement.",

                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-white xl:p-12 p-[40px] border-[1px] border-solid border-[#707070] hover:bg-[#D9F2FF] text-black sm:mx-auto sm:w-[80%] md:w-full">
                                <h3 className="xl:text-[24px] text-[20px] font-bold leading-tight">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="bg-[#134874]  hover:text-white border-[1px] xl:text-[20px] border-[solid] border-[#134874] mt-16 font-semibold text-white py-3 px-8 transition duration-300 order-4">
                    <Link href='/contact-us'>Learn More</Link>
                </button>


            </section>

            {/* critical challenges section */}
            <CriticalChallengesSection />


            {/* end to end section */}

            <section className="relative xl:mt-[147px] mt-[80px]">
                <div className="lg:block hidden">
                    <Image
                        src="/images/medical/Expertise in Salesforce.webp"
                        alt="GROW with SAP"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="lg:hidden block">
                    <Image
                        src="/images/medical/Expertise in Salesforce (1).webp"
                        alt="GROW with SAP"
                        fill
                        priority
                    />
                </div>
                <div
                    className="text-white custom-container h-full relative"
                >
                    <div className="grid grid-cols-12">
                        <div className="2xl:col-span-10 xl:col-span-12 lg:col-span-11 sm:col-span-11 col-span-12 xl:mt-[106px] mt-[52px]">
                            <h2 className="xl:text-[60px] text-[26px] leading-tight">End-to-End Expertise in Salesforce Life Sciences Cloud & SAP S/4 HANA for Medical Devices</h2>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white xl:pt-20 pt-10">

                        <div className="xl:col-span-5 col-span-12">
                            <h3 className="xl:text-[40px] text-[28px] font-bold leading-tight">Salesforce Life Sciences Cloud </h3>
                            <h2 className="xl:text-[35px] text-[22px] leading-tight mt-5 font-medium xl:font-normal">Powering Patient and Provider Journeys</h2>

                            <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-5 ">
                                <li >360° view of patient, provider, and care team interactions.</li>
                                <li >Clinical trial management integrated with patient support programs.</li>
                                <li>Real-time complaints and adverse event management.</li>
                                <li> Secure and compliant field service and device tracking.</li>
                            </ul>
                        </div>

                        <div className="xl:col-span-2 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12 mt-[72px] xl:mt-0">
                            <h3 className="xl:text-[40px] text-[28px] font-bold leading-tight">SAP S/4 HANA for Medical Devices </h3>
                            <h2 className="xl:text-[35px] text-[22px] leading-tight mt-5 font-medium xl:font-normal"> Operational & Financial Backbone</h2>
                            <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] xl:mt-10 text-[16px] mt-5">
                                <li >Manufacturing and batch production control.</li>
                                <li >Serialized inventory and global traceability.</li>
                                <li>Integrated quality management and regulatory documentation.</li>
                                <li>Order-to-cash processes connected to Salesforce for full visibility.</li>
                            </ul>

                        </div>
                    </div>

                    <button className="bg-white hover:bg-[#ffffff]  hover:text-[#134874] border-[1px] text-[20px] border-[solid] border-[#134874] my-[60px] font-semibold text-black py-3 px-8 transition duration-300 order-4">
                        <Link href='/contact-us'>Learn More</Link>
                    </button>
                </div>
            </section>
            {/* Contact Form */}
            <div
                className="xl:mt-16 mt-10 custom-container text-black py-20"
            >
                <ContactForm title={'Transform Patient Lives and Medical Device Operations with Rialtes!'} className={"max-w-[70rem] xl:text-[60px] text-[26px] leading-tight"} />
            </div >
        </div >
    );
}