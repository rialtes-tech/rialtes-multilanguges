"use client";
// pages/case-study-detail.js
import Head from "next/head";
import Image from "next/image";
import RelatedTopicsCarousel from '../components/relatedTopicsCarousel';

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
  {
    id: 4,
    image: "/images/case-studies/case-study-4_thumb.webp",
    category: "Real Estate",
    industry: "Healthcare",
    date: "14 Oct 2024",
    title: "Omnichannel case management with Salesforce Service Cloud",
    description: "A leading provider of high-performance analog semiconductors for wireless and wired connectivity.",
  },
  {
    id: 5,
    image: "/images/case-studies/case-study-5_thumb.webp",
    category: "Public Sector",
    industry: "Finance",
    date: "27 Sept 2024",
    title: "A public housing in US",
    description: "A Public housing authority responsible for managing affordable housing programs across multiple counties in their zone.",
  },
  /* {
    id: 6,
    image: "/images/case-studies/case-study-6_thumb.webp",
    category: "Healthcare",
    industry: "Manufacturing",
    date: "4 Sept 2024",
    title: "Yardi Managed Services",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
  }, */
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
        <title>Yardi Managed Services | Company Name</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/case-study-6.webp "
          alt="Yardi Managed Services"
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
            <h1 className="text-[#000000] py-6 max-w-4xl">Yardi Managed Services</h1>
          </div>
          <div className="py-4"></div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black max-w-4xl xl:w-1/2">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Real Estate</span> <span className='text-[#ACACAC]'> | </span>25 Oct 2024
              </div>
              <div className="flex flex-col">
                <span>8 min read</span>
              </div>
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-row gap-6 ">
              <div className="max-w-[40px]">
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=/case-study-5&title=Yardi Managed Services&summary=Summary%20of%20the%20case%20study&source=LinkedIn">
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
                <a href="https://www.facebook.com/sharer/sharer.php?u=/case-study-5">
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
                <a href="https://twitter.com/intent/tweet?url=/case-study-5&text=Yardi Managed Services">
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
              <p className="text-black">A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties. The firm offers acquisitions, investing, development, operational excellence, and property repositioning services. Their goal is to create thriving communities for residents while maximizing returns for their investment partners. </p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Problem or Challenge </h3>


              <p className="text-black pb-6">The real estate company faced several challenges in managing their Yardi Voyager 7, MRI, Voyager, RealPage products used for property management. </p>

              <p className="text-black pb-6">The team relied heavily on single individuals for each skillset. If someone was unavailable, tasks would stall.</p>

              <p className="text-black pb-6">The specific software used required specialized skills that were difficult to find in the local market. </p>

              <p className="text-black">Project details lacked central organization, limiting efficient workflow and knowledge transfer. </p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Solutions </h3>

              <p className="text-black pb-6">Rialtes, a Yardi managed service provider, addressed these challenges through a strategic approach: </p>

              <p className="text-black pb-6">Rialtes assessed the customer’s existing team, identifying skill gaps and needed expertise. </p>

              <p className="text-black pb-6">Rialtes augmented the customer’s team with our own staff, providing immediate support and expertise. </p>

              <p className="text-black pb-6">Technical aspects and programming were initially handled by Rialtes offshore team, gradually transitioning to a collaborative implementation of new processes and features. </p>

              <p className="text-black">After a successful year of collaboration, Rialtes took full responsibility for Yardi, RealPage, affordable housing, residential services, and commercial IT support, offering comprehensive end-to-end managed services.</p>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Benefits</h3>

              <p className="text-black pb-6">24/7 support: A follow-the-sun approach offered continuous support across different time zones in the US. </p>

              <p className="text-black pb-6">Reduced risk of people dependency: By having multiple Yardi resources within the Rialtes team, the risk of a single point of failure was eliminated. If a team member was unavailable, others could seamlessly cover their tasks. </p>

              <p className="text-black pb-6">Increased value: Rialtes created additional value by implementing both primary and secondary personnel for critical roles, such as infrastructure services, Yardi, MRI, and RealPage support. This redundancy ensured uninterrupted service and mitigated potential downtime. </p>

              <p className="text-black">Cost savings: Outsourcing to Rialtes offshore team provided a cost-effective solution compared to maintaining an in-house team in California.</p>

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