
"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform"
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "../../components/learnMore";

const schemaData={
    
  "@context": "https://schema.org",
  "@type": "WebPage",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/industry/education-cloud-it-solutions/"
  },
  "name": "Rialtes | Salesforce & SAP for Modern Education Ecosystems",
  "headline": "Smart Solutions for Connected Education & EdTech",
  "description": "Discover how Rialtes enables connected, data-driven learning experiences for K-12, higher ed, and EdTech firms through scalable Salesforce and SAP solutions.",
  "about": {
    "@type": "Thing",
    "name": "Connected Education and EdTech Industry"
  },
  "keywords": "Salesforce for education, Salesforce education cloud consulting, SAP for higher education, EdTech solutions, student lifecycle management, digital learning platforms, Rialtes consulting",
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "url": "https://www.rialtes.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  }

}

const Services2 = () => {
    return (
        <div className="mx-auto text-black">
            <h2 className="text-black mb-6 xl:text-[60px] text-[26px] leading-tight">Rialtes’ Pre-Delivered Accelerators:</h2>
            <h3 className="xl:text-[42px] text-[22px] xl:font-bold font-medium mt-5 pr-20 xl:pr-0">Fast-Tracking Education Success</h3>
            <p className="mt-5 xl:text-[22px] text-[16px] w-full pr-12 xl:pr-0 font-light leading-tight">Our proprietary accelerators for the education sector are designed to simplify and optimize student lifecycle management:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8 mt-10">
                {latestServices2.map((services) => (
                    <ServicesCard key={services.id} services={services} />
                ))}
            </div>
            <LearnMore />
        </div>
    );
};

