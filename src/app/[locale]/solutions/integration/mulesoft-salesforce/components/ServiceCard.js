import React from "react";

const ServiceCard = ({ tittle, descrip }) => (
  <div className="border border-[#707070]  p-10">
    <h4 className="font-semibold text-[#1F3F69] mb-5 xl:text-[24px] 4xl:text-[30px] md:text-[22px] text-[18px] leading-tight">{tittle}</h4>
    <p className="xl:text-[18px] text-[18px] md:text-[20px] 4xl:text-[22px] leading-tight">{descrip}</p>
  </div>
);
export default ServiceCard;
