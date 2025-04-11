
"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform"
import Seo from "@/app/components/Seo";
import LearnMore from "@/app/components/learnMore";
import Link from "next/link";


export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Pharma Industry"
            />

            <section className="relative group overflow-hidden h-[350px] lg:h-[650px]">
                <Image
                    src="/images/pharma/pharma header.webp"
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
                        <div className="xl:col-span-6 col-span-12">
                            <h3 className="text-white xl:text-[24px] font-bold mb-2 mt-16">Pharma Industry</h3>
                            <h1 className="text-white xl:text-[60px] leading-tight">
                                Accelerating Pharma Innovation & Compliance
                            </h1>
                            <h3 className="xl:text-[45px] mt-5 text-white font-bold pr-32 leading-tight">Rialtes End-to-End Pharma & Biotech Solutions</h3>

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

                        <p className="xl:text-[22px] text-[16px] mt-5 pr-32">The pharmaceutical and biotech industries are at the forefront of global healthcare, yet they face increasing pressure to innovate faster, remain compliant, and stay patient-centric. Amidst growing competition, changing regulations, and the need for accelerated R&D, technology and AI-driven solutions are becoming pivotal to success.</p>
                        <p className="xl:text-[22px] text-[16px] mt-5 pr-32"> With certified expertise in Salesforce Life Sciences Cloud and SAP S/4 HANA for Pharma, and offices in India, United States, Canada, and Singapore, Rialtes delivers global best practices with local regulatory alignment.</p>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                    </div>
                </div>
            </section>
            <section className="relative group overflow-hidden xl:h-[950px] h-[3850px] mt-20 text-white">
                <Image
                    src="/images/pharma/pharma TL.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                    className="transform transition-transform duration-500 group-hover:scale-110"
                />
                <div
                    className="relative xl:mt-16 mt-8
              ml-[15px] w-[calc(100%-15px)] mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]
              sm:mx-5 sm:w-[calc(100%-40px)]
              xs:mx-4 xs:w-[calc(100%-32px)]"
                >

                    <div className="grid xl:grid-cols-12 grid-cols-1  pt-10 pb-32">
                        <div className="xl:col-span-6 col-span-12 pr-20">
                            <h2 className="text-[60px] mt-10">Thought Leadership:</h2>
                            <h3 className="text-[42px] mt-5 font-bold leading-tight">Advancing Pharma with Digital, AI, and Data-Driven Approaches</h3>
                            <p className="text-[22px] mt-5">Rialtes partners with leading pharma and biotech organizations to unlock the power of AI, machine learning, cloud, and intelligent automation to:</p>
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5">
                                <li>Accelerate product development, regulatory submissions, and commercialization.</li>
                                <li>Build integrated clinical, medical, and commercial operations platforms.</li>
                                <li>Foster patient-centric engagement and outcome-driven care.</li>
                                <li>Ensure real-time regulatory compliance with audit-ready systems.</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="
                  h-full  xl:mr-[142px]
                 "
                    >
                        <p className="xl:text-[25px] bg-[#073259]  p-10 pl-10 text-white mt-[-3rem] absolute w-[90%] pr-32 leading-tight">Our end-to-end approach bridges gaps between R&D, regulatory, commercial, and supply chain functions, delivering a unified platform for better decision-making and faster time to market.</p>


                    </div>
                </div>


            </section>

            <section className="relative h-[350px]  xl:h-[1000px]" >
                <Image
                    src="/images/pharma/why Rialtes (1).webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />
                <div className=" xl:ml-[280px]">
                    <div className="relative p-12 w-[828px] h-[403px]">
                        <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
                        <div className="relative bg-opacity-80 text-white z-10 p-4 rounded-lg">
                            <h2 className="text-[60px] leading-tight">Why Leading Pharma & Biotech Firms Choose Rialtes</h2>
                        </div>
                    </div>
                    <div className=" grid gap-5  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-black  xl:mr-[418px] relative mt-[15rem]
           z-10
     
       ">
                        {[
                            {
                                title: "Certified Salesforce Life Sciences Cloud & SAP S/4 HANA experts with global expertise.",
                            },
                            {
                                title: "Specialized in regulatory, commercial, and clinical process optimization.",

                            },
                            {
                                title: "Advanced AI and data analytics integrations for real-time intelligence.",

                            },
                            {
                                title: "Strong track record of success across major pharmaceutical and biotech organizations.",

                            },
                            {
                                title: "Global footprint to address regional regulatory and operational needs.",

                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-10  rounded shadow">
                                <h3 className="text-[24px] font-bold leading-tight">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>

            </section>




            <div
                className="mt-44
        ml-[15px] w-[calc(100%-15px)] xl:mr-[142px]
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <div className="grid grid-cols-12 ">
                    <div className="col-span-8">
                        <h2 className="text-[60px] leading-tight">Top 4 Strategic Challenges Facing Pharma and Biotech Industry Today</h2>
                    </div>
                </div>
                <div className="  mt-10 pr-[142px]">
                    <div className="grid grid-cols-12  bg-[#CCFFEA]">
                        <div className="col-span-6 p-10 pl-16 pb-16 pr-16">
                            <div className="flex gap-10 items-center">
                                <h2 className="text-[100px] font-bold text-[#415C3D]">1</h2>
                                <h2 className="text-[42px] font-bold leading-tight">Complex and Dynamic Regulatory Compliance</h2>
                            </div>
                            <p className="text-[22px] mt-3">Pharma companies operate in a highly regulated environment that requires real-time data visibility, accurate reporting, and global compliance adherence. Challenges include:</p>
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5">
                                <li>Managing complex, ever-changing global regulatory frameworks (FDA, EMA, MHRA, TGA).</li>
                                <li>Maintaining submission readiness, audit trails, and risk assessments.</li>
                                <li>Lack of integrated platforms to manage quality events, safety reporting, and regulatory submissions.</li>
                            </ul>
                            <div className="mt-5">
                                <LearnMore />
                            </div>

                        </div>
                        <div className="col-span-1"></div>
                        <div className="col-span-4 relative group overflow-hidden">
                            <Image
                                src="/images/pharma/Complex and Dynamic Regulatory Compliance.webp"
                                alt=""
                                fill
                                priority
                                className=" transform transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="col-span-1"></div>


                    </div>
                </div>

            </div>


            <div
                className="mt-3
        ml-[15px] w-[calc(100%-15px)] xl:mr-[142px]
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <div className="mt-10 pr-[142px]">
                    <div className="grid grid-cols-12  bg-[#C3EBFF]">
                        <div className="col-span-1"></div>

                        <div className="col-span-4 relative group overflow-hidden">
                            <Image
                                src="/images/pharma/Accelerating Clinical Trials and R&D Innovation.webp"
                                alt=""
                                fill
                                priority
                                className=" transform transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="col-span-7 p-10 pl-16 pb-16 ">
                            <div className="flex gap-10 items-center">
                                <h2 className="text-[100px] font-bold text-[#086CB4]">2</h2>
                                <h2 className="text-[42px] font-bold leading-tight">Accelerating Clinical Trials and R&D Innovation</h2>
                            </div>
                            <p className="text-[22px] mt-3 pr-10">Bringing therapies to market faster demands better trial management, patient recruitment, and data consolidation. Current issues:</p>
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5">
                                <li>Delays in trial recruitment and site activation.</li>
                                <li>Fragmented systems for trial data and adverse event management.</li>
                                <li>Challenges in ensuring data accuracy for regulatory submissions.</li>
                            </ul>
                            <div className="mt-5">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className="mt-3
        ml-[15px] w-[calc(100%-15px)] xl:mr-[142px]
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >

                <div className="  mt-10 pr-[142px]">
                    <div className="grid grid-cols-12  bg-[#FFF3D8]">
                        <div className="col-span-7 p-10 pl-16 pb-16 pr-32 pt-10">
                            <div className="flex gap-10 items-center">
                                <h2 className="text-[100px] font-bold text-[#B16929]">3</h2>
                                <h2 className="text-[42px] font-bold leading-tight">Commercial and Medical Affairs Engagement Gaps</h2>
                            </div>
                            <p className="text-[22px] mt-3">Engaging HCPs, payers, and patients requires personalized, compliant, and omnichannel engagement strategies. Key issues include:</p>
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5">
                                <li>Disconnected field medical and sales teams limiting coordinated HCP engagement.</li>
                                <li> Lack of visibility into patient support and outcomes.</li>
                                <li>Struggles with medical inquiry and adverse event tracking.</li>
                            </ul>
                            <div className="mt-5">
                                <LearnMore />
                            </div>
                        </div>
                        <div className="col-span-4 relative group overflow-hidden">
                            <Image
                                src="/images/pharma/Commercial and Medical Affairs Engagement Gaps.webp"
                                alt=""
                                fill
                                priority
                                className=" transform transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                </div>
            </div>

            <div
                className="mt-3
        ml-[15px] w-[calc(100%-15px)] xl:mr-[142px]
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <div className="mt-10 pr-[142px]">
                    <div className="grid grid-cols-12  bg-[#C7DEFF]">
                        <div className="col-span-1"></div>

                        <div className="col-span-4 relative group overflow-hidden">
                            <Image
                                src="/images/pharma/Supply Chain, Manufacturing, and Serialization.webp"
                                alt=""
                                fill
                                priority
                                className=" transform transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="col-span-7 p-10 pl-16 pb-16 pr-20">
                            <div className="flex gap-10">
                                <h2 className="text-[100px] font-bold text-[#4E70BA]">4</h2>
                                <h2 className="text-[42px] font-bold leading-tight">Supply Chain, Manufacturing, and Serialization</h2>
                            </div>
                            <p className="text-[22px] mt-3">Pharma companies must ensure product integrity and compliance across the supply chain. Challenges include:</p>
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5">
                                <li>Managing serialization and track & trace mandates.</li>
                                <li>Lack of real-time visibility into inventory and shipments.</li>
                                <li>Inefficiencies in recall, complaint, and adverse event responses.</li>
                            </ul>
                            <div className="mt-5">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </div>








            <section className="relative group overflow-hidden h-[500px] xl:h-[1600px]  mt-5 xl:mt-40 xl:block hidden text-white">
                <Image
                    src="/images/pharma/Deep Expertise (1).webp"
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
                    <div className="grid grid-cols-12  mt-20">
                        <div className="col-span-8">
                            <h2 className="text-[60px] leading-tight">Deep Expertise in Salesforce Life Sciences Cloud & SAP S/4 HANA for Pharma and Biotech</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-5 mt-10 pr-10">
                            <div className="relative">
                                <Image
                                    src="/images/pharma/Life Sciences Cloud.webp"
                                    alt=""
                                    priority
                                    height={0}
                                    width={0}
                                    className="!h-[342px] !w-[532px]"
                                />
                            </div>
                            <h3 className="text-[40px] mt-10 font-bold leading-tight">Salesforce Life Sciences Cloud </h3>
                            <h3 className="mt-5 text-[35px] leading-tight">Unifying Commercial, Clinical, and Medical Operations</h3>
                            <p className="text-[22px] mt-5">Rialtes leverages Salesforce to build integrated platforms that enable:</p>
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 pr-10">
                                <li>AUnified HCP engagement, CRM, and field force coordination.</li>
                                <li>Patient services case management and support program automation.</li>
                                <li>Clinical trial management, including participant engagement and RWE (Real World Evidence).</li>
                                <li>Regulatory complaint handling, pharmacovigilance, and adverse event tracking.</li>
                            </ul>
                        </div>
                        <div className="col-span-1">
                        </div>
                        <div className="col-span-5 mt-64 relative pr-10">
                            <div className="relative">
                                <Image
                                    src="/images/pharma/sap-con.webp"
                                    alt=""
                                    priority
                                    height={0}
                                    width={0}
                                    className="!h-[342px] !w-[532px]"
                                />
                            </div>
                            <h3 className="text-[40px] mt-10 font-bold">SAP S/4 HANA for Pharma </h3>
                            <h3 className="mt-5 text-[35px] leading-tight">Ensuring Compliance, Quality, and Operational Excellence</h3>
                            <p className="text-[22px] mt-5">Our SAP expertise helps pharmaceutical firms streamline:</p>
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 pr-10">
                                <li>Serialization and global supply chain compliance.</li>
                                <li>Quality management and batch release processes.</li>
                                <li> Order-to-cash, inventory, and manufacturing operations with embedded compliance.</li>
                                <li>Global regulatory and audit reporting.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <div
                className="
                  h-full  xl:mr-[142px]
                 xl:ml-[280px] 
                 ">
                <p className="xl:text-[26px] bg-[#0E3157]  p-10 pl-10 text-white mt-[-4rem] absolute w-[50%] leading-tight">Together, Salesforce and SAP integrations ensure seamless, compliant processes from R&D to commercialization.</p></div>






            <div
                className="container mt-48
                              h-full relative
                             ml-[15px] w-[calc(100%-15px)] mr-0
                             xl:ml-[280px] xl:w-[calc(100%-280px)]
                             md:ml-[100px] md:w-[calc(100%-100px)]
                             sm:mx-5 sm:w-[calc(100%-40px)]
                             xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-7 col-span-12">
                        <h2 className="text-[60px] pr-10 leading-tight">
                            How AI is Revolutionizing the Pharma Industry
                        </h2>
                    </div>
                    <div className="xl:col-span-1 col-span-12">
                    </div>
                    <div className="xl:col-span-3 col-span-12">
                        <p className="text-[22px]">AI is driving significant value in pharma, transforming how companies innovate, engage, and manage compliance.</p>
                    </div>
                </div>

            </div>


            <div
                className="!h-[650px] text-white group overflow-hidden mt-10
                               relative
                              ml-[15px]  mr-[142px]
                             xl:ml-[280px]"
            >
                <Image
                    src="/images/pharma/Key AI Impact.webp"
                    alt="GROW with SAP"
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                    className="transform transition-transform duration-500 group-hover:scale-110"
                />

                <div className="grid xl:grid-cols-12 grid-cols-1 relative">
                    <div className="col-span-6 p-10 pr-0 pt-20">
                        <h3 className="text-[40px] font-bold">Key AI Impact Areas in Pharma:</h3>
                        <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 pr-20">
                            <li>Accelerating drug discovery using AI-powered molecular analysis and predictive modeling.</li>
                            <li> Optimizing clinical trial design and patient recruitment through AI-based site selection and eligibility matching.</li>
                            <li> Enhancing pharmacovigilance via AI-driven adverse event detection and automated reporting.</li>
                            <li> Personalizing HCP and patient interactions using AI-based behavior and needs analysis.</li>
                        </ul>
                        <button className="bg-white hover:bg-[#ffffff] text-[20px]  hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-black py-3 px-8 transition duration-300 order-4 mt-10">
                            <Link href='/contact-us'>Learn More</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="!h-[534px] text-black group overflow-hidden
                               relative 
                             ml-[15px]  mr-[142px]
                             xl:ml-[280px]"
            >
                <Image
                    src="/images/pharma/Benefits of AI.webp"
                    alt="GROW with SAP"
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                    className="transform transition-transform duration-500 group-hover:scale-110"
                />

                <div className="grid xl:grid-cols-12 grid-cols-1 relative">
                    <div className="col-span-6 p-10 pt-20">
                    </div>
                    <div className="col-span-6 p-10 pt-20">
                        <h3 className="text-[40px] font-bold">Benefits of AI in Pharma:</h3>
                        <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 pr-20">
                            <li>Faster drug development and reduced R&D costs.</li>
                            <li> Improved regulatory submission quality and timelines.</li>
                            <li> Enhanced HCP and patient engagement through data-driven insights.</li>
                            <li>  Increased compliance and risk mitigation via predictive analytics.</li>
                        </ul>
                        <div className="mt-5">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#0C8AD4] mt-48 h-[1520px]">
                <div
                    className="!h-[534px] text-white
                               relative 
                             ml-[15px]  mr-[142px]
                             xl:ml-[280px]"
                >

                    <div className="grid grid-cols-12 gap-32">
                        <div className="col-span-6 mt-[-4rem]">
                            <div className="group overflow-hidden relative">
                                <Image
                                    src="/images/pharma/Patient-Centric Mobile Apps .webp"
                                    alt=""
                                    priority
                                    height={0}
                                    width={0}
                                    className="!h-[472px] !w-[670px] transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                                />
                            </div>

                            <h2 className="mt-10 text-[60px] pr-32 leading-tight">Patient-Centric Mobile Apps</h2>
                            <h3 className="text-[42px] mt-10 font-medium leading-tight">Driving Outcomes and Real-World Evidence </h3>

                            <p className="text-[22px] mt-10">Modern pharma needs secure mobile apps for engaging patients and collecting outcomes. Rialtes designs apps to:</p>
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 pr-10">
                                <li>Capture patient-reported outcomes (PROs) and monitor adherence.</li>
                                <li>Facilitate medication reminders and educational content delivery.</li>
                                <li>Enable real-time communication with patient care teams.</li>
                                <li>Collect real-world evidence (RWE) for regulatory and clinical use.</li>
                            </ul>
                            <p className="bg-[#163055] text-[26px] p-10 pl-16 mt-10 leading-tight">Mobile apps ensure better engagement, adherence, and outcome measurement.</p>
                        </div>

                        <div className="col-span-6 mt-64">
                            <div className="relative group overflow-hidden">
                                <Image
                                    src="/images/pharma/Remote Monitoring.webp"
                                    alt=""
                                    priority
                                    height={0}
                                    width={0}
                                    className="!h-[472px] !w-[670px] transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h2 className="mt-10 text-[60px] leading-tight">Remote Monitoring & Real-World Data Collection</h2>
                            <p className="text-[22px] mt-10">Remote monitoring allows pharma companies to track product effectiveness and patient safety in real-time:</p>
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 pr-10">
                                <li>Monitor connected devices and digital therapeutics.</li>
                                <li>Collect adherence, biometrics, and usage data directly from patients.</li>
                                <li>Early detection of adverse events or non-compliance.</li>
                                <li>Real-world usage insights for regulatory and R&D feedback loops.</li>
                            </ul>
                            <p className="bg-[#163055] text-[26px] p-10 pl-16 mt-16 leading-tight">Enhancing patient safety, outcomes, and evidence generation.</p>

                        </div>
                    </div>
                </div>
            </div>


            <div
                className="container mt-40 
                              h-full relative
                             ml-[15px] w-[calc(100%-15px)] mr-0
                             xl:ml-[280px] xl:w-[calc(100%-280px)]
                             md:ml-[100px] md:w-[calc(100%-100px)]
                             sm:mx-5 sm:w-[calc(100%-40px)]
                             xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <div className="grid grid-cols-12">
                    <div className="col-span-5">
                        <div className="group overflow-hidden relative">
                            <Image
                                src="/images/pharma/AgentChat (1).webp"
                                alt=""
                                priority
                                height={0}
                                width={0}
                                className="!h-[791px] !w-[670px] transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                    </div>
                    <div className="col-span-5">
                        <h2 className="text-[50px]">AgentChat</h2>
                        <h3 className="text-[42px] font-bold leading-tight">Real-Time WhatsApp Integration for Pharma</h3>
                        <p className="text-[22px] mt-10 pr-10">AgentChat Rialtes’ WhatsApp integration solution, supports secure and compliant engagement:</p>
                        <h3 className="text-[30px] font-bold mt-10">Key Features:</h3>
                        <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 font-medium pr-12">
                            <li>Automated patient communications: reminders, surveys, education.</li>
                            <li>Direct HCP support: samples, inquiries, updates.</li>
                            <li>Adverse event and complaint reporting via chat.</li>
                            <li>Sharing consent forms, regulatory documents, and education materials.</li>
                        </ul>
                        <div>
                            <button className="bg-[#134874] hover:bg-[#ffffff] text-[20px] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6">
                                <Link href='/products/agentchat'>Know More</Link>
                            </button>
                        </div>

                    </div>

                </div>
                <div className="h-full  xl:mr-[142px]">
                    <p className="xl:text-[25px] bg-[#068EDA]  p-10 pl-10 text-white mt-[-2rem] absolute w-[75%] pr-12 leading-tight">AgentChat enables real-time omnichannel patient and HCP engagement — securely and compliantly.</p>
                </div>
            </div>


            <div className="bg-[#184671] text-white pb-10">
                <div
                    className="mt-[30px]
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black py-20"
                >
                    <div className="group overflow-hidden relative mt-32">
                        <Image
                            src="/images/pharma/Agentforce pharma.webp"
                            alt=""
                            priority
                            height={0}
                            width={0}
                            className="!h-[665px] !w-full transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                        />
                    </div>
                    <div className="grid grid-cols-12 mt-10 text-white">
                        <div className="col-span-5">
                            <h2 className="text-[50px]">Salesforce Agentforce </h2>
                            <h3 className="text-[42px] leading-tight">Supercharging Pharma Sales, Medical Affairs, and Support</h3>
                            <div className="mt-5">
                                <button className="bg-white hover:bg-[#ffffff] text-[20px] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-black py-3 px-8 transition duration-300 order-4 mt-6">
                                    <Link href='/solutions/artificial-intelligence/salesforce-agentforce-consulting'>Know More</Link>
                                </button>
                            </div>

                        </div>
                        <div className="col-span-1">
                        </div>
                        <div className="col-span-6">
                            <p className="text-[22px] mt-5 font-light">Agentforce, Rialtes’ advanced Salesforce solution, helps pharma sales, medical affairs, and support teams:</p>
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 font-medium">
                                <li>Manage HCP targeting, engagement, and follow-up activities.</li>
                                <li>Coordinate medical science liaison (MSL) visits and education programs.</li>
                                <li>Automate compliant marketing and medical content distribution.</li>
                                <li>Track customer interactions and feedback in real-time.
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="h-full  xl:mr-[142px]">
                        <p className="xl:text-[25px] bg-[#068EDA]  p-10 pl-10 text-white mt-[4rem] absolute w-[65%] pr-40 leading-tight">Agentforce enhances field force effectiveness and ensures compliant, personalized HCP interactions.</p>
                    </div>
                </div>

            </div>



            {/* Contact Form */}
            <div
                className="mt-32
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black py-20"
            >
                <ContactForm title={'Partner with Rialtes — Enabling Next-Gen Pharma and Biotech Excellence'} className={"max-w-[62rem] font-medium text-[60px] leading-tight"} />
            </div >
        </div >
    );
}