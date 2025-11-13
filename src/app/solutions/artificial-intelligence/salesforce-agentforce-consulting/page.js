// "use client";
// import Image from "next/image";
// import FeaturedCarousel from '../../../components/servicesFeaturedCarousel';
// import ServicesBlogs from '../../../components/servicesBlogs';
// import ExploreMoreCarousel from '../../../components/servicesExploreMoreCarousel';
// import ContactForm from "../../../components/contactform";
// import LearnMore from "@/app/components/learnMore";
// import Seo from "@/app/components/Seo";
// import Script from "next/script";
// const schemaData = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "name": "Salesforce Agentforce Consulting Services",
//     "url": "https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting/",
//     "description": "Rialtes offers Salesforce Agentforce Consulting services to help businesses deploy autonomous AI agents that automate sales, service, and marketing processes with real-time data and low-code tools.",
//     "inLanguage": "en",
//     "publisher": {
//         "@type": "Organization",
//         "name": "Rialtes",
//         "url": "https://www.rialtes.com",
//         "logo": {
//             "@type": "ImageObject",
//             "url": "https://www.rialtes.com/images/homepage/logo.svg"
//         }
//     },
//     "mainEntity": {
//         "@type": "Service",
//         "name": "Salesforce Agentforce Consulting",
//         "serviceType": "AI Agent Implementation, Customization, Automation Consulting",
//         "provider": {
//             "@type": "Organization",
//             "name": "Rialtes",
//             "url": "https://www.rialtes.com"
//         },
//         "areaServed": [
//             { "@type": "Country", "name": "United States" },
//             { "@type": "Country", "name": "Canada" },
//             { "@type": "Country", "name": "India" },
//             { "@type": "Country", "name": "Singapore" }
//         ],
//         "audience": {
//             "@type": "Audience",
//             "audienceType": "Sales Leaders, Customer Service Heads, Marketing Managers, IT and AI Architects"
//         },
//         "hasOfferCatalog": {
//             "@type": "OfferCatalog",
//             "name": "Agentforce Consulting Services by Rialtes",
//             "itemListElement": [
//                 {
//                     "@type": "Offer",
//                     "itemOffered": {
//                         "@type": "Service",
//                         "name": "Agentforce Implementation",
//                         "description": "Deploy and configure AI agents in Salesforce to automate workflows across business functions."
//                     }
//                 },
//                 {
//                     "@type": "Offer",
//                     "itemOffered": {
//                         "@type": "Service",
//                         "name": "Agent Builder Configuration",
//                         "description": "Low-code tool to build and customize agents using Prompt Builder and Model Builder."
//                     }
//                 },
//                 {
//                     "@type": "Offer",
//                     "itemOffered": {
//                         "@type": "Service",
//                         "name": "Salesforce Data Cloud Integration",
//                         "description": "Connect and unify customer data for real-time AI agent actions and insights."
//                     }
//                 },
//                 {
//                     "@type": "Offer",
//                     "itemOffered": {
//                         "@type": "Service",
//                         "name": "Prompt & Model Builder Setup",
//                         "description": "Create trusted AI prompts and deploy external AI models using Salesforce data."
//                     }
//                 },
//                 {
//                     "@type": "Offer",
//                     "itemOffered": {
//                         "@type": "Service",
//                         "name": "Atlas Reasoning Engine Enablement",
//                         "description": "Leverage the Atlas Engine to create autonomous agents capable of adapting and reasoning."
//                     }
//                 }
//             ]
//         }
//     }
// }
// export default function Agentforce() {
//     const salesForce = [
//         {
//             id: 1,
//             imageUrl: '/images/salesforce-consulting-services/achive1.svg',
//             title: 'Autonomous operation within customized guardrails',
//         },
//         {
//             id: 2,
//             imageUrl: '/images/salesforce-consulting-services/achive2.svg',
//             title: 'Real-time data adaptation',
//         },
//         {
//             id: 3,
//             imageUrl: '/images/salesforce-consulting-services/achive3.svg',
//             title: 'Seamless integration with employees',
//         },
//         {
//             id: 4,
//             imageUrl: '/images/salesforce-consulting-services/achive4.svg',
//             title: 'Low-code tools for customization and deployment',
//         }

