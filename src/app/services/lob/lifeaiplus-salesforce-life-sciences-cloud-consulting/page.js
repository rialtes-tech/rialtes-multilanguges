


"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "@/app/components/learnMore";

const RelatedSolutionsSection = () => {
    const relatedSolutionsData = [
        {
            title: "Salesforce Service Cloud",
            desc: "for superior patient and provider service workflows."
        },
        {
            title: "Salesforce Experience (Community) Cloud",
            desc: "to build patient, HCP, and partner-facing portals."
        },
        {
            title: "Salesforce Agentforce for Health",
            desc: "AI-driven case management and services optimization."
        },
        {
            title: "Salesforce Data Cloud for Health",
            desc: "unified patient data to power next-gen personalization and analytics."
        },
    ]
    return (
        <section  className={`custom-container lg:mt-[95px] mt-[80px] pb-[59px]`}>
            <h2 className="leading-tight text-black pr-10 xl:pr-0 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
                Related Solutions & Explore More:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 xl:mt-[45px] mt-[33px] text-black">
                {relatedSolutionsData.map((item, index) => {
                    // Border 
                    const borderRight = index < 2 ? 'xl:border-r-[1px] xl:border-black' : '';
                    const borderBottom = 'border-b-[1px] border-black md:border-0 pb-[33px] last:border-b-0 last:pb-0';

                    return (
                        <div
                            key={index}
                            className={`flex flex-col justify-between ${borderRight} ${borderBottom} h-full`}
                        >
                            <div className="flex-1 flex flex-col">
                                <h3 className="text-black font-semibold 4xl:text-[30px] xl:text-[26px] text-[22px] leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-black mt-10 font-normal pr-10 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                                    {item.desc}
                                </p>
                                <div className={`mt-auto pt-10 ${index === relatedSolutionsData.length - 1 ? 'xl:mt-[37px]' : ''}`}>
                                    <Link href="/contact-us">
                                        <button className="bg-[#006FBE] hover:bg-white hover:text-[#134874] text-white xl:text-[20px] text-[16px] font-semibold py-3 px-8 transition duration-300">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    );
                })}
            </div>
        </section>

    )
}

