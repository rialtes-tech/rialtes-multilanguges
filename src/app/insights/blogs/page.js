"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Link from "next/link";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import ImageComponent from "@/app/components/ImageComponent";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/"
  },
  "name": "Rialtes Blogs | Expert Insights on Digital Transformation",
  "headline": "Insights That Drive Innovation – Salesforce & SAP Blogs",
  "description": "Stay updated with expert blogs from Rialtes on Salesforce, SAP, Yardi, MuleSoft, and more. Learn how technology trends are shaping industries and driving business success.",
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  }
}

const allIndustries = [
  "All",
  "Agriculture",
  "Automotive",
  "Healthcare",
  "HRMS",
  "Life Sciences",
  "Manufacturing",
  "Pharma & Biotech",
  "Real Estate",
  "Retail",
  "Generic"
];
const allCategories = [
  "All",
  "Agentic AI",
  "Exelona",
  "Integration",
  "MediAIna",
  "Salesforce Agentforce",
  "Salesforce Consulting",
  "Salesforce Data Cloud",
  "SAP Ariba",
  "SAP BDC",
  "SAP Consulting",
  "SAP CPI",
  "SAP GTS",
  "SAP Joule",
  "SAP Signavio",
  "SAP SuccessFactors",
  "Managed Services",
  "Salesforce Automotive Cloud",
  "Rise with SAP",
  "Salesforce Marketing Cloud",
  "Grow with SAP",
  "Others"
];

