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
  <div className="py-28">
    <div className="containerr">
      <div className="w-full mb-14">
        <h2 className="lg:text-6xl text-2xl lg:leading-[75px] w-full mb-8">
          Industries We Serve
        </h2>
        <p className="w-full lg:text-xl text-base">
          Our MuleSoft Integration Services cater to a wide range of industries
        </p>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-0 ">
        {Data.map(({ _id, tittle, descrip }) => (
          <div className="border-r border-[#707070] ">
            <div className="mx-auto max-w-[256px]" key={_id}>
              <h4 className="text-2xl font-semibold">{tittle}</h4>
              <p className="text-xl font-medium">{descrip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Serve;
