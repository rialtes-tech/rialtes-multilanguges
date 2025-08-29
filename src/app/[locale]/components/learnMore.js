"use client"
import Link from "next/link";
import { useState } from "react";

export default function LearnMoreButton({
  href = "/contact-us",
  arialabel = "Learn more about Salesforce implementation services",
  btnName = "Learn More",
  bgcolor = "#134874",
  bordercolor = "#134874"
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      aria-label={arialabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? "#fff" : bgcolor,
        borderColor: bordercolor,
        color: isHovered ? bgcolor : "#fff",
      }}
      className="inline-block 4xl:text-[20px] text-[16px] xl:text-[16px] border border-solid font-semibold py-3 px-8 transition duration-300 mt-6"
    >
      {btnName}
    </Link>
  );
}
