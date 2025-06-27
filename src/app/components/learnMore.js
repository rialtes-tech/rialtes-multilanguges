import Link from "next/link";

export default function LearnMore({ bgcolor = "#134874", bordercolor = "#134874" }) {
  const bgClass = `bg-[${bgcolor}]`;
  const borderClass = `border-[${bordercolor}]`;

  return (
    <Link
      href="/contact-us"
      className={`inline-block 4xl:text-[20px] text-[16px] border border-solid font-semibold text-white py-3 px-8 transition duration-300 mt-6
        ${bgClass} ${borderClass} hover:bg-white hover:text-[${bgcolor}]`}
    >
      Learn More
    </Link>
  );
}
