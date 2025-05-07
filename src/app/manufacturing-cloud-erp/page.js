
import Link from "next/link";
import ContactForm from "../components/contactform";

export default function Apps() {
  return (
    <>

      <div className="w-full hidden md:flex flex justify-center items-center min-h-screen bg-white-100 bg-cover">
        <div
          className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center mt-[-350px] ml-[-20px]"
          style={{ backgroundImage: "url('/images/manufacture/Group 586.webp')" }}
        >
          <div className="text-left text-white px-0 ml-[-586px] mt-[-37px] ">
            <h3 className="text-[24px] font-semibold uppercase w-[194px] ml-[-128px]">Manufacturing</h3>
            <h1 className="text-[60px] leading-tight font-light mt-2 ml-[-128px]">
              Powering the Future <br /> of Manufacturing
            </h1>
            <p className="text-[40px] font-semibold mt-4 ml-[-128px]">
              Smarter, Faster, Connected
            </p>
          </div>
        </div>
      </div>

      <div className="flex  hidden md:flex justify-center items-center bg-white px-4 h-[1px] mt-[-100px] mb-[80px]">
        <div className="w-full max-w-3xl md:ml-10% text-gray-800 text-base md:text-lg leading-tight mt-[-193px]">
          <p className="text-black text-[22px] w-[946px] ml-[-290px]">
            Driving end-to-end digital transformation for manufacturers with AI, Cloud, and Smart Automation. Rialtes empowers manufacturing companies to evolve beyond traditional operations and embrace next-gen manufacturing ecosystems that are agile, data-driven, and customer-centric.
          </p>
        </div>
      </div>
      {/* Section-1 Mobile */}
      {/* Mobile-only section - shown on screens < md */}
      <div className="block md:hidden ">
        <div
          className="relative w-full h-[400px] bg-cover bg-center flex items-end justify-start"
          style={{ backgroundImage: "url('/images/manufacture/Mobile 588.webp')" }}
        >
          <div className="text-left text-white p-6 pl-[-22px] pb-10 mb-[25px]">
            <h3 className="text-[18px] font-bold  w-[145px] ml-[17px] mt-[-40px]">Manufacturing</h3>
            <h1 className="text-[26px] font-light mt-2 leading-snug w-[274px] ml-[17px]">
              Powering the Future <br /> of Manufacturing
            </h1>
            <p className="text-[18px] font-semibold mt-4 w-[267px] ml-[17px]">
              Smarter, Faster, Connected
            </p>
          </div>
        </div>

        {/* Repeated text section for mobile if needed (optional) */}
        <div className="px-11  mt-6 text-[16px] text-black leading-relaxed mb-[20px]" >
          <p className="text-[16px] w-[322px] leading-tight mb-[30px] mt-[70px]">
            Driving end-to-end digital transformation for manufacturers with AI, Cloud, and Smart Automation. Rialtes empowers manufacturing companies to evolve beyond traditional operations and embrace next-gen manufacturing ecosystems that are agile, data-driven, and customer-centric.
          </p>
        </div>
      </div>
      {/* Section-1 Mobile */}
      <div className="flex hidden md:flex justify-center items-center bg-white-100 mt-[-31px]">
  <div
    className="relative w-[1778px] h-[692px] bg-cover shadow-lg ml-[-130px]"
    style={{ backgroundImage: "url('/images/manufacture/Group 588.webp')" }}
  >
  
    <div className="absolute left-[282px] top-0 w-[552px] bg-opacity-60 h-[692px] bg-[#016FBE]/50 mix-blend-multiply inset-0 p-6 pl-[30px]"></div>

    
    <div className="absolute left-[275px] top-0 w-[552px] h-[692px] inset-0 p-6 pl-[78px] z-10 text-white">
      <h2 className="text-[60px] font-light mb-8 leading-tight mt-[38px]">Thought Leadership</h2>
      <h3 className="text-[36px] font-semibold mb-8 w-[449px] leading-tight">
        Leading the Digital Reinvention of Manufacturing
      </h3>
      <p className="text-[20px] leading-tight w-[449px] mt-[30px]">
        At Rialtes, we believe the future of manufacturing lies in resilient, adaptive, and AI-powered ecosystems. From digital twins to predictive supply chains, we help manufacturers think ahead of disruption and innovate at scale. Our focus is on customer personalization, operational efficiency, and global compliance, powered by connected data and automation.
      </p>
    </div>
  </div>
</div>


      {/* Mobile-only version -Section-2 */}
      {/* Mobile Version - Visible only on small screens */}
      <div className="block md:hidden bg-white mt-[70px] ">
        {/* Image Section */}
        <div className="w-full h-[660px] bg-cover bg-center" style={{ backgroundImage: "url('/images/manufacture/Mobile 589.webp')" }}></div>

        {/* Text Section */}
        <div className="bg-[#006FBE] h-[431px] text-white px-12 py-3 mb-[15px] ">
          <h2 className="text-[26px] font-light mb-109 w-[323px] mt-[26px] leading-tight ">Thought Leadership</h2>
          <h3 className="text-[22px] font-semibold mb-6 leading-tight w-[323px] mt-[23px]">
            Leading the Digital Reinvention of Manufacturing
          </h3>
          <p className="text-[16px] leading-tight font-light w-[322px] mt-[15px]">
            At Rialtes, we believe the future of manufacturing lies in resilient, adaptive, and AI-powered ecosystems. From digital twins to predictive supply chains, we help manufacturers think ahead of disruption and innovate at scale. Our focus is on customer personalization, operational efficiency, and global compliance, powered by connected data and automation.
          </p>
        </div>
      </div>


      {/* Mobile-only version -Section-2 */}

      <div className="flex hidden md:flex justify-center items-center bg-white-100 ml-[279px] mt-[-5px]">
        <div
          className="relative w-[1680px] h-[790px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/manufacture/Group 589.webp')" }}
        >
          <div className="absolute inset-0 bg-opacity-50"></div>
          <div className="absolute top-10 left-0 h-full flex items-center pl-[65px]  z-10 text-white max-w-[526px] pb-20">
            <div >
              <h2 className="text-[60px] font-light leading-tight mb-8 w-[601px]">
                Rialtes’ End-to-End<br /> Manufacturing Transformation Services
              </h2>
              <p className="text-[20px] mb-8 w-[596px] font-light leading-tight">
                Our services cover the entire manufacturing value chain, from advisory and architecture to implementation, testing, and continuous innovation.
              </p>
              <p className="text-[20px] mb-8 w-[596px] font-light leading-tight">
                We collaborate with leading platforms like SAP, Salesforce, MuleSoft, and Kinaxis to provide scalable, integrated, and future-ready solutions. Rialtes brings together technology, process, and industry expertise under one roof to deliver seamless transformation.
              </p>
              <button className="bg-[#006FBE] text-15px] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white transition duration-300 order-4 mt-5 w-[162px] h-[62px] text-[20px]">
                <Link href="/contact-us">Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* ✅ Mobile View */}
      <div className="block md:hidden bg-white mt-[-19px] ml-[-30px] ">
        {/* Image on top */}
        <div className="w-full h-[1227px] bg-cover bg-center" style={{ backgroundImage: "url('/images/manufacture/Mobile 590.webp')" }}></div>

        {/* Text below */}
        <div className=" text-white  h-[800px] ">
          <h2 className="text-[26px] font-light ml-[80px] leading-snug mb-4 mt-[-486px]">
            Rialtes’ End-to-End<br /> Manufacturing Transformation Services
          </h2>
          <p className="text-[16px] mb-4 ml-[80px] font-light w-[322px] leading-tight mt-[25px] ">
            Our services cover the entire manufacturing value chain, from advisory and architecture to implementation, testing, and continuous innovation.<br />
            We collaborate with leading platforms like SAP, Salesforce, MuleSoft, and Kinaxis to provide scalable, integrated, and future-ready solutions. Rialtes brings together technology, process, and industry expertise under one roof to deliver seamless transformation.
           
          </p>
          <Link href="/contact-us">
            <button className="bg-[#006FBE] ml-[80px] hover:bg-white hover:text-[#134874] border border-[#134874] text-white font-semibold    transition duration-300 text-[13px] mt-[13px] w-[109px] h-[42px]">
              Learn More
            </button>
          </Link>
          
        </div>
      </div>



      <div className="flex hidden md:flex justify-center items-center bg-white-100 mt-[-7px]">
        <div className="flex w-[1790px] h-[820px] rounded-md shadow-lg overflow-hidden ml-[-150px]">
          <div className="w-[1526px] h-[822px] bg-cover bg-center" style={{ backgroundImage: "url('/images/manufacture/Group 590.webp')" }}></div>
          <div className="w-[682px] bg-[#bb7f5d] text-white p-8 pt-[13px] flex flex-col justify-center ml-[-20px]">
            <h2 className="text-[60px] font-light leading-tight mb-8 mt-[78px] w-[452px] pl-[30px]">
              Pre-Built<br />Manufacturing<br />Accelerators
            </h2>
            <h3 className="text-[36px] font-semi mb-8 w-[445px] pl-[30px]">Speed, Scale, Success</h3>
            <p className="text-[20px] w-[448px] h-[264px] leading-tight font-light  mb-6 mt-[7px] pl-[30px]">
              With industry-specific accelerators, Rialtes enables manufacturers to deploy ready-to-use solutions that cut down months of setup time. From smart factory templates to AI-powered predictive workflows, our tools are designed to accelerate value realization, improve productivity, and drive intelligent operations. Our accelerators also ensure regulatory compliance and quality assurance, reducing risks during implementation.
            </p><br/><br/><br/>
            <Link href="/contact-us">
              <button className="bg-[#134874] hover:bg-white hover:text-[#134874] border border-[#134874] text-white font-semibold transition duration-300 text-[20px] mt-[56
              px] w-[162px] h-[62px] ml-[30px] ">
                Learn More
              </button>
            </Link>
           
          </div>
        </div>
      </div>

      {/* ✅ Mobile-only version */}
      <div className="block md:hidden bg-white mt-[-317px]">
        <div className=" shadow-md overflow-hidden">
          {/* Image section */}
          <div
            className="w-full h-[567px] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/manufacture/Mobile 591.webp')" }} // Use same or mobile-optimized image
          ></div>

          {/* Text section */}
          <div className="bg-[#bb7f5d] text-white p-10  h-[503px]">
            <h2 className="text-[26px] font-light leading-snug mb-6 w-[322px]">
              Pre-Built Manufacturing Accelerators
            </h2>
            <h3 className="text-[22px] font-semibold mb-6 w-[322px] mt-[15px]">Speed, Scale, Success</h3>
            <p className="text-[16px] leading-tight font-light mb-6 w-[322px] mt-[21px]">
              With industry-specific accelerators, Rialtes enables manufacturers to deploy ready-to-use solutions that cut down months of setup time. From smart factory templates to AI-powered predictive workflows, our tools are designed to accelerate value realization, improve productivity, and drive intelligent operations. Our accelerators also ensure regulatory compliance and quality assurance, reducing risks during implementation.
            </p>
            <Link href="/contact-us">
              <button className="bg-[#134874] hover:bg-white hover:text-[#134874] border border-[#134874] text-white font-semibold py-2 px-  sm:w-[60px] transition duration-300 text-[13px] mt-[7px] w-[109px] h-[42px]">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Version - Hidden on md and up */}
      <div className="md:hidden mt-[40px]  ">
        <div className="flex flex-col items-center gap-6">
          <div >
            <img
              src="/images/manufacture/Mobile 592.webp" // <- Use a mobile-specific image here
              alt="Discrete Manufacturing"
              className="w-[502px] h-[400px] object-cover"
            />
          </div>
          <div className="w-full text-center p-[55px] mt-[-40px]">
            <h2 className="text-[26px] text-left font-light text-gray-900 mb-2 w-[322px] mb-[23px]">Discrete Manufacturing</h2>
            <h3 className="text-[22px] text-left font-bold text-gray-800 mb-4 w-[322px] mb-[23px]">
              Managing Complex Products Made Simple
            </h3>
            <p className="text-gray-700 text-left leading-tight mb-6 text-[16px] w-[342px]">
              Rialtes helps discrete manufacturers handle complex product configurations, multi-tier supply chains, and custom engineering processes. Our solutions integrate end-to-end quoting, engineering, and order management, delivering real-time visibility and seamless customer collaboration. AI-powered insights help predict maintenance needs, reduce downtime, and ensure superior product quality.
            </p>
            <button className="bg-[#134874] text-left hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-2 px-3 transition duration-300 mt-4 ml-[-210px] text-[13px] w-[109px] h-[42px]">
              <Link href="/contact-us">Learn More</Link>
            </button>
          </div>

        </div>
      </div>

      {/* Desktop Version - Hidden on mobile */}
      <div className="hidden md:flex max-w-[1600px] mx-auto flex-col md:flex-row items-center justify-between px-4 py-16 mt-[30px] gap-13 ml-[156px]">
        <div className="flex-1 w-[300px] ml-[0px]">
          <h2 className="text-[60px] font-light text-gray-900 mb-8 w-[532px] leading-tight ml-[97px]">Discrete Manufacturing</h2>
          <h3 className="text-[36px] font-bold text-gray-800 mb-8 w-[532px] leading-tight ml-[97px]">
            Managing Complex Products Made Simple
          </h3>
          <p className="text-gray-700 leading-tight mb-8 w-[471px] text-[20px] ml-[97px]">
            Rialtes helps discrete manufacturers handle complex product configurations, multi-tier supply chains, and custom engineering processes. Our solutions integrate end-to-end quoting, engineering, and order management, delivering real-time visibility and seamless customer collaboration. AI-powered insights help predict maintenance needs, reduce downtime, and ensure superior product quality.
          </p>
          <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white  transition duration-300 order-4  w-[160px] h-[62px] text-[20px] ml-[97px]">
            <Link href="/contact-us">Learn More</Link>
          </button>
        </div>
        <div className="flex-1 w-[1300px]">
          <img
            src="/images/manufacture/Group 591.webp"
            alt="Discrete Manufacturing"
            className="w-[808px] h-[656px] ml-[-60px] "
          />
        </div>
      </div>



      {/* Mobile Version - Only visible on small screens */}
      <div className="md:hidden  text-white  mt-[-10px]">
        <div
          className="w-full h-[953px] bg-cover bg-center  mb-5"
          style={{ backgroundImage: 'url("/images/manufacture/Mobile 593.webp")' }}
        ></div>
        <div className="bg-[#038FC6] mt-[-23px] h-[446px] p-14 mt-[-450px] ">
          <h2 className="text-[26px] font-light mb-5 w-[319px] mt-[-8px]">Process Manufacturing</h2>
          <h3 className="text-[22px] font-semibold mb-5 w-[319px]">Optimize Compliance and<br/> Yield</h3>
          <p className="text-[16px] leading-tight font-light w-[319px] ">
            We support process manufacturers in managing complex formulations, compliance demands (FDA, ISO, GMP), and volatile supply chains. Our solutions optimize batch production, yield management, and real-time quality tracking, ensuring consistent outputs and reduced waste. Rialtes also enables traceability and recalls management through integrated, AI-<br/>enabled systems.
          </p>
        </div>

      </div>

      {/* Desktop Version - Only visible on medium and larger screens */}
      <div className="hidden md:block relative  w-[1638px] h-[668px] ml-[14%] mt-[30px]  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/images/manufacture/Group 592.webp")' }}>
        <div className="absolute top-0 right-[14%] mb-[12px] h-[668px] w-[661px] bg-[#038FC6] text-white p-10 flex flex-col justify-center">
          <h2 className="text-[60px] mb-8 w-[482px] ml-[67px]  leading-tight ">Process Manufacturing</h2>
          <h3 className="text-[36px] w-[482px] mb-[12px] font-semibold  ml-[67px] leading-tight">Optimize Compliance and Yield</h3>
          <p className="text-[20px] leading-tight font-light ml-[67px] w-[453px] mt-8">
            We support process manufacturers in managing complex formulations, compliance demands (FDA, ISO, GMP),
            and volatile supply chains. Our solutions optimize batch production, yield management, and real-time
            quality tracking, ensuring consistent outputs and reduced waste. Rialtes also enables traceability and
            recalls management through integrated, AI-enabled systems.
          </p>
        </div>
      </div>

      {/* Mobile Version - Only on small screens */}
      <div className="md:hidden">
        <div className="w-full h-[578px] bg-cover bg-center mb-6" style={{ backgroundImage: "url('/images/manufacture/Mobile 594.webp')" }}></div>
        <div className="bg-[#DDF74D] mt-[-23px] h-[533px] p-8">
          <h2 className="text-[26px] font-light text-gray-900 leading-snug  w-[322px]">
            Repetitive <br /> Manufacturing
          </h2>
          <h3 className="text-[22px] font-bold text-black mt-5  w-[322px]">
            Streamlining Mass <br /> Production Operations
          </h3>
          <p className="text-[16px] text-gray-800 mt-5 leading-tight w-[322px]">
            For high-volume production, Rialtes offers solutions that enhance capacity planning, workforce allocation, and real-time production monitoring. Our tools optimize repetitive workflows and reduce cycle times, ensuring maximum throughput with minimum waste. AI-driven analytics help detect production anomalies early, ensuring product quality and cost efficiency.
          </p>
          <button className="bg-[#134874] hover:bg-[#ffffff] text-[13px] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white  transition duration-300 mt-8 w-[109px] h-[42px]">
            <Link href="/contact-us">Learn More</Link>
          </button>
        </div>

      </div>

      {/* Desktop Version - Only on medium and larger screens */}
      <div className="hidden md:flex mx-auto ">
        <div className="w-[852px] h-[725px] bg-[#DDF74D] p-10 flex flex-col justify-center pl-[250px]">
          <h2 className="text-[60px] font-light text-gray-900 mb-[9px] leading-tight ml-[20px] ">
            Repetitive <br /> Manufacturing
          </h2>
          <h3 className="text-[36px] font-bold text-black mb-[13px] mt-8 ml-[20px] leading-tight">
            Streamlining Mass <br /> Production Operations
          </h3>
          <p className="text-[20px] w-[482px] h-[216px] mb-[13px] text-gray-800 mt-8 leading-tight ml-[20px]">
            For high-volume production, Rialtes offers solutions that enhance capacity planning, workforce allocation, and real-time production monitoring. Our tools optimize repetitive workflows and reduce cycle times, ensuring maximum throughput with minimum waste. AI-driven analytics help detect production anomalies early, ensuring product quality and cost efficiency.
          </p><br/>
          <Link href="/contact-us">
              <button className="bg-[#134874] hover:bg-white hover:text-[#134874] border border-[#134874] text-white font-semibold transition duration-300 text-[20px] ml-[20px] mt-[89
              px] w-[162px] h-[62px]">
                Learn More
              </button>
            </Link>
           
         
        </div>


        {/* Right Section */}
        <div className="w-[1088px] h-[720px] bg-cover bg-center" style={{ backgroundImage: "url('/images/manufacture/Group 593.webp')" }}></div>
      </div>

      {/* Mobile Version - Only visible on small screens */}
      <div className="md:hidden px-10 mt-[-48px] py-8 space-y-10 p-15">
        {/* AI & Robotic Manufacturing */}
        <div className="flex flex-col bg-[#C6791B] text-white  overflow-hidden">
          <img
            src="/images/manufacture/Mobile 895.webp"
            alt="AI Robotic Manufacturing"
            className="w-full h-[350px] object-cover"
          />
          <div className="p-8">
            <h2 className="text-[26px] font-light w-[260px] leading-tight mb-[6px]">AI & Robotic Manufacturing</h2>
            <h3 className="text-[22px] font-semibold mt-7 leading-tight w-[260px] mb-[12px]">
              Creating Smart, <br /> Autonomous Factories
            </h3>
            <p className="text-[16px] mt-7 leading-tight font-light w-[260px] ">
              AI and Robotics are reshaping manufacturing, and Rialtes helps clients lead this transformation. From AI-powered predictive maintenance to robotic automation of production lines, we enable factories to be self-learning and adaptive. Digital twins and real-time IoT insights power zero-defect manufacturing and higher productivity, reducing human errors and downtime.
            </p>
          </div>
        </div>

        {/* Job Shop Manufacturing */}
        <div className="flex flex-col bg-[#0061B0] text-white  overflow-hidden">
          <img
            src="/images/manufacture/Mobile 895-2.webp"
            alt="Job Shop Manufacturing"
            className="w-full h-[323px] object-cover"
          />
          <div className="p-8 h-[527px] mt-[20px]" >
            <h2 className="text-[26px] font-light w-[260px]">Job Shop Manufacturing</h2>
            <h3 className="text-[22px] font-semibold mt-5 leading-tight w-[260px]">
              Managing Custom <br /> Production with Precision
            </h3>
            <p className="text-[16px] mt-5 leading-tight font-light w-[260px]">
              Rialtes brings robust solutions for engineer-to-order (ETO) and make-to-order (MTO) job shop environments. Our tailored platforms manage custom project costing, production planning, and supplier coordination, ensuring on-time, on-budget delivery of high-variety, low-volume orders. Real-time dashboards provide visibility into job status, materials, and profitability.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Version - Only visible on medium and up */}
      <div className="hidden md:flex max-w-[1200px] mx-auto gap-6 ml-[300px]">
        {/* Left Column */}
        <div className="w-[670px] h-[662px] flex flex-col ml-[-30px]">
          <img
            src="/images/manufacture/Group 594.webp"
            alt="AI Robotic Manufacturing"
            className="w-full h-[662px] object-cover"
          />
          <div className="bg-[#C6791B] w-[670px] h-[652px] text-white p-5 flex-1 flex flex-col justify-between">
            <div className="pl-[34px]">
              <h2 className="text-[60px] font-light leading-tight w-[541px] mt-[31px] mb-8 pl-[32px]" >AI & Robotic Manufacturing</h2>
              <h3 className="text-[36px] font-semibold mt-2 leading-tight w-[530px] mb-8 pl-[32px]">
                Creating Smart, <br /> Autonomous Factories
              </h3>
            </div>
            <p className="text-[20px] w-[525px] mt-4 leading-tight  font-light pl-[73px]  mb-[80px]">
              AI and Robotics are reshaping manufacturing, and Rialtes helps clients lead this transformation. From AI-powered predictive maintenance to robotic automation of production lines, we enable factories to be self-learning and adaptive. Digital twins and real-time IoT insights power zero-defect manufacturing and higher productivity, reducing human errors and downtime.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[670px] h-[662px] mt-20 flex flex-col ml-[60px]">
          <img
            src="/images/manufacture/Group 595.webp"
            alt="Job Shop Manufacturing"
            className="w-full h-[662px] object-cover"
          />
          <div className=" w-[670px] h-[702px] bg-[#0061B0] text-white p-5 flex-1 flex flex-col justify-between">
            <div className="pl-[34px]">
              <h2 className="text-[60px] font-light leading-tight w-[541px] mb-8 mt-[31px] pl-[32px]" >Job Shop Manufacturing</h2>
              <h3 className="text-[36px] font-semibold mt-2 leading-tight w-[530px] mb-8 pl-[32px] ">
                Managing Custom <br /> Production with<br/> Precision
              </h3>
            </div>
            <p className="text-[20px] mt-4  w-[530px] leading-tight pl-[73px] w-[430px] font-light mb-[80px]">
              Rialtes brings robust solutions for engineer-to-order (ETO) and make-to-order (MTO) job shop environments. Our tailored platforms manage custom project costing, production planning, and supplier coordination, ensuring on-time, on-budget delivery of high-variety, low-volume orders. Real-time dashboards provide visibility into job status, materials, and profitability.
            </p>
          </div>
        </div>
      </div>



      {/* ✅ Mobile Version - only visible on small screens */}
      <div className="md:hidden w-full  mt-[-31px]">
        {/* Image Container */}
        <div className="relative w-full h-[668px] overflow-visible ">
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center "
            style={{ backgroundImage: "url('/images/manufacture/Mobile 896.webp')" }}
          ></div>

          {/* Text Overlay (Half on Image, Half Below) */}
          <div className="absolute left-[41px] bottom-[-356px] w-[77%] h-[523px]  bg-[#B4E0F9] px-12 py-10  shadow-md">
            <h2 className="text-[26px] font-light text-black w-[251px]">Data Cloud & Tableau</h2>
            <h3 className="text-[22px] font-bold mt-5 text-black leading-tight w-[251px]">
              Actionable Insights with Visual Analytics
            </h3>
            <p className="text-[16px] mt-5 leading-tight text-gray-800 w-[259px] ">
            With Data Cloud and Tableau, Rialtes helps manufacturers turn complex operational data into meaningful insights. From OEE tracking and downtime analysis to supply chain risks and customer demand forecasting our dashboard provide real time visibility for proactive decision making.AI Models further enhance predictive maintenance and inventory optimization.
            </p>
            <button className="mt-8  bg-[#002F5F] text-white text-sm font-semibold  w-[109px] h-[42px] top-30">
            <Link href="/contact-us">Learn More</Link>
            </button>
          </div>
        </div>
      </div>


      {/* ✅ Desktop Version - completely untouched */}
      <div className="hidden md:block w-full h-[1013px] mx-auto relative overflow-hidden bg-cover bg-center overflow-visible mt-[698px] mb-[100px]" style={{ backgroundImage: "url('/images/manufacture/Group 596.webp')" }}>
        <div className="absolute bottom-6 z-10 left-1/2 -translate-x-1/2 w-[672px] h-[634px] bg-[#B4E0F9] p-12 shadow-lg mt-[760px] top-[-320px] ml-[250px] mr-[20px] mt-[20px] mb-[0px]">
          <h2 className="text-[60px] font-light mb-6 w-[542px] leading-tight ml-[46px]" >Data Cloud & Tableau</h2>
          <h3 className="text-[36px] font-bold mt-1 mb-6  leading-tight w-[542px] ml-[46px]">
            Actionable Insights with <br /> Visual Analytics
          </h3>
          <p className="text-[20px] mt-3 leading-tight mb-6 text-gray-800 w-[542px] ml-[46px]">
            With Data Cloud and Tableau, Rialtes helps manufacturers turn complex operational data into meaningful insights. From OEE tracking and downtime analysis to supply chain risks and customer demand forecasting our dashboard provide real time visibility for proactive decision making.AI Models further enhance predictive maintenance and inventory optimization.
          </p>
          <button className="bg-[#073259] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white  transition duration-300 order-4 mt-4 ml-[45px] w-[162px] h-[62px]  mt-[24px] text-[20px]">
            <Link href="/contact-us">Learn More</Link>
          </button>
        </div>
      </div>

      {/* ✅ Mobile Version (hidden on desktop) */}
      <div className="md:hidden  mt-[425px] ">
        {/* Section 1: Image Top, Text Bottom */}
        <div className="flex flex-col  space-y-4">
          <img
            src="/images/manufacture/Group 597.webp"
            alt="ERP Integration"
            className="w-[340px] h-[300px] object-cover mb-15 ml-[38px]"
          />
          <div className="py-4 space-y-5 p-10 mt-[-25px]">
          <h2 className="text-[26px] w-[322px] font-light leading-tight top-2  ">ERP Integration with SAP & Oracle via MuleSoft</h2>
          <h3 className="text-[22px] font-bold leading-tight w-[322px]">End-to-End Visibility</h3>
          <p className="text-[16px] text-gray-700 leading-tight w-[322px]">
            Rialtes ensures seamless integration between front-end systems and back-end ERPs like SAP and Oracle using MuleSoft. This allows manufacturers to orchestrate production planning, order management, procurement, and finance without silos. Real-time data flows enable accurate decision-making, lower costs, and streamlined supply chains.
          </p>
          </div>
          
          
        
        </div><br/>

        {/* Section 2: Image Top, Text Bottom */}
        <div className="flex flex-col space-y-4">
          <img
            src="/images/manufacture/Group 598.webp"
            alt="Demand Planning"
            className="w-[340px] h-[262px] ml-[37px] object-cover "
          />
          <div className=" py-4 space-y-5 p-10">
          <h2 className="text-[26px] leading-tight font-light w-[322px] mt-[20px]">Demand Planning with Kinaxis RapidResponse</h2>
          <h3 className="text-[22px] font-bold w-[322px] mt-[14px]">Staying Ahead of the Curve</h3>
          <p className="text-[16px] text-gray-700 leading-tight w-[322px]">
            Rialtes leverages Kinaxis RapidResponse to empower manufacturers with dynamic demand forecasting and scenario planning. Our solutions help manage volatile markets, supplier risks, and customer demands, enabling manufacturers to respond in real-time to disruptions. AI-driven demand sensing ensures optimal inventory and supply chain agility.
          </p>
          </div>
         
        </div>
      </div>

      {/* ✅ Desktop Version (untouched, hidden on mobile) */}
      <div className="hidden md:block  mx-auto px-4 py-20 space-y-10 mt-[50px]">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-[60px] leading-tight font-light mb-9 mt-[-45px] w-[622px] ml-[254px]">
              ERP Integration with SAP & Oracle via MuleSoft
            </h2>
            <h3 className="text-[32px] font-bold leading-tight mb-9  w-[622px] ml-[254px]">End-to-End Visibility</h3>
            <p className="text-gray-700 text-[20px]  leading-tight w-[622px]  ml-[254px]">
              Rialtes ensures seamless integration between front-end systems and back-end ERPs like SAP and Oracle using MuleSoft. This allows manufacturers to orchestrate production planning, order management, procurement, and finance without silos. Real-time data flows enable accurate decision-making, lower costs, and streamlined supply chains.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/images/manufacture/Group 597.webp"
              alt="ERP Integration"
              className="w-[808px] h-[565px] object-cover"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 py-16 ml-[82px]">
          <div className="flex-1 ">
            <h2 className="text-[60px] leading-tight ont-light mb-18 w-[622px] h-[219px] ml-[40px]  mt-[-55px] ">
              Demand Planning with Kinaxis RapidResponse
            </h2>
            <h3 className="text-[36px] font-bold mb-13 w-[622px] h-[52px] mt-[46px] ml-[40px] leading-tight ">Staying Ahead of the Curve</h3>
            <p className="text-gray-700 text-[20px] leading-tight w-[602px] h-[168px] ml-[40px] mt-[41px]">
              Rialtes leverages Kinaxis RapidResponse to empower manufacturers with dynamic demand forecasting and scenario planning. Our solutions help manage volatile markets, supplier risks, and customer demands, enabling manufacturers to respond in real-time to disruptions. AI-driven demand sensing ensures optimal inventory and supply chain agility.
            </p>
          </div>
          <div className="flex-1 ml-[165px]">
            <img
              src="/images/manufacture/Group 598.webp"
              alt="Demand Planning"
              className="w-[810px] h-[565px] object-cover"
            />
          </div>
        </div>
      </div>


      <div className="max-w-7xl hidden md:block mx-auto px-4 py-16 space-y-24 mt-[-100px]">
        {/* Section 1: Overlay Text on Centered Image */}
        <div className="relative flex justify-center ">
          {/* Image Div */}
          <div className="w-[1603x] h-[797px] ml-[50px]">
            <img
              src="/images/manufacture/Group 599.webp"
              alt="AI in Manufacturing"
              className="w-[1510px] h-full object-cover  ml-[320px]"
            />
          </div>

          {/* Text Overlay */}
          <div className="absolute top-1/2 -translate-y-1/2 bg-[#33A316] text-white p-8 w-[595px] h-[699px] shadow-lg ml-[-790px]">
            <h2 className="text-[60px] leading-tight font-light mb-5 w-[494px] mt-[19px] ml-[30px]">AI in Manufacturing</h2>
            <h3 className="text-[36px] font-bold leading-tight mb-7 w-[494px] ml-[30px]">Shaping a Smarter <br/>Future</h3>
            <p className="text-[20px] leading-tight mb-4 w-[494px] ml-[30px]">
              AI is no longer the future — it’s shaping today’s manufacturing. Rialtes brings AI-powered
              solutions for predictive maintenance, intelligent scheduling, defect detection, and demand forecasting.AI helps manufacturers adapt faster, optimize resources, and deliver customized products efficiently,
              enhancing both profitability and customer satisfaction.
            </p>

            <button className="bg-[#073259] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white transition duration-300 order-4 mt-4 w-[162px] h-[60px] mt-[33px] text-[20px] ml-[27px]  ">
              <Link href="/contact-us">Learn More</Link>
            </button>
          </div>
        </div><br/>

        {/* Section 2: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-start gap-8 px-0 max-w-none  mt-[-120px] ml-[-30px]" >
          {/* Image aligned to left of screen */}
          <div className="flex-shrink-0">
            <img
              src="/images/manufacture/Group 600.webp"
              alt="SAP and Salesforce"
              className="w-[1200px] h-[519px] ml-[-300px] mt-[-30px]"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 px-6 py-4">
            <h2 className="text-[60px] font-light mb-10 leading-tight ml-[-270px] w-[606px] mt-[-65px]">SAP & Salesforce</h2>
            <h3 className="text-[36px] font-bold leading-tight mb-12 w-[606px] ml-[-270px]">
              The Power Duo for Intelligent Manufacturing
            </h3>
            <p className="text-gray-700 text-[20px] leading-tight mb-10 w-[606px] h-[168px] ml-[-270px]">
              Rialtes partners with SAP and Salesforce to create connected, intelligent, and agile manufacturing ecosystems.SAP Digital Manufacturing cloud and salesforce.
              Together they deliver 360-degree visibility from factory to customer.
              We enable manufacturers to integrate customer feedback, dealer management, and service workflows into a single intelligent platform.
            </p>
            <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white  transition duration-300 order-4 mt-4 w-[162px] h-[62px] ml-[-270px] text-[20px]  ">
              <Link href="/contact-us">Learn More</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full  relative mt-[50px]">
        {/* Image */}
        <div className="relative w-full h-[470px]">
          <img
            src="/images/manufacture/Mobile 897.webp"
            alt="AI in Manufacturing"
            className="w-full h-[492px] object-cover "
          />

          {/* Text Box */}
          <div className="absolute left-10 right-10 bottom-[-450px] bg-[#33A316] h-[506px] text-white px-8 py-10 p-10  shadow-md">
            <h2 className="text-[26px] font-light mb-5 w-[261px]">AI in Manufacturing</h2>
            <h3 className="text-[22px] font-bold mb-5 w-[261px]">Shaping a Smarter<br /> Future</h3>
            <p className="text-[16px] leading-tight mb-3 w-[261px]">
              AI is no longer the future — it’s shaping today’s manufacturing. Rialtes brings AI-powered
              solutions for predictive maintenance, intelligent scheduling, defect detection, and demand forecasting.AI helps manufacturers adapt faster, optimize resources, and deliver customized products efficiently,
              enhancing both profitability and customer satisfaction.
            </p>
            <button className="bg-[#134874] hover:bg-white hover:text-[#134874]  border border-[#134874] font-semibold text-white py-2 px-4 text-[13px] w-[110px] mt-[23px]">
              <Link href="/contact-us">Learn More</Link>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile View: Section 2 (Image First, Then Text) */}
      <div className="block md:hidden  bg-white mt-[520px]">
        {/* Image First */}
        <div className="w-full">
          <img
            src="/images/manufacture/Mobile 598.webp"
            alt="SAP and Salesforce Mobile"
            className="w-[353px] h-[280px] ml-[40px] "
          />
        </div>

        {/* Text Content */}
        <div className="text-left mt-[25px] px-14 py-0 space-y-6">
          <h2 className="text-[26px] font-light text-[#000] w-[322px] mt-[45px]">SAP & Salesforce</h2>
          <h3 className="text-[22px] font-bold mb-2 text-black w-[322px]">
            The Power Duo for Intelligent Manufacturing
          </h3>
          <p className="text-[16px] text-gray-700 leading-tight mb-4 w-[322px]">
            Rialtes partners with SAP and Salesforce to create connected, intelligent, and agile manufacturing ecosystems.
            Together they deliver 360-degree visibility from factory to customer.
            We enable manufacturers to integrate customer feedback, dealer management, and service workflows into a single intelligent platform.
          </p>

          <button className="bg-[#134874] hover:bg-white hover:text-[#134874] w-[109px] h-[42px] border border-[#134874] text-white font-semibold mt-[22px] transition duration-300 text-[13px]">
            <Link href="/contact-us">Learn More</Link>
          </button>
        </div>
      </div>
      <div className="flex justify-center py-12 hidden md:block relative">
  <div
    className="relative bg-cover bg-center h-[1119px] w-full mt-[-23px] flex items-center overflow-visible px-12"
    style={{
      backgroundImage: "url('/images/manufacture/Group 601.webp')",
    }}
  >
    {/* Overlay content: split into two vertical columns */}
    <div className="text-white w-[650px] flex justify-between px-8 py-10 rounded shadow-lg ml-[190px] mb-[80px] pt-20 pb-20 relative overflow-visible">
      
      {/* Left Column */}
      <div className="space-y-6 max-w-[50%] relative">
        <h2 className="text-[60px] text-gray-300 mt-[80px] w-[808px] leading-tight">Fast Facts</h2>
        <h3 className="text-[42px] font-bold mb-4 w-[808px] leading-tight">Manufacturing Industry Insights</h3><br/>

        <p className="text-[30px] w-[362px] leading-tight mb-[80px] mt-[100px]">
          <span className="text-blue-400 text-[60px] font-bold leading-tight mt-[200px]">70%</span><br />
          of manufacturers are accelerating Industry 4.0 investments.
        </p><br/>

        <p className="text-[30px] w-[362px] leading-tight">
          <span className="text-blue-400 text-[60px] font-bold leading-tight">76%</span><br />
          of companies struggle with real-time supply chain visibility.
        </p><br/>

        <p className="text-[30px] w-[362px] leading-tight">
          Cloud-enabled manufacturing systems increase equipment effectiveness by.<br />
          <span className="text-blue-400 text-[60px] font-bold leading-tight">15%</span>
        </p>
      </div>

      {/* Button Half Inside/Half Outside */}
      <button
        className="absolute bottom-[-55px] left-[105px] transform -translate-x-1/2 bg-[#006FBE] hover:bg-[#ffffff] hover:text-[#134874] border border-[#134874] font-semibold text-white transition duration-300 w-[162px] h-[60px] z-20 text-[20px]"
      >
        <Link href="/contact-us">Learn More</Link>
        
      </button>

      {/* Right Column */}
      <div className="space-y-6 max-w-[50%] mt-[295px] ml-[110px]">
        <p className="text-[30px] w-[371px] leading-tight">
          AI adoption in manufacturing <br />expected to surpass <br />
          <span className="text-blue-400 text-[60px] font-bold leading-tight">$20 billion</span><br /> by 2030.
        </p><br/>

        <p className="text-[30px] w-[371px] leading-tight">
          Smart factories can boost productivity by up to <br />
          <span className="text-blue-400 text-[60px] font-bold leading-tight">30%</span>.
        </p>
      </div>
    </div>
  </div>
