"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import Seo from "@/app/components/Seo";
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
        <div className="flex flex-col pt-4">
            <h3 className="md:mb-[15px] font-semibold h3-bold  xl:text-[35px] line-clamp-2 min-h-[60px]">{services.title}</h3>
        </div>
        <p className='mb-[15px] xl:text-[22px] text-[18px]'>{services.description1}</p>
        <p className='mb-[15px] xl:text-[22px] text-[18px]'>{services.description2}</p>

    </div>
);

const GrowServices = () => {
    return (
        <div className="container mx-auto text-black">
            <h2 className="pb-10 text-black xl:text-[60px]">Employee affinity groups</h2>
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
                title="Grow with SAP Solutions: AI-Powered ERP for the Future | Rialtes"
                description="Grow with SAP and harness AI-driven ERP to streamline operations, boost efficiency, and drive business transformation seamlessly. Partner with Rialtes today!"
                keywords="home, website, welcome"
            />

            <section className="relative h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden">
                <Image
                    src="/images/culture/culture header.webp"
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
                            <h3 className="text-[#01335B] xl:text-[24px] text-[18px] font-medium mb-2">Culture Page</h3>
                            <h1 className="text-[#01335B] max-w-2xl xl:text-[60px] text-[40px]">
                                Building a growth mindset. Each day.
                            </h1>
                        </div>

                    </div>
                </div>
            </section>
            <section className="xl:py-16 py-10">
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
                        <h2 className="xl:text-[60px] text-[30px]">Our Value System.</h2>
                        <p className="mt-3 xl:text-[35px] text-[22px]">Every day, every one of us work with our core values.</p>


                        <div className="flex flex-col xl:flex-row mb-8 mt-16  xl:gap-64 gap-10">
                            <div className="grid justify-center items-center">
                                <Image
                                    src="/images/about-us/trust.svg"
                                    alt="Employee and Client-centric approach"
                                    width={100}
                                    height={100}
                                    priority
                                    className="w-[130px]"
                                />
                                <p className="mt-5 text-center xl:text-[35px] text-[20px]">Trust</p>
                            </div>
                            <div className="grid justify-center items-center">
                                <Image
                                    src="/images/about-us/transperancy.svg"
                                    alt="Employee and Client-centric approach"
                                    width={100}
                                    height={100}
                                    priority
                                    className="w-[150px]"
                                />
                                <p className="mt-5 text-center xl:text-[35px] text-[20px]">Transparency</p>
                            </div>
                            <div className="grid justify-center items-center">
                                <Image
                                    src="/images/about-us/commitment.svg"
                                    alt="Employee and Client-centric approach"
                                    width={100}
                                    height={100}
                                    priority
                                    className="w-[150px]"
                                />
                                <p className="mt-5 text-center xl:text-[35px] text-[20px]">Commitment</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className="relative h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden">
                <Image
                    src="/images/culture/commitments.webp"
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
                            <h2 className="text-white max-w-2xl xl:text-[55px]">
                                Business run on Trust, Grows on Transparency ONLY if we deliver on our commitments
                            </h2>
                        </div>

                    </div>
                </div>
            </section>


            {/* We Help You Grow and Thrive */}
            <div
                className="mt-10
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <section className="xl:py-16 bg-white">
                    <GrowServices />
                </section>
            </div>

           


           
            {/* Contact Form */}
            < div
                className="
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black pb-10"
            >
                <ContactForm title={'Take the next step to operational excellence with us.'} className={"max-w-4xl"} />
            </div >
        </div >
    );
}