const ServicesCard = ({ services }) => (
    <div className="w-full h-full flex flex-col border border-[#707070] p-12 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
        <div className="flex-grow flex flex-col">
            <h3 className="mb-[15px] md:mb-[25px] xl:text-[24px] text-[20px] font-semibold leading-tight">{services.title}</h3>
            <p className='md:mb-[15px] mb-0 xl:text-[20px] text-[16px] leading-tight font-light'>{services.description}</p>

        </div>
    </div>
);
const latestServices2 = [
    {
        id: 1,
        title: "Student Engagement Management Bolt-On",
        description: "Enhances Salesforce Education Cloud to deliver seamless student lifecycle management, including admissions, case management, and alumni engagement.",
    },
    {
        id: 2,
        title: "Enrollment and Academic Progress Tracker",
        description: "Integrated solution for student onboarding, course enrollment, and academic progress monitoring connected with SAP backend for finance and operations.",
    },
    {
        id: 3,
        title: "Family and Guardian Mapping Framework",
        description: "Builds a comprehensive student family tree, enabling institutions to engage students, parents, guardians, and sponsors effectively.",
    },

];
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Salesforce Cloud IT Solutions for Education Industry | Rialtes"
                description="IT solutions for education using AI and Salesforce Cloud empower K–12 to higher ed to transform learning. Explore smarter outcomes with Rialtes today."
                canonical="https://www.rialtes.com/industry/education-cloud-it-solutions/"
            />
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

            <section className="relative group overflow-hidden xl:pb-40 pb-10">
                <div className="xl:block hidden">
                    <Image
                        src="/images/education/Education banner.webp"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/education/Group 483.webp"
                        alt=""
                        fill
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                        sizes="100vw"
                    />
                </div>

                <div
                    className="
         h-full relative
        custom-container"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1  xl:mt-20 mt-[9rem]">
                        <div className="xl:col-span-7 col-span-12">
                            <h3 className="text-white xl:text-[24px] text-[18px] font-bold mb-2 mt-10">Education Industry</h3>
                            <h1 className="text-white leading-tight xl:pr-20 xl:mt-10">
                                Empowering the Future of Education
                            </h1>
                            <h3 className="xl:text-[45px] xl:mt-10 mt-5 text-white font-bold text-[18px] leading-tight">Rialtes’ End-to-End Solutions for Student Success</h3>

                        </div>
                        <div className="xl:col-span-5 col-span-12">
                        </div>
                    </div>

                </div>
            </section>




            <section
                className="xl:mt-16 mt-8
             custom-container"
            >

                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-11 col-span-12">
                        <h2 className="text-[26px] xl:text-[60px]  mt-5 leading-tight">
                            Transforming Education with Technology-Driven Student Experiences
                        </h2>
                        <p className="xl:text-[22px] text-[16px] mt-10 xl:pr-32 pr-10 leading-tight">Education today is evolving at a rapid pace. Institutions must engage digitally native students, streamline enrollment and academic processes, and foster lifelong relationships with learners. From K-12 to higher education, organizations face challenges in managing fragmented student journeys, disjointed academic operations, and evolving stakeholder expectations.</p>
                        <p className="xl:text-[22px] text-[16px] mt-5 xl:pr-32 pr-10 leading-tight"> Rialtes delivers holistic education solutions—covering strategic advisory, seamless implementations, process optimization, and long-term support.</p>
                    </div>
                    <div className="xl:col-span-1 col-span-12">
                    </div>
                </div>


            </section>
            <section className="relative  xl:mt-20 mt-16 pb-20">
                <div></div>
                <div className="xl:block hidden">
                    <Image
                        src="/images/education/TL.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/education/AdobeStock_612317773.webp"
                        alt=""
                        priority
                        sizes="100vw"
                        className="h-[343px] w-full"
                        width={0}
                        height={0}
                    />
                </div>
                <div
                    className="relative xl:mt-16 mt-8
              custom-container"
                >
                    <div className="xl:pt-16 ">
                        <h2 className="xl:text-[60px] text-[26px]">Thought Leadership:</h2>
                        <h3 className="xl:text-[42px] mt-5 xl:font-bold font-medium text-[22px]">Solving Education’s Most Pressing Challenges</h3>

                    </div>

                    <div className="grid xl:grid-cols-12 grid-cols-1  xl:pt-10 pt-5">

                        <div className="xl:col-span-5 col-span-12">
                            <h3 className="xl:text-[26px] text-[20px] font-bold">Key Industry Challenges We Address:</h3>

                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-5 mt-3 pr-12">
                                <li>Fragmented student engagement and communication channels.</li>
                                <li>Complex and inefficient recruitment and admissions processes.</li>
                                <li>Disconnected case management for student services and support.</li>
                                <li>Lack of 360-degree student insights across academic, financial, and social dimensions.</li>
                                <li>Difficulty in personalizing outreach to prospective and current students.</li>
                                <li>Inefficient alumni and donor relationship management.</li>

                            </ul>
                        </div>

                        <div className="xl:col-span-5 col-span-12  bg-[#0A69B7] absolute xl:left-[44%] left-0 top-[40rem] md:left-[30px] md:top-[26rem] xl:top-[22rem] text-white p-10 pb-12  xl:w-[500px]">
                            <h3 className="xl:text-[26px] font-bold">Rialtes’ Approach:</h3>

                            <ul className="list-disc xl:space-y-5  space-y-3  marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5">
                                <li>Strategic advisory for educational digital transformation.</li>
                                <li>Process redesign and technology enablement with SAP and Salesforce.</li>
                                <li>Pre-built accelerators for student engagement, recruitment, and retention.</li>
                                <li>Agile, scalable implementations aligned with industry best practices.</li>
                                <li> Continuous optimization through robust QA and post-go-live support.</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div
                className="xl:mt-40 mt-[28rem]
       custom-container xl:!pr-[142px]"
            >
                <section className="pb-16 bg-white">
                    <Services2 />
                </section>
            </div>



            <section className="relative group overflow-hidden h-auto xl:h-[1620px]  xl:mt-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/education/student journey.webp"
                        alt="GROW with SAP"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/education/Group 484.webp"
                        alt="GROW with SAP"
                        fill
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                        sizes="100vw"
                    />
                </div>
                <div
                    className="
        h-full relative
       custom-container"
                >
                    <div className="flex">
                        <div className="relative xl:w-[1014px] xl:h-[1621px] pb-16 xl:pb-0">
                            <div className="absolute xl:inset-0 bg-[#016FBE] mix-blend-multiply opacity-[0.9]"></div>
                            <div className="relative bg-opacity-80 text-white z-10   rounded-lg">
                                <div className="p-8 pt-16  xl:pr-0 xl:pl-20">
                                    <h2 className="leading-tight xl:pr-20">The Complete Student Journey</h2>
                                    <h3 className="xl:text-[42px] text-[22px] xl:font-bold font-medium mt-10 leading-tight xl:pr-40 pr-20">From First Inquiry to Graduation and Beyond</h3>
                                </div>
                                <div>
                                    <div className=" flex items-center xl:gap-5 gap-3">
                                        <h3 className="xl:border-white-education"></h3>
                                        <h3 className="xl:text-[35px] text-[20px] font-bold pr-20 xl:pr-0">Recruitment and Enrollment Journey</h3>
                                    </div>
                                </div>

                                <div className="xl:pl-20 pl-[35px]  xl:pr-0 xl:pt-10 pt-5">
                                    <h3 className="xl:text-[30px] text-[18px] xl:font-bold font-medium">Student Lead Management and Engagement</h3>

                                    <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-5 mt-3 xl:pr-64 pr-20 font-light">
                                        <li>Capture student leads from multiple channels (web, social, email, recruitment events) using Salesforce Education Cloud.</li>
                                        <li>Intelligent lead nurturing with Salesforce Marketing Cloud, leveraging personalized journeys based on interests and backgrounds.</li>
                                        <li>AI-based lead scoring and matching to recommend suitable programs and scholarships.</li>

                                    </ul>
                                </div>

                                <div className="xl:pl-20 pl-[35px] pt-10">
                                    <h3 className="xl:text-[30px] text-[18px] font-bold">Selection and Admissions</h3>

                                    <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 xl:pr-64 pr-20">
                                        <li>Seamless application management with real-time status updates.</li>
                                        <li>Automated document collection and verification workflows.</li>
                                        <li>Selection committee collaboration portals for holistic application reviews.</li>
                                        <li>Integrated offer and acceptance workflows with e-signatures.</li>

                                    </ul>
                                </div>

                                <div className=" flex items-center xl:gap-5 gap-3 mt-10">
                                    <h3 className="xl:border-white-education"></h3>
                                    <h3 className="xl:text-[35px] text-[20px] font-bold">Student Family Mapping and Engagement</h3>
                                </div>
                                <div className="xl:pl-20 pl-[35px] pt-5">

                                    <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-5 xl:pr-64 pr-20">
                                        <li>Create a comprehensive family and guardian chart to manage multi-student relationships.</li>
                                        <li>Track alumni family connections for targeted donor campaigns and legacy admissions.</li>
                                        <li>Map sponsorship and scholarship relationships for financial aid management.</li>

                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>



            <section className="relative xl:mt-16">
                <div className="grid xl:grid-cols-2 grid-cols-1 items-start relative z-10 gap-10">
                    <div className="relative z-10">
                        <div className="custom-container xl:!pr-12 xl:top-[3rem] top-[5rem] relative">
                            <div className="relative group overflow-hidden">
                                <Image
                                    src="/images/education/marketing.webp"
                                    alt=""
                                    priority
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="100vw"
                                    width={0}
                                    height={0}
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="bg-[#C4EBEA] custom-container w-full xl:pr-20 xl:pb-20 pb-10 pt-[8rem] xl:pt-[5rem]">
                            <h2 className="text-[28px] xl:text-[47px] font-medium leading-tight">
                                Hyper-Personalized Student Engagement with Salesforce Marketing Cloud
                            </h2>
                            <ul className="list-disc mt-5 pl-5 space-y-4 text-[16px] xl:text-[20px] font-medium leading-tight marker:font-bold marker:text-2xl">
                                <li>AI-powered segmentation to target prospects by program interests, geography, demographics.</li>
                                <li>Personalized student journeys for pre-admission, onboarding, academic advising, and alumni engagement.</li>
                                <li>Behavioral triggers for scholarship offers, deadlines, and personalized content delivery.</li>
                                <li>Event management and RSVP tracking for open houses, campus tours, and recruitment fairs.</li>
                            </ul>
                            <div className="mt-5">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10">
                        <div className="custom-container xl:pl-16  xl:mt-[20rem]">
                            <div className="relative group overflow-hidden">
                                <Image
                                    src="/images/education/service cloud.webp"
                                    alt=""
                                    priority
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="100vw"
                                    width={0}
                                    height={0}
                                />
                            </div>
                        </div>

                        <div className="bg-[#F7E2D4] w-full xl:pb-20 pb-10 pt-[6rem] xl:!pl-16 mt-[-3rem]  custom-container">
                            <h2 className="text-[28px] xl:text-[47px] font-medium leading-tight">
                                Lifelong Student Support with Salesforce Service Cloud
                            </h2>
                            <ul className="list-disc mt-5 pl-5 space-y-4 text-[16px] xl:text-[20px] font-medium leading-tight marker:font-bold marker:text-2xl">
                                <li>End-to-end student case management for academic, financial, and wellness support.</li>
                                <li>AI-assisted case deflection and chatbots for common queries (admission status, course selection, fee details).</li>
                                <li>Proactive student success and retention programs, powered by early alert systems and predictive analytics.</li>
                                <li>Integration with career services for internships, placements, and alumni mentorship.</li>
                            </ul>
                            <div className="mt-5">
                                <LearnMore />
                            </div>
                        </div>
                    </div>

                </div>
            </section>




            <section className="relative xl:mt-0 mt-[3rem]">
                <div className="grid xl:grid-cols-2 grid-cols-1 items-start relative z-10 gap-10">
                    <div className="relative z-10">
                        <div className="custom-container xl:!pr-12">
                            <div className="relative group overflow-hidden">
                                <Image
                                    src="/images/education/experience cloud.webp"
                                    alt=""
                                    priority
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="100vw"
                                    width={0}
                                    height={0}
                                />
                            </div>
                        </div>

                        <div className="bg-[#D6CFCF] custom-container w-full xl:pr-12 xl:pb-20 pb-10 pt-[5rem] -mt-14">
                            <h2 className="xl:text-[47px] text-[28px] font-medium leading-tight">
                                Self-Service Portals for Students and Faculty
                            </h2>
                            <h3 className="mt-10 font-bold xl:text-[40px] text-[22px] pr-20 xl:pr-0">
                                Salesforce Experience Cloud
                            </h3>
                            <ul className="list-disc mt-5 pl-5 space-y-4 text-[16px] xl:text-[20px] font-medium leading-tight marker:font-bold marker:text-2xl">
                                <li>Personalized portals for application tracking, document submissions, fee payments, and course registration.</li>
                                <li>Faculty portals for advising, mentoring, and grading.</li>
                                <li>External communication management for parents, sponsors, and alumni.</li>
                                <li>Embedded communication channels (chat, messaging, email) for real-time engagement.</li>
                            </ul>
                            <div className="mt-5">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10">
                        <div className="custom-container xl:pl-16 xl:mt-[14rem]">
                            <div className="relative group overflow-hidden">
                                <Image
                                    src="/images/education/s4hana.webp"
                                    alt=""
                                    priority
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="100vw"
                                    width={0}
                                    height={0}
                                />
                            </div>
                        </div>
                        <div className="bg-[#E8DFC7] w-full xl:pb-20 pb-10 pt-[6rem] xl:!pl-16 mt-[-3rem] custom-container">
                            <h2 className="xl:text-[47px] text-[28px] font-medium leading-tight pr-10">
                                Seamless Enrollment, Fee, and Resource Management
                            </h2>
                            <h3 className="mt-10 font-bold xl:text-[40px] text-[22px]">
                                SAP S/4HANA + Rialtes
                            </h3>
                            <ul className="list-disc mt-5 pl-5 space-y-4 text-[16px] xl:text-[20px] font-medium leading-tight marker:font-bold marker:text-2xl">
                                <li>Fully integrated student information and ERP system for enrollment, finance, and resource management.</li>
                                <li>Real-time visibility into fee status, financial aid, and scholarships.</li>
                                <li>SAP-backed course scheduling, faculty assignment, and resource allocation.</li>
                                <li>Procurement and supplier collaboration via SAP ARIBA for campus infrastructure needs.</li>
                            </ul>
                            <div className="mt-5">
                                <LearnMore />
                            </div>
                        </div>
                    </div>

                </div>
            </section>




            <section className="relative xl:mt-0 mt-[3rem]">
                <div className="grid xl:grid-cols-2 grid-cols-1 items-start relative z-10 gap-10">
                    <div className="relative z-10">
                        <div className="custom-container xl:!pr-12">
                            <div className="relative group overflow-hidden">
                                <Image
                                    src="/images/education/revenue cloud.webp"
                                    alt=""
                                    priority
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="100vw"
                                    width={0}
                                    height={0}
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="bg-[#F1D8D9] custom-container w-full xl:pr-20 xl:pb-20 pb-10 pt-[6rem] xl:pt-[6rem] -mt-16">
                            <h2 className="xl:text-[47px] text-[28px] font-medium leading-tight">
                                Dynamic Program and Course Pricing
                            </h2>
                            <h3 className="xl:mt-10 mt-5 font-bold xl:text-[40px] text-[22px]">
                                Salesforce Revenue Cloud
                            </h3>
                            <ul className="list-disc mt-5 pl-5 space-y-4 text-[16px] xl:text-[20px] font-medium leading-tight marker:font-bold marker:text-2xl">
                                <li>Program and tuition fee configuration based on course, campus, residency status, and scholarship eligibility.</li>
                                <li>Manage installment plans, discounts, and refunds.</li>
                                <li>End-to-end quote-to-enrollment processes for executive education and certificate programs.</li>
                                <li>Integrate with SAP for billing, AR, and finance operations.</li>
                            </ul>
                            <div className="mt-5">
                                <LearnMore />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="relative z-10">
                        <div className="custom-container xl:pl-16  xl:mt-[14rem]">
                            <div className="relative group overflow-hidden">
                                <Image
                                    src="/images/education/data cloud.webp"
                                    alt=""
                                    priority
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="100vw"
                                    width={0}
                                    height={0}
                                />
                            </div>
                        </div>

                        <div className="bg-[#C7E8E9] w-full xl:pb-20 pb-10 pt-[6rem] xl:!pl-16 mt-[-3rem] custom-container">
                            <h2 className="xl:text-[47px] text-[28px] font-medium pr-32 leading-tight">
                                Unified Data and Insights
                            </h2>
                            <h3 className="xl:mt-10 mt-5 font-bold xl:text-[40px] text-[22px]">
                                Salesforce Data Cloud for Education
                            </h3>
                            <ul className="list-disc mt-5 pl-5 space-y-4 text-[16px] xl:text-[20px] font-medium leading-tight marker:font-bold marker:text-2xl">
                                <li>A 360-degree view of every student: academic progress, financial aid, career services, and engagement.</li>
                                <li>Advanced analytics and AI models for predicting at-risk students and enhancing retention.</li>
                                <li>Real-time data synchronization with SAP S/4HANA, LMS, CRM, and student success platforms.</li>
                                <li>Donor and alumni relationship management for advancement and fundraising.</li>
                            </ul>
                            <div className="mt-5">
                                <LearnMore />
                            </div>
                        </div>
                    </div>

                </div>
            </section>




            <section className="relative xl:mt-0 mt-[3rem]">
                <div className="grid xl:grid-cols-2 grid-cols-1 items-start relative z-10 gap-10">
                    <div className="relative z-10">
                        <div className="custom-container xl:!pr-12">
                            <div className="relative group overflow-hidden">
                                <Image
                                    src="/images/education/eduction agentforce.webp"
                                    alt="Agentforce for Education"
                                    priority
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="100vw"
                                    width={0}
                                    height={0}
                                />
                            </div>
                        </div>

                        <div className="bg-[#C4E2FF] custom-container w-full xl:pr-20 xl:pb-20 pb-10 pt-[7rem] xl:pt-[6rem] -mt-16">
                            <h2 className="xl:text-[47px] text-[28px] font-medium leading-tight pr-10 xl:pr-0">
                                Empowering Advisors and Faculty
                            </h2>
                            <h3 className="mt-5 font-bold xl:text-[40px] text-[22px]">Agentforce for Education</h3>

                            <ul className="list-disc mt-5 pl-5 space-y-4 text-[16px] xl:text-[20px] font-medium leading-tight marker:font-bold marker:text-2xl">
                                <li>Unified view of each student’s academic, financial, wellness, and engagement history.</li>
                                <li>AI-based next-best-action (NBA) to support student success (e.g., intervention, counseling).</li>
                                <li>Manage advising sessions, notes, and follow-ups with integrated case management.</li>
                                <li>Collaboration tools for cross-departmental student success initiatives.</li>
                            </ul>

                            <div className="mt-5">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="relative h-[2750px] xl:h-[1000px] xl:mt-32 mt-16 group xl:overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/education/agentchat.webp"
                        alt=""
                        fill
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        sizes="100vw"

                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/education/Group 485.webp"
                        alt=""
                        fill
                        priority
                        className="!h-full"
                        sizes="100vw"
                    />
                </div>

            </section>
            <div className="bg-[#8792D9] xl:pb-40 pb-16 mt-[-147rem] xl:mt-0">
                <div
                    className="text-white 
                              h-full relative
                            custom-container"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white">
                        <div className="xl:col-span-8 col-span-12 pr-16">
                            <h2 className="text-[30px] xl:text-[50px]   text-white leading-tight xl:pr-10 font-medium">
                                <span className="font-bold xl:text-[70px] text-[40px]">AgentChat</span> <br></br>  Transforming Communication in Education with AI-Powered WhatsApp Integration
                            </h2>
                        </div>

                        <div className="xl:col-span-4 col-span-12 mt-10 xl:mt-0">
                            <p className="xl:text-[22px] text-[16px] pr-14 xl:pr-0 leading-tight font-light">Unlock the future of communication with AgentChat, an AI-driven, bi-directional WhatsApp conversation tool fully integrated with Salesforce Education Cloud. Streamline interactions with students, parents, and faculty, all while enhancing engagement, boosting operational efficiency, and delivering personalized experiences.</p>
                        </div>
                    </div>
                    <div className="xl:mt-20 mt-10">
                        <h3 className="xl:text-[30px] text-[24px]">Key Features:</h3>
                        <div className="flex flex-col md:flex-row xl:flex-row mt-10 xl:gap-20 gap-8 mb-16">
                            <div className="flex flex-col xl:flex-row  xl:items-start gap-4 xl:gap-0 xl:w-1/2">
                                <Image
                                    className="xl:w-[200px] xl:h-[200px] w-[156px] h-[156px]"
                                    src='/images/education/Seamless Salesforce Integration.svg'
                                    alt="Taking the lead"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                />
                                <div className="mt-4 xl:mt-0 xl:ml-12">
                                    <h3 className="xl:text-[24px] text-[20px]  xl:text-left pr-16 xl:pr-0 leading-tight">Seamless Salesforce Integration</h3>
                                    <p className="xl:text-[22px] text-[16px] mt-3  xl:text-left pr-10 xl:pr-0 leading-tight font-light">
                                        Effortlessly syncs with Salesforce Education Cloud, providing a unified platform for managing all student interactions in real time.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col  xl:flex-row  xl:items-start gap-4 xl:gap-0 xl:w-1/2 mt-10 md:mt-0 xl:mt-0">
                                <Image
                                    className="xl:w-[200px] xl:h-[200px] w-[156px] h-[156px]"
                                    src='/images/education/AI-Powered Automation & Personalization.svg'
                                    alt="Taking the lead"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                />
                                <div className="mt-4 xl:mt-0 xl:ml-12">
                                    <h3 className="xl:text-[24px] text-[20px] pr-16 xl:pr-0 xl:text-left leading-tight">AI-Powered Automation & Personalization</h3>
                                    <p className="xl:text-[22px] text-[16px] mt-3 pr-10 xl:pr-0  xl:text-left leading-tight font-light">
                                        Instantly responds with personalized, context-aware answers, automating routine inquiries while adapting to each individual’s needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row xl:flex-row mt-10 xl:gap-20 gap-8 mb-16">
                            <div className="flex flex-col xl:flex-row  xl:items-start gap-4 xl:gap-0 xl:w-1/2 mt-10 xl:mt-0">
                                <Image
                                    className="xl:w-[200px] xl:h-[200px] w-[156px] h-[156px]"
                                    src='/images/education/Scalable & Efficient Communication.svg'
                                    alt="Taking the lead"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                />
                                <div className="mt-4 xl:mt-0 xl:ml-12">
                                    <h3 className="xl:text-[24px] text-[20px] pr-16 xl:pr-0 xl:text-left leading-tight">Scalable & Efficient Communication</h3>
                                    <p className="xl:text-[22px] text-[16px] mt-3 pr-10 xl:pr-0 xl:text-left leading-tight font-light">
                                        Handles an increasing volume of interactions with ease, improving response times and reducing manual effort, while ensuring high-quality, consistent communication.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col xl:flex-row  xl:items-start gap-4 xl:gap-0 xl:w-1/2 mt-10 xl:mt-0">
                                <Image
                                    className="xl:w-[200px] xl:h-[200px] w-[156px] h-[156px]"
                                    src='/images/education/Actionable Insights & Data Security.svg'
                                    alt="Taking the lead"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                />
                                <div className="mt-4 xl:mt-0 xl:ml-12">
                                    <h3 className="xl:text-[24px] text-[20px] pr-16 xl:pr-0 xl:text-left leading-tight">Actionable Insights & Data Security</h3>
                                    <p className="xl:text-[22px] text-[16px] mt-3 pr-10 xl:pr-0 xl:text-left leading-tight font-light">
                                        Unlock valuable engagement insights through advanced analytics, while ensuring top-tier security and compliance with industry standards.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div
                className="
                  h-full  xl:mr-[142px]
                 custom-container
                 ">
                <p className="xl:text-[26px]  text-[18px] bg-[#0C8AD4]  p-5 pl-10 text-white mt-[-5rem] absolute xl:w-[60%] leading-tight font-light">With AgentChat, elevate your institution’s communication to new heights—efficient, secure, and fully integrated.</p>
            </div>
            <div className="mt-20 custom-container">
                <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 text-[16px] xl:text-[22px] px-8 transition duration-300 order-4 mt-6">
                    <Link href='/products/agentchat'>Know More</Link>
                </button>
            </div>
            <div className="py-32 xl:mt-20">
                <div
                    className="
                   relative
                 custom-container"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-16">
                        <div className="xl:col-span-5 col-span-12 relative  group overflow-hidden">
                            <div className="xl:block hidden">
                                <Image
                                    src="/images/education/solutions.webp"
                                    alt=""
                                    fill
                                    priority
                                    sizes="100vw"
                                    className="w-full  object-cover origin-center  transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                                />
                            </div>
                            <div className="xl:hidden block">
                                <Image
                                    src="/images/education/solutions.webp"
                                    alt=""
                                    priority
                                    sizes="100vw"
                                    className="w-full h-full"
                                    width={0}
                                    height={0}
                                />

                            </div>
                        </div>

                        <div className="xl:col-span-5 col-span-12 text-black">
                            <h2 className="xl:text-[60px] text-[26px] font-light mb-8 mt-10 xl:mt-0">Related Solutions</h2>
                            <div className="space-y-10">
                                <div>
                                    <Link href='/services/business-transformation/grow-with-sap-services' className="text-[#0C8AD4] font-semibold underline xl:text-[22px] text-[18px]">SAP S/4HANA for Education</Link>
                                    <p className="text-gray-700 mt-2 xl:text-[20px] text-[17px] pr-10 xl:pr-0">Robust ERP for education finance, HR, and campus operations.</p>
                                    <hr className="mt-8 border-gray-300 border-1" />
                                </div>

                                <div>
                                    <Link href='/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting' className="text-[#0C8AD4] underline font-semibold xl:text-[22px] text-[18px] pr-10 xl:pr-0">Salesforce Marketing and Revenue Cloud</Link>
                                    <p className="text-gray-700 mt-2 xl:text-[20px] text-[17px] pr-10 xl:pr-0">Personalized campaigns and dynamic pricing.</p>

                                    <hr className="mt-8 border-gray-300 border-1" />
                                </div>
                                <div>
                                    <Link href='/services/spend-management/sapbuyplus-ariba-implementation-partner' className="text-[#0C8AD4] underline font-semibold xl:text-[22px] text-[18px]">SAP ARIBA for Education</Link>
                                    <p className="text-gray-700 mt-2 xl:text-[20px] text-[17px]">Procurement solutions for campus operations.</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            {/* Contact Form */}
            <div
                className="
  custom-container
  text-black xl:py-20 pb-10"
            >
                <ContactForm title={'Ready to Redefine Your Student Experience?'} subtitle={"Rialtes is ready to partner with your institution to deliver student-centric, agile, and future-ready education solutions."} subtitle1={"Contact us today for a personalized consultation and demo!"} className={"max-w-[62rem] leading-tight  xl:text-[60px] text-[26px]"} />
            </div >
        </div >
    );
}