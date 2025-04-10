
"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform"
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "../../components/learnMore";



const Services2 = () => {
    return (
        <div className="mx-auto text-black xl:pr-[146px]">
            <h2 className="text-black mb-6 text-[60px]">Rialtes’ Pre-Delivered Accelerators:</h2>
            <h3 className="text-[42px] font-bold mt-5">Fast-Tracking Education Success</h3>
            <p className="mt-5 text-[22px] xl:w-[55%] w-full">Our proprietary accelerators for the education sector are designed to simplify and optimize student lifecycle management:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-8 mt-10">
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
            <h3 className="mb-[15px] md:mb-[25px] text-[24px] font-bold text-[#1F3F69]">{services.title}</h3>
            <p className='md:mb-[15px] mb-0 text-[20px]'>{services.description}</p>

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
                title="Rise with SAP Services: Future-Proof Your S/4HANA Strategy | Rialtes"
                description="Rise with SAP and simplify your S/4HANA migration. Rialtes ensures a smooth, secure, and future-ready transformation for your enterprise."
                keywords="home, website, welcome"
            />

            <section className="relative group overflow-hidden h-[350px] lg:h-[650px]">
                <Image
                    src="/images/education/Education banner.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                    className="transform transition-transform duration-500 group-hover:scale-110"
                />
                <div
                    className="
         h-full relative
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-20 mt-20">
                        <div className="xl:col-span-6 col-span-12 pr-16">
                            <h3 className="text-white xl:text-[24px] font-medium mb-2">Education Industry</h3>
                            <h1 className="text-white xl:text-[60px] leading-tight">
                                Empowering the Future of Education
                            </h1>
                            <h3 className="xl:text-[45px] mt-5 text-white font-bold">Rialtes’ End-to-End Solutions for Student Success</h3>

                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        </div>
                    </div>

                </div>
            </section>




            <section
                className="xl:mt-16 mt-8
              ml-[15px] w-[calc(100%-15px)] mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]
              sm:mx-5 sm:w-[calc(100%-40px)]
              xs:mx-4 xs:w-[calc(100%-32px)]"
            >

                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-9 col-span-11">
                        <h2 className="text-[25px] xl:text-[60px]  mt-5">
                            Transforming Education with Technology-Driven Student Experiences
                        </h2>
                        <p className="xl:text-[22px] text-[16px] mt-5 pr-32">Education today is evolving at a rapid pace. Institutions must engage digitally native students, streamline enrollment and academic processes, and foster lifelong relationships with learners. From K-12 to higher education, organizations face challenges in managing fragmented student journeys, disjointed academic operations, and evolving stakeholder expectations.</p>
                        <p className="xl:text-[22px] text-[16px] mt-5 pr-32"> Rialtes delivers holistic education solutions—covering strategic advisory, seamless implementations, process optimization, and long-term support.</p>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                    </div>
                </div>


            </section>






            <section className="relative xl:h-[821px] h-[3850px] mt-20">
                <Image
                    src="/images/education/TL.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />
                <div
                    className="relative xl:mt-16 mt-8
              ml-[15px] w-[calc(100%-15px)] mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]
              sm:mx-5 sm:w-[calc(100%-40px)]
              xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="pt-16">
                        <h2 className="text-[60px] ">Thought Leadership:</h2>
                        <h3 className="text-[42px] mt-5 font-bold">Solving Education’s Most Pressing Challenges</h3>

                    </div>

                    <div className="grid xl:grid-cols-12 grid-cols-1  pt-10 pb-32">

                        <div className="xl:col-span-4 col-span-12">
                            <h3 className="xl:text-[26px] font-bold">Key Industry Challenges We Address:</h3>

                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5">
                                <li>Fragmented student engagement and communication channels.</li>
                                <li>Complex and inefficient recruitment and admissions processes.</li>
                                <li>Disconnected case management for student services and support.</li>
                                <li>Lack of 360-degree student insights across academic, financial, and social dimensions.</li>
                                <li>Difficulty in personalizing outreach to prospective and current students.</li>
                                <li>Inefficient alumni and donor relationship management.</li>

                            </ul>
                        </div>

                        <div className="xl:col-span-4 col-span-12 mt-20 bg-[#0A69B7] text-white p-10 h-[543px] w-[500px]">
                            <h3 className="xl:text-[26px] font-bold">Rialtes’ Approach:</h3>

                            <ul className="list-disc space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5">
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
                className="mt-40
        ml-[15px] w-[calc(100%-15px)] xl:mr-[142px]
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <section className="pb-16 bg-white">
                    <Services2 />
                </section>
            </div>



            <section className="relative group overflow-hidden h-[500px] xl:h-[1520px]  mt-5 xl:mt-0 xl:block hidden">
                <Image
                    src="/images/education/student journey.webp"
                    alt="GROW with SAP"
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                    className="transform transition-transform duration-500 group-hover:scale-110"
                />
                <div
                    className="
        h-full relative
        ml-[15px]
        xl:ml-[280px] 
        xl:mr-[156px] 
        md:ml-[100px]"
                >
                    <div className="flex">
                        <div className="relative w-[1014px] h-[1611px]">
                            <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>

                            <div className="relative bg-opacity-80 text-white z-10   rounded-lg">
                                <div className="p-16">
                                    <h2 className="xl:text-[60px] leading-tight">The Complete Student Journey</h2>
                                    <h3 className="text-[42px] font-bold mt-5 leading-tight pr-32">From First Inquiry to Graduation and Beyond</h3>
                                </div>
                                <div>
                                    <div className=" flex items-center gap-5">
                                        <h3 className="border-white"></h3>
                                        <h3 className="text-[35px] font-bold">Recruitment and Enrollment Journey</h3>
                                    </div>
                                </div>

                                <div className="pl-20 pt-10">
                                    <h3 className="xl:text-[26px] font-bold">Student Lead Management and Engagement</h3>

                                    <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 pr-40">
                                        <li>Capture student leads from multiple channels (web, social, email, recruitment events) using Salesforce Education Cloud.</li>
                                        <li>Intelligent lead nurturing with Salesforce Marketing Cloud, leveraging personalized journeys based on interests and backgrounds.</li>
                                        <li>AI-based lead scoring and matching to recommend suitable programs and scholarships.</li>

                                    </ul>
                                </div>

                                <div className="pl-20 pt-10">
                                    <h3 className="xl:text-[26px] font-bold">Selection and Admissions</h3>

                                    <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5">
                                        <li>Seamless application management with real-time status updates.</li>
                                        <li>Automated document collection and verification workflows.</li>
                                        <li>Selection committee collaboration portals for holistic application reviews.</li>
                                        <li>Integrated offer and acceptance workflows with e-signatures.</li>

                                    </ul>
                                </div>

                                <div className=" flex items-center gap-5 mt-10">
                                    <h3 className="border-white"></h3>
                                    <h3 className="text-[35px] font-bold">Student Family Mapping and Engagement</h3>
                                </div>
                                <div className="pl-20 pt-10">

                                    <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 pr-40">
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


            <section className="mt-[28rem]">

                <div className="relative group overflow-hidden h-[419px] w-[604px] -mt-[21rem] left-[13%]">
                    <Image
                        src="/images/education/marketing.webp"
                        alt=""
                        fill
                        priority
                        className="!w-[604px] !h-[419px]  origin-center transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="relative group overflow-hidden h-[419px] w-[604px] mt-[-15rem]   left-[55%]">
                    <Image
                        src="/images/education/marketing.webp"
                        alt=""
                        fill
                        priority
                        className="!w-[650px] !h-[419px] origin-center transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="grid grid-cols-12 gap-12 items-start">
                    <div className="col-span-6 bg-[#C4EBEA] pr-20 pb-20 -mt-[16rem]">
                        <div
                            className="h-full relative ml-[15px] xl:ml-[280px] "
                        >
                            <h2 className="text-[47px] mt-32 font-medium">Hyper-Personalized Student Engagement with Salesforce Marketing Cloud</h2>
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5">
                                <li>AI-powered segmentation to target prospects by program interests, geography, demographics.</li>
                                <li>Personalized student journeys for pre-admission, onboarding, academic advising, and alumni engagement.</li>
                                <li>Behavioral triggers for scholarship offers, deadlines, and personalized content delivery.</li>
                                <li>Event management and RSVP tracking for open houses, campus tours, and recruitment fairs.</li>
                            </ul>
                            <LearnMore />
                        </div>
                    </div>
                    <div className="col-span-6 bg-[#F7E2D4] pr-32 mt-[-3rem] pl-16 pb-20  ">
                        <h2 className="text-[47px] mt-32 font-medium pr-20">Lifelong Student Support with Salesforce Service Cloud</h2>
                        <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 pr-40">
                            <li>End-to-end student case management for academic, financial, and wellness support.</li>
                            <li>AI-assisted case deflection and chatbots for common queries (admission status, course selection, fee details).</li>
                            <li>Proactive student success and retention programs, powered by early alert systems and predictive analytics.</li>
                            <li> Integration with career services for internships, placements, and alumni mentorship.</li>
                        </ul>
                        <LearnMore />
                    </div>

                </div>
            </section>



            <section className="mt-[22rem]">

                <div className="relative group overflow-hidden h-[419px] w-[604px] -mt-[22rem] left-[13%]">
                    <Image
                        src="/images/education/experience cloud.webp"
                        alt=""
                        fill
                        priority
                        className="!w-[604px] !h-[419px]  origin-center transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="relative group overflow-hidden h-[419px] w-[604px] mt-[-15rem]  left-[55%]">
                    <Image
                        src="/images/education/s4hana.webp"
                        alt=""
                        fill
                        priority
                        className="!w-[650px] !h-[419px]  origin-center transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="grid grid-cols-12 gap-12 items-start">
                    <div className="col-span-6 bg-[#D6CFCF] pr-12 pb-20 -mt-[15rem]">
                        <div className="ml-[15px] xl:ml-[280px]"
                        >
                            <h2 className="text-[47px] mt-32 font-medium">Self-Service Portals for Students and Faculty</h2>
                            <h3 className="mt-5 font-bold text-[40px]">Salesforce Experience Cloud</h3>
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5">
                                <li>Personalized portals for application tracking, document submissions, fee payments, and course registration.</li>
                                <li>Faculty portals for advising, mentoring, and grading.</li>
                                <li>External communication management for parents, sponsors, and alumni.</li>
                                <li>Embedded communication channels (chat, messaging, email) for real-time engagement.</li>

                            </ul>
                            <LearnMore />
                        </div>
                    </div>

                    <div className="col-span-6 bg-[#E8DFC7] pr-32 mt-[-4rem] pl-16 pb-20">
                        <h2 className="text-[47px] mt-32 font-medium pr-32">Seamless Enrollment, Fee, and Resource Management</h2>
                        <h3 className="mt-5 font-bold text-[40px]">SAP S/4HANA + Rialtes</h3>
                        <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 pr-32">
                            <li>Fully integrated student information and ERP system for enrollment, finance, and resource management.</li>
                            <li>Real-time visibility into fee status, financial aid, and scholarships.</li>
                            <li>SAP-backed course scheduling, faculty assignment, and resource allocation.</li>
                            <li> Procurement and supplier collaboration via SAP ARIBA for campus infrastructure needs.</li>
                        </ul>
                        <LearnMore />
                    </div>

                </div>
            </section>
            <section className="mt-[22rem]">


            <div className="relative group overflow-hidden h-[419px] w-[604px] -mt-[22rem] left-[13%]">
                    <Image
                        src="/images/education/revenue cloud.webp"
                        alt=""
                        fill
                        priority
                        className="!w-[604px] !h-[419px]  origin-center transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="relative group overflow-hidden h-[419px] w-[604px] mt-[-15rem]  left-[55%]">
                    <Image
                                src="/images/education/data cloud.webp"
                                alt=""
                        fill
                        priority
                        className="!w-[650px] !h-[419px]  origin-center transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

               
              

                <div className="grid grid-cols-12 gap-12 items-start">
                    {/* First Column */}
                    <div className="col-span-6 bg-[#F1D8D9] pr-14 pb-20  -mt-[15rem]">
                        <div className="h-full relative ml-[15px] xl:ml-[280px] group">
                            <h2 className="text-[47px] mt-32 font-medium">Dynamic Program and Course Pricing</h2>
                            <h3 className="mt-5 font-bold text-[40px]">Salesforce Revenue Cloud</h3>
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5">
                                <li>Program and tuition fee configuration based on course, campus, residency status, and scholarship eligibility.</li>
                                <li>Manage installment plans, discounts, and refunds.</li>
                                <li> End-to-end quote-to-enrollment processes for executive education and certificate programs.</li>
                                <li>Integrate with SAP for billing, AR, and finance operations.</li>
                            </ul>
                            <LearnMore />
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="col-span-6 bg-[#C7E8E9] pr-32 mt-80 pl-16 pb-20 mt-[-4rem]">

                        <h2 className="text-[47px] mt-32 font-medium pr-32">Unified Data and Insights</h2>
                        <h3 className="mt-5 font-bold text-[40px]">Salesforce Data Cloud for Education</h3>
                        <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 pr-32">
                            <li>A 360-degree view of every student: academic progress, financial aid, career services, and engagement.</li>
                            <li>Advanced analytics and AI models for predicting at-risk students and enhancing retention.</li>
                            <li>Real-time data synchronization with SAP S/4HANA, LMS, CRM, and student success platforms.</li>
                            <li> Donor and alumni relationship management for advancement and fundraising.</li>
                        </ul>
                        <LearnMore />
                    </div>
                </div>
            </section>


            <section className="mt-[5rem]">
                <div className="relative group overflow-hidden h-[419px] w-[604px] -mt-20 left-[15%]">
                    <Image
                        src="/images/education/eduction agentforce.webp"
                        alt="Empowering Advisors and Faculty"
                        layout="fill"
                        priority
                        className="object-cover origin-center transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-6 bg-[#C4E2FF] pr-20 pb-32 h-full flex flex-col justify-center -mt-16">
                        <div className="h-full ml-[15px] xl:ml-[280px]">
                            <h2 className="text-[47px] mt-32 font-medium">Empowering Advisors and Faculty</h2>
                            <h3 className="mt-5 font-bold text-[40px]">Agentforce for Education</h3>
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5">
                                <li>Unified view of each student’s academic, financial, wellness, and engagement history.</li>
                                <li>AI-based next-best-action (NBA) to support student success (e.g., intervention, counseling).</li>
                                <li>Manage advising sessions, notes, and follow-ups with integrated case management.</li>
                                <li>Collaboration tools for cross-departmental student success initiatives.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="xl:ml-[280px]">
                <LearnMore />
            </div>

            <section className="relative h-[1100px] xl:h-[1000px] mt-40">
                <Image
                    src="/images/education/agentchat.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />

            </section>
            <div className="bg-[#8792D9] pb-40">


                <div
                    className="container text-white 
                              h-full relative
                             ml-[15px] w-[calc(100%-15px)] mr-0
                             xl:ml-[280px] xl:w-[calc(100%-280px)]
                             md:ml-[100px] md:w-[calc(100%-100px)]
                             sm:mx-5 sm:w-[calc(100%-40px)]
                             xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white">
                        <div className="xl:col-span-7 col-span-12">
                            <h2 className="text-[25px] xl:text-[50px]  text-white leading-tight pr-10">
                                <span className="font-bold text-[70px]">AgentChat</span> <br></br>  Transforming Communication in Education with AI-Powered WhatsApp Integration
                            </h2>
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <p className="text-[22px]">Unlock the future of communication with AgentChat, an AI-driven, bi-directional WhatsApp conversation tool fully integrated with Salesforce Education Cloud. Streamline interactions with students, parents, and faculty, all while enhancing engagement, boosting operational efficiency, and delivering personalized experiences.</p>
                        </div>
                    </div>
                    <div className="mt-20">
                        <h3 className="text-[30px]">Key Features:</h3>
                        <div className="flex mt-10 gap-20">
                            <div className="">
                                <Image
                                    className="w-[200px] h-[200px]"
                                    src='/images/education/Seamless Salesforce Integration.svg'
                                    alt="Taking the lead"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-[24px]">Seamless Salesforce Integration</h3>
                                <p className="text-[22px] mt-3">Effortlessly syncs with Salesforce Education Cloud, providing a unified platform for managing all student interactions in real time.</p>
                            </div>
                            <div className="">
                                <Image
                                    className="w-[200px] h-[200px]"
                                    src='/images/education/AI-Powered Automation & Personalization.svg'
                                    alt="Taking the lead"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-[24px]">AI-Powered Automation & Personalization</h3>
                                <p className="text-[22px] mt-3">Instantly responds with personalized, context-aware answers, automating routine inquiries while adapting to each individual’s needs.</p>
                            </div>
                        </div>
                        <div className="flex mt-20 gap-20">
                            <div className="">
                                <Image
                                    className="w-[200px] h-[200px]"
                                    src='/images/education/Scalable & Efficient Communication.svg'
                                    alt="Taking the lead"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-[24px]">Scalable & Efficient Communication</h3>
                                <p className="text-[21px] mt-3">Handles an increasing volume of interactions with ease, improving response times and reducing manual effort, while ensuring high-quality, consistent communication.</p>
                            </div>
                            <div className="">
                                <Image
                                    className="w-[200px] h-[200px]"
                                    src='/images/education/Actionable Insights & Data Security.svg'
                                    alt="Taking the lead"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-[24px]">Actionable Insights & Data Security</h3>
                                <p className="text-[22px] mt-3">Unlock valuable engagement insights through advanced analytics, while ensuring top-tier security and compliance with industry standards.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div
                className="
                  h-full  xl:mr-[142px]
                 xl:ml-[280px] 
                 "
            >
                <p className="xl:text-[26px] bg-[#0C8AD4]  p-5 pl-10 text-white mt-[-5rem] absolute w-[60%]">With AgentChat, elevate your institution’s communication to new heights—efficient, secure, and fully integrated.</p>


            </div>
            <div className="mt-20  xl:ml-[280px] ">
                <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6">
                    <Link href='/products/agentchat'>Learn More</Link>
                </button>
            </div>
            <div className="py-20 mt-32">
                <div
                    className="
                  h-full relative
                 ml-[15px] w-[calc(100%-15px)] mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
                 sm:mx-5 sm:w-[calc(100%-40px)]
                 xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-16">
                        <div className="xl:col-span-5 col-span-12 relative h-[642px] group overflow-hidden">
                            <Image
                                src="/images/education/solutions.webp"
                                alt=""
                                fill
                                style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                                priority
                                className="w-full !h-[700px] object-cover origin-center  transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                            />
                        </div>

                        <div className="xl:col-span-5 col-span-12 text-black">
                            <h2 className="text-[60px] font-light mb-8">Related Solutions</h2>

                            <div className="space-y-10">

                                <div>
                                    <h3 className="text-[#0C8AD4] font-semibold text-[22px]">Salesforce Education Cloud</h3>
                                    <p className="text-gray-700 mt-2 text-[20px]">Manage end-to-end student lifecycle and engagement.</p>
                                    <hr className="mt-8 border-gray-300 border-2" />
                                </div>

                                <div>
                                    <h3 className="text-[#0C8AD4] font-semibold text-[22px]">SAP S/4HANA for Education</h3>
                                    <p className="text-gray-700 mt-2 text-[20px]">Robust ERP for education finance, HR, and campus operations.</p>
                                    <hr className="mt-8 border-gray-300 border-2" />
                                </div>

                                <div>
                                    <h3 className="text-[#0C8AD4] font-semibold text-[22px]">Salesforce Marketing and Revenue Cloud</h3>
                                    <p className="text-gray-700 mt-2 text-[20px]">Personalized campaigns and dynamic pricing.</p>
                                    <hr className="mt-8 border-gray-300 border-2" />
                                </div>

                                <div>
                                    <h3 className="text-[#0C8AD4] font-semibold text-[22px]">SAP ARIBA for Education</h3>
                                    <p className="text-gray-700 mt-2 text-[20px]">Procurement solutions for campus operations.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            {/* Contact Form */}
            <div
                className="mt-20
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black py-20"
            >
                <ContactForm title={'Ready to Redefine Your Student Experience?'} className={"max-w-[62rem] font-medium text-[60px]"} />
            </div >
        </div >
    );
}