import Image from 'next/image';
import Seo from '@/app/components/Seo';
import TextComponent from './TextComponent';

export default function Page() {
    return (
        <div>
            <Seo
        title="Retail Business Consulting Services and Omnichannel Solutions | Rialtes"
        description="Retail+ by Rialtes offers expert-led Retail Business Consulting Services and AI-powered Omnichannel Solutions. Start your retail transformation now."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/services/lob/retail-plus-business-consulting-omnichannel-solutions/"
      />

            <div className="relative">
                <div className="relative w-full h-[650px]">
                    {/* Desktop Image */}
                    <Image
                        src="/images/retail/Group 591.png"
                        alt="Background"
                        fill
                        className="object-cover hidden md:block"
                    />
                    {/* Mobile Image */}
                    <Image
                        src="/images/retail/Mgroup592.png"
                        alt="Background"
                        fill
                        className="object-cover block md:hidden"
                    />
                    <div className="absolute mx-[35px] xl:mx-0 top-[80px] md:top-[150px] left-[46%] transform -translate-x-1/2 md:px-0 z-10 max-w-screen-xl w-full">
                        <h6 className="text-white ml-5 text-[15px]  xl:text-[24px]  font-bold tracking-[0px] max-w-[687px] mt-[30px] mx-auto md:-ml-[0] sm:text-left ">
                            Retail+
                        </h6>
                        <h1 className="text-white ml-5 leading-tight   max-w-[687px] mt-[30px] mx-auto md:mx-0  md:text-left pr-32 xl:pr-0">
                            Intelligent, Connected, and Scalable Retail Transformation
                        </h1>
                    </div>

                </div>

                <TextComponent />
            </div>
        </div>
    );
}
