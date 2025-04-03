// // pages/about.js
// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import ContactForm from "../components/contactform";
// import Seo from "../components/Seo";

// export default function About() {
//   return (
//     <div className="min-h-screen">
//       <Seo
//         title="Who We Are – IT Consulting & Digital Innovation at Rialtes"
//         description="As a trusted IT partner, Rialtes empowers organizations with Salesforce, AI, SAP, and automation solutions, driving transformation and excellence at every step."
//         keywords="home, website, welcome"
//       />

//       <section className="relative h-[650px] bg-[url('/images/about-us/about-us-header.webp')] bg-cover bg-right overflow-hidden">
//         <div
//           className="
//         container h-full
//         ml-[15px] w-[calc(100%-15px)] mr-0
//         xl:ml-[280px] xl:w-[calc(100%-280px)]
//         md:ml-[100px] md:w-[calc(100%-100px)]
//         sm:mx-5 sm:w-[calc(100%-40px)]
//         xs:mx-4 xs:w-[calc(100%-32px)]"
//         >
//           <div className="absolute inset-0 opacity-70"></div>
//           <div className="absolute inset-0 opacity-50"></div>
//           <div className="container mx-auto h-full flex flex-col justify-center">
//             <h3 className="text-white text-[300] font-medium mb-2">About US</h3>
//             <h1 className="text-white max-w-2xl">
//               HIGHLY ACCOMPLISHED STRATEGISTS, DESIGNERS, ARCHITECTS, AND
//               ENGINEERS.
//             </h1>
//           </div>
//         </div>
//       </section>

//       {/* Introduction Section */}
//       <div
//         className="
//         container
//         ml-[15px] w-[calc(100%-15px)] mr-0
//         xl:ml-[280px] xl:w-[calc(100%-280px)]
//         md:ml-[100px] md:w-[calc(100%-100px)]
//         sm:mx-5 sm:w-[calc(100%-40px)]
//         xs:mx-4 xs:w-[calc(100%-32px)]"
//       >
//         <section className="py-16 bg-white">
//           <div className="container mx-auto">
//             <h2 className="text-[#000000] text-[20px] sm:text-[26px] py-6 max-w-4xl">
//               We have been helping customers, across industries, ranging from
//               real estate to financial services to healthcare, achieve greater
//               agility through transformed and automated customer experiences.
//             </h2>

//             <div className="flex flex-col mt-0 sm:mt-6 sm:flex-row sm:gap-[8rem] gap-[4rem]">
//               <div className="flex flex-col max-w-[532px]">
//                 <h2 className="text-[#000000] mb-6">Who we are?</h2>
//                 <div className="w-full overflow-hidden mb-6">
//                   <div className="transition-transform duration-300 hover:scale-110 w-full h-full">
//                     <Image
//                       src="/images/about-us/who-we-are.webp"
//                       alt="Leadership Team"
//                       width={0}
//                       height={0}
//                       sizes="100vw"
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                       }}
//                       priority
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <p className="text-[#000000] mt-6">
//                     We are an IT consulting company in the USA and a leading
//                     property management solution provider. Our journey began
//                     with a simple yet profound vision to revolutionize business
//                     operations and empower organizations with the transformative
//                     potential of technology. Our dynamic engineers, analysts,
//                     and architects continue to guide you in your unique digital
//                     transformation. We are bound by our unwavering commitment to
//                     excellence and shared passion for technology.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-col max-w-[545px] mt-[0px] md:mt-[200px]">
//                 <h2 className="text-[#000000] mb-6">What we do?</h2>
//                 <div className="w-full overflow-hidden mb-6">
//                   <div className="transition-transform duration-300 hover:scale-110 w-full h-full">
//                     <Image
//                       src="/images/about-us/what-we-do.webp"
//                       alt="Leadership Team"
//                       width={0}
//                       height={0}
//                       sizes="100vw"
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                       }}
//                       priority
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <p className="text-[#000000] mt-6">
//                     We specialize in various areas, including Enterprise
//                     Platform Solutions, AI, Data Analytics, Automation, Quality
//                     Engineering, Integration, and Business Process Outsourcing.
//                     Our mission is to fuel your organization's growth with
//                     innovative technology solutions. As a Certified Salesforce
//                     Consulting Partner, we offer comprehensive Salesforce
//                     services, including our in-house product RealForce, designed
//                     to revolutionize property management. Whether it's
//                     strategizing, integrating, or providing ongoing support,
//                     we're with you every step of the way in your journey.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Mission & Vision Section */}
//       <div
//         className="
//         container 
//         ml-[15px] w-[calc(100%-15px)] mr-0
//         xl:ml-[280px] xl:w-[calc(100%-280px)]
//         md:ml-[100px] md:w-[calc(100%-100px)]
//         sm:mx-5 sm:w-[calc(100%-40px)]
//         xs:mx-4 xs:w-[calc(100%-32px)]"
//       >
//         <section className="py-16 w-full relative overflow-hidden group">
//           <div className="absolute inset-0">
//             <div className="w-full h-full">
//               <div className="hidden md:block relative w-full h-full">
//                 <Image
//                   src="/images/about-us/vision-mission.webp"
//                   alt="Vision and Mission Background"
//                   fill
//                   sizes="100vw"
//                   priority
//                   className="transition-transform duration-700 ease-out group-hover:scale-110"
//                   style={{
//                     objectFit: "cover",
//                     objectPosition: "center",
//                     zIndex: -1,
//                   }}
//                 />
//               </div>

