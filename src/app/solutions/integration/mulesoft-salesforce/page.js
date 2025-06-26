import React from "react";
import Banner from "./components/Banner";
import ServiceSection from "./components/ServiceSection";
import TransformationSection from "./components/TransformationSection";
import Serve from "./components/Serve";
import Outcomes from "./components/Outcomes";
import FeaturedCarousel from "../../../components/servicesFeaturedCarousel";
import InsightsCarousel from "../../../components/servicesInsightsCarousel";
import ExploreMoreCarousel from "../../../components/servicesExploreMoreCarousel";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/components/Seo";

const ContentSection = () => (
  <div className="lg:py-28 py-14 custom-container">
    <div className=" flex items-start lg:gap-[100px] gap-[20px] max-md:flex-col">
      <h2 className="w-full md:max-w-[50%] 2xl:w-[40%] 4xl:w-[50%] max-w-full leading-tight pb-6 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
        Leading Platform to Unlock an Integrated View of Your Business
      </h2>
      <p className="w-full md:max-w-[532px] max-w-full lg:text-xl text-base 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight">
        An integration solution should help businesses establish connectivity
        and address integration challenges. MuleSoft offers a future-proof,
        low-friction, unified connectivity platform for this purpose. Integrate
        systems, applications, and data—on-premises and in the cloud for
        real-time visibility and agility to make decisions and stay ahead of
        disruption.
      </p>
    </div>
  </div>
);

const page = () => (
  <>
    <Seo
      title="MuleSoft Integration Consulting Solutions and Services | Rialtes"
      description="Our MuleSoft integration consulting solutions make digital services flow effortlessly by unleashing the full power of connected Salesforce systems."
      keywords="home, website, welcome"
      canonical="https://www.rialtes.com/solutions/integration/mulesoft-salesforce/"
    />
    <Banner />
    <ContentSection />
    <ServiceSection />
    <TransformationSection />
    <Serve />
    <Outcomes />
    <div
      className="
        bg-[#F5F5F5]"
    >
      <div className="custom-container py-10">
        <FeaturedCarousel />
      </div>
    </div>
    <div className=" py-[69px]">
      {/* <div
        className="
  container
  ml-[15px] w-[calc(100%-15px)] mr-0
  xl:ml-[280px] xl:w-[calc(100%-280px)]
  md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  "
      >
        <InsightsCarousel />
      </div> */}
    </div>
    <div
      className="py-[30px]
        bg-[#808080]"
    >
      <div>
        <div
          className="custom-container"
        >
          <ExploreMoreCarousel />
        </div>
      </div>
    </div>
    <div className="!py-[90px] custom-container">
      <ContactForm className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[88%] 4xl:w-[100%]" title="Take the next step to operational excellence with MuleSoft Integration Services" />
    </div>
  </>
);

export default page;
