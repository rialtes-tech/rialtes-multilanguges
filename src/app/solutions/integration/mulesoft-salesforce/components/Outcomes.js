import React from "react";

const DATA = [
  {
    _id: 76767,
    percent: "63%",
    des: `Reduction in\nmaintenance costs`,
  },
  {
    _id: 65657623,
    percent: "4x",
    des: `Faster time-to-market for\nnew applications and\nservices`,
  },
  {
    _id: 98887,
    percent: "64%",
    des: `Improvement in\ncustomer satisfaction`,
  },
];

const Outcomes = () => (
  <div className="bg-[#EDEDED] py-16 mt-20">
    <div className="custom-container">
      <h2 className=" font-light mb-16 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
        Drive Measurable Business Outcomes
      </h2>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 ">
        {DATA.map(({ _id, percent, des }) => (
          <div key={_id}>
            <h2 className="font-extrabold 4xl:text-[70px] xl:text[60px] text-[#0092E0]">
              {percent}
            </h2>
            <p className="4xl:text-[24px] xl:text-[18px]  text-[16px] whitespace-pre-wrap leading-tight">{des}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Outcomes;
