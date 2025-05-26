"use client";
import Seo from "@/app/components/Seo";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { HeroSection } from "@/app/components/herosection";
const latestCaseStudy = [
  {
    id: 1,
    image: "/images/news/new-12-may.webp",
    industry: "News",
    date: "12 May 2025",
    url: "/insights/news/rialtes-joins-elite-group-as-an-official-salesforce-reseller-partner",
    title: "Rialtes Joins Elite Group as an Official Salesforce Reseller Partner",
  },
  {
    id: 2,
    image: "/images/news/news2.webp",
    industry: "News",
    date: "18 April 2025",
    url: "/insights/news/rialtes-becomes-certified-databricks-partner-to-deliver-next-gen-ai-and-data-services-across-sap-and-salesforce-ecosystems",
    title: "Rialtes Becomes Certified Databricks Partner to Deliver Next-Gen AI and Data Services Across SAP and Salesforce Ecosystems",
  },


  {
    id: 3,
    image: "/images/news/generic thumb.webp",
    industry: "News",
    date: "4 April 2025",
    url: "/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh",
    title: "Rialtes Technologies Opens New Sales Office in Baddi, Himachal Pradesh.",
  },

  // {
  //   id: 3,
  //   image: "/images/news/AdobeStock_1336683433.webp",
  //   industry: "News",
  //   date: "4 April 2025",
  //   url: "/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh",
  //   title: "Rialtes Technologies Opens New Sales Office in Baddi, Himachal Pradesh to Tap into Unexplored",
  // },
  // {
  //   id: 4,
  //   image: "/images/news/AdobeStock_371788649.webp",
  //   industry: "News",
  //   date: "4 April 2025",
  //   url: "/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh",
  //   title: "Rialtes Technologies Opens New Sales Office in Baddi, Himachal Pradesh to Tap into Unexplored",
  // },
  // {
  //   id: 5,
  //   image: "/images/news/dummy 1.webp",
  //   industry: "News",
  //   date: "4 April 2025",
  //   url: "/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh",
  //   title: "Rialtes Technologies Opens New Sales Office in Baddi, Himachal Pradesh to Tap into Unexplored",
  // },
  // {
  //   id: 6,
  //   image: "/images/news/AdobeStock_961147936.webp",
  //   industry: "News",
  //   date: "4 April 2025",
  //   url: "/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh",
  //   title: "Rialtes Technologies Opens New Sales Office in Baddi, Himachal Pradesh to Tap into Unexplored",
  // },

  // Add more case study objects as needed
];

const CaseStudyCard = ({ casestudy }) => (
  <div className="border border-[#707070] w-full h-full flex flex-col group">
    <div className="relative overflow-hidden">
      <Link href={casestudy.url}>
        <Image
          className="w-full transition-transform duration-300 hover:scale-105"
          src={casestudy.image}
          alt={casestudy.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          priority
        />
      </Link>
    </div>
    <div className="p-6 flex-grow flex flex-col justify-between transition duration-300 ease-in-out group-hover:bg-[#F0F0F0]">
      <div>
        <div className="pb-2 md:pb-4">
          <span className="text-[#0092E0]">{casestudy.industry}</span>
          <span className="text-[#ACACAC]"> | </span>
          {casestudy.date}
        </div>
        <Link href={casestudy.url}>
          <h4 className="mb-2 md:mb-4 md:font-semibold xl:text-[30px] text-[20px] line-clamp-4">{casestudy.title}</h4>
        </Link>
      </div>
      <Link href={casestudy.url}>
        <p className="text-[#0092E0] font-bold mt-5 xl:text-[20px] text-[18px]">Read More</p>
      </Link>
    </div>

  </div>
);
const CaseStudy = () => {
  const [visibleCaseStudy, setVisibleCaseStudy] = useState(6);
  const loadMoreCaseStudy = () => setVisibleCaseStudy((prev) => prev + 6);
  const isLoadMoreVisible = visibleCaseStudy < latestCaseStudy.length;

  return (
    <div className="text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
        {latestCaseStudy.slice(0, visibleCaseStudy).map((casestudy) => (
          <CaseStudyCard key={casestudy.id} casestudy={casestudy} />
        ))}
      </div>

      {isLoadMoreVisible && (
        <div className="w-full mx-auto text-center md:py-20 py-10">
          <button
            type="button"
            className="border border-[#707070] font-medium w-[160px] h-[50px] relative group hover:bg-[#EDEDED]"
            onClick={loadMoreCaseStudy}
          >
            <span className="group-hover:pr-4 transition-all duration-300">Load more</span>
            <svg
              className="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};


export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="News"
        canonical="https://www.rialtes.com/insights/news/"
      />

      <HeroSection title="News" subtitle="" mobimg="/images/news/news header.webp" deskimg="/images/news/news header.webp" extraImg="" txtColor={"black"} />

      <section
        className="custom-container">
        <div className="md:py-10 py-6 bg-white">
          <p className="text-[#000000] py-6 max-w-4xl  xl:text-[20px] text-[18px]">Explore how we’re shaping the future of businesses worldwide. Your go-to source for the latest updates, achievements, and innovations from Rialtes. Stay informed with our latest news, press releases, and industry insights as we continue to push boundaries in process consulting, AI-driven enterprise solutions, and digital transformation.</p>
        </div>
      </section>

      {/* Latest news */}
      {/* <div
        className="
          ml-[15px] w-[calc(100%-15px)] mr-0
          xl:ml-[280px] xl:w-[calc(100%-280px)]
          md:ml-[100px] md:w-[calc(100%-100px)]
          sm:mx-5 sm:w-[calc(100%-40px)]
          xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <FeaturedCarousel />
 
      </div> */}

      {/* Latest news Section */}
      <div
        className="custom-container">
        <section className="xl:pb-32  pt-10  pb-16  bg-white xl:pr-[142px]">
          <CaseStudy />
        </section>
      </div>
    </div>
  );
}