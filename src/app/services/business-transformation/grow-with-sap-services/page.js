


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
        title="Rise with SAP Services: Future-Proof Your S/4HANA Strategy | Rialtes"
        description="Rise with SAP and simplify your S/4HANA migration. Rialtes ensures a smooth, secure, and future-ready transformation for your enterprise."
        keywords="home, website, welcome"
      />

      <section className="relative group overflow-hidden h-[350px] lg:h-[650px]">
        <Image
          src="/images/services/grow-with-sap/AdobeStock_1335365875.webp"
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
          <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 mt-20">
            <div className="xl:col-span-5 col-span-12">
              <h3 className="text-white xl:text-[24px] font-bold mb-2">VoyagerNext</h3>
              <h1 className="text-white xl:text-[60px] leading-tight">
                Grow Faster, Smarter with Rialtes' SAPNext
              </h1>
              <h3 className="mt-8 text-[35px] text-white font-bold">Your Partner for SAP S/4HANA Cloud Transformation</h3>
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
              ml-[15px] w-[calc(100%-15px)] mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]
              sm:mx-5 sm:w-[calc(100%-40px)]
              xs:mx-4 xs:w-[calc(100%-32px)]"
      >

        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-8 col-span-11">
            <h2 className="text-[25px] xl:text-[60px]  mt-5">
              Unlock the Power of SAP S/4HANA Cloud with Rialtes SAPNext Services
            </h2>
            <p className="xl:text-[22px] mt-5">At Rialtes, we help organizations embrace SAP's next-generation S/4HANA Cloud ERP using Grow with SAP — delivering enterprise-grade solutions built for scalability, agility, and future-proof growth </p>
            <p className="xl:text-[22px] mt-5">As a certified SAP partner with presence in the United States, Canada, India, and Singapore, and a team of highly certified SAP experts, Rialtes is your trusted partner for end-to-end SAP transformation. Our SAPNext services seamlessly combine:</p>
          </div>
          <div className="xl:col-span-4 col-span-12">
          </div>
        </div>

      </section>



      <div
        className="
                 container h-full relative
                 ml-[15px] w-[calc(100%-15px)] mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
                 sm:mx-5 sm:w-[calc(100%-40px)]
                 xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <div className="grid grid-cols-3 mt-16 gap-20">
          <div className="flex items-center gap-5">
            <Image
              className="w-[138px] h-[138px]"
              src='/images/services/grow-with-sap/SAP License Advisory.svg'
              alt="Taking the lead"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <p className="text-[26px] font-medium">SAP License Advisory</p>
          </div>
          <div className="flex items-center gap-5">
            <Image
              className="w-[138px] h-[138px]"
              src='/images/services/grow-with-sap/Quality Assurance & User Training.svg'
              alt="Taking the lead"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <p className="text-[26px] font-medium">Quality Assurance & User Training</p>
          </div>
          <div className="flex items-center gap-8">
            <Image
              className="w-[138px] h-[138px]"
              src='/images/services/grow-with-sap/Post Go-Live Support .svg'
              alt="Taking the lead"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <p className="text-[26px] font-medium">Post Go-Live Support & Continuous Optimization</p>
          </div>
          <div className="flex items-center gap-5">
            <Image
              className="w-[138px] h-[138px]"
              src='/images/services/grow-with-sap/Solution Design & Implementation.svg'
              alt="Taking the lead"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <p className="text-[26px] font-medium">Solution Design & Implementation</p>
          </div>
          <div className="flex items-center gap-5">
            <Image
              className="w-[138px] h-[138px]"
              src='/images/services/grow-with-sap/System Integration & Customization.svg'
              alt="Taking the lead"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <p className="text-[26px] font-medium">System Integration & Customization</p>
          </div>
        </div>

      </div>
      <div
        className="
                  h-full  xl:mr-[142px]
                 xl:ml-[280px] 
                 "
      >
                <p className="xl:text-[26px] bg-[#0C8AD4] xl:pr-[270px] p-5 pl-10 text-white mt-20">We deliver business value from strategy to execution — enabling you to Grow with SAP and accelerate towards an intelligent, AI-powered enterprise.</p>

      </div>
      <section className="relative h-[500px] xl:h-[800px]  mt-16">

        <div
          className="
                  h-full relative group overflow-hidden
                 ml-[15px] w-[calc(100%-15px)] mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
                 sm:mx-5 sm:w-[calc(100%-40px)]
                 xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <Image
            src="/images/services/grow-with-sap/GWS.webp"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />

          <div className="grid xl:grid-cols-12 grid-cols-1 relative">
            <div className="xl:col-span-4 col-span-12 pl-16 text-white">
              <h2 className="text-[25px] xl:text-[60px]  mt-20  leading-tight">
                Grow with SAP: Why Now?
              </h2>
              
            </div>
            <div className="xl:col-span-7 col-span-12">
            </div>
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1 relative pl-16">
            <div className="xl:col-span-5 col-span-12 text-white">
             
              <p className="text-[21px] mt-10">Grow with SAP brings the power of SAP S/4HANA Cloud Public Edition to mid-market and growing enterprises with pre-configured industry best practices, rapid deployment, and flexible licensing — making enterprise-grade ERP affordable, scalable, and fast to implement.</p>
              <h3 className="mt-10 text-[30px] font-bold">Benefits of Grow with SAP:</h3>
              <ul className="list-disc space-y-5  marker:font-bold marker:text-2xl pl-5 xl:text-[20px] font-medium">
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


      <section className="relative h-[500px] xl:h-[950px]  mt-32 bg-image-grow">
        <Image
          src="/images/services/grow-with-sap/Migration.webp"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
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
          <div className="grid xl:grid-cols-12 grid-cols-1 text-white">
            <div className="xl:col-span-6 col-span-12">
              <h2 className="text-[25px] xl:text-[60px]  mt-16 leading-tight">
                SAP Business One (B1) to SAP S/4HANA Migration
              </h2>
              <h3 className="mt-10 text-[40px]">Future-Proof Your ERP</h3>
            </div>
            <div className="xl:col-span-1 col-span-12">
            </div>
            <div className="xl:col-span-3 col-span-12 mt-16">
              <p className="text-[22px]">For businesses running SAP Business One (SAP B1), Rialtes provides a clear, structured path to migrate to SAP S/4HANA Cloud under Grow with SAP.</p>

            </div>
          </div>

          <div className="grid xl:grid-cols-12 grid-cols-1 text-white pt-10 pb-32 pr-10 pl-10">

            <div className="xl:col-span-4 col-span-12">
              <h3 className="xl:text-[30px] font-bold">Benefits of Migrating from SAP B1 to S/4HANA Cloud:</h3>

              <ul className="list-disc space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-10">
                <li><span className="font-bold">Scalability — </span>Move beyond the limitations of SAP B1 to a cloud-first, scalable ERP.</li>
                <li><span className="font-bold">Advanced Analytics & AI — </span>Unlock real-time insights and automation</li>
                <li><span className="font-bold">Global Compliance & Localization —</span> Built-in support for global operations.</li>
                <li><span className="font-bold">  Seamless Integrations — </span> Easily integrate with suppliers, partners, and customers.</li>
                <li><span className="font-bold">  Modern User Experience — </span> SAP Fiori-based modern UX for enhanced productivity. </li>
              </ul>
            </div>
            <div className="xl:col-span-1 col-span-12">
            </div>
            <div className="xl:col-span-4 col-span-12">
              <h3 className="xl:text-[30px] font-bold">Rialtes SAP B1 to S/4HANA Migration Approach:</h3>

              <ul className="list-disc space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] mt-10">
                <li >Current Landscape Assessment & Fit Analysis</li>
                <li >Business Process Mapping to S/4HANA Best Practices</li>
                <li>Data Migration Planning and Execution</li>
                <li>System Setup, Configuration & Custom Extensions</li>
                <li>Training, Testing, and Go-Live Support</li>
              </ul>
              <button className="bg-white hover:bg-[#ffffff] hover:text-[#134874] border-[1px] text-[20px] border-[solid] border-[#134874] mt-10 font-semibold text-black py-3 px-8 transition duration-300 order-4">
        <Link href='/contact-us'>Learn More</Link>
      </button>
            </div>
          </div>
        </div>
      </section>




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
        <div className="grid xl:grid-cols-12 grid-cols-1 items-center gap-20">
          <div className="xl:col-span-8 col-span-12">
            <h2 className="text-[25px] xl:text-[60px] mt-5 leading-tight">
              Rialtes and SAP Activate Methodology + SAP Signavio
            </h2>
            <h3 className="xl:text-[40px] mt-5">Your Roadmap to Success</h3>
          </div>

          <div className="xl:col-span-4 col-span-12">
            <p className="xl:text-[22px]">Delivering Success with SAP Activate & SAP Signavio Business Process Intelligence (BPI)</p>
            <p className="xl:text-[22px] mt-5">Rialtes leverages SAP Activate methodology combined with SAP Signavio to ensure a process-first, value-driven ERP transformation.</p>
          </div>
        </div>
      </div>


      <div
        className="mb-20
  container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black"
      >
        <h2 className="xl:text-[30px] font-bold">Key Phases of SAP Activate Methodology:</h2>

        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#D0EEFF] text-left">
                <th className="p-4 pl-10 text-[16px] md:text-[30px] font-medium">Phase</th>
                <th className="p-4 pl-32 text-[16px] md:text-[30px] font-medium">What We Deliver</th>
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
                  <td className="p-6 text-[16px] md:text-[26px] font-light pl-10">{item.title}</td>
                  <td className="p-6 pl-32 text-[16px] md:text-[26px] font-light">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="mb-20 xl:mr-[142px] mt-0
        ml-[15px] 
        xl:ml-[280px]
       
  text-black"
      >
        <div className="grid xl:grid-cols-12 grid-cols-1  bg-[#068EDA] gap-8 shadow-lg">
          <div className="xl:col-span-3 col-span-12 pl-10  xl:w-[355px]">
            <Image
              src="/images/services/rise-with-sap/SAP Signavio.webp"
              alt="SAP Partner Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%', objectFit: 'fill' }}
              priority
              className="border-t border"
            />
          </div>
          <div className="xl:col-span-9 col-span-12 text-white p-5 pl-10">
            <p className="xl:text-[26px]">SAP Signavio enables process modeling, simulation, and improvement for a future-ready operating model aligned with SAP standards.</p>
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
  <div className="relative h-[500px] xl:h-[720px] w-full overflow-hidden">
    <Image
      src="/images/services/grow-with-sap/Expanding Value.webp"
      alt=""
      fill
      priority
      className="transition-transform duration-700 group-hover:scale-110"
    />

    {/* Content over the image */}
    <div className="relative z-10 h-full ml-[15px] w-[calc(100%-15px)] xl:ml-[280px] xl:w-[calc(100%-280px)] md:ml-[100px] md:w-[calc(100%-100px)] sm:mx-5 sm:w-[calc(100%-40px)] xs:mx-4 xs:w-[calc(100%-32px)] flex">
      <div className="grid xl:grid-cols-12 grid-cols-1 gap-20">
        <div className="xl:col-span-6 col-span-12">
          <h2 className="text-[25px] xl:text-[60px] text-white leading-tight mt-16">
            Expanding Value with SAP SuccessFactors, Ariba, and Procurement
          </h2>
        </div>
      </div>
    </div>
  </div>

  <div className="relative mt-[-380px] z-20 ml-[15px]  xl:ml-[280px] xl:mr-[420px]">
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
</section>
      <div
        className="mt-24
                  h-full relative
                 ml-[15px] w-[calc(100%-15px)] mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
                 sm:mx-5 sm:w-[calc(100%-40px)]
                 xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <div className="grid grid-cols-12">
          <div className="col-span-9">
            <h2 className="text-[60px]">SAP CPI and BTP — Integrated, Customized, and Future-Ready ERP</h2>
            <div className="grid xl:grid-cols-12 grid-cols-1  bg-white pt-10 pb-32 gap-20">

              <div className="xl:col-span-6 col-span-12">
                <h3 className="xl:text-[30px] font-bold">SAP Cloud Platform Integration (CPI)</h3>

                <ul className="list-disc space-y-5 marker:font-bold marker:text-[#036CBC] marker:text-2xl pl-5 xl:text-[20px] mt-10">
                  <li><span className="font-bold">Connect SAP S/4HANA with non-SAP apps </span>like Salesforce, ServiceNow, and legacy systems.</li>
                  <li><span className="font-bold">Real-time, secure API-based integrations. </span></li>
                </ul>
              </div>
            
              <div className="xl:col-span-6 col-span-12">
                <h3 className="xl:text-[30px] font-bold">SAP BTP — Customization and Innovation at Scale</h3>
                <p className="mt-10 text-[22px]">Rialtes offers strong SAP BTP competency to build custom apps, automate workflows, and extend S/4HANA:</p>
                <ul className="list-disc space-y-5 marker:font-bold marker:text-[#036CBC] marker:text-2xl pl-5 xl:text-[20px] mt-10">
                  <li><span className="font-bold"> SAP Build Process Automation and Extensions </span></li>
                  <li><span className="font-bold">AI/ML and IoT Integrations </span></li>
                  <li><span className="font-bold"> API Management and Security </span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-3"></div>
           
        </div>
        <p className="xl:text-[26px] bg-[#0C8AD4] p-5 pl-10 mr-[142px] text-white">Our certified BTP experts ensure future-proof architecture for every client.</p>

      </div>

      <div className="bg-[#184671] pb-20 mt-32">
        <div
          className="container
                  h-full relative
                 ml-[15px] w-[calc(100%-15px)] mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
                 sm:mx-5 sm:w-[calc(100%-40px)]
                 xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="relative h-[665px]">
            <Image
              src="/images/services/grow-with-sap/Agentchat banner (1).webp"
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "35% 20%" }}
              priority
              className="w-full mt-[-90px]"
            />
            <div className="grid xl:grid-cols-12 grid-cols-1 absolute left-10">
              <div className="xl:col-span-7 col-span-12">
                <h2 className="text-[25px] xl:text-[60px] text-black mt-[-30px] pl-8 leading-tight">Conversational AI with AgentChat — Transforming Customer Engagement</h2>
              </div>
              <div className="xl:col-span-6 col-span-12">
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1 text-white gap-20">
            <div className="xl:col-span-5 col-span-12">
              <h2 className="xl:text-[40px] font-bold leading-tight">Meet AgentChat — WhatsApp for Salesforce and SAP</h2>
              <p className="xl:text-[22px] mt-5 pr-20">
              RialChat is a bi-directional WhatsApp conversational app, fully integrated within Salesforce and extendable to SAP.              </p>
              <button className="text-[20px] border-[1px] border-[solid]  border-[#134874] font-semibold bg-white text-black p-3  transition duration-300 order-4 mt-16">
                <Link href='/products/agentchat'>Know More</Link>
              </button>
            </div>
          
            <div className="xl:col-span-7 col-span-12 pr-20">
              <h3 className="xl:text-[30px] font-bold">Benefits of Grow with SAP:</h3>
              <ul className="list-disc space-y-5 xl:text-[20px] pl-5 marker:font-bold marker:text-2xl">
                <li className="mt-5"><span className="font-bold">Quick Deployment — </span> Setup in minutes, ready to scale.</li>
                <li><span className="font-bold"> Enterprise Security —</span> Role-based access and audit trails.</li>
                <li><span className="font-bold"> Flexible Process Delegation — </span> Manage cases, leads, orders, work orders, and more — by record type.</li>
                <li><span className="font-bold"> Seamless SAP and Salesforce Integration — </span>  Drive conversations linked to ERP and CRM workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 mt-10">
        <div
          className="
                  h-full relative
                 ml-[15px] w-[calc(100%-15px)] mr-0
                 xl:ml-[280px] xl:w-[calc(100%-280px)]
                 md:ml-[100px] md:w-[calc(100%-100px)]
                 sm:mx-5 sm:w-[calc(100%-40px)]
                 xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="grid xl:grid-cols-12 grid-cols-1 pr-[200px]">
            <div className="xl:col-span-5 col-span-12 relative group overflow-hidden">
              <Image
                src="/images/services/grow-with-sap/Future-Proofing.webp"
                alt=""
                fill

                priority
                className="transform transition-transform duration-500 group-hover:scale-110 !h-[563px] !w-[532px]"
              />
            </div>
            <div className="xl:col-span-1 col-span-12">
            </div>
            <div className="xl:col-span-6 col-span-12 text-black">
              <h2 className="text-[25px] xl:text-[59px] leading-tight">Future-Proofing with AI, Data, and Automation: The Next Frontier</h2>
              <p className="mt-5 xl:text-[22px]">Leverage SAP Data Cloud and Salesforce Agentforce AI to unlock next-gen ERP capabilities:</p>
              <ul className="list-disc space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5 xl:text-[20px] font-bold mt-10">
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
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black py-20"
      >
        <ContactForm title={'Ready to Grow with SAP? Partner with Rialtes SAPNext Today!'} className={"max-w-[72%] font-medium text-[59px]"} />
      </div >
    </div >
  );
}