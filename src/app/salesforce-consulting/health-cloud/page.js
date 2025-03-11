"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import FeaturedCarousel from '../../components/servicesFeaturedCarousel';
import InsightsCarousel from '../../components/servicesInsightsCarousel';
import ExploreMoreCarousel from '../../components/servicesExploreMoreCarousel';
export default function HealthCloud() { 

    const salesForce = [
        {
            id: 1,
            imageUrl: '/images/salesforce-consulting-services/achive1.svg',
            title: 'Enhance patient outcome',
        },
        {
            id: 2,
            imageUrl: '/images/salesforce-consulting-services/achive2.svg',
            title: 'Seamless digital data handling',
        },
        {
            id: 3,
            imageUrl: '/images/salesforce-consulting-services/achive3.svg',
            title: '24x7 real-time data updates',
        },
        {
            id: 4,
            imageUrl: '/images/salesforce-consulting-services/achive4.svg',
            title: 'Multi-device compatibility',
        }

    ]

    const salesForce2 = [
        {
            id: 1,
            title: 'Member Benefit Simplified',
            description: 'Effectively reduce costs by automating health business roadmaps! Streamline member journeys like care handling, enrolment to scheduling, and more.'
        },
        {
            id: 2,
            title: 'Patient-first Approach',
            description: 'Link medical data, social casualties, likings, etc. whilst delivering valuable patient treatment and enhancing outcomes.'
        },
        {
            id: 3,
            title: 'Focus on Patient-pivotal Ordeals',
            description: 'Like special treatments? Salesforce lives it. Produce personal patient plus provider engagement, enabling programs to fast-track R&D innovations via an interlinked portal.'
        },
        {
            id: 4,
            title: 'Boost Sales Transparency',
            description: 'Oversee business commercials, develop patient-provider relations, and connect with patients more efficiently, proficiently, and personally.'
        },
        {
            id: 5,
            title: 'Community-centric Experience',
            description: 'Integrate patients, healthcare providers, and the broader health ecosystem by leveraging Salesforce’s robust customer relationship management (CRM) features.'
        }

    ]
   

   
    return (
        <section>
            <div className='relative group overflow-hidden'>
                <Image
                    src="/images/salesforce-consulting-services/AdobeStock_493462153_Preview.png"
                    alt="Salesforce Consulting Team"
                    className="transform transition-transform duration-500 group-hover:scale-110 h-[270px] lg:h-[650px] object-cover md:h-full xl:h-full"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        objectFit: "cover",
                    }}
                    priority
                />
                <div className="absolute px-6 xl:pl-[865px] lg:pl-[500px] lg:pr-0 md:px-[100px]  top-[5%] lg:text-start lg:top-[21%] md:top-[34%] text-white">
                    <h4 className="font-bold">Health Cloud</h4>
                    <h2 className="lg:w-[75%]">Implement Patient Care Solutions using Salesforce</h2>
                    <div className="lg:mt-20">
                        <Image
                            src="/images/salesforce-consulting-services/salesforce-partner.webp"
                            className="w-[30%] h-full bg-transperent"
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
                    <h2>Healthcare CRM for Patient Management</h2>
                </div>
                <div className="lg:col-span-4">
                    <p>
                        The healthcare industry needs heroes daily, and Salesforce healthcare solutions make it happen by monitoring gaps between healthcare providers and patients. A 360-degree patient view simplifies patient accessibility, delivers single-view patient insights, and enables 1-on-1 patient journeys.
                    </p>
                </div>
            </div>
            <section className="lg:mt-20 px-6 xl:px-[280px] md:px-[100px] mt-10">
                <h2>How Salesforce Health Cloud is revolutionizing the MedTech solutions industry?</h2>
                <p className="mt-5">Achieving goals, using a simplified patient care solution</p>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:mt-10 gap-5">
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
                <h2 className="mt-20">Bracing Personalized Health Solutions</h2>
                <p className="mt-10">Explore how a 360-patient view helps you revolutionize client understanding and set them at the core for care.</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-10 gap-5 mt-10">
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
                            src="/images/salesforce-consulting-services/health2.webp"
                            alt="Rialtes Map"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full"
                            priority
                        />
                        <h2 className="mt-10">Healthcare made cloud-friendly</h2>
                        <p className="mt-10 mb-10">Uplifting tech and health disruptions are inevitable but adapting the Health Cloud with Rialtes is idyllic</p>
                        <ul className="list-disc list-inside">
                            <li className="marker:text-blue-500">Dedicated Professionals to meet compliance</li>
                            <li className="marker:text-blue-500 mt-2">Trusted by businesses and industry pioneers</li>
                            <li className="marker:text-blue-500 mt-2">Resources access going beyond life science and healthcare</li>
                            <li className="marker:text-blue-500 mt-2">Embracing and implementing features in real-time</li>
                            <li className="marker:text-blue-500 mt-2">No need for extra software installations</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2">
                        <h2>Driving efficiency whilst lowering costs</h2>
                        <p className="mt-5">The healthcare industry needs heroes daily, and Salesforce healthcare solutions make it happen. A 360-degree patient view simplifies patient accessibility, delivers single-view patient insights, and enables 1-on-1 patient journeys.</p>
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
            <section className="px-6 xl:pl-[280px] md:pl-[100px] lg:pr-0 lg:mt-20 pb-20 mt-10">
            <ContactForm />

            </section>
        </section>
    )
}
