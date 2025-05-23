"use client";
import Image from "next/image";
import ContactForm from "../../../app/components/contactform";
import Seo from "@/app/components/Seo";
import { HeroSection } from "@/app/components/herosection";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "SocialResponsibility",
  organization: {
    "@type": "Organization",
    name: "Rialtes",
    url: "https://www.rialtes.com",
    logo: "https://www.rialtes.com/logo.png",
    description:
      "Rialtes supports sustainability, diversity, and social impact through AI and community engagement.",
  },
  socialImpact:
    "Sustainability initiatives, AI workforce training, charity programs, and promoting responsible AI.",
  action:
    "Responsible AI adoption, net-zero carbon footprint, community empowerment, and upskilling youth.",
};
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Driving Sustainability with Responsible AI | Rialtes"
        description="Rialtes redefines corporate citizenship with sustainable AI, ESG innovation, talent upskilling, and social impact to build a smarter, inclusive future."
        keywords="home, website, welcome"
        canonical={
          "https://www.rialtes.com/about-us/impact-and-social-responsibility/"
        }
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <HeroSection
        title="Sustainability with Responsible AI"
        subtitle="Social Impact"
        mobimg="/images/social-impact/Social impact header.webp"
        deskimg="/images/social-impact/Social impact header.webp"
        extraImg=""
      />

      <section className="custom-container">
        <div className="xl:py-16 py-5 bg-white ">
          <div className=" xl:mb-0">
            <h2 className="text-black md:pb-0 pb-4  font-bold  xl:text-[44px] text-[22px] ">
              Rialtes has been empowering customers across the world to trust AI
              and strengthen the philosophy of responsible AI.
            </h2>
          </div>
        </div>
        <h2 className="pb-10  xl:text-[60px]">We care. We take actions.</h2>
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
          <div className="bg-[#016FBE] absolute xl:p-12 p-6 w-[720px] h-[484px] text-white  xl:right-0 top-0">
            <h3 className="font-normal text-[35px]">
              Rialtes Innovation Foundation
            </h3>
            <p className="mt-5 text-[22px]">
              At Rialtes Foundation, we believe in creating impact beyond
              business.{" "}
            </p>
            <p className="mt-4 text-[22px]">
              Through our charity initiatives in India, we focus on uplifting
              underprivileged communities, supporting girl child education, and
              helping children in need access better opportunities.
            </p>

            <p className="mt-4 text-[22px]">
              Empowering lives and building a better future remains at the heart
              of who we are.{" "}
            </p>
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
              <p className="mt-5 text-[22px]">
                At Rialtes, we are deeply committed to sustainability and
                climate action.
              </p>
              <p className="mt-4 text-[22px]">
                As proud member of the 1t.org initiative, we actively contribute
                to the global mission of planting 1 trillion trees. Our vision
                includes achieving net-zero operations, reducing our
                environmental footprint, and driving impactful climate
                initiatives.
              </p>

              <p className="mt-4 text-[22px]">
                Building a greener, more sustainable future is at the core of
                our values and actions
              </p>
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
                <h3 className="font-normal text-[35px]">
                  AI Impact for Future
                </h3>
                <p className="mt-5 text-[22px]">
                  At Rialtes, we are committed to shaping the future workforce
                  through our flagship program, ‘AI4Future’, focused on training
                  and certifying 500+ graduate trainees in leading global AI
                  certifications.
                </p>
                <p className="mt-4 text-[22px]">
                  We aim to bridge the AI skills gap and create opportunities
                  for the next generation of innovators.
                </p>

                <p className="mt-4 text-[22px]">
                  ‘AI4Future’ reflects our dedication to building future-ready
                  professionals and fostering inclusive growth.
                </p>
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
        <div
          className="
    relative p-8 xl:p-12 text-white bg-[#016FBE] pb-16 
    xl:absolute xl:w-[500px] xl:h-[410px] xl:right-0 xl:top-0
    "
        >
          <h3 className="font-normal text-[24px]">
            Rialtes Innovation Foundation
          </h3>
          <p className="mt-5 text-[16px] xl:text-[22px]">
            At Rialtes Foundation, we believe in creating impact beyond
            business.
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px]">
            Through our charity initiatives in India, we focus on uplifting
            underprivileged communities, supporting girl child education, and
            helping children in need access better opportunities.
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px]">
            Empowering lives and building a better future remains at the heart
            of who we are.
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

        <div
          className="
    relative p-8 pb-16 xl:p-12 text-white bg-[#016FBE]
    "
        >
          <h3 className="font-normal text-[24px]">ESG Efforts</h3>
          <p className="mt-5 text-[16px] xl:text-[22px]">
            At Rialtes, we are deeply committed to sustainability and climate
            action.
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px]">
            As proud member of the 1t.org initiative, we actively contribute to
            the global mission of planting 1 trillion trees. Our vision includes
            achieving net-zero operations, reducing our environmental footprint,
            and driving impactful climate initiatives.
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px]">
            Building a greener, more sustainable future is at the core of our
            values and actions.
          </p>
        </div>
      </section>
      <section className="relative  xl:hidden block">
        <div className="relative w-full h-[386px]">
          <Image
            src="/images/social-impact/social-impact-to.webp"
            alt=""
            fill
            className="object-cover object-[18%_20%]"
            priority
          />
        </div>

        <div
          className="
    relative p-8 pb-16 xl:p-12 text-white bg-[#016FBE] xl:bg-[#0060a799] 
    xl:absolute xl:w-[500px] xl:h-[410px] xl:right-0 xl:top-0
    "
        >
          <h3 className="font-normal text-[24px]">AI Impact for Future</h3>
          <p className="mt-5 text-[16px] xl:text-[22px]">
            At Rialtes, we are committed to shaping the future workforce through
            our flagship program, ‘AI4Future’, focused on training and
            certifying 500+ graduate trainees in leading global AI
            certifications.
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px]">
            We aim to bridge the AI skills gap and create opportunities for the
            next generation of innovators.
          </p>
          <p className="mt-4 text-[16px] xl:text-[22px]">
            ‘AI4Future’ reflects our dedication to building future-ready
            professionals and fostering inclusive growth.
          </p>
        </div>
      </section>

      <div className="custom-container">
        <section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-16 mt-16 xl:mt-20">
  
            <div className="relative flex flex-col">
              <div className="bg-[#086CB9] text-white w-full px-8 py-12 xl:px-10 xl:py-10 flex flex-col justify-center flex-grow">
                <h3 className="h3-bold line-clamp-2 text-[28px] md:text-[32px] xl:text-[40px]">
                  1 % of revenue
                </h3>
                <p className="mt-4 text-[20px] md:text-[24px] xl:text-[30px]">
                  committed to social work
                </p>
              </div>
              <Image
                className="w-full object-cover"
                src="/images/social-impact/revenue.webp"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                priority
                alt="Revenue social impact"
              />
            </div>


            <div className="relative flex flex-col">
              <Image
                className="w-full object-cover"
                src="/images/social-impact/planting.webp"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                priority
                alt="Tree planting social impact"
              />
              <div className="bg-[#086CB9] text-white w-full px-8 py-12 xl:px-10 xl:py-10 flex flex-col justify-center flex-grow min-h-[220px] xl:min-h-[245px]">
                <p className="text-[20px] md:text-[24px] xl:text-[30px] pb-2">
                  Committed to planting
                </p>
                <h3 className="h3-bold line-clamp-2 text-[28px] md:text-[32px] xl:text-[40px]">
                  1 trillion trees
                </h3>
              </div>
            </div>


            <div className="relative flex flex-col">
              <div className="bg-[#086CB9] text-white w-full px-8 py-12 xl:px-10 xl:py-10 flex flex-col justify-center flex-grow min-h-[220px]">
                <h3 className="h3-bold line-clamp-2 text-[28px] md:text-[32px] xl:text-[35px]">
                  500+ AI Certified
                </h3>
                <p className="mt-4 text-[20px] md:text-[24px] xl:text-[32px]">
                  professionals every six months
                </p>
              </div>
              <Image
                className="w-full object-cover"
                src="/images/social-impact/Certified professionals.webp"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                priority
                alt="AI certified professionals"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="custom-container text-black pb-20">
        <ContactForm
          title="Ready to take the next step? Let’s kick off your journey to operational excellence"
          className={"max-w-4xl"}
        />
      </div>
    </div>
  );
}
