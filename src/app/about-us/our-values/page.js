"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import Seo from "@/app/components/Seo";
import { HeroSection } from "@/app/components/herosection";
import Script from "next/script";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Our Values - Empowering People with Trust & Inclusion | Rialtes",
    "url": "https://www.rialtes.com/about-us/our-values/",
    "description": "At Rialtes, we celebrate people. From women in tech to LGBTQ+ and veterans, we drive impact through equal opportunity and unwavering commitment.",
    "headline": "Our Value System",
    "mainEntity": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com"
    },
    "about": [
        {
            "@type": "Thing",
            "name": "Equal Opportunity",
            "description": "We foster a culture of fairness, inclusion, and growth where everyone has an equal chance to thrive."
        },
        {
            "@type": "Thing",
            "name": "LGBTQ+ Inclusion",
            "description": "Creating a safe and empowering workplace where LGBTQ+ individuals are valued and supported."
        },
        {
            "@type": "Thing",
            "name": "Veteran Support",
            "description": "Honoring the contributions of veterans by supporting their growth and inclusion in our workforce."
        },
        {
            "@type": "Thing",
            "name": "Women in Tech",
            "description": "Driving impact through mentorship, leadership development, and equal opportunities for women in technology."
        },
        {
            "@type": "Thing",
            "name": "Trust & Transparency",
            "description": "Building lasting relationships through open communication, integrity, and accountability."
        },
        {
            "@type": "Thing",
            "name": "Growth Mindset",
            "description": "Encouraging continuous learning, innovation, and personal development across the organization."
        }
    ]
}
const growLatestServices = [
    {
        id: 1,
        image: "/images/culture/Equal Opportunity.webp",
        title: "Equal Opportunity",
        description1: "We are proud to be an equal opportunity employer, committed to fostering a diverse, inclusive, and respectful workplace.",
        description2: "Our culture is built on fairness, inclusion, and meritocracy, empowering every team member to thrive. At Rialtes, diversity drives innovation and excellence."
    },

    {
        id: 2,
        image: "/images/culture/Welcome LGBTQ+.webp",
        title: "Welcome LGBTQ+",
        description1: "We are committed to creating a safe, inclusive, and supportive environment for LGBTQ+ individuals. We actively promote diversity, inclusion, and allyship, fostering a culture where everyone feels valued and empowered to be their authentic selves.",
        description2: "At Rialtes, we stand for equality, acceptance, and belonging."
    },

    {
        id: 3,
        image: "/images/culture/Honor Veterans.webp",
        title: "Honor Veterans",
        description1: "Our inclusive workplace ensures that veterans feel welcomed, valued, and empowered to thrive in their professional journeys.",
        description2: "   At Rialtes, we recognize the sacrifices of our veterans and are dedicated to helping them build successful futures."
    },
    {
        id: 4,
        image: "/images/culture/Women in Tech.webp",
        title: "Women in Tech",
        description1: "Through mentorship, equal opportunities, and leadership development, we ensure that women in tech thrive and drive innovation.",
        description2: "At Rialtes, we believe diversity in technology leads to stronger, smarter solutions for the future."
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
        <div className="flex flex-col pt-8">
            <h3 className="md:mb-[15px] font-medium h3-bold text-[22px]  xl:text-[35px] line-clamp-2 min-h-[60px]">{services.title}</h3>
        </div>
        <p className='mb-[15px] xl:text-[22px] text-[16px] pr-10 xl:pr-0'>{services.description1}</p>
        <p className='mb-[15px] xl:text-[22px] text-[16px] pr-[38px] xl:pr-0'>{services.description2}</p>

    </div>
);

const GrowServices = () => {
    return (
        <div className="container  mx-auto text-black">
            <h2 className="pb-16 text-black xl:text-[60px] text-[26px]">Employee affinity groups</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:gap-32 gap-10 pb-10">
                {growLatestServices.map((services) => (
                    <GrowServicesCard key={services.id} services={services} />
                ))}
            </div>
        </div>
    );
};


export default function Page() {

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Our Values - Empowering People with Trust & Inclusion | Rialtes"
                description="At Rialtes, we celebrate people. From women in tech to LGBTQ+ and veterans, we drive impact through equal opportunity and unwavering commitment."
                keywords="home, website, welcome"
                canonical={"https://www.rialtes.com/about-us/our-values/"}
            />
           
               <Script
        id="schema-our"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
{/* 
    <HeroSection title="Building a growth mindset. Each day." subtitle="Culture and Values" mobimg="/images/culture/AdobeStock_1016285553.webp" deskimg="/images/culture/culture header.webp" extraImg="" txtColor="#01335B" /> */}
         <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
                      {/* Desktop Image */}
                      <div className="hidden md:block">
                          <Image
                              src="/images/culture/culture header.webp"
                              alt="desktop banner"
                              fill
                              style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                              priority
                              className="transform transition-transform duration-500 group-hover:scale-110"
                          />
                      </div>
      
                      {/* Mobile Image */}
                      <div className="block md:hidden">
                          <Image
                              src="/images/culture/AdobeStock_1016285553.webp"
                              alt="mobile banner"
                              fill
                              priority
                          />
                      </div>
      
                      <div className="relative h-full custom-container flex items-center">
                          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                              <div className="col-span-12 xl:col-span-7 lg:col-span-9 text-white">
                                  <h3 className="text-[18px] 4xl:text-[24px] 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[18px] font-bold text-[#01335B]">
                                     Culture and Values
                                  </h3>
                                  <h2 className="text-[24px]  md:text-[36px] lg:text-[50px] xl:text-[50px] 2xl:text-[56px]  4xl:text-[60px] leading-tight mt-[11.5px] md:mt-[28.5px] text-[#01335B] "  >
                                     Building a growth<br/> mindset. Each day.
                                  </h2>
      
                                 
      
                              </div>
      
                              <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                              </div>
                          </div>
                      </div>
                  </section>      
















            <section className="xl:py-16 py-10">
                <div className="custom-container">
                    <div className=" mx-auto">
                        <h1 className="xl:text-[60px] text-[26px]">Our Value System.</h1>
                        <p className="mt-3 xl:text-[35px] text-[20px] pr-10 xl:pr-0">Every day, every one of us work with our core values.</p>


                        <div className="flex flex-col xl:flex-row mb-8 mt-16  xl:gap-52 gap-10">
                            <div className="grid justify-center items-center">
                                <Image
                                    src="/images/about-us/trust.svg"
                                    alt="Employee and Client-centric approach"
                                    width={100}
                                    height={100}
                                    priority
                                    className="xl:w-[132px] w-[119px]  m-auto xl:m-0"
                                />
                                <p className="mt-5 text-center xl:text-[35px] text-[26px]">Trust</p>
                            </div>
                            <div className="grid justify-center items-center">
                                <Image
                                    src="/images/about-us/transperancy.svg"
                                    alt="Employee and Client-centric approach"
                                    width={100}
                                    height={100}
                                    priority
                                    className="xl:w-[150px] w-[119px] m-auto xl:m-0"
                                />
                                <p className="mt-5 text-center xl:text-[35px] text-[26px]">Transparency</p>
                            </div>
                            <div className="grid justify-center items-center">
                                <Image
                                    src="/images/about-us/commitment.svg"
                                    alt="Employee and Client-centric approach"
                                    width={100}
                                    height={100}
                                    priority
                                    className="xl:w-[150px] w-[124px] m-auto xl:m-0"
                                />
                                <p className="mt-5 text-center xl:text-[35px] text-[26px]">Commitment</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className="relative h-[800px]  xl:h-[650px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/culture/commitments.webp"
                        alt="GROW with SAP"
                        fill
                        priority
                        className="xl:object-[35%_20%] object-[80%_20%] object-cover"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/culture/AdobeStock_458959285.webp"
                        alt="GROW with SAP"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/culture/quote mark.svg"
                        alt="GROW with SAP"
                        fill
                        priority
                        className="object-cover !w-[140px] !h-[60px] pl-[35px]"
                    />
                </div>
                <div
                    className="custom-container">
                    <div className="container mx-auto h-full flex flex-col justify-center">
                        <div className="flex flex-col">
                            <h2 className="xl:text-white text-black max-w-2xl xl:text-[55px] pr-[3rem] xl:pr-0 leading-tight text-[30px] font-medium xl:font-normal mt-[-20rem] xl:mt-0">
                                Business run on Trust, Grows on Transparency <br />ONLY if we deliver on <br />our commitments
                            </h2>
                        </div>

                    </div>
                </div>
            </section>


            {/* We Help You Grow and Thrive */}
            <div  className="xl:mt-10 mt-16 max-sm:px-0 custom-container"
            >
                <section className="xl:py-16 bg-white">
                    <GrowServices />
                </section>
            </div>





            {/* Contact Form */}
            < div
                className="custom-container text-black pb-10">
                <ContactForm title={'Ready to take the next step? Let’s kick off your journey to operational excellence'} className={"max-w-4xl text-[26px] xl:text-[60px]"} />
            </div >
        </div >
    );
}