//               {/* Gradient overlay that's always visible */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/80"></div>
//             </div>
//           </div>
//           <div className="container mx-auto relative z-10">
//             <div className="flex flex-col md:flex-row gap-8 items-center">
//               <div className="w-full md:w-2/5">
//                 <div className="w-full h-64 bg-[url('/images/about-us/vision-mission.webp')] md:bg-none bg-cover bg-left overflow-hidden">
//                   <div className="w-full h-full rounded-lg"></div>
//                 </div>
//               </div>

//               <div className="max-w-2xl md:w-3/5 space-y-6">
//                 <h2 className="text-[#000000] mb-10 text-left">
//                   Our Mission & Vision
//                 </h2>
//                 <p className="text-[#000000]">
//                   Our mission is to help our clients make distinctive, lasting,
//                   and substantial improvements in their performance, and to
//                   build a great firm that attracts, develops, excites, and
//                   retains exceptional people.
//                 </p>

//                 <p className="text-[#000000]">
//                   We believe we will be successful if our clients are
//                   successful.
//                 </p>

//                 <p className="text-[#000000]">
//                   Solving the hardest problems requires the best people. We
//                   believe that the best people will be drawn to the opportunity
//                   to work on the hardest problems. These two parts of our
//                   mission reinforce each other and make us strong and
//                   relentless.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Our Values Section */}
//       <div
//         className="
//         container
//         ml-[15px] w-[calc(100%-15px)] mr-0
//         xl:ml-[280px] xl:w-[calc(100%-280px)]
//         md:ml-[100px] md:w-[calc(100%-100px)]
//         sm:mx-5 sm:w-[calc(100%-40px)]
//         xs:mx-4 xs:w-[calc(100%-32px)]"
//       >
//         <section className="pb-10 xl:py-16 bg-white">
//           <div>
//             <div className="flex flex-col md:flex-row gap-8 mb-16">
//             <h2 className="text-[#000000]">Our Values</h2>

//               <div className="w-full md:w-3/5">
//                 <p className="text-[#000000]">
//                   Our values are not just words on a page, they are the essence
//                   of our culture. They define who we are as an organization and
//                   serve as a driving force behind every action we take.
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//               {/* Value 1 */}
//               <div className="flex flex-col pr-6 max-w-[400px]">
//                 <div className="flex justify-start mb-6">
//                   <div className="w-20 h-20 flex items-center justify-center">
//                     <Image
//                       src="/images/about-us/employee-approach.svg"
//                       alt="Employee and Client-centric approach"
//                       width={100}
//                       height={100}
//                       priority
//                     />
//                   </div>
//                 </div>
//                 <h3 className="text-[#000000] mb-3">
//                   Employee and
//                   <br />
//                   Client-centric approach
//                 </h3>
//                 <p className="text-[#000000]">
//                   We make sure to put our employees and clients first,
//                   prioritize their needs, and exceed their expectations in every
//                   interaction.
//                 </p>
//               </div>

//               {/* Value 2 */}
//               <div className="flex flex-col pr-6 max-w-[400px]">
//                 <div className="flex justify-start mb-6">
//                   <div className="w-20 h-20 flex items-center justify-center">
//                     <Image
//                       src="/images/about-us/intelligent-risk-taking.svg"
//                       alt="Intelligent risk-taking"
//                       width={100}
//                       height={100}
//                       priority
//                     />
//                   </div>
//                 </div>
//                 <h3 className="text-[#000000] mb-3">Intelligent risk-taking</h3>
//                 <p className="text-[#000000]">
//                   We foster innovation by taking intelligent risks, pushing
//                   boundaries, and exploring new horizons to drive continuous
//                   improvements.
//                 </p>
//               </div>