</div>

      {/* Mobile View */}
      <div className="block lg:hidden py-8 mt-[-21px]">
        {/* Mobile Image */}

        {/* Mobile Text Section */}
        <div className="text-white bg-[#001118] h-[1250px] mt-6 p-6 bg-cover  shadow-lg  " style={{
          backgroundImage: "url('/images/manufacture/Mobile 599.png')", // Your mobile image
        }}>
          <div className="mt-[340px]">
            <h2 className="text-[26px] text-gray-300 w-[360px] mt-[50px] mb-[8px]">Fast Facts</h2>
            <h3 className="text-[22px] font-bold mb-8 w-[410px]">
              Manufacturing Industry <br/> Insights
            </h3>

            <div className="space-y-6 text-[16px]">
              <p className="text-[18px] mb-8 leading-tight">
                <span className="text-blue-400 text-[40px] font-bold leading-tight">70%</span><br />
                of manufacturers are accelerating Industry 4.0 investments.
              </p>

              <p className="text-[18px] mb-[8px] leading-tight">
                AI adoption in manufacturing expected to surpass <br />
                <span className="text-blue-400 text-[40px] font-bold leading-tight">$20 billion</span><br/> by 2030.
              </p><br/>

              <p className="text-[18px] mb-[13px] leading-tight">
                <span className="text-blue-400 text-[33px] font-bold leading-tight">76%</span><br />
                of companies struggle with real-time supply chain visibility.
              </p><br/>

              <p className="text-[18px] mt-[10px] leading-tight">
                Smart factories can boost productivity up to <br />
                <span className="text-blue-400 text-[40px] font-bold leading-tight">30%</span>.
              </p><br/>
             
              <p className="text-[18px] leading-tight">
                Cloud-enabled systems increase effectiveness by <br />
                <span className="text-blue-400 text-[40px] font-bold leading-tight">15%</span>
              </p><br/>
              <button className="bg-[#134874] hover:bg-white hover:text-[#134874] border border-[#134874] text-white font-semibold  transition duration-300  w-[109px] h-[42px] text-[13px] ml-[10px] ">
            <Link href="/contact-us">Learn More</Link>
          </button>
            </div>
          </div>
        </div>
      </div><br/>
      <div className="ml-0 md:ml-[260px] px-4 sm:px-6 md:px-0">
  <ContactForm 
    title={
      <>
        Ready to Reimagine Your <br className="hidden md:block" />
        Manufacturing Future?
      </>
    }
    subtitle={
      <>
     <br/> <p className="hidden lg:block w-[800px] text-[20px] font-light">
  Partner with Rialtes to transform your manufacturing operations with AI, SAP, Salesforce, and next-gen tools.
</p>
<br className="hidden lg:block" />
<p className="hidden lg:block w-[800px] text-[20px] font-light">
  Contact Us Today and start your journey toward intelligent, resilient, and customer-centric manufacturing!
</p>

  
    
      </>
    }   
  />
</div>

     

     <br/><br/>

     
    </>
  );
}

