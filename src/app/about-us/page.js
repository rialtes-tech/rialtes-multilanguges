import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/contactform";
import Seo from "../components/Seo";
import Script from "next/script";
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
            <h3 className="mb-[15px] md:mb-[25px] font-normal line-clamp-4 text-[#1F3F69] 4xl:text-[35px] xl:text-[30px] text-[26px] leading-tight">
                {services.title}
            </h3>
            <p className="md:mb-[15px] mb-0 4xl:text-[27px] xl:text-[22px] text-[20px]">{services.description}</p>
        </div>
        <div className="mt-auto xl:mt-7 max-sm:mt-3">
            <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 text-[20px]">
                <Link href={services.url}>Learn More</Link>
            </button>
        </div>
    </div>

);
const Services = () => {
    return (
        <div className="container mx-auto text-black">
            <h2 className="text-black xl:mt-20 mt-10 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">Our Culture & Values </h2>
            <h3 className="mt-5 font-bold 4xl:text-[45px] 2xl:text-[36px] xl:text-[32px] text-[23px]">Chasing perfection is in our DNA.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6 mt-10">
                {latestServices.map((services) => (
                    <ServicesCard key={services.id} services={services} />
                ))}
            </div>
        </div>
    );
};
const brandStories = [
    {
        image: "/images/about-us/lifescience.webp",
        alt: "Life Sciences Company",
        description:
            "Launching comprehensive patient centric solution for the largest European life sciences company in United States",
    },
    {
        image: "/images/about-us/singapore.webp",
        alt: "Singapore’s Largest Employer",
        description:
            "Empowering Singapore’s largest employer to run their business every day",
    },
    {
        image: "/images/about-us/automotive.webp",
        alt: "India’s Largest Automotive Manufacturer",
        description:
            "Accelerating India’s Largest automotive manufacturer to expand in North America",
    },
];
const corePrinciples = [
    {
        image: "/images/about-us/trust.svg",
        label: "Trust",
        alt: "Trust Principle Icon",
        width: { base: 135, xl: 177 },
        height: { base: 135, xl: 177 },
    },
    {
        image: "/images/about-us/transperancy.svg",
        label: "Transparency",
        alt: "Transparency Principle Icon",
        width: { base: 150, xl: 192 },
        height: { base: 150, xl: 192 },
    },
    {
        image: "/images/about-us/commitment.svg",
        label: "Commitment",
        alt: "Commitment Principle Icon",
        width: { base: 150, xl: 192 },
        height: { base: 150, xl: 192 },
    },
];
const missionCards = [
    {
        headingBold: "Simplify",
        headingLight: "Businesses.",
        subheading: "Drive Efficiency, Accelerate Growth.",
        description:
            "Transforming complexity into clarity with intelligent, scalable solutions.",
    },
    {
        headingBold: "Enable",
        headingLight: "Solutions.",
        subheading: "Drive Real Outcomes.",
        description:
            "Helping enterprises innovate, transform, and lead with confidence.",
    },
    {
        headingBold: "Empower",
        headingLight: "Customers.",
        subheading: "Drive Business Forward.",
        description:
            "Delivering intelligent solutions that put customers at the center of your business.",
    },
];

