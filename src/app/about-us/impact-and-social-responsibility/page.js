"use client";
import Image from "next/image";
import ContactForm from "../../../app/components/contactform";
import Seo from "@/app/components/Seo";


export default function Page() {

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Driving Meaningful Change Through Social Impact | Rialtes"
        description="We believe in making a real difference! See how Rialtes supports communities, empowers people, and drives sustainable change for a better future"
        keywords="home, website, welcome"
      />

      <section className="relative h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/social-impact/Social impact header.webp"
          alt="GROW with SAP"
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div
          className="
        container h-full relative
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="container mx-auto h-full flex flex-col justify-center xl:mt-[-80px]">
            <div className="flex flex-col">
              <h3 className="text-white xl:text-[24px] text-[18px] font-medium mb-2">Social Impact</h3>
              <h1 className="text-white xl:max-w-2xl max-w-xs xl:text-[60px] text-[24px]">
                Sustainability with Responsible AI
              </h1>
            </div>

          </div>
        </div>
      </section>

      <section
        className="xl:mt-0 mt-10
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <div className="xl:py-16 py-5 bg-white">
          <div className="container mx-auto">
            <div>
              <div className="w-full xl:mr-4 xl:mb-0">
                <h2 className="text-black md:pb-0 pb-4 font-bold  w-full xl:text-[44px] text-[22px]">Rialtes has been empowering customers across the world to trust AI and strengthen the philosophy of responsible AI.</h2>
              </div>
            </div>
          </div>
        </div>
        <h2 className="pb-10 xl:text-[60px]">We care. We take actions.</h2>
      </section>

      <section className="relative h-[500px] xl:h-[550px] overflow-hidden xl:block hidden">
        <Image
          src="/images/social-impact/Rialtes Innovation Foundation.webp"
          alt="GROW with SAP"
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div
          className="
         h-full relative
        ml-[15px]
        xl:ml-[280px] 
        xl:mr-[156px] 
        md:ml-[100px]"
        >
          <div className='bg-[#016FBE] absolute xl:p-12 p-6 w-[720px] h-[484px] text-white  xl:right-0 top-0'>
            <h3 className="font-normal text-[35px]">Rialtes Innovation Foundation</h3>
            <p className='mt-5 text-[22px]'>At Rialtes Foundation, we believe in creating impact beyond business. </p>
            <p className="mt-4 text-[22px]">Through our charity initiatives in India, we focus on uplifting underprivileged communities, supporting girl child education, and helping children in need access better opportunities.</p>

            <p className="mt-4 text-[22px]">Empowering lives and building a better future remains at the heart of who we are. </p>
          </div>
        </div>
      </section>
      <section className="relative h-[500px] xl:h-[550px] overflow-hidden mt-5 xl:mt-0 xl:block hidden">
        <Image
          src="/images/social-impact/ESG Efforts.webp"
          alt="GROW with SAP"
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div
          className="
        container h-full relative
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="relative p-6 w-[720px] h-[484px]">
            <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>

            <div className="relative  bg-opacity-80 text-white z-10 p-4 rounded-lg">
              <h3 className="font-normal text-[35px]">ESG Efforts</h3>
              <p className='mt-5 text-[22px]'>At Rialtes, we are deeply committed to sustainability and climate action.</p>
              <p className="mt-4 text-[22px]">As proud member of the 1t.org initiative, we actively contribute to the global mission of planting 1 trillion trees. Our vision includes achieving net-zero operations, reducing our environmental footprint, and driving impactful climate initiatives.</p>

              <p className="mt-4 text-[22px]">Building a greener, more sustainable future is at the core of our values and actions</p>
            </div>
          </div>

        </div>
      </section>

      <section className="relative h-[500px] xl:h-[550px] overflow-hidden mt-5 xl:mt-0 xl:block hidden">
        <Image
          src="/images/social-impact/AI Impact for Future.webp"
          alt="GROW with SAP"
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div
          className="
        h-full relative
        ml-[15px]
        xl:ml-[280px] 
        xl:mr-[156px] 
        md:ml-[100px]"
        >
          <div className="flex justify-end">
            <div className="relative p-6 w-[720px] h-[484px]">
              <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>

              <div className="relative bg-opacity-80 text-white z-10 p-4 rounded-lg">
                <h3 className="font-normal text-[35px]">AI Impact for Future</h3>
                <p className='mt-5 text-[22px]'>At Rialtes, we are committed to shaping the future workforce through our flagship program, ‘AI4Future’, focused on training and certifying 500+ graduate trainees in leading global AI certifications.</p>
                <p className="mt-4 text-[22px]">We aim to bridge the AI skills gap and create opportunities for the next generation of innovators.</p>

                <p className="mt-4 text-[22px]">‘AI4Future’ reflects our dedication to building future-ready professionals and fostering inclusive growth.</p>
              </div>
            </div>
          </div>


        </div>
      </section>






      {/* //for mobile section bg iamge and content */}

      <section className="relative xl:hidden block">
        {/* Image Section */}
        <div className="relative w-full h-[300px]">
          <Image
            src="/images/social-impact/AdobeStock_559787853.webp"
            alt="GROW with SAP"
            fill
            className="object-cover"
            priority

          />
        </div>

        {/* Content Section */}
        <div className="
    relative p-8 xl:p-12 text-white bg-[#016FBE] pb-16 
    xl:absolute xl:w-[500px] xl:h-[410px] xl:right-0 xl:top-0
    ">
          <h3 className="font-normal text-[24px]">Rialtes Innovation Foundation</h3>
          <p className="mt-5 text-[16px] xl:text-[22px]">
            At Rialtes Foundation, we believe in creating impact beyond business.
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px]">
            Through our charity initiatives in India, we focus on uplifting underprivileged communities, supporting girl child education,
            and helping children in need access better opportunities.
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px]">
            Empowering lives and building a better future remains at the heart of who we are.
          </p>
        </div>
      </section>

      <section className="relative  xl:hidden block">
        <div className="relative w-full h-[300px]">
          <Image
            src="/images/social-impact/ESG Efforts.webp"
            alt="GROW with SAP"
            fill
            className="object-cover object-[40%_20%]"
            priority
          />
        </div>

        <div className="
    relative p-8 pb-16 xl:p-12 text-white bg-[#016FBE]
    ">
          <h3 className="font-normal text-[24px]">ESG Efforts</h3>
          <p className="mt-5 text-[16px] xl:text-[22px]">At Rialtes, we are deeply committed to sustainability and climate action.</p>
          <p className="mt-4 text-[16px] xl:text-[22px]">
            As proud member of the 1t.org initiative, we actively contribute to the global mission of planting 1 trillion trees.
            Our vision includes achieving net-zero operations, reducing our environmental footprint, and driving impactful climate initiatives.
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px]">Building a greener, more sustainable future is at the core of our values and actions.</p>
        </div>
      </section>
      <section className="relative  xl:hidden block">
        {/* Image Section */}
        <div className="relative w-full h-[300px]">
          <Image
            src="/images/social-impact/AI Impact for Future.webp"
            alt=""
            fill
            className="object-cover object-[18%_20%]"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="
    relative p-8 pb-16 xl:p-12 text-white bg-[#016FBE] xl:bg-[#0060a799] 
    xl:absolute xl:w-[500px] xl:h-[410px] xl:right-0 xl:top-0
    ">
          <h3 className="font-normal text-[24px]">AI Impact for Future</h3>
          <p className="mt-5 text-[16px] xl:text-[22px]">
            At Rialtes, we are committed to shaping the future workforce through our flagship program, ‘AI4Future’, focused on
            training and certifying 500+ graduate trainees in leading global AI certifications.
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px]">
            We aim to bridge the AI skills gap and create opportunities for the next generation of innovators.
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px]">
            ‘AI4Future’ reflects our dedication to building future-ready professionals and fostering inclusive growth.
          </p>
        </div>
      </section>




      <div
        className="
        xl:container
       mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
       "
      >
        <section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-16 mt-20">
            <div className="relative">
              <div className=" bg-[#086CB9] xl:p-10 p-14 text-white w-full">
                <div className="flex flex-col">
                  <h3 className="h3-bold line-clamp-2 xl:text-[40px] text-[35px]">1 % of revenue </h3>
                </div>
                <p className='md:mb-[15px] xl:text-[30px] text-[26px]'>committed to social work</p>
              </div>
              <Image
                className="w-full"
                src='/images/social-impact/revenue.webp'
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                priority
              />

            </div>
            <div className="relative">
              <Image
                className="w-full"
                src="/images/social-impact/planting.webp"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                priority
              />
              <div className="bg-[#086CB9] xl:p-10 p-14 w-full text-white xl:h-[245px]">
                <p className="mt-4 xl:text-[30px] text-[24px]">Committed to planting</p>
                <div className="flex flex-col">
                  <h3 className="h3-bold line-clamp-2 xl:text-[40px] text-[35px]">
                    1 trillion trees
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#086CB9] xl:p-10 p-14 w-full text-white">
                <div className="flex flex-col">
                  <h3 className="h3-bold line-clamp-2 xl:text-[40px] text-[32px]">500+ AI Certified  </h3>
                </div>
                <p className='md:mb-[15px] xl:text-[30px] text-[24px]'>professionals every six months</p>
              </div>
              <Image
                className="w-full"
                src='/images/social-impact/Certified professionals.webp'
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                priority
              />

            </div>
          </div>
        </section>
      </div>
      < div
        className="
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black pb-20"
      >
        <ContactForm title='Ready to take the next step? Let’s kick off your journey to operational excellence' className={"max-w-4xl"} />
      </div>
    </div >
  );
}