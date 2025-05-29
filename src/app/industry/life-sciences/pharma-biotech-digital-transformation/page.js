
"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform"
import Seo from "@/app/components/Seo";
import LearnMore from "@/app/components/learnMore";
import Link from "next/link";


const StrategicChallenge = () => {
    const data = [
        {
            number: "1",
            title: "Complex and Dynamic Regulatory Compliance",
            bgColor: "#CCFFEA",
            numberColor: "#415C3D",
            description: "Pharma companies operate in a highly regulated environment that requires real-time data visibility, accurate reporting, and global compliance adherence. Challenges include:",
            points: [
                "Managing complex, ever-changing global regulatory frameworks (FDA, EMA, MHRA, TGA).",
                "Maintaining submission readiness, audit trails, and risk assessments.",
                "Lack of integrated platforms to manage quality events, safety reporting, and regulatory submissions."
            ],
            imgDesktop: "/images/pharma/Complex and Dynamic Regulatory Compliance.webp",
            imgMobile: "/images/pharma/Complex and Dynamic .webp"
        },
        {
            number: "2",
            title: "Accelerating Clinical Trials and R&D Innovation",
            bgColor: "#C3EBFF",
            numberColor: "#086CB4",
            description: "Bringing therapies to market faster demands better trial management, patient recruitment, and data consolidation. Current issues:",
            points: [
                "Delays in trial recruitment and site activation.",
                "Fragmented systems for trial data and adverse event management.",
                "Challenges in ensuring data accuracy for regulatory submissions."
            ],
            imgDesktop: "/images/pharma/Accelerating Clinical Trials and R&D Innovation.webp",
            imgMobile: "/images/pharma/Accelerating Clinical.webp"
        },
        {
            number: "3",
            title: "Commercial and Medical Affairs Engagement Gaps",
            bgColor: "#FFF3D8",
            numberColor: "#B16929",
            description: "Engaging HCPs, payers, and patients requires personalized, compliant, and omnichannel engagement strategies. Key issues include:",
            points: [
                "Disconnected field medical and sales teams limiting coordinated HCP engagement.",
                "Lack of visibility into patient support and outcomes.",
                "Struggles with medical inquiry and adverse event tracking."
            ],
            imgDesktop: "/images/pharma/Commercial and Medical Affairs Engagement Gaps.webp",
            imgMobile: "/images/pharma/Commercial and Medical.webp"
        },
        {
            number: "4",
            title: "Supply Chain, Manufacturing, and Serialization",
            bgColor: "#C7DEFF",
            numberColor: "#4E70BA",
            description: "Pharma companies must ensure product integrity and compliance across the supply chain. Challenges include:",
            points: [
                "Managing serialization and track & trace mandates.",
                "Lack of real-time visibility into inventory and shipments.",
                "Inefficiencies in recall, complaint, and adverse event responses."
            ],
            imgDesktop: "/images/pharma/Supply Chain, Manufacturing, and Serialization.webp",
            imgMobile: "/images/pharma/Supply Chain (1).webp"
        }
    ];

    return (
        <div className="custom-container sm:mt-[147px] mt-[290px] max-md:px-0">
            <div className="w-full sm:w-[80%] xl:w-full 2xl:w-[80%]">
                <h2 className="lg:text-[60px] text-[26px] leading-tight max-md:px-[36px]">
                    Top 4 Strategic Challenges Facing Pharma and Biotech Industry Today
                </h2>
            </div>

            {data.map((item, index) => (
                <div
                    key={index}
                    className="lg:mt-[55px] mt-[50px]"
                    style={{ backgroundColor: item.bgColor }}
                >
                    <div className={`grid lg:grid-cols-12 grid-cols-1 max-lg:px-[36px]`}>

                        {index % 2 !== 0 && <div className="lg:col-span-1 col-span-12" />}


                        <div
                            className={`lg:col-span-4 col-span-12 relative group overflow-hidden ${index % 2 === 0 ? "order-1 lg:order-2" : ""
                                }`}
                        >
                            <div className="lg:block hidden">
                                <Image
                                    src={item.imgDesktop}
                                    alt="pharma img"
                                    fill
                                    priority
                                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="lg:hidden block">
                                <Image
                                    src={item.imgMobile}
                                    alt="pharma img"
                                    width={600}
                                    height={400}
                                    priority
                                    className="w-full h-full object-cover mx-auto"
                                />
                            </div>
                        </div>

                        <div
                            className={`lg:col-span-7 col-span-12 md:pt-[43px] pb-[69px] ${index % 2 === 0 ? "lg:px-[70px]" : "lg:pl-[60px] lg:pr-[45px]"
                                } ${index % 2 === 0 ? "order-2 lg:order-1" : ""}`}
                        >
                            <div className="flex lg:gap-10 gap-3 lg:items-center lg:flex-row flex-col">
                                <h2
                                    className="xl:text-[100px] text-[60px] font-bold"
                                    style={{ color: item.numberColor }}
                                >
                                    {item.number}
                                </h2>
                                <h2 className="2xl:text-[40px] xl:text-[37px] text-[28px] xl:font-bold font-medium leading-tight">
                                    {item.title}
                                </h2>
                            </div>
                            <p className="xl:text-[22px] text-[16px] xl:mt-3 mt-5 pr-10 xl:pr-0 font-medium xl:font-normal">
                                {item.description}
                            </p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-8 xl:pr-0 leading-tight font-medium xl:font-normal">
                                {item.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        {index % 2 === 0 && <div className="lg:col-span-1 col-span-12 order-3"></div>}
                    </div>
                </div>
            ))}

            <div className="mt-[20px] lg:mt-[40px] max-md:px-[36px]">
                <LearnMore />
            </div>
        </div>
    );
}
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Digital Transformation in Pharma and Life Sciences Industry | Rialtes"
                description="Rialtes enables Digital Transformation in Pharma and Life Sciences Industry with SAP and Salesforce, delivering innovative and compliant solutions globally."
                canonical="https://www.rialtes.com/industry/life-sciences/pharma-biotech-digital-transformation/"
            />
            {/* hero section */}
            <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/pharma/pharma header.webp"
                        alt="desktop banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/pharma/Header Pharma.webp"
                        alt="mobile banner"
                        fill
                        priority
                    />
                </div>

                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                        <div className="col-span-12 xl:col-span-7 lg:col-span-9 text-white">
                            <h3 className="text-[18px] md:text-[24px] font-bold">
                                Pharma Industry
                            </h3>
                            <h1 className="text-[26px] leading-[38px] md:text-[36px] md:leading-[50px] lg:text-[60px] lg:leading-[73px] w-[90%] lg:w-[98%] mt-[11.5px] md:mt-[28.5px]">
                                Accelerating Pharma Innovation & Compliance
                            </h1>

                            <h3 className="text-[18px] leading-[22px] md:text-[36px] md:leading-[50px] lg:text-[45px] lg:leading-[55px] w-[90%] lg:w-[92%] mt-[11.5px] md:mt-[28.5px]">
                                Rialtes End-to-End Pharma & Biotech Solutions
                            </h3>

                        </div>

                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="xl:mt-16 mt-8 custom-container" >

                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="lg:col-span-10 col-span-12">

                        <p className="xl:text-[22px] text-[16px] mt-5 xl:pr-32 pr-8 font-medium xl:font-normal">The pharmaceutical and biotech industries are at the forefront of global healthcare, yet they face increasing pressure to innovate faster, remain compliant, and stay patient-centric. Amidst growing competition, changing regulations, and the need for accelerated R&D, technology and AI-driven solutions are becoming pivotal to success.</p>
                        <p className="xl:text-[22px] text-[16px] mt-5 xl:pr-32 pr-8 font-medium xl:font-normal"> With certified expertise in Salesforce Life Sciences Cloud and SAP S/4 HANA for Pharma, and offices in India, United States, Canada, and Singapore, Rialtes delivers global best practices with local regulatory alignment.</p>
                    </div>
                    <div className="lg:col-span-2 col-span-12">
                    </div>
                </div>
            </section>

            {/* thought leadership section */}
            <section className="relative group overflow-hidden 3xl:h-[850px] xl:h-[920px] md:h-[600px] sm:h-[950px] h-[1150px] xl:mt-20 mt-16 text-white">
                <div className="md:block hidden">
                    <Image
                        src="/images/pharma/pharma TL.webp"
                        alt="pharma img"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="md:hidden block">
                    <Image
                        src="/images/pharma/TL (2).webp"
                        alt="pharma img"
                        style={{ objectFit: "cover", objectPosition: "35% 10%" }}
                        fill
                        priority
                    />
                </div>

                <div className="custom-container absolute bottom-0">
                    <div className="grid md:grid-cols-12 grid-cols-1">
                        <div className="md:col-span-7  col-span-12">
                            <h2 className="xl:text-[60px] text-[26px] xl:mt-10 mt-5">Thought Leadership:</h2>
                            <h3 className="xl:text-[42px] text-[22px] xl:mt-5 mt-3 font-bold leading-tight xl:w-[90%]">Advancing Pharma with Digital, AI, and Data-Driven Approaches</h3>
                            <p className="xl:text-[22px] text-[16px] mt-5 leading-tight">Rialtes partners with leading pharma and biotech organizations to unlock the power of AI, machine learning, cloud, and intelligent automation to:</p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 leading-tight">
                                <li>Accelerate product development, regulatory submissions, and commercialization.</li>
                                <li>Build integrated clinical, medical, and commercial operations platforms.</li>
                                <li>Foster patient-centric engagement and outcome-driven care.</li>
                                <li>Ensure real-time regulatory compliance with audit-ready systems.</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="xl:mt-[67px] mt-[41px]">
                        <p className="xl:text-[25px] text-[18px] bg-[#073259] p-5 lg:p-10 text-white leading-tight">Our end-to-end approach bridges gaps between R&D, regulatory, commercial, and supply chain functions, delivering a unified platform for better decision-making and faster time to market.</p>
                    </div>
                </div>
            </section>

            {/* leading pharma section */}
            <section className="relative h-[1300px] sm:h-[1260px] xl:h-[1000px] mt-16 xl:mt-0">
                <div className="lg:block hidden">
                    <Image
                        src="/images/pharma/why Rialtes (1).webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "65% 20%" }}
                        priority
                    />
                </div>
                <div className="lg:hidden block">
                    <Image
                        src="/images/pharma/why rialtes (3).webp"
                        alt=""
                        style={{ objectFit: "cover", objectPosition: "20% 30%" }}
                        fill
                        priority
                    />
                </div>
                <div className="custom-container">
                    <div className="relative p-6 md:p-12 lg:w-[828px] lg:h-[403px]">
                        <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
                        <div className="relative bg-opacity-80 text-white z-10 xl:p-4 rounded-lg">
                            <h2 className="lg:text-[60px] text-[26px] leading-tight">Why Leading Pharma & Biotech Firms Choose Rialtes</h2>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-[-260px] sm:bottom-[-80px] md:bottom-[-80px]">
                    <div className="custom-container grid grid-cols-1 gap-[21px] lg:gap-[32px] md:grid-cols-2 xl:grid-cols-3 text-black relative z-10">
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
                            <div key={index} className="bg-white xl:p-10 p-[40px]  rounded border border-black sm:mx-auto sm:w-[80%] md:w-full">
                                <h3 className="xl:text-[24px] text-[20px] font-bold leading-tight">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>

            </section>


            <StrategicChallenge />


            {/* deep expertise section */}
            <section className="relative group overflow-hidden h-auto text-white xl:pt-[99px] xl:pb-[175px] pt-[39px] pb-[150px] mt-[32px] xl:mt-[160px]">
                <div className="lg:block hidden">
                    <Image
                        src="/images/pharma/Deep Expertise (1).webp"
                        alt="GROW with SAP"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="lg:hidden block">
                    <Image
                        src="/images/pharma/Deep Expertise (2).webp"
                        alt="GROW with SAP"
                        fill
                        priority
                        className=""
                    />
                </div>
                <div
                    className="h-full relative custom-container"
                >

                    <div className="w-[80%]">
                        <h2 className="xl:text-[60px] text-[26px] leading-tight">Deep Expertise in Salesforce Life Sciences Cloud & SAP S/4 HANA for Pharma and Biotech</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-[158px] lg:gap-[108px] lg:mt-[60px] mt-[44px]">
                        {/* first col */}
                        <div>
                            <div className="relative">
                                <Image
                                    src="/images/pharma/Life Sciences Cloud.webp"
                                    alt=""
                                    priority
                                    height={0}
                                    width={0}
                                    className="w-full h-full"
                                />
                            </div>
                            <h3 className="xl:text-[40px] text-[28px] mt-10 font-bold leading-tight">Salesforce Life Sciences Cloud </h3>
                            <h3 className="mt-5 xl:text-[35px] text-[22px] leading-tight">Unifying Commercial, Clinical, and Medical Operations</h3>
                            <p className="xl:text-[22px] text-[16px] mt-5">Rialtes leverages Salesforce to build integrated platforms that enable:</p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5">
                                <li>AUnified HCP engagement, CRM, and field force coordination.</li>
                                <li>Patient services case management and support program automation.</li>
                                <li>Clinical trial management, including participant engagement and RWE (Real World Evidence).</li>
                                <li>Regulatory complaint handling, pharmacovigilance, and adverse event tracking.</li>
                            </ul>
                        </div>

                        {/* second col */}
                        <div>
                            <div className="relative mt-[70px] lg:mt-[180px]">
                                <Image
                                    src="/images/pharma/sap-con.webp"
                                    alt=""
                                    priority
                                    height={0}
                                    width={0}
                                    className="w-full h-full"
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

            {/* blue box of deep expertise */}
            <div
                className="custom-container h-full absolute">
                <div className="lg:mt-[-80px] sm:mt-[-60px] mt-[-80px]">
                    <p className="3xl:w-[47%] 2xl:w-[60%] xl:w-[70%] lg:w-[66%] md:w-[80%] sm:w-[90%] w-[82%] xl:text-[26px] text-[18px] lg:py-[41px] py-[26px] lg:pl-[48px] px-[33px]  bg-[#0E3157] text-white absolute leading-tight">Together, Salesforce and SAP integrations ensure seamless, compliant processes from R&D to commercialization.</p>
                </div>
            </div>


            {/* how AI is revolutionizing section */}

            <div
                className="custom-container h-full mt-[141px] lg:mt-[171px]"
            >
                <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-[70px] lg:gap-[40px] gap-y-[21px]">
                    <div className="xl:col-span-7 lg:col-span-6 col-span-12">
                        <h2 className="xl:text-[60px] text-[26px] leading-tight">
                            How AI is Revolutionizing the Pharma Industry
                        </h2>
                    </div>
                    <div className="xl:col-span-5 lg:col-span-6  col-span-12">
                        <p className="xl:text-[22px] text-[16px] lg:w-[80%] md:w-[70%] lg:float-right">
                            AI is driving significant value in pharma, transforming how companies innovate, engage, and manage compliance.
                        </p>
                    </div>

                </div>

            </div>
            {/* key ai impact card */}
            <div className="custom-container mt-[40px] xl:mt-[57px] max-md:px-0">
                <div
                    className=" text-white group overflow-hidden 
                               relative ">
                    <div className="lg:block hidden">
                        <Image
                            src="/images/pharma/Key AI Impact.webp"
                            alt="GROW with SAP"
                            fill
                            style={{ objectFit: "cover", objectPosition: "70% 20%" }}
                            priority
                            className="transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="lg:hidden block">
                        <Image
                            src="/images/pharma/Key AI Impact (1).webp"
                            alt="GROW with SAP"
                            fill
                            style={{ objectFit: "cover", objectPosition: "70% 10%" }}
                            priority
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="grid lg:grid-cols-12 grid-cols-1 relative">
                        <div className="lg:col-span-6 col-span-12 lg:mt-[93px] mt-[500px md:mt-[600px] sm:mt-[500px] mt-[480px] lg:ml-[61px] ml-[36px] lg:mb-[81px] mb-[40px]">
                            <h3 className="xl:text-[40px] text-[22px] font-bold">Key AI Impact Areas in Pharma:</h3>
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
            </div>
            {/* benefits of ai card */}
            <div className="custom-container max-md:px-0">
                <div
                    className=" text-white group overflow-hidden 
                               relative ">
                    <div className="lg:block hidden">
                        <Image
                            src="/images/pharma/Benefits of AI.webp"
                            alt="GROW with SAP"
                            fill
                            style={{ objectFit: "cover", objectPosition: "70% 20%" }}
                            priority
                            className="transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="lg:hidden block">
                        <Image
                            src="/images/pharma/Benefits of AI .webp"
                            alt="GROW with SAP"
                            fill
                            style={{ objectFit: "cover", objectPosition: "70% 10%" }}
                            priority
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="grid lg:grid-cols-12 grid-cols-1 relative text-black">
                        <div className="lg:col-span-5 col-span-12">
                        </div>
                        <div className="lg:col-span-7 lg:order-2 col-span-12 lg:mt-[93px] mt-[500px md:mt-[600px] sm:mt-[500px] mt-[480px] lg:ml-[61px] lg:mr-[20px] ml-[36px] lg:mb-[81px] mb-[40px]">
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
            </div>

            {/* patient centric and remote card */}
            <div className="bg-[#0C8AD4] custom-container lg:mt-[225px] mt-[125px] lg:pb-[180px] pb-[96px]">
                <div
                    className="text-white
                               relative"
                >

                    <div className="grid lg:grid-cols-12 grid-cols-1 3xl:gap-[120px] lg:gap-[80px] xl:gap-[96px] gap-y-[59px]">
                        <div className="lg:col-span-6 col-span-12 mt-[-4rem] md:w-[80%] lg:w-full">
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

                            <h2 className="mt-10 xl:text-[60px] text-[26px] leading-tight">Patient-Centric Mobile Apps</h2>
                            <h3 className="xl:text-[42px] text-[22px] mt-10 font-bold leading-tight">Driving Outcomes and Real-World Evidence </h3>

                            <p className="xl:text-[22px] text-[16px] xl:mt-10 mt-5">Modern pharma needs secure mobile apps for engaging patients and collecting outcomes. Rialtes designs apps to:</p>
                            <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5">
                                <li>Capture patient-reported outcomes (PROs) and monitor adherence.</li>
                                <li>Facilitate medication reminders and educational content delivery.</li>
                                <li>Enable real-time communication with patient care teams.</li>
                                <li>Collect real-world evidence (RWE) for regulatory and clinical use.</li>
                            </ul>
                            <p className="bg-[#163055] xl:text-[26px] text-[18px] p-10 py-8 xl:pl-16 mt-10 leading-tight">Mobile apps ensure better engagement, adherence, and outcome measurement.</p>
                        </div>

                        <div className="lg:col-span-6 col-span-12 lg:mt-64 mt-0 md:w-[80%] lg:w-full">
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
                            <p className="bg-[#163055] absolute xl:text-[26px] text-[18px] p-10 lg:mt-[100px] xl:mt-[100px] 2xl:mt-[140px] mt-[40px] xl:pl-16 leading-tight">Enhancing patient safety, outcomes, and evidence generation.</p>

                        </div>
                    </div>
                </div>
            </div>

            {/* agent chat section */}

            <div
                className="custom-container lg:mt-[160px] mt-[140px] h-full relative"
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
                                className="xl:!h-[791px] xl:!w-[670px] md:!h-[450px] md:!w-[450px] !h-[389px] !w-[360px] object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                            />
                        </div>
                    </div>
                    <div className="xl:col-span-1 col-span-12">
                    </div>
                    <div className="col-span-6">
                        <h2 className="xl:text-[50px] text-[26px] mt-8 xl:mt-0">AgentChat</h2>
                        <h3 className="xl:text-[37px] 2xl:text-[42px] text-[24px] xl:font-bold font-medium leading-tight">Real-Time WhatsApp Integration for Pharma</h3>
                        <p className="xl:text-[22px] text-[16px] xl:mt-10 mt-6">AgentChat Rialtes’ WhatsApp integration solution, supports secure and compliant engagement:</p>
                        <h3 className="xl:text-[30px] text-[20px] font-bold xl:mt-10 mt-6">Key Features:</h3>
                        <ul className="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 font-medium leading-tight">
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
                <div className="h-full mt-20 xl:mt-0">
                    <p className="xl:text-[25px] bg-[#068EDA] text-[18px]  p-10 text-white mt-[-2rem] lg:absolute md:w-[80%] lg:w-[60%] pr-12 leading-tight">AgentChat enables real-time omnichannel patient and HCP engagement — securely and compliantly.</p>
                </div>
            </div>

            {/* salesforce section */}

            <div className="bg-[#184671] text-white xl:pb-[150px] pb-40 mt-[65px] lg:mt-0">
                <div
                    className="mt-[30px] custom-container  text-black xl:py-20"
                >
                    <div className="group overflow-hidden relative mt-0 lg:mt-[230px] xl:mt-[194px]">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/pharma/Agentforce pharma.webp"
                                alt=""
                                priority
                                height={0}
                                width={0}
                                className="h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/pharma/Agentforce (1).webp"
                                alt=""
                                priority
                                height={0}
                                width={0}
                                className="h-[382px] w-[370px] md:h-[500px] md:w-[500px]"
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
                <div className="absolute">
                    <div className="custom-container">
                        <p className="xl:text-[25px] bg-[#068EDA] text-[18px] p-10 text-white mt-[60px] sm:mt-[80px]  leading-tight lg:w-[80%]">Agentforce enhances field force effectiveness and ensures compliant, personalized HCP interactions.</p>
                    </div>
                </div>
            </div>


            {/* Contact Form */}
            <div
                className="xl:mt-32 mt-12 custom-container  text-black py-20"
            >
                <ContactForm title={'Partner with Rialtes — Enabling Next-Gen Pharma and Biotech Excellence!'} className={"max-w-[62rem]  font-light xl:text-[60px] text-[26px] leading-tight pr-10 xl:pr-0"} />
            </div >
        </div >
    );
}