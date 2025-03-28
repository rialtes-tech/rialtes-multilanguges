import React from "react";
import ServiceCard from "./ServiceCard";

const CARD_DATA = [
  {
    _id: 767,
    tittle: "MuleSoft Consulting",
    descrip:
      "Gain strategic insights and guidance to unlock the full potential of MuleSoft. We conduct a thorough assessment of your MuleSoft license to ensure you maximize your investment and turn your business data into valuable digital assets.",
  },
  {
    _id: 6565,
    tittle: "MuleSoft Implementation",
    descrip:
      "We provide comprehensive MuleSoft support from setup to go-live, aligned with business goals. Deploy business capabilities (via APIs) for future reuse and quicker project turnaround.",
  },
  {
    _id: 76789,
    tittle: "MuleSoft Development",
    descrip:
      "We provide top-notch MuleSoft development that enhances productivity and accelerates your business growth. Our services ensure your application development process is efficient and flexible, empowering your organization to be self-sufficient and agile.",
  },
  {
    _id: 5467,
    tittle: "MuleSoft Enablement",
    descrip:
      "Support your team through the certification process with MuleSoft consulting expertise, promote self-service, and accelerate project delivery. Take advantage of official MuleSoft training tailored to your specific needs and use cases.",
  },
  {
    _id: 9877,
    tittle: "MuleSoft Support Services",
    descrip:
      "Maximize MuleSoft efficiency with platform optimization, performance tuning, and 24/7 support. Trust us to ensure your business-critical APIs run smoothly, allowing you to focus on your next key initiative.",
  },

  {
    _id: 767668,
    tittle: "Mule 3 to 4 Migration",
    descrip:
      "Transition to Mule 4 with minimal disruption and downtime by leveraging advanced features. Allow your team to focus on development while we handle the migration.",
  },
];

const ServiceSection = () => (
  <div className="containerr">
    <div className="lg:mb-[67px] mb-6 md:max-w-[80%] max-w-full">
      <h2 className="w-full mb-10">
        MuleSoft Integration Services Aligned with Your Business Needs
      </h2>
      <p className="w-full lg:text-xl text-base">
        Our experts provide an extensive array of MuleSoft services that share
        your vision and values.
      </p>
    </div>

    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 lg:pr-[230px] pr-0">
      {CARD_DATA.map(({ _id, tittle, descrip }) => (
        <ServiceCard key={_id} tittle={tittle} descrip={descrip} />
      ))}
    </div>
  </div>
);

export default ServiceSection;
