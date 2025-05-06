import DigitalTransformationText, { ManufacturingBanner } from "..//components/breadcrumb"

export default function Apps(){
    return(
        <>    
        <div className="w-full flex justify-center items-center min-h-screen bg-white-100">
        <div
          className="relative w-full h-[460px] bg-cover bg-center flex items-center justify-center mt-[-400px]"
          style={{ backgroundImage: "url('/images/manufacture/Group 586.png')" }}
        >
          <div className="text-left text-white px-0 ml-[-586px] mt-[-37px]" >
            <p className=" text-[14px] font-medium uppercase">Manufacturing</p>
            <h1 className=" text-[52px] font-light mt-2">
              Powering the Future <br /> of Manufacturing
            </h1>
            <p className="text-[23px] font-semibold mt-4">
              Smarter, Faster, Connected
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center  bg-white px-4 h-[1px]">
        <div className="w-full max-w-3xl md:ml-10%] text-gray-800 text-base md:text-lg leading-relaxed mt-[-300px]">
          <p className="text-black text-[14px] ml-[-20px] w-[620px] ml-[-55px]">
            Driving end-to-end digital transformation for manufacturers with AI, Cloud, and Smart Automation. Rialtes empowers manufacturing companies to evolve beyond traditional operations and embrace next-gen manufacturing ecosystems that are agile, data-driven, and customer-centric.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center  bg-white-100 ">
      <div
        className="relative w-[1170px] h-[500px] bg-cover  shadow-lg ml-[-115px]"
       style={{ backgroundImage: "url('/images/manufacture/Group 588.png')"}}
      >
        {/* Overlay Information Div */}
        <div className="absolute left-[200px] top-0 w-[390px] h-full bg-[#094E93] bg-opacity-50 text-white p-6 pl-[30px]">
          <h2 className="text-[36px] font-light mb-2">Thought Leadership</h2>
          <h3 className="text-[23px] font-semibold mb-4">
            Leading the Digital Reinvention of Manufacturing
          </h3>
          <p className="text-[13.5px] leading-relaxed">
            At Rialtes, we believe the future of manufacturing lies in resilient, adaptive, and AI-powered ecosystems. From digital twins to predictive supply chains, we help manufacturers think ahead of disruption and innovate at scale. Our focus is on customer personalization, operational efficiency, and global compliance, powered by connected data and automation.
          </p>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center  bg-white-100 ml-[164px]">
  <div
    className="relative w-[1060px] h-[500px] bg-cover bg-center"
    style={{ backgroundImage: "url('/images/manufacture/Group 589.png')" }}
  >
    {/* Transparent Overlay */}
    <div className="absolute inset-0  bg-opacity-50"></div>

    {/* Text Content */}
    <div className="absolute top-0 left-0 h-full flex items-center pl-[44px] z-10 text-white max-w-[520px]">
      <div>
        <h1 className="text-[39px] font-light leading-tight mb-4">
          Rialtes’ End-to-End<br /> Manufacturing Transformation Services
        </h1>
        <p className="text-[13px] mb-4 w-[404px]">
          Our services cover the entire manufacturing value chain, from advisory and architecture to implementation, testing, and continuous innovation.
        </p>
        <p className="text-[13px] mb-6 w-[404px]">
          We collaborate with leading platforms like SAP, Salesforce, MuleSoft, and Kinaxis to provide scalable, integrated, and future-ready solutions. Rialtes brings together technology, process, and industry expertise under one roof to deliver seamless transformation.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 w-[120px] text-[14px]">
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>

      <div className="flex justify-center items-center bg-white-100">
  <div className="flex w-[1240px] h-[500px] rounded-md shadow-lg overflow-hidden ml-[-90px]">
    
    {/* Left Image Section */}
    <div className="w-[910px] h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/manufacture/Group 590.png')" }}>
      {/* <img 
        src="/images/manufacturer/Group 590.png" 
        alt="Accelerators Visual" 
        className="w-full h-full object-cover" 
      /> */}
    </div>

    {/* Right Text Section */}
    <div className="w-[350px] bg-[#bb7f5d] text-white p-8 flex flex-col justify-center ml-[-20px]">
      <h2 className="text-[38px] font-light leading-tight mb-2">
        Pre-Built<br />Manufacturing<br />Accelerators
      </h2>
      <h3 className="text-lg font-semibold mb-4">
        Speed, Scale, Success
      </h3>
      <p className="text-[12px] leading-relaxed mb-6">
        With industry-specific accelerators, Rialtes enables manufacturers to deploy ready-to-use solutions that cut down months of setup time. From smart factory templates to AI-powered predictive workflows, our tools are designed to accelerate value realization, improve productivity, and drive intelligent operations. Our accelerators also ensure regulatory compliance and quality assurance, reducing risks during implementation.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded w-fit">
        Learn More
      </button>
    </div>

  </div>
