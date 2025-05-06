

export function ManufacturingBanner() {
    return (
      <div className="w-full flex justify-center items-center min-h-screen bg-white-100">
        <div
          className="relative w-[1170px] h-[420px] bg-cover bg-center flex items-center justify-center mt-[-230px]"
          style={{ backgroundImage: "url('/images/manufacture/Group 586.png')" }}
        >
          <div className="text-left text-white px-0 ml-[-426px] mt-[-37px]">
            <p className=" text-[14px] font-medium uppercase">Manufacturing</p>
            <h1 className=" text-[38px] font-light mt-2">
              Powering the Future <br /> of Manufacturing
            </h1>
            <p className="text-[23px] font-semibold mt-4">
              Smarter, Faster, Connected
            </p>
          </div>
        </div>
      </div>
    );
  }
  export  function DigitalTransformationText() {
    return (
      <div className="flex justify-center items-center  bg-white px-4 h-[20px]">
        <div className="w-full max-w-3xl md:ml-10%] text-gray-800 text-base md:text-lg leading-relaxed mt-[-210px]">
          <p className="text-black text-[13px] ml-[-20px] w-[560px] line-height: 1">
            Driving end-to-end digital transformation for manufacturers with AI, Cloud, and Smart Automation. Rialtes empowers manufacturing companies to evolve beyond traditional operations and embrace next-gen manufacturing ecosystems that are agile, data-driven, and customer-centric.
          </p>
        </div>
      </div>
    );
  }



  export  function ThoughtLeadershipSection() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className="relative w-[1200px] h-[500px] bg-cover bg-center rounded-md shadow-lg"
       style={{ backgroundImage: "url('/images/manufacture/AdobeStock_347602825.png')"}}
      >
        {/* Overlay Information Div */}
        <div className="absolute left-[-200px] top-0 w-[200px] h-full bg-blue-900 bg-opacity-90 text-white p-6">
          <h2 className="text-xl font-semibold mb-2">Thought Leadership</h2>
          <h3 className="text-lg font-bold mb-4">
            Leading the Digital Reinvention of Manufacturing
          </h3>
          <p className="text-sm leading-relaxed">
            At Rialtes, we believe the future of manufacturing lies in resilient, adaptive, and AI-powered ecosystems. From digital twins to predictive supply chains, we help manufacturers think ahead of disruption and innovate at scale. Our focus is on customer personalization, operational efficiency, and global compliance, powered by connected data and automation.
          </p>
        </div>
      </div>
    </div>
  );
};


