
"use client";
import Image from "next/image";
import Seo from "../../../components/Seo";
import ContactForm from "../../../components/contactform";
import CarouselComponent from "../components/useCarousel";
import InsightsCarousel from '../../app/components/servicesInsightsCarousel';
import FeaturedCarousel from '../components/servicesFeaturedCarousel';
import Link from "next/link";
export default function SalesForceConsulting() {

  
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


    return (
        <div>
            <Seo
                title="Salesforce Consulting Services Company | Rialtes"
                description="Partner with Rialtes, a top Salesforce consulting services company, delivering AI-powered Salesforce solutions customized to accelerate your business growth."
                canonical='https://www.rialtes.com/services/salesforce-consulting'

            />

            <div className='relative group overflow-hidden'>
                <Image
                    src="/images/salesforce-consulting-services/banner.webp"
                    alt="Salesforce Consulting Team"
                    className="transform transition-transform duration-500 group-hover:scale-110 xl:h-full h-[250px] md:h-[350px] lg:h-[450px]"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        objectFit: "cover",
                    }}
                    priority
                />
                <div className="absolute px-6 xl:pl-[280px] lg:pr-0 md:px-[100px]  top-[5%] lg:text-start lg:top-[35%] md:top-[30%] text-black">
                    <h4 className="font-bold">Salesforce</h4>
                    <h2 className="xl:w-[60%] w-full">Transform how you engage with your clients</h2>

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
            <div className=" grid lg:grid-cols-10 gap-16 px-6 xl:px-[280px] md:px-[100px] lg:pr-0 lg:mt-16 mt-5">
                <div className="lg:col-span-6">
                    <h1>Retaining Your Clients Or Aiming For Repeats: Make It Viable With Salesforce Consulting</h1>
                </div>
                <div className="lg:col-span-4">
                    <p>
                        Rialtes is a trusted partner in the Salesforce community. We know how to move beyond Salesforce basics, customizing and extending its capabilities with our Salesforce solutions. We have a resource-based dynamic system to set up cloud architecture seamlessly and automate your business processes.
                    </p>
                </div>
            </div>
            {/* section crm consulting */}
            <section className="lg:mt-16 mt-10 px-6 xl:pl-[280px] xl:pr-[418px] md:pl-[100px] lg:pr-0">
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
                                <h3 className="mt-5 text-[22px] text-[#1F3F69] font-bold">{sales.title}</h3>
                                <p className="mt-5">{sales.description}</p>
                            </div>
                        )
                    })}
                </div>
                <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6">
                    <Link href=''>Learn More</Link>
                </button>
            </section>
            {/* Salesforce product */}

            <section className="lg:mt-20 mt-10 px-6 xl:pl-[280px] xl:pr-[418px] md:pl-[100px] lg:pr-0">
                <h2>Salesforce Products</h2>
                <p className="lg:mt-3 mb-8">Well, Salesforce consulting is just one part of an array of solutions</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-5 gap-5">
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
                                    <h3 className="mt-5 text-[22px] font-bold text-[#1F3F69]">{product.title}</h3>
                                    <p className="mt-5">{product.description}</p>
                                    <ul className="mt-5">
                                        {product?.productsDetails?.map((details, index) => {
                                            return (
                                                <li
                                                key={index}
                                                className="font-medium flex mt-3 items-start before:content-['•'] before:text-[#0092E0] before:text-4xl before:font-bold before:mr-2  before:leading-[0.5]"
                                            >
                                                    {details}
                                                </li>



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
            <section className="lg:mt-16 mt-5 px-6 xl:pl-[280px] xl:pr-[120px] md:pl-[150px] lg:pr-0">
                <h2 className="font-normal xl:w-[70%] w-full">Understanding and targeting the customers correctly for your business</h2>
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
                    <h3 className="mt-10 mb-10 font-medium">Action is what matters and not just words</h3>
                    <div className="grid lg:grid-cols-10 grid-cols-1">
                        <div className=" col-span-1 lg:col-span-6 flex lg:flex-row flex-col gap-20" >
                            <div>
                                <div className="text-[#0092E0] font-bold text-5xl">1%</div>
                                <div className="text-[#0092E0] text-xl font-bold">growth</div>
                                <p className="mt-5">revenue for our customer</p>
                            </div>
                            <div>
                                <div className="text-[#0092E0] font-bold text-5xl">35%</div>
                                <div className="text-[#0092E0] text-xl font-bold">growth</div>
                                <p className="mt-5">customer service level satisfaction</p>
                            </div>
                            <div>
                                <div className="text-[#0092E0] font-bold text-5xl">45%</div>
                                <div className="text-[#0092E0] text-xl font-bold">growth</div>
                                <p className="mt-5">decision-making efficiency</p>
                            </div>
                        </div>
                        <div className="col-span-1 lg:col-span-4"></div>

                    </div>
                </div>
            </section>

            {/* different industries different mindset */}


            <section className="lg:mt-32 mt-10 pb-20">

                <div
                    className="xl:ml-[280px]  md:ml-[100px] px-6 lg:px-0 md:px-0"
                >
                    <h2 className="text-black mb-6">Different industries, different mindsets</h2>

                    <CarouselComponent />
                </div>
            </section>
            <section className="bg-[#F5F5F5] lg:mt-32 mt-10 pb-20 pt-20">
                <div
                    className="
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)] "
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
                <div className='bg-[#134874] hidden xl:block absolute p-10 text-white lg:w-[23%] lg:right-[15rem] lg:top-[-3rem] top-[392px]'>
                    <h2>Agentforce</h2>
                    <p className='mt-5'>Salesforce Agentforce is a robust platform that enables organizations to create, customize, and deploy autonomous AI agents across various business functions, including sales, marketing, customer service, and e-commerce.</p>
                    <p className='mt-8'>Learn More <span> &#8594;</span></p>
                </div>
            </section>
            <section className="pb-20 xl:ml-[280px]  md:ml-[100px] px-6 lg:px-0 md:px-0 pt-10 mt-20">
                <ContactForm className='xl:w-[70%] w-full' title={'Take the next step to operational excellence with Salesforce Consulting.'} />
            </section>
            {/* contact section */}

        </div>
    )
}