
"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform"
import Seo from "@/app/components/Seo";
import Link from "next/link";

export default function Page() {
    return (
        <div className="bg-white">
            <Seo
                title="Medical Devices"
                canonical="https://www.rialtes.com/industry/life-sciences/medical-devices-it-solutions/"
            />

            <section className="relative  h-[400px] lg:h-[650px]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/medical/Medical device banner.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/medical/medical-header.webp"
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
                    <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20 xl:mt-20">
                        <div className="xl:col-span-6 col-span-12 pr-16">
                            <h3 className="text-white xl:text-[24px] text-[18px] font-bold xl:mb-2 mb-5 xl:mt-32 mt-20">Medical Devices</h3>
                            <h1 className="text-white xl:text-[60px] text-[24px] leading-tight">
                                Transforming Medical Device Innovation & Compliance
                            </h1>
                            <h3 className="xl:text-[45px] text-[18px] mt-5 text-white font-bold leading-tight pr-16 xl:pr-0">Rialtes Life Sciences & Medical Devices Solutions</h3>

                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        </div>
                    </div>

                </div>
            </section>




            <section
                className="xl:mt-16 mt-4
              mx-[35px] xl:mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]"
            >

                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-9 col-span-12 leading-tight font-medium">

                        <p className="xl:text-[22px] text-[16px] mt-10 xl:pr-32 pr-[33px]"> In today’s fast-evolving Medical Device industry, companies are under immense pressure to innovate faster, improve patient outcomes, ensure regulatory compliance, and manage complex global supply chains. At Rialtes, we bring deep domain expertise in Medical Devices, SAP S/4 HANA, Salesforce Life Sciences Cloud, and AI-driven solutions to deliver end-to-end consulting, advisory, implementation, integration, and post-go-live services that help medical device companies accelerate their growth while staying compliant and patient-centric.</p>
                        <p className="xl:text-[22px] text-[16px] mt-5 xl:pr-32 pr-[35px]"> With offices in the United States, Canada, India, and Singapore, Rialtes operates as a global partner equipped to solve real-world challenges with next-generation digital solutions.</p>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                    </div>
                </div>
            </section>

            <section className="relative xl:h-[1070px] h-auto xl:mt-24 mt-16 text-white">
                <div className="xl:block hidden">
                    <Image
                        src="/images/medical/TL Medical Device.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/medical/TL-(3).webp"
                        alt=""
                        fill
                        priority
                    />
                </div>

                <div
                    className="relative xl:mt-20 mt-8
              mx-[35px] xl:mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]"
                >
                    <div className="xl:pt-32 pt-[18rem]">
                        <h2 className="xl:text-[60px] text-[26px]">Thought Leadership:</h2>

                    </div>

                    <div className="grid xl:grid-cols-12 grid-cols-1  pt-4 xl:pb-32 pb-16">

                        <div className="xl:col-span-5 col-span-12">
                            <h3 className="xl:text-[42px] text-[22px] font-bold leading-tight">Helping Medical Device Companies Move from Compliance to Competitive Advantage</h3>
                            <p className="xl:text-[22px] text-[16px] xl:mt-5 mt-8 pr-10 xl:pr-0">Rialtes focuses on bringing together strategy, technology, and patient-centric design, helping Medical Device companies:</p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-10 leading-tight">
                                <li>Deliver compliant and seamless patient journeys from device prescription to outcome tracking.</li>
                                <li>Integrate clinical, supply chain, and sales operations into a unified digital ecosystem.</li>
                                <li> Leverage AI for proactive monitoring, predictive maintenance, and improved device performance.</li>
                                <li> Accelerate time-to-market for innovative medical devices through agile, compliant processes.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>




            <section className="relative h-auto  xl:h-[950px]" >
                <div className="xl:block hidden">
                    <Image
                        src="/images/medical/why-rialtes.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/medical/why-rialtes-medical.webp"
                        alt=""
                        priority
                        className="w-full h-full"
                        width={0}
                        height={0}
                    />
                </div>

                <div className=" xl:ml-[280px] mx-[35px] mt-[-76rem] xl:mt-0">
                    <div className="relative xl:p-12 p-10 pl-12 xl:pl-0 py-10 xl:py-0 xl:w-[670px] xl:h-[475px]">
                        <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
                        <div className="relative bg-opacity-80 text-white z-10 xl:p-4 rounded-lg ">
                            <h2 className="xl:text-[60px] text-[26px] leading-tight pr-8 xl:pr-0">Why Partner with Rialtes for Medical Device Transformation</h2>
                        </div>
                    </div>
                    <div className=" grid gap-5  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-black  xl:mr-[418px] relative xl:mt-[5rem] mt-[17rem]
                       z-10">
                        {[
                            {
                                title: "Deep expertise in Salesforce Life Sciences Cloud and SAP S/4 HANA.",
                            },
                            {
                                title: "Proven ability to integrate AI, IoT, and real-time data into medical devices ecosystems.",

                            },
                            {
                                title: "End-to-end compliance, quality, and patient-centric frameworks.",

                            },
                            {
                                title: "Global delivery with local expertise in regulatory markets.",

                            },
                            {
                                title: "Proprietary tools like RialChat and Agentforce for real-time engagement.",

                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-white xl:p-12  p-[40px] pr-[50px] border hover:bg-[#D9F2FF] text-black">
                                <h3 className="xl:text-[24px] text-[20px] font-bold leading-tight">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                    <button className="bg-[#134874]  hover:text-white border-[1px] xl:text-[20px] border-[solid] border-[#134874] mt-16 font-semibold text-white py-3 px-8 transition duration-300 order-4">
                        <Link href='/contact-us'>Learn More</Link>
                    </button>
                </div>

            </section>

            <section className="pb-16 xl:mt-80 mt-16">
                <div className="xl:ml-[280px] mx-[35px] xl:mx-0">
                    <div className="grid xl:grid-cols-12 grid-cols-1">
                        <div className="xl:col-span-8 col-span-12">
                            <h2 className="xl:text-[60px] text-[26px] leading-tight">Top 4 Critical Challenges Facing the Medical Device Industry Today</h2>
                        </div>
                    </div>

                    <div className="relative grid xl:grid-cols-12 grid-cols-1 mt-10">
                        <div className="absolute xl:top-16 top-10 w-full border-t border-[#007bff] z-0"></div>

                        <div className="xl:col-span-5 col-span-12 z-10 flex flex-col">
                            <div className="bg-[#007bff] text-white xl:w-[157px] h-[73px] w-[73px] xl:h-[148px] flex items-center justify-center xl:text-[100px] text-[60px] font-bold z-10 order-1">
                                1
                            </div>

                            {/* Image (mobile only) */}
                            <div className="block xl:hidden order-2 mt-14">
                                <img
                                    src="/images/medical/Regulatory Compliance.webp"
                                    alt="Regulatory Compliance"
                                    className="w-full h-[216px] object-cover mx-auto"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="order-3">
                                <h2 className="xl:text-[42px] text-[28px] xl:font-bold font-medium mb-6 mt-10 leading-tight pr-10 xl:pr-0">
                                    Regulatory Compliance & Quality Management
                                </h2>
                                <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 xl:pr-5 pr-[41px]">
                                    <li>Navigating complex, evolving global regulations.</li>
                                    <li>Difficulty in managing documentation, traceability, and audits.</li>
                                    <li>Integrating quality management and corrective action systems (CAPA).</li>
                                </ul>
                            </div>
                        </div>

                        <div className="xl:col-span-1 col-span-12 order-4 xl:order-2"></div>

                        <div className="relative xl:col-span-6 col-span-12 z-10 xl:pr-[280px] hidden xl:block order-5">
                            <img
                                src="/images/medical/Regulatory Compliance & Quality Management.webp"
                                alt="Regulatory Compliance"
                                className="w-[532px] h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>

            </section>

            <section className="pb-16">
                <div className="xl:ml-[280px] mx-[35px] xl:mx-0">
                    <div className="relative  grid xl:grid-cols-12 grid-cols-1">
                        <div className="absolute xl:top-16 top-10 w-full  border-t border-[#007bff] z-0"></div>
                        <div className="xl:col-span-5 col-span-12 z-10">
                            <div className="bg-[#007bff] text-white xl:w-[157px] xl:h-[148px] h-[73px] w-[73px] flex items-center justify-center xl:text-[100px] text-[60px] font-bold z-10">
                                2
                            </div>
                            <div className="block xl:hidden order-2 mt-12">
                                <img
                                    src="/images/medical/Supply Chain Complexity.webp"
                                    alt="Regulatory Compliance"
                                    className="w-full h-[216px] object-cover mx-auto"
                                />
                            </div>
                            <div className="order-3">
                                <h2 className="xl:text-[42px] text-[28px] xl:font-bold font-medium mb-6 mt-10 leading-tight pr-10 xl:pr-0">
                                    Supply Chain Complexity & Order Fulfillment
                                </h2>
                                <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px]  mt-5  pr-5 leading-tight">
                                    <li>Disconnected systems for inventory, manufacturing, and order management.</li>
                                    <li>Struggles with tracking serialized medical devices across geographies.</li>
                                    <li>Managing recalls and returns with compliance and efficiency.</li>
                                </ul>
                            </div>

                        </div>
                        <div className="xl:col-span-1 col-span-12 order-4 xl:order-2">
                        </div>
                        <div className="relative col-span-6 z-10 pr-[280px] hidden xl:block order-5">
                            <img
                                src="/images/medical/Supply Chain Complexity & Order Fulfillment.webp"
                                alt="Regulatory Compliance"
                                className="w-[532px] h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

            </section>
            <section className="pb-16">
                <div className="xl:ml-[280px] mx-[35px] xl:mx-0">

                    <div className="relative  grid xl:grid-cols-12 grid-cols-1">
                        <div className="absolute xl:top-16 top-10 w-full  border-t border-[#007bff] z-0"></div>
                        <div className="xl:col-span-5 col-span-12 z-10">
                            <div className="bg-[#007bff] text-white xl:w-[157px] xl:h-[148px] h-[73px] w-[73px] flex items-center justify-center xl:text-[100px] text-[60px] font-bold z-10">
                                3
                            </div>
                            <div className="block xl:hidden order-2 mt-12">
                                <img
                                    src="/images/medical/Clinical Trial & Patient.webp"
                                    alt="Regulatory Compliance"
                                    className="w-full h-[216px] object-cover mx-auto"
                                />
                            </div>
                            <div className="order-3">
                                <h2 className="xl:text-[42px] text-[28px] xl:font-bold font-medium mb-6 mt-10 leading-tight">
                                    Clinical Trial & Patient Outcome Tracking
                                </h2>
                                <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5  xl:pr-5 pr-10">
                                    <li>Inadequate tools for end-to-end clinical trial management.</li>
                                    <li>Limited real-time data on device performance and patient outcomes.</li>
                                    <li>Challenges in patient engagement and post-market surveillance.</li>
                                </ul>
                            </div>

                        </div>
                        <div className="xl:col-span-1 col-span-12  order-4 xl:order-2">
                        </div>
                        <div className="relative col-span-6 z-10 xl:pr-[280px] hidden xl:block order-5">
                            <img
                                src="/images/medical/Clinical Trial.webp"
                                alt="Regulatory Compliance"
                                className="w-[532px] h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

            </section>
            <section className="pb-16">
                <div className="xl:ml-[280px] mx-[35px] xl:mx-0">

                    <div className="relative  grid xl:grid-cols-12 grid-cols-1">
                        <div className="absolute xl:top-16 top-10 w-full  border-t border-[#007bff] z-0"></div>
                        <div className="xl:col-span-5 col-span-12 z-10">
                            <div className="bg-[#007bff] text-white xl:w-[157px]  xl:h-[148px]  w-[73px] h-[73px] flex items-center justify-center xl:text-[100px] text-[60px] font-bold z-10">
                                4
                            </div>
                            <div className="block xl:hidden order-2 mt-12">
                                <img
                                    src="/images/medical/Remote Monitoring (3).webp"
                                    alt="Regulatory Compliance"
                                    className="w-full h-[216px] object-cover mx-auto"
                                />
                            </div>

                            <div className="order-3">
                                <h2 className="xl:text-[42px] text-[28px] xl:font-bold font-medium mb-6 mt-10 leading-tight pr-5 xl:pr-0">
                                    Remote Monitoring & AI-Powered Predictive Insights
                                </h2>
                                <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5  xl:pr-5 pr-10">
                                    <li>Lack of real-time patient data from implanted or wearable devices.</li>
                                    <li> Missed opportunities to predict failures or adverse events.</li>
                                    <li>Inability to optimize device performance based on real-world usage data.</li>
                                </ul>
                            </div>

                        </div>
                        <div className="xl:col-span-1 col-span-12 order-4 xl:order-2">
                        </div>
                        <div className="relative col-span-6 z-10 xl:pr-[280px] hidden xl:block order-5">
                            <Image
                                src="/images/medical/Remote Monitoring (1).webp"
                                alt="Regulatory Compliance"
                                className="w-[532px] h-auto object-cover"
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                </div>

            </section>







            <section className="relative  h-auto xl:h-[1100px]  mt-5 xl:mt-20">
                <div className="xl:block hidden">
                <Image
                    src="/images/medical/Expertise in Salesforce.webp"
                    alt="GROW with SAP"
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                    className="transform transition-transform duration-500 group-hover:scale-110"
                />
                </div>
                <div className="xl:hidden block">
                <Image
                    src="/images/medical/Expertise in Salesforce (1).webp"
                    alt="GROW with SAP"
                    fill
                    priority
                />
                </div>
                <div
                    className="text-white
        h-full relative
        mx-[35px]
        xl:ml-[280px] 
        xl:mr-[156px] 
        md:ml-[100px]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1">
                        <div className="xl:col-span-9 col-span-12 mt-20 pr-10">
                            <h2 className="xl:text-[60px] text-[26px] leading-tight">End-to-End Expertise in Salesforce Life Sciences Cloud & SAP S/4 HANA for Medical Devices</h2>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white xl:pt-20 pt-10 xl:pb-32 pb-20 pr-10">

                        <div className="xl:col-span-5 col-span-12">
                            <h3 className="xl:text-[40px] text-[28px] font-bold leading-tight">Salesforce Life Sciences Cloud </h3>
                            <h2 className="xl:text-[35px] text-[22px] xl:pr-20 leading-tight mt-5 font-medium xl:font-normal">Powering Patient and Provider Journeys</h2>

                            <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-5 xl:pr-20">
                                <li >360° view of patient, provider, and care team interactions.</li>
                                <li >Clinical trial management integrated with patient support programs.</li>
                                <li>Real-time complaints and adverse event management.</li>
                                <li> Secure and compliant field service and device tracking.</li>
                            </ul>
                            <button className="bg-white hover:bg-[#ffffff]  hover:text-[#134874] border-[1px] text-[20px] border-[solid] border-[#134874] mt-10 font-semibold text-black py-3 px-8 transition duration-300 order-4">
                                <Link href='/contact-us'>Learn More</Link>
                            </button>
                        </div>

                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12 mt-16 xl:mt-0">
                            <h3 className="xl:text-[40px] text-[28px] font-bold">SAP S/4 HANA for Medical Devices </h3>
                            <h2 className="xl:text-[35px] text-[22px] xl:pr-20 leading-tight mt-5 font-medium xl:font-normal"> Operational & Financial Backbone</h2>
                            <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] xl:mt-10 text-[16px] mt-5 xl:pr-16 pr-2">
                                <li >Manufacturing and batch production control.</li>
                                <li >Serialized inventory and global traceability.</li>
                                <li>Integrated quality management and regulatory documentation.</li>
                                <li>Order-to-cash processes connected to Salesforce for full visibility.</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            <div
                className="container xl:mt-32 mt-16
                              h-full relative
                             mx-[35px] xl:mr-0
                             xl:ml-[280px] xl:w-[calc(100%-280px)]
                             md:ml-[100px] md:w-[calc(100%-100px)]"
            >
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-8 col-span-12">
                        <h2 className="xl:text-[60px] text-[26px] leading-tight pr-10">
                            AI-Powered Transformation
                        </h2>
                        <h3 className="xl:text-[40px] text-[22px] font-bold mt-5 pr-10 xl:pr-0">Driving Innovation in Medical Devices</h3>
                    </div>

                </div>

            </div>
            <div
                className="xl:!h-[534px] !h-[390px] text-black  mt-10
                                         relative 
                                      xl:mr-[142px]
                                       xl:ml-[280px]"
            >
                <div className="xl:block hidden">
                <Image
                    src="/images/medical/AI Impact.webp"
                    alt="GROW with SAP"
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                    className="transform transition-transform duration-500 group-hover:scale-110"
                />
                </div>
                <div className="xl:hidden block">
                <Image
                    src="/images/medical/Key AI Impact (2).webp"
                    alt="GROW with SAP"
                    fill
                    priority
                />
                </div>

                <div className="grid xl:grid-cols-12 grid-cols-1 relative text-white">
                    <div className="xl:col-span-6 xl:p-10 xl:pt-20">
                    </div>
                    <div className="col-span-6 p-10 xl:pt-20 pt-16">
                        <h3 className="xl:text-[40px] text-[22px] font-bold">Key AI Impact Areas:</h3>
                        <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 xl:pr-24 leading-tight">
                            <li>AI-driven patient monitoring for real-time risk alerts.</li>
                            <li> Personalized recommendations for device adjustments or upgrades.</li>
                            <li> AI-powered analytics for regulatory submissions.</li>
                            <li>  Predictive analytics for supply chain optimization.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className="xl:!h-[550px] !h-[430px] text-white
                               relative
                               xl:mr-[142px]
                             xl:ml-[280px]"
            >
                <div className="xl:block hidden">
                <Image
                    src="/images/medical/Benefits of AI (1).webp"
                    alt="GROW with SAP"
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                    className="transform transition-transform duration-500 group-hover:scale-110"
                />
                </div>
                <div className="xl:hidden block">
                <Image
                    src="/images/medical/Benefits of AI (2).webp"
                    alt="GROW with SAP"
                    fill
                    priority
                />
                </div>

                <div className="grid xl:grid-cols-12 grid-cols-1 relative">
                    <div className="col-span-6 p-10 xl:pl-20 xl:pt-20 pt-16">
                        <h3 className="xl:text-[40px] text-[22px] font-bold leading-tight">Benefits of AI in Medical Devices:</h3>
                        <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 xl:pr-20 pr-8">
                            <li>Enhance early risk detection and patient safety.</li>
                            <li> Improve device reliability and performance with predictive insights.</li>
                            <li> Streamline regulatory compliance and reporting. </li>
                            <li> Enable personalized patient support through AI-driven engagement.</li>
                        </ul>
                    </div>
                </div>
            </div>



            <div
  className="xl:mt-32 mt-10 h-full relative mx-[35px] xl:mr-0
             xl:ml-[280px] xl:w-[calc(100%-280px)]
             md:ml-[100px] md:w-[calc(100%-100px)] "
>
  <div className="grid xl:grid-cols-12 grid-cols-1">
    {/* Image - order first on mobile */}
    <div className="xl:col-span-6 col-span-12 order-1 xl:order-2">
        <div className="xl:block hidden">
        <Image
        src="/images/medical/Outcome Management .webp"
        alt="Outcome Management"
        className="w-full h-full"
        width={0}
        height={0}
      />
        </div>
        <div className="xl:hidden block">
        <Image
        src="/images/medical/Patient Trial & Outcome Management .webp"
        alt="Outcome Management"
        className="w-full h-[286px]"
        width={0}
        height={0}
      />
        </div>
     
    </div>

    <div className="xl:col-span-6 col-span-12 xl:pr-24 order-2 xl:order-1">
      <h2 className="xl:text-[58px] text-[26px] font-light mb-8 leading-tight mt-10 xl:mt-0">
        Patient Trial & Outcome Management
      </h2>
      <h3 className="xl:text-[40px] text-[22px] font-bold leading-tight">
        Connecting Patients, Providers, and Data
      </h3>
      <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 xl:pr-20 text-[16px] pr-8">
        <li>
          Integrated Salesforce Life Sciences Cloud for trial participant
          tracking, engagement, and compliance.
        </li>
        <li>
          Mobile apps and portals for patient-reported outcomes and real-time
          feedback.
        </li>
        <li>
          AI-enabled insights for trial progress, adverse events, and
          compliance trends.
        </li>
        <li>
          Data pipelines from trial data to regulatory submission readiness.
        </li>
      </ul>
      <p className="xl:text-[26px] py-8 xl:py-10 text-[18px] bg-[#0E3157] p-10 pl-10 text-white mt-[12%] xl:pr-20 leading-tight">
        Patient outcomes drive product innovation — Rialtes makes that
        connection seamless.
      </p>
    </div>
  </div>
</div>


            <div
                className="xl:mt-32 mt-16
                  h-full relative
                 mx-[35px] xl:mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
"
            >
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20">

                    <div className="xl:col-span-6 col-span-12 xl:pr-[3rem]">
                        <Image
                            src="/images/medical/SAP & Oracle ERP.webp"
                            alt="Regulatory Compliance"
                            className="w-full"
                            width={0}
                            height={0}
                        />
                    </div>
                    <div className="xl:col-span-6 col-span-12 xl:pr-10">
                        <h2 className="xl:text-[50px] text-[26px] font-light mb-8 leading-tight mt-10 xl:mt-0">Integrated Order Management with SAP & Oracle ERP</h2>
                        <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] leading-tight text-[16px] xl:mt-5 xl:pr-20 pr-10">
                            <li>Unified view of orders, inventory, and fulfillment.</li>
                            <li> Automated compliance checks and documentation.</li>
                            <li>  Integration with Salesforce for real-time sales and field service updates. </li>
                            <li> Recall and return management workflows embedded with regulatory requirements.</li>
                        </ul>

                    </div>

                </div>
                <p className="xl:text-[26px] text-[18px] bg-[#0E3157] py-8 xl:py-10  pl-10 text-white xl:mt-16 mt-10 p-10 xl:mr-[280px] xl:pr-20">From manufacturing to delivery — Rialtes keeps the supply chain connected and compliant.</p>

            </div>


            <div
                className="xl:mt-32 mt-14
                               relative 
                             mx-[35px]  xl:mr-[229px]
                             xl:ml-[280px]"
            >

                <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="relative">
                            <Image
                                src="/images/medical/Mobile Apps.webp"
                                alt=""
                                priority
                                height={0}
                                width={0}
                                className="xl:!h-[472px] xl:!w-[670px] w-[360px] h-[224px] transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                            />
                        </div>

                        <h2 className="mt-10 xl:text-[50px] text-[26px] leading-tight">Mobile Apps for Patient-Reported Outcomes</h2>
                        <h3 className="xl:text-[40px] text-[22px] xl:mt-10 mt-5 font-bold leading-tight pr-5">Empowering Real-Time Patient Feedback</h3>

                        <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-10 leading-tight">
                            <li>Self-service portals for monitoring device usage.</li>
                            <li> AI-driven insights based on patient-reported data.</li>
                            <li>Real-time alerts for device malfunctions or patient needs.</li>
                            <li>Integration with field service teams for rapid response.</li>
                        </ul>
                        <p className="bg-[#068EDA] text-white xl:text-[26px] py-6 xl:py-10 text-[18px] p-10 pl-12 xl:mt-10 mt-16 leading-tight">Putting power in the hands of patients for better outcomes and safer devices.</p>

                    </div>

                    <div className="xl:col-span-6 col-span-12 xl:mt-64 mt-16">
                        <div className="relative">
                            <Image
                                src="/images/medical/Remote Device Monitoring.webp"
                                alt=""
                                priority
                                height={0}
                                width={0}
                                className="xl:!h-[472px] xl:!w-[670px] !h-[224px] !w-[360px] transform transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h2 className="mt-10 xl:text-[48px] text-[26px] leading-tight pr-5 xl:pr-0">Remote Device Monitoring</h2>
                        <h3 className="xl:text-[40px] text-[22px] xl:mt-10 mt-5 font-bold leading-tight pr-10 xl:pr-0">Delivering Real-Time Device Insights</h3>
                        <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 pr-10">
                            <li>IoT-enabled device connectivity.</li>
                            <li>Predictive maintenance alerts for early intervention.</li>
                            <li>Usage pattern analysis to improve device design.</li>
                            <li>Compliance-ready data collection and reporting.</li>
                        </ul>
                        <p className="bg-[#068EDA] text-white xl:text-[26px] text-[18px] p-6  xl:mt-16 mt-10 pr-10 xl:pr-0">Better data, better devices, better patient lives.</p>
                    </div>
                </div>
            </div>


            <div className="bg-[#184671] text-white pb-20 xl:mt-80 mt-[15rem]">
                <div
                    className="mt-[30px]
          container
          mx-[35px] xl:mr-0
          xl:ml-[280px] xl:w-[calc(100%-280px)]
          md:ml-[100px] md:w-[calc(100%-100px)]
          text-black py-20"
                >
                    <div className="relative -mt-[15rem]">
                        <div className="xl:block hidden">
                        <Image
                            src="/images/medical/Agentforce.webp"
                            alt=""
                            priority
                            height={0}
                            width={0}
                            className="xl:!h-[665px] xl:!w-full !h-[276px] !w-[360px]  transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                        />
                        </div>
                        <div className="xl:hidden block">
                        <Image
                            src="/images/medical/Agentforce (2).webp"
                            alt=""
                            priority
                            height={0}
                            width={0}
                            className="!h-[276px] !w-[360px]"
                        />
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-10 mt-20 text-white">
                        <div className="xl:col-span-5 col-span-12">
                            <h2 className="xl:text-[50px] text-[26px]">Salesforce Agentforce  </h2>
                            <h3 className="xl:text-[42px] text-[26px] leading-tight">Revolutionizing Medical Device Sales & Services</h3>
                            <p className="xl:text-[22px] xl:mt-5 mt-8 text-[16px] pr-12">Agentforce is a game-changing Salesforce solution that enables Medical Device sales and service teams to manage complex sales cycles, compliance, and patient interactions seamlessly on a single platform. Rialtes has a strong Agentforce practice, deeply aligned with Medical Device and Life Sciences industry needs.</p>
                            <div className="xl:mt-10 mt-5">
                                <button className="bg-white xl:text-[20px] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-black py-3 px-8 transition duration-300 order-4 mt-6">
                                    <Link href='/solutions/artificial-intelligence/salesforce-agentforce-consulting'>Know More</Link>
                                </button>
                            </div>

                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <h3 className="xl:text-[30px] text-[18px] xl:mt-5 mt-8 xl:font-light font-medium pr-16 xl:pr-0">How Agentforce Empowers Medical Device Companies:</h3>
                            <ul className="list-disc leading-tight xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] font-medium text-[16px] mt-5 pr-12 xl:pr-0">
                                <li>Automates medical device sales processes, including complex approvals and contracts.</li>
                                <li>Empowers field service teams for faster device maintenance and replacement.</li>
                                <li>Enables case management for patient complaints and adverse events.</li>
                                <li>Provides real-time device tracking and warranty management.
                                </li>
                                <li>Connects sales, service, and compliance teams in a single interface.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-full  xl:mr-[142px] ">
                        <p className="xl:text-[25px] mr-[35px] py-8 pr-[45px] xl:py-10 xl:mr-0 bg-[#068EDA] text-[18px] p-10 pl-10 text-white xl:mt-[5rem] mt-[3rem] absolute xl:w-[65%] xl:pr-32 leading-tight">Agentforce delivers a connected, compliant, and patient-first approach to sales and service in Medical Devices.</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#626262] text-white pb-20 mt-40">
                <div
                    className="mt-[30px]
          container
          mx-[35px] xl:mr-0
          xl:ml-[280px] xl:w-[calc(100%-280px)]
          md:ml-[100px] md:w-[calc(100%-100px)]
          text-black py-20"
                >
                    <div className="relative -mt-[5rem]">
                       <div className="xl:block hidden">
                        <Image
                            src="/images/medical/AgentChat (2).webp"
                            alt=""
                            priority
                            height={0}
                            width={0}
                            className="xl:!h-[612px] !w-full !h-[261px] transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                        />
                        </div>
                        <div className="xl:hidden block">
                        <Image
                            src="/images/medical/AgentChat (4).webp"
                            alt=""
                            priority
                            height={0}
                            width={0}
                            className="!w-[360px] !h-[261px]"
                        />
                        </div>
                    </div>
                    <h2 className="xl:text-[50px] text-[26px] text-white mt-10 pr-10 xl:pr-0">Real-Time Communication with RialChat</h2>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white mt-8 xl:gap-24">
                        <div className="xl:col-span-6 col-span-12">
                            <h3 className="xl:text-[40px] text-[26px] leading-tight font-bold pr-10 xl:pr-0">WhatsApp Integration for Medical Devices</h3>
                            <p className="xl:text-[22px] text-[16px] mt-8 pr-14 xl:pr-0">RialChat, our WhatsApp integration solution, brings instant patient, provider, and field service communication:</p>
                        </div>
                        {/* <div className="col-span-1">
                                </div> */}
                        <div className="xl:col-span-6 col-span-12">
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-5 font-medium pr-14 xl:pr-0">
                                <li>Appointment scheduling and follow-ups.</li>
                                <li>Automated device usage reminders and troubleshooting.</li>
                                <li>Direct patient feedback and issue reporting.</li>
                                <li>Secure document and image sharing for support cases.
                                </li>
                            </ul>
                            <div className="mt-5">
                                <button className="bg-white xl:text-[20px]  border-[1px] hover:text-[#134874]  font-semibold text-black py-3 px-8 transition duration-300 order-4 mt-6">
                                    <Link href='/products/agentchat'>Know More</Link>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="h-full  xl:mr-[142px]">
                        <p className="xl:text-[25px] bg-[#068EDA] text-[18px]  xl:p-10 p-5 pl-10 text-white mt-[5rem] absolute mr-[35px] xl:mr-0">Stay connected with patients and providers on the channel they trust.</p>
                    </div>
                </div>
            </div>



            {/* Contact Form */}
            <div
                className="xl:mt-16 mt-10
  xl:container
  mx-[35px] xl:mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  text-black py-20"
            >
                <ContactForm title={'Transform Patient Lives and Medical Device Operations with Rialtes!'} className={"max-w-[70rem] xl:text-[60px] text-[26px] leading-tight"} />
            </div >
        </div >
    );
}