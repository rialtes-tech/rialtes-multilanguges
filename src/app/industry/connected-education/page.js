
"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform"
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "../../components/learnMore";



const Services2 = () => {
    return (
        <div className="mx-auto text-black xl:pr-[146px]">
            <h2 className="text-black mb-6 xl:text-[60px] text-[26px]">Rialtes’ Pre-Delivered Accelerators:</h2>
            <h3 className="xl:text-[42px] text-[22px] xl:font-bold font-medium mt-5 pr-20 xl:pr-0">Fast-Tracking Education Success</h3>
            <p className="mt-5 xl:text-[22px] text-[16px] xl:w-[55%] w-full pr-12 xl:pr-0">Our proprietary accelerators for the education sector are designed to simplify and optimize student lifecycle management:</p>
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
            <h3 className="mb-[15px] md:mb-[25px] xl:text-[24px] text-[20px] font-bold ">{services.title}</h3>
            <p className='md:mb-[15px] mb-0 xl:text-[20px] text-[16px] leading-tight'>{services.description}</p>

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
                title="Education Industry"
            />

            <section className="relative group overflow-hidden h-[399px] lg:h-[650px]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/education/Education banner.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
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
                    />
                </div>

                <div
                    className="
         h-full relative
        mx-[35px] xl:mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-20 xl:mt-20 mt-[9rem]">
                        <div className="xl:col-span-6 col-span-12 xl:pr-16 pr-[35rem]">
                            <h3 className="text-white xl:text-[24px] text-[18px] font-bold mb-2 mt-10">Education Industry</h3>
                            <h1 className="text-white xl:text-[60px] text-[24px] leading-tight">
                                Empowering the Future of Education
                            </h1>
                            <h3 className="xl:text-[45px] mt-5 text-white font-bold text-[18px]">Rialtes’ End-to-End Solutions for Student Success</h3>

                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        </div>
                    </div>

                </div>
            </section>




            <section
                className="xl:mt-16 mt-8
              mx-[35px] xl:mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]"
            >

                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-9 col-span-12">
                        <h2 className="text-[26px] xl:text-[60px]  mt-5 leading-tight">
                            Transforming Education with Technology-Driven Student Experiences
                        </h2>
                        <p className="xl:text-[22px] text-[16px] mt-10 xl:pr-32 pr-10 leading-tight">Education today is evolving at a rapid pace. Institutions must engage digitally native students, streamline enrollment and academic processes, and foster lifelong relationships with learners. From K-12 to higher education, organizations face challenges in managing fragmented student journeys, disjointed academic operations, and evolving stakeholder expectations.</p>
                        <p className="xl:text-[22px] text-[16px] mt-5 xl:pr-32 pr-10 leading-tight"> Rialtes delivers holistic education solutions—covering strategic advisory, seamless implementations, process optimization, and long-term support.</p>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                    </div>
                </div>


            </section>






            <section className="relative xl:h-[850px] h-[343px] xl:mt-20 mt-16">
                <div></div>
                <div className="xl:block hidden">
                    <Image
                        src="/images/education/TL.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/education/AdobeStock_612317773.webp"
                        alt=""
                        fill
                        priority
                    />
                </div>
                <div
                    className="relative xl:mt-16 mt-8
              mx-[35px] xl:mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]"
                >
                    <div className="xl:pt-16 pt-[24rem]">
                        <h2 className="xl:text-[60px] text-[26px]">Thought Leadership:</h2>
                        <h3 className="xl:text-[42px] mt-5 xl:font-bold font-medium text-[22px]">Solving Education’s Most Pressing Challenges</h3>

                    </div>

                    <div className="grid xl:grid-cols-12 grid-cols-1  xl:pt-10 pt-5 xl:pb-32 pb-10">

                        <div className="xl:col-span-4 col-span-12">
                            <h3 className="xl:text-[26px] text-[20px] font-bold">Key Industry Challenges We Address:</h3>

                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-5 mt-3 pr-10">
                                <li>Fragmented student engagement and communication channels.</li>
                                <li>Complex and inefficient recruitment and admissions processes.</li>
                                <li>Disconnected case management for student services and support.</li>
                                <li>Lack of 360-degree student insights across academic, financial, and social dimensions.</li>
                                <li>Difficulty in personalizing outreach to prospective and current students.</li>
                                <li>Inefficient alumni and donor relationship management.</li>

                            </ul>
                        </div>

                        <div className="xl:col-span-4 col-span-12 mt-20 bg-[#0A69B7] text-white p-10 h-[543px] w-[500px] xl:block hidden">
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

                <div className="xl:col-span-4 col-span-12 bg-[#0A69B7] text-white p-10 h-auto pb-16 w-full xl:hidden block">
                    <h3 className="xl:text-[26px] text-[20px] font-bold">Rialtes’ Approach:</h3>

                    <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-10">
                        <li>Strategic advisory for educational digital transformation.</li>
                        <li>Process redesign and technology enablement with SAP and Salesforce.</li>
                        <li>Pre-built accelerators for student engagement, recruitment, and retention.</li>
                        <li>Agile, scalable implementations aligned with industry best practices.</li>
                        <li> Continuous optimization through robust QA and post-go-live support.</li>

                    </ul>
                </div>
            </section>

            <div
                className="xl:mt-40 mt-[75rem]
        mx-[35px] xl:mr-[142px]
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]"
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
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/education/Group 484.webp"
                        alt="GROW with SAP"
                        fill
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div
                    className="
        h-full relative
        xl:ml-[280px] 
        xl:mr-[156px] 
        md:ml-[100px]"
                >
                    <div className="flex">
                        <div className="relative xl:w-[1014px] xl:h-[1621px] pb-16 xl:pb-0">
                            <div className="absolute xl:inset-0 bg-[#016FBE] mix-blend-multiply opacity-[0.9]"></div>

                            <div className="relative bg-opacity-80 text-white z-10   rounded-lg">
                                <div className="p-8 pt-16 pl-[35px] pr-[35px] xl:pr-0 xl:pl-20">
                                    <h2 className="xl:text-[60px] text-[26px] leading-tight">The Complete Student Journey</h2>
                                    <h3 className="xl:text-[42px] text-[22px] xl:font-bold font-medium mt-5 leading-tight xl:pr-32 pr-20">From First Inquiry to Graduation and Beyond</h3>
                                </div>
                                <div>
                                    <div className=" flex items-center xl:gap-5 gap-3">
                                        <h3 className="border-white"></h3>
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
                                    <h3 className="border-white"></h3>
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


            <section className="xl:mt-[28rem] mt-[24rem]">
                <div className="relative group overflow-hidden xl:h-[419px] h-[252px] w-[350px] mx-auto xl:w-[604px] -mt-[21rem] xl:left-[-20%]">
                    <div className="xl:block hidden">
                        <Image
                            src="/images/education/marketing.webp"
                            alt=""
                            fill
                            priority
                            className="!w-[604px] !h-[419px]  origin-center transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/education/AdobeStock_257163688.webp"
                            alt=""
                            fill
                            priority
                            className="w-full origin-center transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                </div>

                <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-12 items-start">
                    <div className="xl:col-span-6 col-span-12 bg-[#C4EBEA] xl:pr-20 xl:pb-20 pb-10 -mt-[6rem]">
                        <div
                            className="h-full relative mx-[35px] xl:ml-[280px]"
                        >
                            <h2 className="xl:text-[47px] text-[28px] mt-32 font-medium leading-tight">Hyper-Personalized Student Engagement with Salesforce Marketing Cloud</h2>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-10 xl:pr-0 leading-tight font-medium">
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
                    <div className="xl:col-span-6 col-span-12 mt-12 xl:mt-0">
                        <div className="relative group overflow-hidden xl:h-[419px] xl:w-[604px] h-[252px] w-[350px] mx-auto xl:mt-[-10rem] xl:left-[-10%]">
                            <div className="xl:block hidden">
                                <Image
                                    src="/images/education/service cloud.webp"
                                    alt=""
                                    fill
                                    priority
                                    className="!w-[650px] !h-[419px] origin-center transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="xl:hidden block">
                                <Image
                                    src="/images/education/AdobeStock_365849047.webp"
                                    alt=""
                                    fill
                                    priority
                                    className=" w-full origin-center transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                        </div>
                        <div className=" bg-[#F7E2D4] xl:pr-32 xl:mt-[-3rem] mt-[-6rem] xl:pl-16 pl-[35px] pr-[60px] xl:pb-20 pb-10  xl:pt-10 pt-16">
                            <h2 className="xl:text-[47px] mt-16 font-medium xl:pr-20 leading-tight text-[28px]">Lifelong Student Support with Salesforce Service Cloud</h2>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 xl:pr-32 pr-10 font-medium leading-tight">
                                <li>End-to-end student case management for academic, financial, and wellness support.</li>
                                <li>AI-assisted case deflection and chatbots for common queries (admission status, course selection, fee details).</li>
                                <li>Proactive student success and retention programs, powered by early alert systems and predictive analytics.</li>
                                <li> Integration with career services for internships, placements, and alumni mentorship.</li>
                            </ul>
                            <div className="mt-5">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="xl:mt-[28rem] mt-[3rem]">
                <div className="relative group overflow-hidden xl:h-[419px] h-[252px] w-[350px] mx-auto xl:w-[604px] xl:-mt-[28rem]  xl:left-[-20%]">
                    <div className="xl:block hidden">
                        <Image
                            src="/images/education/experience cloud.webp"
                            alt=""
                            fill
                            priority
                            className="!w-[604px] !h-[419px]  origin-center transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/education/AdobeStock_386174616.webp"
                            alt=""
                            fill
                            priority
                            className="origin-center transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                </div>

                <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-12 items-start">
                    <div className="xl:col-span-6 col-span-12 bg-[#D6CFCF] xl:pr-20 xl:pb-20 pb-10 -mt-[6rem]">
                        <div
                            className="h-full relative mx-[35px] xl:ml-[280px] "
                        >
                            <h2 className="xl:text-[47px] text-[28px] mt-32 font-medium leading-tight">Self-Service Portals for Students and Faculty</h2>
                            <h3 className="mt-10 font-bold xl:text-[40px] text-[22px] pr-20 xl:pr-0">Salesforce Experience Cloud</h3>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-10 xl:pr-0 font-medium leading-tight">
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
                    <div className="xl:col-span-6 col-span-12 mt-16 xl:mt-0">
                        <div className="relative group overflow-hidden xl:h-[419px] xl:w-[604px] h-[252px] w-[350px] mx-auto xl:mt-[-15rem] xl:left-[-10%]">
                            <div className="xl:block hidden">
                                <Image
                                    src="/images/education/s4hana.webp"
                                    alt=""
                                    fill
                                    priority
                                    className="!w-[650px] !h-[419px]  origin-center transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="xl:hidden block">
                                <Image
                                    src="/images/education/AdobeStock_341395222.webp"
                                    alt=""
                                    fill
                                    priority
                                    className="origin-center transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                        </div>
                        <div className=" bg-[#E8DFC7] xl:pr-32 xl:mt-[-3rem] mt-[-5rem] xl:pl-16 pl-[35px] xl:pb-20 pb-10  pt-10">
                            <h2 className="xl:text-[47px] text-[28px] mt-16 font-medium xl:pr-32 leading-tight pr-10">Seamless Enrollment, Fee, and Resource Management</h2>
                            <h3 className="mt-10 font-bold xl:text-[40px] text-[22px]">SAP S/4HANA + Rialtes</h3>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 xl:pr-32 pr-16 font-medium leading-tight">
                                <li>Fully integrated student information and ERP system for enrollment, finance, and resource management.</li>
                                <li>Real-time visibility into fee status, financial aid, and scholarships.</li>
                                <li>SAP-backed course scheduling, faculty assignment, and resource allocation.</li>
                                <li> Procurement and supplier collaboration via SAP ARIBA for campus infrastructure needs.</li>
                            </ul>
                            <div className="mt-5">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="xl:mt-[28rem] mt-[3rem]">
                <div className="relative group overflow-hidden xl:h-[419px] h-[252px] w-[350px] mx-auto xl:w-[604px] xl:-mt-[28rem] xl:left-[-20%]">
                    <div className="xl:block hidden">
                        <Image
                            src="/images/education/revenue cloud.webp"
                            alt=""
                            fill
                            priority
                            className="!w-[604px] !h-[419px]  origin-center transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/education/AdobeStock_905252724.webp"
                            alt=""
                            fill
                            priority
                            className=" origin-center transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                </div>

                <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-12 items-start">
                    <div className="xl:col-span-6 col-span-12 bg-[#F1D8D9] pr-20 xl:pb-20 pb-10 -mt-[6rem]">
                        <div
                            className="h-full relative ml-[35px] xl:ml-[280px] "
                        >
                            <h2 className="xl:text-[47px] text-[28px] mt-32 font-medium leading-tight">Dynamic Program and Course Pricing</h2>
                            <h3 className="xl:mt-10 mt-5 font-bold xl:text-[40px] text-[22px]">Salesforce Revenue Cloud</h3>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 font-medium leading-tight">
                                <li>Program and tuition fee configuration based on course, campus, residency status, and scholarship eligibility.</li>
                                <li>Manage installment plans, discounts, and refunds.</li>
                                <li> End-to-end quote-to-enrollment processes for executive education and certificate programs.</li>
                                <li>Integrate with SAP for billing, AR, and finance operations.</li>
                            </ul>
                            <div className="mt-5">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12 mt-16 xl:mt-0">
                        <div className="relative group overflow-hidden xl:h-[419px] xl:w-[604px] h-[252px] w-[350px] mx-auto xl:mt-[-15rem] xl:left-[-10%]">
                            <div className="xl:block hidden">
                                <Image
                                    src="/images/education/data cloud.webp"
                                    alt=""
                                    fill
                                    priority
                                    className="!w-[650px] !h-[419px]  origin-center transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="xl:hidden block">
                                <Image
                                    src="/images/education/AdobeStock_498551248.webp"
                                    alt=""
                                    fill
                                    priority
                                    className="w-full origin-center transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                        </div>
                        <div className="bg-[#C7E8E9] xl:pr-32 xl:mt-[-3rem] mt-[-5rem] xl:pl-16 pl-[35px] xl:pb-20 pb-10  pt-10">
                            <h2 className="xl:text-[47px] text-[28px] mt-16 font-medium pr-32 leading-tight">Unified Data and Insights</h2>
                            <h3 className="xl:mt-10 mt-5 font-bold xl:text-[40px] text-[22px]">Salesforce Data Cloud for Education</h3>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 xl:pr-32 pr-20 font-medium leading-tight">
                                <li>A 360-degree view of every student: academic progress, financial aid, career services, and engagement.</li>
                                <li>Advanced analytics and AI models for predicting at-risk students and enhancing retention.</li>
                                <li>Real-time data synchronization with SAP S/4HANA, LMS, CRM, and student success platforms.</li>
                                <li> Donor and alumni relationship management for advancement and fundraising.</li>
                            </ul>
                            <div className="mt-5">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="xl:mt-[28rem] mt-[3rem]">
                <div className="relative group overflow-hidden xl:h-[419px] h-[252px] w-[350px] mx-auto xl:w-[604px] xl:-mt-[28rem] xl:left-[-20%]">
                    <div className="xl:block hidden">
                        <Image
                            src="/images/education/eduction agentforce.webp"
                            alt="Empowering Advisors and Faculty"
                            layout="fill"
                            priority
                            className="object-cover origin-center transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/education/AdobeStock_1336683433 (1).webp"
                            alt=""
                            fill
                            priority
                            className="w-full origin-center transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                </div>

                <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-12 items-start">
                    <div className="xl:col-span-6 col-span-12 bg-[#C4E2FF] xl:pr-20 xl:pb-20 pb-10 -mt-[6rem]">
                        <div
                            className="h-full relative mx-[35px] xl:ml-[280px] "
                        >
                            <h2 className="xl:text-[47px] text-[28px] mt-32 font-medium leading-tight pr-10 xl:pr-0">Empowering Advisors and Faculty</h2>
                            <h3 className="mt-5 font-bold xl:text-[40px] text-[22px]">Agentforce for Education</h3>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-10 xl:pr-0 font-medium leading-tight">
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

                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/education/Group 485.webp"
                        alt=""
                        fill
                        priority
                        className="!h-full"
                    />
                </div>

            </section>
            <div className="bg-[#8792D9] xl:pb-40 pb-16 mt-[-147rem] xl:mt-0">


                <div
                    className="container text-white 
                              h-full relative
                             mx-[35px] xl:mr-0
                             xl:ml-[280px] xl:w-[calc(100%-280px)]
                             md:ml-[100px] md:w-[calc(100%-100px)]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white">
                        <div className="xl:col-span-7 col-span-12">
                            <h2 className="text-[30px] xl:text-[50px]   text-white leading-tight pr-10 font-medium">
                                <span className="font-bold xl:text-[70px] text-[40px]">AgentChat</span> <br></br>  Transforming Communication in Education with AI-Powered WhatsApp Integration
                            </h2>
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-4 col-span-12 mt-10 xl:mt-0">
                            <p className="xl:text-[22px] text-[16px] pr-14 xl:pr-0 leading-tight">Unlock the future of communication with AgentChat, an AI-driven, bi-directional WhatsApp conversation tool fully integrated with Salesforce Education Cloud. Streamline interactions with students, parents, and faculty, all while enhancing engagement, boosting operational efficiency, and delivering personalized experiences.</p>
                        </div>
                    </div>
                    <div className="xl:mt-20 mt-10">
                        <h3 className="xl:text-[30px] text-[24px]">Key Features:</h3>
                        <div className="flex flex-col xl:flex-row mt-10 xl:gap-20 gap-8 mb-16">
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
      <h3 className="xl:text-[24px] text-[20px]  xl:text-left pr-16 xl:pr-0">Seamless Salesforce Integration</h3>
      <p className="xl:text-[22px] text-[16px] mt-3  xl:text-left pr-10 xl:pr-0 leading-tight">
        Effortlessly syncs with Salesforce Education Cloud, providing a unified platform for managing all student interactions in real time.
      </p>
    </div>
  </div>

  <div className="flex flex-col xl:flex-row  xl:items-start gap-4 xl:gap-0 xl:w-1/2 mt-10 xl:mt-0">
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
      <h3 className="xl:text-[24px] text-[20px] pr-16 xl:pr-0 xl:text-left">AI-Powered Automation & Personalization</h3>
      <p className="xl:text-[22px] text-[16px] mt-3 pr-10 xl:pr-0  xl:text-left leading-tight">
        Instantly responds with personalized, context-aware answers, automating routine inquiries while adapting to each individual’s needs.
      </p>
    </div>
  </div>
