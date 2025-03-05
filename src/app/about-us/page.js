// pages/about.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>About Us | Company Name</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-[650px] bg-[url('/images/about-us/about-us-header.webp')] bg-cover bg-right overflow-hidden">
        <div
          className="
        container h-full
        ml-[280px] w-[calc(100%-280px)] mr-0

        xl:ml-[200px] xl:w-[calc(100%-200px)]
        lg:ml-[150px] lg:w-[calc(100%-150px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="absolute inset-0 opacity-70"></div>
          <div className="absolute inset-0 opacity-50"></div>
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <h3 className="text-white text-[300] font-medium mb-2">About US</h3>
            <h1 className="text-white max-w-2xl">
              HIGHLY ACCOMPLISHED STRATEGISTS, DESIGNERS, ARCHITECTS, AND
              ENGINEERS.
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <div
        className="
        container
        ml-[280px] w-[calc(100%-280px)] mr-0
        
        xl:ml-[200px] xl:w-[calc(100%-200px)]
        lg:ml-[150px] lg:w-[calc(100%-150px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-[#000000] text-[20px] sm:text-[26px] py-6 max-w-4xl">
              We have been helping customers, across industries, ranging from
              real estate to financial services to healthcare, achieve greater
              agility through transformed and automated customer experiences.
            </h2>

            <div className="flex flex-col mt-0 sm:mt-6 sm:flex-row sm:gap-[8rem] gap-[4rem]">
              <div className="flex flex-col max-w-[532px]">
                <h2 className="text-[#000000] mb-6">Who we are?</h2>
                <div className="w-full overflow-hidden mb-6">
                  <div className="transition-transform duration-300 hover:scale-110 w-full h-full">
                    <Image
                      src="/images/about-us/who-we-are.webp"
                      alt="Leadership Team"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      priority
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-[#000000] mt-6">
                    We are an IT consulting company in the USA and a leading
                    property management solution provider. Our journey began
                    with a simple yet profound vision to revolutionize business
                    operations and empower organizations with the transformative
                    potential of technology. Our dynamic engineers, analysts,
                    and architects continue to guide you in your unique digital
                    transformation. We are bound by our unwavering commitment to
                    excellence and shared passion for technology.
                  </p>
                </div>
              </div>

              <div className="flex flex-col max-w-[532px] mt-[0px] md:mt-[200px]">
                <h2 className="text-[#000000] mb-6">What we do?</h2>
                <div className="w-full overflow-hidden mb-6">
                  <div className="transition-transform duration-300 hover:scale-110 w-full h-full">
                    <Image
                      src="/images/about-us/what-we-do.webp"
                      alt="Leadership Team"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      priority
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-[#000000] mt-6">
                    We specialize in various areas, including Enterprise
                    Platform Solutions, AI, Data Analytics, Automation, Quality
                    Engineering, Integration, and Business Process Outsourcing.
                    Our mission is to fuel your organization's growth with
                    innovative technology solutions. As a Certified Salesforce
                    Consulting Partner, we offer comprehensive Salesforce
                    services, including our in-house product RealForce, designed
                    to revolutionize property management. Whether it's
                    strategizing, integrating, or providing ongoing support,
                    we're with you every step of the way in your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mission & Vision Section */}
      <div
        className="
        container px-6
        ml-[280px] mr-0
        
        lg:ml-[150px] 
        md:ml-[100px]
        sm:mx-5 
        xs:mx-4 "
      >
        <section className="py-16 w-full relative overflow-hidden group">
          <div className="absolute inset-0">
            <div className="w-full h-full">
              <div className="hidden md:block relative w-full h-full">
                <Image
                  src="/images/about-us/vision-mission.webp"
                  alt="Vision and Mission Background"
                  fill
                  sizes="100vw"
                  priority
                  className="transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    zIndex: -1,
                  }}
                />
              </div>

              {/* Gradient overlay that's always visible */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/80"></div>
            </div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-2/5">
                <div className="w-full h-64 bg-[url('/images/about-us/vision-mission.webp')] md:bg-none bg-cover bg-left overflow-hidden">
                  <div className="w-full h-full rounded-lg"></div>
                </div>
              </div>

              <div className="max-w-2xl md:w-3/5 space-y-6">
                <h2 className="text-[#000000] mb-10 text-left">
                  Our Mission & Vision
                </h2>
                <p className="text-[#000000]">
                  Our mission is to help our clients make distinctive, lasting,
                  and substantial improvements in their performance, and to
                  build a great firm that attracts, develops, excites, and
                  retains exceptional people.
                </p>

                <p className="text-[#000000]">
                  We believe we will be successful if our clients are
                  successful.
                </p>

                <p className="text-[#000000]">
                  Solving the hardest problems requires the best people. We
                  believe that the best people will be drawn to the opportunity
                  to work on the hardest problems. These two parts of our
                  mission reinforce each other and make us strong and
                  relentless.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Our Values Section */}
      <div
        className="
        container
        ml-[280px] w-[calc(100%-280px)] mr-0
        
        xl:ml-[200px] xl:w-[calc(100%-200px)]
        lg:ml-[150px] lg:w-[calc(100%-150px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 mb-16">
              <div className="w-[300px] md:w-1/5">
                <h2 className="text-[#000000]">Our Values</h2>
              </div>
              <div className="w-full md:w-3/5">
                <p className="text-[#000000]">
                  Our values are not just words on a page, they are the essence
                  of our culture. They define who we are as an organization and
                  serve as a driving force behind every action we take.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Value 1 */}
              <div className="flex flex-col pr-6 max-w-[400px]">
                <div className="flex justify-start mb-6">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <Image
                      src="/images/about-us/employee-approach.svg"
                      alt="Employee and Client-centric approach"
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-[#000000] mb-3">
                  Employee and
                  <br />
                  Client-centric approach
                </h3>
                <p className="text-[#000000]">
                  We make sure to put our employees and clients first,
                  prioritize their needs, and exceed their expectations in every
                  interaction.
                </p>
              </div>

              {/* Value 2 */}
              <div className="flex flex-col pr-6 max-w-[400px]">
                <div className="flex justify-start mb-6">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <Image
                      src="/images/about-us/intelligent-risk-taking.svg"
                      alt="Intelligent risk-taking"
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-[#000000] mb-3">Intelligent risk-taking</h3>
                <p className="text-[#000000]">
                  We foster innovation by taking intelligent risks, pushing
                  boundaries, and exploring new horizons to drive continuous
                  improvements.
                </p>
              </div>

              {/* Value 3 */}
              <div className="flex flex-col pr-6 max-w-[400px]">
                <div className="flex justify-start mb-6">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <Image
                      src="/images/about-us/doing-the-right-thing.svg"
                      alt="Doing the right thing"
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-[#000000] mb-3">Doing the right thing</h3>
                <p className="text-[#000000]">
                  We uphold the highest standards of integrity and ethical
                  conduct, consistently doing what's right for our clients,
                  employees, and community.
                </p>
              </div>

              {/* Value 4 */}
              <div className="flex flex-col mt-8 pr-6 max-w-[400px]">
                <div className="flex justify-start mb-6">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <Image
                      src="/images/about-us/quality.svg"
                      alt="Quality in everything we do"
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-[#000000] mb-3">
                  Quality in everything we do
                </h3>
                <p className="text-[#000000]">
                  We are committed to providing excellent quality in everything
                  we do.
                </p>
              </div>

              {/* Value 5 */}
              <div className="flex flex-col mt-8 pr-6 max-w-[400px]">
                <div className="flex justify-start mb-6">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <Image
                      src="/images/about-us/inclusive-and-belonging.svg"
                      alt="Inclusive and belonging"
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-[#000000] mb-3">Inclusive and belonging</h3>
                <p className="text-[#000000]">
                  We cultivate an environment where every employee feels a
                  profound sense of belonging, making the workplace a positive
                  and supportive place.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Our Partnerships Section */}
      <section className="py-16 bg-gray-100">
        <div
          className="
        container
        ml-[280px] w-[calc(100%-280px)] mr-0
        
        xl:ml-[200px] xl:w-[calc(100%-200px)]
        lg:ml-[150px] lg:w-[calc(100%-150px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-[#000000] mb-8">Our Partnerships</h2>

            <p className="text-[#000000] mb-12 max-w-3xl">
              Rialtes is a trusted partner with leading organizations working
              toward a shared goal of innovating and revolutionizing businesses
              with next-gen solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[
                "sap-logo",
                "salesforce-logo",
                "aws-logo",
                "automation-logo",
                "adobe-logo",
                "azure-logo",
                "tableau-logo",
                "tricentis-logo",
                "powerbi-logo",
                "docusign-logo",
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-left mb-6"
                >
                  <div className="h-auto flex items-center justify-left">
                    <Image
                      src={`/images/about-us/logo/${logo}.webp`}
                      alt={logo}
                      width={210}
                      height={112}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-start">
              <button className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-3 px-8 transition duration-300 relative overflow-hidden">
                <span className="inline-flex items-center group-hover:-translate-x-1 transition-transform duration-300">
                  View All Our Partners
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ml-1">
                    &gt;
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <div
        className="
  container
  ml-[280px] w-[calc(100%-280px)] mr-0
  
  xl:ml-[200px] xl:w-[calc(100%-200px)]
  lg:ml-[150px] lg:w-[calc(100%-150px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12 order-2 md:order-1">
                <h2 className="text-[#000000] mb-6 order-1">
                  Meet our
                  <br />
                  Leadership team
                </h2>
                <p className="text-[#000000] mb-8 order-2">
                  Get to know the people behind Rialtes who lead the way towards
                  excellence and innovation.
                </p>
                <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4">
                  <Link href='leadership'>  Know Our Leaders</Link>
                </button>
              </div>

              <div className="w-full md:w-1/2 overflow-hidden order-1 md:order-2 mb-6 md:mb-0">
                <div className="transition-transform duration-300 hover:scale-110 w-full h-full order-3">
                  <Image
                    src="/images/about-us/leadership-thumb.webp"
                    alt="Leadership Team"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form Section */}
      <div
        className="
        container
        ml-[280px] w-[calc(100%-280px)] mr-0
        
        xl:ml-[200px] xl:w-[calc(100%-200px)]
        lg:ml-[150px] lg:w-[calc(100%-150px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="py-16 bg-white px-6">
          <div className="container max-w-5xl">
            <h2 className="text-[#000000] md:mb-8 max-w-4xl mb-6">
              Ready to take the next step? Let's kick off your journey to
              operational excellence
            </h2>

            <form className="max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Surname*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Job Title*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <textarea
                  placeholder="Message*"
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <div>
                <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
                  Let's Begin
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
