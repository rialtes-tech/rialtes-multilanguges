"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import BreadCrumbs from '../../components/BreadCrumbs'
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "SocialResponsibility",
  organization: {
    "@type": "Organization",
    name: "Rialtes",
    url: "https://www.rialtes.com",
    logo: "https://www.rialtes.com/images/homepage/logo.svg",
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
      <Script
        id="schema-impact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* breadcrumb schema */}
      <BreadcrumbSchema currPage="Social Responsibility"/>

      {/** hero section * */}
      <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px]  ">
        <div className="hidden md:block">
          <Image
            src="/images/social-impact/Social impact header.webp"
            alt="desktop banner"
            fill
            priority
            className="transform transition-transform duration-500 group-hover:scale-110 object-cover"
          />
        </div>
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/social-impact/Social impact header.webp"
            alt="mobile banner"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative h-full custom-container flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12 md:mb-[140px]">
              <h1 className="text-[#FFFFFF] text-[18px] md:text-[24px] font-bold lg:w-full">
                Social Impact
              </h1>
              <h2 className="text-white leading-tight xl:mt-10 4xl:text-[60px] xl:text-[40px] text-[26px] ">
                Sustainability with<br /> Responsible AI
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            </div>
          </div>
        </div>
      </section>
      {/* page description */}
      <section className="custom-container">
        {/* breadcrumb */}
        <BreadCrumbs currPage="Social Responsibility" subPath=" " />
        <div className="xl:py-[80px] pt-14 pb-10 bg-white ">
          <div className=" xl:mb-0">
            <h2 className="text-black md:pb-0 font-bold 4xl:text-[43px]  xl:text-[35px] text-[22px] leading-tight ">
              Rialtes has been empowering customers across the world to trust AI
              and strengthen the philosophy of responsible AI.
            </h2>
          </div>
        </div>
        <h2 className="pb-10 4xl:text-[60px] xl:text-[40px] text-[26px]" >We care. We take actions.</h2>
      </section>
      {/* we care we take actions section */}
      <section className="relative h-[500px] xl:h-[550px] overflow-hidden xl:block hidden">
        <Image
          src="/images/social-impact/Rialtes Innovation Foundation.webp"
          alt="Rialtes Innovation Foundation"
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div className="h-full relative ml-[15px] xl:ml-[280px] 2xl:mr-[156px] xl:mr-[70px] md:ml-[100px]">
          <div className="bg-[#016FBE] absolute xl:p-12 p-6 w-[720px] h-[484px] text-white  xl:right-0 top-0">
            <h3 className="font-normal 4xl:text-[35px]  xl:text-[30px] text-[24px]">
              Rialtes Innovation Foundation
            </h3>
            <p className="mt-5 4xl:text-[22px]  xl:text-[18px] text-[16px] ">
              At Rialtes Foundation, we believe in creating impact beyond
              business.{" "}
            </p>
            <p className="mt-4 4xl:text-[22px] xl:text-[18px] text-[16px] ">
              Through our charity initiatives in India, we focus on uplifting
              underprivileged communities, supporting girl child education, and
              helping children in need access better opportunities.
            </p>
            <p className="mt-4 4xl:text-[22px]  xl:text-[18px] text-[16px]">
              Empowering lives and building a better future remains at the heart
              of who we are.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="relative h-[500px] xl:h-[550px] overflow-hidden mt-5 xl:mt-0 xl:block hidden">
        <Image
          src="/images/social-impact/ESG Efforts.webp"
          alt="impact and social responsibility image"
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div className="custom-container">
          <div className="relative p-6 w-[720px] h-[484px]">
            <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
            <div className="relative bg-opacity-80 text-white z-10 p-4 rounded-lg">
              <h3 className="font-normal 4xl:text-[35px]  xl:text-[30px] text-[24px]">ESG Efforts</h3>
              <p className="mt-5 4xl:text-[22px] xl:text-[18px] text-[16px] ">
                At Rialtes, we are deeply committed to sustainability and
                climate action.
              </p>
              <p className="mt-4 4xl:text-[22px] xl:text-[18px] text-[16px] ">
                As proud member of the 1t.org initiative, we actively contribute
                to the global mission of planting 1 trillion trees. Our vision
                includes achieving net-zero operations, reducing our
                environmental footprint, and driving impactful climate
                initiatives.
              </p>
              <p className="mt-4 4xl:text-[22px] xl:text-[18px] text-[16px] ">
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
          alt="AI Impact for Future"
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div className="h-full relative ml-[15px] xl:ml-[280px] 2xl:mr-[156px] xl:mr-[70px] md:ml-[100px]">
          <div className="flex justify-end">
            <div className="relative p-6 w-[720px] h-[484px]">
              <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
              <div className="relative bg-opacity-80 text-white z-10 p-4 rounded-lg">
                <h3 className="font-normal 4xl:text-[35px]  xl:text-[30px]  text-[24px]">
                  AI Impact for Future
                </h3>
                <p className="mt-5 4xl:text-[22px] xl:text-[18px] text-[16px] ">
                  At Rialtes, we are committed to shaping the future workforce
                  through our flagship program, ‘AI4Future’, focused on training
                  and certifying 500+ graduate trainees in leading global AI
                  certifications.
                </p>
                <p className="mt-4 4xl:text-[22px] xl:text-[18px] text-[16px] ">
                  We aim to bridge the AI skills gap and create opportunities
                  for the next generation of innovators.
                </p>
                <p className="mt-4 4xl:text-[22px] xl:text-[20px] text-[16px]">
                  ‘AI4Future’ reflects our dedication to building future-ready
                  professionals and fostering inclusive growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //for mobile section bg image and content */}
      <section className="relative xl:hidden block">
        {/* Image Section */}
        <div className="relative w-full h-[300px]">
          <Image
            src="/images/social-impact/AdobeStock_559787853.webp"
            alt="impact and social responsibility image"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Content Section */}
        <div
          className="relative p-8 xl:p-12 text-white bg-[#016FBE] pb-16 xl:absolute xl:w-[500px] xl:h-[410px] xl:right-0 xl:top-0">
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
            alt="ESG Efforts image"
            fill
            className="object-cover object-[40%_20%]"
            priority
          />
        </div>
        <div className="relative p-8 pb-16 xl:p-12 text-white bg-[#016FBE]">
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
      <section className="relative xl:hidden block">
        <div className="relative w-full h-[386px]">
          <Image
            src="/images/social-impact/social-impact-to.webp"
            alt="social-impact image"
            fill
            className="object-cover object-[18%_20%]"
            priority
          />
        </div>
        <div className="relative p-8 pb-16 xl:p-12 text-white bg-[#016FBE] xl:absolute xl:w-[500px] xl:h-[410px] xl:right-0 xl:top-0">
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
      {/* revenue section */}
      <div className="custom-container max-sm:px-0">
        <section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-16 mt-16 xl:mt-20">
            {/* card 1 */}
            <div className="relative flex flex-col">
              <div className="bg-[#086CB9] text-white w-full px-8 py-12 xl:px-10  4xl:py-10 2xl:py-8 flex flex-col justify-center flex-grow">
                <h3 className="h3-bold line-clamp-2 4xl:text-[40px] xl:text-[36px] text-[35px]">
                  1 % of revenue
                </h3>
                <p className="md:mt-4 mt-0 4xl:text-[30px] xl:text-[28px] text-[26px]">
                  committed to social work
                </p>
              </div>
              <Image
                className="w-full object-cover"
                src="/images/social-impact/revenue.webp"
                alt="Revenue social impact"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
            {/* card 2 */}
            <div className="relative flex flex-col">
              <Image
                className="w-full object-cover"
                src="/images/social-impact/planting.webp"
                alt="Tree planting social impact"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                priority
              />
              <div className="bg-[#086CB9] text-white w-full px-8 py-12 xl:px-10 xl:py-10 flex flex-col justify-center flex-grow min-h-[220px] xl:min-h-[245px]">
                <p className="4xl:text-[30px] xl:text-[28px] text-[26px] pb-0 md:pb-2">
                  Committed to planting
                </p>
                <h3 className="h3-bold line-clamp-2 4xl:text-[40px] xl:text-[36px] text-[35px] ">
                  1 trillion trees
                </h3>
              </div>
            </div>
            {/* card 3 */}
            <div className="relative flex flex-col">
              <div className="bg-[#086CB9] text-white w-full px-8 py-12 xl:px-10 xl:py-10 flex flex-col justify-center flex-grow min-h-[220px]">
                <h3 className="h3-bold line-clamp-2 4xl:text-[40px] xl:text-[36px] text-[35px]">
                  500+ AI Certified
                </h3>
                <p className="md:mt-4 mt-0 4xl:text-[30px] xl:text-[28px] text-[26px]">
                  professionals every six months
                </p>
              </div>
              <Image
                className="w-full object-cover"
                src="/images/social-impact/Certified professionals.webp"
                alt="AI certified professionals"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>
        </section>
      </div>
      <div className="custom-container text-black pb-20">
        <ContactForm
          title="Ready to take the next step? Let’s kick off your journey to operational excellence"
          className={" leading-tight  4xl:text-[60px]  xl:text-[45px]  text-[26px] max-[400px]:text-[24px]"}
        />
      </div>
    </div>
  );
}
