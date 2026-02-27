"use client";
import Link from "next/link";
import { useState } from "react";

export default function LearnMoreButton({
  href = "/contact-us",
  arialabel = "Learn more",
  btnName = "Learn More",
  bgcolor = "#134874",
  bordercolor = "#134874",
  onClick,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    backgroundColor: isHovered ? "#fff" : bgcolor,
    borderColor: bordercolor,
    color: isHovered ? bgcolor : "#fff",
  };

  const className =
    "inline-block 4xl:text-[20px] text-[16px] xl:text-[16px] border border-solid font-semibold py-3 px-8 transition duration-300 mt-6";

  // 👉 If onClick is provided → render button
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={arialabel}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={styles}
        className={className}
      >
        {btnName}
      </button>
    );
  }

  // 👉 Otherwise → render Link (for other pages)
  return (
    <Link
      href={href}
      aria-label={arialabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={styles}
      className={className}
    >
      {btnName}
    </Link>
  );
}