//     ]
//     const salesForce2 = [
//         {
//             id: 1,
//             title: 'Agentforce Data Cloud',
//             description: 'Unify and harmonize customer data across systems in real time.'
//         },
//         {
//             id: 2,
//             title: 'Agent Builder',
//             description: 'Low-code builder for Agentforce, which includes Prompt Builder and Model Builder.'
//         },
//         {
//             id: 3,
//             title: 'Atlas Reasoning Engine',
//             description: 'The brain of Agentforce agents automates agents’ actions to respond naturally and adapt to situations.'
//         },
//         {
//             id: 4,
//             title: 'Partner Network',
//             description: 'A group of leading partners extends Agentforce with new agent actions through the Salesforce AppExchange.'
//         },
//     ]
//     const slides = [
//         {
//             id: 1,
//             image: "/images/blog/blog-1-long-thumb.webp",
//             industry: "Generic",
//             date: "30 Sept 2024",
//             heading: 'How Agentforce works',
//             url: 'insights/blogs/how-salesforce-agentforce-actually-works',
//             title: "How Salesforce Agentforce Actually Works",
//         },
//         {
//             id: 2,
//             image: "/images/blog/blog-2-long-thumb.webp",
//             industry: "Generic",
//             date: "21 Oct 2024",
//             heading: 'Atlas Reasoning Engine',
//             url: 'insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce',
//             title: "The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce",
//         },
//         {
//             id: 3,
//             image: "/images/blog/blog-3-long-thumb.webp",
//             industry: "Generic",
//             date: "28 Oct 2024",
//             heading: 'Agents vs. Copilots vs. Bots',
//             url: 'insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters',
//             title: "Agents vs. Copilots vs. Bots: What’s the Difference and Why It Matters",
//         },
//         {
//             id: 4,
//             image: "/images/blog/blog-4-long-thumb.webp",
//             industry: "Generic",
//             date: "25 Nov 2024",
//             heading: 'Agentforce Testing Center',
//             url: 'insights/blogs/agentforce-testing-center-redefining-ai-testing-with-synthetic-data',
//             title: "Agentforce Testing Center: Redefining AI Testing with Synthetic Data",
//         },
//         {
//             id: 11,
//             image: "/images/blog/blog-12-long-thumb.webp",
//             industry: "Generic",
//             date: "17 Sept 2024",
//             heading: 'Integrate Agenforce with Your ERP',
//             url: 'insights/blogs/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai',
//             title: "Agentforce Agents Scales Enterprise Resource Planning Systems with AI",
//         },
//         {
//             id: 12,
//             image: "/images/blog/blog-11-long-thumb.webp",
//             industry: "Generic",
//             date: "17 Sept 2024",
//             heading: 'Slack Collaboration with Agentforce',
//             url: 'insights/blogs/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce',
//             title: "Agents as Teammates: Revolutionizing Slack Collaboration with Agentforce",
//         },
//         {
//             id: 14,
//             image: "/images/blog/blog-14-long-thumb.webp",
//             industry: "Generic",
//             date: "17 Sept 2024",
//             heading: 'Top Features of Agentforce',
//             url: 'insights/blogs/salesforce-agentforce-top-features-youre-probably-not-using-but-should',
//             title: "Salesforce Agentforce: Top Features You’re Probably Not Using (But should!)",
//         },
//     ];
//     const industryBenifite = [
//         {
//             id: 1,
//             imageUrl: '/images/salesforce-consulting-services/benif1.webp',
//             title: 'Sales',
//             description: 'Automate lead qualification, booking appointments, and nurturing leads.'
//         },
//         {
//             id: 2,
//             imageUrl: '/images/salesforce-consulting-services/cusser.webp',
//             title: 'Customer Service',
//             description: 'Manage tickets, resolve inquiries, and provide 24/7 support.'
//         },
//         {
//             id: 3,
//             imageUrl: '/images/salesforce-consulting-services/Marketing.webp',
//             title: 'Marketing',
//             description: 'Run automated campaigns that adapt based on performance metrics.'
//         },
//         {
//             id: 4,
//             imageUrl: '/images/salesforce-consulting-services/Insurance and financial services.webp',
//             title: 'Insurance and financial services',
//             description: 'Utilize Agentforce to access crucial client data on the go.'
//         },
//         {
//             id: 5,
//             imageUrl: '/images/salesforce-consulting-services/Healthcare and life sciences.webp',
//             title: 'Healthcare and life sciences',
//             description: 'Engage with patients, providers, and payers to act across multiple channels.'
//         },
//     ]
//     const agentBlocks = [
//         {
//             title: "Agent Builder",
//             description: "Create and customize your own agents with low-code",
//             image: "/images/salesforce-consulting-services/Agent Builder.svg",
//         },
//         {
//             title: "Prompt Builder",
//             description: "Supercharge every workflow with trusted AI prompts",
//             image: "/images/salesforce-consulting-services/achive1.svg",
//         },
//         {
//             title: "Model Builder",
//             description:
//                 "Build, train, and deploy custom AI models externally using data in Salesforce.",
//             image: "/images/salesforce-consulting-services/Model Builder.svg",
//         },
//     ];

