import Image from "next/image";

const Banner = () => (
  <div className="relative lg:-mt-[100px]">
    <Image
      src="/images/mulesoft-integration/mulesoftBanner.webp"
      className="w-full object-cover object-top"
      fill
      alt=""
    />
    <div className="containerr">
      {" "}
      <div className="relative h-[250px] lg:h-screen overflow-hidden">
        <div className="absolute z-40 text-white lg:max-w-[808px] top-2/4 -translate-y-1/2">
          <p className="mb-5 text-2xl">MuleSoft Integration Solutions</p>
          <h1 className="text-[#ffffff]">
            Connecting Digital Businesses using the MuleSoft Platform
          </h1>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
