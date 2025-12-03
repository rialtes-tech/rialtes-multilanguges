
import Link from 'next/link';
import '../../../app/[locale]/newHome/demo.css';
import MyComponent from './demo';
import { useTranslations } from 'next-intl';
const AutoTimerSlider = () => {
    const t = useTranslations('homePage');
    return (
        <div className='relative'>
            <div className="carousel mt-[48px] z-0 lg:h-[1000px] md:h-[950px] h-[851px]">
                <div className="list">
                    <div className="item"
                        style={{ backgroundImage: `url("/images/homepage/industry2.webp")` }}>
                        <div className="content">
                            <div className="title font-semibold">{t('manufacturingTitle')}</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium">{t('manufacturingDesc')}</div>
                            <Link href="/industry/manufacturing-cloud-erp" aria-label='Manufacturing'>
                                <button className='!border-[1px] know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10'>{t('knowMoreBtn')} → </button>
                            </Link>
                        </div>
                    </div> 
                    <div className="item"
                        style={{ backgroundImage: `url("/images/homepage/industry3.webp")` }}>
                        <div className="content">
                            <div className="title font-semibold">{t('realEstateTitle')}</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium">{t('realEstateDesc')}</div>
                            <Link href='/industry/real-estate-property-management' aria-label='Real Estate'>
                                <button className='!border-[1px] know-more  !border-white p-4 xl:text-[20px] text-[16px] mt-10'>{t('knowMoreBtn')} → </button>
                            </Link>
                        </div>
                    </div>
                    <div className="item"
                        style={{ backgroundImage: `url("/images/homepage/industry4.webp")` }}>
                        <div className="content">
                            <div className="title font-semibold">{t('semiconductorTitle')}</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium">{t('semiconductorDesc')}</div>
                            <Link href="/industry/hitech-semiconductor-ai-it-solutions" aria-label='Semiconductor'>
                                <button className='!border-[1px]  know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10'>{t('knowMoreBtn')} → </button>
                            </Link>
                        </div>
                    </div>
                    <div className="item"
                        style={{ backgroundImage: `url("/images/homepage/industry5_with_bgc.webp")` }}>
                        <div className="content">
                            <div className="title font-semibold">{t('automotiveTitle')}</div>
                            <div className="des pr-5 xl:mt-8 mt-5">{t('automotiveDesc')}</div>
                            <Link href="/industry/digital-transformation-in-automotive-industry" aria-label='Semiconductor'>

                                <button className='!border-[1px] know-more  !border-white p-4 xl:text-[20px] text-[16px] mt-10'>{t('knowMoreBtn')} → </button>
                            </Link>
                        </div>
                    </div>
                    <div className="item"
                        style={{ backgroundImage: `url("/images/homepage/industry11.webp")` }}>
                        <div className="content">
                            <div className="title font-semibold">{t('healthcareTitle')}</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium">{t('healthcareDesc')}</div>
                            <Link href="/industry/life-sciences/healthcare-medtech-patient-care" aria-label='Semiconductor'>
                                <button className='!border-[1px] know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10'>{t('knowMoreBtn')} → </button>
                            </Link>
                        </div>
                    </div>

                    <div className="item"
                        style={{ backgroundImage: `url("/images/industry/travel-transporation/digital-shopping-holographic-interface-retail.webp")` }}>
                        <div className="content">
                            <div className="title font-semibold">{t('retailTitle')}</div>
                            <div className="des xl:pr-5 pr-10 xl:mt-8 mt-5 font-medium">{t('retailDesc')}</div>
                            <Link href="/industry/retail-industry-digital-transformation" aria-label='Semiconductor'>
                                <button className='!border-[1px] know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10'>{t('knowMoreBtn')} → </button>
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
                <Link href="/industry" className='bg-[#006FBE] xl:text-[20px] text-[14px] hover:bg-white hover:text-[#006FBE] border border-solid border-[#006FBE] font-semibold text-white xl:py-5 py-4 px-5 transition duration-300'>{t('viewAllIndustries')}</Link>
            </div>
        </div>
    )
}
export default AutoTimerSlider