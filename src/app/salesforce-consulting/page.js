
"use client";
import Image from "next/image";
import Seo from "../Component/Seo";
import ContactForm from "../Component/contactForm";
import CarouselComponent from "../Component/useCarousel";
import InsightsCarousel from '../../app/components/servicesInsightsCarousel';
import FeaturedCarousel from '../components/servicesFeaturedCarousel';
import Link from "next/link";
export default function SalesForceConsulting() {
    const handleChange = (index) => {
        setCurrentIndex(index);
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    const salesForce = [
        {
            id: 1,
            imageUrl: '/images/salesforce-consulting-services/light.svg',
            title: 'Lightning Services',
            description: 'Dedicated app developers are at your disposal for the development of an app closely knit for enhanced customer experience.'
        },
        {
            id: 2,
            imageUrl: '/images/salesforce-consulting-services/inte.svg',
            title: 'Integration Services',
            description: 'Salesforce Integration services like never before to help you deliver a connected experience for seamless data flow – on the go'
        },
        {
            id: 3,
            imageUrl: '/images/salesforce-consulting-services/imple.svg',
            title: 'Implementation Services',
            description: 'We know how to move beyond Salesforce basics, customizing and extending its capabilities with our implementation solutions.'
        },
        {
            id: 4,
            imageUrl: '/images/salesforce-consulting-services/mig.svg',
            title: 'Migration Services',
            description: 'With a user-friendly UI, interact with your customers with sleek visuals, unleash next-gen analytics, and improve your user engagement.'
        },
        {
            id: 5,
            imageUrl: '/images/salesforce-consulting-services/light.svg',
            title: 'Contact Support',
            description: 'End-to-end monitoring and user support to identify and resolve challenges faced in the implementation cycle.'
        },

    ]

    const salesForceProduct = [
        {
            id: 1,
            imageUrl: '/images/salesforce-consulting-services/manage.webp',
            title: 'Salesforce Managed Services',
            description: 'Managed services provide access to various capabilities, including Salesforce administrators, developers, architects, and consultants.',
            productsDetails: [
                'Salesforce optimization and planning',
                'Ongoing enhancements',
                'Lightning migration',
                'Troubleshoot and maintenance'
            ],
            knowMore: '/salesforce-consulting/salesforce-manage'

        },
        {
            id: 2,
            imageUrl: '/images/salesforce-consulting-services/health.webp',
            title: 'Salesforce Health Cloud',
            description: 'Centralise patient information, provide health workers with a complete view of patient records and deliver more effective treatments.',
            productsDetails: [
                'Get a 360-degree view',
                'Access real-time updates',
                'Enhance patient outcome',
                'Streamline healthcare'
            ],
            knowMore: '/salesforce-consulting/salesforce-manage'

        },
        {
            id: 3,
            imageUrl: '/images/salesforce-consulting-services/agentforce.png',
            title: 'Salesforce Agentforce',
            description: 'Build and customize autonomous AI agents to help your employees and customers 24/7.',
            productsDetails: [
                'Resolve customer inquiries',
                'Handle prospects',
                'Build campaigns',
                'Automate sales process'
            ],
            knowMore: '/salesforce-consulting/salesforce-manage'

        },
        {
            id: 4,
            imageUrl: '/images/salesforce-consulting-services/lap.webp',
            title: 'Salesforce Data Cloud',
            description: 'Turn raw data into insights by unifying and transforming it, unlocking a sea of opportunities for your business.',
            productsDetails: [
                'Customer 360 view',
                'Zero copy integration',
                'Omnichannel engagement'
            ],
            knowMore: '/salesforce-consulting/salesforce-manage'

        },
        {
            id: 5,
            imageUrl: '/images/salesforce-consulting-services/lap.webp',
            title: 'Salesforce Implementation',
            description: 'Follow a structured strategy for implementing Salesforce, right from initial planning to post-implementation support.',
            productsDetails: [
                'Optimized sales and revenue growth',
                'Targeted marketing campaign',
                'Strengthened customer relationships',
                'Works seamlessly with MuleSoft, Tableau, and more'
            ],
            knowMore: '/salesforce-consulting/salesforce-manage'

        },

    ]

    const businessDetails = [
        {
            id: 1,
            title: 'World’s #1 CRM ',
            description: 'A customer-first approach since inception offers options for integrating custom platforms, conversational AI, and modern app development features.'
        },

        {
            id: 2,
            title: 'Breathes Transparency',
            description: 'A magnum opus in the tech industry, Salesforce services enable a seamless unification of Sales, commerce, IT, and marketing, for personalized experiences.'
        },
        {
            id: 3,
            title: 'Instant Benefits',
            description: 'Expect high ROI in no time. From design to implementation, everything’s a breeze with Salesforce’s rapid solution process.'
        },
        {
            id: 4,
            title: 'Scale with flexibility ',
            description: 'Small, mid-sized, or large enterprises, Salesforce caters to it all.'
        },
        {
            id: 5,
            title: 'Industry Pioneers',
            description: 'Over 96% of Salesforce users vouch for its efficiency, exceeding ROI expectations, and offering impeccable customer service'
        },

    ]

    const actionData = [
        {
            id: 1,
            title: 'Healthcare',
            description: 'Our Salesforce healthcare CRM can help medical service providers seamlessly integrate hospital software, harmonize patient data from various channels, MedTech services, and patient engagement solutions to facilitate exceptional patient care.',
        },
        {
            id: 2,
            title: 'Real Estate',
            description: 'Helping realtors, property owners, and brokers strengthen relationships and revenue by helping them navigate through client details, properties, and rental agreements with our property management software.',
        },
        {
            id: 3,
            title: 'Manufacturing',
            description: 'Streamline customer relationships, sales processes, and supply chain management in manufacturing companies with Salesforce. We offer solutions from Salesforce Manufacturing Cloud to SAP Manufacturing Software to help you keep your production lines running smoothly.',
        },
        {
            id: 4,
            title: 'Hi-tech',
            description: 'Our Salesforce consulting services cover the complete range of technologies and methodologies necessary for creating, integrating, and maintaining Salesforce product ecosystems across platforms.',
        }
    ]


    return (
        <div>
            <Seo
                title="Salesforce Consulting Page"
                description="Welcome to the Rialtes On Salesforce page"
                keywords="Salesforce, website, welcome"
            />
            <div className='relative group overflow-hidden'>
                <Image
                    src="/images/salesforce-consulting-services/banner.webp"
                    alt="Salesforce Consulting Team"
                    className="transform transition-transform duration-500 group-hover:scale-110"
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
                <div className="absolute px-6 xl:pl-[280px] lg:pr-0 md:px-[100px]  top-[5%] lg:text-start lg:top-[35%] md:top-[30%] text-black">
                    <h4 className="font-bold">Salesforce</h4>
                    <h2 className="sm:text-xl">Transform how you </h2>
                    <h2>engage with your clients</h2>

                    <Image
                        src="/images/salesforce-consulting-services/salesforce-partner.webp"
                        className="w-[30%] h-full bg-transperent lg:mt-20 lg:m-0 mt-2"
                        alt="Leadership Team"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                    />

                </div>

            </div>
            <div className=" grid lg:grid-cols-10 gap-16 px-6 xl:pl-[280px] md:px-[100px] lg:pr-0 lg:mt-16 mt-5">
                <div className="lg:col-span-6">
                    <h2>Retaining Your Clients Or Aiming For Repeats: Make It Viable With Salesforce Consulting</h2>
                </div>
                <div className="lg:col-span-4">
                    <p>
                        Rialtes is a trusted partner in the Salesforce community. We know how to move beyond Salesforce basics, customizing and extending its capabilities with our Salesforce solutions. We have a resource-based dynamic system to set up cloud architecture seamlessly and automate your business processes.
                    </p>
                </div>
            </div>
            {/* section crm consulting */}
            <section className="lg:mt-16 mt-10 px-6 xl:pl-[280px] md:pl-[100px] lg:pr-0">
                <h2>Our Salesforce CRM Consulting Services</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-10 gap-5 mt-10">
                    {salesForce.map((sales) => {
                        return (
                            <div key={sales.id} className="border-2 p-8 hover:bg-[#A9D6EE] hover:border-transparent transition-all duration-300">
                                <div>
                                    <Image
                                        src={sales.imageUrl}
                                        alt="Salesforce Consulting Team"
                                        className="w-20 h-20"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        priority
                                    />
                                </div>
                                <h4 className="mt-5 text-[#1F3F69]">{sales.title}</h4>
                                <p className="mt-5">{sales.description}</p>
                            </div>
                        )
                    })}

                </div>
            </section>
            {/* Salesforce product */}

            <section className="lg:mt-20 mt-10 px-6 xl:pl-[280px] md:pl-[100px] lg:pr-0">
                <h2>Salesforce Products</h2>
                <p className="lg:mt-8 mb-8">Well, Salesforce consulting is just one part of an array of solutions</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-10 gap-5">
                    {salesForceProduct.map((product) => {
                        return (
                            <div key={product.id} className="border-2">
                                <div className="relative group overflow-hidden m-3">
                                    <Image
                                        src={product.imageUrl}
                                        alt="Salesforce Consulting Team"
                                        className="transform transition-transform duration-500 group-hover:scale-110"
                                        height={325} width={1250}
                                        sizes="100vw"
                                    />
                                </div>
                                <div className="p-8">
                                    <h4 className="mt-5 text-[#1F3F69]">{product.title}</h4>
                                    <p className="mt-5">{product.description}</p>
                                    <ul className="mt-5 list-inside">
                                        {product?.productsDetails?.map((details, index) => {
                                            return (
                                                <li key={index} className="before:mr-3 after:mr-3 mt-2 before:content-['•'] before:text-[#0092E0] before:text-4xl ">{details}</li>
                                            )
                                        })}
                                    </ul>
                                    <h5 className="text-[#0092E0] mt-10 font-bold cursor-pointer">
                                        <Link href={product?.knowMore}>Know More</Link>
                                    </h5>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </section>

            {/* your business */}
            <section className="lg:mt-16 mt-5 px-6 xl:pl-[280px] md:pl-[100px] lg:pr-0">
                <h2 className="font-normal">Understanding and targeting the customers</h2>
                <h2 className="mb-16">correctly for your business</h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:mt-10 gap-20">
                    {businessDetails.map((bussiness) => {
                        return (
                            <div key={bussiness.id}>
                                <h3 className="font-bold">{bussiness.title}</h3>
                                <p className="mt-5">{bussiness.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Action section */}
            <section className="bg-[#EDEDED] lg:mt-20 mt-5 py-20">
                <div className="px-6 xl:pl-[280px] md:pl-[100px] lg:pr-0">
                    <h3 className="mt-10 mb-10 opacity-50">Action is what matters and not just words</h3>
                    <div className="grid lg:grid-cols-10 grid-cols-1">
                        <div className=" col-span-1 lg:col-span-6 flex lg:flex-row flex-col gap-20" >
                            <div>
                                <h1 className="text-[#0092E0] font-bold text-5xl">1%</h1>
                                <h4 className="text-[#0092E0] text-xl">growth</h4>
                                <p className="mt-5">Action is what matters and not just words</p>
                            </div>
                            <div>
                                <h1 className="text-[#0092E0] font-bold text-5xl">35%</h1>
                                <h4 className="text-[#0092E0] text-xl">growth</h4>
                                <p className="mt-5">customer service level satisfaction</p>
                            </div>
                            <div>
                                <h1 className="text-[#0092E0] font-bold text-5xl">45%</h1>
                                <h4 className="text-[#0092E0] text-xl">growth</h4>
                                <p className="mt-5">decision-making efficiency</p>
                            </div>
                        </div>
                        <div className="col-span-1 lg:col-span-4"></div>

                    </div>
                </div>
            </section>

            {/* different industries different mindset */}
            <section>
                <CarouselComponent
                    carouselData={actionData}
                    responsiveConfig={responsive}
                    onChange={handleChange}
                    initialIndex={0}
                    customArrow={true}
                    customDot={true}
                    heading="Different industries, different mindsets"
                    paragraph1="Your business success is influenced by your people. Transform your business with a quantifiable and process-focused system."
                />
            </section>
<section className="bg-[#F5F5F5] lg:mt-32 mt-10 pb-20">
                <div
                    className="xl:ml-[280px]  md:ml-[100px] px-6 lg:px-0 md:px-0"
                >
                    <FeaturedCarousel />
                </div>
            </section>
            <section className='px-6 md:px-0 xl:pl-[280px] md:pl-[100px] lg:pr-0 lg:mt-20 mt-10'>
                            <InsightsCarousel />
                        </section>

            <section className='xl:mt-40 relative'>
                <div className='group overflow-hidden'>
                    <div className='w-full'>
                        <Image quality={100} layout="responsive" loading="lazy" width='100' height='100' className='w-full lg:h-[350px] hidden xl:block transition-transform duration-500 transform group-hover:scale-110' alt='Life Section' src='/images/salesforce-consulting-services/agentforceb.png' />
                    </div>
                </div>
                <div className='bg-[#134874] hidden xl:block absolute p-10 text-white lg:w-[28%] lg:right-[20rem] lg:top-[-3rem] top-[392px]'>
                    <h2>Agentforce</h2>
                    <p className='mt-5'>Salesforce Agentforce is a robust platform that enables organizations to create, customize, and deploy autonomous AI agents across various business functions, including sales, marketing, customer service, and e-commerce.</p>
                    <p className='mt-8'>Learn More <span> &#8594;</span></p>
                </div>
            </section>
<section className="pb-20">
<ContactForm />

</section>
            {/* contact section */}

        </div>
    )
}