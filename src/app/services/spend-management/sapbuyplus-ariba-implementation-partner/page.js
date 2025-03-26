"use client";
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import LearnMore from "@/app/components/learnMore";




const ServicesCard = ({ services }) => (
    <div className="w-full h-full flex flex-col border border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
        <div className="flex-grow flex flex-col">
            <h3 className="mb-[15px] md:mb-[25px] font-[600] text-lg line-clamp-4 text-[#1F3F69]">{services.title}</h3>
            <p className='md:mb-[15px] mb-0'>{services.description}</p>

        </div>
    </div>
);




const latestServices2 = [
    {
        id: 1,
        title: "Strategic Consulting",
        description: "We assess your requirements, prioritize value-driven goals, and create and develop a cognitive plan based on consulting and analytics to implement SAP Ariba and business network solutions.",
    },
    {
        id: 2,
        title: "Implementation Services",
        description: "Offering expert support and complete implementation of Ariba solutions quickly and economically, including seamless integrations with both SAP and non-SAP ERPs.",
    },
    {
        id: 3,
        title: "Procurement Readiness Assessment",
        description: "The proprietary Cognitive Procurement Readiness Assessment from Rialtes provides you with a tailored roadmap and business case for leveraging SAP Ariba solutions and optimizing the purchasing decisions for businesses.",
    },
    {
        id: 4,
        title: "Spend Understanding",
        description: "Leverage SAP Spend Analysis expertise for insights into your company’s spending patterns for effective spend management across all domains, reducing manual efforts.",
    },
    {
        id: 5,
        title: "Process Integration",
        description: "Implement an integrated source-to-pay process to maximize value across systems. Achieve swift and seamless adoption of best practices into your company’s operations without compromising core systems with risky customizations.",
    },
    {
        id: 6,
        title: "Ongoing Support",
        description: "We provide ongoing, comprehensive support to ensure you maximize the value of your investment and achieve a complete transformation of your procurement process using SAP Ariba, enabling greater efficiency, strategic sourcing, and streamlined operations.",
    },
];

const Services2 = () => {
    return (
        <div className="container mx-auto text-black 2xl:pr-80 xl:pr-40 md:pr-20 pr-6">
            <h2 className="text-black mb-6 xl:w-[70%] w-full">End-to-end Procurement with SAP Ariba Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
                {latestServices2.map((services) => (
                    <ServicesCard key={services.id} services={services} />
                ))}
            </div>
            <LearnMore/>
        </div>
    );
};

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Grow with SAP | Company Name</title>
                <meta name="description" content="About our company" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="relative h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden">
                <Image
                    src="/images/sap-consulting/Ariba Banner.webp"
                    alt="GROW with SAP"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div
                    className="
        container h-full relative
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="container mx-auto h-full flex flex-col justify-center">
                        <div className="flex flex-col">
                            <h3 className="text-white text-[300] font-medium mb-2">SAP Ariba</h3>
                            <h1 className="text-white max-w-2xl">
                                Infuse intelligence into your Sourcing and Procurement Operations
                            </h1>
                        </div>
                        <div className="md:w-32 w-20 pt-6">
                            <Image
                                src="/images/success-factors/sap-partner-logo.webp"
                                alt="SAP Partner Logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >

                <div className="py-10 bg-white">
                    <div className="container mx-auto 2xl:pr-72 xl:pr-40 md:pr-20">
                        <div className="flex flex-col xl:flex-row py-6 xl:gap-32">
                            <div className="flex flex-col w-full xl:max-w-lg xl:mb-0 mb-4">
                                <h1 className="text-black md:pb-0 pb-4">Digitally Transform Your Ariba Experience with Strategic SAP Solutions</h1>
                            </div>
                            <div className="flex flex-col w-full">
                                <p className="text-[#000000]">As an SAP Global Strategic Services Partner, we provide a comprehensive range of services, from strategic consulting to implementation and ongoing support. From initial consultation to the implementation of SAP Ariba solutions, we are your digital transformation partners, ready to reinvent your procurement operations, decision-making, and contract management processes.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Latest Services Section */}
            <div
                className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <section className="pb-16 bg-white">
                    <Services2 />
                </section>
            </div>


            {/* We Help You Grow and Thrive */}


            {/* Take the Lead in Your Industry */}
            < div className="bg-[#EDEDED] py-6" >
                <div
                    className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <section className="py-10">
                        <div className="container mx-auto">
                            <h2 className="pb-8 text-black xl:w-[60%] w-full">Address Organizational Challenges with SAP Ariba Implementation</h2>
                            <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6 mt-10">
                                <div>
                                    <Image
                                        src="/images/sap-consulting/sap2.svg"
                                        alt="GROW with SAP"
                                        className="w-20 h-20"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        priority
                                    />
                                    <h4 className="mt-5">High operational costs</h4>
                                </div>
                                <div>
                                    <Image
                                        src="/images/sap-consulting/Mask Group 56.svg"
                                        alt="GROW with SAP"
                                        className="w-20 h-20"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        priority
                                    />
                                    <h4 className="mt-5">Lack of Data Insights</h4>
                                </div> <div>
                                    <Image
                                        src="/images/sap-consulting/Mask Group 56.svg"
                                        alt="GROW with SAP"
                                        className="w-20 h-20"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        priority
                                    />
                                    <h4 className="mt-5">Inefficient Processes</h4>
                                </div> <div>
                                    <Image
                                        src="/images/sap-consulting/Mask Group 56.svg"
                                        alt="GROW with SAP"
                                        className="w-20 h-20"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        priority
                                    />
                                    <h4 className="mt-5">Poor Collaboration Processes</h4>
                                </div> <div>
                                    <Image
                                        src="/images/sap-consulting/Mask Group 56.svg"
                                        alt="GROW with SAP"
                                        className="w-20 h-20"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        priority
                                    />
                                    <h4 className="mt-5">Insufficient security strategies</h4>
                                </div>

                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <div className="py-6" >
                <div
                    className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <section className="py-8">
                        <div className="container mx-auto">
                            <h2 className="pb-8 text-black xl:w-[60%] w-full">Digitalize your Sourcing, Purchasing & Procurement</h2>
                            <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-20 mt-5">
                                    <div className="flex flex-col">
                                        <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2">15%</h2>
                                        <p className="text-black">Savings on procurement costs through strategic sourcing.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2">30%</h2>
                                        <p className="text-black">Reduction in procurement cycle times by streamlining processes.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[#0092E0] font-bold text-4xl md:text-6xl mb-2">60%</h2>
                                        <p className="text-black">Faster supplier onboarding through the Ariba network.</p>
                                    </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Contact Form */}
            < div
                className=" mt-20 mb-20
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black py-6"
            >
                <ContactForm title={'Take the next step to operational excellence with us.'} className={"max-w-4xl"} />

            </div >


        </div >
    );
}