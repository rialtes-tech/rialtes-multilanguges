// pages/about.js
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../components/contactform";

export default function Autosense() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Autosense | Company Name</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative xl:h-[650px] bg-[url('/images/autosense/Banner-1.webp')] bg-cover bg-right overflow-hidden">
        <div
          className="
        container h-full
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="container mx-auto h-full flex flex-col justify-center">
            <div className="text-white text-[300] font-bold mb-2 xl:text-2xl text-lg xl:w-[20%] w-full border-b pb-3">Automotive Industry Service</div>

            <div className="text-white max-w-3xl xl:text-[44px] text-xl xl:leading-[50px] leading-[26px]">
              Accelerate Your Automotive Business with <span className="font-bold">Rialtes’ AutoSense</span>
            </div>
            <p className="bottom-0 xl:absolute  text-white pb-10 xl:w-[60%] w-full">For over a decade, Rialtes has been a trusted partner for global automotive leaders, helping them navigate rapid industry transformation — from electrification and connected vehicles to customer experience innovation and supply chain resilience. Our specialized service suite, AutoSense, brings together deep automotive expertise, Salesforce Automotive Cloud proficiency, and powerful ERP integrations to drive real business outcomes.</p>
          </div>
        </div>
      </section>




      <section className="relative h-full bg-[url('/images/autosense/Banner-2.webp')] bg-cover bg-right overflow-hidden py-20">
        <div
          className="text-white
        container h-full
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div>
            <div className="grid grid-cols-12 gap-2">
              <div className="xl:col-span-4 col-span-12"></div>
              <div className="p-4 xl:col-span-8 col-span-12">
                <h2 className="text-white">Introducing <span className="font-bold">Rialtes AutoSense</span>  End-to-End Automotive Solutions</h2>

                <p className="text-white pb-10 mt-5">AutoSense is Rialtes’ comprehensive service suite designed specifically for the evolving needs of the automotive ecosystem — including OEMs, suppliers, dealers, and mobility providers. AutoSense combines advisory, implementation, quality assurance, and post-go-live support, fully integrated with OEM technology partners like SAP and Salesforce.</p>
                <h3>Key Pillars of AutoSense</h3>
                <div className="flex gap-5 mt-5 xl:flex-row flex-col">
                  <div className="border rounded-[30px] p-5 xl:w-1/2 w-full">
                    <p className="flex justify-end">01</p>
                    <Image
                      src="/images/autosense/AS-i1.svg"
                      className="w-20"
                      alt="How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration"
                      priority
                      width='0'
                      height='0'
                    />
                    <h4 className="mt-5">Strategic Advisory & Roadmapping</h4>

                    <ul className="list-disc list-inside mt-3">
                      <li>Future-ready IT and digital strategy aligned to electrification, AI, and CX goals.</li>
                      <li>Process reimagination workshops leveraging SAP Signavio and Salesforce advisory tools.</li>
                      <li> EV market-readiness and regulatory compliance assessments.</li>
                    </ul>


                  </div>
                  <div className="border rounded-[30px] p-5 xl:w-1/2 w-full">
                    <p className="flex justify-end">02</p>
                    <Image
                      src="/images/autosense/AS-i2.svg"
                      className="w-20"
                      alt="How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration"
                      priority
                      width='0'
                      height='0'
                    />
                    <h4 className="mt-5">Design & Implementation</h4>

                    <ul className="list-disc list-inside mt-3">
                      <li>Future-ready IT and digital strategy aligned to electrification, AI, and CX goals.</li>
                      <li>Process reimagination workshops leveraging SAP Signavio and Salesforce advisory tools.</li>
                      <li> EV market-readiness and regulatory compliance assessments.</li>
                    </ul>

                  </div>
                </div>
                <div className="flex mt-8 gap-5 xl:flex-row flex-col">
                  <div className="border rounded-[30px] p-5 xl:w-1/2 w-full">
                    <p className="flex justify-end">03</p>
                    <Image
                      src="/images/autosense/AS-i1.svg"
                      className="w-20"
                      alt="How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration"
                      priority
                      width='0'
                      height='0'
                    />
                    <h4 className="mt-5">Integration & Quality Assurance</h4>

                    <ul className="list-disc list-inside mt-3">
                      <li>Future-ready IT and digital strategy aligned to electrification, AI, and CX goals.</li>
                      <li>Process reimagination workshops leveraging SAP Signavio and Salesforce advisory tools.</li>
                      <li> EV market-readiness and regulatory compliance assessments.</li>
                    </ul>
                  </div>
                  <div className="border rounded-[30px] p-5 xl:w-1/2 w-full">
                    <p className="flex justify-end">04</p>
                    <Image
                      src="/images/autosense/AS-i1.svg"
                      className="w-20"
                      alt="How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration"
                      priority
                      width='0'
                      height='0'
                    />
                    <h4 className="mt-5">Post Go-Live & Continuous Innovation</h4>

                    <ul className="list-disc list-inside mt-3">
                      <li>Future-ready IT and digital strategy aligned to electrification, AI, and CX goals.</li>
                      <li>Process reimagination workshops leveraging SAP Signavio and Salesforce advisory tools.</li>
                      <li> EV market-readiness and regulatory compliance assessments.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="relative h-full bg-[url('/images/autosense/Banner-3.webp')] bg-cover bg-right overflow-hidden py-20">
        <div
          className="text-white
        container h-full
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="xl:w-1/2 w-full h-full flex flex-col justify-center">
            <h2 className="font-bold">How Rialtes Makes It Work </h2>
            <h2>Seamless Integration Across the Ecosystem</h2>

            <h3 className="mt-20">Salesforce Automotive Cloud + Backend ERP Systems (SAP, Oracle, Others)</h3>
            <ul className="list-disc list-inside border-b-2 pb-10 mt-5">
              <li>Integrating Salesforce Automotive Cloud with ERP systems like SAP S/4HANA for Automotive, SAP IBP for Supply Chain, and Oracle Automotive solutions for real-time sync of inventory, production, warranty, and supply chain data.
              </li>
              <li className="mt-3">Enabling dynamic pricing, incentives, order management, and inventory visibility directly within Salesforce.</li>

            </ul>

            <h3 className="mt-10">Salesforce Automotive Cloud + Front-End Data Visualization & AI Solutions</h3>
            <ul className="list-disc list-inside border-b-2 pb-10 mt-10">
              <li>Building interactive dashboards and customer portals using tools like Tableau, Power BI, and AI/ML-powered analytics.
              </li>
              <li className="mt-3">Delivering real-time visual insights for leadership on sales trends, vehicle demand, service patterns, and customer sentiment.</li>
            </ul>
            <h3 className="mt-10">End-to-End Process Automation & Quality Assurance</h3>
            <ul className="list-disc list-inside mt-10">
              <li>Implementing process automation for sales, service, and marketing workflows.
              </li>
              <li className="mt-3"> Ensuring data integrity, security compliance, and zero-defect delivery through AI-powered testing frameworks.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative h-[800px] bg-[#134874]  py-20">
        <div
          className="text-white
        container h-full
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="container mx-auto h-full flex flex-col">
            <h2>Why Choose Rialtes for Automotive Transformation?</h2>

            <div>
              <div className="flex gap-10 justify-center mt-10 xl:flex-row flex-col">
                <div className="border-r-2 pr-10">
                  <Image
                    src="/images/autosense/AS-i6.svg"
                    className="w-20"
                    alt="How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration"
                    priority
                    width='0'
                    height='0'
                  />
                </div>
                <h3 className="xl:w-[15%] w-full">10+ Years of Automotive Expertise</h3>
                <p className="xl:w-[40%] w-full">We bring over a decade of hands-on experience working with OEMs, suppliers, dealers, and EV startups across the automotive value chain. From manufacturing floors to customer showrooms, we understand the unique challenges and opportunities shaping the future of mobility.</p>
              </div>
              <div className="flex gap-10 justify-center mt-10 xl:flex-row flex-col">
                <div className="border-r-2 pr-10">
                  <Image
                    src="/images/autosense/AS-i7.svg"
                    className="w-20"
                    alt="How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration"
                    priority
                    width='0'
                    height='0'
                  />
                </div>
                <h3 className="xl:w-[15%] w-full">Salesforce Automotive Cloud Experts</h3>
                <p className="xl:w-[40%] w-full">As certified Salesforce Automotive Cloud specialists, we empower automotive companies to deliver connected, personalized customer experiences, improve dealer collaboration, and unlock the power of connected vehicle data.</p>
              </div>
              <div className="flex gap-10 justify-center mt-10 xl:flex-row flex-col">
                <div className="border-r-2 pr-10">
                  <Image
                    src="/images/autosense/AS-i8.svg"
                    className="w-20"
                    alt="How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration"
                    priority
                    width='0'
                    height='0'
                  />
                </div>
                <h3 className="xl:w-[15%] w-full">Seamless ERP & Data Integration</h3>
                <p className="xl:w-[40%] w-full">We specialize in integrating Salesforce Automotive Cloud with backend ERP platforms like SAP S/4HANA and Oracle, creating a unified data ecosystem that connects sales, service, supply chain, and finance.</p>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="relative h-full bg-[url('/images/autosense/Banner-4.webp')] bg-cover bg-right overflow-hidden py-20">
        <div
          className="text-black
        container h-full
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="xl:w-[50%] w-full  h-full flex flex-col">
            <h2>Partner with Rialtes to Drive Intelligent Automotive Transformation</h2>

            <p className="mt-5">Whether you’re a global OEM, a growing EV brand, or a leading dealership network, Rialtes helps you connect technology with outcomes. From advisory and implementation to ongoing innovation, we are your partner in building the future of mobility.</p>
          </div>
        </div>
      </section>
      <section className="relative h-full bg-[url('/images/autosense/Banner-5.webp')] bg-cover bg-right overflow-hidden py-20">
        <div
          className="text-white
        container h-full
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="container mx-auto h-full flex flex-col justify-center">
            <h2>Thought Leadership Themes for Automotive Clients</h2>

            <p className="mt-5">Here are 5 high-impact thought leadership ideas Rialtes can drive to position as an industry leader:</p>
            <div className="grid grid-cols-12 gap-2">
              <div className="xl:col-span-4 col-span-12"></div>
              <div className=" p-4 xl:col-span-8 col-span-12">

                <div className="border-b-2 pb-5 mt-20">
                  <h3>The Road to EV-First Business Models:</h3>
                  <h4>What Automotive Leaders Need to Know</h4>
                  <p>• Navigating battery lifecycle, new revenue streams, and digital sales transformation.</p>
                </div>

                <div className="border-b-2 pb-5 mt-10">
                  <h3>AI-Powered Supply Chains:</h3>
                  <h4>Solving Automotive Disruption with Intelligence</h4>
                  <p> • How AI and SAP IBP are redefining proactive supply chain visibility.</p>
                </div>

                <div className="border-b-2 pb-5 mt-10">
                  <h3> From Car Sales to Mobility Services:</h3>
                  <h4> The Future of Customer Experience in Automotive</h4>
                  <p> • Leveraging Salesforce Automotive Cloud for end-to-end CX management.</p>
                </div>

                <div className="border-b-2 pb-5 mt-10">
                  <h3>Connected Cars, Data Goldmine:</h3>
                  <h4> Monetization and AI-Driven Insights </h4>
                  <p> • How to unlock the value of data streams from connected vehicles.</p>
                </div>

                <div className="border-b-2 pb-5 mt-10">
                  <h3>Sustainability in the Fast Lane:</h3>
                  <h4> Making Green Mobility Profitable</h4>
                  <p>• Aligning profitability with ESG goals through AI and intelligent platforms.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="relative h-[670px] bg-[url('/images/autosense/Banner-6.webp')] bg-cover bg-right overflow-hidden py-20">
        <div
          className="text-white
        container h-full
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="container mx-auto h-full flex flex-col justify-center">
            <div className="grid grid-cols-12 gap-2">
              <div className="xl:col-span-6 col-span-12"></div>
              <div className=" p-4 xl:col-span-6 col-span-12">
                <h2>Accelerate Your Automotive Transformation with Rialtes</h2>
                <p className="mt-5">The future of automotive is connected, personalized, and intelligent. Rialtes is here to help you lead that future — combining deep industry knowledge, advanced platforms, and integration expertise.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]
        text-black py-20"
      >
        <ContactForm />
      </div>
    </div>
  );
}
