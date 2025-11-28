"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Script from "next/script";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.rialtes.com/insights/case-studies/transforming-student-success-with-salesforce-education-cloud-and-eduplus/"
    },
    "headline": "Transforming Student Success with Salesforce Education Cloud and Edu+",
    "description": "This case study explores how a leading North American university improved enrollment, student engagement, and case management with Rialtes Edu+ powered by Salesforce Education Cloud, Agentforce, and Data Cloud.",
    "image": "https://www.rialtes.com/images/case-studies/Transforming-student-success.webp",
    "author": {
        "@type": "Organization",
        "name": "Rialtes"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rialtes",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.rialtes.com/images/homepage/logo.svg"
        }
    },
    "articleSection": "Case Studies",
    "datePublished": "2025-08-21"

}

const eduPlusFeatures = [
    {
        icon: "/images/case-studies/folder_13684196.svg",
        title: "Unified Student Profile",
        description: "One record across admissions, enrollment, advising, and alumni"
    },
    {
        icon: "/images/case-studies/computer_11981853.svg",
        title: "Teacher & Staff Profiles",
        description: "Dedicated profiles with class assignments, availability, and communication tools"
    },
    {
        icon: "/images/case-studies/artificial-intelligence_17092469.svg",
        title: "Class & Program Management",
        description: "Object models for Courses, Enrollments, Timetables, and Degree Paths"
    },
    {
        icon: "/images/case-studies/data-analytics_9948626.svg",
        title: "Predictive Enrollment Analytics",
        description: "Data Cloud insights for application trends, drop-off patterns, and yield forecasts"
    },
    {
        icon: "/images/case-studies/_x31_3.svg",
        title: "Automated Case Management",
        description: "Centralized portal for tracking student issues, support tickets, and resolution times"
    },
    {
        icon: "/images/case-studies/Layer 32 copy 11.svg",
        title: "Agentforce Integration",
        description: "AI assistant for 24/7 support, including FAQs, deadlines, course availability, etc."
    }
];

const quantitativeResults = [
    {
        value: '22%',
        description: 'Increase in application-to-enrollment conversion rate',
    },
    {
        value: '35%',
        description: 'Faster resolution of student support cases',
    },
    {
        value: '100%',
        description: 'Adoption of self-service portals for students and faculty',
    },
    {
        value: '20%',
        description: 'Improvement in academic advising engagement',
    },
    {
        value: '360°',
        description: 'Visibility into student journeys across academic lifecycle',
    },
];

