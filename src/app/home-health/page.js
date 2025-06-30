"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import ContactForm from "../components/contactform";

export default function Page() {
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

            {/* Contact Form */}
            < div className="custom-container xl:mt-[130px] xl:mb-[130px] mt-[65px] mb-[48px]">
                <ContactForm title={'Ready to Deliver Proactive, Connected, and Compassionate Care Directly to Patients?'} subtitle="Transform your patient care model with Rialtes’ Salesforce-powered home health solutions" className={"font-normal text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] xl:w-[60%] 4xl:w-[80%]"} />
            </div >
        </section>
    )
}