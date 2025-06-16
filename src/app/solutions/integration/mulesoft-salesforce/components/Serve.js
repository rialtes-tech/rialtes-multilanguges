import React from "react";

const Data = [
  {
    _id: 223,
    tittle: "Healthcare",
    descrip:
      "Ensure seamless patient data exchange across systems for better care delivery.",
  },

  {
    _id: 97978,
    tittle: "Retail",
    descrip:
      "Connect eCommerce platforms, inventory systems, and payment gateways for a superior customer experience.",
  },

  {
    _id: 99878,
    tittle: "Finance",
    descrip:
      "Enable real-time data flow across banking systems to improve operational efficiency and compliance.",
  },

  {
    _id: 8766765,
    tittle: "Manufacturing",
    descrip:
      "Integrate supply chain management, ERP, and IoT systems for optimized production and logistics.",
  },
];

const Serve = () => (
  <div>
    <div className="custom-container">
      <div className="w-full mb-14">
        <h2 className="w-full mb-8 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
          Industries We Serve
        </h2>
        <p className="w-full  text-[16px] 4xl:text-[20px] xl:text-[18px] leading-tight">
          Our MuleSoft Integration Services cater to a wide range of industries
        </p>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
        {Data.map(({ _id, tittle, descrip }) => (
          <div className="border-r border-[#707070] ">
            <div className="max-w-[256px]" key={_id}>
              <h4 className=" font-bold leading-tight 4xl:text-[24px] xl:text-[20px]">{tittle}</h4>
              <p className="4xl:text-[20px] xl:text-[18px] text-[16px] font-medium">{descrip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Serve;
