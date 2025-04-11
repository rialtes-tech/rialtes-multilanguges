import Link from "next/link";

export default function LearnMore() {
    return(
        <button className="bg-[#134874] text-[20px] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6">
        <Link href='/contact-us'>Learn More</Link>
      </button>
    )
}