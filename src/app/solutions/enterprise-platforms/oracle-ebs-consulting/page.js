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

            <section className="relative h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden">
                <Image
                    src="/images/oracle-ebs/oracle header.webp"
                    alt="Oracle EBS Services"
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />
                <div className="absolute inset-0 flex items-center">
                    <div
                        className="
            xl:mr-[60%] xl:ml-[280px] px-6 xl:px-0
            text-white"
                    >
                        <h3 className="text-[18px] xl:text-[24px] font-bold mb-2">
                            Oracle EBS Services
                        </h3>
                        <h2 className="text-[30px] xl:text-[60px] leading-[1.2]">
                            Modernizing Your Enterprise, End-to-End
                        </h2>
                    </div>
                </div>
            </section>



            <section className="py-20">
                <div
                    className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="container mx-auto">
                        <h1 className="xl:text-[40px] text-[20px] xl:w-[87%] w-full">Empower your enterprise with Rialtes’ cutting-edge Oracle EBS solutions, backed by deep industry knowledge, certified expertise, and end-to-end ownership — from advisory to post-go-live success.</h1>


                        <div className="flex mb-8 mt-10  xl:gap-16 gap-10">
                            <div className="w-[55%]">
                                <p className="text-[21px]">As a certified Oracle and Kinaxis partner, Rialtes offers a powerful combination of Oracle E-Business Suite (EBS) and Kinaxis RapidResponse® services through our flagship “EBSPlus” offering. With global offices across India, United States, Canada, and Singapore, Rialtes is uniquely positioned to drive global Oracle EBS transformations for enterprises in manufacturing, retail, healthcare, semiconductor, and beyond.</p>
                            </div>
                            <div className="w-[34%]">
                                <Image
                                    src="/images/oracle-ebs/oracle EBS logo.webp"
                                    alt=""
                                    priority
                                    className="w-[397px] h-[233] xl:mt-[-20px]"
                                    width={0}
                                    height={0}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* //ebs plus section */}
            <section className="relative h-[350px]  xl:h-[1000px]" >
                <Image
                    src="/images/oracle-ebs/EBSplus.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />
                <div className=" xl:ml-[280px]">
                    <div className=" flex flex-col text-white relative  py-10">
                        <div className="mt-20">
                            <h1 className="text-4xl xl:text-[60px]">EBSPlus</h1>
                            <div className="grid grid-cols-12 items-center mt-5">
                                <div className="col-span-9">
                                    <h2 className="text-2xl xl:text-[42px] font-bold mt-5 leading-tight">
                                        Your Comprehensive Oracle EBS & Kinaxis Transformation Framework
                                    </h2>
                                </div>
                                <div className="col-span-3">
                                </div>
                            </div>
                            <div className="grid xl:grid-cols-12 grid-cols-1 items-center mt-8">
                                <div className="xl:col-span-6 col-span-12">
                                    <p className="text-lg xl:text-[22px] mt-5 ">
                                        Rialtes’ EBSPlus is designed to simplify, modernize, and optimize your Oracle EBS journey, delivering seamless business and supply chain operations integrated with Kinaxis for real-time planning and execution.
                                    </p>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                </div>
                            </div>
                            <h3 className="text-xl xl:text-[30px] mt-20">What EBSPlus Brings to You:</h3>
                        </div>
                    </div>
                </div>
                <div className=" grid gap-10  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-black  xl:mr-[142px] relative
           z-10
        ml-[15px] 
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
                        <div key={index} className="bg-white p-10  rounded shadow">
                            <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                            <p className="text-base md:text-lg mt-4 pr-5">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>



            {/* Deep Expertise in Oracle EBS & Cloud Infrastructure (OCI) */}

            <section className="relative h-[350px] sm:h-[500px] xl:h-[1482px] z-0">
                <Image
                    src="/images/oracle-ebs/deep expertise.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />

                {/* Main Content Wrapper */}
                <div
                    className="
       h-full relative
      ml-[15px] w-[calc(100%-15px)] mr-0
      xl:ml-[280px] xl:w-[calc(100%-280px)]
      md:ml-[100px] md:w-[calc(100%-100px)]
      sm:mx-5 sm:w-[calc(100%-40px)]
      xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    {/* Upper Content */}
                    <div className="grid grid-cols-12 items-center text-white">
                        <div className="col-span-7">
                            <h1 className="xl:text-[60px] mt-32">
                                Deep Expertise in Oracle EBS & Cloud Infrastructure (OCI)
                            </h1>
                            <p className="xl:text-[22px] mt-5">
                                With highly certified Oracle EBS and OCI experts, Rialtes ensures that your critical workloads and ERP operations
                                are secure, scalable, and cloud-ready. Our deep understanding of Oracle Cloud Infrastructure (OCI) enables clients to:
                            </p>
                        </div>
                        <div className="col-span-5">
                        </div>
                    </div>
                    {/* Bottom Section with Grid */}
                    <div className="absolute bottom-[80px] left-0 right-0 bg-opacity-80 text-white">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pr-[85px]">
                            <div className="border-r border-white/50 pr-16">
                                <p className="text-[30px] leading-snug font-medium">Leverage autonomous database, AI/ML integrations, and serverless architecture.</p>
                            </div>
                            <div className="border-r border-white/50 flex flex-col pl-10 pr-10">
                                <p className="text-[30px] leading-snug font-medium">Enable secure and compliant environments for regulated industries.</p>
                            </div>
                            <div className="border-r border-white/50 flex flex-col pl-10 pr-10">
                                <p className="text-[29px] leading-snug font-medium">Optimize compute, storage, and networking for global ERP operations.</p>
                            </div>
                            <div className="flex flex-col pl-10 pr-10">  {/* No border on the last column */}
                                <p className="text-[30px] leading-snug font-medium">Integrate Oracle EBS with OCI-native solutions for enhanced scalability and performance.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="relative h-[350px] sm:h-[500px] xl:h-[999px] z-0 bg-[#F2F2F2] ml-[145px]">
                <Image
                    src="/images/oracle-ebs/thought leadership.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />

                {/* Main Content Wrapper */}
                <div
                    className="
      container h-full relative
      ml-[15px] w-[calc(100%-15px)] mr-0
      xl:ml-[145px] 
      md:ml-[100px] md:w-[calc(100%-100px)]
      sm:mx-5 sm:w-[calc(100%-40px)]
      xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    {/* Upper Content */}
                    <div className="grid xl:grid-cols-12 grid-cols-1 items-center">
                        <div className="xl:col-span-6 col-span-12">
                            <div className="pt-20">
                                <h1 className="xl:text-[60px]">
                                    Thought Leadership: Why Rialtes?
                                </h1>
                                <p className="xl:text-[22px] mt-5">
                                    Rialtes is not just a technology partner — we are business transformation leaders. Our industry-driven accelerators, AI-infused solutions, and agile methodologies ensure that clients experience real, measurable value from their Oracle EBS investments.
                                </p>
                                <h3 className="xl:text-[30px] mt-8">Our Thought Leadership Pillars:</h3>
                                <ul className="list-disc space-y-5 text-[20px] pl-5 marker:font-bold marker:text-2xl">
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


            <section className="relative h-[350px] sm:h-[500px] xl:h-[999px]  z-0">
                {/* Main Content Wrapper */}
                <div
                    className="
       h-full relative
      ml-[15px] w-[calc(100%-15px)] mr-0
      xl:ml-[280px] xl:w-[calc(100%-280px)]
      md:ml-[100px] md:w-[calc(100%-100px)]
      sm:mx-5 sm:w-[calc(100%-40px)]
      xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-20">
                        {/* Left Section - Image (40%) */}
                        <div className="xl:col-span-4 col-span-12">
                            <Image
                                src="/images/oracle-ebs/supply chain.webp"
                                width={0}
                                height={0}
                                priority
                                className="h-[850px] w-[532px] mt-[-80px]"
                            />
                        </div>

                        {/* Right Section - Text Content (60%) */}
                        <div className="xl:col-span-7 col-span-12">
                            <h1 className="xl:text-[60px] mt-20">
                                Supply Chain Planning
                            </h1>
                            <h2 className="xl:text-[40px] font-bold mt-5">
                                Future-Proofing with Oracle EBS & Kinaxis
                            </h2>
                            <p className="xl:text-[22px] mt-5">
                                In today’s volatile markets, supply chain agility is non-negotiable. Rialtes helps enterprises optimize and future-proof their supply chains using Oracle EBS Supply Chain modules enhanced with Kinaxis RapidResponse® for real-time S&OP (Sales & Operations Planning).
                            </p>

                            <div className="grid grid-cols-2 xl:mt-[65px] gap-16">
                                <div>
                                    <h3 className="xl:text-[28px] text-[#006CBC]">Key Capabilities:</h3>
                                    <ul className="list-disc space-y-5 text-[20px] pl-5 marker:font-bold marker:text-2xl">
                                        <li className="mt-5">Integrated demand, supply, and capacity planning powered by Oracle ASCP and Kinaxis.</li>
                                        <li>Scenario modeling and what-if analysis for proactive risk management.</li>
                                        <li>Supplier collaboration and visibility with Kinaxis-integrated portals.</li>
                                        <li>End-to-end tracking from order to fulfillment with actionable insights.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="xl:text-[28px] text-[#006CBC]">Business Benefits:</h3>
                                    <ul className="list-disc space-y-5 text-[20px] pl-5 marker:font-bold marker:text-2xl">
                                        <li className="mt-5">Improved forecast accuracy and reduced stock-outs.</li>
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

            <section className="relative h-[500px] xl:h-[1205px] overflow-hidden mt-5 xl:mt-0 xl:block hidden">
                <Image
                    src="/images/oracle-ebs/sales planning.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />
                <div
                    className="
      container h-full relative
      ml-[15px] w-[calc(100%-15px)] mr-0
      xl:ml-[280px] xl:w-[calc(100%-280px)]
      md:ml-[100px] md:w-[calc(100%-100px)]
      sm:mx-5 sm:w-[calc(100%-40px)]
      xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    {/* Blue Background Box moved to bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#005B9D] bg-opacity-90 text-white p-8 xl:p-16 h-[801px] w-[1360px]">
                        <h2 className="xl:text-[60px]">Sales and Operations Planning</h2>
                        <h3 className="mt-2 xl:text-[40px] font-bold">Smarter, Faster, Integrated</h3>
                        <div className="grid grid-cols-12 items-center">
                            <div className="col-span-8">
                                <p className="mt-5 text-[22px]">
                                    With Rialtes, Sales and Operations Planning (S&OP) becomes a dynamic, collaborative process that adapts to market changes in real-time.
                                </p>
                            </div>
                            <div className="col-span-4">
                            </div>
                        </div>

                        <div className="grid grid-cols-12  xl:mt-[65px] gap-20 xl:pr-[138px]">
                            <div className="col-span-6">
                                <h3 className="xl:text-[30px]">How We Transform S&OP:</h3>
                                <ul className="list-disc space-y-5 text-[20px] pl-5 marker:font-bold marker:text-2xl">
                                    <li className="mt-5">End-to-end integration of Oracle EBS and Kinaxis for unified planning.</li>
                                    <li>Real-time collaboration between sales, operations, finance, and supply chain teams.</li>
                                    <li>Forecasting, demand shaping, and inventory balancing — on a single platform.</li>
                                    <li>AI-based analytics to drive actionable insights and improve consensus planning.</li>
                                </ul>
                            </div>
                            <div className="col-span-6">
                                <h3 className="xl:text-[30px]">The Outcome:</h3>
                                <ul className="list-disc space-y-5 text-[20px] pl-5 marker:font-bold marker:text-2xl">
                                    <li className="mt-5">Alignment of demand and supply with corporate goals.</li>
                                    <li>Agility to respond to customer demands and market shifts.</li>
                                    <li>Reduced operational costs and improved service levels.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div
                    className="
       h-full
      ml-[15px] w-[calc(100%-15px)] mr-0
      xl:ml-[280px] xl:w-[calc(100%-280px)]
      md:ml-[100px] md:w-[calc(100%-100px)] gap-16
      sm:mx-5 sm:w-[calc(100%-40px)]
      xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="flex gap-16">
                        <Image
                            src="/images/oracle-ebs/inventory.webp"
                            alt=""
                            priority
                            className="w-[618px] h-[640]"
                            width={0}
                            height={0}

                        />
                        <div className="xl:mt-[8rem]">
                            <h2 className="xl:text-[60px]">Inventory Optimization & Enterprise Scheduling</h2>
                            <h3 className="xl:text-[40px] mt-5 font-bold">Precision Planning with Oracle EBS</h3>
                            <div className="grid grid-cols-12 items-center">
                                <div className="col-span-7">
                                    <p className="text-[22px] mt-5">Optimizing inventory and managing complex production schedules are critical for businesses with global operations and dynamic supply chains. Rialtes leverages Oracle EBS Inventory and Advanced Supply Chain Planning (ASCP) to enable precision-driven inventory management and scheduling.</p>

                                </div>
                                <div className="col-span-5">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1  mt-16 pr-[280px] gap-32">
                        <div className="xl:col-span-4 col-span-12">
                            <h3 className="xl:text-[30px] text-[#006CBC]">Inventory Optimization:</h3>
                            <ul className="list-disc space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5 text-[20px]">
                                <li className="mt-4">Demand-driven inventory strategies to avoid overstocking and stock-outs. </li>
                                <li>Lot, batch, and serialized inventory tracking for regulated industries.</li>
                                <li>Integrated warehouse management for real-time inventory visibility.</li>
                            </ul>
                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <h3 className="xl:text-[30px] text-[#006CBC]">Enterprise Scheduling:</h3>
                            <ul className="list-disc space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5 text-[20px]">
                                <li className="mt-4">Advanced production scheduling integrated with Oracle EBS Manufacturing.</li>
                                <li>Capacity constraint management and lead time optimization.</li>
                                <li>Scenario-based scheduling for predictive production planning.</li>
                            </ul>

                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <h3 className="xl:text-[30px] text-[#006CBC]">Real-World Outcomes:</h3>
                            <ul className="list-disc space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5 text-[20px]">
                                <li className="mt-4">Reduced carrying costs and working capital optimization.</li>
                                <li>Enhanced customer satisfaction through timely fulfillment.</li>
                                <li>Improved production efficiency and throughput.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <div className="bg-[#F2F2F2] mt-32">
                <div className="
      ml-[15px] w-[calc(100%-15px)]
      xl:ml-[280px] xl:w-[calc(100%-280px)]
      md:ml-[100px] md:w-[calc(100%-100px)]
      sm:mx-5 sm:w-[calc(100%-40px)]
      xs:mx-4 xs:w-[calc(100%-32px)]
      text-black">
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-32">
                        <div className="xl:col-span-5 col-span-12">
                            <h2 className="text-[60px] mt-16">
                                End-to-End Scenario Planning
                            </h2>
                            <h3 className="text-[40px] mt-5  font-bold">
                                Make Every Business Decision Count
                            </h3>
                            <p className="text-[22px] mt-5">
                                Rialtes enables enterprises to model, simulate, and evaluate multiple business
                                scenarios using Oracle EBS integrated with Kinaxis, ensuring that every business
                                decision is backed by data and foresight.
                            </p>
                            <ul className="list-disc space-y-5 text-[20px] pl-5 marker:font-bold marker:text-2xl">
                                <li className="mt-5">What-if simulations for supply chain disruptions.</li>
                                <li>Financial impact analysis of operational decisions.</li>
                                <li>Collaborative scenario planning across stakeholders.</li>
                                <li>Risk mitigation strategies through proactive modeling.</li>
                            </ul>
                        </div>

                        <div className="xl:col-span-7 col-span-12">
                            <Image
                                src="/images/oracle-ebs/scenario planining.webp"
                                width={950}
                                height={600}
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>


            <section className="relative h-[350px] sm:h-[500px] xl:h-[962px]">
                <Image
                    src="/images/oracle-ebs/AI transformation.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />

                <div
                    className="
        container h-full relative
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="container mx-auto h-full flex flex-col justify-center text-white">
                    <div className="grid xl:grid-cols-12 grid-cols-1 items-center">
                    <div className="xl:col-span-8 col-span-12 pr-10">
                         <h1 className="xl:text-[60px]">AI & Data-Driven Transformation for Oracle EBS</h1>
                            <p className="xl:text-[22px] mt-5">AI is redefining how enterprises leverage Oracle EBS for competitive advantage. Rialtes brings AI-driven insights directly into your Oracle EBS workflows:</p>
                            <div className="flex xl:mt-[50px] gap-32">
                            <div>
                                <h3 className="xl:text-[30px] font-bold">Real-World AI Applications in Oracle EBS:</h3>
                                <ul className="list-disc space-y-5 text-[20px] font-bold pl-5 marker:font-bold marker:text-2xl">
                                    <li className="mt-5 ">Predictive supply chain and demand forecasting.</li>
                                    <li>AI-powered customer service and order management. </li>
                                    <li>Machine learning algorithms for predictive maintenance.</li>
                                    <li>AI-based risk scoring for supplier and compliance risks.</li>
                                </ul>

                            </div>
                            <div>
                                <h3 className="xl:text-[30px] font-bold">Benefits of AI-Driven Oracle EBS:</h3>
                                <ul className="list-disc space-y-5 text-[20px] pl-5 font-bold marker:font-bold marker:text-2xl">
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
            <section className="xl:py-20 py-10">
                <div
                    className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="container mx-auto">
                        <h2 className="xl:text-[60px]">Why Rialtes -</h2>
                        <h3 className="text-[#000000] mb-8 mt-5 font-bold w-full xl:text-[40px] text-[25px]">Oracle EBS Partner of Choice</h3>


                        <div className="grid xl:grid-cols-3 grid-cols-1  mb-8 mt-16 gap-5">
                            <div>
                                <Image
                                    src="/images/oracle-ebs/20 yrs ERP.svg"
                                    alt=""
                                    width={100}
                                    height={100}
                                    priority
                                    className="w-[118px] h-[118px]"
                                />
                                <p className="mt-5 text-[20px] xl:w-[60%] font-bold">20+ years of ERP expertise with Fortune 500 clients.</p>
                            </div>
                            <div >
                                <Image
                                    src="/images/oracle-ebs/oracle certify.svg"
                                    alt=""
                                    width={100}
                                    height={100}
                                    priority
                                    className="w-[118px] h-[118px]"

                                />
                                <p className="mt-5 text-[20px] xl:w-[62%] font-bold">Certified Oracle and Kinaxis partner with real industry insights.</p>
                            </div>
                            <div >
                                <Image
                                    src="/images/oracle-ebs/global delivery.svg"
                                    alt=""
                                    width={100}
                                    height={100}
                                    priority
                                    className="w-[118px] h-[118px]"

                                />
                                <p className="mt-5 text-[20px] xl:w-[60%] font-bold">Global delivery with localized expertise in India, US, Canada, and Singapore.</p>
                            </div>
                            <div className="xl:mt-16 ">
                                <Image
                                    src="/images/oracle-ebs/transformation.svg"
                                    alt=""
                                    width={100}
                                    height={100}
                                    priority
                                    className="w-[118px] h-[118px]"

                                />
                                <p className="mt-5 text-[20px] xl:w-[60%] font-bold">Proven track record of end-to-end Oracle EBS transformations.</p>
                            </div>
                            <div className="xl:mt-16">
                                <Image
                                    src="/images/oracle-ebs/AI approach.svg"
                                    alt=""
                                    width={100}
                                    height={100}
                                    priority
                                    className="w-[118px] h-[118px]"

                                />
                                <p className="mt-5 text-[20px] xl:w-[60%] font-bold">AI and Data-first approach for future-ready operations.</p>
                            </div>

                       
                    </div>
                </div>
                </div>
            </section>



            {/* Contact Form */}
            < div
                className="mt-16
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black pb-10"
            >
                <ContactForm title={'Ready to Modernize Oracle EBS for Your Business?'} className={"max-w-[45rem] font-medium"} />
            </div >
        </div >
    );
}