export default function About() {
    return (
        <div className="min-h-screen">
            <Seo
                title="About Us | Rialtes - AI-Powered Business Transformation"
                description="Rialtes delivers intelligent automation and digital transformation solutions, empowering businesses and putting customers at the center of success."
                keywords="home, website, welcome"
                canonical={"https://www.rialtes.com/about-us/"}
            />
            <Script
                id="schema-about"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <section className="relative">
                <div className="custom-container lg:!pr-0 overflow-hidden max-md:px-0 h-[350px] md:h-[500px]  4xl:h-[650px] ">
                    {/* Image Element */}
                    <Image
                        src="/images/about-us/header-logo.webp"
                        alt="About Us"
                        className="w-full h-[400px] xl:h-[650px] object-cover xl:object-right"
                        width={0}
                        height={0}
                    />
                    {/* Content Box */}
                    <div className="flex bg-[#01335B] xl:flex-row flex-col  xl:gap-7 gap-5 xl:p-14 p-7 text-white absolute max-md:left-[9%] xl:w-[63%]  w-[82%] bottom-[-140px] xl:bottom-[-150px] xl:h-[270px] 4xl:h-[340px] justify-center xl:items-center">
                        <div className="text-left xl:w-[60%]">
                            <p className="font-bold 4xl:text-[24px] xl:text-[18px] text-[16px] leading-tight">About Us</p>
                            <div className="4xl:text-[50px] xl:text-[31px] 2xl:text-[36px] text-[22px] leading-tight mt-3">Crafting the true purpose of technology in everyday lives.</div>
                        </div>
                        <div className="4xl:text-[33px] xl:text-[22px] text-[18px] leading-tight xl:w-[50%]">Imagining how the most complex task can be made simple with AI, data, and technology.</div>
                    </div>
                </div>
            </section>
            {/* Mission & Vision Section */}
            <div className="mt-40 custom-container">
                <h1 className="py-14 leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]  xl:w-[76%] 4xl:w-[100%]">
                    World largest brands work with Rialtes to transform their processes and automate their businesses for increased ROI.
                </h1>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 xl:mr-[211px]">
                    {brandStories.map((story, index) => (
                        <div key={index} className="relative overflow-hidden">
                            <Image
                                src={story.image}
                                alt={story.alt}
                                width={100}
                                height={100}
                                priority
                                className="w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute top-0 text-white pt-10 pl-10 pr-10 4xl:text-[25px] xl:text-[22px] text-[20px]">
                                {story.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* over section */}
            <section className="xl:py-14 py-10 bg-gray-100 mt-20">
                <div className="custom-container">
                    <div className="container mx-auto">
                        <h3 className="text-[#000000] mb-8 font-semibold w-full 4xl:text-[43px] 2xl:text-[36px] xl:text-[32px] text-[23px]">
                            Over the last several years, we have built our relationships with our clients, our employees, and our partners on core fundamental principles
                        </h3>
                        <div className="flex flex-col lg:flex-row mb-8 mt-16 lg:gap-40 gap-10">
                            {corePrinciples.map((item, index) => (
                                <div key={index} className="grid">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        width={100}
                                        height={100}
                                        priority
                                        className={`w-[${item.width.base}px] h-[${item.height.base}px] xl:w-[${item.width.xl}px] xl:h-[${item.height.xl}px] max-md:m-auto`}
                                    />
                                    <p className="mt-5 lg:text-center max-md:text-center 4xl:text-[35px] xl:text-[30px] text-[22px]">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* what we do section*/}
            <section className="xl:py-16 pt-10">
                <div className="custom-container max-md:px-0">
                    <div className="container mx-auto">
                        <h2 className="text-[#000000] leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">What we do</h2>
                        <p className="my-10 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">At the intersection of technology and business, we deliver solutions that fuel innovation, agility, and growth. From process automation to enterprise transformation, we partner with organizations to create lasting impact.</p>
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:gap-4 gap-20 mb-20 mt-20 grid-cols-1">
                            {missionCards.map((card, index) => (
                                <div key={index}>
                                    <div className="relative border-b border-l border-r border-gray-300 p-12 h-[310px] md:h-[350px]  xl:mt-[40px]">
                                        <div className="absolute -top-px left-0 w-10 border-t-2 border-gray-300 bg-white"></div>
                                        <div className="absolute -top-px right-0 xl:w-[12rem] w-[8rem] border-t-2 border-gray-300 bg-white"></div>
                                        <h2 className="xl:text-[40px] text-[30px] font-bold text-[#0C8AD4] mt-[-110px] max-lg:mt-[-97px]">
                                            {card.headingBold} <br />
                                            <span className="font-normal">{card.headingLight}</span>
                                        </h2>
                                        <p className="mt-3 4xl:text-[30px] xl:text-[22px] text-[22px] leading-tight font-medium text-gray-900">
                                            {card.subheading}
                                        </p>
                                        <p className="mt-4 text-gray-600 text-[16px] xl:text-[18px] 4xl:text-[22px] leading-tight">
                                            {card.description}
                                        </p>
                                        <div className="absolute bottom-[3rem] w-12 border-t border-gray-400"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
            {/* welcome section */}
            <section className="relative sm:h-[750px] md:h-[500px] xl:h-[765px] overflow-hidden mt-5 xl:mt-0">
                <Image
                    src="/images/about-us/welcome-to.webp"
                    alt="welcome image"
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />
                <div className=" h-full relative xl:ml-[280px] xl:mr-[156px] md:ml-[290px]">
                    <div className="flex justify-end">
                        <div className="relative p-10 4xl:w-[720px] 4xl:h-[620px] xl:w-[535px] xl:h-[500px] max-md:h-[750px]">
                            <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
                            <div className="relative bg-opacity-80 text-white z-10  rounded-lg">
                                <h3 className="4xl:text-[45px] xl:text-[38px] text-[34px] leading-tight font-bold">Welcome to the Future of Intelligent Business.</h3>
                                <p className='mt-5 4xl:text-[32px] xl:text-[24px] text-[22px] leading-tight'>Whether you’re exploring AI adoption, modernizing operations, or reimagining customer experiences, our team is ready to guide you with tailored, results-driven strategies.</p>
                                <p className="mt-5 4xl:text-[32px] xl:text-[24px] text-[22px] leading-tight">Connect with us to accelerate your transformation journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-[3rem] xl:mt-0 custom-container max-md:px-0">
                <section className="pb-16 bg-white">
                    <Services />
                </section>
            </div>
            {/* Contact Form Section */}
            <div className="custom-container text-black xl:pt-16 pb-20">
                <ContactForm className="xl:w-[85%] w-full leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]" />
            </div>
        </div>
    );
}