</div>

<div className="flex flex-col xl:flex-row mt-10 xl:gap-20 gap-8 mb-16">
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
      <h3 className="xl:text-[24px] text-[20px] pr-16 xl:pr-0 xl:text-left">Scalable & Efficient Communication</h3>
      <p className="xl:text-[22px] text-[16px] mt-3 pr-10 xl:pr-0 xl:text-left leading-tight">
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
      <h3 className="xl:text-[24px] text-[20px] pr-16 xl:pr-0 xl:text-left">Actionable Insights & Data Security</h3>
      <p className="xl:text-[22px] text-[16px] mt-3 pr-10 xl:pr-0 xl:text-left leading-tight">
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
                 xl:ml-[280px] 
                 ">
                <p className="xl:text-[26px] mx-[35px] text-[18px] bg-[#0C8AD4]  p-5 pl-10 text-white mt-[-5rem] absolute xl:w-[60%]">With AgentChat, elevate your institution’s communication to new heights—efficient, secure, and fully integrated.</p>
            </div>
            <div className="mt-20  xl:ml-[280px] mx-[35px]">
                <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 text-[16px] xl:text-[22px] px-8 transition duration-300 order-4 mt-6">
                    <Link href='/products/agentchat'>Know More</Link>
                </button>
            </div>
            <div className="py-20 xl:mt-20">
                <div
                    className="
                  h-full relative
                 mx-[35px] xl:mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-16">
                        <div className="xl:col-span-5 col-span-12 relative xl:h-[700px] h-[331px] group overflow-hidden">
                           <div className="xl:block hidden">
                            <Image
                                src="/images/education/solutions.webp"
                                alt=""
                                fill
                                style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                                priority
                                className="w-full !h-[630px] object-cover origin-center  transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                            />
                            </div>
                            <div className="xl:hidden block">
                            <Image
                                src="/images/education/solutions.webp"
                                alt=""
                                fill
                                style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                                priority
                                className="w-full !h-[700px] object-cover origin-center  transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                            />
                            </div>
                        </div>

                        <div className="xl:col-span-5 col-span-12 text-black">
                            <h2 className="xl:text-[60px] text-[26px] font-light mb-8 mt-10 xl:mt-0">Related Solutions</h2>
                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-[#0C8AD4] font-semibold xl:text-[22px] text-[18px]">Salesforce Education Cloud</h3>
                                    <p className="text-gray-700 mt-2 xl:text-[20px] text-[17px] pr-10 xl:pr-0">Manage end-to-end student lifecycle and engagement.</p>
                                    <hr className="mt-8 border-gray-300 border-1" />
                                </div>
                                <div>
                                    <h3 className="text-[#0C8AD4] font-semibold xl:text-[22px] text-[18px]">SAP S/4HANA for Education</h3>
                                    <p className="text-gray-700 mt-2 xl:text-[20px] text-[17px] pr-10 xl:pr-0">Robust ERP for education finance, HR, and campus operations.</p>
                                    <hr className="mt-8 border-gray-300 border-1" />
                                </div>

                                <div>
                                    <h3 className="text-[#0C8AD4] font-semibold xl:text-[22px] text-[18px] pr-10 xl:pr-0">Salesforce Marketing and Revenue Cloud</h3>
                                    <p className="text-gray-700 mt-2 xl:text-[20px] text-[17px] pr-10 xl:pr-0">Personalized campaigns and dynamic pricing.</p>
                                    <hr className="mt-8 border-gray-300 border-1" />
                                </div>
                                <div>
                                    <h3 className="text-[#0C8AD4] font-semibold xl:text-[22px] text-[18px]">SAP ARIBA for Education</h3>
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
  xl:container
  mx-[35px] xl:mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  text-black xl:py-20 pb-10"
            >
                <ContactForm title={'Ready to Redefine Your Student Experience?'} className={"max-w-[62rem] xl:font-medium xl:text-[60px] text-[26px]"} />
            </div >
        </div >
    );
}