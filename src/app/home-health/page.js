"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import ContactForm from "../components/contactform";
import LearnMore from "../components/learnMore";

export default function Page() {
    const addressingData = [
        {
            title: "Geographical Divide & Accessibility",
            desc: "Patients in rural or remote areas face significant barriers to accessing timely medical care due to limited healthcare infrastructure and geographic isolation. Our team empowers home health providers with virtual care coordination tools, mobile-optimized apps, and real-time data access, so patients can receive continuous care without ever visiting a clinic.",
            mobImg: "/images/home-health/geographical-desk.webp",
            deskImg: "/images/home-health/Mobile/geographical-mob.webp"
        },
        {
            title: "Pandemic & Infectious Disease Risk",
            desc: "Physical consultations expose vulnerable patients to contagious diseases, especially during public health crises like COVID-19. We support the shift from clinic-based visits to remote consultations and monitoring, ensuring that patients receive care in a safe, controlled environment, at home. It is done by virtual appointments, remote diagnostics, and contactless care delivery via Salesforce.",
            mobImg: "/images/home-health/pandemic-desk.webp",
            deskImg: "/images/home-health/Mobile/pandemic-mob.webp"
        },
        {
            title: "Lack of Real-Time Health Tracking",
            desc: "Without real-time visibility into patient health, early warning signs are often missed, leading to preventable complications. Rialtes enables Remote Patient Monitoring (RPM) by integrating smart medical devices and wearables with Salesforce Health Cloud, ensuring healthcare providers receive live updates and alerts for timely intervention.",
            mobImg: "/images/home-health/lack-desk.webp",
            deskImg: "/images/home-health/Mobile/lack-mob.webp"
        },
        {
            title: "Long Waiting Times",
            desc: "Overburdened clinics lead to delayed care, missed follow-ups, and frustrated patients. With automated appointment scheduling, intelligent routing tools, and virtual care options, we help reduce patient backlog and facilitate on-demand consultations for home-bound patients.",
            mobImg: "/images/home-health/long-desk.webp",
            deskImg: "/images/home-health/Mobile/long-mob.webp"
        },
        {
            title: "Limited Access to Mental Health Support",
            desc: "Access to mental health services remains a challenge due to stigma, limited availability, and logistical barriers. Rialtes offers discreet, virtual access to behavioral health professionals, counseling sessions, and mood-tracking tools, all integrated within a secure and patient-friendly digital platform.",
            mobImg: "/images/home-health/limited-desk.webp",
            deskImg: "/images/home-health/Mobile/limited-mob.webp"
        },
    ]
    return (
        <section className="min-h-screen bg-white">
            <Seo
                title="Semiconductor Industry: Digital Solutions That Scale | Rialtes"
                description=" Explore semiconductor industry IT solutions with SAP and Salesforce to streamline chip design, testing, partner collaboration, and customer engagement."
                canonical="https://www.rialtes.com/industry/hitech-semiconductor-ai-it-solutions/"
            />
            {/* herosection */}
            <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/home-health/hero-banner-desk.webp"
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
                        src="/images/home-health/Mobile/hero-banner-Mob.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "5% 20%" }}
                        priority
                    />
                </div>

                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full pt-[120px] md:pt-0">
                        <div className="col-span-12">
                            <h1 className="text-[#FFFFFF] text-[18px] md:text-[24px] font-bold lg:w-full">
                                Home Health
                            </h1>
                            <h2 className="text-[#FFFFFF] text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px]">
                                Technology Solutions <div className="min-[330px]:block hidden" /> to Connect Patients <div className="min-[330px]:block hidden" /> with Their Providers
                            </h2>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>

            {/* page description section */}
            <div div className="custom-container xl:mt-[124px] mt-[33px]">
                <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[40px] gap-y-[28px]">
                    <div className="lg:col-span-6 xl:col-span-7 col-span-12">
                        <h2 className="4xl:text-[60px] xl:text-[45px] text-[26px] leading-tight md:w-[80%] xl:w-full">
                            Empowering Healthcare access anytime from home with mobile apps
                        </h2>
                    </div>
                    <div className="lg:col-span-6 xl:col-span-5 col-span-12">
                        <p className="text-[16px] 4xl:text-[22px] xl:text-[18px] font-normal mt-[6px] w-[90%] md:w-[80%] lg:w-full">
                            The need for efficient and patient-centric care is greater than ever. Our home health services provide healthcare organizations with cutting-edge mobile and home health technology solutions for remote patient monitoring, virtual consultations, and personalized healthcare management.
                        </p>
                    </div>
                </div>
            </div>

            {/* addressing section */}
            <section className="custom-container xl:mt-[166px] mt-[49px]">
                <h2 className="4xl:text-[60px] xl:text-[45px] text-[26px] leading-tight lg:w-[60%] 4xl:w-[70%]">
                    Addressing Roadblocks in Home Health Care
                </h2>
                <p className="text-[16px] 4xl:text-[22px] xl:text-[18px] font-normal xl:mt-[39px] mt-[28px] w-[90%] lg:w-[65%] 4xl:w-[70%]">
                    While home-based care offers a transformative opportunity for healthcare delivery, it must overcome several long-standing challenges. At Rialtes, we design next-gen Remote Monitoring and Home Health solutions on Salesforce Health Cloud to break down these barriers and deliver equitable, efficient, and empathetic care.
                </p>

                {
                    addressingData.map((data, ind) => {
                        const isEven = ind % 2 === 0;
                        const content = [
                            <div className={`lg:col-span-4 col-span-12 ${!isEven && "lg:order-2 order-1"}`} key="image">
                                <Image src={data.mobImg} alt="mobile" className="block md:hidden w-full h-full object-cover" width={0} height={0} priority />
                                <Image src={data.deskImg} alt="desktop" className="hidden md:block w-full h-full object-cover" width={0} height={0} priority />
                            </div>,
                            <div className={`lg:col-span-8 col-span-12 xl:pt-[51px] xl:pb-[93px] xl:px-[68px] pt-[29px] pb-[64px] px-[30px] relative  ${!isEven && "lg:order-1 order-2"}`} key="text">
                                <h2 className="4xl:text-[30px] xl:text-[26px] text-[22px] leading-tight text-[#0A6BB8] font-semibold w-[90%] md:w-full">{data.title}</h2>
                                <p className="text-[16px] 4xl:text-[22px] xl:text-[18px] font-normal xl:mt-[39px] mt-[19px] w-[90%] lg:w-[94%]">{data.desc}</p>
                                <div className="xl:mt-[40px] mt-[20px] absolute"><LearnMore /></div>
                            </div>
                        ];
                        return (
                            <div className="xl:mt-[71px] mt-[70px]" key={ind}>
                                <div className="grid lg:grid-cols-12 grid-cols-1 border border-[#707070]">
                                    {isEven ? content : content.reverse()}
                                </div>
                            </div>
                        )
                    })
                }

            </section>

            {/* global expertise section */}
            <section className="custom-container xl:mt-[145px] mt-[70px] lg:pr-0">
                <div className="grid lg:grid-cols-12 grid-cols-1">
                    <div className="lg:col-span-5 col-span-12 my-[40px]">
                        <div className="bg-[#006FBE] text-[#ffffff] xl:pt-[69px] xl:pb-[96px] xl:pl-[63px] xl:pr-[83px] pt-[39px] pb-[50px] px-[26px]">
                            <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-semibold w-[90%] md:w-full">Global Expertise, Locally Delivered</h2>
                            <p className="text-[16px] 4xl:text-[22px] xl:text-[18px] font-normal xl:mt-[65px] mt-[25px] w-[90%] lg:w-[94%]">With certified expertise in Salesforce Life Sciences Cloud and SAP S/4HANA for Pharma, Rialtes brings together global innovation and local compliance. Operating across India, the United States, Canada, and Singapore, we ensure that your home health programs align with regional regulations while following global best practices in healthcare delivery and digital transformation.</p>
                        </div>
                    </div>
                    <div className="lg:col-span-7 col-span-12">
                        <Image src="/images/home-health/Mobile/global-mob.webp" alt="mobile" className="block md:hidden w-full h-full object-cover" width={0} height={0} priority />
                        <Image src="/images/home-health/global-desk.webp" alt="desktop" className="hidden md:block w-full h-full object-cover" width={0} height={0} priority />
                    </div>
                </div>
            </section>
            {/* Contact Form */}
            <section className="custom-container xl:mt-[130px] xl:mb-[130px] mt-[65px] mb-[48px]">
                <ContactForm title={'Ready to Deliver Proactive, Connected, and Compassionate Care Directly to Patients?'} subtitle="Transform your patient care model with Rialtes’ Salesforce-powered home health solutions" className={"font-normal text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] xl:w-[60%] 4xl:w-[80%]"} />
            </section >
        </section>
    )
}