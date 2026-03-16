
import Link from 'next/link';
import '../../../app/[locale]/newHome/demo.css';
import MyComponent from './demo';
import Image from 'next/image';
const AutoTimerSlider = () => {
    const t = useTranslations('homePage');
    return (
        <div className='relative'>
            <div className="carousel mt-[48px] z-0 lg:h-[1000px] md:h-[950px] h-[851px]">
                <div className="list">

                    <div className="item relative overflow-hidden">
                        <Image
                            src="/images/homepage/industry2.webp"
                            alt="Manufacturing Industry"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover -z-10"
                        />

                        <div className="content relative z-10">
                            <div className="title font-semibold 4xl:text-[24px] md:text-[20px] text-[18px]">MANUFACTURING</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium 4xl:text-[24px] xl:text-[20px] md:text-[18px] text-[16px]">
                                Streamline customer relationships, sales processes, and supply chain management in manufacturing companies.
                            </div>
                            <Link href="/industry/manufacturing-cloud-erp" aria-label="Manufacturing">
                                <button className="!border-[1px] know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10">
                                    Know More →
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="item relative overflow-hidden">
                        <Image
                            src="/images/homepage/industry3.webp"
                            alt="Real Estate"
                            fill
                            sizes="100vw"
                            priority
                            className="object-cover -z-10"
                        />
                        <div className="content relative z-10">
                            <div className="title font-semibold 4xl:text-[24px] md:text-[20px] text-[18px]">REAL ESTATE</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium 4xl:text-[24px] xl:text-[20px] md:text-[18px] text-[16px]">
                                Helping realtors, property owners, and brokers strengthen relationships and revenue by helping them navigate through client details, properties.
                            </div>
                            <Link href="/industry/real-estate-property-management" aria-label="Real Estate">
                                <button className="!border-[1px] know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10">
                                    Know More →
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="item relative overflow-hidden">
                        <Image
                            src="/images/homepage/industry4.webp"
                            alt="Semiconductor"
                            fill
                            sizes="100vw"
                            className="object-cover -z-10"
                        />
                        <div className="content relative z-10">
                            <div className="title font-semibold 4xl:text-[24px] md:text-[20px] text-[18px]">Semiconductor</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium 4xl:text-[24px] xl:text-[20px] md:text-[18px] text-[16px]">
                                Our services consulting covers the complete range of technologies and methodologies necessary for manufacturing, integrating, and maintaining complex products across platforms.
                            </div>
                            <Link href="/industry/hitech-semiconductor-ai-it-solutions" aria-label="Semiconductor">
                                <button className="!border-[1px] know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10">
                                    Know More →
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="item relative overflow-hidden">
                        <Image
                            src="/images/homepage/automotive-industry.webp"
                            alt="Automotive"
                            fill
                            sizes="100vw"
                            className="object-cover -z-10"
                        />
                        <div className="content relative z-10">
                            <div className="title font-semibold 4xl:text-[24px] md:text-[20px] text-[18px]">AUTOMOTIVE</div>
                            <div className="des pr-5 xl:mt-8 mt-5 4xl:text-[24px] xl:text-[20px] md:text-[18px] text-[16px]">
                                The automotive industry is shifting to customer-first. Rialtes delivers integrated solutions for seamless omnichannel experiences, from lead capture to warranty service.
                            </div>
                            <Link href="/industry/digital-transformation-in-automotive-industry" aria-label="Automotive">
                                <button className="!border-[1px] know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10">
                                    Know More →
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="item relative overflow-hidden">
                        <Image
                            src="/images/homepage/industry11.webp"
                            alt="Healthcare"
                            fill
                            sizes="100vw"
                            className="object-cover -z-10"
                        />
                        <div className="content relative z-10">
                            <div className="title font-semibold 4xl:text-[24px] md:text-[20px] text-[18px]">Healthcare</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium 4xl:text-[24px] xl:text-[20px] md:text-[18px] text-[16px]">
                                Our Salesforce healthcare CRM integration can help medical service providers seamlessly integrate hospital software and patient engagement solutions to facilitate exceptional patient care.
                            </div>
                            <Link href="/industry/life-sciences/healthcare-medtech-patient-care" aria-label="Healthcare">
                                <button className="!border-[1px] know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10">
                                    Know More →
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="item relative overflow-hidden">
                        <Image
                            src="/images/industry/travel-transporation/retail+.webp"
                            alt="Retail"
                            fill
                            sizes="100vw"
                            className="object-cover -z-10"
                        />
                        <div className="content relative z-10">
                            <div className="title font-semibold 4xl:text-[24px] md:text-[20px] text-[18px]">Retail</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium 4xl:text-[24px] xl:text-[20px] md:text-[18px] text-[16px]">
                                Navigate retail challenges with confidence. Rialtes Retail+ combines strategic insight with robust execution, enabling B2B and B2C retailers to modernize, personalize, and grow. From planning to post-launch support, we drive transformation every step of the way.
                            </div>
                            <Link href="/industry/retail-industry-digital-transformation" aria-label="Retail">
                                <button className="!border-[1px] know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10">
                                    Know More →
                                </button>
                            </Link>
                        </div>
                    </div>


                </div>
                <div className="arrows flex bottom-[70px] xl:bottom-[230px]">
                    <div className="flex items-center  gap-0  xl:ml-2">
                        <button aria-label="Previous Slide" className="prev xl:h-[55px] xl:w-[55px] bg-white flex items-center justify-center  shadow-md hover:bg-gray-100">
                            <svg viewBox="0 0 24 24" fill="black" width="45">
                                <polygon points="15,6 9,12 15,18" />
                            </svg>
                        </button>
                        <button aria-label="Next Slide" className="next xl:h-[55px] xl:w-[55px] bg-white flex items-center justify-center  shadow-md hover:bg-gray-100">
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
            <div className="mt-[-10px] absolute 4xl:w-[15%] 2xl:w-[20%] xl:w-[25%]   max-[350px]:left-[45%] left-[8%]  lg:left-auto lg:transform-none lg:right-[200px]">
                <Link href="/industry" className='bg-[#006FBE] xl:text-[20px] text-[16px] hover:bg-white hover:text-[#006FBE] border border-solid border-[#006FBE] font-semibold text-white xl:py-5 py-4 px-5 transition duration-300'>{t('viewAllIndustries')}</Link>
            </div>
        </div>
    )
}
export default AutoTimerSlider