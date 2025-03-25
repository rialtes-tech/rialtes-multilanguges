"use client";
// pages/success-factors.js
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import FeaturedCarousel from '../../components/servicesFeaturedCarousel';
import InsightsCarousel from '../../components/servicesInsightsCarousel';
import ExploreMoreCarousel from '../../components/servicesExploreMoreCarousel';
import LearnMore from "@/app/components/learnMore";



const latestServices = [
  {
    id: 1,
    title: "Salesforce Manufacturing Cloud",
    description: "Built on the world’s #1 CRM, Manufacturing Cloud provides industrial leaders and their teams with a unified view of their customer and business data and AI-driven tools to elevate performance. We’ll help you through platform implementations and integration while helping you leverage Manufacturing Cloud’s range of innovative capabilities.",
  },
  {
    id: 2,
    title: "Azure AI Services",
    description: "Microsoft’s Azure AI Services for manufacturing offers industrial companies of all sizes customizable AI solutions spanning big data analytics, IoT networks, intelligent supply chain management, and other smart factory applications. Our manufacturing tech experts are here to provide strategic guidance throughout implementations, integration, deployment, and beyond.",
  },
  {
    id: 3,
    title: "SAP Digital Manufacturing Cloud",
    description: "SAP’s robust manufacturing execution system (MES) enabled industrial companies to view data from everywhere in their factories, track performance, optimize resource usage, and much more. Our SAP manufacturing software experts will ensure smooth implementations and integration processes while helping you make the most from Digital manufacturing Cloud.",
  },
  {
    id: 4,
    title: "SAP Ariba",
    description: "SAP Ariba offers manufacturing spend management solutions that maximize visibility into financial and operational data, seamlessly integrate source-to-pay processes, and easily manage supplier relationships. We’ll help you quickly setup SAP Ariba and integrate it with legacy systems so you can focus on managing your organization’s financial health.",
  },
  {
    id: 5,
    title: "SAP Sourcing and Procurement",
    description: "SAP solutions empower companies to enhance customer experiences, increase profitability, and build responsible, resilient organizations. Let us help you transform procurement from administrative tasks into performance-boosting, value-creating capabilities that benefit both your people and your business.",
  },
];

const ServicesCard = ({ services }) => (
  <div className="w-full h-full flex flex-col border border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
    <div className="flex-grow flex flex-col">
      <h3 className="mb-[15px] md:mb-[25px] font-[600] line-clamp-4 text-[#1F3F69]">{services.title}</h3>
      <p className='md:mb-[15px] mb-0'>{services.description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="container mx-auto text-black 2xl:pr-96 xl:pr-40 md:pr-20 pr-6">
      <h2 className="text-black mb-6">Platforms to power digital transformation in manufacturing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
        {latestServices.map((services) => (
          <ServicesCard key={services.id} services={services} />
        ))}
      </div>
      <LearnMore/>
    </div>
  );
};

const growLatestServices = [
  {
    id: 1,
    image: "/images/industry/manufacturing/seamless-customer-relationships-with-salesforce-manufacturing-cloud.webp",
    title: "Seamless Customer Relationships with Salesforce Manufacturing Cloud",
    description: "Boost your potential sales initiatives and streamline production alignment with Salesforce Manufacturing Cloud. These integrations allow your team to understand customer needs better while managing your inventory more effectively. ",
    listitems: (<ul className="list-disc marker:text-[#0092E0] marker:text-2xl text-black pl-5 pb-6"><li>Real-time customer insights</li> <li>Inventory tracking Comprehensive Strategy Planning</li> <li>Sales forecast analytics</li></ul>)
  },
  {
    id: 2,
    image: "/images/industry/manufacturing/manufacturing-erp-solutions.webp",
    title: "Manufacturing ERP Solutions",
    description: "Revolutionize your manufacturing process with Manufacturing ERP Solutions tailored to bring efficiency, transparency, and real-time control. All these benefits are crucial to ensuring each production process and team touchpoint is aligned with your total output goals. ",
    listitems: (<ul className="list-disc marker:text-[#0092E0] marker:text-2xl text-black pl-4 pb-6"><li>Inventory management</li> <li>Order tracking</li> <li>Financial analytics</li></ul>)
  },
  {
    id: 3,
    image: "/images/industry/manufacturing/streamlined-shop-floor-operations.webp",
    title: "Streamlined Shop Floor Operations",
    description: "Take complete control of your shop floor with Shop Floor Management Software designed for real-time tracking and optimization. This helps you to better manage your staff while ensuring balanced resource allocation for production. ",
    listitems: (<ul className="list-disc marker:text-[#0092E0] marker:text-2xl text-black pl-4 pb-6"><li>Workflow automation </li> <li>Real-time machine tracking</li> <li>Quality control metrics</li></ul>)
  },
  {
    id: 4,
    image: "/images/industry/manufacturing/advanced-production-with-sap-manufacturing-software.webp",
    title: "Advanced Production with SAP Manufacturing Software",
    description: "Harness the power of SAP Manufacturing Software to enhance every aspect of your manufacturing process, from design to delivery. Considering the production lifecycle and often complex systems in this industry, these are efficiencies you cannot miss out on improving. ",
    listitems: (<ul className="list-disc marker:text-[#0092E0] marker:text-2xl text-black pl-4 pb-6"><li>Production cycle analytics </li> <li>Integrated supply chain management</li> <li>Real-time quality assessment</li></ul>)
  },
];

