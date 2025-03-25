"use client";
// pages/case-study-detail.js
import Head from "next/head";
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';

const slides = [
  {
    id: 1,
    image: "/images/case-studies/case-study-1_thumb.webp",
    category: "Manufacturing",
    industry: "Retail & e-Commerce",
    date: "8 Jan 2025",
    title: "Streamlined DevOps using Copado and Salesforce",
    description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
  },
  {
    id: 2,
    image: "/images/case-studies/case-study-2_thumb.webp",
    category: "Real Estate",
    industry: "Hi-tech",
    date: "22 Dec 2024",
    title: "RealForce Banking Module - ACH",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
  },
  {
    id: 3,
    image: "/images/case-studies/case-study-3_thumb.webp",
    category: "Healthcare",
    industry: "Real Estate",
    date: "17 Nov 2024",
    title: "Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP",
    description: "A global medical technology company that develops and manufactures innovative products",
  },
  /* {
    id: 4,
    image: "/images/case-studies/case-study-4_thumb.webp",
    category: "Real Estate",
    industry: "Healthcare",
    date: "14 Oct 2024",
    title: "Omnichannel case management with Salesforce Service Cloud",
    description: "A leading provider of high-performance analog semiconductors for wireless and wired connectivity.",
  }, */
  {
    id: 5,
    image: "/images/case-studies/case-study-5_thumb.webp",
    category: "Public Sector",
    industry: "Finance",
    date: "27 Sept 2024",
    title: "A public housing in US",
    description: "A Public housing authority responsible for managing affordable housing programs across multiple counties in their zone.",
  },
  {
    id: 6,
    image: "/images/case-studies/case-study-6_thumb.webp",
    category: "Healthcare",
    industry: "Manufacturing",
    date: "4 Sept 2024",
    title: "Yardi Managed Services",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
  },
  {
    id: 7,
    image: "/images/case-studies/case-study-7_thumb.webp",
    category: "SAP",
    industry: "Retail & e-Commerce",
    date: "25 Oct 2024",
    title: "Streamlined DevOps using Copado and Salesforce",
    description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
  },
  {
    id: 8,
    image: "/images/case-studies/case-study-8_thumb.webp",
    category: "Salesforce",
    industry: "Hi-tech",
    date: "25 Oct 2024",
    title: "RealForce Banking Module - ACH",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
  },
  // Add more blog objects as needed
];


export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Omnichannel case management with Salesforce Service Cloud | Company Name</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/case-study-4.webp "
          alt="Omnichannel case management with Salesforce Service Cloud"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
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
            <h1 className="text-[#000000] py-6 max-w-4xl">Omnichannel case management with Salesforce Service Cloud</h1>
          </div>
          <div className="py-4"></div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black  max-w-4xl xl:w-1/2">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Manufacturing (Semi-Conductor)</span> <span className='text-[#ACACAC]'> | </span>25 Oct 2024
              </div>
              <div className="flex flex-col">
                <span>8 min read</span>
              </div>
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-row gap-6 ">
              <div className="max-w-[40px]">
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=/case-study-7&title=Omnichannel case management with Salesforce Service Cloud&summary=Summary%20of%20the%20case%20study&source=LinkedIn">
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
              <div className="max-w-[40px]">
                <a href="https://www.facebook.com/sharer/sharer.php?u=/case-study-7">
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
              </div>
              <div className="max-w-[40px]">
                <a href="https://twitter.com/intent/tweet?url=/case-study-7&text=Omnichannel case management with Salesforce Service Cloud">
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
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Client Profile</h3>
              <p className="text-black">A leading provider of high-performance analog semiconductors for wireless and wired connectivity. Their core products include amplifiers, filters, switches, and integrated modules that enable efficient wireless transmission. Beyond being a major supplier for smartphones, their innovative technology is also used in wireless routers, medical devices, automobiles, and a growing list of applications. </p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Problem or Challenge </h3>

              <p className="text-black">The semiconductor company faced challenges in managing customer service across its global operations. They relied on a legacy platform that lacked features for effective customer interaction and segregated data made it difficult to view the full historical insights about the customers. </p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Solutions </h3>

              <p className="text-black pb-6">Rialtes implemented Salesforce Service Cloud and Salesforce Experience Cloud to streamline operations and enhance customer experience. </p>

              <p className="text-black pb-6">We created a unified platform for all customer interactions, including distributors and original equipment manufacturers (OEMs). </p>

              <p className="text-black pb-6">We built a self-service portal for distributors and OEMs to submit cases, track progress, and access knowledge articles. </p>

              <p className="text-black pb-6">We enabled real-time communication with the customer and the semiconductor company’s support team. </p>

              <p className="text-black pb-6">We consolidated the knowledge depository from legacy systems into a single source of truth for support information. </p>

              <p className="text-black pb-6">We implemented Einstein AI to suggest solutions and relevant knowledge articles to customers based on their inquiries. </p>

              <p className="text-black pb-6">We configured automatic case assignment to appropriate teams based on factors like location and expertise. </p>

              <p className="text-black pb-6">We improved communication and knowledge sharing between support teams across continents. </p>

              <p className="text-black pb-6">We provided the ability to release important updates and support information to specific customer groups. </p>

              <p className="text-black">We migrated historical case data to allow for trend analysis and identification of recurring issues.</p>

            </div>
          </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Benefits</h3>

              <p className="text-black pb-6">Single point of contact which allowed streamlined customer support across all channels (internal, external). </p>

              <p className="text-black pb-6">Improved customer experience through better communication, self-service capabilities, and faster issue resolution. </p>

              <p className="text-black pb-6">360° customer view with capabilities to conduct customer behavior analysis and targeted upselling opportunities. </p>

              <p className="text-black pb-6">Centralized knowledge repository reduces support workload and improves collaboration. </p>

              <p className="text-black pb-6">Potential for future integration with other Salesforce clouds (CPQ, Marketing Cloud) to further enhance sales and marketing efforts. </p>

              <p className="text-black">Historical case data analysis helps identify trends, create proactive knowledge articles, and offer targeted solutions.</p>


            </div>
          </div>
          <div className="py-6"></div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div
        className="
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