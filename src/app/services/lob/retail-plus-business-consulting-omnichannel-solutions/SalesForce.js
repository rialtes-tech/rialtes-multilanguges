
'use client';
import Image from 'next/image';
import AdvancesAI from './AdvancesAI';

const SalesForce = () => {
  return (
    <>
      <div className="bg-transparent py-20 ml-0  -mt-[20] md:mt-0 sm:ml-12 md:ml-24 lg:ml-48 xl:ml-[280px]">
        <div
          className="flex flex-col-reverse md:flex-row items-start justify-center"
          style={{ backgroundColor: '#006FBE' }}
        >
          <div className="w-full lg:w-[50%] flex ml-[40px]">

            <div className="xl:w-[480px] md:w-[600px] lg:w-[850px]">
              <h2
                className="md:text-[50px] md:max-w-[800] tracking-wider sm:text-[48px] leading-[30px] sm:leading-[60px]  font-light  text-white relative top-[50px] md:tracking-wider -ml-[5] md:ml[0]"
              >
                Salesforce & SAP
              </h2>
              <h4
                className="text-[20px]  md:text-[28px] md:max-w-[700] tracking-wide  leading-[30px] sm:leading-[60px] font-bold  text-white mt-[79] max-w-[300px] md:tracking-wider -ml-[5] md:ml[0]"

              >
                Enterprise-Grade Solutions for Retail Success
              </h4>
              <h6
                className=" sm:text-[30px] md:text-[23px]  md:max-w-[550px] md:tracking-widest font-semibold font-montserrat text-white mt-5 md:mt-10 max-w-[300px] -ml-[5] md:ml-[0] tracking-wider"

              >
                Salesforce Retail & Consumer Goods Cloud
              </h6>
              <h6
                className=" mt-2 md:mt-5 text-white max-w-[275px] leading-[19px] md:leading-[28px] text-[12px] md:text-[20px] md:max-w-[600px] "

              >
                Leverage Salesforce’s Retail Cloud capabilities — including unified customer profiles, AI-based personalization, loyalty management, omnichannel service, and marketing automation — to deliver consistent and personalized experiences across all customer touchpoints.
              </h6>
              <h4
                className="text-[15px]  md:text-[28px] md:max-w-[700] tracking-wide  leading-[30px] sm:leading-[60px] font-bold  text-white mt-[15] md:mt-[79] max-w-[300px] md:tracking-wider  md:-ml-[5] md:ml[0]"

              >
                SAP S/4HANA for Retail
              </h4>
              <h6
                className=" mt-2 md:mt-5 text-white max-w-[275px] leading-[19px] md:leading-[28px] text-[12px] md:text-[20px] md:max-w-[600px] mb-[50] md:mb-[0] "
              >
                Transform back-end operations with SAP S/4HANA Retail, enabling intelligent inventory management, demand forecasting, supply chain optimization, and real-time analytics to drive profitability and responsiveness.
              </h6>

            </div>
          </div>




          <div className="w-full lg:w-[60%]">
            <div className="relative w-full h-[400px] sm:h-[600px] lg:h-[912px]">
              <Image
                src="/images/retail/salesforce.webp"
                alt="Salesforce"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="relative mx-auto mt-20 ml-0 mr-[150px] w-full h-[400px] border border-black overflow-hidden md:hidden">
          <Image
            src="/images/retail/MsalesForce3.png" // Replace with your mobile image path
            alt="SalesForce2 Mobile"
            fill
            className="object-cover z-0"
          />
        </div>

        {/* Desktop Image */}
        <div className="relative mx-auto mt-20 ml-0 mr-[150px] w-[1493px] h-[692px] border border-black overflow-hidden hidden md:block">
          <Image
            src="/images/retail/SalesForce2.png"
            alt="SalesForce2"
            fill
            className="object-cover z-0"
          />
        </div>


        <div className='relative  -mt-[120px]  md:ml-[0] xl:mr-[418px] xl:h-[515px] mx-[35px] px-2 xl:mx-0 md:h-auto  flex flex-col md:flex-row justify-between bg-[#6E6E6E] z-20'>

          <div className=' md:w-1/2  md:h-full relative z-20 bg-[#6E6E6E]'>
            <h2 className=' text-white xl:max-w-[600px] ml-[20px] leading-tight md:ml-10 mt-6 tracking-wider md:tracking-normal'>
              Specialized Solutions for Real Estate & Hospitality Retail
            </h2>

          </div>

          <div className=' md:w-1/2  md:h-full relative z-20 bg-[#6E6E6E]'>
            <h4 className='text-[22px] xl:text-[42px] mt-8  font-bold font-montserrat text-white ml-[20] md:ml-20 mr-20'>Exelona</h4>
            <p className=' text-white mt-5 ml-5 md:ml-20 md:mr-20 tracking-wide'>For retailers operating in real estate and hospitality sectors, Exelona — Rialtes’ proprietary solution built natively on Salesforce — enables end-to-end asset management, marketing, finance, and operations on a single unified platform. With Exelona, real estate retail businesses can manage property sales, leasing, tenant engagement, and operations seamlessly and securely.</p>
            <div className="flex justify-center -mt-[20] z-20">
              <button className='
      md:text-[20px]
      font-montserrat
      font-bold
      text-white
      capitalize
      py-2 px-3
      md:py-3 md:px-3
      mt-16
         mr-[173px]
      xl:mr-[300px]
      bg-[#134874]
       md:w-auto
    '>
                Learn More
              </button>
            </div>
          </div>




        </div>

      </div>


      <AdvancesAI />

    </>
  );
};

export default SalesForce; 