//     return (
//         <section>
//             <Seo
//                 title="Agentforce Consulting Services | Rialtes"
//                 description="Agentforce Consulting Services by Rialtes combines AI and expertise to help businesses optimize workflows, scale smarter, and achieve lasting success."
//                 keywords="home, website, welcome"
//                 canonical="https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting/"
//             />
//             <Script
//                 id="schema-agentforce"
//                 type="application/ld+json"
//                 strategy="afterInteractive"
//                 dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
//             {/* hero section */}
//             <section className="relative group overflow-hidden">
//                 <div className="relative w-full h-[360px] md:h-[400px] xl:h-[540px] lg:h-[520px] 4xl:h-[740px] 2xl:h-[600px]">
//                     <Image
//                         src="/images/salesforce-consulting-services/Agentforce banner 2.webp"
//                         alt="Agentforce banner"
//                         fill
//                         className="transition-transform duration-500 group-hover:scale-110 object-cover"
//                         priority
//                     />
//                 </div>
//                 <div className="grid xl:grid-cols-12 absolute px-6 lg:pr-0 top-[14%] lg:top-[24%] md:top-[15%] text-white w-full">
//                     <div className="xl:col-span-6 lg:col-span-11 sm:col-span-11 col-span-12"></div>
//                     <div className="xl:col-span-5 space-y-4 xl:pl-[90px]">
//                         <h4 className="font-bold lg:text-[24px] text-[18px] md:text-[20px]" >Agentforce</h4>
//                         <h2 className="mt-3 leading-tight 2xl:text-[48px] xl:text-[42px] md:text-[30px] 4xl:text-[60px] w-[300px] lg:w-[400px] 2xl:w-[550px] xl:w-[400px] 4xl:w-[600px] md:w-[280px] lg:text-[38px]">
//                             Humans + Agents Automate Routine Tasks to Drive Customer Success
//                         </h2>
//                         <div>
//                             <div className="relative w-[120px] h-[40px] 4xl:w-[300px] 4xl:h-[102px] lg:w-[200px] lg:h-[60px] md:w-[150px] md:h-[50px] 2xl:w-[260px] 2xl:h-[80px] xl:w-[240px] xl-h-[70px]">
//                                 <Image
//                                     src="/images/salesforce-consulting-services/salesforce-partner.webp"
//                                     alt="salesforce-partner"
//                                     fill 
//                                     className="object-contain"
//                                     priority />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="xl:col-span-1 col-span-12"></div>
//                 </div>
//             </section>
//             <div className="grid lg:grid-cols-10 gap-5 px-6 custom-container lg:mt-16 mt-10">
//                 <div className="lg:col-span-6">
//                     <h1 className="leading-tight text-[22px] md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[56px] 4xl:text-[60px] ">Salesforce Agentforce:<br /> What You Need To Know</h1>
//                 </div>
//             </div>
//             <div className="flex xl:gap-20 gap-10 px-6 custom-container flex-col lg:flex-row lg:mt-10 mt-5">
//                 <div className="leading-tight md:w-[700px]">
//                     <p className="text-[16px] md:text-[18px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] 4xl:text-[20px] leading-tight">Salesforce Agentforce is a robust platform that enables organizations to create, customize, and deploy autonomous AI agents across various business functions, including sales, marketing, customer service, and e-commerce.</p>
//                     <p className="mt-6 text-[16px] md:text-[18px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] leading-tight 4xl:text-[20px]">Agentforce AI is designed to proactively handle tasks, functioning independently by gathering data, formulating action plans, and executing tasks without the need for human intervention. This empowers businesses by streamlining operations through AI-driven interactions. By integrating Salesforce’s CRM capabilities with specialized agent tools, Agentforce in Salesforce provides agents with real-time customer data, powerful collaboration features, and AI-powered insights.</p>
//                 </div>
//                 <div>
//                     <Image
//                         src="/images/salesforce-consulting-services/agentforce logo.webp"
//                         className="4xl:w-[398px] 4xl:h-[78px] 2xl:w-[300px] 2xl:h-[65px] xl:w-[280px] xl:h-[60px] lg:w-[240px] lg:h-[55px] md:w-[220px]  md:4-[75px] w-[150px] h-[40px] bg-transperent"
//                         alt="agentforce logo"
//                         width={0}
//                         height={0}
//                         sizes="100vw"
//                         priority
//                     />
//                 </div>
//             </div>
//             <section className="mt-[50px] md:mt-[60px] lg:mt-[94px] lg:pr-0 custom-container">
//                 <h2 className="xl:w-[630px] md:w-[700px] 2xl:w-[850px] 4xl:w-[1000px] xl:h-[100px] 4xl:h-[219px] 2xl:h-[190px] lg:h-[100px] leading-tight text-[22px] md:text-[30px] xl:text-[40px] 2xl:text-[56px] 4xl:text-[60px] lg:text-[38px] lg:w-[600px]">Manage Customer Inquiries and Streamline Employee Tasks Around the Clock</h2>
//                 <div className="grid lg:grid-cols-4 grid-cols-1 lg:mt-16 md:grid-cols-2">
//                     {salesForce.map((sales) => {
//                         return (
//                             <div key={sales.id}>
//                                 <div className="mt-10">
//                                     <Image
//                                         src={sales.imageUrl}
//                                         alt={`${sales.title} image`}
//                                         className="w-20 h-20"
//                                         width={0}
//                                         height={0}
//                                         sizes="100vw"
//                                         style={{
//                                             objectFit: "cover",
//                                         }}
//                                         priority />
//                                 </div>
//                                 <h4 className="mt-5 text-[16px] lg:text-[14px] md:text-[20px] xl:text-[16px] 2xl:text-[20px] 4xl:text-[24px] 4xl:w-[260px] 2xl:w-[210px] xl:w-[180px] lg:w-[150px] w-[180px] ">{sales.title}</h4>
//                             </div>
//                         )
//                     })}
//                 </div>
//                 <h2 className="mt-[60px] md:mt-[70px] lg:mt-[104px] xl:w-[900px] lg:w-[850px] 2xl:w-[1250px] 4xl:w-[1300px] leading-tight text-[22px] md:text-[30px] lg:text-[38px] xl:text-[40px] 2xl:text-[56px] 4xl:text-[60px]">Leverage cutting-edge technologies to deliver innovative solutions with Agentforce</h2>
//                 <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:mt-10 gap-3 mt-10 ">
//                     {salesForce2.map((sales) => {
//                         return (
//                             <div key={sales.id} className="border-2 p-8 hover:bg-[#A9D6EE] hover:border-transparent transition-all duration-300 ">
//                                 <h4 className="mt-5 text-[#1F3F69] xl:text-[20px] md:text-[18px] 2xl:text-[26px] 4xl:text-[30px] 2xl:w-[300px]">{sales.title}</h4>
//                                 <p className="mt-5 text-[16px] xl:text-[16px] md:text-[18px] lg:text-[15px] 2xl:text-[20px] 4xl:text-[22px] 4xl:w-[300px]" >{sales.description}</p>
//                             </div>
//                         )
//                     })}
//                 </div>
//                 <LearnMore />
//             </section>
//             <section className="mt-[60px] md:mt-[70px] lg:mt-[104px] px-6 custom-container">
//                 <h2 className="xl:w-[700px] md:w-[700px] 2xl:w-[1000px] 4xl:w-[980px] leading-tight text-[22px] md:text-[30px] xl:text-[40px] 2xl:text-[56px] 4xl:text-[60px] lg:text-[38px]">
//                     The Building Blocks to Configure Your Agentforce Agents
//                 </h2>
//                 <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-10 xl:gap-16 gap-5 md:gap-12">
//                     {agentBlocks.map((block, index) => (
//                         <div key={index} className="flex xl:gap-5 gap-2">
//                             <div>
//                                 <Image
//                                     src={block.image}
//                                     alt={block.title}
//                                     className="lg:w-[150px] h-20 w-[100px]"
//                                     width={0}
//                                     height={0}
//                                     sizes="100vw"
//                                     priority
//                                 />
//                             </div>
//                             <div className="w-[256px] h-[109px]">
//                                 <h4 className="xl:text-[20px] md:text-[22px] lg:text-[16px] 2xl:text-[26px] 4xl:text-[30px] 2xl:w-[300px]">
//                                     {block.title}
//                                 </h4>
//                                 <p className="xl:text-[16px] md:text-[20px] lg:text-[14px] 2xl:text-[18px] 4xl:text-[20px]">
//                                     {block.description}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//             {/* //industries benifites */}
//             <section className="mt-[75px] md:mt-[120px] lg:mt-[120px]  px-6 custom-container">
//                 <h2 className="w-full leading-tight xl:w-[900px] md:w-[700px] 2xl:w-[900px] 4xl:w-[1100px]   text-[22px] md:text-[30px] xl:text-[40px] 2xl:text-[56px] 4xl:text-[60px] lg:text-[38px]">Industry-specific Benefits That We Bring to Our Clients</h2>
//                 <div className="grid lg:grid-cols-3 lg:gap-20 gap-10 grid-cols-1 md:grid-cols-2">
//                     {industryBenifite.map((benifite) => {
//                         return (
//                             <div key={benifite.id}>
//                                 <div>
//                                     <Image
//                                         src={benifite.imageUrl}
//                                         alt={`${benifite.title} image`}
//                                         className="pt-10"
//                                         width={0}
//                                         height={0}
//                                         sizes="100vw"
//                                         style={{
//                                             width: "100%",
//                                             height: "100%",
//                                             objectFit: "cover",
//                                         }}
//                                         priority
//                                     />
//                                 </div>
//                                 <h4 className="mt-5 text-[20px] 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] md:text-[24px] lg:text-[20px]">{benifite.title}</h4>
//                                 <p className="mt-3 text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] 4xl:text-[20px] 2xl:w-[400px] lg:w-[300px] xl:w-[350px]">{benifite.description}</p>
//                                 <LearnMore />
//                             </div>
//                         )
//                     })}
//                 </div>
//             </section>
//             <section className="bg-[#F5F5F5] mt-[60px] md:mt-[70px] lg:mt-[94px] py-20">
//                 <div className="custom-container px-6">
//                     <FeaturedCarousel />
//                 </div>
//             </section>
//             <div className="mt-[60px] md:mt-[70px] lg:mt-[94px] mb-20 custom-container lg:pr-0">
//                 <ServicesBlogs slides={slides} />
//             </div>
//             <section className='px-6 custom-container lg:pr-0 lg:mt-20 bg-[#808080] pb-20 mt-10 py-20'>
//                 <ExploreMoreCarousel />
//             </section>
//             <section className="px-6 custom-container lg:pr-0 lg:mt-20 pb-20 mt-10">
//                 <ContactForm title="Take the next step to operational excellence with us." className=" 2xl:text-[56px] xl:text-[46px] xl:w-[1000px] 2xl:w-[1200px]  4xl:text-[60px] 4xl:w-[1200px] lg:text-[38px] lg:w-[900px] leading-tight text-[24px]  md:text-[32px]" />
//             </section>
//         </section>
//     )
// }

