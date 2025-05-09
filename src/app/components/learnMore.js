import Link from "next/link";

export default function LearnMore({ bgcolor, bordercolor }) {
  return (
    <Link
      href="/contact-us"
      className={`inline-block bg-[${bgcolor ? bgcolor : "#134874"}] xl:text-[20px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[${bordercolor ? bordercolor : "#134874"}] font-semibold text-white py-3 px-8 transition duration-300 mt-6`}
    >
      Learn More
    </Link>
  );
}
