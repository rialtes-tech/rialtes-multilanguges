"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function page() {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");
    console.log(query);

    const data = [
        {
            "id": 44,
            "image": "/images/blog/ai-property-operations-predictive-maintenance-mobile.webp",
            "category": "AI",
            "industry": "Generic",
            "date": "Oct. 13, 2025",
            "url": "/ai-in-real-estate-reduce-opex-with-predictive-maintenance",
            "title": "AI in Property Operations: Cut Downtime 30% and Reduce Opex with Predictive Maintenance",
            "description": "Here’s the truth about property operations: they have always been a balancing act between cost, comfort, and continuity."
        },
        {
            "id": 43,
            "image": "/images/blog/patient-experience-platform-mediAIna-transforming-long-term-care-mobile.webp",
            "category": "MediAIna",
            "industry": "Healthcare",
            "date": "Oct. 07, 2025",
            "url": "/patient-experience-platform-transforming-long-term-care",
            "title": "How a Patient Experience Platform Transforms Care from Diagnosis to Long-Term Management",
            "description": "Providing healthcare has always been about more than just diagnosis. For patients, the real journey begins after they receive a diagnosis, navigating treatment options, managing chronic conditions, and learning how to live with ongoing care needs."
        },
        {
            "id": 42,
            "image": "/images/blog/digital-patient-journeys-mobile.webp",
            "category": "General",
            "industry": "Generic",
            "date": "Sep. 30, 2025",
            "url": "/digital-patient-journeys-ai-healthcare-life-sciences",
            "title": "The Future of Digital Patient Journeys: How AI is Reshaping Life Sciences",
            "description": "The healthcare industry is standing at a turning point. Patients no longer want fragmented experiences, waiting weeks for appointments, repeating their history at every touchpoint, or dealing with disconnected portals. "
        },
        {
            "id": 45,
            "image": "/images/blog/salesforce-implementation-partners-strategies-mobile.webp",
            "category": "Salesforce",
            "industry": "Generic",
            "date": "Sep. 29, 2025",
            "url": "/salesforce-implementation-partner-strategies-reduce-risk-maximize-roi",
            "title": "Seamless Salesforce Implementation: Partner Strategies That Reduce Risk & Maximize ROI",
            "description": "Salesforce is the world’s leading CRM platform, powering enterprises across industries to better manage customers, data, and processes."
        },
        {
            "id": 41,
            "image": "/images/blog/connected-care-ecosystem-feature.webp",
            "category": "General",
            "industry": "Generic",
            "date": "Sep. 18, 2025",
            "url": "/connected-care-ecosystem-pharma-medtech",
            "title": "Why Connected Care Ecosystems Are the Next Big Bet for Pharma & MedTech",
            "description": "The life sciences industry is at an inflection point. Pharma and MedTech organizations are no longer judged only by how well they innovate in labs or build medical devices."
        },
        {
            "id": 40,
            "image": "/images/blog/ai-agents-in-manufacturing-mobile.webp",
            "category": "AI",
            "industry": "Generic",
            "date": "Sep. 17, 2025",
            "url": "/implementing-ai-agents-in-manufacturing-operations",
            "title": "5 Signs You’re Ready to Implement AI Agents in Your Manufacturing Operations",
            "description": "Today, manufacturers are faced with a choice: continue adding incremental automation to existing systems or make a significant leap into AI-driven operations that are capable of learning, adapting, and taking action."
        },
        {
            "id": 39,
            "image": "/images/blog/sap-industry-mobile-banner.webp",
            "category": "SAP",
            "industry": "Generic",
            "date": "Sep. 16, 2025",
            "url": "/sap-build-for-manufacturing-4-0",
            "title": "Accelerating Industry 4.0 with SAP Build: Low-Code Tools for Smarter Manufacturing",
            "description": "Industry 4.0 has transformed factories into connected ecosystems where machines, people, and processes work in sync."
        },
        {
            "id": 38,
            "image": "/images/blog/agentforce-ai-erp-mobile.webp",
            "category": "Agentforce",
            "industry": "Generic",
            "date": "Sep. 15, 2025",
            "url": "/how-agentforce-ai-transforms-erp-systems",
            "title": "How Agentforce AI Transforms ERP Systems: Automation, Predictive Insights, and Scalability",
            "description": "Enterprise Resource Planning (ERP) systems are the backbone of many organizations, managing critical functions like finance, procurement, manufacturing, and supply chain operations."
        },
        {
            "id": 37,
            "image": "/images/blog/data-cloud-ecom-mobile-banner.webp",
            "category": "Artificial Intelligence",
            "industry": "Generic",
            "date": "Sep. 12, 2025",
            "url": "/ecommerce-in-salesforce-data-cloud-smarter-cx-driving-loyalty",
            "title": "Predictive Ecommerce in Salesforce: How Data Cloud Shapes Smarter Customer Experiences",
            "description": "Predictive analytics has always been crucial in helping businesses deliver personalized experiences.Salesforce Data Cloud empowers companies to leverage predictive analytics and data-driven insights to craft transformative e-commerce strategies."
        },
        {
            "id": 36,
            "image": "/images/blog/ai-that-listens-mob-banner.webp",
            "category": "Artificial Intelligence",
            "industry": "Generic",
            "date": "Sep. 11, 2025",
            "url": "/how-large-language-models-improve-customer-experience",
            "title": "AI That Listens, Learns, and Delivers: How Large Language Models Are Transforming Customer Experience",
            "description": "Great customer experience begins with great listening. But we are not just talking about hearing the words; it’s about understanding intent, emotion, context, and history."
        },
        {
            "id": 35,
            "image": "/images/blog/ai-in-patient-mobile-banner.webp",
            "category": "Artificial Intelligence",
            "industry": "Generic",
            "date": "Sep. 09, 2025",
            "url": "/ai-patient-engagement-medtech-remote-care",
            "title": "AI in Patient Engagement: How AI Agents Support MedTech in Remote Monitoring",
            "description": "Early detection of health deterioration is vital for patients with chronic conditions or those recovering from surgery."
        },
        {
            "id": 34,
            "image": "/images/blog/industry4-mobile-banner.webp",
            "category": "Agentforce",
            "industry": "Generic",
            "date": "Sep. 08, 2025",
            "url": "/how-agentforce-ai-predicts-prevents-downtime-in-manufacturing",
            "title": "How Agentforce AI Predicts and Prevents Downtime in Industry 4.0 Manufacturing",
            "description": "The promise of Industry 4.0 has been laid out: factories that can think, adapt, and optimize in real time."
        },
        {
            "id": 33,
            "image": "/images/blog/first-ai-agent-mob-banner.webp",
            "category": "Artificial Intelligence",
            "industry": "Generic",
            "date": "Sep. 02, 2025",
            "url": "/how-to-build-and-deploy-ai-agents-with-agentforce",
            "title": "Build and Deploy Your First AI Agent Using Agentforce",
            "description": "By 2028, 33% of enterprise software apps will utilize agentic AI. The transition from Predictive to Generative AI has accelerated, allowing businesses to move beyond simple forecasting to defining optimal actions. Despite ethical concerns, the value of training AI for growth is clear. Teaching AI to understand human language enhances its ability to respond and perform useful tasks."
        },
        {
            "id": 32,
            "image": "/images/blog/byond-robotics-mobile-banner.webp",
            "category": "Artificial Intelligence",
            "industry": "Generic",
            "date": "Sep. 01, 2025",
            "url": "/why-ai-agents-are-the-future-of-smart-manufacturing",
            "title": "Beyond Automation: Why AI Agents Power Smart Manufacturing",
            "description": "Agentforce brings in autonomous agents that close the gap between production and experience. That means fewer silos, faster decisions, and smarter systems."
        },
        {
            "id": 30,
            "image": "/images/blog/sap-cpi-feature-thumb.webp",
            "category": "SAP",
            "industry": "Generic",
            "date": "Aug. 26, 2025",
            "url": "/sap-pi-po-to-cpi-migration-complete-guide",
            "title": "Migrating from SAP PI/PO to SAP BTP Integration Suite (CPI)",
            "description": "Enterprises can’t afford disconnected systems anymore; integration is the backbone of true digital transformation.For years, SAP Process Integration (PI) and Process Orchestration (PO) handled this role, connecting SAP and non-SAP landscapes."
        },
        {
            "id": 29,
            "image": "/images/blog/big-reimage-slider.webp",
            "category": "Artificial Intelligence",
            "industry": "Generic",
            "date": "Aug. 25, 2025",
            "url": "/reimagine-enterprise-using-agentic-ai-systems",
            "title": "Reimagine Enterprise Using Agentic AI Systems",
            "description": "The way humans interact with AI is evolving. From isolated tools that do one thing well to intelligent agents that can plan trips, monitor logistics, assist the elderly, or manage inventory across global supply chains"
        },
        {
            "id": 27,
            "image": "/images/blog/small-slider.webp",
            "category": "Agentforce",
            "industry": "Generic",
            "date": "Aug. 22, 2025",
            "url": "/from-factory-to-feedback-how-agentforce-ai-elevates-customer-experience-in-manufacturing",
            "title": "From Factory to Feedback: How Agentforce AI Elevates Customer Experience in Manufacturing",
            "description": "Manufacturers today operate in a pressure cooker. You’re dealing with fluctuating demand, global supply chain fragility, rising customer expectations, and shrinking margins. It's not just about making products anymore"
        },
        {
            "id": 26,
            "image": "/images/blog/sustain-slider.webp",
            "category": "Artificial Intelligence",
            "industry": "Generic",
            "date": "Aug. 21, 2025",
            "url": "/how-ai-is-powering-the-sustainable-future-of-our-planet",
            "title": "How AI Is Powering the Sustainable Future of Our Planet",
            "description": "We must reduce greenhouse gas emissions and transition to renewable energy sources to protect our planet and future generations. However, the hope for a sustainable future lies in conservation and innovation. Here’s how."
        },
        {
            "id": 25,
            "image": "/images/blog/Agentforce-featured-blog.webp",
            "category": "Salesforce Agentforce",
            "industry": "Generic",
            "date": "Jul. 29, 2025",
            "url": "/how-agentforce-3-is-reshaping-automotive-manufacturing",
            "title": "How Agentforce 3.0 is Reshaping Automotive Manufacturing",
            "description": "Salesforce has launched Agentforce 3.0 — and it’s a significant leap forward. Agentforce has been a key part of Salesforce's AI strategy since its launch in September 2024."
        },
        {
            "id": 24,
            "image": "/images/blog/blog-slider.webp",
            "category": "Salesforce Agentforce",
            "industry": "Generic",
            "date": "Jul. 25, 2025",
            "url": "/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters",
            "title": "Agents vs. Copilots vs. Bots: A Strategic Comparison That Drives AI Adoption Right",
            "description": "Tools like Agentforce are redefining how we view digital assistants, bringing distinctions between Agents, Copilots, and Bots to the forefront. The terms are frequently used within artificial intelligence-driven automation and conversational interfaces, each serving a distinct purpose."
        },
        {
            "id": 23,
            "image": "/images/blog/slider.webp",
            "category": "Agentforce",
            "industry": "General",
            "date": "Jul. 21, 2025",
            "url": "/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions",
            "title": "Agentforce for Manufacturing: Exceed Customer Expectations with AI-Powered Salesforce Solutions",
            "description": "We know that Artificial intelligence has transformed how we work, significantly boosting productivity by automating manual tasks and allowing teams to focus on high-value deliverables. With customer expectations soaring, they demand seamless, personalized experiences and instant support"
        },
        {
            "id": 22,
            "image": "/images/blog/agentexchange-Blog-feature-thumb.webp",
            "category": "Agentforce",
            "industry": "General",
            "date": "Jul. 02, 2025",
            "url": "/discover-agentexchange-your-trusted-marketplace-for-agentforce-success",
            "title": "Discover AgentExchange: Your Trusted Marketplace for Agentforce Success",
            "description": "Salesforce has once again raised the bar in AI-driven business solutions with the launch of AgentExchange, "
        },
        {
            "id": 21,
            "image": "/images/blog/Pharma Jewel of North India_Blog feature thumb.webp",
            "category": "General",
            "industry": "Manufacturing",
            "date": "Jul. 01, 2025",
            "url": "/himachal-pradesh-the-pharma-jewel-of-north-india-with-the-largest-pharma-manufacturing-facilities",
            "title": "Himachal Pradesh: The Pharma Jewel of North India with the Largest Pharma Manufacturing Facilities",
            "description": "India’s rise as a pharmaceutical powerhouse on the global stage is remarkable."
        },
        {
            "id": 20,
            "image": "/images/blog/signavio-blog-feature-thumb.webp",
            "category": "SAP Signavio",
            "industry": "Generic",
            "date": "Jun. 16, 2025",
            "url": "/why-sap-signavio-is-critical-for-a-successful-s4hana-implementation",
            "title": "Why SAP Signavio is Critical for a Successful S/4HANA Implementation",
            "description": "Organizations are at a stage where they must modernize their ERP systems, streamline operations, and harness real-time insights. SAP S/4HANA has become the digital core for businesses aiming to achieve this transformation. "
        },
        {
            "id": 19,
            "image": "/images/blog/Agentic Pharma_Blog feature thumb.webp",
            "category": "AI",
            "industry": "Pharma",
            "date": "May. 30, 2025",
            "url": "/agentic-pharma-the-ai-driven-era-of-pharmaceutical-industry",
            "title": "Agentic Pharma - The AI-driven era of the Pharmaceutical Industry",
            "description": "The pharmaceutical industry has long been a pioneer in adopting new technologies, from cutting-edge lab equipment to intelligent data management systems."
        },
        {
            "id": 18,
            "image": "/images/blog/sap-ariba-for-carousel.webp",
            "category": "SAP",
            "industry": "Manufacturing",
            "date": "May. 29, 2025",
            "url": "/how-does-sap-ariba-streamline-direct-and-indirect-procurement-needs",
            "title": "How does SAP Ariba Streamline Direct and Indirect Procurement Needs?",
            "description": "The term Procurement encompasses the entire process of acquiring goods or services, from identifying needs to supplying them"
        },
        {
            "id": 17,
            "image": "/images/blog/successfactor-for-carousel.webp",
            "category": "SAP SuccessFactors",
            "industry": "Human Resources",
            "date": "May. 28, 2025",
            "url": "/how-sap-successfactors-integrations-enhance-hr-and-payroll-operations",
            "title": "How SAP SuccessFactors Integrations Enhance HR and Payroll Operations",
            "description": "Are payroll challenges slowing you down? SAP SuccessFactors turns payroll management from a hassle into a streamlined process that boosts employee satisfaction."
        },
    ]

    const filtered = data.filter((item) =>
        item.url.toLowerCase().includes(query?.toLowerCase() || "")
    );

    console.log(filtered);

    return (
        <section className="min-h-screen mb-20">
            <div className="custom-container">
                <h2 className="font-semibold pt-10 text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    Search results for : <span className="ml-2 text-black">{query}</span>
                </h2>

                {filtered.length > 0 ? (
                    <div className="mt-10 w-[80%]">
                        {filtered.map((data, i) => (
                            <div className="mt-10" key={i}>
                                <Link key={i} href={"/insights/blogs/" + data.url}>
                                    <h3 className="mt-5 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold leading-tight hover:text-[#0092E0]">{data.title}</h3>
                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] text-gray-900">https://www.rialtes.com/insights/blogs{data.url}</p>
                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.description}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 mt-20">No results found.</p>
                )}
            </div>
        </section>
    );
}