"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import HealthcareStats from "@/app/components/HealthcareStats";
import LearnMoreButton from "@/app/components/learnMore";
import ContactForm from "@/app/components/contactform";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Salesforce Agentforce Consulting Services",
    "url": "https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting/",
    "description": "Rialtes offers Salesforce Agentforce Consulting services to help businesses deploy autonomous AI agents that automate sales, service, and marketing processes with real-time data and low-code tools.",
    "inLanguage": "en",
    "publisher": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.rialtes.com/images/homepage/logo.svg"
        }
    },
    "mainEntity": {
        "@type": "Service",
        "name": "Salesforce Agentforce Consulting",
        "serviceType": "AI Agent Implementation, Customization, Automation Consulting",
        "provider": {
            "@type": "Organization",
            "name": "Rialtes",
            "url": "https://www.rialtes.com"
        },
        "areaServed": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "India" },
            { "@type": "Country", "name": "Singapore" }
        ],
        "audience": {
            "@type": "Audience",
            "audienceType": "Sales Leaders, Customer Service Heads, Marketing Managers, IT and AI Architects"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Agentforce Consulting Services by Rialtes",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Agentforce Implementation",
                        "description": "Deploy and configure AI agents in Salesforce to automate workflows across business functions."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Agent Builder Configuration",
                        "description": "Low-code tool to build and customize agents using Prompt Builder and Model Builder."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Salesforce Data Cloud Integration",
                        "description": "Connect and unify customer data for real-time AI agent actions and insights."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Prompt & Model Builder Setup",
                        "description": "Create trusted AI prompts and deploy external AI models using Salesforce data."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Atlas Reasoning Engine Enablement",
                        "description": "Leverage the Atlas Engine to create autonomous agents capable of adapting and reasoning."
                    }
                }
            ]
        }
    }
}
const AIBusinessBanner = () => {
    return (
        <section className="relative text-white">
            <div className="flex flex-col xl:flex-row">
                {/* Left: Image */}
                <div className="relative xl:w-[52%] h-full  xl:ml-[20px]">
                    <img
                        src="/images/salesforce-consulting-services/manage-customer.webp"
                        alt="AI in business"
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Right: Blue Content Box */}
                <div className="xl:w-[61%] bg-[#073259] max-md:mx-[35px] text-white p-6 pb-0  4xl:p-16 2xl:p-12 xl:p-10  xl:pb-0 flex flex-col  4xl:mt-[170px] 2xl:mt-[120px] xl:mt-[100px] absolute xl:left-[39%] top-[99%] xl:top-0 xl:h-[381px] 4xl:h-[553px] 2xl:h-[458px]">
                    <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] leading-tight pt-8 xl:pt-0 md:text-[28px] text-[26px] 4xl:mb-10 xl:mb-5 mb-5 2xl:mb-10 4xl:pr-28 2xl:pr-24 xl:pr-20">
                        Manage Customer Inquiries and Streamline Employee Tasks Around the Clock
                    </h2>
                    <ul className="space-y-3 4xl:space-y-3 xl:space-y-1 2xl:space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mb-6 list-disc list-outside pl-[25px]">
                        <li>Autonomous operation within customized guardrails</li>
                        <li>Real-time data adaptation</li>
                        <li>Seamless integration with employees</li>
                        <li>Low-code tools for customization and deployment</li>
                    </ul>
                    <div className="2xl:mt-[-18px] 4xl:mt-[-10px] xl:mt-[-20px]">
                        <LearnMoreButton bgcolor="#006FBE" className="absolute" />
                    </div>
                </div>
            </div>
        </section>

    );
};


