import React from "react";

const ServiceCard = ({ tittle, descrip }) => (
  <div className="border border-[#707070]  p-10">
    <h4 className="font-semibold text-[#1F3F69] mb-5">{tittle}</h4>
    <p>{descrip}</p>
  </div>
);
export default ServiceCard;