</div>
  

    
        <div className="max-w-[1130px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-12 gap-6">
          
          {/* Text Section */}
          <div className="flex-1 w-[300px] ml-[140px]">
            <h2 className="text-[35px] font-light text-gray-900 mb-2 w-[300px]">Discrete Manufacturing</h2>
            <h3 className="text-[20px] font-bold text-gray-800 mb-4 w-[250px]">
              Managing Complex Products Made Simple
            </h3>
            <p className="text-gray-700  leading-relaxed mb-6 w-[320px] text-[13px]">
              Rialtes helps discrete manufacturers handle complex product configurations, multi-tier supply chains, and custom engineering processes. Our solutions integrate end-to-end quoting, engineering, and order management, delivering real-time visibility and seamless customer collaboration. AI-powered insights help predict maintenance needs, reduce downtime, and ensure superior product quality.
            </p>
            <a
              href="#"
              className="bg-[#002b5c] text-white font-semibold px-6 py-2 rounded hover:bg-[#001d3e] transition"
            >
              Learn More
            </a>
          </div>
    
          {/* Image Section */}
          <div className="flex-1 ">
            <img
              src="/images/manufacture/Group 591.png"
              alt="Discrete Manufacturing"
              className="w-full max-w-[800px] h-auto object-cover ml-[-80px]"
            />
          </div>
        </div>
      
        <div className="relative w-[1030px] h-[400px] ml-[23%] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/images/manufacture/Group 592.png")' }}>
      <div className="absolute top-0 right-[15%] h-full w-[380px] bg-[#038FC6] text-white p-10 flex flex-col justify-center">
        <h2 className="text-[38px] mb-2">Process Manufacturing</h2>
        <h3 className="text-[20px] font-semibold mb-2">Optimize Compliance and Yield</h3>
        <p className="text-[11px] leading-relaxed">
          We support process manufacturers in managing complex formulations, compliance demands (FDA, ISO, GMP),
          and volatile supply chains. Our solutions optimize batch production, yield management, and real-time
          quality tracking, ensuring consistent outputs and reduced waste. Rialtes also enables traceability and
          recalls management through integrated, AI-enabled systems.
        </p>
      </div>
    </div>
     
     <div className="mx-auto max-w-[1350px] flex ml-[101px] h-[500px]">
      {/* Left Section */}
      <div className="w-[580px] bg-[#DDF74D] p-10 flex flex-col justify-center pl-[190px]">
        <h2 className="text-[37px] font-light text-gray-900 leading-snug">
          Repetitive <br /> Manufacturing
        </h2>
        <h3 className="text-[23px] font-bold text-black mt-4">
          Streamlining Mass <br /> Production Operations
        </h3>
        <p className="text-[13px] w-[330px] text-gray-800 mt-4 leading-relaxed">
          For high-volume production, Rialtes offers solutions that enhance capacity planning, workforce allocation, and real-time production monitoring. Our tools optimize repetitive workflows and reduce cycle times, ensuring maximum throughput with minimum waste. AI-driven analytics help detect production anomalies early, ensuring product quality and cost efficiency.
        </p>
        <button className="mt-6 bg-[#002D54] text-white text-sm px-5 py-2 font-medium w-fit">
          Learn More
        </button>
      </div>

      {/* Right Section */}
      <div className="w-[700px] bg-cover bg-center" style={{ backgroundImage: "url('/images/manufacture/Group 593.webp')"}}>
        
      </div>
    </div>

  <div className="max-w-[1200px] mx-auto flex gap-6 ml-[290px]">
      {/* Left Column */}
      <div className="w-[450px] h-[660px] flex flex-col">
        <img
          src="/images/manufacture/Group 594.png"
          alt="AI Robotic Manufacturing"
          className="w-full h-[400px] object-cover"
        />
        <div className="bg-[#C6791B] text-white p-5 flex-1 flex flex-col justify-between">
          <div className="pl-[34px]">
            <h2 className="text-[38px] font-light">AI & Robotic Manufacturing</h2>
            <h3 className="text-[22px] font-semibold mt-2 leading-snug">
              Creating Smart, <br /> Autonomous Factories
            </h3>
          </div>
          <p className="text-[12px] mt-4 leading-relaxed pl-[34px] font-light">
            AI and Robotics are reshaping manufacturing, and Rialtes helps clients lead this transformation. From AI-powered predictive maintenance to robotic automation of production lines, we enable factories to be self-learning and adaptive. Digital twins and real-time IoT insights power zero-defect manufacturing and higher productivity, reducing human errors and downtime.
          </p>
        </div>
      </div>

      {/* Right Column - Staggered */}
      <div className="w-[440px] h-[600px] mt-20 flex flex-col ml-[20px]">
        <img
          src="/images/manufacture/Group 595.webp"
          alt="Job Shop Manufacturing"
          className="w-full h-[400px] object-cover"
        />
        <div className="bg-[#0061B0] text-white p-5 flex-1 flex flex-col justify-between">
          <div className="pl-[34px]">
            <h2 className="text-[38px] font-light">Job Shop Manufacturing</h2>
            <h3 className="text-[22px] font-semibold mt-2 leading-snug w-[250px]">
              Managing Custom <br /> Production with Precision
            </h3>
          </div>
          <p className="text-[13px] mt-4 leading-relaxed pl-[34px] font-light">
            Rialtes brings robust solutions for engineer-to-order (ETO) and make-to-order (MTO) job shop environments. Our tailored platforms manage custom project costing, production planning, and supplier coordination, ensuring on-time, on-budget delivery of high-variety, low-volume orders. Real-time dashboards provide visibility into job status, materials, and profitability.
          </p>
        </div>
      </div>
    </div>

    <div className="w-[1220px] h-[600px] mx-auto relative overflow-hidden bg-cover bg-center overflow-visible mt-[214px] mb-[100px]" style={{ backgroundImage: "url('/images/manufacture/Group 596.webp')"}}>
      {/* Background Image */}
     

      {/* Overlay Box */}
      <div className="absolute bottom-6 z-10 left-1/2 -translate-x-1/2 w-[460px] h-[430px] bg-[#B4E0F9] p-12 shadow-lg mt-[400px] top-[-60px] right-[140px]">
        <h2 className="text-[38px] font-light">Data Cloud & Tableau</h2>
        <h3 className="text-lg font-bold mt-1 leading-snug">
          Actionable Insights with <br /> Visual Analytics
        </h3>
        <p className="text-sm mt-3 leading-relaxed text-gray-800">
          With Data Cloud and Tableau, Rialtes helps manufacturers turn complex operational data into meaningful insights. From OEE tracking and downtime analysis to supply chain risks and customer demand forecasting...
        </p>
        <button className="mt-3 px-4 py-2 bg-[#002F5F] text-white text-sm font-semibold">
          Learn More
        </button>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-16 space-y-10">
      {/* Section 1: Info Left, Image Right */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="flex-1 ">
          <h2 className="text-[38px] font-light mb-2 w-[400px] ml-[150px] ">
            ERP Integration with SAP & Oracle via MuleSoft
          </h2>
          <h3 className="text-[24px] font-bold mb-3 ml-[150px]">End-to-End Visibility</h3>
          <p className="text-gray-700 text-[13px] leading-relaxed w-[400px] ml-[150px]">
            Rialtes ensures seamless integration between front-end systems and
            back-end ERPs like SAP and Oracle using MuleSoft. This allows
            manufacturers to orchestrate production planning, order management,
            procurement, and finance without silos. Real-time data flows enable
            accurate decision-making, lower costs, and streamlined supply chains.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 ">
          <img
            src="/images/manufacture/Group 597.webp"
            alt="ERP Integration"
            className="w-[550px] h-auto object-cover"
          />
        </div>
      </div>

      {/* Section 2: Image Left, Info Right */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-[38px] font-light mb-2 w-[400px]">
            Demand Planning with Kinaxis RapidResponse
          </h2>
          <h3 className="text-[24px] font-bold mb-3 w-[400px]">Staying Ahead of the Curve</h3>
          <p className="text-gray-700 text-[13px] leading-relaxed w-[400px]">
            Rialtes leverages Kinaxis RapidResponse to empower manufacturers with
            dynamic demand forecasting and scenario planning. Our solutions help
            manage volatile markets, supplier risks, and customer demands,
            enabling manufacturers to respond in real-time to disruptions. AI-driven
            demand sensing ensures optimal inventory and supply chain agility.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 ml-[145px]">
          <img
            src="/images/manufacture/Group 598.webp"
            alt="Demand Planning"
            className="w-[550px]  h-auto  object-cover"
          />
        </div>
      </div>
    </div>

     <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
      {/* Section 1: Overlay Text on Centered Image */}
      <div className="relative flex justify-center">
        {/* Image Div */}
        <div className="w-[930px] h-[530px]">
          <img
            src="/images/manufacture/Group 599.webp"
            alt="AI in Manufacturing"
            className="w-full h-full object-cover rounded ml-[170px]"
          />
        </div>

        {/* Text Overlay */}
        <div className="absolute top-1/2 -translate-y-1/2 bg-green-600 text-white p-8 w-[400px] shadow-lg ml-[-563px]">
          <h2 className="text-3xl font-light mb-2">AI in Manufacturing</h2>
          <h3 className="text-xl font-bold mb-3">Shaping a Smarter Future</h3>
          <p className="text-sm leading-relaxed mb-4">
            AI is no longer the future — it’s shaping today’s manufacturing. Rialtes brings AI-powered
            solutions for predictive maintenance, intelligent scheduling, defect detection, and demand forecasting.
          </p>
          <p className="text-sm leading-relaxed mb-6">
            AI helps manufacturers adapt faster, optimize resources, and deliver customized products efficiently,
            enhancing both profitability and customer satisfaction.
          </p>
          <button className="bg-blue-900 text-white py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>

      {/* Section 2: Image Left, Text Right */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Image */}
        <div className="flex-1">
          <img
            src="/images/manufacture/Group 600.webp"
            alt="SAP and Salesforce"
            className="w-full h-auto rounded"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-[40px] font-light mb-2">SAP & Salesforce</h2>
          <h3 className="text-[26px] font-bold mb-3 w-[360px]">The Power Duo for Intelligent Manufacturing</h3>
          <p className="text-gray-700 text-[13px] leading-relaxed mb-6 w-[400px]">
            Rialtes partners with SAP and Salesforce to create connected, intelligent, and agile manufacturing ecosystems.
            Together they deliver 360-degree visibility from factory to customer.
            We enable manufacturers to integrate customer feedback, dealer management, and service workflows into a single intelligent platform.
          </p>
          <button className="bg-blue-900 text-white py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  <div
  className="flex justify-center py-12 "
>
  <div
    className="relative bg-cover bg-center h-[700px] w-[1270px] flex items-center rounded-lg overflow-hidden px-12 ml-[10px]"
    style={{
      backgroundImage: "url('/images/manufacture/Group 601.webp')", // Your image
    }}
  >
    {/* Overlay content: split into two vertical columns */}
    <div className=" text-white w-[650px] flex justify-between px-8 py-10 p-  rounded shadow-lg ml-[100px]">
      {/* Left Column */}
      <div className="space-y-6 max-w-[45%]">
        <h2 className="text-[36px] text-gray-300 mt-[80px]">Fast Facts</h2>
        <h3 className="text-[28px] font-light mb-4 w-[500px]">Manufacturing Industry Insights</h3>

        <p className="text-[18px]">
          <span className="text-blue-400 text-[40px] font-bold">70%</span><br />
          of manufacturers are accelerating Industry 4.0 investments.
        </p>

        <p className="text-[18px]">
          <span className="text-blue-400 text-[40px] font-bold">76%</span><br />
          of companies struggle with real-time supply chain visibility.
        </p>

        <p className="text-[18px]">
          Cloud-enabled manufacturing systems increase equipment effectiveness by.<br />
          <span className="text-blue-400 text-[40px] font-bold">15%</span>
          
        </p>
      </div>

      {/* Right Column */}
      <div className="space-y-6 max-w-[45%] mt-[210px]">
        <p className="text-[18px]">
          AI adoption in manufacturing expected to surpass <br />
          <span className="text-blue-400 text-[40px] font-bold">$20 billion</span> by 2030.
        </p>

        <p className="text-[18px]">
          Smart factories can boost productivity by up to <br />
          <span className="text-blue-400 text-[40px] font-bold">30%</span>.
        </p>

        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>
<div className="flex justify-center py-6 px-4 bg-white">
  <div className="max-w-[1200px] w-full flex flex-col md:flex-row md:items-start md:gap-x-8">
    
    {/* Left Side: Text and Form */}
    <div className="w-full md:w-[70%]">
      <h2 className="text-[36px] font-light mb-4 w-full max-w-[560px] ml-[146px]">
        Ready to Reimagine Your <br /> Manufacturing Future?
      </h2>
      <p className="text-gray-700 mb-2 max-w-[560px] text-[14px] ml-[146px]">
        Partner with Rialtes to transform your manufacturing operations with AI, SAP, Salesforce, and next-gen tools.
      </p>
      <p className="text-gray-700 mb-6 max-w-[560px] text-[14px] ml-[146px]">
        Contact Us Today and start your journey toward intelligent, resilient, and customer-centric manufacturing!
      </p>

      {/* Form */}
      <form className="space-y-4 max-w-[560px] ml-[146px]">
        <div className="flex flex-col md:flex-row gap-4">
          <input type="text" placeholder="Name*" className="border p-3 w-full" />
          <input type="text" placeholder="Surname*" className="border p-3 w-full" />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <input type="email" placeholder="Email*" className="border p-3 w-full" />
          <input type="text" placeholder="Company*" className="border p-3 w-full" />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <input type="text" placeholder="Job Title*" className="border p-3 w-full" />
          <input type="tel" placeholder="Phone*" className="border p-3 w-full" />
        </div>
        <textarea
          placeholder="Message*"
          className="border p-3 w-full h-32"
        ></textarea>
        <button className="bg-[#002D5F] text-white font-semibold py-2 px-6 rounded">
          Let’s Begin
        </button>
      </form>
    </div>

    {/* Right Side: Email Icon and Address */}
    <div className="flex items-center mt-4 md:mt-[75px]">
      <img
        src="/images/icons/email-icon.png"
        alt="Email icon"
        className="w-6 h-6 mr-2"
      />
      <span className="text-lg">Sales@rialtes.com</span>
    </div>
  </div>
</div>


        </>
    )
   
}