"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import LearnMore from "@/app/components/learnMore";
import { HeroSection } from "@/app/components/herosection";
const UnlockProcurementSection = () => {
    return (
        <section className="custom-container">

            {/* Desktop Image */}
            <Image
                src="/images/sap-buy/unlock-procurement-img.webp"
                alt="unlock-procurement-img"
                width={600}
                height={100}
                className="hidden md:block w-full h-full object-cover"
            />

            {/* Mobile Image */}
            <Image
                src="/images/sap-buy/unlock-procurement-img.webp"
                alt="unlock-procurement-img"
                width={600}
                height={100}
                className="block md:hidden w-full h-full object-cover"
            />

        </section>
    )
}
export default function page() {
    return (
        <section>
            {/* hero section */}
            <HeroSection title="Transform Procurement Excellence with Rialtes’ SAPBuy+ Services for SAP ARIBA" subtitle="SAPBuy+" mobimg="/images/sap-buy/Mobile/sap-buy-banner-mob.webp" deskimg="/images/sap-buy/sap-buy-banner.webp" />

            {/* page information */}
            <section className="custom-container lg:mt-[135px] mt-[51px]">
                <p className="xl:text-[22px] text-[16px] xl:leading-[30px] font-normal leading-[19px] xl:w-[70%] w-[96%]">At Rialtes, we help organizations redefine procurement efficiency with SAP ARIBA, the industry’s leading cloud-based solution for strategic sourcing, contract management, supplier collaboration, and procure-to-pay automation. With SAP ARIBA, businesses can streamline procurement operations, reduce costs, ensure compliance, and drive supplier engagement on a global scale.</p>
                <p className="xl:text-[22px] text-[16px] xl:leading-[30px] font-normal leading-[19px] xl:w-[70%] w-[96%] lg:mt-[30px] mt-[19px]">As a certified SAP partner with a global presence in the United States, Canada, India, and Singapore, Rialtes delivers comprehensive SAP ARIBA solutions, covering advisory, implementation, integration, and continuous optimization. Our SAPBuy+ service suite ensures that enterprises achieve end-to-end procurement transformation while maximizing ROI on SAP investments.</p>
            </section>

            {/* unlock procurement section */}
            <UnlockProcurementSection />
        </section>
    )
}