"use client";
// pages/case-study-detail.js
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';
import Seo from "@/app/components/Seo";


const slides = [
    {
        id: 3,
        image: "/images/case-studies/case study 1_thumb_n.webp",
        category: "Healthcare",
        industry: "Real Estate",
        date: "17 Nov 2024",
        title: "Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP",
        description: "A global medical technology company that develops and manufactures innovative products",
        url: 'insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap'
    },
    {
        id: 4,
        image: "/images/case-studies/case-study-4_thumb.webp",
        category: "Real Estate",
        industry: "Healthcare",
        date: "14 Oct 2024",
        title: "Omnichannel case management with Salesforce Service Cloud",
        description: "A leading provider of high-performance analog semiconductors for wireless and wired connectivity.",
        url: 'insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud'
    },
    {
        id: 6,
        image: "/images/case-studies/case-study-6_thumb.webp",
        category: "Healthcare",
        industry: "Manufacturing",
        date: "4 Sept 2024",
        title: "Yardi Managed Services",
        description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
        url: 'insights/case-studies/yardi-managed-services'
    },
    {
        id: 7,
        image: "/images/case-studies/case study 3_thumb_n.webp",
        category: "SAP",
        industry: "Retail & e-Commerce",
        date: "25 Oct 2024",
        title: "Streamlined DevOps using Copado and Salesforce",
        description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
        url: "insights/case-studies/streamlined-devops-using-copado-and-salesforce"
    },
    {
        id: 8,
        image: "/images/case-studies/case-study-2_thumb_n.webp",
        category: "Salesforce",
        industry: "Hi-Tech",
        date: "25 Oct 2024",
        title: "RealForce Banking Module - ACH",
        description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
        url: 'insights/case-studies/realForce-banking-module-ach'
    },
    // Add more blog objects as needed
];


export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title=" Salesforce Experience Cloud Case Study: Mobile Warranty Portal | Rialtes"
                description=" Discover how a leading roofing brand used Salesforce Experience Cloud to deliver a mobile-friendly warranty claim experience customers love."
                canonical="https://www.rialtes.com/insights/case-studies/empowering-a-leading-roofing-manufacturer-with-self-service-order-prioritization-using-sap-fiori/"
            />
              
            <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
                <Image
                    // src="/images/case-studies/sales cloud case study.webp "
                     src="/images/case-studies/case study 2_n 1.webp "
                    alt="Streamlined DevOps using Copado and Salesforce"
                    fill
                    style={{ objectFit: "cover", objectPosition: "90% 20%" }}
                    priority
                />
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
                    <div className="container mx-auto">
                        <h1 className="text-[#000000] py-6 max-w-4xl">Empowering a Leading Roofing Manufacturer with Self-Service Order Prioritization Using SAP Fiori </h1>
                    </div>
                    <div className="py-4"></div>
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-between text-black  max-w-4xl xl:w-1/2">
                            <div className='pb-6'>
                                <span className='text-[#0092E0]'>Manufacturing</span> <span className='text-[#ACACAC]'> | </span>22 May 2025
                            </div>
                            <div className="flex flex-col">
                                <span>8 min read</span>
                            </div>
                        </div>
                        <div className="pt-4"></div>
                        <div className="flex flex-row gap-6 ">
                            <div className="max-w-[40px]">
                                <a href="https://www.linkedin.com/company/rialtes-technologies-llc/">
                                    <Image
                                        src="/images/case-studies/linkedin.svg"
                                        alt="LinkedIn"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        priority
                                    />
                                </a>
                            </div>
                            {/* <div className="max-w-[40px]">
                                <a href="https://www.facebook.com/sharer/sharer.php?u=/case-study-3">
                                    <Image
                                        src="/images/case-studies/facebook.svg"
                                        alt="Facebook"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        priority
                                    />
                                </a>
                            </div>  */}
                            <div className="max-w-[40px]">
                                <a href="https://x.com/Rialtestech">
                                    <Image
                                        src="/images/case-studies/twitter.svg"
                                        alt="Twitter"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        priority
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="py-6"></div>
                    <div className="container mx-auto">
                        <div className="max-w-4xl md:w-4/2">


                             <h2  className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Client Profile</h2>
                            <p className="text-black">Our client is a renowned manufacturer of high-quality roofing products with a legacy built on innovation, quality, and sustainability. With a diverse portfolio that includes asphalt shingles, roofing accessories, underlayment, and waterproofing solutions, they serve both residential and commercial markets. Backed by cutting-edge manufacturing facilities and a robust distribution network, the company is a trusted partner for builders, contractors, and homeowners nationwide. </p>


                            <div className="py-6"></div>
                          <h2  className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Challenges</h2>
                         
                            <p className="text-black pb-12  ">Despite the client's significant technological investments in manufacturing, their order management process relied heavily on manual intervention. Customers who wanted to prioritize certain sales orders had to call the sales team and share their list of urgent orders. This required the sales team to manually adjust loading dates for approximately 150 orders daily—an inefficient and error-prone process that consumed valuable time and resources.
 
</p>

                      <h2  className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Solutions</h2>

                            <p className="text-black ">Rialtes partnered with the client to streamline and digitize their order prioritization process. We developed a custom SAP Fiori app that enabled customers to independently access their open orders and select which orders needed prioritization. Key features of the solution contained: </p>

                            <div className="pl-6">
                              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 ">
                   <p  className="text-black pb-4"> <li>A user-friendly interface for customers to view and select open orders</li></p>
                   <p  className="text-black pb-4"> <li>Planning logic integrated with manufacturing capacity to ensure realistic timelines</li></p>
                    <p  className="text-black pb-4"><li>An intelligent allocation system based on predefined customer allotments</li></p>
                   <p  className="text-black pb-12"> <li>Self-service functionality to allow customers to prioritize orders without sales team intervention</li></p>
                
              </ul>
              </div>

                           
                            <h2  className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Benefits</h2>

                            <p className="text-black pb-6 mt-2">The implementation of the Fiori app significantly optimized the client's sales order management.</p>
<div className="pl-6">
                             <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 pb-4">
                   <p  className="text-black pb-4"><li><span className="font-bold">Improved Efficiency: </span>The sales team no longer needs to manually adjust 150+ orders daily, freeing up valuable time.</li></p>
                  <p  className="text-black pb-4">  <li><span className="font-bold">Customer Empowerment: </span>Customers now have direct control over their order prioritization, enhancing their experience and satisfaction.</li></p>
                   <p  className="text-black pb-4"> <li><span className="font-bold">Optimized Planning: </span>Allocation and production planning now align more effectively with real-time customer demand and capacity constraints.</li></p>
                  <p  className="text-black ">  <li><span className="font-bold">Reduced Errors: </span>Manual data entry has been eliminated, lowering the risk of human error and improving overall accuracy.</li></p>
              </ul>
              </div>

                          
                        </div>
                    </div>

                </div>
            </section>

            {/* Latest Blogs */}
            <div
                className="py-20
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <RelatedTopicsCarousel slides={slides} />

            </div>
        </div>
    );
}