//               {/* Value 3 */}
//               <div className="flex flex-col pr-6 max-w-[400px]">
//                 <div className="flex justify-start mb-6">
//                   <div className="w-20 h-20 flex items-center justify-center">
//                     <Image
//                       src="/images/about-us/doing-the-right-thing.svg"
//                       alt="Doing the right thing"
//                       width={100}
//                       height={100}
//                       priority
//                     />
//                   </div>
//                 </div>
//                 <h3 className="text-[#000000] mb-3">Doing the right thing</h3>
//                 <p className="text-[#000000]">
//                   We uphold the highest standards of integrity and ethical
//                   conduct, consistently doing what's right for our clients,
//                   employees, and community.
//                 </p>
//               </div>

//               {/* Value 4 */}
//               <div className="flex flex-col mt-8 pr-6 max-w-[400px]">
//                 <div className="flex justify-start mb-6">
//                   <div className="w-20 h-20 flex items-center justify-center">
//                     <Image
//                       src="/images/about-us/quality.svg"
//                       alt="Quality in everything we do"
//                       width={100}
//                       height={100}
//                       priority
//                     />
//                   </div>
//                 </div>
//                 <h3 className="text-[#000000] mb-3">
//                   Quality in everything we do
//                 </h3>
//                 <p className="text-[#000000]">
//                   We are committed to providing excellent quality in everything
//                   we do.
//                 </p>
//               </div>

//               {/* Value 5 */}
//               <div className="flex flex-col mt-8 pr-6 max-w-[400px]">
//                 <div className="flex justify-start mb-6">
//                   <div className="w-20 h-20 flex items-center justify-center">
//                     <Image
//                       src="/images/about-us/inclusive-and-belonging.svg"
//                       alt="Inclusive and belonging"
//                       width={100}
//                       height={100}
//                       priority
//                     />
//                   </div>
//                 </div>
//                 <h3 className="text-[#000000] mb-3">Inclusive and belonging</h3>
//                 <p className="text-[#000000]">
//                   We cultivate an environment where every employee feels a
//                   profound sense of belonging, making the workplace a positive
//                   and supportive place.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Our Partnerships Section */}
//       <section className="py-16 bg-gray-100">
//         <div
//           className="
//         container
//         ml-[15px] w-[calc(100%-15px)] mr-0
//         xl:ml-[280px] xl:w-[calc(100%-280px)]
//         md:ml-[100px] md:w-[calc(100%-100px)]
//         sm:mx-5 sm:w-[calc(100%-40px)]
//         xs:mx-4 xs:w-[calc(100%-32px)]"
//         >
//           <div className="container mx-auto">
//             <h2 className="text-[#000000] mb-8">Our Partnerships</h2>

//             <p className="text-[#000000] mb-12 max-w-3xl">
//               Rialtes is a trusted partner with leading organizations working
//               toward a shared goal of innovating and revolutionizing businesses
//               with next-gen solutions.
//             </p>

//             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
//               {[
//                 "sap-logo",
//                 "salesforce-logo",
//                 "aws-logo",
//                 "automation-logo",
//                 "adobe-logo",
//                 "azure-logo",
//                 "tableau-logo",
//                 "tricentis-logo",
//                 "powerbi-logo",
//                 "docusign-logo",
//               ].map((logo, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-left mb-6"
//                 >
//                   <div className="h-auto flex items-center justify-left">
//                     <Image
//                       src={`/images/about-us/logo/${logo}.webp`}
//                       alt={logo}
//                       width={210}
//                       height={112}
//                       style={{
//                         maxWidth: "100%",
//                         height: "auto",
//                         objectFit: "contain",
//                       }}
//                       priority
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex justify-start">
//               <button className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-3 px-8 transition duration-300 relative overflow-hidden">
//                 <span className="inline-flex items-center group-hover:-translate-x-1 transition-transform duration-300">
//                   <Link href='/about-us/global-alliences'>  View All Our Partners</Link>
//                   <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ml-1">
//                     &gt;
//                   </span>
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Leadership Team Section */}
//       {/* <div
//         className="
//   container
//   ml-[15px] w-[calc(100%-15px)] mr-0
//   xl:ml-[280px] xl:w-[calc(100%-280px)]
//   md:ml-[100px] md:w-[calc(100%-100px)]
//   sm:mx-5 sm:w-[calc(100%-40px)]
//   xs:mx-4 xs:w-[calc(100%-32px)]"
//       >
//         <section className="py-16 bg-white">
//           <div className="container mx-auto">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12 order-2 md:order-1">
//                 <h2 className="text-[#000000] mb-6 order-1">
//                   Meet our
//                   <br />
//                   Leadership team
//                 </h2>
//                 <p className="text-[#000000] mb-8 order-2">
//                   Get to know the people behind Rialtes who lead the way towards
//                   excellence and innovation.
//                 </p>
//                 <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4">
//                   <Link href='/about-us/leadership'>  Know Our Leaders</Link>
//                 </button>
//               </div>

