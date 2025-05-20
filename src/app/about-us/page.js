
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/contactform";
import Seo from "../components/Seo";
import Head from 'next/head';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://www.rialtes.com/about-us/",
    "name": "Empowering Enterprise Transformation Journey | About Rialtes",
    "description": "Your enterprise transformation journey starts here—Rialtes simplifies change, enables AI adoption, and empowers growth with trusted partnership and boosted ROI.",
    "mainEntityOfPage": "https://www.rialtes.com/about-us/",
    "headline": "World’s largest brands work with Rialtes to transform their processes and automate their businesses for increased ROI.",
    "about": {
        "@type": "Thing",
        "name": "Enterprise Transformation by Rialtes",
        "description": "At the intersection of technology and business, Rialtes delivers solutions that fuel innovation, agility, and growth. From process automation to enterprise transformation, we partner with organizations to create lasting impact. Our approach includes:\n\n1. Simplify Businesses – We help businesses simplify their processes using intelligent, scalable solutions that enhance efficiency and drive productivity.\n\n2. Enable Solutions – Rialtes empowers enterprises with solutions that enable innovation, accelerate transformation, and create measurable growth.\n\n3. Empower Customers – We deliver customer-centric solutions that drive business forward, ensuring you build stronger relationships with your clients.\n\n4. Our Culture & Values – Trust, transparency, and commitment are at the core of Rialtes' culture. We strive for excellence and believe in nurturing relationships with our partners, clients, and employees."
    },
    "mainEntity": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com/",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg/",
        "sameAs": [
            "https://www.linkedin.com/company/rialtes-technologies-llc",
            "https://www.youtube.com/@rialtes"
        ]
    }
}
const latestServices = [
    {
        id: 1,
        title: "Our Values",
        description: "Driven by our clients’ success, we deliver trusted partnerships, tailored solutions, and measurable impact.",
        url: '/about-us/our-values'
    },
    {
        id: 2,
        title: "Who we are",
        description: "Focused on driving Technology adoption today to create transformative impact and competitive advantage for the future",
        url: '/about-us/impact-and-social-responsibility'
    },
    {
        id: 3,
        title: "Our mission",
        description: "Committed to giving back, we empower communities through education, innovation, and impactful social initiatives",
        url: '/about-us/impact-and-social-responsibility'
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
                title="Empowering Enterprise Transformation Journey | About Rialtes"
                description="Your enterprise transformation journey starts here—Rialtes simplifies change, enables AI adoption, and empowers growth with trusted partnership and boosted ROI."
                keywords="home, website, welcome"
                canonical={"https://www.rialtes.com/about-us/"}
            />
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>

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
                            src="/images/about-us/lifescience.webp"
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
                            src="/images/about-us/singapore.webp"
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
                            src="/images/about-us/automotive.webp"
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
                    src="/images/about-us/welcome-to.webp"
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
