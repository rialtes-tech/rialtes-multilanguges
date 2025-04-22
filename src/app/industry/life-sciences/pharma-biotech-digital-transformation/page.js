
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

            <section className="relative group overflow-hidden h-[399px] lg:h-[650px]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/pharma/pharma header.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/pharma/Header Pharma.webp"
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
                    <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20 xl:mt-20 mt-3">
                        <div className="xl:col-span-6 col-span-12">
                            <h3 className="text-white xl:text-[24px] text-[18px] font-bold mb-2 mt-16">Pharma Industry</h3>
                            <h1 className="text-white xl:text-[60px]  text-[24px] leading-tight pr-10 xl:pr-0">
                                Accelerating Pharma Innovation & Compliance
                            </h1>
                            <h3 className="xl:text-[45px] text-[18px] mt-5 text-white font-bold  leading-tight pr-32">Rialtes End-to-End Pharma & Biotech Solutions</h3>

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

                        <p className="xl:text-[22px] text-[16px] mt-5 xl:pr-32 pr-8 font-medium xl:font-normal">The pharmaceutical and biotech industries are at the forefront of global healthcare, yet they face increasing pressure to innovate faster, remain compliant, and stay patient-centric. Amidst growing competition, changing regulations, and the need for accelerated R&D, technology and AI-driven solutions are becoming pivotal to success.</p>
                        <p className="xl:text-[22px] text-[16px] mt-5 xl:pr-32 pr-8 font-medium xl:font-normal"> With certified expertise in Salesforce Life Sciences Cloud and SAP S/4 HANA for Pharma, and offices in India, United States, Canada, and Singapore, Rialtes delivers global best practices with local regulatory alignment.</p>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                    </div>
                </div>
            </section>
            <section className="relative group overflow-hidden xl:h-[950px] h-[1170px] xl:mt-20 mt-16 text-white">
                <div className="xl:block hidden">
                    <Image
                        src="/images/pharma/pharma TL.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/pharma/TL (2).webp"
                        alt=""
                        fill
                        priority
                    />
                </div>
                <div
                    className="relative xl:mt-16 mt-80
              mx-[35px] xl:mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]"
                >

                    <div className="grid xl:grid-cols-12 grid-cols-1  pt-10 pb-[8rem]">
                        <div className="xl:col-span-6 col-span-12 xl:pr-20">
                            <h2 className="xl:text-[60px] text-[26px] xl:mt-10 mt-5">Thought Leadership:</h2>
                            <h3 className="xl:text-[42px] text-[22px] xl:mt-5 mt-3 font-bold leading-tight">Advancing Pharma with Digital, AI, and Data-Driven Approaches</h3>
                            <p className="xl:text-[22px] text-[16px] mt-5 leading-tight pr-10 xl:pr-0">Rialtes partners with leading pharma and biotech organizations to unlock the power of AI, machine learning, cloud, and intelligent automation to:</p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-10 xl:pr-0 leading-tight">
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
                        <p className="xl:text-[25px] text-[18px] bg-[#073259]  p-10 pl-10 text-white xl:mt-[-3rem] mt-[-5rem] absolute xl:w-[90%] xl:pr-32 leading-tight">Our end-to-end approach bridges gaps between R&D, regulatory, commercial, and supply chain functions, delivering a unified platform for better decision-making and faster time to market.</p>


                    </div>
                </div>


            </section>

            <section className="relative h-[1165px]  xl:h-[1000px] mt-16 xl:mt-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/pharma/why Rialtes (1).webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/pharma/why rialtes (3).webp"
                        alt=""
                        fill
                        priority
                    />
                </div>
                <div className=" xl:ml-[280px] mx-[35px]">
                    <div className="relative p-12 xl:w-[828px] xl:h-[403px]">
                        <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
                        <div className="relative bg-opacity-80 text-white z-10 xl:p-4 rounded-lg">
                            <h2 className="xl:text-[60px] text-[26px] leading-tight">Why Leading Pharma & Biotech Firms Choose Rialtes</h2>
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
                            <div key={index} className="bg-white xl:p-10 p-[40px]  rounded border border-black">
                                <h3 className="xl:text-[24px] text-[20px] font-bold leading-tight">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>

            </section>




            <div
                className="xl:mt-44 mt-[22rem]
        xl:mr-[142px]
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]">
                <div className="grid xl:grid-cols-12 grid-cols-1 pl-[35px]">
                    <div className="xl:col-span-8 col-span-12">
                        <h2 className="xl:text-[60px] text-[26px] leading-tight pr-20 xl:pr-0">Top 4 Strategic Challenges Facing Pharma and Biotech Industry Today</h2>
                    </div>
                </div>
                <div className="xl:mt-10 mt-16 xl:pr-[142px]">
                    <div className="grid xl:grid-cols-12 grid-cols-1 bg-[#CCFFEA]">
                        <div className="xl:col-span-1 col-span-12 order-1 xl:order-2"></div>
                        <div className="xl:col-span-4 col-span-12 relative group overflow-hidden order-1 xl:order-2">
                            <div className="xl:block hidden">
                                <Image
                                    src="/images/pharma/Complex and Dynamic Regulatory Compliance.webp"
                                    alt=""
                                    priority
                                    className="w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                                    fill
                                />
                            </div>
                            <div className="xl:hidden block">
                                <Image
                                    src="/images/pharma/Complex and Dynamic .webp"
                                    alt=""
                                    priority
                                    width={600}
                                    height={400}
                                    className="w-[350px] h-[252px] mx-auto"
                                />
                            </div>
                        </div>

                        <div className="xl:col-span-6 col-span-12 p-10 xl:pl-16 pt-3 pb-16 pr-16 order-2 xl:order-1">
                            <div className="flex xl:gap-10 gap-3 xl:items-center xl:flex-row flex-col">
                                <h2 className="xl:text-[100px] text-[60px] font-bold text-[#415C3D]">1</h2>
                                <h2 className="xl:text-[42px] text-[28px] xl:font-bold font-medium leading-tight pr-5 xl:pr-0">Complex and Dynamic Regulatory Compliance</h2>
                            </div>
                            <p className="xl:text-[22px] text-[16px] leading-tight mt-5 xl:mt-3 font-medium xl:font-normal">
                                Pharma companies operate in a highly regulated environment that requires real-time data visibility, accurate reporting, and global compliance adherence. Challenges include:
                            </p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 font-medium xl:font-normal leading-tight">
                                <li>Managing complex, ever-changing global regulatory frameworks (FDA, EMA, MHRA, TGA).</li>
                                <li>Maintaining submission readiness, audit trails, and risk assessments.</li>
                                <li>Lack of integrated platforms to manage quality events, safety reporting, and regulatory submissions.</li>
                            </ul>
                        </div>

                        <div className="xl:col-span-1 col-span-12 order-3"></div>
                    </div>
                </div>
            </div>


            <div
                className="mt-3
         xl:mr-[142px]
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]"
            >
                <div className="xl:mt-10 mt-6 xl:pr-[142px]">
                    <div className="grid xl:grid-cols-12 grid-cols-1  bg-[#C3EBFF]">
                        <div className="xl:col-span-1 col-span-12"></div>
                        <div className="xl:col-span-4 col-span-12 relative group overflow-hidden">
                           <div className="xl:block hidden">
                            <Image
                                src="/images/pharma/Accelerating Clinical Trials and R&D Innovation.webp"
                                alt=""
                                fill
                                priority
                                className=" transform transition-transform duration-500 group-hover:scale-110"
                            />
                            </div>
                            <div className="xl:hidden block">
                            <div className="xl:hidden block">
                                <Image
                                    src="/images/pharma/Accelerating Clinical.webp"
                                    alt=""
                                    priority
                                    width={600}
                                    height={400}
                                    className="w-[350px] h-[252px] mx-auto"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="xl:col-span-7 col-span-12 p-10 pt-3 xl:pl-16 pb-16 ">
                            <div className="flex xl:gap-10 gap-3 xl:items-center xl:flex-row flex-col">
                                <h2 className="xl:text-[100px] text-[60px] font-bold text-[#086CB4]">2</h2>
                                <h2 className="xl:text-[42px] text-[28px] xl:font-bold font-medium leading-tight">Accelerating Clinical Trials and R&D Innovation</h2>
                            </div>
                            <p className="xl:text-[22px] text-[16px] xl:mt-3 mt-5 pr-10">Bringing therapies to market faster demands better trial management, patient recruitment, and data consolidation. Current issues:</p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-8 xl:pr-0 leading-tight">
                                <li>Delays in trial recruitment and site activation.</li>
                                <li>Fragmented systems for trial data and adverse event management.</li>
                                <li>Challenges in ensuring data accuracy for regulatory submissions.</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>


            <div
                className="mt-3
        xl:mr-[142px]
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]"
            >

                <div className="xl:mt-10 mt-8 xl:pr-[142px]">
                    <div className="grid xl:grid-cols-12 grid-cols-1  bg-[#FFF3D8]">
                    <div className="xl:col-span-1 col-span-12 order-1 xl:order-2"></div>
                        <div className="xl:col-span-4 col-span-12 relative group overflow-hidden order-1 xl:order-2">
                            <div className="xl:block hidden">
                                <Image
                                    src="/images/pharma/Commercial and Medical Affairs Engagement Gaps.webp"
                                    alt=""
                                    priority
                                    className="w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                                    fill
                                />
                            </div>
                            <div className="xl:hidden block">
                                <Image
                                    src="/images/pharma/Commercial and Medical.webp"
                                    alt=""
                                    priority
                                    width={600}
                                    height={400}
                                    className="w-[350px] h-[252px] mx-auto"
                                />
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-12 p-10 xl:pl-16 pt-3 pb-16 pr-16 order-2 xl:order-1">
                            <div className="flex xl:gap-10 gap-3 xl:items-center xl:flex-row flex-col">
                                <h2 className="xl:text-[100px] text-[60px] font-bold text-[#B16929]">3</h2>
                                <h2 className="xl:text-[42px] text-[28px] xl:font-bold  font-medium leading-tight">Commercial and Medical Affairs Engagement Gaps</h2>
                            </div>
                            <p className="xl:text-[22px] text-[16px] xl:mt-3 mt-5">Engaging HCPs, payers, and patients requires personalized, compliant, and omnichannel engagement strategies. Key issues include:</p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] leading-tight text-[16px] mt-5 pr-4 xl:pr-0">
                                <li>Disconnected field medical and sales teams limiting coordinated HCP engagement.</li>
                                <li> Lack of visibility into patient support and outcomes.</li>
                                <li>Struggles with medical inquiry and adverse event tracking.</li>
                            </ul>

                        </div>
                       
                        <div className="xl:col-span-1 col-span-12 order-3"></div>
                    </div>
                </div>
            </div>

            <div
                className="mt-3
        xl:mr-[142px]
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]"
            >
                <div className="mt-10 xl:pr-[142px]">
                    <div className="grid xl:grid-cols-12 grid-cols-1  bg-[#C7DEFF]">
                        <div className="col-span-1"></div>

                        <div className="xl:col-span-4 col-span-12 relative group overflow-hidden">
                            <div className="xl:block hidden">
                            <Image
                                src="/images/pharma/Supply Chain, Manufacturing, and Serialization.webp"
                                alt=""
                                fill
                                priority
                                className=" transform transition-transform duration-500 group-hover:scale-110"
                            />
                            </div>
                            <div className="xl:hidden block">
                            <Image
                                    src="/images/pharma/Supply Chain (1).webp"
                                    alt=""
                                    priority
                                    width={600}
                                    height={400}
                                    className="w-[350px] h-[252px] mx-auto"
                                />
                            </div>
                        </div>
                        <div className="xl:col-span-7 col-span-12 p-10 xl:pl-16 pt-3 pb-16 pr-20">
                            <div className="flex xl:gap-10 gap-3 xl:flex-row flex-col">
                                <h2 className="xl:text-[100px] text-[60px] font-bold text-[#4E70BA]">4</h2>
                                <h2 className="xl:text-[42px] text-[28px] xl:font-bold font-medium leading-tight">Supply Chain, Manufacturing, and Serialization</h2>
                            </div>
                            <p className="xl:text-[22px] text-[16px] xl:mt-3 mt-5">Pharma companies must ensure product integrity and compliance across the supply chain. Challenges include:</p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] leading-tight text-[16px] mt-5">
                                <li>Managing serialization and track & trace mandates.</li>
                                <li>Lack of real-time visibility into inventory and shipments.</li>
                                <li>Inefficiencies in recall, complaint, and adverse event responses.</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="mt-5 pl-[35px] xl:pl-0">
                    <LearnMore />
                </div>
            </div>








            <section className="relative group overflow-hidden h-auto pb-40 xl:pb-0 xl:h-[1600px]  mt-10 xl:mt-32  text-white">
                <div className="xl:block hidden">
                <Image
                    src="/images/pharma/Deep Expertise (1).webp"
                    alt="GROW with SAP"
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                    className="transform transition-transform duration-500 group-hover:scale-110"
                />
                </div>
                <div className="xl:hidden block">
                <Image
                    src="/images/pharma/Deep Expertise (2).webp"
                    alt="GROW with SAP"
                    fill
                    priority
                    className=""
                />
                </div>
                <div
                    className="
        h-full relative
        mx-[35px]
        xl:ml-[280px] 
        xl:mr-[156px] 
        md:ml-[100px]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1  xl:mt-20 mt-10">
                        <div className="xl:col-span-8 col-span-12">
                            <h2 className="xl:text-[60px] text-[26px] leading-tight pr-12 xl:pr-0">Deep Expertise in Salesforce Life Sciences Cloud & SAP S/4 HANA for Pharma and Biotech</h2>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1">
                        <div className="xl:col-span-5 col-span-12 xl:mt-10 mt-14 xl:pr-10">
                            <div className="relative">
                                <Image
                                    src="/images/pharma/Life Sciences Cloud.webp"
                                    alt=""
                                    priority
                                    height={0}
                                    width={0}
                                    className="xl:!h-[342px] xl:!w-[532px] !h-[252px] !w-[350px] !mx-auto"
                                />
                            </div>
                            <h3 className="xl:text-[40px] text-[28px] mt-10 font-bold leading-tight pr-16 xl:pr-0">Salesforce Life Sciences Cloud </h3>
                            <h3 className="mt-5 xl:text-[35px] text-[22px] leading-tight pr-16 xl:pr-0">Unifying Commercial, Clinical, and Medical Operations</h3>
                            <p className="xl:text-[22px] text-[16px] mt-5">Rialtes leverages Salesforce to build integrated platforms that enable:</p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-8 xl:pr-10">
                                <li>AUnified HCP engagement, CRM, and field force coordination.</li>
                                <li>Patient services case management and support program automation.</li>
                                <li>Clinical trial management, including participant engagement and RWE (Real World Evidence).</li>
                                <li>Regulatory complaint handling, pharmacovigilance, and adverse event tracking.</li>
                            </ul>
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12 xl:mt-64 mt-16 relative xl:pr-10">
                            <div className="relative">
                                <Image
                                    src="/images/pharma/sap-con.webp"
                                    alt=""
                                    priority
                                    height={0}
                                    width={0}
                                    className="xl:!h-[342px] xl:!w-[532px] !h-[252px] !w-[350px] !mx-auto"
                                />
                            </div>
                            <h3 className="xl:text-[40px] text-[28px] mt-10 font-bold">SAP S/4 HANA for Pharma </h3>
                            <h3 className="mt-5 xl:text-[35px] text-[22px] leading-tight pr-10 xl:pr-0">Ensuring Compliance, Quality, and Operational Excellence</h3>
                            <p className="xl:text-[22px] text-[16px] mt-5 pr-16 xl:pr-0">Our SAP expertise helps pharmaceutical firms streamline:</p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-10 leading-tight">
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
                 xl:ml-[280px]">
                <p className="xl:text-[26px] text-[18px]  bg-[#0E3157] mx-[35px]  p-10 py-8 pr-20 xl:p-10 xl:pl-10 text-white xl:mt-[-4rem] mt-[-7rem] absolute xl:w-[50%] leading-tight">Together, Salesforce and SAP integrations ensure seamless, compliant processes from R&D to commercialization.</p></div>






            <div
                className="container xl:mt-48 mt-[8rem]
                              h-full relative
                             mx-[35px] xl:mr-0
                             xl:ml-[280px] xl:w-[calc(100%-280px)]
                             md:ml-[100px] md:w-[calc(100%-100px)]"
            >
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-7 col-span-12">
                        <h2 className="xl:text-[60px] text-[26px] pr-10 leading-tight">
                            How AI is Revolutionizing the Pharma Industry
                        </h2>
                    </div>
                    <div className="xl:col-span-1 col-span-12">
                    </div>
                    <div className="xl:col-span-3 col-span-12 mt-8 xl:mt-0">
                        <p className="xl:text-[22px] text-[16px]">AI is driving significant value in pharma, transforming how companies innovate, engage, and manage compliance.</p>
                    </div>
                </div>

            </div>


            <div
                className="xl:!h-[650px] h-auto text-white group overflow-hidden mt-10
                               relative
                               xl:mr-[142px]
                             xl:ml-[280px]"
            >
                <div className="xl:block hidden">
                <Image
                    src="/images/pharma/Key AI Impact.webp"
                    alt="GROW with SAP"
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                    className="transform transition-transform duration-500 group-hover:scale-110"
                />
                </div>
                <div className="xl:hidden block">
                <Image
                    src="/images/pharma/Key AI Impact (1).webp"
                    alt="GROW with SAP"
                    fill
                    priority
                />
                </div>

                <div className="grid xl:grid-cols-12 grid-cols-1 relative">
                    <div className="xl:col-span-6 col-span-12 p-10 pr-0 xl:pt-20 pt-[25rem]">
                        <h3 className="xl:text-[40px] text-[22px] font-bold pr-10 xl:pr-0">Key AI Impact Areas in Pharma:</h3>
                        <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-20">
                            <li>Accelerating drug discovery using AI-powered molecular analysis and predictive modeling.</li>
                            <li> Optimizing clinical trial design and patient recruitment through AI-based site selection and eligibility matching.</li>
                            <li> Enhancing pharmacovigilance via AI-driven adverse event detection and automated reporting.</li>
                            <li> Personalizing HCP and patient interactions using AI-based behavior and needs analysis.</li>
                        </ul>
                        <button className="bg-white hover:bg-[#ffffff] xl:text-[20px] xl:block hidden  hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-black py-3 px-8 transition duration-300 order-4 mt-10">
                            <Link href='/contact-us'>Learn More</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="xl:!h-[534px] h-auto text-black group overflow-hidden
                               relative 
                             xl:mr-[142px]
                             xl:ml-[280px]"
            >
                <div className="xl:block hidden">
                <Image
                    src="/images/pharma/Benefits of AI.webp"
                    alt="GROW with SAP"
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                    className="transform transition-transform duration-500 group-hover:scale-110"
                />
                </div>
                <div className="xl:hidden block">
                <Image
                    src="/images/pharma/Benefits of AI .webp"
                    alt="GROW with SAP"
                    fill
                    priority
                />
                </div>

                <div className="grid xl:grid-cols-12 grid-cols-1 relative">
                    <div className="xl:col-span-6 col-span-12 p-10 pt-20">
                    </div>
                    <div className="xl:col-span-6 col-span-12 p-10 xl:pt-20 pt-[20rem]">
                        <h3 className="xl:text-[40px] text-[22px] font-bold">Benefits of AI in Pharma:</h3>
                        <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 xl:pr-20 pr-10">
                            <li>Faster drug development and reduced R&D costs.</li>
                            <li> Improved regulatory submission quality and timelines.</li>
                            <li> Enhanced HCP and patient engagement through data-driven insights.</li>
                            <li>  Increased compliance and risk mitigation via predictive analytics.</li>
                        </ul>
                        <div className="mt-5 xl:block hidden">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#0C8AD4] xl:mt-48 mt-[7rem] xl:h-[1600px] h-[1872px] pb-40 xl:pb-0">
                <div
                    className="!h-[534px] text-white
                               relative 
                             mx-[35px]  xl:mr-[142px]
                             xl:ml-[280px]"
                >

                    <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-32">
                        <div className="xl:col-span-6 col-span-12 mt-[-4rem]">
                            <div className="group overflow-hidden relative">
                                <Image
                                    src="/images/pharma/Patient-Centric Mobile Apps .webp"
                                    alt=""
                                    priority
                                    height={0}
                                    width={0}
                                    className="xl:!h-[472px] xl:!w-[670px] !h-[252px] !w-[360px] transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                                />
                            </div>

                            <h2 className="mt-10 xl:text-[60px] text-[26px] xl:pr-32 leading-tight pr-10">Patient-Centric Mobile Apps</h2>
                            <h3 className="xl:text-[42px] text-[22px] mt-10 font-bold leading-tight pr-16 xl:pr-0">Driving Outcomes and Real-World Evidence </h3>

                            <p className="xl:text-[22px] text-[16px] xl:mt-10 mt-5 pr-10 xl:pr-0">Modern pharma needs secure mobile apps for engaging patients and collecting outcomes. Rialtes designs apps to:</p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-10">
                                <li>Capture patient-reported outcomes (PROs) and monitor adherence.</li>
                                <li>Facilitate medication reminders and educational content delivery.</li>
                                <li>Enable real-time communication with patient care teams.</li>
                                <li>Collect real-world evidence (RWE) for regulatory and clinical use.</li>
                            </ul>
                            <p className="bg-[#163055] xl:text-[26px] text-[18px] p-10 py-8 xl:pl-16 mt-10 leading-tight">Mobile apps ensure better engagement, adherence, and outcome measurement.</p>
                        </div>

                        <div className="xl:col-span-6 col-span-12 xl:mt-64 mt-16">
                            <div className="relative group overflow-hidden">
                                <Image
                                    src="/images/pharma/Remote Monitoring.webp"
                                    alt=""
                                    priority
                                    height={0}
                                    width={0}
                                    className="xl:!h-[472px] xl:!w-[670px] !h-[252px] !w-[360px] transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h2 className="mt-10 xl:text-[60px] text-[26px] leading-tight pr-10 xl:pr-0">Remote Monitoring & Real-World Data Collection</h2>
                            <p className="xl:text-[22px] text-[16px] mt-10 pr-10 xl:pr-0 leading-tight">Remote monitoring allows pharma companies to track product effectiveness and patient safety in real-time:</p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-10 leading-tight">
                                <li>Monitor connected devices and digital therapeutics.</li>
                                <li>Collect adherence, biometrics, and usage data directly from patients.</li>
                                <li>Early detection of adverse events or non-compliance.</li>
                                <li>Real-world usage insights for regulatory and R&D feedback loops.</li>
                            </ul>
                            <p className="bg-[#163055] xl:block hidden xl:text-[26px] text-[18px]  p-10 xl:pl-16 mt-16 leading-tight">Enhancing patient safety, outcomes, and evidence generation.</p>

                        </div>
                    </div>
                </div>
            </div>
            <p className="bg-[#163055] text-white mx-[35px] xl:hidden block xl:text-[26px] py-6 text-[18px] p-10 xl:pl-16 mt-[-6rem] leading-tight">Enhancing patient safety, outcomes, and evidence generation.</p>


            <div
                className="container xl:mt-40  mt-10
                              h-full relative
                             mx-[35px] xl:mr-0
                             xl:ml-[280px] xl:w-[calc(100%-280px)]
                             md:ml-[100px] md:w-[calc(100%-100px)]"
            >
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-5 col-span-12">
                        <div className="group overflow-hidden relative">
                            <Image
                                src="/images/pharma/AgentChat (1).webp"
                                alt=""
                                priority
                                height={0}
                                width={0}
                                className="xl:!h-[791px] xl:!w-[670px] !h-[389px] !w-[360px] transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                            />
                        </div>
                    </div>
                    <div className="xl:col-span-1 col-span-12">
                    </div>
                    <div className="col-span-5">
                        <h2 className="xl:text-[50px] text-[26px] mt-8 xl:mt-0">AgentChat</h2>
                        <h3 className="xl:text-[42px] text-[24px] xl:font-bold font-medium leading-tight">Real-Time WhatsApp Integration for Pharma</h3>
                        <p className="xl:text-[22px] text-[16px] xl:mt-10 mt-6 xl:pr-10 pr-16">AgentChat Rialtes’ WhatsApp integration solution, supports secure and compliant engagement:</p>
                        <h3 className="xl:text-[30px] text-[20px] font-bold xl:mt-10 mt-6">Key Features:</h3>
                        <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 font-medium xl:pr-12 pr-16 leading-tight">
                            <li>Automated patient communications: reminders, surveys, education.</li>
                            <li>Direct HCP support: samples, inquiries, updates.</li>
                            <li>Adverse event and complaint reporting via chat.</li>
                            <li>Sharing consent forms, regulatory documents, and education materials.</li>
                        </ul>
                        <div>
                            <button className="bg-[#134874] hover:bg-[#ffffff] xl:text-[20px] text-[16px] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6">
                                <Link href='/products/agentchat'>Know More</Link>
                            </button>
                        </div>

                    </div>

                </div>
                <div className="h-full  xl:mr-[142px] mt-20 xl:mt-0">
                    <p className="xl:text-[25px] bg-[#068EDA] text-[18px]   p-10 pl-10 text-white mt-[-2rem] absolute xl:w-[75%] pr-12 leading-tight">AgentChat enables real-time omnichannel patient and HCP engagement — securely and compliantly.</p>
                </div>
            </div>


            <div className="bg-[#184671] text-white xl:pb-10 pb-40 mt-64 xl:mt-0">
                <div
                    className="mt-[30px]
  container
  mx-[35px] xl:mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  text-black xl:py-20"
                >
                    <div className="group overflow-hidden relative mt-32">
                       <div className="xl:block hidden">
                        <Image
                            src="/images/pharma/Agentforce pharma.webp"
                            alt=""
                            priority
                            height={0}
                            width={0}
                            className="xl:!h-[665px] xl:!w-full !h-[332px] !w-[360px] transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                        />
                        </div>
                        <div className="xl:hidden block">
                        <Image
                            src="/images/pharma/Agentforce (1).webp"
                            alt=""
                            priority
                            height={0}
                            width={0}
                            className="!h-[382px] !w-[370px]"
                        />
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 mt-10 text-white">
                        <div className="xl:col-span-5 col-span-12">
                            <h2 className="xl:text-[50px] text-[26px]">Salesforce Agentforce </h2>
                            <h3 className="xl:text-[42px] text-[26px] leading-tight font-semibold xl:font-normal">Supercharging Pharma Sales, Medical Affairs, and Support</h3>
                            <div className="xl:mt-5">
                                <button className="bg-white hover:bg-[#ffffff] xl:text-[20px] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-black py-3 px-8 transition duration-300 order-4 mt-6">
                                    <Link href='/solutions/artificial-intelligence/salesforce-agentforce-consulting'>Know More</Link>
                                </button>
                            </div>

                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <p className="xl:text-[22px] text-[16px] xl:mt-5 mt-10 font-light">Agentforce, Rialtes’ advanced Salesforce solution, helps pharma sales, medical affairs, and support teams:</p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 font-medium pr-16 xl:pr-0">
                                <li>Manage HCP targeting, engagement, and follow-up activities.</li>
                                <li>Coordinate medical science liaison (MSL) visits and education programs.</li>
                                <li>Automate compliant marketing and medical content distribution.</li>
                                <li>Track customer interactions and feedback in real-time.
                                </li>
                            </ul>

                        </div>
                    </div>
                    
                </div>
                <div className="h-full  xl:mr-[142px] xl:ml-[280px]">
                        <p className="xl:text-[25px] mx-[35px] xl:mx-0 bg-[#068EDA] text-[18px] py-8  p-10 pl-10 text-white mt-[4rem] absolute xl:w-[65%] xl:pr-40 leading-tight">Agentforce enhances field force effectiveness and ensures compliant, personalized HCP interactions.</p>
                    </div>
                </div>



            {/* Contact Form */}
            <div
                className="xl:mt-32 mt-12
  xl:container
  mx-[35px] xl:mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  text-black py-20"
            >
                <ContactForm title={'Partner with Rialtes — Enabling Next-Gen Pharma and Biotech Excellence!'} className={"max-w-[62rem]  font-light xl:text-[60px] text-[26px] leading-tight pr-10 xl:pr-0"} />
            </div >
        </div >
    );
}