//               <div className="w-full md:w-1/2 overflow-hidden order-1 md:order-2 mb-6 md:mb-0">
//                 <div className="transition-transform duration-300 hover:scale-110 w-full h-full order-3">
//                   <Image
//                     src="/images/about-us/leadership-thumb.webp"
//                     alt="Leadership Team"
//                     width={0}
//                     height={0}
//                     sizes="100vw"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                     priority
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div> */}

//       {/* Contact Form Section */}
//       <div
//         className="
//         container
//         ml-[15px] w-[calc(100%-15px)] mr-0
//         xl:ml-[280px] xl:w-[calc(100%-280px)]
//         md:ml-[100px] md:w-[calc(100%-100px)]
//         sm:mx-5 sm:w-[calc(100%-40px)]
//         xs:mx-4 xs:w-[calc(100%-32px)]
//         text-black pb-16 xl:py-20"
//       >
//         <ContactForm />
//       </div>
//     </div>
//   );
// }
// pages/about.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/contactform";
import Seo from "../components/Seo";
import LearnMore from "../components/learnMore";


const latestServices = [
    {
        id: 1,
        title: "Our Values",
        description: "Driven by our clients’ success, we deliver trusted partnerships, tailored solutions, and measurable impact.",
        url:'/about-us/our-values'
    },
    {
        id: 2,
        title: "Who we are",
        description: "Focused on driving Technology adoption today to create transformative impact and competitive advantage for the future",
        url:'/about-us/impact-and-social-responsibility'
    },
    {
        id: 3,
        title: "Our mission",
        description: "Committed to giving back, we empower communities through education, innovation, and impactful social initiatives",
        url:'/about-us/impact-and-social-responsibility'
    },

];
const ServicesCard = ({ services }) => (
    <div className="border border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF] flex flex-col min-h-[400px]">
    <div className="flex-grow">
        <h3 className="mb-[15px] md:mb-[25px] font-normal line-clamp-4 text-[#1F3F69] xl:text-[35px] text-[30px]">
            {services.title}
        </h3>
        <p className="md:mb-[15px] mb-0 xl:text-[27px] text-[22px]">{services.description}</p>
    </div>
    <div className="mt-auto">
        <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 text-[20px]">
            <Link href={services.url}>Learn More</Link>
        </button>
    </div>
</div>

);



const Services = () => {
    return (
        <div className="container mx-auto text-black">
            <h2 className="text-black xl:mt-20 mt-10 xl:text-[60px] text-[40px]">Our Culture & Values </h2>
            <h3 className="mt-5 font-bold xl:text-[45px] text-[35px]">Chasing perfection is in our DNA.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6 mt-10">
                {latestServices.map((services) => (
                    <ServicesCard key={services.id} services={services} />
                ))}


            </div>
        </div>
    );
};


