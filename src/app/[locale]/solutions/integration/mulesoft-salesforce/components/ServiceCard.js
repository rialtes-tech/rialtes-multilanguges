import React from "react";

const ServiceCard = ({ tittle, descrip }) => (
  <div className="border border-[#707070]  p-10">
    <h4 className="font-semibold text-[#1F3F69] mb-5 xl:text-[22px] 4xl:text-[30px] leading-tight">{tittle}</h4>
    <p className="xl:text-[20px] text-[18px] 4xl:text-[22px] leading-tight">{descrip}</p>
  </div>
);
export default ServiceCard;
