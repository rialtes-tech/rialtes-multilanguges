"use client";
import Image from "next/image";
import FeaturedCarousel from '../../components/servicesFeaturedCarousel';
import InsightsCarousel from '../../components/servicesInsightsCarousel';
import ExploreMoreCarousel from '../../components/servicesExploreMoreCarousel';


import ContactForm from "@/app/Component/contactForm";

export default function SalesForceManage() {

    const salesForce = [
        {
            id: 1,
            imageUrl: '/images/salesforce-consulting-services/achive1.svg',
            title: 'Seamlessly implement dynamic on-demand services',
        },
        {
            id: 2,
            imageUrl: '/images/salesforce-consulting-services/achive2.svg',
            title: 'Excess a wide range of Salesforce experts',
        },
        {
            id: 3,
            imageUrl: '/images/salesforce-consulting-services/achive3.svg',
            title: 'Improved accuracy and decision making',
        },
        {
            id: 4,
            imageUrl: '/images/salesforce-consulting-services/achive4.svg',
            title: 'Increase adoption to streamline processes',
        },
        {
            id: 5,
            imageUrl: '/images/salesforce-consulting-services/achive5.svg',
            title: 'On-time updates and maintenance support',
        },

    ]

    const salesForce2 = [
        {
            id: 1,
            title: 'Assessment and Planning',
            description: 'We evaluate your Salesforce setup to identify gaps and plan out your roadmap to make sure you are headed toward achieving your business goals.'
        },
        {
            id: 2,
            title: 'Salesforce Implementation',
            description: 'Our experts implement all enhancements and customizations that you might have missed implementing in your system so you can grow it with best practices and coordinate your business processes.'
        },
        {
            id: 3,
            title: 'Continuous Improvements',
            description: 'We maintain your Salesforce CRM stability and health, streamline your business processes, and take preventive measures against any occurring issue.'
        },
        {
            id: 4,
            title: 'Salesforce Customization',
            description: 'We customize your Salesforce platform with point-and-click tools or code means (Apex code, Visualforce, Lightning Components) to enable reports, workflows, and dashboards crafted uniquely for your unique organization.'
        },
        {
            id: 5,
            title: 'Classic to Lightning Migration',
            description: 'Moving from Classic to Lightning can be challenging. With Rialtes as your Salesforce managed service provider, your transition from Salesforce Classic to Lightning is smoother, faster, and cost-effective.'
        },
        {
            id: 6,
            title: 'Troubleshoot and Maintenance',
            description: 'When challenges emerge, our expert team is ready to eliminate errors in code, fix performance issues, and provide user support to ensure minimal disruption to your Salesforce performance.'
        },

    ]
   

    return (
        <section>
            <div className='relative group overflow-hidden'>
                <Image
                    src="/images/salesforce-consulting-services/manage-banner.webp"
                    alt="Salesforce Consulting Team"
                    className="transform transition-transform duration-500 group-hover:scale-110 h-[250px] md:h-[400px] lg:h-[600px]"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        objectFit: "cover",
                    }}
                    priority
                />
                <div className="absolute px-6 xl:pl-[1000px] lg:pl-[500px] lg:pr-0 md:px-[100px]  top-[5%] lg:text-start lg:top-[35%] md:top-[34%] text-white">
                    <h4 className="font-bold">Manage Services</h4>
                    <h2 className="font-bold">Scale Salesforce  </h2>
                    <h2>with Your Business</h2>
                    <div className="lg:mt-20">
                        <Image
                            src="/images/salesforce-consulting-services/salesforce-partner.webp"
                            className="w-1/2 h-full bg-transperent"
                            alt="Leadership Team"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className=" grid lg:grid-cols-10 gap-5 px-6 xl:px-[280px] md:px-[100px]  lg:mt-16 mt-5">
                <div className="lg:col-span-6">
                    <h2>Run & Refine Your Salesforce Environment</h2>
                </div>
                <div className="lg:col-span-4">
                    <p>
                        Salesforce Managed Services offers a proactive solution for managing and optimizing your Salesforce environment. Through continuous support, maintenance, and enhancements, we ensure your Salesforce platform consistently aligns with your evolving business needs.
                    </p>
                </div>
            </div>
            <section className="lg:mt-20 px-6 xl:px-[280px] md:px-[100px] mt-10">
                <h2>Achieve Excellence with a Trusted Salesforce Managed Service Provider</h2>
                <p className="mt-5">Optimize every business element effortlessly and drive better outcomes with a myriad of Salesforce solutions present.</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-10 gap-5">
                    {salesForce.map((sales) => {
                        return (
                            <div key={sales.id}>
                                <div className="mt-10">
                                    <Image
                                        src={sales.imageUrl}
                                        alt="Salesforce Consulting Team"
                                        className="w-20 h-20"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        priority
                                    />
                                </div>
                                <h4 className="mt-5">{sales.title}</h4>
                            </div>
                        )
                    })}

                </div>
                <h2 className="mt-20">What We Offer in Salesforce Managed Services</h2>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-10 gap-5 mt-5">
                    {salesForce2.map((sales) => {
                        return (
                            <div key={sales.id} className="border-2 p-8 hover:bg-[#A9D6EE] hover:border-transparent transition-all duration-300">

                                <h4 className="mt-5 text-[#1F3F69]">{sales.title}</h4>
                                <p className="mt-5">{sales.description}</p>
                            </div>
                        )
                    })}

                </div>
                <div className="flex mt-20 gap-16 flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                        <Image
                            src="/images/salesforce-consulting-services/guide-of-sales.png"
                            alt="Rialtes Map"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full"
                            priority
                        />
                        <h2 className="mt-10">The Complete Guide to Salesforce Integration</h2>
                        <p className="mt-10 mb-10">Tailored Salesforce Integration Services helps you in</p>
                        <ul className="list-disc list-inside">
                            <li className="marker:text-blue-500">Connecting the front office with the back office</li>
                            <li className="marker:text-blue-500 mt-2">Achieving sales goals faster</li>
                            <li className="marker:text-blue-500 mt-2">Getting a 360-degree customer view</li>
                            <li className="marker:text-blue-500 mt-2">24/7 contact support for constant optimization</li>
                            <li className="marker:text-blue-500 mt-2">Amplifying team productivity</li>
                            <li className="marker:text-blue-500 mt-2">Automating business processes end-to-end</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2">
                        <h2>Welcome to the World of Endless Possibilities!</h2>
                        <p className="mt-5">Salesforce implementations are as daunting as they’re complex. Picking the right partner to “Solve your Problems” is the ideal decision in every situation. An experienced Salesforce partner helps you with Salesforce managed services while your team can prioritize revenue-generating projects.</p>
                    </div>
                </div>
            </section>

            <section className="bg-[#F5F5F5] lg:mt-32 mt-10 pb-20">
                <div
                    className="xl:ml-[280px]  md:ml-[100px] px-6 lg:px-0 md:px-0"
                >
                    <FeaturedCarousel />
                </div>
            </section>
            {/* insights section */}
            <section className='px-6 md:px-0 xl:pl-[280px] md:pl-[100px] lg:pr-0 lg:mt-20 mt-10'>
                <InsightsCarousel />
            </section>
            <section className='px-6 xl:pl-[280px] md:pl-[100px] lg:pr-0 lg:mt-20 bg-[#808080] pb-20 mt-10'>
                <ExploreMoreCarousel />
            </section>
            <ContactForm />
        </section>
    )
}
