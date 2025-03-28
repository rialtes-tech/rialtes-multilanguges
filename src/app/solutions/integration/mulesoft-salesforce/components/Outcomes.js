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
    <div className="containerr">
      <h2 className=" font-light mb-16">
        Drive Measurable Business Outcomes
      </h2>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {DATA.map(({ _id, percent, des }) => (
          <div key={_id}>
            <h2 className="font-extrabold xl:text-[70px] text-[#0092E0]">
              {percent}
            </h2>
            <p className="xl:text-2xl whitespace-pre-wrap">{des}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Outcomes;
