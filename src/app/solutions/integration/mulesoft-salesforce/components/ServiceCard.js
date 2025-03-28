import React from "react";

const ServiceCard = ({ tittle, descrip }) => (
  <div className="border border-[#707070] py-14 p-11">
    <h4 className="font-semibold text-[#1F3F69] mb-9">{tittle}</h4>
    <p>{descrip}</p>
  </div>
);
export default ServiceCard;