export default function page() {
    const fullUrl = "https://www.rialtes.com/insights/case-studies/transforming-student-success-with-salesforce-education-cloud-and-eduplus"
    return (
        <div className="min-h-screen bg-white xl:mb-[80px] md:mb-[60px] mb-[40px]">
            <Seo
                title="Salesforce Education Cloud Case Study | Rialtes"
                description="See how Rialtes Edu+ on Salesforce Education Cloud boosted enrollment by 22% and improved student support with AI, automation, and connected experiences."
                canonical="https://www.rialtes.com/insights/case-studies/transforming-student-success-with-salesforce-education-cloud-and-eduplus/"
            />
            <Script
                id="schema-revolutionizing"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative h-[350px] md:h-[500px]  4xl:h-[650px]  overflow-hidden">
                <div className="hidden lg:block">
                    <Image
                        src="/images/case-studies/Transforming-student-success.webp"
                        alt="Graduation cap with gold tassel floating above white clouds with wooden ladder symbolizing educational achievement"
                        fill
                        style={{ objectFit: "cover", objectPosition: "50% 20%" }}
                        priority

                    />
                </div>
                <div className="block lg:hidden">
                    <Image
                        src="/images/case-studies/Feature Thumb.webp"
                        alt="Graduation cap with gold tassel floating above white clouds with wooden ladder symbolizing educational achievement Mobile"
                        fill
                        style={{ objectFit: "cover", objectPosition: "50% 20%" }}
                        priority

                    />
                </div>
            </section>


            <section
                className="custom-container">

                <div className="py-10 bg-white  4xl:w-[1130px] 2xl:w-[900px] xl:w-[800px]">
                    <div className="pt-4"></div>
                    <div>
                        <h1 className="text-[#000000] py-4  leading-tight  text-[26px] 4xl:text-[60px]  2xl:text-[48px]   xl:text-[42px] md:text-[28px] ">Transforming Student Success with Salesforce Education Cloud and Edu+</h1>
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row gap-4 justify-between items-center text-black pt-6">
                            <div className="">
                                <span className='text-[#0092E0] 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]'>Education</span> <span className='text-[#ACACAC]'> | </span>21 August 2025
                            </div>
                            <div className="flex flex-row gap-6  ml-[-8px]">
                                <div className="max-w-[40px]">
                                    <a
                                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            src="/images/case-studies/linkedin.svg"
                                            alt="LinkedIn"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            priority
                                        />
                                    </a>
                                </div>
                                <div className="max-w-[40px]">
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >                      <Image
                                            src="/images/case-studies/twitter.svg"
                                            alt="Twitter"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            priority
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="py-6"></div>
                    <div>
                        <div>
                            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Client Overview</h2>
                            <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">A leading private university in North America with over 25,000 students and multiple academic programs across undergraduate, graduate, and continuing education divisions. The institution was facing challenges in managing student engagement, enrollment tracking, case resolution, and providing a unified view of its academic ecosystem.</p>
                            <div className="py-6"></div>

                            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Challenge</h2>

                            <h3 className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-bold leading-tight text-black pb-4" >Disconnected Student Experience & Manual Operations</h3>
                            <p className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] pb-4">The university operated with siloed systems for admissions, student services, academic advising, and alumni engagement. Key challenges included:</p>
                            <ul className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] marker:text-black list-disc text-black font-medium pb-4 pl-6">
                                <li className="pb-4">Lack of a unified student profile and centralized engagement history</li>
                                <li className="pb-4">Manual enrollment workflows with limited real-time visibility </li>
                                <li className="pb-4">Inconsistent case management for student services and academic advising </li>
                                <li> Inability to track student-teacher-class relationships in a scalable manner </li>
                            </ul>
                            <p className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]" >The leadership needed a robust digital platform to improve enrollment processes, student engagement, and case handling across the academic lifecycle.</p>

                            <div className="py-6"></div>
                            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Solution</h2>

                            <h3 className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-bold leading-tight text-black pb-4" >Rialtes Edu+ Implementation on Salesforce Education Cloud</h3>

                            <p className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] pb-6">Rialtes, leveraging its industry-specialized service Edu+, implemented Salesforce Education Cloud integrated with Agentforce (AI-based assistant) and Salesforce Data Cloud for real-time analytics and 360° student insights.</p>

                            <h3 className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-bold leading-tight text-black pb-4">Implementation Highlights:</h3>

                            <ul className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] marker:text-black list-disc text-black font-medium pb-4 pl-5 xl:pr-[10rem]">
                                <li className="pb-4">Salesforce Education Cloud with core objects like Students, Teachers, Advisors, Classes, Courses, and Cases</li>
                                <li className="pb-4">Agentforce AI Assistant to manage FAQs, enrollment queries, and support interactions through a conversational interface</li>
                                <li className="pb-4">Salesforce Data Cloud integration to unify data across SIS, LMS, email, and admissions platforms for predictive engagement</li>
                                <li className="pb-4">Custom advising workflows and case management automation for academic support and student life </li>
                                <li>Personalized dashboards and journey maps for every student, teacher, and program</li>
                            </ul>
                            <div className="py-6"></div>
                            <h3 className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-bold leading-tight text-black pb-4">Key Features Delivered with Edu+</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-8">
                                {eduPlusFeatures.map((feature, index) => (
                                    <div key={index} className="flex flex-col items-start">
                                        <div className="w-[58px] h-[40px] mb-4">
                                            <Image
                                                src={feature.icon}
                                                alt={feature.title}
                                                width={48}
                                                height={48}
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="4xl:pr-20 2xl:pr-10 xl:pr-4 pt-2">
                                            <h3 className="font-bold text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] mb-2">{feature.title}</h3>
                                            <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <div className="xl:py-12 py-8"></div>
                            <h3 className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-bold leading-tight text-black pb-4">Outcomes & Business Impact</h3>

                            <p className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] ">After going live with Salesforce Education Cloud powered by Edu+, the university saw measurable improvements within the first two academic terms:</p>


                        </div>
                    </div>
                </div>
                <section className="w-full flex justify-center  ">
                    <div className="w-full max-w-[1500px] flex flex-col lg:flex-row">


                        <div className="4xl:w-[60%] 2xl:w-[58%] xl:w-[57%] pr-4 lg:pr-6 pb-10 lg:pb-0">
                            <h2 className="font-bold text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] pb-6">Quantitative Results</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {quantitativeResults.map((item, index) => (
                                    <div key={index} className="md:col-span-1">
                                        <span className="4xl:text-[40px] 2xl:text-[34px] xl:text-[30px] text-[30px] font-bold text-[#0C8AED]">
                                            {item.value}
                                        </span>
                                        <p className="text-black 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>


                        <div className="4xl:w-[35%] 2xl:w-[33%] xl:w-[32%] lg:pl-6 lg:border-l border-gray-500">
                            <h3 className="text-black font-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] pb-6">Qualitative Benefits</h3>
                            <ul className="list-disc pl-5 text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] space-y-4 font-medium ">
                                <li>Empowered students with personalized experiences and proactive guidance</li>
                                <li>Reduced administrative overhead for admissions and student affairs teams</li>
                                <li>Enabled real-time collaboration across academic departments</li>
                                <li>Provided leadership with actionable insights for enrollment strategy and student retention</li>
                            </ul>
                        </div>

                    </div>
                </section>
                <div className="xl:py-10 py-6"></div>
                <div className=" 4xl:w-[1130px] 2xl:w-[900px] xl:w-[800px]">
                    <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">About Edu+ by Rialtes</h2>
                    <p className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] pb-4">Edu+ is Rialtes’ dedicated consulting and implementation framework tailored for educational institutions. It brings together Salesforce Education Cloud, AI/automation (Agentforce), and data integration (Data Cloud) to deliver:</p>
                    <ul className="list-disc pl-5 text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] space-y-4 font-medium">
                        <li>Faster time to value</li>
                        <li>Industry-aligned object models and workflows</li>
                        <li>Scalable, future-ready digital campuses</li>

                    </ul>
                </div>
                <div className="py-6"></div>

            </section>
        </div>
    )
}