const latestBlogs = [
      {      "id": 70,
            "image": "/images/blog/medical-diagnostic-imaging-analysis-multiple-screens-thumbnail.webp",
            "category": "Salesforce Life Sciences Cloud",
            "industry": " Life Sciences",
            "date": "Jan. 07, 2026",
            "url": "/crm-as-growth-engine-life-sciences/",
            "title": "Life Sciences CRM: Why Sales-Only Systems No Longer Work in Modern Healthcare",
            "alt": "Doctor analyzing patient diagnostics on multiple screens displaying brain scans, skeletal images, and real-time vital signs",
            "description": "For years, most life sciences organizations treated CRM as a sales enablement tool — a place to track accounts, schedule visits, manage samples, and record touchpoints. "
        },
  {
"id": 75,
    "image": "/images/blog/fragmented-customer-journeys-feature-thumb.webp",
    "category": "Salesforce Marketing Cloud",
    "industry": "Generic",
    "date": "Jan. 08, 2026",
    "url": "/fragmented-customer-journeys-salesforce-marketing-cloud/",
    "title": "What Are Fragmented Customer Journeys and Why Do They Matter?",
    "alt": "Hexagonal tiles with human icons on a blue background representing fragmented customer journeys",
    "description": "Personalized marketing has been the promise for over a decade. Yet despite better tools, more data, and smarter platforms, customer engagement continues to fall short. "
  },
  {
    "id": 69,
    "image": "/images/blog/voygernext/voyager-thumb.webp",
    "category": "Grow with SAP",
    "industry": "Generic",
    "date": "Jan. 06, 2026",
    "url": "/grow-with-sap-ai-ready-cloud-erp/",
    "title": "Grow with SAP: Your Fast-Track Ticket to an AI-First Tomorrow",
    "alt": "Grow with SAP AI-ready cloud ERP for an AI-first business future",
    "description": "According to McKinsey, more than 70 percent of organizations have already experimented with GenAI, and one in three expects AI to reshape core operations within the next three years."
  },
  {
    "id": 68,
    "image": "/images/blog/enterprise-growth-strategy-thumbnail.webp",
    "category": "Rise with SAP",
    "industry": "Generic",
    "date": "Jan. 05, 2026",
    "url": "/rise-with-sap-erp-transformation-strategy/",
    "title": "Why ERP Transformation Challenges Are Forcing Enterprises to Rethink Their Strategy",
    "alt": "Business leader on a path symbolizing enterprise growth and digital transformation",
    "description": "ERP modernization has been on boardroom agendas for years, yet success stories are still far fewer than expected. Leaders know transformation is necessary, but the path often turns bumpy."
  },
  {
    "id": 67,
    "image": "/images/blog/strategic-partnership-digital-connection-thumbnail.webp",
    "category": "SAP Consulting",
    "industry": "Generic",
    "date": "Dec. 29, 2025",
    "url": "/what-makes-sap-consulting-companies-trustworthy/",
    "title": "What Makes SAP Consulting Companies Trustworthy for Enterprise Engagements",
    "alt": "Two people shaking hands with glowing digital lines symbolizing partnership and collaboration.",
    "description": "Trust is the filter that determines who even makes it onto the shortlist. In enterprise SAP programs, credibility is not a soft factor. It directly impacts risk, governance, and long-term value.With this blog, we focus on how enterprises assess trust and credibility in SAP consulting companies during the pre-selection stage, before formal evaluation and contracting begin."
  },
  {
    "id": 66,
    "image": "/images/blog/business-growth-journey-thumbnail.webp",
    "category": "Salesforce Consulting",
    "industry": "Generic",
    "date": "Dec. 23, 2025",
    "url": "/salesforce-consulting-playbook-enterprise-growth/",
    "title": "Salesforce Consulting Playbook: Strategies to Drive Growth and Efficiency",
    "alt": "Abstract blue figure climbing geometric steps symbolizing business growth and strategic progress",
    "description": "Salesforce has established itself as the enterprise CRM of record. But for many companies, it still falls short of becoming a true growth engine. The gap rarely comes down to features. It comes down to strategy."
  },
  {
    "id": 65,
    "image": "/images/blog/salesforce-consulting-cluster-2.2_blog-thumb.webp",
    "category": "Salesforce Consulting",
    "industry": "Generic",
    "date": "Dec. 22, 2025",
    "url": "/salesforce-integration-partners-for-enterprises-to-scale/",
    "title": "Integration Partners for Salesforce: Cutting Complexity, Increasing ROI",
    "alt": "Cloud integration icon on a smartphone representing Salesforce integration and enterprise system connectivity.",
    "description": "Salesforce sits at the center of enterprise digital strategy for a reason. It connects revenue, customer experience, service operations, and data-driven decision-making on a single platform."
  },
  {
    "id": 64,
    "image": "/images/blog/cloud-computing-digital-storage-thumbnail.webp",
    "category": "Salesforce Consulting",
    "industry": "Generic",
    "date": "Dec. 18, 2025",
    "url": "/partner-salesforce-right-way-for-growth/",
    "title": "Partner Salesforce the Right Way: Creating Strategic Relationships That Deliver Measurable Growth",
    "alt": "Hand holding a smartphone with a glowing cloud icon representing cloud computing and data storage",
    "description": "When an enterprise chooses to partner with Salesforce, the goal isn’t just implementation. It’s a long-term transformation. Strong partnerships with the right Salesforce partner companies can simplify complex processes, integrate disconnected systems, and unlock the true potential of the platform across every team."
  },
  {
    "id": 63,
    "image": "/images/blog/electric-vehicle-charging-energy-thumb.webp",
    "category": "Salesforce Automotive Cloud",
    "industry": "Automotive",
    "date": "Dec. 11, 2025",
    "url": "/digital-twin-in-automotive-industry-salesforce-cloud/",
    "title": "Automotive Digital Twin: How OEMs, Dealers, and EV Brands Achieve Success with Salesforce Automotive Cloud",
    "alt": "Electric vehicle charging port with glowing energy streams representing power and clean technology",
    "description": "The automotive industry is undergoing its biggest shift in decades. As vehicles become more connected and software-driven, a company’s success is not dependent only on engineering and manufacturing. The real advantage now lies in how effectively OEMs, suppliers, and mobility providers utilize data."
  },
  {
    "id": 62,
    "image": "/images/blog/digital-data-stream-thumb.webp",
    "category": "Managed Services",
    "industry": "Generic",
    "date": "Dec. 05, 2025",
    "url": "/sap-managed-services-enterprise-ai-strategy/",
    "title": "SAP Managed Services: The Enterprise AI Strategy Behind Always-On SAP Success",
    "alt": "Colorful digital lines and light trails forming a fast-moving futuristic data stream.",
    "description": "The majority of organizations rely on SAP to run finance, supply chain, HR, manufacturing, procurement, and customer operations. But the truth is simple — implementing SAP is only the starting line. The real value lies in keeping systems optimized, innovating continuously, and aligning SAP capabilities with evolving business priorities."
  },
  {
    "id": 61,
    "image": "/images/blog/future-of-digital-healthcare-thumb.webp",
    "category": "MediAina",
    "industry": "Life Sciences",
    "date": "Dec. 04, 2025",
    "url": "/reimagining-clinical-trial-patient-journey/",
    "title": "From Fragmented Care to Intelligent Ecosystems: Reimagining the Patient Journey in Clinical Trials",
    "alt": "People walking in a digital network landscape with a futuristic smart capsule floating above.",
    "description": "Clinical trials are supposed to measure the impact of medicine, yet for many participants, the experience feels more like a marathon of logistics. There are multiple portals, disconnected care teams, repetitive forms, unclear next steps, and little visibility into progress, which makes participation feel like work instead of care."
  },
  {
    "id": 60,
    "image": "/images/blog/patient-consultation-genomics-thumb.webp",
    "category": "MediAina",
    "industry": "Life Sciences",
    "date": "Dec. 03, 2025",
    "url": "/why-patient-drop-out-clinical-trials-and-how-to-prevent-it/",
    "title": "Why Clinical Trial Dropouts Happen — And How Digital Engagement Prevents Them",
    "alt": "Nurse showing medical information to a patient with a headscarf beside a digital DNA graphic.",
    "description": "Every clinical trial begins with optimism. Researchers design protocols with precision, investigators prepare sites, and patients sign up with real hope for better outcomes. But somewhere along the journey, many participants quietly step away."
  },
  {
    id: 59,
    image: "/images/blog/salesforce-managed-services-salesforceagent-plus-feature-thumb.webp",
    category: "Managed Services ",
    industry: "Generic",
    date: "Dec. 02, 2025",
    alt: "Colorful fiber optic waves representing Salesforce managed services scaling revenue beyond CRM maintenance",
    url: '/scale-with-salesforce-managed-services-salesforceagentplus/',
    title: "Salesforce Managed Services: The Secret to Scaling Revenue, Not Just Maintaining CRM",
    description: "Most companies invest heavily in Salesforce, yet only a fraction unlock its real business value.",
  },
  {
    "id": 57,
    "image": "/images/blog/digital-data-interface-with-futuristic-touch-interaction-thumb.webp",
    "category": "SAP SuccessFactor",
    "industry": "HRMS",
    "date": "Nov. 27, 2025",
    "url": "/sap-successfactors-services-hr-transformation/",
    "title": "How SAP SuccessFactors Services Leverage Data & AI to Transform Modern HR",
    "alt": "Futuristic holographic data screens with code representing SAP SuccessFactors AI and data transforming modern HR",
    "description": "In 2025, a quiet revolution is transforming the way HR operates. The field of HR is evolving continuously. Expectations have changed, not in the sensational ways that make headlines each week, but through a more subtle, systemic shift."
  },
  {
    id: 58,
    image: "/images/blog/digital-medical-hologram-thumb.webp",
    category: "MediAIna",
    industry: "Life Sciences",
    date: "Nov. 25, 2025",
    alt: "Doctor interacting with holographic medical data and 3D health visuals in a futuristic digital lab",
    url: '/how-digital-innovation-transforms-clinical-trial-management/',
    title: "How Digital Innovation is Transforming Clinical Trial Management",
    description: "Clinical trials have always been the core of medical progress. But here’s the bitter truth: usual trials are often slow, expensive, and feel disconnected from the digital-first world in which patients now live",
  },
  {
    "id": 56,
    "image": "/images/blog/digital-touchscreen-technology-thumb.webp",
    "category": "MediAIna",
    "industry": "Life Sciences",
    "date": "Nov. 20, 2025",
    "url": "/ai-in-clinical-trials-rare-disease-enrolment/",
    "alt": "Person interacting with digital touchscreen interface displaying AI and futuristic technology elements",
    "title": "5 Proven Ways AI Accelerates Patient Enrolment in Rare Disease Clinical Trials",
    "description": "Clinical trials are the lifeblood of medical innovation, especially when it comes to rare diseases. Yet, one of the biggest hurdles in developing new therapies isn’t the science"
  },
  {
    id: 3,
    image: "/images/blog/digital-brain-ai-circuit-technology-illustration-thumb.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "Nov. 19, 2024",
    url: '/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce/',
    title: "The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce",
    alt: "Digital brain circuit illustration with glowing connections on dark blue tech background showing AI concept",
    description: "As businesses scale, the complexity of managing customer interactions multiplies, driving the need for more intelligent and streamlined support systems.  Salesforce Agentforce provides a robust platform for customer service automation, now enhanced by the groundbreaking Atlas Reasoning Engine.",
  },
  {
    id: 55,
    image: "/images/blog/digital-network-touch-data-connection-visualization-thumb.webp",
    category: "Integration",
    industry: "Generic",
    date: "Nov. 12, 2025",
    url: "/boost-enterprise-agility-with-sap-consulting-implementation-services/",
    title: "Boost Enterprise Agility with Tailored SAP Consulting and Implementation Services",
    alt: "Hand interacting with digital network nodes representing SAP-powered enterprise agility",
    description: "Today, adaptability defines survival; custom SAP development has become a core driver of enterprise agility and growth. "
  },
  {
    id: 54,
    image: "/images/blog/futuristic-data-analytics-visualization-thumb.webp",
    category: "SAP Consulting",
    industry: "Generic",
    date: "Nov. 11, 2025",
    url: "/sap-implementation-strategies-for-2026-success/",
    title: "Proven SAP Implementation Strategies that Minimize Risk and Accelerate ROI",
    alt: "Smart city illustration connected through cloud systems and unified SAP data architecture.",
    description: "We know that implementing SAP isn’t just about upgrading a system. It’s about reshaping how an enterprise operates,from finance and supply chain to HR and customer experience."
  },
  {
    id: 53,
    image: "/images/blog/digital-transformation-journey-ai-thumb.webp",
    category: "SAP Consulting",
    industry: "Generic",
    date: "Nov. 10, 2025",
    url: "/why-enterprises-choose-sap-consulting-partners/",
    title: "Why Leading Enterprises Choose Top SAP Consulting Partners for Growth and Innovation",
    alt: "Person walking through a digital pathway symbolizing an AI-driven transformation journey.",
    description: "Enterprises have been operating in a complex landscape with scattered data, legacy systems, siloed teams, and mounting customer expectations."
  },
  {
    id: 52,
    image: "/images/blog/exelona-cluster-blog-thumb.webp",
    category: "Exelona",
    industry: "Real Estate",
    date: "Nov. 04, 2025",
    url: "/what-does-a-single-source-of-truth-mean-for-real-estate/",
    title: "What Does a 'Single Source of Truth' Mean for Real Estate From Lead to Lease",
    alt: "Real estate analytics interface illustrating integrated data for a single source of truth",
    description: "In property management, it’s rarely the big things that slow teams down. It’s the countless small inefficiencies, mismatched lease data, duplicate records, or time wasted verifying spreadsheets. "
  },
  {
    id: 51,
    image: "/images/blog/crm-erp-convergence-for-real-estate-thumb.webp",
    category: "Exelona",
    industry: "Real Estate",
    date: "Nov. 03, 2025",
    url: "/erp-crm-convergence-real-estate-leaders-guide/",
    title: "CRM + ERP Convergence: How Real Estate Leaders Break System Silos and Cut Costs",
    alt: "Cloud dashboard showing AI-enabled real estate operations and integrated property systems",
    description: "Here’s something every property leader already knows but rarely says out loud: the technology stack that was meant to simplify operations has ended up complicating it."
  },
  {
    id: 50,
    image: "/images/blog/Exelona Cluster 2.2_blog thumb.webp",
    category: "Integration",
    industry: "Real Estate",
    date: "Oct. 31, 2025",
    url: "/smart-api-integrations-for-real-estate-2026/",
    title: "5 Essential API Integrations for Real Estate Firms to Accelerate Growth",
    alt: "Tech puzzle graphic showing key API integrations that support real estate digital growth",
    description: "Every real estate business hits a wall at some point, usually when its systems stop talking to each other. You’ve got a property management tool here, a finance system there, and a CRM somewhere else holding your lead data hostage. "
  },
  {
    "id": 49,
    "image": "/images/blog/Exelona Cluster 1.2_blog thumb.webp",
    "category": "Exelona",
    "industry": "Real Estate",
    "date": "Oct. 27, 2025",
    "url": "/tracking-service-level-agreements-without-losing-mind/",
    "title": "How Do You Track SLAs and Billing Without Losing Your Mind?",
    "alt": "AI dashboard tracking SLAs and automated billing to improve service accuracy and efficiency.",
    "description": " A service-level agreement (SLA) outlines the expected level of service from a vendor. It specifies the metrics used to measure that service and the remedies available if the agreed-upon service levels are not met."
  },
  {
    id: 48,
    image: "/images/blog/conversational-ai-in-real-estate-thumb.webp",
    category: "Exelona",
    industry: "Real Estate",
    date: "Oct. 20, 2025",
    url: "/conversational-ai-in-real-estate-scale-resident-support/",
    title: "Conversational AI in Real Estate: Scale Resident Support Without Adding Staff",
    alt: "AI chatbot interface supporting real estate teams with automated responses and tenant assistance",
    description: "Resident support in property management is getting harder to scale. Between maintenance requests, rent inquiries,"
  },
  {
    id: 47,
    image: "/images/blog/ai-property-operations-predictive-maintenance-thumb.webp",
    category: "Exelona",
    industry: "Real Estate",
    date: "Oct. 13, 2025",
    url: "/ai-in-real-estate-reduce-opex-with-predictive-maintenance/",
    title: "AI in Property Operations: Cut Downtime 30% and Reduce Opex with Predictive Maintenance",
    alt: "AI dashboard predicting equipment issues to reduce downtime in property operations",
    description: "Here’s the truth about property operations: they have always been a balancing act between cost, comfort, and continuity."
  },
  {
    id: 46,
    image: "/images/blog/Salesforce Consulting Cluster 1.1_blog thumb.webp",
    category: "Salesforce Consulting",
    industry: "Generic",
    date: "Oct. 10, 2025",
    url: "/how-top-salesforce-partners-help-enterprises-thrive-and-innovate/",
    title: "How Top Salesforce Partners Help Enterprises Thrive and Innovate",
    alt: "Salesforce cloud icons showing enterprise system connections for CRM optimization",
    description: "Salesforce has become the foundation for modern enterprise CRM solutions, helping organizations unify data, streamline processes, and deliver personalized customer experiences. "
  },
  {
    id: 45,
    image: "/images/blog/patient-experience-platform-mediAIna-transforming-long-term-care-thumb.webp",
    category: "MediAIna",
    industry: "Life Sciences",
    date: "Oct. 07, 2025",
    url: '/patient-experience-platform-transforming-long-term-care/',
    title: "How a Patient Experience Platform Transforms Care from Diagnosis to Long-Term Management",
    alt: "Salesforce cloud icons showing enterprise system connections for CRM optimization",
    description: "Providing healthcare has always been about more than just diagnosis. For patients, the real journey begins after they receive a diagnosis, navigating treatment options, managing chronic conditions, and learning how to live with ongoing care needs.",
  },
  {
    id: 44,
    image: "/images/blog/salesforce-consulting-cluster-thumb.webp",
    category: "Life Sciences",
    industry: "Generic",
    date: "Oct. 06, 2025",
    url: '/salesforce-development-services-to-boost-crm-efficiency/',
    title: "Boost Your CRM Efficiency with Tailored Salesforce Development Services",
    alt: "CRM dashboard with analytics and user metrics showcasing advanced Salesforce development",
    description: "Customer Relationship Management (CRM) is the beating heart of modern enterprises. It drives how sales teams close deals, how service teams respond to customers, and how marketing delivers personalized campaigns.",
  },
  {
    id: 43,
    image: "/images/blog/digital-patient-journeys-thumb.webp",
    category: "MediAIna",
    industry: "Life Sciences",
    date: "Sep. 30, 2025",
    url: '/digital-patient-journeys-ai-healthcare-life-sciences/',
    title: "The Future of Digital Patient Journeys: How AI is Reshaping Life Sciences",
    alt: "AI-enhanced patient journey flowchart showing diagnosis, therapy steps, and follow-up",
    description: "The healthcare industry is standing at a turning point. Patients no longer want fragmented experiences, waiting weeks for appointments, repeating their history at every touchpoint, or dealing with disconnected portals.",
  },
  {
    id: 42,
    image: "/images/blog/salesforce-implementation-partners-strategies-thumb.webp",
    category: "Salesforce Consulting",
    industry: "Generic",
    date: "Sep. 29, 2025",
    url: '/salesforce-implementation-partner-strategies-reduce-risk-maximize-roi/',
    title: "Seamless Salesforce Implementation: Partner Strategies That Reduce Risk & Maximize ROI",
    alt: "Team planning Salesforce rollout using digital tools and integration diagrams",
    description: "Salesforce is the world’s leading CRM platform, powering enterprises across industries to better manage customers, data, and processes.",
  },
  {
    id: 41,
    image: "/images/blog/connected-care-ecosystem-thumb.webp",
    category: "MediAIna",
    industry: "Life Sciences",
    date: "Sep. 18, 2025",
    url: '/connected-care-ecosystem-pharma-medtech/',
    title: "Why Connected Care Ecosystems Are the Next Big Bet for Pharma & MedTech",
    alt: "Network graphic linking providers, pharma, and MedTech systems in a connected care model",
    description: "The life sciences industry is at an inflection point. Pharma and MedTech organizations are no longer judged only by how well they innovate in labs or build medical devices.",
  },
  {
    id: 40,
    image: "/images/blog/ai-agents-in-manufacturing-thumb.webp",
    category: "Agentic AI",
    industry: "Manufacturing",
    date: "Sep. 17, 2025",
    url: '/implementing-ai-agents-in-manufacturing-operations/',
    title: "5 Signs You’re Ready to Implement AI Agents in Your Manufacturing Operations",
    alt: "Smart factory floor with robotic arms controlled by AI-driven automation systems",
    description: "Today, manufacturers are faced with a choice: continue adding incremental automation to existing systems or make a significant leap into AI-driven operations that are capable of learning, adapting, and taking action.",
  },
  {
    id: 39,
    image: "/images/blog/sap-industry-thumb.webp",
    category: "SAP Consulting",
    industry: "Manufacturing",
    date: "Sep. 16, 2025",
    url: '/sap-build-for-manufacturing-4-0/',
    title: "Accelerating Industry 4.0 with SAP Build: Low-Code Tools for Smarter Manufacturing",
    alt: "SAP dashboard showing low-code automation tools for modern manufacturing workflows",
    description: "Industry 4.0 has transformed factories into connected ecosystems where machines, people, and processes work in sync.",
  },
  {
    id: 38,
    image: "/images/blog/agentforce-ai-erp-thumb.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "Sep. 15, 2025",
    url: '/how-agentforce-ai-transforms-erp-systems/',
    title: "How Agentforce AI Transforms ERP Systems: Automation, Predictive Insights, and Scalability",
    alt: "Abstract AI face with sound waves and neural patterns showing intelligent listening capabilities",
    description: "Enterprise Resource Planning (ERP) systems are the backbone of many organizations, managing critical functions like finance, procurement, manufacturing, and supply chain operations.",
  },
  {
    id: 37,
    image: "/images/blog/data-cloud-ecom-thumb.webp",
    category: "Salesforce Data Cloud",
    industry: "Retail",
    date: "Sep. 12, 2025",
    url: '/ecommerce-in-salesforce-data-cloud-smarter-cx-driving-loyalty/',
    title: "Predictive Ecommerce in Salesforce: How Data Cloud Shapes Smarter Customer Experiences",
    alt: "Mobile view of a customer journey powered by Data Cloud with unified insights for smarter e-commerce",
    description: "Predictive analytics has always been crucial in helping businesses deliver personalized experiences.Salesforce Data Cloud empowers companies to leverage predictive analytics and data-driven insights to craft transformative e-commerce strategies.",
  },
  {
    id: 36,
    image: "/images/blog/ai-that-listens-thumbnail.webp",
    category: "Agentic AI",
    industry: "Generic",
    date: "Sep. 11, 2025",
    url: '/how-large-language-models-improve-customer-experience/',
    title: "AI That Listens, Learns, and Delivers: How Large Language Models Are Transforming Customer Experience",
    alt: "Abstract AI face with sound waves and neural patterns showing intelligent listening capabilities",
    description: "Great customer experience begins with great listening. But we are not just talking about hearing the words; it’s about understanding intent, emotion, context, and history.",
  },
  {
    id: 35,
    image: "/images/blog/ai-in-patient-thumb.webp",
    category: "Salesforce Agentforce",
    industry: "Healthcare",
    date: "Sep. 09, 2025",
    url: '/ai-patient-engagement-medtech-remote-care/',
    title: "AI in Patient Engagement: How AI Agents Support MedTech in Remote Monitoring",
    alt: "Remote health dashboard displaying patient vitals supported by AI for continuous monitoring",
    description: "Early detection of health deterioration is vital for patients with chronic conditions or those recovering from surgery.",
  },
  {
    id: 34,
    image: "/images/blog/how-agentforce-ai-predicts-thumb.webp",
    category: "Salesforce Agentforce",
    industry: "Manufacturing",
    date: "Sep. 08, 2025",
    url: '/how-agentforce-ai-predicts-prevents-downtime-in-manufacturing/',
    title: "How Agentforce AI Predicts and Prevents Downtime in Industry 4.0 Manufacturing",
    alt: "mart factory screen showing AI-driven analytics predicting equipment issues",
    description: "The promise of Industry 4.0 has been laid out: factories that can think, adapt, and optimize in real time.",
  },
  {
    id: 33,
    image: "/images/blog/first-ai-agent-thumbnail.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "Sep. 02, 2025",
    url: '/how-to-build-and-deploy-ai-agents-with-agentforce/',
    title: "How to Build and Deploy Your First AI Agent with Agentforce (Step-by-Step Guide)",
    alt: "Virtual workspace with digital AI agent managing tasks and workflow",
    description: "By 2028, 33% of enterprise software apps will utilize agentic AI. The transition from Predictive to Generative AI has accelerated, allowing businesses to move beyond simple forecasting to defining optimal actions. Despite ethical concerns, the value of training AI for growth is clear. Teaching AI to understand human language enhances its ability to respond and perform useful tasks.",
  },
  {
    id: 32,
    image: "/images/blog/byond-robotics-thumb.webp",
    category: "Agentic AI",
    industry: "Manufacturing",
    date: "Sep. 01, 2025",
    url: '/why-ai-agents-are-the-future-of-smart-manufacturing/',
    title: "Beyond Automation: Why AI Agents Power Smart Manufacturing",
    alt: "Smart factory line with robotic systems powered by digital twin technology",
    description: "Agentforce brings in autonomous agents that close the gap between production and experience. That means fewer silos, faster decisions, and smarter systems.",
  },
  {
    id: 30,
    image: "/images/blog/sap-cpi-thumb.webp",
    category: "SAP CPI",
    industry: "Generic",
    date: "Aug. 26, 2025",
    url: '/sap-pi-po-to-cpi-migration-complete-guide/',
    title: "SAP PI PO to SAP CPI Migration: A Complete Guide",
    alt: "SAP cloud integration flow connecting on-premise and cloud systems",
    description: "Enterprises can’t afford disconnected systems anymore; integration is the backbone of true digital transformation.For years, SAP Process Integration (PI) and Process Orchestration (PO) handled this role, connecting SAP and non-SAP landscapes.",
  },
  {
    id: 29,
    image: "/images/blog/big-reimage-slider.webp",
    category: "Agentic AI",
    industry: "Generic",
    date: "Aug. 25, 2025",
    url: '/reimagine-enterprise-using-agentic-ai-systems/',
    title: "Reimagine Enterprise Using Agentic AI Systems",
    alt: "Futuristic dashboard showing AI agents managing enterprise operations",
    description: "The way humans interact with AI is evolving. From isolated tools that do one thing well to intelligent agents that can plan trips, monitor logistics, assist the elderly, or manage inventory across global supply chains",
  },
  {
    id: 27,
    image: "/images/blog/small-slider.webp",
    category: "Salesforce Agentforce",
    industry: "Manufacturing",
    date: "Aug. 22, 2025",
    url: '/from-factory-to-feedback-how-agentforce-ai-elevates-customer-experience-in-manufacturing/',
    title: "From Factory to Feedback: How Agentforce AI Elevates Customer Experience in Manufacturing",
    alt: "Customer feedback loop displayed on smart factory command dashboard",
    description: "Manufacturers today operate in a pressure cooker. You’re dealing with fluctuating demand, global supply chain fragility, rising customer expectations, and shrinking margins. It's not just about making products anymore",
  },

  {
    id: 26,
    image: "/images/blog/sustain-thumb.webp",
    category: "Agentic AI",
    industry: "Generic",
    date: "Aug. 21, 2025",
    url: '/how-ai-is-powering-the-sustainable-future-of-our-planet/',
    title: "How AI Is Powering the Sustainable Future of Our Planet",
    alt: "Globe surrounded by AI and sustainability icons representing green innovation",
    description: "We must reduce greenhouse gas emissions and transition to renewable energy sources to protect our planet and future generations. However, the hope for a sustainable future lies in conservation and innovation. Here’s how.",
  },
  {
    id: 25,
    image: "/images/blog/Agentforce-featured-blog.webp",
    category: "Salesforce Agentforce",
    industry: "Automotive",
    date: "Jul. 29, 2025",
    url: '/how-agentforce-3-is-reshaping-automotive-manufacturing/',
    title: "How Agentforce 3.0 is Reshaping Automotive Manufacturing",
    alt: "Automotive factory using AI tools to enhance production and quality control",
    description: "Salesforce has launched Agentforce 3.0 — and it’s a significant leap forward. Agentforce has been a key part of Salesforce's AI strategy since its launch in September 2024.",
  },
  {
    id: 24,
    image: "/images/blog/blog-slider.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "Jul. 25, 2025",
    url: '/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters/',
    title: "Agents vs. Copilots vs. Bots: A Strategic Comparison That Drives AI Adoption Right",
    alt: "Comparison graphic showing differences between agents, copilots, and bots",
    description: "Tools like Agentforce are redefining how we view digital assistants, bringing distinctions between Agents, Copilots, and Bots to the forefront. The terms are frequently used within artificial intelligence-driven automation and conversational interfaces, each serving a distinct purpose.",
  },
  {
    id: 23,
    image: "/images/blog/slider.webp",
    category: "Salesforce Agentforce",
    industry: "Manufacturing",
    date: "Jul. 21, 2025",
    url: '/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions/',
    title: "Agentforce for Manufacturing: Exceed Customer Expectations with AI-Powered Salesforce Solutions",
    alt: "Manufacturing dashboard showing Salesforce AI tools improving customer experience",
    description: "We know that Artificial intelligence has transformed how we work, significantly boosting productivity by automating manual tasks and allowing teams to focus on high-value deliverables. With customer expectations soaring, they demand seamless, personalized experiences and instant support",
  },
  {
    id: 22,
    image: "/images/blog/agentexchange-Blog-thumb.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "Jul. 02, 2025",
    url: '/discover-agentexchange-your-trusted-marketplace-for-agentforce-success/',
    title: "Discover AgentExchange: Your Trusted Marketplace for Agentforce Success",
    alt: "Interface showing marketplace for Agentforce solutions and digital tools",
    description: "Salesforce has once again raised the bar in AI-driven business solutions with the launch of AgentExchange, ",
  },
  {
    id: 21,
    image: "/images/blog/Pharma Jewel of North India_blog thumb.webp",
    category: "Others",
    industry: "Pharma & Biotech",
    date: "Jul. 01, 2025",
    url: '/himachal-pradesh-the-pharma-jewel-of-north-india-with-the-largest-pharma-manufacturing-facilities/',
    title: "Himachal Pradesh: The Pharma Jewel of North India with the Largest Pharma Manufacturing Base",
    alt: "Pharmaceutical plant in Himachal Pradesh with large-scale automated facilities",
    description: "India has become a global force in pharmaceuticals. It delivers 20 percent of the world’s generic supplies, meets 40 percent of the US generic demand, and contributes 25 percent of all medicines used in the UK.",
  },
  {
    id: 20,
    image: "/images/blog/SAP Signavio_blog thumb.webp",
    category: "SAP Signavio",
    industry: "Generic",
    date: "Jun. 16, 2025",
    url: '/why-sap-signavio-is-critical-for-a-successful-s4hana-implementation/',
    title: "Why SAP Signavio is Critical for a Successful S/4HANA Implementation",
    alt: "SAP Signavio graphic representing digital transformation and process visibility",
    description: "Organizations are at a stage where they must modernize their ERP systems, streamline operations, and harness real-time insights. SAP S/4HANA has become the digital core for businesses aiming to achieve this transformation. ",
  },
  {
    id: 19,
    image: "/images/blog/agentic-pharma-thumb.webp",
    category: "Agentic AI",
    industry: "Pharma & Biotech",
    date: "May 30, 2025",
    url: '/agentic-pharma-the-ai-driven-era-of-the-pharmaceutical-industry/',
    title: "Agentic Pharma - The AI-driven era of the Pharmaceutical Industry",
    alt: "AI icons over pharmaceutical lab background showing digital transformation",
    description: "The pharmaceutical industry has long been a pioneer in adopting new technologies, from cutting-edge lab equipment to intelligent data management systems.",
  },

  {
    id: 18,
    image: "/images/blog/sap-ariba-thumb.webp",
    category: "SAP Ariba",
    industry: "Generic",
    date: "May 29, 2025",
    url: '/how-does-sap-ariba-streamline-direct-and-indirect-procurement-needs/',
    title: "How does SAP Ariba Streamline Direct and Indirect Procurement Needs?",
    alt: "AProcurement dashboard displaying SAP Ariba modules for sourcing and spend",
    description: "The term Procurement encompasses the entire process of acquiring goods or services, from identifying needs to supplying them"
  },
  {
    id: 17,
    image: "/images/blog/how-sap-successfactors-integrations-enhance-hr-and-payroll-operations-thumb.webp",
    category: "Integration",
    industry: "HRMS",
    date: "May 28, 2025",
    url: "/how-sap-successfactors-integrations-enhance-hr-and-payroll-operations/",
    title: "How SAP SuccessFactors Integrations Enhance HR and Payroll Operations",
    alt: "HR dashboard showing payroll data and employee metrics powered by SAP tools",
    description: "Are payroll challenges slowing you down? SAP SuccessFactors turns payroll management from a hassle into a streamlined process that boosts employee satisfaction."
  },
  {
    id: 16,
    image: "/images/blog/jthumb.webp",
    category: "SAP Joule",
    industry: "Generic",
    date: "Apr. 25, 2025",
    url: '/redefining-the-future-of-enterprise-ai-with-sap-joule/',
    title: "Redefining the Future of Enterprise AI with SAP Joule",
    alt: "SAP Joule interface displaying AI assistant features for enterprise workflows",
    description: "SAP’s generative AI copilot, Joule, designed to enhance organizational efficiency, collaboration, and analysis, marks a major step forward in intelligent automation within SAP systems. ",
  },
  {
    id: 15,
    image: "/images/blog/SAP Business cloud_Blog thumb.webp",
    category: "SAP BDC",
    industry: "Generic",
    date: "Apr. 22, 2025",
    url: '/sap-business-data-cloud-the-intelligent-data-foundation-for-ai-driven-business-success/',
    title: "SAP Business Data Cloud: The Intelligent Data Foundation for AI-Driven Business Success",
    alt: "Enterprise data cloud architecture enabling AI-driven analytics",
    description: "Businesses increasingly rely on real-time data to drive decisions, optimize operations, and unlock AI-powered insights.",
  },
  {
    id: 31,
    image: "/images/blog/sap-signavio-sap-cloud-thumb.webp",
    category: "SAP Signavio",
    industry: "Generic",
    date: "Mar. 25, 2025",
    url: '/s4hana-transformation-with-sap-signavio-cloud-alm/',
    title: "SAP Signavio + SAP Cloud ALM: Driving Governance, Traceability, and KPI Tracking in S/4HANA Transformations",
    alt: "SAP Signavio and Cloud ALM interface showing process tools for transformation",
    description: "Digital transformation programs such as an SAP S/4HANA implementation are not simply IT projects but complex business reinvention initiatives that touch every process, role, and technology in the enterprise. For such large-scale transformations, two critical success factors stand out:",
  },
  {
    id: 14,
    image: "/images/blog/blog-14.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "Feb. 03, 2025",
    url: '/salesforce-agentforce-top-features-youre-probably-not-using-but-should/',
    title: "Powerful Features of Agentforce You Should Be Using",
    alt: "Agentforce dashboard showing AI performance metrics for customer service",
    description: "Salesforce Agentforce features address CX gaps with intelligent routing, AI-led case resolution, and performance dashboards for better decisions.",
  },
  {
    id: 13,
    image: "/images/blog/blog-13.webp",
    category: "SAP SuccessFactors",
    industry: "HRMS",
    date: "Jan. 21, 2025",
    url: '/how-sap-successfactors-enhances-remote-work-management/',
    title: "How SAP SuccessFactors Enhances Remote Work Management",
    alt: "Remote work interface displaying HR tools for productivity and collaboration",
    description: "Remote work has rapidly transformed from a temporary solution to a need for many businesses worldwide. With businesses shifting towards remote work, operating a remote workforce can be challenging, particularly considering local dynamics and regulatory requirements.",
  },
  {
    id: 12,
    image: "/images/blog/how-agentforce-agents-scale-erp-systems-thumb.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "Jan. 13, 2025",
    url: '/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai/',
    title: "How Agentforce Agents Scale ERP Systems with AI",
    alt: "ERP dashboard enhanced with AI tools for resource planning and automation",
    description: "Enterprise Resource Planning (ERP) systems are the backbone of many organizations, managing critical functions like finance, procurement, manufacturing, and supply chain operations. However, these systems often operate in silos, limiting their potential to provide real-time insights and seamless collaboration across departments.",
  },
  {
    id: 11,
    image: "/images/blog/agents-as-teammates-carousel-img.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "Dec. 30, 2024",
    url: '/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce/',
    title: "Meet Your New Teammate: AI Agents in Slack with Agentforce 2.0",
    alt: "Slack interface with embedded AI agent assisting team workflows",
    description: "Agentforce agents do more than just gather data and insights—they provide fully customizable and independent AI functionalities that can link to any enterprise data and act on your behalf.",
  },
  {
    id: 10,
    image: "/images/blog/sap-successfactors-office-365-thumb.webp",
    category: "SAP SuccessFactors",
    industry: "HRMS",
    date: "Dec. 24, 2024",
    url: '/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration/',
    title: "How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration",
    alt: "Goal tracking dashboard from SAP SuccessFactors",
    description: "Seamless integration between enterprise applications offers improved collaboration, efficiency, and productivity. Integrating SAP SuccessFactors with Microsoft Office 365 combines the strengths of a leading human experience management (HXM) solution and a robust suite of productivity tools.",
  },
  {
    id: 9,
    image: "/images/blog/blog-10-long-thumb.webp",
    category: "SAP GTS",
    industry: "Generic",
    date: "Dec. 19, 2024",
    url: '/enhancing-compliance-the-importance-of-sanctioned-party-list-screening-in-sap-gts-for-third-party-transactions/',
    title: "Enhancing Compliance: The Importance of Sanctioned Party List Screening in SAP GTS for Third-Party Transactions",
    alt: "Compliance dashboard showing SAP GTS screening for global trade",
    description: "Maintaining compliance with international trade regulations is a must. Companies engaged in cross-border trade must ensure that their transactions comply with government-imposed sanctions and export control laws.",
  },
  {
    id: 8,
    image: "/images/blog/blog-4.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "Nov. 25, 2024",
    url: '/agentforce-testing-center-redefining-ai-testing-with-synthetic-data/',
    title: "Agentforce Testing Center: Redefining AI Testing with Synthetic Data",
    alt: "AI testing interface with synthetic data and automation tools",
    description: "Salesforce has introduced a new feature called Testing Center within its agentic AI platform, Agentforce. This addition allows enterprise users to test and monitor AI agents before deploying them in production.",
  },
  {
    id: 7,
    image: "/images/blog/blog-9.webp",
    category: "SAP SuccessFactors",
    industry: "HRMS",
    date: "Nov. 12, 2024",
    url: '/how-sap-successfactors-supports-diversity-equity-and-inclusion-initiatives/',
    title: "How SAP SuccessFactors Supports Diversity, Equity, and Inclusion Initiatives",
    alt: "HR dashboard showing diversity, equity, and inclusion insights",
    description: "Diversity, Equity, and Inclusion (DEI) are no longer optional components of a modern workplace; they are foundational pillars for innovation, employee engagement, and long-term organizational success.",
  },
  {
    id: 6,
    image: "/images/blog/blog-88.webp",
    category: "Integration",
    industry: "Healthcare",
    date: "Nov. 11, 2024",
    url: '/automate-crucial-parts-of-your-healthcare-organization-with-athenahealth-and-salesforce-integration/',
    title: "Automate Your Healthcare Organization with athenahealth and Salesforce Integration",
    alt: "Healthcare interface showing Salesforce and Athenahealth integration",
    description: "Historical evidence strongly indicates that a healthcare industry fragmented by disparate systems results in operational inefficiencies, duplicative work, patient safety issues, and rising costs to manage an increasingly complex healthcare market.",
  },
  {
    id: 5,
    image: "/images/blog/blog-7.webp",
    category: "SAP SuccessFactors",
    industry: "HRMS",
    date: "Oct. 29, 2024",
    url: '/sap-successfactors-performance-and-goal-management/',
    title: "SAP SuccessFactors Performance and Goal Management",
    alt: "HR dashboard for performance tracking and goal management",
    description: "Achieving your organization’s goals is a key responsibility your entire team shares. When your team’s strategy aligns with its goals and the broader organizational objectives, doing the right thing becomes instinctive.",
  },
  {
    id: 2,
    image: "/images/blog/blog-1.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "Sept. 30, 2024",
    url: '/how-salesforce-agentforce-actually-works/',
    title: "How Salesforce Agentforce Actually Works",
    alt: "Overview screen of Salesforce Agentforce platform",
    description: "Salesforce Agentforce, although a newer addition to the Salesforce ecosystem, is making rounds, particularly in organizations that deal with large teams of agents, such as sales agents, customer service representatives, and field service personnel.",
  },
  {
    id: 1,
    image: "/images/blog/blog-6.webp",
    category: "Others",
    industry: "Agriculture",
    date: "Sept. 17, 2024",
    url: '/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow/',
    title: "Agriculture 4.0. How Do Digital Technologies Transform Farming for a Better Tomorrow?",
    alt: "Agricultural field with digital sensors and cloud dashboard",
    description: "Agriculture plays a significant role in India’s growing economy and its future cannot be accomplished without digital tools and technological innovation.",
  },

];
const FeaturedCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "/images/blog/signavio-blog-feature-thumb.webp",
      category: "SAP Signavio",
      industry: "Generic",
      date: "Jun. 16, 2025",
      url: '/why-sap-signavio-is-critical-for-a-successful-s4hana-implementation/',
      title: "Why SAP Signavio is Critical for a Successful S/4HANA Implementation",
      alt: "SAP Signavio graphic representing digital transformation and process visibility",
      description: "Organizations are at a stage where they must modernize their ERP systems, streamline operations, and harness real-time insights. SAP S/4HANA has become the digital core for businesses aiming to achieve this transformation.",
    },
    {
      id: 2,
      image: "/images/blog/digital-patient-journeys-mobile.webp",
      category: "MediAIna",
      industry: "Life Sciences",
      date: "Sep. 30, 2025",
      url: '/digital-patient-journeys-ai-healthcare-life-sciences/',
      title: "The Future of Digital Patient Journeys: How AI is Reshaping Life Sciences",
      alt: "AI-enhanced patient journey flowchart showing diagnosis, therapy steps, and follow-up",
      description: "The healthcare industry is standing at a turning point. Patients no longer want fragmented experiences, waiting weeks for appointments, repeating their history at every touchpoint, or dealing with disconnected portals. They want personalized, continuous care that mirrors the convenience of other industries.",
    },
    {
      id: 3,
      image: "/images/blog/sap-signavio-sap-cloud-mobile.webp",
      category: "SAP",
      industry: "Generic",
      date: "March 25, 2025",
      url: '/s4hana-transformation-with-sap-signavio-cloud-alm/',
      title: "SAP Signavio + SAP Cloud ALM: Driving Governance, Traceability, and KPI Tracking in S/4HANA Transformations",
      alt: "SAP Signavio and Cloud ALM interface showing process tools for transformation",
      description: "Digital transformation programs such as an SAP S/4HANA implementation are not simply IT projects but complex business reinvention initiatives that touch every process, role, and technology in the enterprise. For such large-scale transformations, two critical success factors stand out.",
    },
    {
      id: 4,
      image: "/images/blog/conversational-ai-in-real-estate-mobile.webp",
      category: "Exelona",
      industry: "Real Estate",
      date: "Oct. 20, 2025",
      url: "/conversational-ai-in-real-estate-scale-resident-support/",
      title: "Conversational AI in Real Estate: Scale Resident Support Without Adding Staff",
      alt: "AI chatbot interface supporting real estate teams with automated responses and tenant assistance",
      description: "Resident support in property management is getting harder to scale. Between maintenance requests, rent inquiries, amenity bookings, and move-in/move-out coordination, teams often stretch themselves thin. The problem isn’t that property managers don’t care; resident expectations have changed."
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 150,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 575 },
      items: 1,
      centerMode: true,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
      centerMode: true,
    },
  };

  const ButtonGroup = ({ next, previous, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="flex carousel-button-group absolute top-0 lg:right-40 right-4 max-[360px]:right-[-15px] md:mt-4">
        <button aria-label="Previous slide" className={currentSlide === 0 ? 'disable bg-white p-2 mr-2 group transition-all duration-300' : 'bg-white p-0 mr-0 sm:p-2 sm:mr-2 group transition-all duration-300'} onClick={() => previous()}>
          <span className="sr-only">Previous slide</span>
          <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#707070" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#C3C3C3]">
            <path d="M3 7.5L11 0V15L3 7.5Z" fill="none" className="transition-all duration-300 group-hover:fill-[#C3C3C3] hover:fill-[#C3C3C3]" />
          </svg>
        </button>
        <button aria-label="Next slide" className="bg-white p-2 group transition-all duration-300" onClick={() => next()}>
          <span className="sr-only">Next slide</span>
          <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#707070" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#C3C3C3]">
            <path d="M12 7.5L4 0V15L12 7.5Z" fill="none" className="transition-all duration-300 group-hover:fill-[#C3C3C3]" />
          </svg>
        </button>
      </div>
    );
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
    return (
      <li>
        <div
          role="button"
          className={`w-3 h-1 md:px-8 px-4 mr-3 mb-4 ${active ? "bg-[#134874]" : "bg-[#D1D1D1]"}`}
          onClick={() => onClick()}
          aria-label="Custom Dots"

        />
      </li>
    );
  };

  return (
    <section className="relative pb-6 md:pb-10 bg-white">
      <div className="mb-[36px]">
        <div className="flex flex-row justify-between md:mr-24 mr-0">
          <h2 className="text-black mb-[36px] text-[26px] xl:text-[40px] 4xl:text-[60px] leading-tight ">Featured Blogs</h2>
        </div>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style !justify-start flex-wrap"
          itemClass="carousel-item-padding-40-px"
          partialVisible={true}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          renderDotsOutside={true}
          customDot={<CustomDot />}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="flex sm:flex-row flex-col md:mr-4 sm:mr-2 group items-stretch h-full">
              <div className="basis-full lg:h-[320px] xl:h-[420px] 2xl:h-[550px]">
                <Link href={'/insights/blogs' + slide.url}>

                  <ImageComponent
                    imgPath={slide.image}
                    alt={slide.alt}
                    title={slide.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority
                    classes="object-cover w-full h-full"
                  />
                </Link>
              </div>
              <div className="border-gray-300 border flex flex-col basis-full py-4 sm:py-4 md:py-6 xl:py-10 sm:px-10 md:px-12 xl:px-16 px-4 transition duration-300 ease-in-out group-hover:bg-[#F0F0F0] h-full">
                <div className='pb-[10px] sm:pb-[15px] lg:pb-[20px] 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'>
                  <span className='text-[#0092E0]'>{slide.category}</span> <span className='text-[#ACACAC]'>|</span> {slide.date}
                </div>
                <Link href={'/insights/blogs' + slide.url}><h3 className="pb-[10px] sm:pb-[15px] lg:pb-[20px] font-semibold sm:line-clamp-none  text-[18px] xl:text-[20px]  4xl:text-[30px] leading-tight ">{slide.title}</h3></Link>
                <p className="xl:line-clamp-none line-clamp-5 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight">{slide.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

const BlogCard = ({ blog }) => (
  <div className="border border-gray-300 hover:border-white w-full h-full flex flex-col group">
    <div className="h-[260px] 4xl:h-[300px] max-h-[300px]">
      <Link href={'/insights/blogs' + blog.url}>
        <ImageComponent
          imgPath={blog.image}
          alt={blog.alt}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          priority
          classes=""
        />
      </Link>
    </div>
    <div className="p-6 flex-grow flex flex-col transition duration-300 ease-in-out group-hover:bg-[#F0F0F0]">
      <div>
        <div className='pb-2 md:pb-4 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight'>
          <span className='text-[#0092E0]'>{blog.category}</span>
          <span className='text-[#ACACAC]'> | </span>
          <span className={`${blog.category.length > 21 && "block mt-1"}`}>{blog.date}</span>
        </div>
        <Link href={'/insights/blogs' + blog.url}><h4 className="mb-2 md:mb-4 font-semibold line-clamp-3 xl:line-clamp-4 4xl:text-[25px] xl:text-[20px] text-[18px] leading-tight">{blog.title}</h4></Link>
      </div>
      <div className="flex flex-col">
        <p className='line-clamp-4 md:mb-4 mb-2 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'>{blog.description}</p>
      </div>
    </div>
  </div>
);

const BlogList = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [showOptionsIndustry, setShowOptionsIndustry] = useState(false);
  const [showOptionsCategory, setShowOptionsCategory] = useState(false);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 6);
  };

  const toggleOptionsIndustry = () => {
    setShowOptionsIndustry(!showOptionsIndustry);
    setShowOptionsCategory(false);
  };

  const toggleOptionsCategory = () => {
    setShowOptionsCategory(!showOptionsCategory);
    setShowOptionsIndustry(false);
  };


  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const filterBlogsByIndustry = (industry) => {
    setSelectedIndustry(industry);
    setShowOptionsIndustry(false);
  };

  const filteredBlogs = selectedIndustry === 'All' ? latestBlogs : latestBlogs.filter(blog => blog.industry === selectedIndustry);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterBlogsByCategory = (category) => {
    setSelectedCategory(category);
    setShowOptionsCategory(false);
  };

  const filteredBlogsByCategory = selectedCategory === 'All' ? filteredBlogs : filteredBlogs.filter(blog => blog.category === selectedCategory);

  const isLoadMoreVisible = visibleBlogs < filteredBlogsByCategory.length;

  const industryRef = useRef(null);
  const categoryRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (industryRef.current && !industryRef.current.contains(event.target)) {
        setShowOptionsIndustry(false);
      }

      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowOptionsCategory(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" ">
      <div className="flex md:flex-row flex-col pb-4">
        <div className="flex flex-col md:pb-0 pb-4 justify-center">
          <h2 className="text-black 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight ">Latest Blogs</h2>
        </div>
        <div className="relative flex flex-row max-[320px]:flex-col md:ml-auto h-[60px] mt-4 max-[320px]:mb-12 max-[320px]:gap-2">
          <div className="relative" ref={industryRef}>
            <button className='relative border border-[#707070] sm:w-40 w-36 py-4 px-2 sm:mr-6 mr-2 text-l hover:bg-[#EDEDED] focus:bg-[#EDEDED]' onClick={toggleOptionsIndustry}>
              <span className="pr-5 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight">{selectedIndustry === 'All' ? 'Industry' : selectedIndustry}</span>
              <svg
                className='w-6 h-6 absolute right-2 top-1/2 transform -translate-y-1/2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
              </svg>
            </button>
            {showOptionsIndustry && (
              <div className='absolute bg-white border border-[#707070] w-[165px] md:w-[250px] sm:mr-4 mr-0 sm:right-0 right-2 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight'>
                <ul className="py-3">
                  {
                    allIndustries.map((data, ind) => (
                      <li className='cursor-pointer py-2 px-3' key={ind} onClick={() => filterBlogsByIndustry(data)}>{data}</li>
                    ))
                  }
                </ul>
              </div>
            )}
          </div>
          <div className="relative" ref={categoryRef}>
            <button className='relative border border-[#707070] py-4 px-6 w-fit text-l hover:bg-[#EDEDED] focus:bg-[#EDEDED]' onClick={toggleOptionsCategory}>
              <span className="pr-5 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight">{selectedCategory === 'All' ? 'Category' : selectedCategory}</span>
              <svg
                className='w-6 h-6 absolute right-2 top-1/2 transform -translate-y-1/2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
              </svg>
            </button>
            {showOptionsCategory && (
              <div className='absolute z-30 bg-white border border-[#707070] w-[200px] md:w-[250px] right-0 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight'>
                <ul className="py-3">
                  {
                    allCategories.map((data, ind) => (
                      <li className='py-2 px-3 cursor-pointer' key={ind} onClick={() => filterBlogsByCategory(data)}>{data}</li>
                    ))
                  }
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='w-full'>
        <p className='text-xl pt-4 4xl:pb-14  xl:pb-10 pb-8 4xl:text-[30px] xl:text-[22px] text-[20px]  leading-tight'>Search result by {selectedIndustry} industry / {selectedCategory} category</p>
      </div>

      {filteredBlogsByCategory.length === 0 ? (
        <p className='text-center text-xl py-4'>No Blogs Found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
          {filteredBlogsByCategory.slice(0, visibleBlogs).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}

      {isLoadMoreVisible && (
        <div className='flex justify-center text-center md:py-20 py-10'>
          <button
            type='button'
            className={`border border-[#707070] font-medium w-[180px] h-[50px] relative group hover:bg-[#EDEDED] ${visibleBlogs >= filteredBlogsByCategory.length ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
            onClick={loadMoreBlogs}
            disabled={visibleBlogs >= filteredBlogsByCategory.length}
          >
            <span className='group-hover:pr-8 transition-all duration-300 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight'>Load more</span>
            <svg
              className='w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};


export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black">

      <Seo
        title="Rialtes Blogs | Salesforce, SAP, AI, and Cloud Insights"
        description="Read expert blogs on Salesforce, SAP, cloud, and AI. Stay ahead with the latest innovation and digital transformation insights from Rialtes."
        canonical="https://www.rialtes.com/insights/blogs/"
      />
      <Script
        id="schema-blogs"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px]  ">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/blog-header-web.webp"
            alt="desktop banner"
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>


        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/blog/blog-header-mobile.webp"
            alt="mobile banner"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "35% 60%" }}
          />
        </div>

        <div className="relative h-full custom-container flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12 xl:col-span-7 lg:col-span-9">

              <h3 className="text-white text-[18px] md:text-[24px] font-bold">
                Blogs
              </h3>

              <h1 className="text-white text-[26px] xl:text-[40px] 4xl:text-[60px] leading-tight mt-[11.5px] md:mt-[28.5px]">
                Your Guide to<br /> Intelligent Enterprise <br />Transformation
              </h1>

            </div>

            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container">

        <div className="md:py-10 py-6 bg-white">
          <div className="">
            <p className="text-[#000000] py-6 sm:max-w-2xl 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight">Stay ahead in the digital transformation journey with expert insights from Rialtes. Our blog covers the latest trends, best practices, and innovations in SAP, Salesforce, AI, and enterprise technology.</p>
          </div>
        </div>
      </section>


      {/* Featured Section */}
      <div className="custom-container lg:pr-0">
        <FeaturedCarousel />
      </div>

      {/* Latest Blogs Section */}
      <div className="custom-container">
        <section className="py-16 bg-white">
          <BlogList />
        </section>
      </div>
    </div>
  );
}