const GrowServicesCard = ({ services }) => (
  <div className="w-full h-full">
    <div className="relative overflow-hidden">
      <Image
        className="w-full transition-transform duration-300 hover:scale-105"
        src={services.image}
        alt={services.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        priority
      />
    </div>
    <div className="flex flex-col pt-4">
      <h3 className="mb-[10px] md:mb-[15px] font-semibold h3-bold line-clamp-2 min-h-[60px]">{services.title}</h3>
    </div>
    <p className='md:mb-[15px] mb-10'>{services.description}</p>
    {services.listitems}
   <LearnMore/>
  </div>
);

const GrowServices = () => {
  return (
    <div className="container mx-auto text-black 2xl:pr-96 xl:pr-40 md:pr-20 pr-6">
      <h2 className="pb-10 text-black">Optimize with Manufacturing Mobility Solution</h2>
      <p className="md:pb-40 pb-20">Break the chains of traditional manufacturing limitations and go mobile with our Manufacturing Mobility Solutions. Your leadership, stakeholders, and management team members need direct access to all operations around the clock from the power of their tablets, smartphones, and other mobile connections.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-28">
        {growLatestServices.map((services) => (
          <GrowServicesCard key={services.id} services={services} />
        ))}
      </div>
    </div>
  );
};

const manufacturing = [
  {
    id: 1,
    image: "/images/industry/manufacturing/consumption-based-digital-models.svg",
    title: "Consumption-based Digital Models",
    description: "Smart digital technologies are fundamentally changing shop floor operations. It’s time to unlock the power of innovations like predictive analytics, IoT devices, digital twins, and AI-driven task guidance in your facilities. ",
  },
  {
    id: 2,
    image: "/images/industry/manufacturing/intelligent-supply-chain-solutions.svg",
    title: "Intelligent Supply Chain Solutions",
    description: "Stay on top of critical supply chain and planning information and adapt your production schedule accordingly. We offer intelligent supply chain software with embedded AI and machine learning capabilities so you can seamlessly manage your flow of goods and stay agile in the face of fluctuating supply and demand.",
  },
  {
    id: 3,
    image: "/images/industry/manufacturing/smart-digital-products.svg",
    title: "Smart Digital Products",
    description: "Manage your clients’ investments with confidence using secure and innovative fintech solutions. We’ll help you implement the world’s leading financial software, integrate it with your legacy systems, and help you accelerate time to value.",
  },
];



export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>MANUFACTURING | Company Name</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-[350px] sm:h-[500px] lg:h-[837px] overflow-hidden group">
        <Image
          className="transition duration-300 ease-out group-hover:scale-110"
          src="/images/industry/manufacturing/manufacturing-banner.webp"
          alt="MANUFACTURING"
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
              <h3 className="text-white text-[300] font-medium mb-2">MANUFACTURING</h3>
              <h2 className="text-white max-w-2xl">
                Supercharge your manufacturing operations with next-gen digital solutions
              </h2>
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

        <div className="py-10 bg-white">
          <div className="container mx-auto 2xl:pr-72 xl:pr-40 md:pr-20">
            <div className="flex flex-col xl:flex-row py-6">
              <div className="flex flex-col w-full xl:max-w-xl xl:mr-10 xl:mb-0 mb-4">
                <h1 className="text-black md:pb-0 pb-4 xl:text-[50px]">Creating Greater System & Process Efficiency with Rialtes</h1>
              </div>
              <div className="flex flex-col w-full xl:max-w-xl">
                <p className="text-[#000000]">Succeeding in the manufacturing industry requires extreme attention to production line counts while adapting to any new technologies that lower lag time or error repetition. At Rialtes, we understand the critical nature of improving and streamlining manufacturing operations. We offer a range of solutions from Salesforce Manufacturing Cloud to SAP Manufacturing Software to help you keep your production lines running smoothly. </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Optimize with Manufacturing Mobility Solution */}
      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="py-16 bg-white">
          <GrowServices />
        </section>
      </div>


      {/* Manufacturing technology expertise at your fingertips */}
      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="py-16 bg-white">
          <div className="container mx-auto text-black 2xl:pr-96 xl:pr-40 md:pr-20 pr-6">
            <h2 className="pb-10 text-black">Manufacturing technology expertise at your fingertips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-28">
              {manufacturing.map((services) => (
                <div key={services.id} className="w-full h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      className="max-w-[100px] transition-transform duration-300 hover:scale-105"
                      src={services.image}
                      alt={services.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      priority
                    />
                  </div>
                  <div className="flex flex-col pt-4">
                    <h3 className="mb-[10px] md:mb-[15px] font-semibold h3-bold line-clamp-2 min-h-[60px]">{services.title}</h3>
                  </div>
                  <p className='md:mb-[15px] mb-10'>{services.description}</p>
                  {services.listitems}
                </div>
              ))}
            </div>
          </div>

        </section>
      </div>



      {/* Platforms to power digital transformation in manufacturing */}
      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="pb-16 bg-white">

          <Services />

        </section>
      </div>



      {/* Latest Customer Success Stories */}
      < div className="bg-[#F5F5F5] py-6" >
        <div
          className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <FeaturedCarousel />

        </div>
      </div>

      {/* Latest Blogs */}
      < div
        className="
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  py-10"
      >
        <InsightsCarousel />

      </div >

      {/* Explore More */}
      < div className="bg-[#808080] py-6" >
        <div
          className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <ExploreMoreCarousel />

        </div>
      </div >


      {/* Contact Form */}
      < div
        className="
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black py-6
  lg:pr-0 pr-6"
      >
        <ContactForm title={'Take the next step to operational excellence with us.'} className={"max-w-4xl"} />

      </div >


    </div >
  );
}