"use client";
import Image from "next/image";
import FeaturedCarousel from '../../../components/servicesFeaturedCarousel';
import ServicesBlogs from '../../../components/servicesBlogs';
import ExploreMoreCarousel from '../../../components/servicesExploreMoreCarousel';
import ContactForm from "../../../components/contactform";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";

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

    const slides = [
        {
            id: 1,
            image: "/images/blog/blog-1-long-thumb.webp",
            industry: "Generic",
            date: "30 Sept 2024",
            heading: 'How Agentforce works',
            url: 'insights/blogs/how-salesforce-agentforce-actually-works',
            title: "How Salesforce Agentforce Actually Works",
        },
        {
            id: 2,
            image: "/images/blog/blog-2-long-thumb.webp",
            industry: "Generic",
            date: "21 Oct 2024",
            heading: 'Atlas Reasoning Engine',
            url: 'insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce',
            title: "The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce",
        },
        {
            id: 3,
            image: "/images/blog/blog-3-long-thumb.webp",
            industry: "Generic",
            date: "28 Oct 2024",
            heading: 'Agents vs. Copilots vs. Bots',
            url: 'insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters',
            title: "Agents vs. Copilots vs. Bots: What’s the Difference and Why It Matters",
        },
        {
            id: 4,
            image: "/images/blog/blog-4-long-thumb.webp",
            industry: "Generic",
            date: "25 Nov 2024",
            heading: 'Agentforce Testing Center',
            url: 'insights/blogs/agentforce-testing-center-redefining-ai-testing-with-synthetic-data',
            title: "Agentforce Testing Center: Redefining AI Testing with Synthetic Data",
        },
        {
            id: 11,
            image: "/images/blog/blog-12-long-thumb.webp",
            industry: "Generic",
            date: "17 Sept 2024",
            heading: 'Integrate Agenforce with Your ERP',
            url: 'insights/blogs/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai',
            title: "Agentforce Agents Scales Enterprise Resource Planning Systems with AI",
        },
        {
            id: 12,
            image: "/images/blog/blog-11-long-thumb.webp",
            industry: "Generic",
            date: "17 Sept 2024",
            heading: 'Slack Collaboration with Agentforce',
            url: 'insights/blogs/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce',
            title: "Agents as Teammates: Revolutionizing Slack Collaboration with Agentforce",
        },

        {
            id: 14,
            image: "/images/blog/blog-14-long-thumb.webp",
            industry: "Generic",
            date: "17 Sept 2024",
            heading: 'Top Features of Agentforce',
            url: 'insights/blogs/salesforce-agentforce-top-features-youre-probably-not-using-but-should',
            title: "Salesforce Agentforce: Top Features You’re Probably Not Using (But should!)",
        },

    ];


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
            <Seo
                title="Agentforce Consulting Services | Rialtes"
                description="Agentforce Consulting Services by Rialtes combines AI and expertise to help businesses optimize workflows, scale smarter, and achieve lasting success."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting/"
            />

            <div className="relative group overflow-hidden">
                <div className="relative w-full h-[260px] md:h-[400px] xl:h-[540px] lg:h-[520px] 4xl:h-[800px] 2xl:h-[700px]">
                    <Image
                        src="/images/salesforce-consulting-services/Agentforce banner 2.webp"
                        alt="Salesforce Consulting Team"
                        fill
                        className=" transition-transform duration-500 group-hover:scale-110"
                        priority
                    />
                </div>

                <div className="grid xl:grid-cols-12   absolute px-6 lg:pr-0 top-[10%] lg:top-[24%] md:top-[15%] text-white w-full">
                    <div className="xl:col-span-7 lg:col-span-11 md:col-span-11 col-span-12"></div>

                    <div className="xl:col-span-4  space-y-4  ">
                        <h4 className="font-bold lg:text-[24px]  text-[18px] md:text-[20px]" >Agentforce</h4>
                        <h2 className="  mt-3  leading-tight  2xl:text-[56px] xl:text-[40px] md:text-[30px] 4xl:text-[60px] w-[300px] lg:w-[400px] 2xl:w-[600px] xl:w-[400px] 4xl:w-[700px] md:w-[280px] lg:text-[38px]  ">
                            Humans + Agents Automate Routine Tasks to Drive Customer Success
                        </h2>
                        <div className="">
                            <div className="relative w-[120px] h-[40px] 4xl:w-[300px] 4xl:h-[102px] lg:w-[200px] lg:h-[60px] md:w-[150px] md:h-[50px] 2xl:w-[260px] 2xl:h-[80px] xl:w-[240px] xl-h-[70px]">
                                <Image
                                    src="/images/salesforce-consulting-services/salesforce-partner.webp"
                                    alt="Leadership Team"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-1 col-span-12"></div>
                </div>
            </div>

 <div className=" grid lg:grid-cols-10  gap-5 px-6 custom-container  lg:mt-16 mt-5">
                <div className="lg:col-span-6 ">
                    <h1 className="leading-tight text-[22px] md:text-[40px] lg:text-[38px] xl:text-[40px] 2xl:text-[56px] 4xl:text-[60px] ">Salesforce Agentforce:<br/> What You Need To Know</h1>
                </div>
            </div>
            <div className="flex xl:gap-20 gap-10 px-6 custom-container  flex-col lg:flex-row lg:mt-10 mt-5">
                <div className=" leading-tight md:w-[700px] ">
                    <p className="text-[16px] md:text-[18px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] 4xl:text-[20px] leading-tight">Salesforce Agentforce is a robust platform that enables organizations to create, customize, and deploy autonomous AI agents across various business functions, including sales, marketing, customer service, and e-commerce.</p>
                    <p className="mt-6 text-[16px] md:text-[18px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] leading-tight 4xl:text-[20px]">Agentforce AI is designed to proactively handle tasks, functioning independently by gathering data, formulating action plans, and executing tasks without the need for human intervention. This empowers businesses by streamlining operations through AI-driven interactions. By integrating Salesforce’s CRM capabilities with specialized agent tools, Agentforce in Salesforce provides agents with real-time customer data, powerful collaboration features, and AI-powered insights.</p>
                </div>
                <div className="">
                    <Image
                        src="/images/salesforce-consulting-services/agentforce logo.webp"
                        className="4xl:w-[398px] 4xl:h-[78px] 2xl:w-[300px] 2xl:h-[65px] xl:w-[280px] xl:h-[60px] lg:w-[240px] lg:h-[55px] md:w-[220px]  md:4-[75px] w-[150px] h-[40px] bg-transperent"
                        alt="Leadership Team"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>
            <section className="mt-[50px] md:mt-[60px] lg:mt-[94px] lg:pr-0 custom-container">
                <h2 className="   xl:w-[630px] md:w-[700px] 2xl:w-[850px] 4xl:w-[1000px] xl:h-[100px] 4xl:h-[219px] 2xl:h-[190px] lg:h-[100px] leading-tight text-[22px] md:text-[40px] xl:text-[40px] 2xl:text-[56px] 4xl:text-[60px] lg:text-[38px] lg:w-[600px]">Manage Customer Inquiries and Streamline Employee Tasks Around the Clock</h2>
                <div className="grid lg:grid-cols-4 grid-cols-1 lg:mt-16  md:grid-cols-2">
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
                                <h4 className="mt-5 text-[16px]  lg:text-[14px] md:text-[20px] xl:text-[16px] 2xl:text-[20px] 4xl:text-[24px] 4xl:w-[260px] 2xl:w-[210px] xl:w-[180px] lg:w-[150px] w-[180px] ">{sales.title}</h4>
                            </div>
                        )
                    })}

                </div>
                <h2 className="mt-[60px] md:mt-[70px] lg:mt-[104px] xl:w-[900px] lg:w-[850px] 2xl:w-[1250px] 4xl:w-[1300px] leading-tight text-[22px] md:text-[40px] lg:text-[38px] xl:text-[40px] 2xl:text-[56px] 4xl:text-[60px]">Leverage cutting-edge technologies to deliver innovative solutions with Agentforce</h2>
             
                 <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:mt-10 gap-3 mt-10 ">
                    {salesForce2.map((sales) => {
                        return (
                            <div key={sales.id} className="border-2 p-8 hover:bg-[#A9D6EE] hover:border-transparent transition-all duration-300 ">

                                <h4 className="mt-5 text-[#1F3F69] xl:text-[20px] md:text-[18px] 2xl:text-[26px] 4xl:text-[30px] 2xl:w-[300px]">{sales.title}</h4>
                                <p className="mt-5 text-[16px] xl:text-[16px] md:text-[18px] lg:text-[15px] 2xl:text-[20px] 4xl:text-[22px] 2xl:w-[290px] 4xl:w-[300px] xl:w-[240px] lg:w-[190px]" >{sales.description}</p>
                            </div>
                        )
                    })}
                
               </div>
                <LearnMore />

            </section>
            <section className="mt-[60px] md:mt-[70px] lg:mt-[104px] px-6 custom-container">
                <h2 className="xl:w-[700px] md:w-[700px] 2xl:w-[1000px] 4xl:w-[980px] leading-tight text-[22px] md:text-[40px] xl:text-[40px] 2xl:text-[56px] 4xl:text-[60px] lg:text-[38px]">The Building Blocks to Configure Your Agentforce Agents</h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-10 xl:gap-16 gap-5 md:gap-12">
                    <div className=" flex xl:gap-5 gap-2 ">
                        <div>
                            <Image
                                src="/images/salesforce-consulting-services/Agent Builder.svg"
                                alt="Leadership Team"
                                className="lg:w-[150px] h-20 w-[100px] "
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                        <div className="w-[240px] h-[109px]" >
                            <h4 className=" xl:text-[20px] md:text-[22px] lg:text-[16px] 2xl:text-[26px] 4xl:text-[30px] 2xl:w-[300px]">Agent Builder </h4>
                            <p className="xl:text-[16px] md:text-[20px]  lg:text-[14px] 2xl:text-[18px] 4xl:text-[20px]">Create and customize your own agents with low-code</p>
                        </div>
                    </div>
                    <div className=" flex xl:gap-5 gap-2">
                        <div>
                            <Image
                                src="/images/salesforce-consulting-services/achive1.svg"
                                alt="Leadership Team"
                                className="lg:w-[150px] h-20 w-[100px]"
                                width={0}
                                height={0}
                                sizes="100vw"

                                priority
                            />
                        </div>
                        <div className="w-[256px] h-[109px]" >
                            <h4 className="xl:text-[20px] md:text-[22px] lg:text-[16px] 2xl:text-[26px] 4xl:text-[30px] 2xl:w-[300px]">Prompt Builder</h4>
                            <p className="xl:text-[16px] md:text-[20px] lg:text-[14px]  2xl:text-[18px] 4xl:text-[20px]">Supercharge every workflow with trusted AI prompts</p>
                        </div>
                    </div>
                    <div className=" flex xl:gap-5 gap-2">
                        <div>
                            <Image
                                src="/images/salesforce-consulting-services/Model Builder.svg"
                                alt="Leadership Team"
                                className="lg:w-[150px] h-20 w-[100px] "
                                width={0}
                                height={0}
                                sizes="100vw"

                                priority
                            />
                        </div>

                        <div className="w-[256px] h-[109px]" >
                            <h4 className="xl:text-[20px] md:text-[22px] lg:text-[16px] 2xl:text-[26px] 4xl:text-[30px] 2xl:w-[300px]">Model Builder </h4>
                            <p className="xl:text-[16px] md:text-[20px] lg:text-[14px] 2xl:text-[18px] 4xl:text-[20px] ">Build, train, and deploy custom AI models externally using data in Salesforce.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* //industries benifites */}
            <section className="mt-[75px] md:mt-[120px] lg:mt-[120px]  px-6 custom-container">
                <h2 className="w-full leading-tight xl:w-[900px] md:w-[700px] 2xl:w-[900px] 4xl:w-[1100px]   text-[22px] md:text-[40px] xl:text-[40px] 2xl:text-[56px] 4xl:text-[60px] lg:text-[38px]">Industry-specific Benefits That We Bring to Our Clients</h2>
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

                                <h4 className="mt-5 text-[20px] 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] md:text-[24px] lg:text-[20px]">{benifite.title}</h4>
                                <p className="mt-3 text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] 4xl:text-[20px] 2xl:w-[400px] lg:w-[300px] xl:w-[350px]">{benifite.description}</p>
                                <LearnMore />
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className="bg-[#F5F5F5] mt-[60px] md:mt-[70px] lg:mt-[94px] py-10">
                <div
                    className="custom-container px-6"
                >
                    <FeaturedCarousel />
                </div>
            </section>
            <div
                className="mt-[60px] md:mt-[70px] lg:mt-[94px] mb-20 custom-container lg:pr-0"
            >
                <ServicesBlogs slides={slides} />
            </div>
            <section className='px-6 custom-container lg:pr-0 lg:mt-20 bg-[#808080] pb-20 mt-10 py-10'>
                <ExploreMoreCarousel />
            </section>
            <section className="px-6 custom-container lg:pr-0 lg:mt-20 pb-20 mt-10">
                <ContactForm title="Take the next step to operational excellence with us." className=" 2xl:text-[56px] xl:text-[46px] xl:w-[1000px] 2xl:w-[1200px]  4xl:text-[60px] 4xl:w-[1200px] lg:text-[38px] lg:w-[900px] leading-tight text-[24px]  md:text-[32px]" />
            </section>
        </section>
    )
}
