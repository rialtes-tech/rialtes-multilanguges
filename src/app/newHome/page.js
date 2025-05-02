
import Link from 'next/link';
import '../../app/newHome/demo.css';
import MyComponent from './demo';
const AutoTimerSlider = () => {

    return (
<div>


        <div className="carousel mt-10 z-0 xl:h-[1100px] h-[851px]">
            <div className="list">

                <div className="item"
                    style={{ backgroundImage: `url("/images/homepage/industry1.webp")` }}>
                    <div className="content">
                        <div className="title">LIFE SCIENCE</div>
                        <div className="des pr-16">Our Salesforce healthcare CRM integration can help medical service providers seamlessly integrate hospital software.</div>
                        <button className='!border-2 know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10'>Know More → </button>

                    </div>
                </div>

                <div className="item"
                    style={{ backgroundImage: `url("/images/homepage/industry2.webp")` }}>
                    <div className="content">
                        <div className="title">REAL ESTATE</div>

                        <div className="des pr-16">CRM solutions for real estate help manage leads, automate tasks, and enhance property listings visibility.</div>
                        <button className='!border-2 know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10'>Know More → </button>

                    </div>
                </div>

                <div className="item"
                    style={{ backgroundImage: `url("/images/homepage/industry3.webp")` }}>
                    <div className="content">
                        <div className="title">HI-TECH</div>
                        <div className="des pr-16">Drive digital innovation with CRM tools for smarter customer engagement and faster service cycles.</div>
                        <button className='!border-2 know-more  !border-white p-4 xl:text-[20px] text-[16px] mt-10'>Know More → </button>

                    </div>
                </div>

                <div className="item"
                    style={{ backgroundImage: `url("/images/homepage/industry4.webp")` }}>
                    <div className="content">
                        <div className="title">AUTOMOTIVE</div>
                        <div className="des pr-16">Empower your digital transformation journey with tailored hi-tech solutions powered by Salesforce.</div>
                        <button className='!border-2  know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10'>Know More → </button>

                    </div>
                </div>


                <div className="item"
                    style={{ backgroundImage: `url("images/homepage/industry5.webp")` }}>
                    <div className="content">
                        <div className="title">Healthcare</div>
                        <div className="des pr-16">Salesforce healthcare CRM to help medical service providers seamlessly integrate hospital software.</div>
                        <button className='!border-2 know-more  !border-white p-4 xl:text-[20px] text-[16px] mt-10'>Know More → </button>

                    </div>
                </div>
                <div className="item"
                    style={{ backgroundImage: `url("images/homepage/industry5.webp")` }}>
                    <div className="content">
                        <div className="title">Healthcare</div>
                        <div className="des pr-16">Salesforce healthcare CRM to help medical service providers seamlessly integrate hospital software.</div>
                        <button className='!border-2 know-more !border-white p-4 xl:text-[20px] text-[16px] mt-10'>Know More → </button>

                    </div>
                </div>

            </div>


            <div className="arrows flex">
                <div className="flex items-center  gap-0  ml-[35px] xl:ml-2">
                    <button className="prev bg-white text-black p-2 w-[69px] h-[69px]  border-r-2 border-black hover:bg-gray-200 cursor-pointer">◀</button>
                    <button className="next bg-white text-black p-2 w-[69px] h-[69px]  hover:bg-gray-200">▶</button>
                </div>

                <div className="slide-number"></div>

            </div>

            <div className="timeRunning"></div>

            <MyComponent />
            
        </div>
        <div className="flex absolute right-0 mt-[-30px] mr-[200px]">
    <button className="bg-[#134874] xl:text-[20px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] border border-solid border-[#134874] font-semibold text-white py-5 px-8 transition duration-300">
      <Link href='/industry'>View All Industry</Link>
    </button>
  </div>
</div>

    )

}

export default AutoTimerSlider