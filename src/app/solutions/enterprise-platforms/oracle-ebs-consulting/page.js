"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/components/Seo";




export default function Page() {

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Oracle EBS Consulting Services"
            />

            <section className="relative h-[399px] xl:h-[650px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/oracle-ebs/oracle header.webp"
                        alt="Oracle EBS Services"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/oracle-ebs/Header banner Oracle.webp"
                        alt="Oracle EBS Services"
                        fill
                        priority
                    />
                </div>

                <div className="absolute inset-0 flex items-center">
                    <div
                        className="
            xl:mr-[60%] xl:ml-[280px] xl:px-0 mx-[35px]
            text-white mt-20 xl:mt-0"
                    >
                        <h3 className="text-[18px] xl:text-[24px] font-bold mb-2">
                            Oracle EBS Services
                        </h3>
                        <h2 className="text-[24px] xl:text-[60px] leading-[1.2] xl:font-normal mt-5 font-light pr-20 xl:pr-0">
                            Modernizing Your Enterprise, End-to-End
                        </h2>
                    </div>
                </div>
            </section>



            <section className="xl:py-20 pt-10 pb-5">
                <div
                    className="
        xl:container
        mx-[35px]  xl:mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
       ">
                    <div className="xl:container mx-auto">
                        <h1 className="xl:text-[40px] text-[26px] xl:w-[87%] w-full pr-5 xl:pr-0 leading-tight">Empower your enterprise with Rialtes’ cutting-edge Oracle EBS solutions, backed by deep industry knowledge, certified expertise, and end-to-end ownership — from advisory to post-go-live success.</h1>


                        <div className="xl:grid xl:grid-cols-12 grid-cols-1 mb-8 xl:mt-10  xl:gap-16  flex flex-col-reverse">
                            <div className="xl:col-span-7 col-span-12">
                                <p className="xl:text-[22px] text-[16px] leading-tight pr-10 xl:pr-0">As a certified Oracle and Kinaxis partner, Rialtes offers a powerful combination of Oracle E-Business Suite (EBS) and Kinaxis RapidResponse® services through our flagship “EBSPlus” offering. With global offices across India, United States, Canada, and Singapore, Rialtes is uniquely positioned to drive global Oracle EBS transformations for enterprises in manufacturing, retail, healthcare, semiconductor, and beyond.</p>
                            </div>
                            <div className="xl:col-span-1 col-span-12">
                            </div>
                            <div className="xl:col-span-3 col-span-12">
                                <Image
                                    src="/images/oracle-ebs/oracle EBS logo.webp"
                                    alt=""
                                    priority
                                    className="w-[397px] h-[233] xl:mt-[-20px]"
                                    width={0}
                                    height={0}
                                />
                            </div>
                            <div className="xl:col-span-1 col-span-12">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* //ebs plus section */}
            <section className="relative h-auto pb-16  xl:h-[1075px]" >
                <div className="hidden xl:block">
                    <Image
                        src="/images/oracle-ebs/EBSplus.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/oracle-ebs/Group 465.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>

                <div className=" xl:ml-[280px] mx-[35px]">
                    <div className=" flex flex-col text-white relative  xl:py-10 py-6">
                        <div className="xl:mt-20 mt-8">
                            <h1 className="text-[26px] xl:text-[60px]">EBSPlus</h1>
                            <div className="grid xl:grid-cols-12 grid-cols-1 items-center xl:mt-5 mt-3">
                                <div className="xl:col-span-9 col-span-12">
                                    <h2 className="text-[22px] xl:text-[42px] xl:font-bold font-medium xl:mt-5 leading-tight pr-10 xl:pr-0">
                                        Your Comprehensive Oracle EBS & Kinaxis Transformation Framework
                                    </h2>
                                </div>
                                <div className="xl:col-span-3 col-span-12">
                                </div>
                            </div>
                            <div className="grid xl:grid-cols-12 grid-cols-1 items-center xl:mt-8 mt-5">
                                <div className="xl:col-span-6 col-span-12">
                                    <p className="text-[16px] xl:text-[22px] xl:mt-5 font-light xl:font-normal pr-10 xl:pr-0 leading-tight">
                                        Rialtes’ EBSPlus is designed to simplify, modernize, and optimize your Oracle EBS journey, delivering seamless business and supply chain operations integrated with Kinaxis for real-time planning and execution.
                                    </p>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                </div>
                            </div>
                            <h3 className="text-xl xl:text-[30px] xl:mt-20 mt-16">What EBSPlus Brings to You:</h3>
                        </div>
                    </div>
                </div>
                <div className=" grid xl:gap-10 gap-8  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-black  xl:mr-[142px] relative
           z-10
        mx-[35px] 
        xl:ml-[280px]">
                    {[
                        {
                            title: "License & Advisory Services",
                            description:
                                "Right-size your Oracle EBS and Kinaxis licenses with optimal cost management.",
                        },
                        {
                            title: "End-to-End Implementation & Design",
                            description:
                                "Industry-best practices, customized workflows, and agile project delivery.",
                        },
                        {
                            title: "Quality Assurance & Testing",
                            description:
                                "Business-aligned testing to ensure zero-disruption go-lives.",
                        },
                        {
                            title: "Integration & Data Strategy",
                            description:
                                "Connect Oracle EBS, Kinaxis, and external platforms for seamless business visibility.",
                        },
                        {
                            title: "Post Go-Live Support & Optimization",
                            description:
                                "Continuous improvement and managed services for ongoing success.",
                        },
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-10 shadow">
                            <h3 className="text-[22px] xl:text-[24px] font-bold">{item.title}</h3>
                            <p className="text-base xl:text-[20px] xl:text-lg mt-4 pr-5 xl:pr-10">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>



            {/* Deep Expertise in Oracle EBS & Cloud Infrastructure (OCI) */}

            <section className="relative h-[1224px] pb-10 sm:h-[500px] xl:h-[1482px] z-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/oracle-ebs/deep expertise.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/oracle-ebs/OCI.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        className="!h-auto"
                    />
                </div>


                {/* Main Content Wrapper */}
                <div
                    className="
       h-full relative
      mx-[35px]  xl:mr-0
      xl:ml-[280px] xl:w-[calc(100%-280px)]
      md:ml-[100px] md:w-[calc(100%-100px)]
      ">
                    {/* Upper Content */}
                    <div className="grid xl:grid-cols-12 grid-cols-12 items-center text-white">
                        <div className="xl:col-span-7 col-span-12">
                            <h1 className="xl:text-[60px] text-[26px] xl:mt-32 mt-16 pr-5 xl:pr-0">
                                Deep Expertise in Oracle EBS & Cloud Infrastructure (OCI)
                            </h1>
                            <p className="xl:text-[22px] text-[16px] mt-5 leading-tight pr-10 xl:pr-0">
                                With highly certified Oracle EBS and OCI experts, Rialtes ensures that your critical workloads and ERP operations
                                are secure, scalable, and cloud-ready. Our deep understanding of Oracle Cloud Infrastructure (OCI) enables clients to:
                            </p>
                        </div>
                        <div className="xl:col-span-5 col-span-12">
                        </div>
                    </div>
                    {/* Bottom Section with Grid */}
                    <div className="xl:absolute bottom-[80px] xl:bottom-0 left-0 right-0 bg-opacity-80 text-white">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:pr-[85px] mt-[35rem] xl:mt-0">
                            {/* Column 1 */}
                            <div className="border-b border-white/50 lg:border-b-0 lg:border-r xl:pr-16 pb-10 lg:pb-0 pr-10">
                                <p className="xl:text-[30px] text-[18px] leading-snug font-medium">
                                    Leverage autonomous database, AI/ML integrations, and serverless architecture.
                                </p>
                            </div>

                            {/* Column 2 */}
                            <div className="border-b border-white/50 lg:border-b-0 lg:border-r flex pt-10 xl:pt-0 flex-col xl:pl-10 pr-10 pb-6 lg:pb-0">
                                <p className="xl:text-[30px] text-[18px] leading-snug font-medium">
                                    Enable secure and compliant environments for regulated industries.
                                </p>
                            </div>

                            {/* Column 3 */}
                            <div className="border-b border-white/50 lg:border-b-0 lg:border-r flex flex-col xl:pl-10 pr-10 pb-10 pt-10 xl:pt-0 lg:pb-0">
                                <p className="xl:text-[30px] text-[18px] leading-snug font-medium">
                                    Optimize compute, storage, and networking for global ERP operations.
                                </p>
                            </div>

                            {/* Column 4 */}
                            <div className="flex flex-col xl:pl-10 pr-10 pt-10 xl:pt-0">
                                <p className="xl:text-[30px] text-[18px] leading-snug font-medium">
                                    Integrate Oracle EBS with OCI-native solutions for enhanced scalability and performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative h-auto pb-12 xl:pb-0 sm:h-[500px] xl:h-[999px] z-0 bg-[#F2F2F2] xl:ml-[145px] mt-64 xl:mt-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/oracle-ebs/thought leadership.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/oracle-ebs/TL (1).webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        className="mt-[22rem] !h-auto"
                    />
                </div>



                {/* Main Content Wrapper */}
                <div
                    className="
      xl:container h-full relative
      mx-[35px] xl:mr-0
      xl:ml-[145px] 
      md:ml-[100px] md:w-[calc(100%-100px)]
     ">
                    {/* Upper Content */}
                    <div className="grid xl:grid-cols-12 grid-cols-1 items-center">
                        <div className="xl:col-span-6 col-span-12">
                            <div className="pt-20">
                                <h1 className="xl:text-[60px] text-[26px] pr-10 xl:pr-0">
                                    Thought Leadership: Why Rialtes?
                                </h1>
                                <p className="xl:text-[22px] text-[16px] mt-5 leading-tight pr-10 xl:pr-14">
                                    Rialtes is not just a technology partner — we are business transformation leaders. Our industry-driven accelerators, AI-infused solutions, and agile methodologies ensure that clients experience real, measurable value from their Oracle EBS investments.
                                </p>
                                <h3 className="xl:text-[30px] xl:mt-8 mt-[30rem] text-[22px] font-bold">Our Thought Leadership Pillars:</h3>
                                <ul className="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl pr-10">
                                    <li className="mt-5"><span className="font-bold">Bringing AI to Oracle EBS </span> for predictive analytics and intelligent automation.</li>
                                    <li><span className="font-bold">Integrating Kinaxis RapidResponse® </span> for agile supply chain responsiveness.</li>
                                    <li className="font-bold">Cloud-driven cost optimization and performance enhancement.</li>
                                    <li><span className="font-bold">End-to-end ownership</span> of the entire Oracle EBS lifecycle — <span className="font-bold">advisory to support.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative  xl:h-[999px] pb-16 xl:pb-0  z-0 mt-10 xl:mt-0">
                {/* Main Content Wrapper */}
                <div
                    className="
       h-full relative
      mx-[35px] xl:mr-0
      xl:ml-[280px] xl:w-[calc(100%-280px)]
      md:ml-[100px] md:w-[calc(100%-100px)]
     " >
                    <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20">
                        {/* Left Section - Image (40%) */}
                        <div className="xl:col-span-4 col-span-12">
                            <Image
                                src="/images/oracle-ebs/supply chain.webp"
                                width={0}
                                height={0}
                                priority
                                className="xl:h-[850px] h-[398px] w-full xl:w-[532px] xl:mt-[-80px]"
                            />
                        </div>

                        {/* Right Section - Text Content (60%) */}
                        <div className="xl:col-span-7 col-span-12">
                            <h1 className="xl:text-[60px] xl:mt-20 text-[26px] mt-16">
                                Supply Chain Planning
                            </h1>
                            <h2 className="xl:text-[40px] text-[22px] xl:font-bold font-medium mt-5">
                                Future-Proofing with Oracle EBS & Kinaxis
                            </h2>
                            <p className="xl:text-[22px] text-[16px]  mt-5 leading-tight pr-5">
                                In today’s volatile markets, supply chain agility is non-negotiable. Rialtes helps enterprises optimize and future-proof their supply chains using Oracle EBS Supply Chain modules enhanced with Kinaxis RapidResponse® for real-time S&OP (Sales & Operations Planning).
                            </p>

                            <div className="grid xl:grid-cols-2 xl:mt-[65px] xl:gap-16 gap-10 mt-10">
                                <div>
                                    <h3 className="xl:text-[28px] text-[#006CBC] font-bold">Key Capabilities:</h3>
                                    <ul className="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl pr-10 leading-tight">
                                        <li className="xl:mt-5 mt-3">Integrated demand, supply, and capacity planning powered by Oracle ASCP and Kinaxis.</li>
                                        <li>Scenario modeling and what-if analysis for proactive risk management.</li>
                                        <li>Supplier collaboration and visibility with Kinaxis-integrated portals.</li>
                                        <li>End-to-end tracking from order to fulfillment with actionable insights.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="xl:text-[28px] text-[#006CBC] font-bold">Business Benefits:</h3>
                                    <ul className="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl pr-10 xl:pr-0 leading-tight">
                                        <li className="xl:mt-5 mt-3">Improved forecast accuracy and reduced stock-outs.</li>
                                        <li>Shorter planning cycles and faster response to disruptions.</li>
                                        <li>Optimized inventory and working capital.</li>
                                        <li>Stronger supplier relationships and compliance.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* Sales and Operations Planning */}

            <section className="relative h-auto pb-10 xl:pb-0 xl:h-[1205px] xl:overflow-hidden  xl:mt-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/oracle-ebs/sales planning.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/oracle-ebs/Sales and Operations Planning.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        className="!h-[415px]"
                    />
                </div>
                <div className="
      xl:container h-full relative
     xl:mr-0
      xl:ml-[280px] xl:w-[calc(100%-280px)]
      md:ml-[100px] md:w-[calc(100%-100px)]">
                    {/* Blue Background Box moved to bottom */}

                </div>
                <div className="absolute xl:container xl:ml-[280px] xl:bottom-0 bottom-[-1249px] left-0 right-0 bg-[#005B9D] bg-opacity-90 text-white p-[35px] xl:p-16 xl:h-[801px] xl:w-[1360px]">
                    <h2 className="xl:text-[60px] text-[26px]">Sales and Operations Planning</h2>
                    <h3 className="mt-2 xl:text-[40px] font-bold text-[22px]">Smarter, Faster, Integrated</h3>
                    <div className="grid xl:grid-cols-12 grid-cols-12 items-center">
                        <div className="xl:col-span-8 col-span-12">
                            <p className="mt-5 xl:text-[22px] text-[16px] pr-10 xl:pr-0 leading-tight">
                                With Rialtes, Sales and Operations Planning (S&OP) becomes a dynamic, collaborative process that adapts to market changes in real-time.
                            </p>
                        </div>
                        <div className="xl:col-span-4 grid-cols-12">
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-12 grid-cols-12  xl:mt-[65px] xl:gap-20 xl:pr-[138px]">
                        <div className="xl:col-span-6 col-span-12 mt-10 xl:mt-0">
                            <h3 className="xl:text-[30px] text-[24px] font-medium">How We Transform S&OP:</h3>
                            <ul className="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl pr-10 xl:pr-0 leading-tight">
                                <li className="xl:mt-5 mt-3">End-to-end integration of Oracle EBS and Kinaxis for unified planning.</li>
                                <li>Real-time collaboration between sales, operations, finance, and supply chain teams.</li>
                                <li>Forecasting, demand shaping, and inventory balancing — on a single platform.</li>
                                <li>AI-based analytics to drive actionable insights and improve consensus planning.</li>
                            </ul>
                        </div>
                        <div className="xl:col-span-6 col-span-12 mt-10 xl:mt-0">
                            <h3 className="xl:text-[30px] text-[24px] font-medium">The Outcome:</h3>
                            <ul className="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl pr-10 xl:pr-0">
                                <li className="xl:mt-5 mt-3">Alignment of demand and supply with corporate goals.</li>
                                <li>Agility to respond to customer demands and market shifts.</li>
                                <li>Reduced operational costs and improved service levels.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div
                    className="mt-[81rem] xl:mt-0
       h-auto
      mx-[35px] xl:mr-0
      xl:ml-[280px] xl:w-[calc(100%-280px)]
      md:ml-[100px] md:w-[calc(100%-100px)] xl:gap-16">
                    <div className="flex xl:flex-row flex-col xl:gap-16">
                        <Image
                            src="/images/oracle-ebs/inventory.webp"
                            alt=""
                            priority
                            className="xl:w-[618px] xl:h-[640] h-[309] w-full"
                            width={0}
                            height={0}

                        />
                        <div className="xl:mt-[8rem]">
                            <h2 className="xl:text-[60px] text-[26px] mt-10 xl:mt-0">Inventory Optimization & Enterprise Scheduling</h2>
                            <h3 className="xl:text-[40px] text-[22px] mt-5 xl:font-bold font-medium pr-10 xl:pr-0">Precision Planning with Oracle EBS</h3>
                            <div className="grid xl:grid-cols-12 grid-cols-1 items-center">
                                <div className="col-span-7">
                                    <p className="xl:text-[22px] text-[16px] mt-5 leading-tight pr-10 xl:pr-0">Optimizing inventory and managing complex production schedules are critical for businesses with global operations and dynamic supply chains. Rialtes leverages Oracle EBS Inventory and Advanced Supply Chain Planning (ASCP) to enable precision-driven inventory management and scheduling.</p>
                                </div>
                                <div className="col-span-5">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1  mt-10  xl:pr-[280px] xl:gap-32 gap-8">
                        <div className="xl:col-span-4 col-span-12">
                            <h3 className="xl:text-[30px] text-[20px] text-[#006CBC] font-bold">Inventory Optimization:</h3>
                            <ul className="list-disc xl:space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] pr-10 xl:pr-0 leading-tight">
                                <li className="xl:mt-4 mt-2">Demand-driven inventory strategies to avoid overstocking and stock-outs. </li>
                                <li>Lot, batch, and serialized inventory tracking for regulated industries.</li>
                                <li>Integrated warehouse management for real-time inventory visibility.</li>
                            </ul>
                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <h3 className="xl:text-[30px] text-[20px] text-[#006CBC] font-bold">Enterprise Scheduling:</h3>
                            <ul className="list-disc xl:space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] leading-tight pr-10 xl:pr-0">
                                <li className="xl:mt-4 mt-2">Advanced production scheduling integrated with Oracle EBS Manufacturing.</li>
                                <li>Capacity constraint management and lead time optimization.</li>
                                <li>Scenario-based scheduling for predictive production planning.</li>
                            </ul>

                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <h3 className="xl:text-[30px] text-[20px] text-[#006CBC] font-bold">Real-World Outcomes:</h3>
                            <ul className="list-disc xl:space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] pr-10 xl:pr-0 leading-tight">
                                <li className="xl:mt-4 mt-2">Reduced carrying costs and working capital optimization.</li>
                                <li>Enhanced customer satisfaction through timely fulfillment.</li>
                                <li>Improved production efficiency and throughput.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-[#F2F2F2] mt-20 pb-10 xl:pb-0">
                <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-20 xl:ml-[280px] mx-[35px]">
                    {/* Image: comes FIRST in HTML, but appears SECOND on desktop */}
                    <div className="xl:col-span-7 col-span-12 order-1 xl:order-2">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/oracle-ebs/scenario planining.webp"
                                width={950}
                                height={600}
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                priority
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/oracle-ebs/Scenario-Planning-mobile.webp"
                                width={950}
                                height={600}
                                className="w-full h-[282px]"
                                priority
                            />
                        </div>
                    </div>

                    {/* Text: comes SECOND in HTML, but appears FIRST on desktop */}
                    <div className="xl:col-span-5 col-span-12 order-2 xl:order-1">
                        <h2 className="xl:text-[60px] text-[26px] mt-10 xl:mt-0 leading-tight xl:pt-20 ">
                            End-to-End Scenario Planning
                        </h2>
                        <h3 className="xl:text-[40px] text-[22px] mt-5 xl:font-bold font-medium pr-10 xl:pr-0">
                            Make Every Business Decision Count
                        </h3>
                        <p className="xl:text-[22px] text-[16px] mt-5 leading-tight pr-10 xl:pr-0">
                            Rialtes enables enterprises to model, simulate, and evaluate multiple business
                            scenarios using Oracle EBS integrated with Kinaxis, ensuring that every business
                            decision is backed by data and foresight.
                        </p>
                        <ul className="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl leading-tight pr-10 xl:pr-0">
                            <li className="mt-5">What-if simulations for supply chain disruptions.</li>
                            <li>Financial impact analysis of operational decisions.</li>
                            <li>Collaborative scenario planning across stakeholders.</li>
                            <li>Risk mitigation strategies through proactive modeling.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="relative  h-auto pb-16 xl:pb-0  xl:h-[962px]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/oracle-ebs/AI transformation.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/oracle-ebs/AI & Data-Driven-mobile.webp"
                        alt=""
                        fill
                        priority
                    />
                </div>
                <div
                    className="
        container h-full relative
        mx-[35px]  xl:mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]">
                    <div className="container mx-auto h-full flex flex-col justify-center text-white">
                        <div className="grid xl:grid-cols-12 grid-cols-1 items-center">
                            <div className="xl:col-span-8 col-span-12 pr-10 mt-[28rem] xl:mt-0">
                                <h1 className="xl:text-[60px] text-[26px] pr-10 xl:pr-0 leading-tight">AI & Data-Driven Transformation for Oracle EBS</h1>
                                <p className="xl:text-[22px] mt-5 text-[16px] leading-tight pr-10 xl:pr-0">AI is redefining how enterprises leverage Oracle EBS for competitive advantage. Rialtes brings AI-driven insights directly into your Oracle EBS workflows:</p>
                                <div className="flex xl:flex-row flex-col xl:mt-[50px] xl:gap-32 gap-10">
                                    <div>
                                        <h3 className="xl:text-[30px] text-[20px] xl:font-bold font-medium mt-10 xl:mt-0 xl:pr-10">Real-World AI Applications in Oracle EBS:</h3>
                                        <ul className="list-disc xl:space-y-5 xl:text-[20px] text-[16px] xl:font-medium font-light pl-5 marker:font-bold marker:text-2xl pr-5 xl:pr-16 leading-tight">
                                            <li className="mt-5 ">Predictive supply chain and demand forecasting.</li>
                                            <li>AI-powered customer service and order management. </li>
                                            <li>Machine learning algorithms for predictive maintenance.</li>
                                            <li>AI-based risk scoring for supplier and compliance risks.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="xl:text-[30px] text-[20px] xl:font-bold font-medium pr-10 xl:pr-0">Benefits of AI-Driven Oracle EBS:</h3>
                                        <ul className="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 xl:font-medium font-light marker:font-bold marker:text-2xl pr-8 xl:pr-10 leading-tight">
                                            <li className="mt-5">Faster decision-making with real-time data.</li>
                                            <li>Reduced operational risks and disruptions. </li>
                                            <li>Higher accuracy in forecasts and financial projections.</li>
                                            <li>Improved customer experiences and faster issue resolution.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-4 col-span-12"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="xl:py-20 py-16">
                <div
                    className="
        xl:container
        mx-[35px] xl:mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]">
                    <div className="container mx-auto">
                        <h2 className="xl:text-[60px] text-[26px]">Why Rialtes -</h2>
                        <h3 className="text-[#000000] mb-8 mt-2 xl:mt-0 xl:font-bold font-medium w-full xl:text-[40px] text-[22px] pr-10 xl:pr-0">Oracle EBS Partner of Choice</h3>
                        <div className="grid xl:grid-cols-3 grid-cols-1 mb-8 mt-16 xl:gap-5 gap-16">
                            <div className="flex xl:block items-start gap-4">
                                <Image
                                    src="/images/oracle-ebs/20 yrs ERP.svg"
                                    alt=""
                                    width={100}
                                    height={100}
                                    priority
                                    className="xl:w-[118px] xl:h-[118px] w-[87px] h-[87px]"
                                />
                                <p className="mt-0 xl:mt-5 xl:text-[20px] text-[18px] xl:w-[60%] font-bold pr-16 xl:pr-0 leading-tight">
                                    20+ years of ERP expertise with Fortune 500 clients.
                                </p>
                            </div>

                            <div className="flex xl:block items-start gap-4">
                                <Image
                                    src="/images/oracle-ebs/oracle certify.svg"
                                    alt=""
                                    width={100}
                                    height={100}
                                    priority
                                    className="xl:w-[118px] xl:h-[118px] w-[87px] h-[87px]"
                                />
                                <p className="mt-0 xl:mt-5 xl:text-[20px] text-[18px]  xl:w-[62%] font-bold pr-10 xl:pr-0 leading-tight">
                                    Certified Oracle and Kinaxis partner with real industry insights.
                                </p>
                            </div>

                            <div className="flex xl:block items-start gap-4">
                                <Image
                                    src="/images/oracle-ebs/global delivery.svg"
                                    alt=""
                                    width={100}
                                    height={100}
                                    priority
                                    className="xl:w-[118px] xl:h-[118px] w-[87px] h-[87px]"
                                />
                                <p className="mt-0 xl:mt-5 xl:text-[20px] text-[18px]  xl:w-[60%] font-bold pr-10 xl:pr-0 leading-tight">
                                    Global delivery with localized expertise in India, US, Canada, and Singapore.
                                </p>
                            </div>

                            <div className="flex xl:block items-start gap-4 xl:mt-16">
                                <Image
                                    src="/images/oracle-ebs/transformation.svg"
                                    alt=""
                                    width={100}
                                    height={100}
                                    priority
                                    className="xl:w-[118px] xl:h-[118px] w-[87px] h-[87px]"
                                />
                                <p className="mt-0 xl:mt-5 xl:text-[20px] text-[18px]  xl:w-[60%] font-bold pr-12 xl:pr-0 leading-tight">
                                    Proven track record of end-to-end Oracle EBS transformations.
                                </p>
                            </div>

                            <div className="flex xl:block items-start gap-4 xl:mt-16">
                                <Image
                                    src="/images/oracle-ebs/AI approach.svg"
                                    alt=""
                                    width={100}
                                    height={100}
                                    priority
                                    className="xl:w-[118px] xl:h-[118px] w-[87px] h-[87px]"
                                />
                                <p className="mt-0 xl:mt-5 xl:text-[20px] text-[18px]  xl:w-[60%] font-bold pr-10 xl:pr-0 leading-tight">
                                    AI and Data-first approach for future-ready operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Contact Form */}
            < div
                className="xl:mt-0
  xl:container
  mx-[35px] xl:mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  text-black pb-10"
            >
                <ContactForm title={'Ready to Modernize Oracle EBS for Your Business?'} className={"xl:max-w-[60rem] xl:font-medium text-[26px] font-light xl:text-[60px] pr-10 xl:pr-0"} />
            </div >
        </div >
    );
}