export default function Retail({ items }) {

    const featureBoxes = [
        {
            title: "Regulatory Compliance & Audit Readiness",
            description:
                "Ensure full adherence to FDA, EMA, HIPAA, and GDPR standards with automated compliance workflows, complete audit trails, and intelligent monitoring.",
        },
        {
            title: "Remote Patient Monitoring & Home Health",
            description:
                "Deliver next-gen Remote Monitoring solutions and Home Health programs integrated into Salesforce for proactive care management and better outcomes.",
        },
        {
            title: "Benefit Verification & Eligibility Checks",
            description:
                "Automate eligibility verification and benefit checks in real-time — improving speed and reducing manual interventions for patient services teams.",
        },
        {
            title: "Prior Authorization Management",
            description:
                "AI-powered Prior Authorization solution, built on Salesforce Life Sciences Cloud, streamlines and automates the entire PA process for patients, providers, and payers.",
        },
        {
            title: "Telehealth & Virtual Care Solutions",
            description:
                "Offer secure Telehealth integrations to facilitate remote consultations, patient follow-ups, and digital care pathways.",
        },
        {
            title: "Digital Signature & Document Extraction Automation",
            description:
                "Accelerate document-heavy workflows like consent forms, onboarding, and compliance documentation using secure digital signatures and AI-powered document extraction.",
        },
    ];

    
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Salesforce Life Sciences Cloud Consulting Services | Rialtes"
                description="LifeAI+ by Rialtes provides Salesforce Life Sciences cloud consulting to streamline healthcare operations, enhance compliance, and elevate patient care"
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting/"
            />

            <section className="relative h-[435px] lg:h-[650px]">

                <div className="xl:block hidden">
                    <Image
                        src="/images/services/lob/lifeai/lifeai-banner.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>

                <div className="xl:hidden block">
                    <Image
                        src="/images/services/lob/lifeai/mobile-banner.webp"
                        alt=""
                        fill
                        priority
                    />
                </div>
                <div className="h-full relative  custom-container">
                    <div className="grid md:grid-cols-12 grid-cols-1 xl:mt-20">
                        <div className="md:col-span-5 4xl:col-span-6 col-span-12 mt-32">
                            <h3 className="text-white xl:text-[24px] text-[18px] font-bold mb-2">LifeAI+</h3>
                            <h2 className="text-white leading-tight md:text-[26px] xl:text-[40px] 4xl:text-[60px] mt-5">
                                Transforming Life Sciences with Rialtes LifeAI+ Services
                            </h2>
                        </div>
                        <div className="xl:col-span-7 col-span-12">
                     </div>
                    </div>
                </div>
            </section> 
            <section className="mt-16 custom-container">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-8 2xl:col-span-7 4xl:col-span-9 col-span-12 xl:pr-16">
                        <h1 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
                            Accelerating Innovation, Compliance, and Growth in Life Sciences with AI and Salesforce Cloud Solutions
                        </h1>
                        <p className="mt-10 xl:pr-0  text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">At Rialtes, we understand that the life sciences industry is rapidly evolving — with growing expectations from patients, providers, regulators, and partners. To meet these demands, organizations need intelligent, AI-driven solutions that integrate compliance, personalization, and automation at scale.</p>
                        <p className="mt-5 xl:pr-0  text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">Introducing Rialtes LifeAI+, our comprehensive consulting service tailored for life sciences enterprises, combining deep industry expertise with Salesforce Life Sciences Cloud, Health Cloud, and AI-powered solutions to help you drive innovation, ensure compliance, and enhance operational efficiency.</p>
                    </div>
                    <div className="xl:col-span-2 col-span-12">
                    </div>
                </div>
            </section>
            <section className="relative  lg:min-h-[980px] 2xl:min-h-[1100px] lg:mt-[95px] mt-[80px]">
                <div className="relative w-full h-[500px] lg:h-[980px] ">
                    <Image
                        src="/images/services/lob/lifeai/what-is.webp"
                        alt="GROW with SAP"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div className="custom-container max-lg:px-0 text-white relative">
                    <div className="bg-[#0F71BF]  md:p-14 max-md:p-[33px] lg:mt-[-595px]">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">What is LifeAI+?</h2>
                        <p className="mt-5 font-normal xl:pr-20 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">A 360° consulting service that unites Advisory, Design, Implementation, Quality Assurance, Integration, and Post-Go-Live Support — ensuring continuous value creation and innovation across your life sciences value chain.</p>
                        <h3 className="text-[22px] xl:text-[30px] 4xl:text-[36px] leading-tight font-semibold mt-5">Our End-to-End Services Include:</h3>
                        <div className="grid xl:grid-cols-12  grid-cols-1 mt-10 lg:gap-10 gap-y-10">
                            <div className="xl:col-span-4 col-span-12">
                                <p className="font-bold xl:border-r-[2px]  pb-8 border-white xl:pr-10 text-[17px] xl:text-[19px] 4xl:text-[20px] leading-tight">Strategic Advisory & Roadmap Development</p>
                                <div className="absolute  h-[2px] bg-white w-[20%] xl:hidden"></div>
                                <p className="font-bold mt-10 xl:border-r-[2px]  pb-8  border-white xl:pr-10 text-[17px] xl:text-[19px] 4xl:text-[20px] leading-tight">Regulatory Compliance & Quality Assurance</p>
                                <div className="absolute  h-[2px] bg-white w-[20%] xl:hidden"></div>

                                <p className="font-bold mt-10 xl:pr-10  pb-5 text-[17px] xl:text-[19px] 4xl:text-[20px] leading-tight">Ongoing Support & Optimization for Continuous Improvement</p>
                                <div className="absolute  h-[2px] bg-white w-[20%] xl:hidden"></div>

                            </div>
                            <div className="xl:col-span-4 col-span-12">
                                <p className="font-bold xl:border-r-[2px]  border-white xl:pr-10  pb-5 xl:pb-0 text-[17px] xl:text-[19px] 4xl:text-[20px] leading-tight">Salesforce Life Sciences Cloud & Health Cloud Implementation</p>
                                <div className="absolute  h-[2px] bg-white w-[20%] xl:hidden"></div>

                                <p className="font-bold mt-10 xl:border-r-[2px]  border-white  xl:pr-10  pb-5 xl:pb-0 text-[17px] xl:text-[19px] 4xl:text-[20px] leading-tight">System Integration with Backend ERP, EMR, and Partner Platforms</p>
                                <div className="absolute  h-[2px] bg-white w-[20%] xl:hidden"></div>

                            </div>
                            <div className="xl:col-span-4 col-span-12">
                                <p className="font-bold   pb-5 xl:pr-10 text-[17px] xl:text-[19px] 4xl:text-[20px] leading-tight">User-Centric Experience & Journey Design</p>
                                <div className="absolute  h-[2px] bg-white w-[20%] xl:hidden"></div>

                                <p className="mt-10 font-bold xl:pr-10 text-[17px] xl:text-[19px] 4xl:text-[20px] leading-tight">AI-Powered Insights & Analytics through Data Cloud</p>
                                <div className="flex xl:justify-center mt-5 xl:mt-[60px]">  <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* why partner with rialtes */}

            <section className="lg:mt-[95px] mt-[80px]">
                <div className="grid xl:grid-cols-12 grid-cols-1">

                    {/* IMAGE FIRST ON MOBILE, SECOND ON DESKTOP */}
                    <div className="col-span-6 order-1 xl:order-2">
                        <Image
                            className="w-full h-full object-cover"
                            src="/images/services/lob/lifeai/why-partner-desktop.webp"
                            alt="Taking the lead"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>

                    {/* CONTENT SECOND ON MOBILE, FIRST ON DESKTOP */}
                    <div className="col-span-6 bg-[#073259] text-white order-2 xl:order-1 pb-20 xl:pb-16">
                        <div className="custom-container xl:pt-16 pt-10 xl:pr-[8rem] mx-[35px] xl:mx-0">
                            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]  pr-16 xl:pr-0">Why Partner with Rialtes?</h2>
                            <ul className="list-disc leading-tight xl:space-y-4 font-normal marker:font-bold marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] mt-5 pr-2 xl:pr-0" >
                                <li>Certified Salesforce Partner with global offices in United States, Canada, India, and Singapore.</li>
                                <li>Highly Certified Salesforce Health Cloud and Life Sciences Cloud Experts.</li>
                                <li>Deep expertise in payer, provider, medical devices, pharmaceuticals, biotech, and insurance sectors.</li>
                                <li>Proven ability to deliver secure, compliant, AI-driven life sciences solutions.</li>
                                <li>Strong focus on AI, automation, and patient-centric innovation.</li>
                            </ul>
                            <div className="mt-5  absolute">
                                <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                 {/* Deep Expertise in Salesforce Life Sciences Cloud section */}

            <section className="lg:mt-[95px] mt-[80px]">
                <div className="md:pl-0">
                    <div className="xl:block hidden">
                        <Image
                            className="w-full xl:h-full h-[400px]"
                            src="/images/services/lob/lifeai/deep-desk.webp"
                            alt="Taking the lead"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            className="w-full h-full object-cover"
                            src="/images/services/lob/lifeai/deep-mobile.webp"
                            alt="Taking the lead"
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                </div>

                <div className="custom-container xl:pr-0">
                    <div className="grid xl:grid-cols-12 grid-cols-1 md:gap-[10px] xl:gap-[50px] bg-[#0690C9] text-white mt-[-100px] relative custom-container 4xl:px-[90px] py-[20px]">

                        <div className="xl:col-span-6 col-span-12 pt-[20px] xl:pr-[100px]">
                            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">Deep Expertise in Salesforce Life Sciences Cloud</h2>
                            <p className="mt-5 font-normal text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                                We help life sciences organizations maximize Salesforce Life Sciences Cloud, configuring its industry-specific modules to streamline workflows and improve compliance:
                            </p>
                            <div className=" absolute bottom-[75px] xl:block hidden">
                                <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} />
                            </div>
                        </div>

                        <div className="xl:col-span-6 col-span-12 xl:mt-10 mt-5">
                            <h3 className="text-[22px] xl:text-[25px] 4xl:text-[36px] font-semibold leading-tight xl:pr-16">
                                Key Salesforce Life Sciences Cloud Modules We Specialize In:
                            </h3>
                            <ul className="list-disc leading-tight xl:space-y-4 font-normal marker:font-bold marker:text-2xl pl-5  text-[16px] xl:text-[18px] 4xl:text-[20px] mt-5 lg:pr-4">
                                <li>Care Program & Patient Services Management</li>
                                <li>Provider & Healthcare Professional (HCP) Relationship Management</li>
                                <li>Clinical Support & Device Case Management</li>
                                <li>Medical Affairs & Field Team Enablement</li>
                                <li>Omnichannel Communication for Patients and Providers</li>
                                <li>Product Complaint & Inquiry Handling</li>
                                <li>Investigator & KOL Management</li>
                                <li>AI-Driven Data Insights with Salesforce Data Cloud</li>
                            </ul>
                            <div className="mt-12 xl:hidden block pb-[20px]">
                                <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} />
                            </div>
                        </div>

                        <div className="xl:col-span-1 col-span-12"></div>
                    </div>
                </div>
            </section>

            {/* How Rialtes LifeAI+  section */}

            <section className="custom-container lg:mt-[95px] mt-[80px]">
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-24 gap-10">

                    {/* Image First on Mobile, Second on Desktop */}
                    <div className="xl:col-span-6 order-1 xl:order-2">
                        <Image
                            className="w-full"
                            src="/images/services/lob/lifeai/how-ri-desktop.webp"
                            alt="Taking the lead"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>

                    {/* Content Second on Mobile, First on Desktop */}
                    <div className="xl:col-span-6 order-2 xl:order-1">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]  xl:w-[81%] 4xl:w-[100%]">How Rialtes LifeAI+ Drives Growth Across Life Sciences</h2>
                        <p className="mt-5  xl:pr-0 font-normal text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                            Whether you are a pharma, medical device manufacturer, biotech firm, or healthcare provider, Rialtes helps you:
                        </p>
                        <ul className="list-disc xl:space-y-4 font-normal marker:font-bold marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight mt-6 ">
                            <li>Automate compliance-heavy processes and improve accuracy.</li>
                            <li>Deliver personalized patient engagement through AI and data-driven insights.</li>
                            <li>Ensure full regulatory compliance for each customer and patient interaction.</li>
                            <li>Streamline HCP and patient journeys using Salesforce Life Sciences Cloud and Health Cloud.</li>
                            <li>Implement AI-based case management and proactive patient support using Agentforce and Data Cloud.</li>
                        </ul>
                    </div>
                </div>
            </section>

    {/* Specialized Expertise for the Future section */}

            <section className="mt-[80px] sm:mt-[90px] md:mt-[95px] bg-[#EDEDED] pb-30">
                <div className="custom-container relative bottom-[-60px]">
                    <h2 className=" pb-6 leading-tight pr-10 xl:pr-0 xl:pt-[30px] xl:pb-0 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[65%] 2xl:w-[60%] 4xl:w-[83%]  ">Specialized Expertise for the Future of Healthcare & Life Sciences</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 xl:mt-16">
                        {featureBoxes.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border hover:border-none border-gray-300 hover:bg-[#D9F2FF] p-12 flex flex-col h-full"
                            >
                                <div className="flex flex-col items-start mb-4">
                                    <h3 className="text-[#0A6BB8] mt-2 leading-tight 4xl:text-[30px] xl:text-[25px] md:text-[20px]   font-semibold">{feature.title}</h3>
                                </div>
                                <p className="mt-2 text-[16px] xl:text-[18px] 4xl:text-[24px] leading-tight">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

     {/* Prior Authorization Management section */}

            <section className="lg:mt-[180px] mt-[140px]">
                <div className="xl:block hidden">
                    <Image
                        className="w-full"
                        src="/images/services/lob/lifeai/prio-desk.webp"
                        alt="Taking the lead"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        className="w-full"
                        src="/images/services/lob/lifeai/prior-mobile.webp"
                        alt="Taking the lead"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                    />
                </div>
                <div className=" custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 bg-[#A16B5D]  text-white xl:pb-16 pb-8 sticky xl:mt-[-100px] pr-3">

                        <div className="col-span-6 xl:pl-20 xl:pt-20 pl-10 pt-10">
                            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">Prior Authorization Management</h2>
                            <h3 className="4xl:text-[42px] xl:text-[30px] text-[20px] mt-5 font-semibold leading-tight">Streamlined, Compliant, Intelligent</h3>
                            <p className="mt-5 font-normal pr-10 xl:pr-0 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" >Prior Authorization (PA) is often a major bottleneck for patients, providers, and payers. Rialtes’ AI-enhanced Prior Authorization solution leverages Salesforce Life Sciences Cloud to automate and streamline the end-to-end PA process, including:</p>
                        </div>
                        <div className="col-span-6  xl:p-16 p-8">
                            <ul className="list-disc leading-tight xl:space-y-4 space-y-2 font-normal marker:font-bold marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] xl:mt-10 xl:pr-14 pr-8">
                                <li>Automated PA Request Intake via multiple channels (portal, phone, EHR).</li>
                                <li>AI-based Case Triage and Eligibility Check for faster PA decisions.</li>
                                <li>Dynamic Collaboration with payers, patients, and providers — all from within Salesforce.</li>
                                <li>Seamless Integration with EMRs, Payers, and Specialty Pharmacies.</li>
                                <li>Real-time PA Status Tracking for patients and care teams.</li>
                                <li>  Audit and Compliance Logs maintained for each PA case.</li>
                            </ul>
                            <div className="xl:mt-10 mt-5">

                                <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <div className=" custom-container relative">
                <div className="xl:px-[110px] max-xl:px-0">
                    <div className="bg-[#163055]  p-8 text-[20px] xl:text-[22px] 4xl:text-[26px]  text-white xl:mt-[-60px] leading-tight">
                        Our PA solution reduces delays, improves patient experience, and ensures faster therapy access — driving better adherence and outcomes.</div>
                    </div>
            </div>

{/* AI-Driven Life Sciences with Salesforce Data Cloud & Agentforce section */}

            <section className="relative h-full xl:h-[909px] overflow-hidden lg:mt-[95px] mt-[80px]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/services/lob/lifeai/ai-driven-desktop.webp"
                        alt="GROW with SAP"
                        className="object-cover"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/services/lob/lifeai/ai-dreven-mobile.webp"
                        alt="GROW with SAP"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div
                    className=" h-full relative custom-container mt-[30rem] md:mt-0">
                    <div className="relative p-8 4xl:w-[907px] xl:w-[725px] h-full mt-[17rem] xl:mt-0 pb-10 ">
                        <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
                        <div className="relative  bg-opacity-80 text-white z-10 xl:p-10 xl:pl-24  rounded-lg">
                            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] pr-5 xl:pr-0">AI-Driven Life Sciences with Salesforce Data Cloud & Agentforce</h2>
                            <p className='mt-5 font-normal text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight'>Rialtes helps organizations integrate Salesforce Data Cloud and Agentforce for Health, unlocking powerful AI-driven capabilities:</p>
                            <ul className="list-disc leading-tight xl:space-y-8 font-normal marker:font-bold marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] mt-5 xl:pr-0 pr-5">
                                <li>AI-Powered Case Management and Patient Services — including predictive insights and intelligent agent assistance.</li>
                                <li>Unified Patient and HCP 360° View — leveraging real-time data consolidation.</li>
                                <li>Personalized Engagement Journeys — adapting to patient behaviors and clinical needs.</li>
                                <li>Proactive Intervention Triggers — powered by AI models using real-time Data Cloud signals.</li>
                            </ul>
                            <p className="mt-8 font-normal leading-tight text-[16px] xl:text-[18px] 4xl:text-[20px]">Together, Data Cloud and Agentforce enable organizations to elevate case management, field services, and patient programs to new heights — simplifying complex workflows and reducing time to treatment.</p>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedSolutionsSection />
            <div className="custom-container text-black py-16">
                <ContactForm title={'Ready to Innovate and Transform?'} subtitle="Join leading life sciences organizations who trust Rialtes LifeAI+ to future-proof their operations, enhance compliance, and improve patient engagement." subtitle1="Contact us today to schedule a personalized strategy session and demo." className={"xl:max-w-[72%] leading-tight font-normal 4xl:text-[56px] xl:text-[40px] text-[26px] "} />
            </div >
        </div >
    );
}