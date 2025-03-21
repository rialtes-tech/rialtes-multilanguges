import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

const pointsData = [
  {
    _id: 685,
    points: "Leverage the power of integration to streamline robust workflows",
  },
  {
    _id: 524234,
    points: "Deliver exceptional customer experiences",
  },
  {
    _id: 535322,
    points: " Reduce maintenance expenses while enhancing efficiency",
  },
  {
    _id: 34535,
    points:
      " Drive operational transformation with modern integration strategies",
  },
  {
    _id: 878,
    points: "Unite applications, devices, and data into one cohesive ecosystem",
  },
];

const TransformationSection = () => (
  <div className="py-24">
    <div className="containerr flex items-start max-xl:flex-col justify-between">
      <div className="w-full xl:max-w-[50%] max-w-full">
        <h2 className="lg:text-6xl text-2xl lg:leading-[75px] w-full mb-8">
          Unleashing Digital Transformation with Robust Integration Solution
        </h2>
        <p className="w-full lg:text-xl text-base">
          Unleashing Digital Transformation with Robust Integration Solution
        </p>

        <ul className="mt-[40px]">
          {pointsData.map(({ _id, points }) => (
            <li key={_id} className="flex items-center gap-2 mb-4">
              <GoDotFill className="text-xs text-[#0092E0]" />
              <p className="font-medium text-xl">{points}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full xl:max-w-[50%] h-full max-w-full relative flex xl:justify-end max-xl:gap-5">
        {/* <div className="w-[650px] h-[500px] overflow-hidden"></div> */}
        <Image
          src="/images/mulesoft-integration/RobustIntegrationSolution.webp"
          className=""
          width={650}
          height={500}
          alt=""
        />
      </div>
    </div>
  </div>
);

export default TransformationSection;
