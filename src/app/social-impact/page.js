"use client";
import Image from "next/image";
import ContactForm from "../../app/components/contactform";
import Seo from "@/app/components/Seo";


export default function Page() {

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Grow with SAP Solutions: AI-Powered ERP for the Future | Rialtes"
        description="Grow with SAP and harness AI-driven ERP to streamline operations, boost efficiency, and drive business transformation seamlessly. Partner with Rialtes today!"
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
          <div className="container mx-auto h-full flex flex-col justify-center">
            <div className="flex flex-col">
              <h3 className="text-white text-[300] font-medium mb-2">Social Impact</h3>
              <h1 className="text-white max-w-2xl">
                Sustainability with Responsible AI
              </h1>
            </div>

          </div>
        </div>
      </section>

      <section
        className="
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
                <h2 className="text-black md:pb-0 pb-4 font-bold">Rialtes has been empowering customers across the world to trust AI and strengthen the philosophy of responsible AI.</h2>
              </div>
            </div>
          </div>
        </div>
        <h2 className="pb-10">We care. We take actions.</h2>
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
        container h-full relative
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
           <div className='bg-[#016FBE] absolute xl:p-12 p-5 text-white xl:w-[500px] xl:h-[410px] xl:right-0 top-0'>
            <h3 className="font-normal">Rialtes Innovation Foundation</h3>
            <p className='mt-5'>At Rialtes Foundation, we believe in creating impact beyond business. </p>
            <p className="mt-4">Through our charity initiatives in India, we focus on uplifting underprivileged communities, supporting girl child education, and helping children in need access better opportunities.</p>

            <p className="mt-4">Empowering lives and building a better future remains at the heart of who we are. </p>
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
          <div className='bg-[#016FBE] xl:bg-[#02467899] absolute xl:p-12 p-5 text-white xl:w-[500px] xl:h-[410px] xl:right-0 top-0 left-0'>
            <h3 className="font-normal">ESG Efforts</h3>
            <p className='mt-5'>At Rialtes, we are deeply committed to sustainability and climate action.</p>
            <p className="mt-4">As proud member of the 1t.org initiative, we actively contribute to the global mission of planting 1 trillion trees. Our vision includes achieving net-zero operations, reducing our environmental footprint, and driving impactful climate initiatives.</p>

            <p className="mt-4">Building a greener, more sustainable future is at the core of our values and actions</p>
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
        container h-full relative
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className='bg-[#016FBE] xl:bg-[#0060a799] absolute xl:p-12 p-5 text-white xl:w-[500px] xl:h-[410px] xl:right-0 top-0'>
            <h3 className="font-normal">AI Impact for Future</h3>
            <p className='mt-5'>At Rialtes, we are committed to shaping the future workforce through our flagship program, ‘AI4Future’, focused on training and certifying 500+ graduate trainees in leading global AI certifications.</p>
            <p className="mt-4">We aim to bridge the AI skills gap and create opportunities for the next generation of innovators.</p>

            <p className="mt-4"> ‘AI4Future’ reflects our dedication to building future-ready professionals and fostering inclusive growth.
            </p>
          </div>
        </div>
      </section>






{/* //for mobile section bg iamge and content */}

<section className="relative h-auto overflow-hidden">
  {/* Image Section */}
  <div className="relative w-full h-[150px] xl:h-full">
    <Image
      src="/images/social-impact/Rialtes Innovation Foundation.webp"
      alt="GROW with SAP"
      fill
      className="object-cover xl:object-[35%_20%]"
      priority
    />
  </div>

  {/* Content Section */}
  <div className="
    relative p-5 xl:p-12 text-white bg-[#016FBE] 
    xl:absolute xl:w-[500px] xl:h-[410px] xl:right-0 xl:top-0
    ">
    <h3 className="font-normal">Rialtes Innovation Foundation</h3>
    <p className="mt-5">
      At Rialtes Foundation, we believe in creating impact beyond business.
    </p>
    <p className="mt-4">
      Through our charity initiatives in India, we focus on uplifting underprivileged communities, supporting girl child education, 
      and helping children in need access better opportunities.
    </p>
    <p className="mt-4">
      Empowering lives and building a better future remains at the heart of who we are.
    </p>
  </div>
</section>

      <section className="relative h-auto xl:h-[550px] overflow-hidden mt-5 xl:mt-0 xl:hidden block">
  <div className="relative w-full h-[150px] xl:h-full">
    <Image
      src="/images/social-impact/ESG Efforts.webp"
      alt="GROW with SAP"
      fill
      className="object-cover xl:object-[35%_20%]"
      priority
    />
  </div>

  <div className="
    relative p-5 xl:p-12 text-white bg-[#016FBE] xl:bg-[#02467899] 
    xl:absolute xl:w-[500px] xl:h-[410px] xl:right-0 xl:top-0
    ">
    <h3 className="font-normal">ESG Efforts</h3>
    <p className="mt-5">At Rialtes, we are deeply committed to sustainability and climate action.</p>
    <p className="mt-4">
      As proud member of the 1t.org initiative, we actively contribute to the global mission of planting 1 trillion trees.
      Our vision includes achieving net-zero operations, reducing our environmental footprint, and driving impactful climate initiatives.
    </p>
    <p className="mt-4">Building a greener, more sustainable future is at the core of our values and actions.</p>
  </div>
</section>
<section className="relative h-auto xl:h-[550px] overflow-hidden mt-5 xl:mt-0 xl:hidden block">
  {/* Image Section */}
  <div className="relative w-full h-[150px] xl:h-full">
    <Image
      src="/images/social-impact/AI Impact for Future.webp"
      alt="GROW with SAP"
      fill
      className="object-cover xl:object-[35%_20%]"
      priority
    />
  </div>

  {/* Content Section */}
  <div className="
    relative p-5 xl:p-12 text-white bg-[#016FBE] xl:bg-[#0060a799] 
    xl:absolute xl:w-[500px] xl:h-[410px] xl:right-0 xl:top-0
    ">
    <h3 className="font-normal">AI Impact for Future</h3>
    <p className="mt-5">
      At Rialtes, we are committed to shaping the future workforce through our flagship program, ‘AI4Future’, focused on 
      training and certifying 500+ graduate trainees in leading global AI certifications.
    </p>
    <p className="mt-4">
      We aim to bridge the AI skills gap and create opportunities for the next generation of innovators.
    </p>
    <p className="mt-4">
      ‘AI4Future’ reflects our dedication to building future-ready professionals and fostering inclusive growth.
    </p>
  </div>
</section>




      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10 mt-20">
            <div className="relative">
            <div className=" bg-[#086CB9] p-10 text-white w-full">
                <div className="flex flex-col">
                  <h3 className="h3-bold line-clamp-2 xl:text-[30px] text-[20px]">1 % of revenue </h3>
                </div>
                <p className='md:mb-[15px]'>committed to social work</p>
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
              <div className="bg-[#086CB9] p-10 w-full text-white">
                <p className="mt-4">Committed to planting</p>
                <div className="flex flex-col">
                  <h3 className="h3-bold line-clamp-2 xl:text-[30px] text-[20px]">
                    1 trillion trees
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative">
            <div className="bg-[#086CB9] p-10 w-full text-white">
                <div className="flex flex-col">
                  <h3 className="h3-bold line-clamp-2 xl:text-[30px] text-[20px]">500+ AI Certified  </h3>
                </div>
                <p className='md:mb-[15px]'>professionals every six months</p>
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
        <ContactForm title={'Take the next step to operational excellence with us.'} className={"max-w-4xl"} />
      </div>
    </div >
  );
}