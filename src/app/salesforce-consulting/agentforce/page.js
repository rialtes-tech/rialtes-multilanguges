"use client";
import Image from "next/image";
import FeaturedCarousel from '../../components/servicesFeaturedCarousel';
import InsightsCarousel from '../../components/servicesInsightsCarousel';
import ExploreMoreCarousel from '../../components/servicesExploreMoreCarousel';
import ContactForm from "../../components/contactform";

export default function Agentforce() {

    const salesForce = [
        {
            id: 1,
            imageUrl: '/images/salesforce-consulting-services/achive1.svg',
            title: 'Autonomous operation within customized guardrails',
        },
        {
            id: 2,
            imageUrl: '/images/salesforce-consulting-services/achive2.svg',
            title: 'Real-time data adaptation',
        },
        {
            id: 3,
            imageUrl: '/images/salesforce-consulting-services/achive3.svg',
            title: 'Seamless integration with employees',
        },
        {
            id: 4,
            imageUrl: '/images/salesforce-consulting-services/achive4.svg',
            title: 'Low-code tools for customization and deployment',
        }

    ]

    const salesForce2 = [
        {
            id: 1,
            title: 'Agentforce Data Cloud',
            description: 'Unify and harmonize customer data across systems in real time.'
        },
        {
            id: 2,
            title: 'Agent Builder',
            description: 'Low-code builder for Agentforce, which includes Prompt Builder and Model Builder.'
        },
        {
            id: 3,
            title: 'Atlas Reasoning Engine',
            description: 'The brain of Agentforce agents automates agents’ actions to respond naturally and adapt to situations.'
        },
        {
            id: 4,
            title: 'Partner Network',
            description: 'A group of leading partners extends Agentforce with new agent actions through the Salesforce AppExchange.'
        },

    ]


    const industryBenifite = [
        {
            id: 1,
            imageUrl: '/images/salesforce-consulting-services/benif1.webp',
            title: 'Sales',
            description: 'Automate lead qualification, booking appointments, and nurturing leads.'

        },
        {
            id: 2,
            imageUrl: '/images/salesforce-consulting-services/cusser.webp',
            title: 'Customer Service',
            description: 'Manage tickets, resolve inquiries, and provide 24/7 support.'

        },
        {
            id: 3,
            imageUrl: '/images/salesforce-consulting-services/Marketing.webp',
            title: 'Marketing',
            description: 'Run automated campaigns that adapt based on performance metrics.'

        },
        {
            id: 4,
            imageUrl: '/images/salesforce-consulting-services/Insurance and financial services.webp',
            title: 'Insurance and financial services',
            description: 'Utilize Agentforce to access crucial client data on the go.'

        },
        {
            id: 5,
            imageUrl: '/images/salesforce-consulting-services/Healthcare and life sciences.webp',
            title: 'Healthcare and life sciences',
            description: 'Engage with patients, providers, and payers to act across multiple channels.'

        },

    ]

    return (
        <section>
            <div className='relative group overflow-hidden lg:mt-20'>
                <Image
                    src="/images/salesforce-consulting-services/agentforceb.png"
                    alt="Salesforce Consulting Team"
                    className="transform transition-transform duration-500 group-hover:scale-110  h-[230px] md:h-[400px]"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        objectFit: "cover",
                    }}
                    priority
                />
                <div className="absolute px-6 xl:pl-[915px] lg:pr-0 md:px-[100px]  top-[5%] lg:text-start lg:top-[11%] md:top-[34%] text-black">
                    <h4 className="font-bold">Agentforce</h4>
                    <h2 className="lg:text-4xl text-2xl mt-3 xl:w-[60%]">Humans + Agents Automate Routine Tasks to Drive Customer Success</h2>
                    <div className="lg:mt-10">
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

            <div className=" grid lg:grid-cols-10  gap-5 px-6 xl:px-[280px] md:px-[100px]  lg:mt-16 mt-5">
                <div className="lg:col-span-6">
                    <h2>Salesforce Agentforce: What You Need To Know</h2>
                </div>
            </div>
            <div className="flex gap-10 px-6 xl:pl-[280px] md:px-[100px]  flex-col lg:flex-row lg:mt-16 mt-5">
                <div className="lg:w-1/2">
                    <p>Salesforce Agentforce is a robust platform that enables organizations to create, customize, and deploy autonomous AI agents across various business functions, including sales, marketing, customer service, and e-commerce.</p>
                    <p className="mt-10">Agentforce AI is designed to proactively handle tasks, functioning independently by gathering data, formulating action plans, and executing tasks without the need for human intervention. This empowers businesses by streamlining operations through AI-driven interactions. By integrating Salesforce’s CRM capabilities with specialized agent tools, Agentforce in Salesforce provides agents with real-time customer data, powerful collaboration features, and AI-powered insights.</p>
                </div>
                <div className="lg:w-1/2">
                    <Image
                        src="/images/salesforce-consulting-services/agentforce logo.webp"
                        className="w-[250px] h-[50px] bg-transperent"
                        alt="Leadership Team"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>
            <section className="lg:mt-20 px-6 xl:pl-[280px] md:pl-[100px] mt-10">
                <h2>Manage Customer Inquiries and Streamline Employee Tasks Around the Clock</h2>
                <div className="grid lg:grid-cols-4 grid-cols-1 lg:mt-10 gap-10 md:grid-cols-2">
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
                <h2 className="mt-20 xl:w-[75%]">Leverage cutting-edge technologies to deliver innovative solutions with Agentforce</h2>
                <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:mt-10 gap-3 mt-10">
                    {salesForce2.map((sales) => {
                        return (
                            <div key={sales.id} className="border-2 p-8 hover:bg-[#A9D6EE] hover:border-transparent transition-all duration-300">

                                <h4 className="mt-5 text-[#1F3F69]">{sales.title}</h4>
                                <p className="mt-5">{sales.description}</p>
                            </div>
                        )
                    })}

                </div>

            </section>
            <section className="lg:mt-20 px-6 xl:pl-[280px] md:pl-[100px] mt-10">
                <h2 className="xl:w-[75%]">The Building Blocks to Configure Your Agentforce Agents</h2>
                <div className="flex mt-10 flex-col lg:flex-row gap-16">
                    <div className="flex xl:gap-5">
                        <div>
                            <Image
                                src="/images/salesforce-consulting-services/Agent Builder.svg"
                                alt="Leadership Team"
                                className="xl:w-[150px] h-20"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{

                                    objectFit: "cover",
                                }}
                                priority
                            />
                        </div>
                        <div>
                            <h4>Agent Builder </h4>
                            <p>Create and customize your own agents with low-code</p>
                        </div>
                    </div>
                    <div className="flex xl:gap-5">
                        <div>
                            <Image
                                src="/images/salesforce-consulting-services/achive1.svg"
                                alt="Leadership Team"
                                className="xl:w-[150px] h-20"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{

                                    objectFit: "cover",
                                }}
                                priority
                            />
                        </div>
                        <div>
                            <h4>Prompt Builder</h4>
                            <p>Supercharge every workflow with trusted AI prompts</p>
                        </div>
                    </div>
                    <div className="flex xl:gap-5">
                        <div>
                            <Image
                                src="/images/salesforce-consulting-services/Model Builder.svg"
                                alt="Leadership Team"
                                className="xl:w-[150px] h-20"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{

                                    objectFit: "cover",
                                }}
                                priority
                            />
                        </div>

                        <div>
                            <h4>Model Builder </h4>
                            <p>Build, train, and deploy custom AI models externally using data in Salesforce.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* //industries benifites */}
            <section className="lg:mt-20 px-6 xl:pl-[280px] lg:pr-[100px] md:pl-[100px] mt-10">
                <h2 className="lg:w-[75%]">Industry-specific Benefits That We Bring to Our Clients</h2>
                <div className="grid lg:grid-cols-3 lg:gap-20 gap-10 grid-cols-1 md:grid-cols-2">

                    {industryBenifite.map((benifite) => {
                        return (
                            <div key={benifite.id}>
                                <div>
                                    <Image
                                        src={benifite.imageUrl}
                                        alt="Rialtes Map"
                                        className="pt-10"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                        priority
                                    />
                                </div>

                                <h4 className="mt-5">{benifite.title}</h4>
                                <p className="mt-3">{benifite.description}</p>
                            </div>
                        )
                    })}

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
<section className="pb-20">
<ContactForm />

</section>
        </section>
    )
}
