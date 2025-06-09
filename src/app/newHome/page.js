
import Link from 'next/link';
import '../../app/newHome/demo.css';
import MyComponent from './demo';
const AutoTimerSlider = () => {

    return (
        <div className='relative'>

            <div className="carousel mt-10 z-0 xl:h-[1100px] h-[851px]">
                <div className="list">

                    {/* <div className="item"
                        style={{ backgroundImage: `url("/images/homepage/industry1.webp")` }}>
                        <div className="content">
                            <div className="title">LIFE SCIENCE</div>
                            <div className="des xl:pr-5 pr-32 xl:mt-8 mt-5">Our Salesforce healthcare CRM integration can help medical service providers seamlessly integrate hospital software,</div>
                            <button className='!border-[1px] know-more !border-white xl:p-4 p-3 xl:text-[20px] !text-[16px] mt-10'>Know More → </button>

                        </div>
                    </div> */}

                    <div className="item"
                        style={{ backgroundImage: `url("/images/homepage/industry2.webp")` }}>
                        <div className="content">
                            <div className="title font-semibold">MANUFACTURING</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium">Streamline customer relationships, sales processes, and supply chain management in manufacturing companies.</div>
                            <Link href="/industry/manufacturing-cloud-erp">
                                <button className='!border-[1px] know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10'>Know More → </button>
                            </Link>
                        </div>
                    </div>

                    <div className="item"
                        style={{ backgroundImage: `url("/images/homepage/industry3.webp")` }}>
                        <div className="content">
                            <div className="title font-semibold">REAL ESTATE</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium">Helping realtors, property owners, and brokers strengthen relationships and revenue by helping them navigate through client details, properties.</div>
                            <Link href='/industry/real-estate-property-management'>
                                <button className='!border-[1px] know-more  !border-white p-4 xl:text-[20px] text-[16px] mt-10'>Know More → </button>
                            </Link>
                        </div>
                    </div>

                    <div className="item"
                        style={{ backgroundImage: `url("/images/homepage/industry4.webp")` }}>
                        <div className="content">
                            <div className="title font-semibold">HI-TECH</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium">Our services consulting covers the complete range of technologies and methodologies necessary for manufacturing, integrating, and maintaining complex products across platforms.</div>
                            <Link href="/industry/hitech-semiconductor">
                                <button className='!border-[1px]  know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10'>Know More → </button>
                            </Link>
                        </div>
                    </div>


                    <div className="item"
                        style={{ backgroundImage: `url("/images/homepage/industry5.webp")` }}>
                        <div className="content">
                            <div className="title">AUTOMOTIVE</div>
                            <div className="des pr-5 xl:mt-8 mt-5">Salesforce healthcare CRM to help medical service providers seamlessly integrate hospital software.</div>
                            <Link href="/industry/automotive-industry-cloud-solutions">

                                <button className='!border-[1px] know-more  !border-white p-4 xl:text-[20px] text-[16px] mt-10'>Know More → </button>
                            </Link>
                        </div>
                    </div>
                    <div className="item"
                        style={{ backgroundImage: `url("/images/homepage/industry1.webp")` }}>
                        <div className="content">
                            <div className="title font-semibold">Healthcare</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium">Our Salesforce healthcare CRM integration can help medical service providers seamlessly integrate hospital software and patient engagement solutions to facilitate exceptional patient care.</div>
                            <Link href="/industry/life-sciences/healthcare-medtech-patient-care">
                                <button className='!border-[1px] know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10'>Know More → </button>
                            </Link>
                        </div>
                    </div>

                    <div className="item"
                        style={{ backgroundImage: `url("/images/industry/travel-transporation/retail+.webp")` }}>
                        <div className="content">
                            <div className="title font-semibold">Retail</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium">Navigate retail challenges with confidence. Rialtes Retail+ combines strategic insight with robust execution, enabling B2B and B2C retailers to modernize, personalize, and grow. From planning to post-launch support, we drive transformation every step of the way.</div>
                            <Link href="/industry/retail-industry-digital-transformation">
                                <button className='!border-[1px] know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10'>Know More → </button>
                            </Link>
                        </div>
                    </div>

                    <div className="item"
                        style={{ backgroundImage: `url("/images/industry/travel-transporation/TTH.webp")`, backgroundPosition: "35% 10%" }}>
                        <div className="content travelContent">
                            <div className="title travelTitle font-semibold !text-[#000000]">Travel and Hospitality</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium text-[#000000]">Rialtes enables TTH companies to elevate every journey—from check-in to checkout, booking to delivery. With our expertise in AI, cloud, and enterprise platforms, we help you modernize operations, personalize experiences, and maximize business impact.</div>
                            <Link href="/industry/travel-hospitality-it-solutions">
                                <button className='!border-[1px] know-more !border-black text-[#000000] p-4 xl:text-[20px] text-[16px] mt-10'>Know More → </button>
                            </Link>
                        </div>
                    </div>

                </div>


                <div className="arrows flex bottom-[70px] xl:bottom-[230px]">
                    <div className="flex items-center  gap-0  xl:ml-2">
                        <button className="prev xl:h-[55px] xl:w-[55px] bg-white flex items-center justify-center  shadow-md hover:bg-gray-100">
                            <svg viewBox="0 0 24 24" fill="black" width="45">
                                <polygon points="15,6 9,12 15,18" />
                            </svg>
                        </button>

                        <button className="next xl:h-[55px] xl:w-[55px] bg-white flex items-center justify-center  shadow-md hover:bg-gray-100">
                            <svg viewBox="0 0 24 24" fill="black" width="45">
                                <polygon points="9,6 15,12 9,18" />
                            </svg>
                        </button>
                    </div>

                    <div className="slide-number"></div>

                </div>

                <div className="timeRunning"></div>

                <MyComponent />

            </div>
            <div className="mt-[-40px] absolute left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:right-[200px]">
                <button className="bg-[#134874] xl:text-[20px] text-[14px] hover:bg-white hover:text-[#134874] border border-solid border-[#134874] font-semibold text-white xl:py-5 py-4 px-8 transition duration-300">
                    <Link href="/industry">View All Industry</Link>
                </button>
            </div>

        </div>

    )

}

export default AutoTimerSlider