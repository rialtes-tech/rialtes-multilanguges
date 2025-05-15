


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
        <section
            className={`
          xl:ml-[280px] xl:mr-[170px] md:mx-[100px]  mx-[35px] xl:mx-0 xl:mt-[94px] mt-8  pt-[49px]  pb-[59px] 
        `}
        >
            <h2 className="leading-tight text-black pr-10 xl:pr-0">
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
                                <h3 className="text-black font-semibold">
                                    {item.title}
                                </h3>
                                <p className="text-black mt-10 font-normal pr-20">
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



                <div
                    className="
         h-full relative
        mx-[35px] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
       "
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-20">
                        <div className="xl:col-span-5 col-span-12 mt-32">
                            <h3 className="text-white xl:text-[24px] text-[18px] font-bold mb-2">LifeAI+</h3>
                            <h1 className="text-white leading-tight pr-32 xl:pr-0 mt-5">
                                Transforming Life Sciences with Rialtes LifeAI+ Services
                            </h1>
                        </div>
                        <div className="xl:col-span-7 col-span-12">
                        </div>
                    </div>

                </div>
            </section>




            <section
                className="mt-16
               mx-[35px]  xl:mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]
             
             "
            >

                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-7 col-span-12 xl:pr-16">
                        <h2 className="leading-tight">
                            Accelerating Innovation, Compliance, and Growth in Life Sciences with AI and Salesforce Cloud Solutions
                        </h2>
                        <p className="mt-5 xl:pr-0 pr-8">At Rialtes, we understand that the life sciences industry is rapidly evolving — with growing expectations from patients, providers, regulators, and partners. To meet these demands, organizations need intelligent, AI-driven solutions that integrate compliance, personalization, and automation at scale.</p>
                        <p className="mt-5 xl:pr-0 pr-8">Introducing Rialtes LifeAI+, our comprehensive consulting service tailored for life sciences enterprises, combining deep industry expertise with Salesforce Life Sciences Cloud, Health Cloud, and AI-powered solutions to help you drive innovation, ensure compliance, and enhance operational efficiency.</p>

                    </div>
                    <div className="xl:col-span-2 col-span-12">
                    </div>
                </div>

            </section>

            <section className="relative  xl:h-[980px]  mt-20 h-auto pb-[500px]">
                <div>
                    <Image
                        src="/images/services/lob/lifeai/what-is.webp"
                        alt="GROW with SAP"
                        fill
                        priority
                    />
                </div>
                <div className="xl:ml-[280px] bg-[#0F71BF] text-white absolute xl:mr-[418px] xl:p-20 p-10 xl:top-[15rem] top-[30rem] w-full xl:w-[1222px]">
                    <h2>What is LifeAI+?</h2>
                    <p className="mt-5 font-normal xl:pr-20 pr-10">A 360° consulting service that unites Advisory, Design, Implementation, Quality Assurance, Integration, and Post-Go-Live Support — ensuring continuous value creation and innovation across your life sciences value chain.</p>
                    <h3 className="xl:text-[36px] text-[22px] font-semibold mt-5">Our End-to-End Services Include:</h3>
                    <div className="grid xl:grid-cols-12 grid-cols-1 mt-10 gap-10">
                        <div className="xl:col-span-4 col-span-12">
                            <p className="font-bold xl:border-r-[2px]  pb-8 border-white xl:pr-10 pr-[12rem]">Strategic Advisory & Roadmap Development</p>
                            <div className="absolute  h-[2px] bg-white w-[20%] xl:hidden"></div>

                            <p className="font-bold mt-10 xl:border-r-[2px]  pb-8  border-white xl:pr-10 pr-[12rem]">Regulatory Compliance & Quality Assurance</p>
                            <div className="absolute  h-[2px] bg-white w-[20%] xl:hidden"></div>

                            <p className="font-bold mt-10 xl:pr-10 pr-[12rem] pb-5">Ongoing Support & Optimization for Continuous Improvement</p>
                            <div className="absolute  h-[2px] bg-white w-[20%] xl:hidden"></div>

                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <p className="font-bold xl:border-r-[2px]  border-white xl:pr-10 pr-[12rem] pb-5 xl:pb-0">Salesforce Life Sciences Cloud & Health Cloud Implementation</p>
                            <div className="absolute  h-[2px] bg-white w-[20%] xl:hidden"></div>

                            <p className="font-bold mt-10 xl:border-r-[2px]  border-white  xl:pr-10 pr-[12rem] pb-5 xl:pb-0">System Integration with Backend ERP, EMR, and Partner Platforms</p>
                            <div className="absolute  h-[2px] bg-white w-[20%] xl:hidden"></div>

                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <p className="font-bold   pb-5 xl:pr-10 pr-[12rem]">User-Centric Experience & Journey Design</p>
                            <div className="absolute  h-[2px] bg-white w-[20%] xl:hidden"></div>

                            <p className="mt-10 font-bold xl:pr-10 pr-[12rem]">AI-Powered Insights & Analytics through Data Cloud</p>
                            <div className="flex xl:justify-center mt-5 xl:mt-[60px]">  <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} /></div>


                        </div>

                    </div>
                </div>
            </section>

            {/* why partner with rialtes */}
            <section className="xl:mt-40 mt-[86rem]">
                <div className="grid xl:grid-cols-12 grid-cols-1">

                    {/* IMAGE FIRST ON MOBILE, SECOND ON DESKTOP */}
                    <div className="col-span-5 order-1 xl:order-2">
                        <Image
                            className="w-full xl:object-[35%_20%] object-cover"
                            src="/images/services/lob/lifeai/why-partner-desktop.webp"
                            alt="Taking the lead"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>

                    {/* CONTENT SECOND ON MOBILE, FIRST ON DESKTOP */}
                    <div className="col-span-7 bg-[#073259] text-white order-2 xl:order-1 pb-20 xl:pb-0">
                        <div className="xl:ml-[280px] xl:pt-16 pt-10 xl:pr-[18rem] mx-[35px] xl:mx-0">
                            <h2 className="leading-tight pr-16 xl:pr-0">Why Partner with Rialtes?</h2>
                            <ul className="list-disc leading-tight xl:space-y-4 font-normal marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-12 xl:pr-0">
                                <li>Certified Salesforce Partner with global offices in United States, Canada, India, and Singapore.</li>
                                <li>Highly Certified Salesforce Health Cloud and Life Sciences Cloud Experts.</li>
                                <li>Deep expertise in payer, provider, medical devices, pharmaceuticals, biotech, and insurance sectors.</li>
                                <li>Proven ability to deliver secure, compliant, AI-driven life sciences solutions.</li>
                                <li>Strong focus on AI, automation, and patient-centric innovation.</li>
                            </ul>
                            <div className="mt-5 absolute">
                                <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* deep section */}
            <section className="mt-24 relative">
                <div className="xl:mr-[280px]">
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
                            className="w-full h-[400px]"
                            src="/images/services/lob/lifeai/deep-mobile.webp"
                            alt="Taking the lead"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:ml-[280px] px-[35px] mx-[35px] xl:mx-0 xl:px-0 bg-[#0690C9] text-white xl:pb-20 pb-10 mt-[-120px] absolute">
                    <div className="xl:col-span-1 col-span-12"></div>
                    <div className="xl:col-span-4 col-span-12 mt-10">
                        <h2 className="leading-tight pr-16 xl:pr-0">Deep Expertise in Salesforce Life Sciences Cloud</h2>
                        <p className="mt-5 font-normal pr-10 xl:pr-0">We help life sciences organizations maximize Salesforce Life Sciences Cloud, configuring its industry-specific modules to streamline workflows and improve compliance:</p>
                        <div className="mt-16 xl:block hidden">
                            <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                    <div className="xl:col-span-1 col-span-12"></div>
                    <div className="xl:col-span-5 col-span-12 xl:mt-10 mt-5">
                        <h3 className="xl:text-[36px] text-[22px] font-semibold leading-tight xl:pr-16">Key Salesforce Life Sciences Cloud Modules We Specialize In:</h3>
                        <ul className="list-disc leading-tight xl:space-y-4 font-normal marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-10 xl:pr-0">
                            <li>Care Program & Patient Services Management</li>
                            <li>Provider & Healthcare Professional (HCP) Relationship Management</li>
                            <li>Clinical Support & Device Case Management</li>
                            <li>Medical Affairs & Field Team Enablement</li>
                            <li>Omnichannel Communication for Patients and Providers</li>
                            <li>Product Complaint & Inquiry Handling</li>
                            <li>Investigator & KOL Management</li>
                            <li>AI-Driven Data Insights with Salesforce Data Cloud
                            </li>
                        </ul>
                        <div className="xl:hidden block">
                            <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                    <div className="xl:col-span-1 col-span-12"></div>


                </div>
            </section>


            <section className="xl:mx-[280px] xl:mt-[38rem] mt-[58rem] mx-[35px]">
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
                        <h2 className="leading-tight pr-16">How Rialtes LifeAI+ Drives Growth Across Life Sciences</h2>
                        <p className="mt-5 leading-tight pr-10 xl:pr-0 font-normal">
                            Whether you are a pharma, medical device manufacturer, biotech firm, or healthcare provider, Rialtes helps you:
                        </p>
                        <ul className="list-disc leading-tight xl:space-y-4 font-normal marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-10 pr-14">
                            <li>Automate compliance-heavy processes and improve accuracy.</li>
                            <li>Deliver personalized patient engagement through AI and data-driven insights.</li>
                            <li>Ensure full regulatory compliance for each customer and patient interaction.</li>
                            <li>Streamline HCP and patient journeys using Salesforce Life Sciences Cloud and Health Cloud.</li>
                            <li>Implement AI-based case management and proactive patient support using Agentforce and Data Cloud.</li>
                        </ul>
                    </div>

                </div>
            </section>

            <section className="mt-20 bg-[#EDEDED] xl:h-[1200px] h-[2100px]">
                <div className="xl:ml-[280px] xl:mr-[418px] mx-[35px] xl:mx-0">
                    <h2 className="pt-20 pb-10 leading-tight pr-10 xl:pr-0">Specialized Expertise for the Future of Healthcare & Life Sciences</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-5 gap-8 xl:mt-16">
                        {featureBoxes.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border hover:border-none border-gray-300 hover:bg-[#D9F2FF] p-12 flex flex-col h-full"
                            >
                                <div className="flex flex-col items-start mb-4">
                                    <h3 className="text-[#0A6BB8] mt-2 leading-tight font-semibold">{feature.title}</h3>
                                </div>
                                <p className="mt-2">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="xl:mt-48 mt-[17rem] relative">
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
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:mx-[280px] mx-[35px] bg-[#A16B5D] text-white xl:pb-16 pb-8 sticky xl:mt-[-100px]">
                    <div className="col-span-6 xl:pl-20 xl:pt-20 pl-10 pt-10">
                        <h2 className="leading-tight">Prior Authorization Management</h2>
                        <h3 className="xl:text-[42px] text-[20px] mt-5 font-semibold leading-tight">Streamlined, Compliant, Intelligent</h3>
                        <p className="mt-5 font-normal pr-10 xl:pr-0" >Prior Authorization (PA) is often a major bottleneck for patients, providers, and payers. Rialtes’ AI-enhanced Prior Authorization solution leverages Salesforce Life Sciences Cloud to automate and streamline the end-to-end PA process, including:</p>
                    </div>
                    <div className="col-span-6  xl:p-16 p-8">
                        <ul className="list-disc leading-tight xl:space-y-4 space-y-2 font-normal marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 xl:pr-14 pr-8">
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
            </section>
            <div className="xl:mx-[418px] bg-[#163055] mx-[35px] relative p-8 xl:text-[26px] text-[20px] text-white xl:mt-[-60px] leading-tight">Our PA solution reduces delays, improves patient experience, and ensures faster therapy access — driving better adherence and outcomes.</div>



            <section className="relative h-[1207px] xl:h-[970px] overflow-hidden mt-20">
                <div className="xl:block hidden">
                    <Image
                        src="/images/services/lob/lifeai/ai-driven-desktop.webp"
                        alt="GROW with SAP"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/services/lob/lifeai/ai-dreven-mobile.webp"
                        alt="GROW with SAP"
                        fill
                        priority
                    />
                </div>
                <div
                    className="
        h-full relative
        xl:ml-[142px]
        mx-[35px] xl:mx-0
        md:ml-[100px] md:w-[calc(100%-100px)]
       "
                >
                    <div className="relative p-6 xl:w-[907px] mt-[17rem] xl:mt-0 pb-10">
                        <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>

                        <div className="relative  bg-opacity-80 text-white z-10 xl:p-16 xl:pl-24 p-5 rounded-lg">
                            <h2 className="leading-tight pr-5 xl:pr-0">AI-Driven Life Sciences with Salesforce Data Cloud & Agentforce</h2>
                            <p className='mt-5 font-normal'>Rialtes helps organizations integrate Salesforce Data Cloud and Agentforce for Health, unlocking powerful AI-driven capabilities:</p>
                            <ul className="list-disc leading-tight xl:space-y-8 font-normal marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 xl:pr-0 pr-5">
                                <li>AI-Powered Case Management and Patient Services — including predictive insights and intelligent agent assistance.</li>
                                <li>Unified Patient and HCP 360° View — leveraging real-time data consolidation.</li>
                                <li>Personalized Engagement Journeys — adapting to patient behaviors and clinical needs.</li>
                                <li>Proactive Intervention Triggers — powered by AI models using real-time Data Cloud signals.</li>
                            </ul>
                            <p className="mt-8 font-normal">Together, Data Cloud and Agentforce enable organizations to elevate case management, field services, and patient programs to new heights — simplifying complex workflows and reducing time to treatment.</p>
                        </div>
                    </div>

                </div>
            </section>

            <RelatedSolutionsSection />
            <div className="
  mx-[35px] xl:mx-0 xl:mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
 
  text-black py-16"

            >
                <ContactForm title={'Ready to Innovate and Transform?'} subtitle="Join leading life sciences organizations who trust Rialtes LifeAI+ to future-proof their operations, enhance compliance, and improve patient engagement." subtitle1="Contact us today to schedule a personalized strategy session and demo." className={"xl:max-w-[72%] leading-tight  xl:text-[59px] text-[26px]"} />
            </div >
        </div >
    );
}