export default function About() {
    return (
        <div className="min-h-screen">
            <Seo
                title="About Us | Rialtes - AI-Powered Business Transformation"
                description="Rialtes delivers intelligent automation and digital transformation solutions, empowering businesses and putting customers at the center of success."
                keywords="home, website, welcome"
            />

            <section className="relative">


                <div
                    className="
    ml-[15px] w-[calc(100%-15px)] mr-0
    xl:ml-[280px] xl:w-[calc(100%-280px)] xl:h-[650px]
    md:ml-[100px] md:w-[calc(100%-100px)]
    sm:mx-5 sm:w-[calc(100%-40px)]
    xs:mx-4 xs:w-[calc(100%-32px)]
     overflow-hidden"
                >
                    {/* Image Element */}
                    <Image
                        src="/images/about-us/header-logo.webp"
                        alt="About Us"
                        className="w-full h-[400px] xl:h-[650px] object-cover xl:object-right"
                        width={0}
                        height={0}
                    />

                    {/* Content Box */}
                    <div className="flex bg-[#01335B] xl:flex-row flex-col  xl:gap-20 gap-5 xl:p-10 p-5 text-white absolute xl:w-[63%] left-[9%] xl:left-[280px] w-[82%] bottom-[-140px] xl:bottom-[-150px] height-[300px] justify-center items-center">
                        <div className="text-left">
                            <p className="font-bold xl:text-[24px] text-[18px]">About Us</p>
                            <div className="xl:text-[40px] text-[25px] mt-3">Crafting the true purpose of technology in everyday lives.</div>
                        </div>
                        <div className="xl:text-[30px] text-[18px]">Imagining how the most complex task can be made simple with AI, data, and technology.</div>
                    </div>
                </div>

            </section>




            {/* Mission & Vision Section */}
            <div
                className="mt-40
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)] 
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <h1 className="py-10 xl:text-[60px] xl:w-[76%]">World largest brands work with Rialtes to transform their processes and automate their businesses for increased ROI.</h1>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 xl:mr-[211px]">
                    <div className="relative overflow-hidden">
                        <Image
                            src="/images/about-us/Group 408.png"
                            alt="Employee and Client-centric approach"
                            width={100}
                            height={100}
                            priority
                            className="w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute top-0 text-white pt-10 pl-10 pr-10 xl:text-[30px] text-[22px]">Launching comprehensive patient centric solution for the largest European life sciences company in United States</div>
                    </div>
                    <div className="relative overflow-hidden">
                        <Image
                            src="/images/about-us/AdobeStock_536546365_Editorial_Use_Only.png"
                            alt="Employee and Client-centric approach"
                            width={100}
                            height={100}
                            priority
                            className="w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute top-0 text-white pt-10 pl-10 pr-10 xl:text-[30px] text-[22px]">Empowering Singapore’s largest employer to run their business every day</div>

                    </div>
                    <div className="relative overflow-hidden">
                        <Image
                            src="/images/about-us/AdobeStock_1060702148.png"
                            alt="Employee and Client-centric approach"
                            width={100}
                            height={100}
                            priority
                            className="w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute top-0 text-white pt-10 pl-10 pr-10 xl:text-[30px] text-[22px]">Accelerating India’s Largest automotive manufacturer to expand in North America</div>

                    </div>


                </div>
            </div>


            <section className="xl:py-16 py-10 bg-gray-100 mt-20">
                <div
                    className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="container mx-auto">
                        <h3 className="text-[#000000] mb-8 font-bold w-full xl:text-[45px] text-[25px]">Over the last several years, we have built our relationships with our clients, our employees,

                            and our partners on core fundamental principles</h3>


                        <div className="flex flex-col xl:flex-row mb-8 mt-16  xl:gap-64 gap-10">
                            <div className="grid justify-center items-center">
                                <Image
                                    src="/images/about-us/trust.svg"
                                    alt="Employee and Client-centric approach"
                                    width={100}
                                    height={100}
                                    priority
                                    className="xl:w-[160px] xl:h-[160px] w-[120px] h-[120px]"
                                />
                                <p className="mt-5 text-center xl:text-[35px] text-[22px]">Trust</p>
                            </div>
                            <div className="grid justify-center items-center">
                                <Image
                                    src="/images/about-us/transperancy.svg"
                                    alt="Employee and Client-centric approach"
                                    width={100}
                                    height={100}
                                    priority
                                    className="xl:w-[192px] xl:h-[192px] w-[150px] h-[150px]"
                                />
                                <p className="mt-5 text-center xl:text-[35px] text-[22px]">Transparency</p>
                            </div>
                            <div className="grid justify-center items-center">
                                <Image
                                    src="/images/about-us/commitment.svg"
                                    alt="Employee and Client-centric approach"
                                    width={100}
                                    height={100}
                                    priority
                                    className="xl:w-[192px] xl:h-[192px] w-[150px] h-[150px]"
                                />
                                <p className="mt-5 text-center xl:text-[35px] text-[22px]">Commitment</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="xl:py-16 pt-10">
                <div
                    className="
        container
        ml-[15px] w-[calc(100%-15px)]
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <div className="container mx-auto">
                        <h2 className="text-[#000000] xl:text-[60px] text-[45px]">What we do</h2>
                        <p className="mt-5 xl:w-[80%] xl:text-[22px] text-[18px]">At the intersection of technology and business, we deliver solutions that fuel innovation, agility, and growth. From process automation to enterprise transformation, we partner with organizations to create lasting impact.</p>

                        <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:gap-4 gap-20 mb-8 mt-20 grid-cols-1">
                            <div>
                                <div className="relative border-b border-l border-r border-gray-300 p-12 h-[389px]">
                                    <div className="absolute -top-px left-0 w-10 border-t-2 border-gray-300 bg-white"></div>
                                    <div className="absolute -top-px right-0 xl:w-[12rem] w-[8rem] border-t-2 border-gray-300 bg-white"></div>

                                    <h2 className="xl:text-[40px] text-[30px] font-bold text-[#0C8AD4] mt-[-110px]">
                                        Simplify <br /> <span className="font-normal">Businesses.</span>
                                    </h2>
                                    <p className="mt-3 xl:text-[30px] text-[25px] font-medium text-gray-900">
                                        Drive Efficiency, <br /> Accelerate Growth.
                                    </p>
                                    <p className="mt-4 text-gray-600 text-[22px]">
                                        Transforming complexity into clarity with intelligent, scalable solutions.
                                    </p>
                                    <div className="absolute bottom-[3rem] w-12 border-t border-gray-400"></div>
                                </div>
                            </div>
                            <div>
                                <div className="relative border-b border-l border-r border-gray-300 p-12 h-[389px]">
                                    <div className="absolute -top-px left-0 w-10 border-t-2 border-gray-300 bg-white"></div>
                                    <div className="absolute -top-px right-0 xl:w-[12rem] w-[8rem] border-t-2 border-gray-300 bg-white"></div>

                                    <h2 className="xl:text-[40px] text-[30px] font-bold text-[#0C8AD4] mt-[-110px]">
                                        Enable <br /> <span className="font-normal">Solutions.</span>
                                    </h2>
                                    <p className="mt-3 xl:text-[30px] text-[25px] font-medium text-gray-900">
                                        Drive Real Outcomes.
                                    </p>
                                    <p className="mt-4 text-gray-600 text-[22px]">
                                        Helping enterprises innovate, transform, and lead with confidence.
                                    </p>
                                    <div className="absolute bottom-[3rem] w-12 border-t border-gray-400"></div>
                                </div>
                            </div>
                            <div>
                                <div className="relative border-b border-l border-r border-gray-300 p-12 h-[389px]">
                                    <div className="absolute -top-px left-0 w-10 border-t-2 border-gray-300 bg-white"></div>
                                    <div className="absolute -top-px right-0 xl:w-[12rem] w-[8rem] border-t-2 border-gray-300 bg-white"></div>

                                    <h2 className="xl:text-[40px] text-[30px] font-bold text-[#0C8AD4] mt-[-110px]">
                                        Empower  <br /> <span className="font-normal">Customers.</span>
                                    </h2>
                                    <p className="mt-3 xl:text-[30px] text-[25px] font-medium text-gray-900">
                                        Drive Business Forward.
                                    </p>
                                    <p className="mt-4 text-gray-600 text-[22px]">
                                        Delivering intelligent solutions that put customers at the center of your business.
                                    </p>
                                    <div className="absolute bottom-[3rem] w-12 border-t border-gray-400"></div>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </section>

 <section className="relative h-[500px] xl:h-[765px] overflow-hidden mt-5 xl:mt-0 xl:block hidden">
        <Image
          src="/images/about-us/welcome to the future (1).webp"
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
  <div className="relative p-10 w-[720px] h-[620px]">
    <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>

    <div className="relative bg-opacity-80 text-white z-10 p-4 rounded-lg">
      <h3 className="xl:text-[45px] font-bold">Welcome to the Future of Intelligent Business.</h3>
      <p className='mt-5 xl:text-[28px]'>Whether you’re exploring AI adoption, modernizing operations, or reimagining customer experiences, our team is ready to guide you with tailored, results-driven strategies.</p>
      <p className="mt-5 xl:text-[28px]">Connect with us to accelerate your transformation journey.</p>

    </div>
  </div>
</div>

         
        </div>
      </section>
            <div
                className="mt-[3rem] xl:mt-0 md:mt-[15rem]
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


            {/* SuccessFactors

            {/* Contact Form Section */}
            <div
                className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]
        text-black  xl:pt-16 pb-20"
            >
                <ContactForm />
            </div>
        </div>
    );
}
