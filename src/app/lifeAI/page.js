import Link from "next/link";
export default function lifeAI() {
    return (
        <>
            <div
                className="w-full flex justify-center items-center md:min-h-screen bg-white-100 bg-cover bg-center "
                style={{
                    backgroundImage:
                        "url('/images/lip')",
                }}
            >
                <div
                    className="relative w-full h-[400px] md:h-[650px] bg-cover bg-center flex items-end md:items-center justify-start md:justify-center px-4 md:px-0 pb-12 md:mt-[-350px] md:ml-[-20px]"
                    style={{
                        backgroundImage: "url('/images/lifeAi/Group-1.webp')",
                    }}
                >
                    <div className="text-left text-white md:px-0 md:ml-[-586px] md:mt-[-80px]">
                        <h3 className="text-[18px] md:text-[24px] font-semibold w-[150px] md:w-[194px] ml-[30px] md:ml-[-80px]">
                            Lifeai +
                        </h3>
                        <h1 className="text-[28px] md:text-[60px] leading-snug md:leading-tight font-light mt-2 md:mt-5 ml-[30px] md:ml-[-80px] w-[90%] md:w-[687px]">
                            Transforming Life Sciences with Rialtes LifeAI+ Services
                        </h1>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center bg-white px-8 p-30 md:p-0 md:px-4 mt-[50px] md:mt-[-180px] ml-0  md:ml-[-270px] mb-[100px] md:mb-[180px]">
                <div className="max-w-6xl text-gray-800">
                    <h2 className="text-[28px] md:text-[60px] text-[#000000] font-light leading-snug md:leading-tight mb-6 md:mb-12 w-full md:w-[1084px]">
                        Accelerating Innovation, Compliance, and Growth in Life Sciences with AI and Salesforce Cloud Solutions
                    </h2>
                    <p className="text-[16px] md:text-[22px] text-black-500 w-[322px] md:w-[946px] mb-4 md:mb-12">
                        At Rialtes, we understand that the life sciences industry is rapidly evolving — with growing expectations from patients, providers, regulators, and partners. To meet these demands, organizations need intelligent, AI-driven solutions that integrate compliance, personalization, and automation at scale.
                    </p>
                    <p className="text-[16px] md:text-[22px] text-black-500 w-[322px] md:w-[946px]">
                        Introducing Rialtes LifeAI+, our comprehensive consulting service tailored for life sciences enterprises, combining deep industry expertise with Salesforce Life Sciences Cloud, Health Cloud, and AI-powered solutions to help you drive innovation, ensure compliance, and enhance operational efficiency.
                    </p>
                </div>
            </div>
            <div className="relative mt-[-100px] md:mt-[-50px] h-[1100px] md:h-[980px]">
  {/* ✅ Mobile Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center md:hidden "
    style={{ backgroundImage: "url('/images/lIfeAI/Mobile-2.webp')" }}
  ></div>

  {/* ✅ Desktop Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center hidden md:block"
    style={{ backgroundImage: "url('/images/lIfeAI/Group-2.webp')" }}
  ></div>

  {/* ✅ Content Box */}
  <div className="absolute left-0 md:left-[250px] bottom-0 md:bottom-[-100px] w-full md:w-[1222px] h-auto md:h-[775px] bg-[#0071c5] text-white px-6 md:px-[150px] py-12 md:py-16 shadow-xl">
    <h2 className="text-[28px] md:text-[60px] font-light mb-4 md:mb-6 w-full md:w-[680px]">
      What is LifeAI+?
    </h2>
    <p className="text-[16px] md:text-[20px] mb-8 md:mb-11 w-full md:w-[946px] leading-snug md:leading-tight">
      A 360° consulting service that unites Advisory, Design, Implementation, Quality Assurance, Integration, and Post-Go-Live Support — ensuring continuous value creation and innovation across your life sciences value chain.
    </p>
    <h3 className="text-[20px] md:text-[36px] font-semibold mb-8 md:mb-16 w-full md:w-[805px] leading-snug md:leading-tight">
      Our End-to-End Services Include:
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-8 md:gap-x-6 text-[16px] md:text-[20px] font-semibold mt-4 md:mt-[50px]">
      <div>Strategic Advisory & Roadmap Development</div>
      <div className="md:border-l md:border-white md:pl-8">
        Salesforce Life Sciences Cloud & Health Cloud Implementation
      </div>
      <div className="md:border-l md:border-white md:pl-8">
        User-Centric Experience & Journey Design
      </div>
      <div>Regulatory Compliance & Quality Assurance</div>
      <div className="md:border-l md:border-white md:pl-8">
        System Integration with Backend ERP, EMR, and Partner Platforms
      </div>
      <div className="md:border-l md:border-white md:pl-8">
        AI-Powered Insights & Analytics through Data Cloud
      </div>
      <div>Ongoing Support & Optimization for Continuous Improvement</div>
    </div>
    <div className="mt-8 md:mt-[-60px] flex justify-start md:justify-end">
      <button className="bg-[#073259] w-[140px] md:w-[162px] h-[50px] md:h-[62px] hover:bg-white hover:text-[#134874] font-medium text-[16px] md:text-[20px]">
        <Link href="/contact-us">Learn More</Link>
      </button>
    </div>
  </div>
</div>

         
            <div className="relative flex w-full bg-[#073259] mt-[240px]">
                {/* Left Text Section */}
                <div className="w-[1066px] h-[689px] text-white px-14 py-16 flex flex-col justify-center">
                    <h2 className="text-[60px] font-light mb-6 w-[676px] ml-[192px] leading-tight">Why Partner with Rialtes?</h2>

                    <ul className="text-[20px] space-y-5 font-light w-[540px] ml-[192px] mt-[23px]">
                        {[
                            'Certified Salesforce Partner with global offices in United States, Canada, India, and Singapore.',
                            'Highly Certified Salesforce Health Cloud and Life Sciences Cloud Experts.',
                            'Deep expertise in payer, provider, medical devices, pharmaceuticals, biotech, and insurance sectors.',
                            'Proven ability to deliver secure, compliant, AI-driven life sciences solutions.',
                            'Strong focus on AI, automation, and patient-centric innovation.'
                        ].map((text, index) => (
                            <li key={index} className="flex items-start leading-tight">
                                <span className="text-[28px] font-bold mr-5 mt-[2px]">•</span>
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Button: half in section, half outside */}
                    <div className="absolute left-[246px] bottom-[-28px]">
                        <button className="bg-[#006FBE] hover:bg-[#ffffff] hover:text-[#134874]  text-[20px] font-semibold shadow-md w-[162px] h-[62px] ">
                            <Link href="/contact-us">Learn More</Link>
                        </button>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="w-[950px] h-[689px] overflow-hidden ">
                    <img
                        src="/images/lIfeAI/Group-3.webp"
                        alt="Why Partner with Rialtes"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="relative w-full mt-[100px]">
                {/* Full-Width Background Image */}
                <div className="w-[1640px] h-auto">
                    <img
                        src="/images/lifeAI/Group-4.webp" // <-- Replace with actual image path
                        alt="Salesforce Life Sciences Cloud"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Overlay Text Section */}
                <div className="absolute bottom-60 top-[690px]  left-[264px] w-[1640px] h-[735px] bg-[#008BC8] text-white flex">
                    {/* Left Column: Heading & Description */}
                    <div className="w-1/2 p-12 flex flex-col justify-center ml-[160px] mt-[-22px]">
                        <h2 className="text-[60px] font-light leading-tight w-[654px]">
                            Deep Expertise in <br /> Salesforce Life <br /> Sciences Cloud
                        </h2><br /><br />
                        <p className="mt-17 text-lg text-[20px] font-light w-[532px]">
                            We help life sciences organizations maximize Salesforce Life Sciences Cloud, configuring its
                            industry-specific modules to streamline workflows and improve compliance:
                        </p><br /><br />
                        <button className="mt-8 bg-[#073259] hover:bg-[#ffffff] hover:text-[#134874] text-white mt-[90px] font-semibold w-[162px] h-[62px] text-[20px]">
                            <Link href="/contact-us">Learn More</Link>
                        </button>
                    </div>

                    {/* Right Column: Bullet Points */}
                    <div className="w-1/2 p-12 flex flex-col justify-center ml-[-100px]">
                        <h3 className="text-[36px] w-[614px] font-semibold mb-6">
                            Key Salesforce Life Sciences Cloud Modules We Specialize In:
                        </h3>
                        <ul className="space-y-4 text-lg text-[20px] w-[583px] font-light list-disc list-inside">
                            <li className="text-[20px]">Care Program & Patient Services Management</li>
                            <li className="text-[20px]">Provider & Healthcare Professional (HCP) Relationship Management</li>
                            <li className="text-[20px]">Clinical Support & Device Case Management</li>
                            <li className="text-[20px]">Regulatory Compliance Automation</li>
                            <li className="text-[20px]">Medical Affairs & Field Team Enablement</li>
                            <li className="text-[20px]">Omnichannel Communication for Patients and Providers</li>
                            <li className="text-[20px]">Product Complaint & Inquiry Handling</li>
                            <li className="text-[20px]">Investigator & KOL Management</li>
                            <li className="text-[20px]">AI-Driven Data Insights with Salesforce Data Cloud</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="flex justify-center items-center px-12 py-16 max-w-[1400px] mx-auto mt-[610px]">
                {/* Text Content */}
                <div className="max-w-xl  pr-16 ml-[57px]" >
                    <h1 className="text-[60px] w-[627px] font-medium leading-tight mb-14">
                        How Rialtes LifeAI+ <br />
                        Drives Growth <br />
                        Across Life Sciences
                    </h1>
                    <p className="text-[20px] leading-tight w-[627px] text-gray-800 mb-14">
                        Whether you are a pharma, medical device manufacturer, biotech firm, or healthcare provider, Rialtes helps you:
                    </p>
                    <ul className="list-disc pl-5 space-y-4 text-[17px] text-gray-800">
                        <li className="text-[20px] w-[627px]">Automate compliance-heavy processes and improve accuracy.</li>
                        <li className="text-[20px] w-[627px]">Deliver personalized patient engagement through AI and data-driven insights.</li>
                        <li className="text-[20px] w-[627px]">Ensure full regulatory compliance for each customer and patient interaction.</li>
                        <li className="text-[20px] w-[627px]">Streamline HCP and patient journeys using Salesforce Life Sciences Cloud and Health Cloud.</li>
                        <li className="text-[20px] w-[627px]">Implement AI-based case management and proactive patient support using Agentforce and Data Cloud.</li>
                    </ul>
                </div>

                {/* Image */}
                <div className="flex-shrink-0 ml-[220px]">
                    <img
                        src="/images/lifeAI/Group-5.webp" // Replace this with the correct path
                        alt="Healthcare Professional"
                        className="w-[670px] h-[707px] object-cover"
                    />
                </div>
            </section>
            <section className="relative px-4 pt-12 overflow-x-auto mt-[50px]">
                {/* Gray background ending partway into the second row */}
                <div className="absolute top-0 left-0 w-full h-[1287px] bg-gray-100 z-0"></div>

                {/* Foreground content */}
                <div className="relative z-10 max-w-[1200px] mx-auto ml-[250px]">
                    <h2 className="text-[60px] text-left leading-tight font-light mb-12">
                        Specialized Expertise for the Future <br /> of Healthcare & Life Sciences
                    </h2>

                    <div className="flex flex-col space-y-6">
                        {/* First Row */}
                        <div className="flex space-x-6">
                            <div className="bg-white border border-gray-300 p-6 w-[394px] h-[537px] shadow-sm shrink-0">
                                <h3 className="text-[30px] w-[287px] font-semibold text-[#0A6BB8] mb-9 leading-tight mt-[40px] pl-[20px]">
                                    Regulatory Compliance & Audit Readiness
                                </h3>
                                <p className="text-gray-800 leading-tight text-[24px] w-[310px] pl-[20px] h-[203px]">
                                    Ensure full adherence to FDA, EMA, HIPAA, and GDPR standards with automated compliance workflows,
                                    complete audit trails, and intelligent monitoring.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-300 p-6 w-[394px] h-[537px] shadow-sm shrink-0">
                                <h3 className="text-[30px] w-[287px] text-[#0A6BB8] font-semibold mb-9 leading-tight mt-[40px] pl-[20px]">
                                    Remote Patient Monitoring & Home Health
                                </h3>
                                <p className="text-gray-800 leading-tight text-[24px] w-[310px] pl-[20px] h-[232px]">
                                    Deliver next-gen Remote Monitoring solutions and Home Health programs integrated into Salesforce
                                    for proactive care management and better outcomes.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-300 p-6 w-[394px] h-[537px] shadow-sm shrink-0">
                                <h3 className="text-[30px] w-[287px] text-[#0A6BB8] font-semibold mb-9 leading-tight mt-[40px] pl-[20px]">
                                    Benefit Verification & Eligibility Checks
                                </h3>
                                <p className="text-gray-800 leading-tight text-[24px] w-[310px] pl-[20px] h-[203px]">
                                    Automate eligibility verification and benefit checks in real-time — improving speed and reducing
                                    manual interventions for patient services teams.
                                </p>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="flex space-x-6">
                            <div className="bg-white border border-gray-300 p-6 w-[394px] h-[537px] shadow-sm shrink-0">
                                <h3 className="text-[30px] w-[297px] text-[#0A6BB8] font-semibold mb-9 leading-tight mt-[40px] pl-[20px]">
                                    Prior Authorization Management
                                </h3>
                                <p className="text-gray-800 leading-tight text-[24px] w-[310px] pl-[20px] h-[232px]">
                                    AI-powered Prior Authorization solution, built on Salesforce Life Sciences Cloud, streamlines and
                                    automates the entire PA process for patients, providers, and payers.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-300 p-6 w-[394px] h-[537px] shadow-sm shrink-0">
                                <h3 className="text-[30px] w-[287px] text-[#0A6BB8] font-semibold mb-9 leading-tight mt-[40px] pl-[20px]">
                                    Telehealth & Virtual Care Solutions
                                </h3>
                                <p className="text-gray-800 leading-tight text-[24px] w-[310px] pl-[20px] h-[145px]">
                                    Offer secure Telehealth integrations to facilitate remote consultations, patient follow-ups, and
                                    digital care pathways.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-300 p-6 w-[394px] h-[537px] shadow-sm shrink-0">
                                <h3 className="text-[30px] w-[287px] text-[#0A6BB8] font-semibold mb-9 leading-tight mt-[40px] pl-[20px]">
                                    Digital Signature & Document Extraction Automation
                                </h3>
                                <p className="text-gray-800 leading-tight text-[24px] w-[330px] pl-[20px] h-[261px]">
                                    Accelerate document-heavy workflows like consent forms, onboarding, and compliance documentation
                                    using secure digital signatures and AI-powered document extraction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br /><br />
            <section className="relative w-full h-[1004px] mt-[50px]">
                {/* Background Image */}
                <img
                    src="/images/lifeAI/Group-6.webp"
                    alt="Team Discussion"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Text Box */}
                <div className="absolute left-1/2 bottom-0 top-[670px] transform -translate-x-1/2 translate-y-1/4 w-[1360px] h-[754px] bg-[#9D6959] text-white px-16 py-16 flex flex-col justify-between shadow-xl">
                    <div className="flex flex-row justify-between">
                        {/* Left Text Content */}
                        <div className="max-w-[1360px] h-[754px] mt-[40px]">
                            <h2 className="text-[60px] w-[589px] font-light leading-tight">
                                Prior Authorization Management
                            </h2>
                            <h3 className="text-[42px] w-[589px] font-semibold mt-8 leading-tight">
                                Streamlined, Compliant, <br /> Intelligent
                            </h3>
                            <p className="text-[20px] mt-9 leading-tight w-[589px]">
                                Prior Authorization (PA) is often a major bottleneck for
                                patients, providers, and payers. Rialtes’ AI-enhanced Prior
                                Authorization solution leverages Salesforce Life Sciences Cloud
                                to automate and streamline the end-to-end PA process, including:
                            </p>
                        </div>

                        {/* Bullet List */}
                        <div className="max-w-[473px] ml-[-120px] mt-[40px]">
                            <ul className="list-disc list-inside max-w-[473px] space-y-2  leading-tight ">
                                <li className="text-[20px] ">Automated PA Request Intake via multiple channels (portal, phone, EHR).</li><br />
                                <li className="text-[20px] mt-[8px]">AI-based Case Triage and Eligibility Check for faster PA decisions.</li><br />
                                <li className="text-[20px] mt-[8px]">Dynamic Collaboration with payers, patients, and providers — all from within Salesforce.</li><br />
                                <li className="text-[20px] mb-7">Seamless Integration with EMRs, Payers, and Specialty Pharmacies.</li><br />
                                <li className="text-[20px] mb-7">Real-time PA Status Tracking for patients and care teams.</li><br />
                                <li className="text-[20px] mb-7">Audit and Compliance Logs maintained for each PA case.</li>
                            </ul>
                            <button className="mt-16 bg-[#073259] text-white text-[20px] font-medium  shadow-md hover:bg-[#0b3b78] w-[162px] h-[62px]">
                                <Link href="/contact-us">Learn More</Link>
                            </button>
                        </div>
                    </div>

                    {/* Bottom Highlight Banner */}
                    <div className="bg-[#0A2F5D] text-white text-[20px] font-light p-6 mt-[-140px] w-[1084px] h-[153px] ml-[67px]">
                        <p className="text-[26px] leading-tight font-light">Our PA solution reduces delays, improves patient experience, and ensures faster therapy access — driving better adherence and outcomes</p>
                    </div>
                </div>
            </section>

            <section className="relative w-full h-[909px] mt-[780px]">
                {/* Background Image */}
                <img
                    src="/images/lifeAI/Group-7.webp"
                    alt="Cloud Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Text Overlay Box */}
                <div className="absolute left-40 top-0 w-[907px] h-full bg-[#073259]/80 text-white px-16 py-20 flex flex-col justify-between ">
                    <div className="ml-[50px] ">
                        <h2 className="text-[60px] mb-[11px] font-light leading-tight w-[675px]">
                            AI-Driven Life Sciences <br />
                            with Salesforce Data <br />
                            Cloud & Agentforce
                        </h2>
                        <p className="mt-10 text-[20px] leading-tight w-[667px]">
                            Rialtes helps organizations integrate Salesforce Data Cloud and
                            Agentforce for Health, unlocking powerful AI-driven capabilities:
                        </p>

                        <ul className="mt-10 list-disc list-inside space-y-4 text-[18px] leading-tight w-[636px]">
                            <li className="text-[20px]">
                                AI-Powered Case Management and Patient Services — including predictive insights and intelligent agent assistance.
                            </li>
                            <li className="text-[20px]">
                                Unified Patient and HCP 360° View — leveraging real-time data consolidation.
                            </li>
                            <li className="text-[20px]">
                                Personalized Engagement Journeys — adapting to patient behaviors and clinical needs.
                            </li>
                            <li className="text-[20px]">
                                Proactive Intervention Triggers — powered by AI models using real-time Data Cloud signals.
                            </li>
                        </ul>
                    </div>

                    <p className="text-[20px] w-[675px] leading-tight mt-10 ml-[50px] font-light">
                        Together, Data Cloud and Agentforce enable organizations to elevate
                        case management, field services, and patient programs to new heights —
                        simplifying complex workflows and reducing time to treatment.
                    </p>
                </div>
            </section>

            <div className="bg-white px-8 md:px-16 py-16 w-[1400px] ml-[198px]">
                <h2 className="text-[60px] w-[1084px] font-light mb-12">
                    Related Solutions & Explore More:
                </h2>

                {/* Top Row of 3 Cards with Vertical Separators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b pb-16 mb-16">
                    <div className="flex flex-col space-y-4 md:pr-8 md:border-r md:border-gray-300">
                        <h3 className=" font-semibold  w-[394px] text-[30px] mb-[50px] mt-[-15px]">
                            Salesforce Service Cloud
                        </h3>
                        <p className="text-gray-700 text-[20px] w-[394px] mb-[40px] mt-[40px]">
                            for superior patient and provider service workflows.
                        </p><br /><br />
                        <button className="bg-[#006FBE] w-[162px] h-[62px] text-[20px] text-white px-6 py-2 w-max hover:bg-blue-800 transition">
                            <Link href="/contact-us">Learn More</Link>
                        </button>
                    </div>

                    <div className="flex flex-col space-y-4  md:px-8 md:border-r md:border-gray-3000">
                        <h3 className=" font-semibold w-[394px] text-[30px] mt-[-15px] mb-[3px]">
                            Salesforce Experience (Community) Cloud
                        </h3>
                        <p className="text-gray-700 text-[20px] w-[394px] mb-[40px]">
                            to build patient, HCP, and partner-facing portals.
                        </p><br /><br />
                        <button className="bg-[#006FBE] w-[162px] h-[62px] text-[20px] mt-[60px] text-white px-6 py-2 w-max hover:bg-blue-800 transition">
                            <Link href="/contact-us">Learn More</Link>
                        </button>
                    </div>

                    <div className="flex flex-col space-y-4 md:pl-8">
                        <h3 className=" font-semibold w-[394px] text-[30px] mt-[-15px]">
                            Salesforce Agentforce for Health
                        </h3>
                        <p className="text-gray-700 text-[20px] w-[394px]">
                            AI-driven case management and services optimization.
                        </p><br /><br />
                        <button className="bg-[#006FBE] w-[162px] h-[62px] text-[20px] text-white px-6 py-2 w-max hover:bg-blue-800 transition">
                            <Link href="/contact-us">Learn More</Link>
                        </button>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="max-w-lg">
                    <h3 className=" font-semibold w-[394px] text-[30px] mb-[30px]">
                        Salesforce Data Cloud for Health
                    </h3>
                    <p className="text-gray-700 mb-4 text-[20px] w-[394px]">
                        unified patient data to power next-gen personalization and analytics.
                    </p><br /><br />
                    <button className="bg-[#006FBE] w-[162px] h-[62px] text-[20px] text-white px-6 py-2 w-max hover:bg-blue-800 transition">
                        <Link href="/contact-us">Learn More</Link>
                    </button>
                </div>
            </div>
        </>
    )
}