const AgentforceBanner = () => {
    return (
        <section className="relative w-full custom-container max-md:px-0">
            {/* Background Image */}
            <div className="hidden xl:block">
                <img
                    src="/images/salesforce-consulting-services/leaverage-cutting-desktop.webp" // Replace with your actual image path
                    alt="Agentforce technology"
                    className="absolute inset-0  z-0 w-full 4xl:h-[1029px] 2xl:h-[913px] xl:h-[933px]"
                />
            </div>
            <div className="block xl:hidden">
                <img
                    src="/images/salesforce-consulting-services/leaverage-cuttung-mobile.webp" // Replace with your actual image path
                    alt="Agentforce technology"
                    className="0 w-full"
                />
            </div>


            {/* Overlay Content */}
            <div className="relative z-10 flex h-full ">
                <div className="bg-opacity-90 text-white 4xl:max-w-[44rem] 2xl:max-w-[36rem] xl:max-w-[30rem] bg-black xl:bg-transparent max-md:px-[35px] md:px-[35px] xl:px-0">
                    <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight mb-4 pt-12">
                        Leverage cutting-edge technologies to deliver innovative solutions with Agentforce
                    </h2>
                    <ul className="space-y-6 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mb-6 list-none pt-10">
                        <li className="border-b border-white pb-5">
                            <div className="font-bold">Agentforce Data Cloud</div>
                            <div className="mt-3">Unify and harmonize customer data across systems in real time.</div>
                        </li>
                        <li className="border-b border-white pb-6">
                            <div className="font-bold">Agent Builder</div>
                            <div className="mt-3">Low-code builder for Agentforce, including Prompt Builder and Model Builder.</div>
                        </li>
                        <li className="border-b border-white pb-6">
                            <div className="font-bold">Atlas Reasoning Engine</div>
                            <div className="mt-3">The brain of Agentforce agents automates agents’ actions to respond naturally and adapt to situations.</div>
                        </li>
                        <li className="border-white">
                            <div className="font-bold">Partner Network</div>
                            <div className="mt-3">A group of leading partners extends Agentforce with new agent actions through the Salesforce AppExchange.</div>
                        </li>
                    </ul>

                    <LearnMoreButton bgcolor="#006FBE" className="absolute" />
                </div>
            </div>
        </section>
    );
};
const AgentforcePromo = () => {
    return (
        <section>
            <div className="4xl:max-w-4xl 2xl:max-w-[45rem] xl:max-w-[40rem]">
                <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight mb-4">
                    Agentforce 3.0: The Next Leap in Salesforce AI
                </h2>
                <h3 className="4xl:text-[30px] 2xl:text-[24px] xl:text-[22px] text-[20px] font-semibold xl:mt-10 mt-6 leading-tight 4xl:pr-[12rem] 2xl:pr-20 xl:pr-18">
                    Agentforce 3.0 marks the newest evolution of Salesforce’s digital labor platform.
                </h3>
                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px]  text-[16px] mt-8">Since its debut in 2024, Agentforce has become central to Salesforce’s AI strategy. With 3.0, the platform now delivers:</p>
            </div>


            <div className="mt-12 grid gap-5 md:grid-cols-3 4xl:pr-[276px] 2xl:pr-[200px] xl:pr-[120px]">
                {[
                    {
                        title: "Deeper Monitoring",
                        description: "Track and optimize every AI agent’s activity and outcomes in real time.",
                    },
                    {
                        title: "Advanced Governance",
                        description: "Control data access, workflows, and compliance with enterprise-grade security.",
                    },
                    {
                        title: "Performance Intelligence",
                        description: "Benchmark, tune, and enhance agent efficiency using live insights.",
                    },
                ].map((feature, idx) => (
                    <div
                        key={idx}
                        className="p-8 transition  border-2"
                    >
                        <h3 className="4xl:text-[26px] 2xl:text-[22px] xl:text-[20px]  text-[19px] font-semibold mb-2 text-[#0A6BB8] leading-tight pr-0 xl:pr-20">
                            {feature.title}
                        </h3>
                        <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px]  text-[16px] leading-tight mt-5 xl:pr-10">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

const IndustryActionsBanner = () => {
    return (
        <section className="relative bg-white">
            <div className="grid xl:grid-cols-12 grid-cols-1 min-h-[500px]">
                {/* Image section */}
                <div className="xl:order-2 order-1 xl:col-span-5 col-span-12">
                    <div className="absolute z-10 md:z-0 xl:ml-[-775px] xl:block hidden">
                        <img
                            src="/images/salesforce-consulting-services/prebuilt-desktop.webp"
                            alt="Smiling man with laptop"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="xl:hidden block">
                        <img
                            src="/images/salesforce-consulting-services/prebuilt-mobile.webp"
                            alt="Smiling man with laptop"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Content section */}
                <div className="relative z-20 xl:bg-[#073259] bg-black text-white px-8 pt-12 xl:pt-16 4xl:px-24 2xl:px-20 xl:px-16 xl:mt-40  xl:col-span-7 col-span-12 xl:order-1 order-2">
                    <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[40px] md:text-[28px] text-[26px] leading-tight">
                        200+ Pre-Built
                    </h2>
                    <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[40px] md:text-[28px] text-[26px] leading-tight mb-6">
                        Industry Actions
                    </h2>
                    <p className="4xl:text-[40px] 2xl:text-[36px] xl:text-[25px] text-[24px] font-semibold mb-8 leading-tight xl:pr-28">
                        Faster Time to Value for Sales, Service & More
                    </p>
                    <div className="flex gap-10 xl:flex-row md:flex-row flex-col">
                        <div>
                            <p className="font-semibold 4xl:text-[24px] 2xl:text-[22px] xl:text-[18px] text-[18px]">
                                Examples of Actions:
                            </p>
                            <ul className="list-disc space-y-5 4xl:text-[19px] 2xl:text-[17px] xl:text-[15px] text-[16px] list-outside mt-5 pl-5">
                                <li>Patient scheduling (Healthcare)</li>
                                <li>Proposal generation (Media & HiTech)</li>
                                <li>Claims processing (Insurance)</li>
                                <li>Vehicle servicing (Automotive)</li>
                                <li>Revenue tracking (Finance)</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold 4xl:text-[24px] 2xl:text-[22px] xl:text-[18px] text-[18px] pr-16">
                                Flexible Pricing to Scale Confidently:
                            </p>
                            <ul className="list-disc space-y-5 4xl:text-[19px] 2xl:text-[17px] xl:text-[15px] text-[16px] list-outside mt-5 4xl:pr-16 pl-5">
                                <li>Per-user pricing for employee-facing agents.</li>
                                <li>Unlimited usage of pre-built actions.</li>
                                <li>New SKUs for Sales, Service, and Industry Cloud.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="4xl:mt-10 2xl:mt-10 xl:mt-5">
                        <LearnMoreButton bgcolor="#006FBE" className="absolute" />
                    </div>
                </div>
            </div>
        </section>

    );
}

const AgentforceIndustryGrid = () => {
    const items = [
        {
            title: "Sales",
            desc: "Automate lead qualification, booking appointments, and nurturing leads.",
        },
        {
            title: "Customer Service",
            desc: "Manage tickets, resolve inquiries, and provide 24/7 support.",
        },
        {
            title: "Marketing",
            desc: "Run automated campaigns that adapt based on performance metrics.",
        },
        {
            title: "Insurance and financial services",
            desc: "Utilize Agentforce to access crucial client data on the go.",
        },
        {
            title: "Healthcare and life sciences",
            desc: "Engage with patients, providers, and payers to act across multiple channels.",
        },
        {
            title: "Retail",
            desc: "Personalize shopping experiences, automate order tracking, and enable proactive service on messaging channels.",
        },
        {
            title: "Automotive",
            desc: "Streamline dealer management, service scheduling, and parts inventory with intelligent, connected AI agents.",
        },
    ];

    return (
        <section>
            <div className="mb-10 grid xl:grid-cols-12 grid-cols-1">
                <div className="4xl:col-span-9 2xl:col-span-7 xl:col-span-7 col-span-12">
                    <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[40px] md:text-[28px] text-[26px] leading-tight">
                        Industry-specific Benefits That We Bring to Our Clients
                    </h2>
                </div>

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 gap-y-10 lg:gap-x-8  border-gray-200">
                {items.slice(0, 4).map((item, index) => (
                    <div
                        key={index}
                        className={`${index !== 3
                            ? "lg:border-r-2 border-b-2 xl:border-b-0 pb-5 xl:pb-0 border-[#707070] pr-8"
                            : "pr-0"
                            }`}
                    >
                        <h3 className="font-semibold 4xl:text-[26px] 2xl:text-[22px] xl:text-[20px] text-[20px] mb-5 leading-tight">{item.title}</h3>
                        <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px]  text-[16px] leading-tight">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
            <div className="block xl:hidden border-t-2 border-[#707070] my-10"></div>

            {/* Second Row */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-y-10 lg:gap-x-8 xl:mt-16  border-gray-200">
                {items.slice(4).map((item, index) => (
                    <div
                        key={index}
                        className={` ${index !== 2
                            ? "lg:border-r-2 border-b-2 xl:border-b-0 pb-5 xl:pb-0 border-[#707070] pr-8"
                            : "pr-0"
                            }`}
                    >
                        <h3 className="font-semibold 4xl:text-[26px] 2xl:text-[22px] xl:text-[20px] mb-5 text-[20px] leading-tight">{item.title}</h3>
                        <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px]  text-[16px] leading-tight ">
                            {item.desc}
                        </p>
                    </div>
                ))}

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 items-center xl:mt-8 mt-12">
                <p className="lg:col-span-9 col-span-12 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] leading-tight mb-6 lg:mb-0 w-full">
                    Our Agentforce consultants work closely with your teams to align
                    technology with outcomes, making AI adoption practical, measurable, and
                    future-ready.
                </p>
                <div className="lg:col-span-3 col-span-12 flex lg:justify-end">
                    <LearnMoreButton bgcolor="#006FBE" />
                </div>
            </div>

        </section>
    );
}

const SalesforceAgentPromo = () => {
    return (
        <section className="bg-white py-12">
            <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-16 gap-10">
                {/* Image Section */}
                <div className="order-1 xl:order-2 xl:col-span-7">
                    <img
                        src="/images/salesforce-consulting-services/salesforce-agentplus-desktop.webp"
                        alt="Finger interacting with digital interface"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="order-2 xl:order-1 xl:col-span-5 max-md:px-[35px]">
                    <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[40px] md:text-[28px] text-[26px] leading-tight">
                        SalesforceAgent+
                    </h2>
                    <h3 className="4xl:text-[42px] 2xl:text-[40px] xl:text-[30px] text-[20px] font-semibold mb-4 leading-tight 4xl:mt-5 2xl:mt-10 mt-5 pr-20 xl:pr-0">
                        Agentforce Consulting Services with Rialtes
                    </h3>
                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] leading-tight mb-6 xl:pr-10">
                        Agentforce is transforming how businesses interact with customers and automate operations — and Rialtes’ Agentforce consulting services help you accelerate that transformation effectively.
                    </p>
                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] leading-tight mb-6">
                        Our certified Agentforce consultants bring deep expertise across industries to ensure your AI agents deliver real impact from day one.
                    </p>
                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] leading-tight mb-6">
                        We make adoption simple and result-oriented with:
                    </p>
                    <ul className="list-disc 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] leading-tight space-y-5 mb-6 font-medium list-outside pl-5 xl:pr-10 ">
                        <li>Rapid AI-readiness assessments tailored to your industry.</li>
                        <li>Conversational AI deployment for Sales, Service, and Field teams.</li>
                        <li>Einstein GPT and AI automation for proactive customer support.</li>
                        <li>Agentforce enables workshops to train and onboard teams.</li>
                        <li>Pre-built AI bots for case management, lead nurturing, and knowledge sharing.</li>
                    </ul>
                    <div>
                        <LearnMoreButton btnName="Know More" bgcolor="#006FBE" href="/services/application-services/salesforce-managed-services-provider-salesforceagentplus/" />
                    </div>
                </div>
            </div>
        </section>

    );
}

const AgentChatPromo = () => {
    return (
        <section className="bg-[#184671] text-white pt-12">
            <div className="w-full mb-10 custom-container mt-[-200px]">
                <div className="xl:block hidden">
                    <img
                        src="/images/salesforce-consulting-services/agentforce-agentchat-desktop.webp"
                        alt="Person using laptop and phone"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="xl:hidden block">
                    <img
                        src="/images/salesforce-consulting-services/agentchat-mobile-agentforce.jpg"
                        alt="Person using laptop and phone"
                        className="w-full h-auto object-cover"
                    />
                </div>

            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 items-start custom-container">
                <div className="xl:pr-32">
                    <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[40px] md:text-[28px] text-[26px] leading-tight mb-5">AgentChat</h2>
                    <p className="4xl:text-[38px] 2xl:text-[30px] xl:text-[25px] text-[20px] font-semibold mb-4 leading-tight pr-16 xl:pr-0">
                        Transforming WhatsApp Conversations for Salesforce Users
                    </p>

                </div>
                <div>
                    <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[18px] font-semibold mb-2 leading-tight">Turn Every Chat into a Customer Moment.</h3>
                    <ul className="list-disc xl:list-inside list-outside pl-5 xl:pl-0 space-y-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mt-6 leading-tight">
                        <li>Instant WhatsApp messaging embedded inside Salesforce.</li>
                        <li>Auto-responses, case creation, and service cloud integration.</li>
                        <li>Pre-built AI chatbots for Agentforce and Service Cloud.</li>
                        <li>Personalized notifications and marketing campaigns.</li>
                    </ul>
                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mt-10">
                        AgentChat is the ideal solution for managing customer service, sales inquiries, order updates,
                        and marketing outreach, all securely within Salesforce.
                    </p>
                    <div className="mt-10">
                        <LearnMoreButton btnName="Know More" bgcolor="#006FBE" href="/products/agentchat/" />

                    </div>
                </div>
            </div>
        </section>

    );
}

const AgentforceHero = () => {
    return (
        <section className="relative w-full h-auto">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10 xl:block hidden">
                <img
                    src="/images/salesforce-consulting-services/your-stategic-partner.webp"
                    alt="Abstract digital waveforms"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" /> {/* Optional dark overlay */}
            </div>
            <div className="absolute inset-0 -z-10 xl:hidden block">
                <img
                    src="/images/salesforce-consulting-services/your-stategic-partner-mobile.webp"
                    alt="Abstract digital waveforms"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" /> {/* Optional dark overlay */}
            </div>

            <div className="py-16 text-white custom-container grid xl:grid-cols-12 grid-cols-1">
                <div className="4xl:col-span-9 xl:col-span-7 2xl:col-span-7 col-span-12">
                    <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[40px] md:text-[28px] text-[26px] leading-tight mb-8">
                        Your Strategic Partner for Salesforce Agentforce Success
                    </h2>
                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mb-6 leading-tight">
                        As a Salesforce Crest Partner with deep industry expertise, we turn <br className="xl:block hidden"></br> the promise of intelligent automation into measurable results.
                    </p>

                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mb-4 leading-tight">Here’s what sets us apart:</p>
                    <ul className="space-y-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mb-6 leading-tight">
                        <li>
                            <strong>Proven Salesforce Expertise</strong><br />
                            Decades of experience across Sales, Service, and Industry Clouds <br className="xl:block hidden"></br> means we align services and speed around real business impact, not <br className="xl:block hidden"></br> experimentation.
                        </li>
                        <li>
                            <strong>End-to-End Consulting</strong><br />
                            From strategy and design to implementation and optimization, we <br className="xl:block hidden"></br> guide you through every phase of your Agentforce journey.
                        </li>
                        <li>
                            <strong>Accelerated Adoption</strong><br />
                            Our robust user enablement, automation templates, and enablement <br className="xl:block hidden"></br> programs shorten time-to-value and ensure your teams adopt <br className="xl:block hidden"></br> Agentforce confidently.
                        </li>
                        <li>
                            <strong>Global Presence</strong><br />
                            United States, Canada, Singapore, India
                        </li>
                        <li>
                            <strong>Connected Ecosystem</strong><br />
                            With Rinse Managed Services, you get ongoing performance <br className="xl:block hidden"></br> monitoring, analytics, and updates as Salesforce evolves.
                        </li>
                    </ul>

                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mb-6 leading-tight">
                        Whether you are starting or optimizing your current solution, <br></br>our Agentforce consulting services provide the strategy, tools, <br></br>and support needed to scale AI confidently.
                    </p>

                </div>
            </div>
        </section>
    );
}


export default function page() {
    return (
        <section>
            <Seo
                title="Agentforce Consulting Services | Rialtes"
                description="Agentforce Consulting Services by Rialtes combines AI and expertise to help businesses optimize workflows, scale smarter, and achieve lasting success."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting/"
            />            <Script
                id="schema-sap-buy-plus"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative group overflow-hidden h-[350px] md:h-[400px] 2xl:h-[600px] xl:h-[500px]  4xl:h-[650px]  ">
                {/* Desktop Image */}
                <div className="hidden xl:block">
                    <Image
                        src="/images/salesforce-consulting-services/agentforce-banner-desktop.webp"
                        alt="desktop banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "55% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                {/* Mobile Image */}
                <div className="block xl:hidden">
                    <Image
                        src="/images/salesforce-consulting-services/agentforce-banner-mobile.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center text-[#ffffff]">
                    <div className="grid xl:grid-cols-12 grid-cols-4 md:grid-cols-7 w-full max-[375px]:grid-cols-3">
                        <div className="4xl:col-span-6 xl:col-span-5 col-span-3">
                            <h1 className="font-bold  4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[20px]">
                                Agentforce Consulting
                            </h1>
                            <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] leading-tight mt-5 md:text-[30px] text-[26px] ">
                                Humans + Agents Automate Routine Tasks to Drive Customer Success
                            </h2>
                        </div>
                        <div className="4xl:col-span-5 sm:col-span-4 xl:col-span-6 col-span-1">
                        </div>
                    </div>
                </div>
            </section>
            {/* page information */}
            <section className="custom-container 4xl:mt-20 xl:mt-10 mt-10">
                <div className="grid xl:grid-cols-12">
                    <div className="4xl:col-span-9 2xl:col-span-8 xl:col-span-9">
                        <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] leading-tight mt-5 md:text-[28px] text-[26px] xl:pr-20 4xl:pr-0 2xl:pr-0">Salesforce Agentforce: What You Need to Know</h2>
                        <p className="leading-tight font-normal 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px]  text-[16px] mt-10 max-[430px]:pr-10">
                            Salesforce Agentforce is a robust platform that enables organizations to create, customize, and deploy autonomous AI agents across various business functions, including sales, marketing, customer service, and e-commerce.
                        </p>
                        <p className="leading-tight font-normal mt-[19px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px]  text-[16px] 4xl:pr-8 max-[430px]:pr-10">
                            Agentforce AI is designed to proactively handle tasks, functioning independently by gathering data, formulating action plans, and executing tasks without the need for human intervention. This empowers businesses by streamlining operations through AI-driven interactions. By integrating Salesforce’s CRM capabilities with specialized agent tools, Agentforce in Salesforce provides agents with real-time customer data, powerful collaboration features, and AI-powered insights.
                        </p>

                    </div>
                </div>
            </section>
            <section className="custom-container 4xl:mt-20 xl:mt-10 mt-10 4xl:pr-[398px]">
                <div className="grid xl:grid-cols-12">
                    <div className="4xl:col-span-8 2xl:col-span-7 xl:col-span-7">
                        <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] leading-tight mt-5 md:text-[28px] text-[26px] xl:pr-20 4xl:pr-0 2xl:pr-0 pr-8">Build a Healthier Network with Agentforce</h2>
                    </div>
                </div>
                <HealthcareStats />
            </section>
            <section className="custom-container xl:px-0 mt-20 max-md:px-0">
                <AIBusinessBanner />
            </section>
            <section className=" xl:px-0 xl:mt-20 max-md:px-0 md:px-0 mt-[570px] md:mt-[450px]">
                <AgentforceBanner />
            </section>
            <section className="custom-container xl:mt-20  mt-14">
                <AgentforcePromo />
            </section>
            <section className="custom-container xl:px-0 xl:mt-20 max-md:px-0 mt-16 4xl:pl-[142px]">
                <IndustryActionsBanner />
            </section>

            <section className="custom-container xl:px-0 4xl:mt-28 2xl:mt-28 xl:mt-20 max-md:px-0 mt-20">
                <div className="xl:block hidden">
                    <img
                        src="/images/salesforce-consulting-services/industry-specific.webp"
                        alt="Smiling man with laptop"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="xl:hidden block">
                    <img
                        src="/images/salesforce-consulting-services/industry-spacific-mobile.webp"
                        alt="Smiling man with laptop"
                        className="object-cover w-full h-full"
                    />
                </div>

            </section>
            <section className="custom-container  4xl:mt-20 2xl:mt-20 xl:mt-16  mt-10">
                <AgentforceIndustryGrid />
            </section>

            <section className="custom-container xl:pr-[142px] xl:mt-10 max-md:px-0 mt-0">
                <SalesforceAgentPromo />
            </section>
            <section className="custom-container xl:px-0 mt-48 max-md:px-0">
                <AgentChatPromo />
            </section>

            <section className="custom-container xl:px-0  max-md:px-0 mt-0">
                <AgentforceHero />
            </section>
            {/* Contact Form */}
            <div className="custom-container pb-10 4xl:mt-[80px] 2xl:mt-[60px] xl:mt-[55px] mt-[50px] mb-[45px]">
                <ContactForm title='Let’s Elevate Your Customer Engagement Together!' subtitle='Unlock AI, boost productivity, and optimize Salesforce with Agentforce consulting Services' className={"xl:w-[70%] xl:font-light 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight"} />
            </div >
        </section>
    )
}