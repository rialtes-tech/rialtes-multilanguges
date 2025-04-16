


"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "@/app/components/learnMore";


export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Grow with SAP Services: Future-Proof Your S/4HANA Strategy | Rialtes"
        description="Rise with SAP and simplify your S/4HANA migration. Rialtes ensures a smooth, secure, and future-ready transformation for your enterprise."
        keywords="home, website, welcome"
      />

      <section className="relative group overflow-hidden h-[435px] lg:h-[650px]">
        <div className="xl:block hidden">
          <Image
            src="/images/services/grow-with-sap/AdobeStock_1335365875.webp"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110 objet-[49%_20%]"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/services/grow-with-sap/AdobeStock_1335365875 (1).webp"
            alt=""
            fill
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
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
          <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 mt-20">
            <div className="xl:col-span-5 col-span-12">
              <h3 className="text-white xl:text-[24px]  font-bold mb-2">VoyagerNext</h3>
              <h1 className="text-white xl:text-[60px] leading-tight xl:w-full text-[24px] w-[76%]">
                Grow Faster, Smarter with Rialtes' SAPNext
              </h1>
              <h3 className="mt-8 xl:text-[35px] text-[18px] text-white xl:font-bold font-medium w-[76%] xl:w-full">Your Partner for SAP S/4HANA Cloud Transformation</h3>
              <div className="md:w-32 w-20 pt-6 mt-5">
                <Image
                  src="/images/success-factors/sap-partner-logo.webp"
                  alt="SAP Partner Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  priority
                />
              </div>
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
          <div className="xl:col-span-8 col-span-11">
            <h2 className="text-[26px] xl:text-[60px]">
              Unlock the Power of SAP S/4HANA Cloud with Rialtes SAPNext Services
            </h2>
            <p className="xl:text-[22px] text-[16px] mt-5">At Rialtes, we help organizations embrace SAP's next-generation S/4HANA Cloud ERP using Grow with SAP — delivering enterprise-grade solutions built for scalability, agility, and future-proof growth </p>
            <p className="xl:text-[22px] text-[16px] mt-5">As a certified SAP partner with presence in the United States, Canada, India, and Singapore, and a team of highly certified SAP experts, Rialtes is your trusted partner for end-to-end SAP transformation. Our SAPNext services seamlessly combine:</p>
          </div>
          <div className="xl:col-span-4 col-span-12">
          </div>
        </div>

      </section>



      <div
        className="xl:container
               xl:ml-[280px]   md:ml-[100px] md:w-[calc(100%-100px)] mx-[35px]  xl:mr-0"
      >
        <div className="grid xl:grid-cols-3 grid-cols-1 mt-16 gap-16">
          <div className="flex items-center xl:gap-5 gap-10 mr-32 xl:mr-0">
            <Image
              className="xl:w-[138px] xl:h-[138px] w-[75px] h-[75px]"
              src='/images/services/grow-with-sap/SAP License Advisory.svg'
              alt="Taking the lead"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <p className="xl:text-[26px] text-[20px] font-medium">SAP License Advisory</p>
          </div>
          <div className="flex items-center xl:gap-5 gap-10 mr-20 xl:mr-0">
            <Image
              className="xl:w-[138px] xl:h-[138px] w-[75px] h-[75px]"
              src='/images/services/grow-with-sap/Quality Assurance & User Training.svg'
              alt="Taking the lead"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <p className="xl:text-[26px] text-[20px] font-medium">Quality Assurance & User Training</p>
          </div>
          <div className="flex items-center xl:gap-8 gap-10 mr-20 xl:mr-0">
            <Image
              className="xl:w-[138px] xl:h-[138px] w-[75px] h-[75px]"
              src='/images/services/grow-with-sap/Post Go-Live Support .svg'
              alt="Taking the lead"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <p className="xl:text-[26px] text-[20px] font-medium">Post Go-Live Support & Continuous Optimization</p>
          </div>
          <div className="flex items-center xl:gap-5 gap-10">
            <Image
              className="xl:w-[138px] xl:h-[138px] w-[75px] h-[75px]"
              src='/images/services/grow-with-sap/Solution Design & Implementation.svg'
              alt="Taking the lead"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <p className="xl:text-[26px] text-[20px] font-medium">Solution Design & Implementation</p>
          </div>
          <div className="flex items-center xl:gap-5 gap-10">
            <Image
              className="xl:w-[138px] xl:h-[138px] w-[75px] h-[75px]"
              src='/images/services/grow-with-sap/System Integration & Customization.svg'
              alt="Taking the lead"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <p className="xl:text-[26px] text-[20px] font-medium">System Integration & Customization</p>
          </div>
        </div>

      </div>
      <div
        className="
                  h-full  xl:mr-[142px]
                 xl:ml-[280px]   md:ml-[100px]
                 "
      >
        <p className="xl:text-[26px] text-[16px] bg-[#0C8AD4] xl:pr-[270px] p-10 pl-10 text-white mt-20 leading-tight">We deliver business value from strategy to execution — enabling you to Grow with SAP and accelerate towards an intelligent, AI-powered enterprise.</p>

      </div>
      <section className="relative h-[1150px] xl:h-[800px] flex flex-col xl:flex-row-reverse mt-16 ">
        <div
          className="
                  h-full relative group overflow-hidden
                 mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]"

        >
          <div className="xl:block hidden">
            <Image
              src="/images/services/grow-with-sap/GWS.webp"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              priority

              className="transform transition-transform duration-500 group-hover:scale-110 object-[35%_20%]"
            />
          </div>
          <div className="xl:hidden block">
            <Image
              src="/images/services/grow-with-sap/Why Now.webp"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div>

          </div>
          <div className="xl:grid xl:grid-cols-12 grid-cols-1 relative  xl:mt-0 mt-[30rem]">
            <div className="xl:col-span-4 col-span-12 xl:pl-16 pl-8 text-white pr-32 xl:pr-0">
              <h2 className="text-[26px] xl:text-[60px]  xl:mt-20  leading-tight">
                Grow with SAP: Why Now?
              </h2>

            </div>
            <div className="xl:col-span-7 col-span-12">
            </div>
          </div>
          <div className="xl:grid xl:grid-cols-12 grid-cols-1 relative xl:pl-16 px-[35px] flex  flex-row-reverse">
            <div className="xl:col-span-5 col-span-12 text-white">

              <p className="xl:text-[21px] text-[16px] mt-10">Grow with SAP brings the power of SAP S/4HANA Cloud Public Edition to mid-market and growing enterprises with pre-configured industry best practices, rapid deployment, and flexible licensing — making enterprise-grade ERP affordable, scalable, and fast to implement.</p>
              <h3 className="mt-10 xl:text-[30px] xl:font-bold text-[22px] font-medium">Benefits of Grow with SAP:</h3>
              <ul className="list-disc xl:space-y-5  marker:font-bold marker:text-2xl pl-5 xl:text-[20px] font-light pr-20">
                <li className="mt-4"><span className="font-bold">Fast time-to-value</span> with preconfigured processes.</li>
                <li><span className="font-bold">Cloud agility and scalability</span> for growing businesses.</li>
                <li><span className="font-bold">AI and automation ready</span> for future innovation.</li>
                <li className="font-bold">End-to-end compliance and security</li>
              </ul>

            </div>
            <div className="xl:col-span-1 col-span-12">
            </div>
            <div className="xl:col-span-6 col-span-12">
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-auto xl:h-[1000px]  xl:mt-32 mt-10 bg-image-grow pb-10">
        <div className="xl:block hidden">
          <Image
            src="/images/services/grow-with-sap/Migration.webp"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/services/grow-with-sap/Group 458.webp"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
          />
        </div>
        <div
          className="
                     h-full relative
                    mx-[35px] xl:mr-0
                    xl:ml-[280px] xl:w-[calc(100%-280px)]
                    md:ml-[100px] md:w-[calc(100%-100px)]
                   
                   "
        >
          <div className="grid xl:grid-cols-12 grid-cols-1 text-white">
            <div className="xl:col-span-6 col-span-12">
              <h2 className="text-[25px] xl:text-[60px]  mt-16 leading-tight pr-20">
                SAP Business One (B1) to SAP S/4HANA Migration
              </h2>
              {/* <h2 className="text-[25px] xl:text-[60px]  mt-16 leading-tight xl:hidden block pl-32">
              Rialtes and SAP Activate Methodology + SAP Signavio
              </h2> */}

              <h3 className="mt-5 xl:text-[40px] text-[22px]">Future-Proof Your ERP</h3>
            </div>
            <div className="xl:col-span-1 col-span-12">
            </div>
            <div className="xl:col-span-3 col-span-12 xl:mt-16 mt-5 pr-16">
              <p className="xl:text-[22px] text-[16px]">For businesses running SAP Business One (SAP B1), Rialtes provides a clear, structured path to migrate to SAP S/4HANA Cloud under Grow with SAP.</p>

            </div>
          </div>

          <div className="grid xl:grid-cols-12 grid-cols-1 text-white xl:pt-10 pt-16 xl:pb-32 xl:pr-10 xl:pl-10">

            <div className="xl:col-span-4 col-span-12">
              <h3 className="xl:text-[30px] text-[22px] xl:font-bold font-medium pr-10">Benefits of Migrating from SAP B1 to S/4HANA Cloud:</h3>

              <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3">
                <li><span className="font-bold">Scalability — </span>Move beyond the limitations of SAP B1 to a cloud-first, scalable ERP.</li>
                <li><span className="font-bold">Advanced Analytics & AI — </span>Unlock real-time insights and automation</li>
                <li><span className="font-bold">Global Compliance & Localization —</span> Built-in support for global operations.</li>
                <li><span className="font-bold">  Seamless Integrations — </span> Easily integrate with suppliers, partners, and customers.</li>
                <li><span className="font-bold">  Modern User Experience — </span> SAP Fiori-based modern UX for enhanced productivity. </li>
              </ul>
            </div>
            <div className="xl:col-span-1 col-span-12">
            </div>
            <div className="xl:col-span-4 col-span-12 mt-20 xl:mt-0">
              <h3 className="xl:text-[30px] font-bold">Rialtes SAP B1 to S/4HANA Migration Approach:</h3>

              <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3">
                <li >Current Landscape Assessment & Fit Analysis</li>
                <li >Business Process Mapping to S/4HANA Best Practices</li>
                <li>Data Migration Planning and Execution</li>
                <li>System Setup, Configuration & Custom Extensions</li>
                <li>Training, Testing, and Go-Live Support</li>
              </ul>
              <button className="bg-white hover:bg-[#ffffff] hover:text-[#134874] border-[1px] xl:text-[20px] border-[solid] border-[#134874] mt-10 font-semibold text-black py-3 px-8 transition duration-300 order-4">
                <Link href='/contact-us'>Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      </section>




      <div
        className="
  xl:container
  mx-[35px]  xl:mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]

  text-black py-20 pt-16"
      >
        <div className="grid xl:grid-cols-12 grid-cols-1  xl:gap-20">
          <div className="xl:col-span-8 col-span-12 pr-10">
            <h2 className="text-[25px] xl:text-[60px]  leading-tight">
              Rialtes and SAP Activate Methodology + SAP Signavio
            </h2>
            <h3 className="xl:text-[40px] text-[22px] mt-5">Your Roadmap to Success</h3>
          </div>

          <div className="xl:col-span-4 col-span-12 mt-5 xl:mt-0 pr-10">
            <p className="xl:text-[22px] text-[16px]">Delivering Success with SAP Activate & SAP Signavio Business Process Intelligence (BPI)</p>
            <p className="xl:text-[22px] text-[16px] mt-5">Rialtes leverages SAP Activate methodology combined with SAP Signavio to ensure a process-first, value-driven ERP transformation.</p>
          </div>
        </div>
      </div>


      <div
        className="xl:mb-20 mb-10
  xl:container
         mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
  
  text-black"
      >
        <h2 className="xl:text-[30px] text-[18px] font-bold pl-8 xl:mt-10 pr-20">Key Phases of SAP Activate Methodology:</h2>

        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#D0EEFF] text-left">
                <th className="p-4 pl-10 text-[16px] md:text-[30px] font-medium">Phase</th>
                <th className="p-4 xl:pl-32 pl-20 text-[16px] md:text-[30px] font-medium">What We Deliver</th>
              </tr>
            </thead>
            <tbody className="mt-3">
              {[
                { title: "Discover", desc: "Value identification, business case, high-level roadmap." },
                { title: "Prepare", desc: "Team enablement, project planning, initial scoping." },
                { title: "Explore", desc: "Fit-to-standard analysis powered by SAP Signavio, gap identification." },
                { title: "Realize", desc: "System configuration, extensions on SAP BTP, integration design." },
                { title: "Deploy", desc: "End-user training, data migration, go-live execution." },
                { title: "Run", desc: "Hypercare, continuous improvement, AI integration." }

              ].map((item, index) => (
                <tr key={index} className={`${index % 2 === 0 ? "bg-[#F2F2F2]" : "bg-white"}   mt-5`}>
                  <td className="p- text-[16px] md:text-[26px] font-light pl-10">{item.title}</td>
                  <td className="p-6 xl:pl-32 pl-20 text-[16px] md:text-[26px] font-light">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="xl:mb-20 mb-12 xl:mr-[142px] mt-0
        xl:ml-[280px]   md:ml-[100px] mr-0
       
  text-black"
      >
        <div className="grid xl:grid-cols-12 grid-cols-1  bg-[#068EDA] xl:gap-8 gap-3 pb-5">
          <div className="xl:col-span-3 col-span-12 pl-10  xl:w-[355px] w-[370px]">
            <Image
              src="/images/services/rise-with-sap/SAP Signavio.webp"
              alt="SAP Partner Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%', objectFit: 'fill' }}
              priority
              className=""
            />
          </div>
          <div className="xl:col-span-9 col-span-12 text-white p-5 pl-10">
            <p className="xl:text-[26px] text-[16px]">SAP Signavio enables process modeling, simulation, and improvement for a future-ready operating model aligned with SAP standards.</p>
          </div>
        </div>

      </div>

      {/* <section className="relative h-[500px] xl:h-[720px]  mt-5 xl:mt-0  ">
      
        <Image
          src="/images/services/grow-with-sap/Expanding Value.webp"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div
       
          className="relative
                  h-full
                 ml-[15px] w-[calc(100%-15px)] mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
                 sm:mx-5 sm:w-[calc(100%-40px)]
                 xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="grid xl:grid-cols-12 grid-cols-1 gap-20">
            <div className="xl:col-span-6 col-span-12">
              <h2 className="text-[25px] xl:text-[60px]  mt-16 text-white leading-tight">
                Expanding Value with SAP SuccessFactors, Ariba, and Procurement
              </h2>
            </div>
            
            <div className="xl:col-span-5 col-span-12">
            </div>
          </div>

          <div className="grid xl:grid-cols-12 grid-cols-1 mt-8">
            <div className="xl:col-span-9 col-span-12 flex xl:flex-row flex-col gap-5">
              <div className="flex-1 p-8 bg-white hover:bg-[#D9F2FF] text-black border-[2px]  hover:border-none">
                <h3 className="xl:text-[30px] font-bold">SAP SuccessFactors + S/4HANA Cloud</h3>
                <p className="xl:text-[20px] mt-5 p-2">Enable next-generation HR and workforce management seamlessly integrated with SAP S/4HANA for unified employee and finance data. Manage the entire hire-to-retire lifecycle, aligned with real-time business operations.</p>
              </div>
              <div className="flex-1 p-8 bg-white hover:bg-[#D9F2FF] text-black border-[2px] hover:border-none">
                <h3 className="xl:text-[30px] font-bold">SAP Ariba + S/4HANA Cloud</h3>
                <p className="xl:text-[20px] mt-5">Integrate direct and indirect procurement seamlessly with S/4HANA to drive supplier collaboration, contract management, and procurement analytics. Rialtes ensures end-to-end Ariba-S/4HANA integrations for global sourcing.</p>
              </div>
              <div className="flex-1 p-8 bg-white hover:bg-[#D9F2FF] text-black border-[2px] hover:border-none">
                <h3 className="xl:text-[30px] font-bold">Direct and Indirect Procurement</h3>
                <p className="xl:text-[20px] mt-5 p-2">Enable complete procurement transformation, reduce costs, enhance supplier visibility, and ensure compliance with integrated sourcing strategies.</p>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
            </div>
          </div>
        </div>
      </section> */}


      <section className="relative w-full group overflow-visible">
        {/* Background Image container */}
        <div className="relative h-[660px] xl:h-[720px] w-full overflow-hidden">
          <Image
            src="/images/services/grow-with-sap/Expanding Value.webp"
            alt=""
            fill
            priority
            className="transition-transform duration-700 group-hover:scale-110 object-cover object-[85%_30%]"
          />

          {/* Content over the image */}
          <div className="relative mt-[24rem] xl:mt-0 z-10 h-full mx-[35px]  xl:ml-[280px] xl:w-[calc(100%-280px)] md:ml-[100px] md:w-[calc(100%-100px)] flex">
            <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20">
              <div className="xl:col-span-6 col-span-12">
                <h2 className="text-[25px] xl:text-[60px] text-white leading-tight mt-16">
                  Expanding Value with SAP SuccessFactors, Ariba, and Procurement
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="relative xl:mt-[-380px] z-20 mx-[35px]  xl:ml-[280px] xl:mr-[420px] mt-[-5rem]   md:ml-[100px]">
          <div className="xl:col-span-9 col-span-12 flex xl:flex-row flex-col gap-5">
            <div className="flex-1 p-8 bg-white hover:bg-[#D9F2FF] text-black border-[2px]  hover:border-none">
              <h3 className="xl:text-[30px] font-bold text-[22px]">SAP SuccessFactors + S/4HANA Cloud</h3>
              <p className="xl:text-[20px] mt-5 p-2 text-[16px]">Enable next-generation HR and workforce management seamlessly integrated with SAP S/4HANA for unified employee and finance data. Manage the entire hire-to-retire lifecycle, aligned with real-time business operations.</p>
            </div>
            <div className="flex-1 p-8 bg-white hover:bg-[#D9F2FF] text-black border-[2px] hover:border-none">
              <h3 className="xl:text-[30px] font-bold text-[22px]">SAP Ariba + S/4HANA Cloud</h3>
              <p className="xl:text-[20px] mt-5 text-[16px]">Integrate direct and indirect procurement seamlessly with S/4HANA to drive supplier collaboration, contract management, and procurement analytics. Rialtes ensures end-to-end Ariba-S/4HANA integrations for global sourcing.</p>
            </div>
            <div className="flex-1 p-8 bg-white hover:bg-[#D9F2FF] text-black border-[2px] hover:border-none">
              <h3 className="xl:text-[30px] font-bold text-[22px]">Direct and Indirect Procurement</h3>
              <p className="xl:text-[20px] mt-5 p-2 text-[16px]">Enable complete procurement transformation, reduce costs, enhance supplier visibility, and ensure compliance with integrated sourcing strategies.</p>
            </div>
          </div>
          <div className="xl:col-span-3 col-span-12">
          </div>
        </div>
      </section>
      <div
        className="xl:mt-24 mt-16
                  h-full relative
                 mx-[35px] xl:mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
                "
      >
        <div className="grid grid-cols-12">
          <div className="xl:col-span-9 col-span-12">
            <h2 className="xl:text-[60px] text-[26px] pr-10">SAP CPI and BTP — Integrated, Customized, and Future-Ready ERP</h2>
            <div className="grid xl:grid-cols-12 grid-cols-1  bg-white pt-10 xl:pb-32 pb-10 xl:gap-20">

              <div className="xl:col-span-6 col-span-12">
                <h3 className="xl:text-[30px] xl:font-bold font-medium pr-20 text-[21px]">SAP Cloud Platform Integration (CPI)</h3>

                <ul className="list-disc space-y-5 marker:font-bold marker:text-[#036CBC] marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-5 pr-10">
                  <li><span className="font-bold">Connect SAP S/4HANA with non-SAP apps </span>like Salesforce, ServiceNow, and legacy systems.</li>
                  <li><span className="font-bold">Real-time, secure API-based integrations. </span></li>
                </ul>
              </div>

              <div className="xl:col-span-6 col-span-12 mt-16 xl:mt-0 ">
                <h3 className="xl:text-[30px] xl:font-bold font-medium text-[21px] pr-20">SAP BTP — Customization and Innovation at Scale</h3>
                <p className="xl:mt-10 mt-5 xl:text-[22px] text-[16px] pr-20">Rialtes offers strong SAP BTP competency to build custom apps, automate workflows, and extend S/4HANA:</p>
                <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-[#036CBC] marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-5">
                  <li><span className="font-bold"> SAP Build Process Automation and Extensions </span></li>
                  <li><span className="font-bold">AI/ML and IoT Integrations </span></li>
                  <li><span className="font-bold"> API Management and Security </span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 col-span-12"></div>
        </div>
        <p className="xl:block hidden xl:text-[26px] text-[16px] bg-[#0C8AD4] p-5 xl:pl-10 xl:mr-[142px] text-white leading-tight">Our certified BTP experts ensure future-proof architecture for every client.</p>
      </div>
      <p className="block xl:hidden xl:text-[26px] text-[16px] bg-[#0C8AD4] p-5 pl-[30px] xl:pl-10 xl:mr-[142px] text-white leading-tight">Our certified BTP experts ensure future-proof architecture for every client.</p>

      <div className="bg-[#184671] xl:pb-20 pb-10 xl:mt-32 mt-10">
        <div
          className="xl:container
                  h-full relative
                 mx-[35px] xl:mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
               "
        >
          <div className="relative xl:h-[665px] h-[341px]">
            <Image
              src="/images/services/grow-with-sap/Agentchat banner (1).webp"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              priority
              className="w-full xl:mt-[-90px] mt-10 xl:object-[35%_20%] object-[58%_20%]"
            />
            <div className="grid xl:grid-cols-12 grid-cols-1 absolute xl:left-10">
              <div className="xl:col-span-7 col-span-12">
                <h2 className="text-[26px] xl:text-[60px] text-black xl:mt-[-30px] mt-[23rem] bg-white xl:bg-transparent pl-8 p-10 leading-tight">Conversational AI with AgentChat — Transforming Customer Engagement</h2>
              </div>
              <div className="xl:col-span-6 col-span-12">
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1 text-white xl:gap-20 mt-80 xl:mt-0">
            <div className="xl:col-span-5 col-span-12">
              <h2 className="xl:text-[40px] xl:font-bold leading-tight font-bold">Meet AgentChat — WhatsApp for Salesforce and SAP</h2>
              <p className="xl:text-[22px] mt-5 xl:pr-20 text-[16px]">
                RialChat is a bi-directional WhatsApp conversational app, fully integrated within Salesforce and extendable to SAP.              </p>
              <button className="xl:text-[20px] border-[1px] border-[solid]  border-[#134874] font-semibold bg-white text-black p-3  transition duration-300 order-4 xl:mt-16 mt-10 mb-10 xl:mb-0">
                <Link href='/products/agentchat'>Know More</Link>
              </button>
            </div>

            <div className="xl:col-span-7 col-span-12 xl:pr-20 ">
              <h3 className="xl:text-[30px] font-bold">Benefits of Grow with SAP:</h3>
              <ul className="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl pr-16">
                <li className="mt-5"><span className="font-bold">Quick Deployment — </span> Setup in minutes, ready to scale.</li>
                <li><span className="font-bold"> Enterprise Security —</span> Role-based access and audit trails.</li>
                <li><span className="font-bold"> Flexible Process Delegation — </span> Manage cases, leads, orders, work orders, and more — by record type.</li>
                <li><span className="font-bold"> Seamless SAP and Salesforce Integration — </span>  Drive conversations linked to ERP and CRM workflows.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:py-20 pt-16 pb-10 xl:mt-10">
        <div
          className="
                  h-full relative
                 mx-[35px] xl:mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
               "
        >
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:pr-[200px]">
            <div className="xl:col-span-5 col-span-12 relative group overflow-hidden h-[450px] xl:h-full">
              <Image
                src="/images/services/grow-with-sap/Future-Proofing.webp"
                alt=""
                fill

                priority
                className=" transform transition-transform duration-500 group-hover:scale-110 xl:!h-[563px] xl:!w-[532px]"
              />
            </div>
            <div className="xl:col-span-1 col-span-12">
            </div>
            <div className="xl:col-span-6 col-span-12 text-black mt-8 xl:mt-0">
              <h2 className="text-[26px] xl:text-[59px] leading-tight pr-10">Future-Proofing with AI, Data, and Automation: The Next Frontier</h2>
              <p className="mt-5 xl:text-[22px] text-[16px]">Leverage SAP Data Cloud and Salesforce Agentforce AI to unlock next-gen ERP capabilities:</p>
              <ul className="list-disc xl:space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5 xl:text-[20px] font-bold mt-10">
                <li className="mt-4">AI-driven analytics and recommendations</li>
                <li>Customer segmentation for targeted marketing</li>
                <li>Predictive insights for supply chain and procurement</li>
                <li>Personalized experiences with Data Cloud + AI</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      {/* Contact Form */}
      <div
        className="
  xl:container
  mx-[35px]  xl:mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
 
  text-black py-16"
      >
        <ContactForm title={'Ready to Grow with SAP? Partner with Rialtes SAPNext Today!'} className={"xl:max-w-[72%] xl:font-medium xl:text-[59px] text-[26px]"} />
      </div >
    </div >
  );
}