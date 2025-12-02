"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import arrowImg from "../../../../public/images/flags/arrow.png"
import Image from "next/image";
import leftArrow from '../../../../public/images/common-img/left-arrow.png'
import rightArrow from '../../../../public/images/common-img/right-arrow.png'
import { latestBlogs, latestCaseStudy, allWebinars, latestNews, solutionsPages, servicesPages, productsPages, industryPages, aboutUsPages, otherPages } from '../../../../messages/en/AllData.json'

export default function page() {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Relevance");
    const dropdownRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);

    const allData = [
        ...latestBlogs,
        ...latestCaseStudy,
        ...allWebinars,
        ...latestNews,
        ...solutionsPages,
        ...servicesPages,
        ...productsPages,
        ...industryPages,
        ...aboutUsPages,
        ...otherPages
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    let filtered = allData.filter((item) =>
        item.url.toLowerCase().includes(query?.toLowerCase() || "") ||
        item.title.toLowerCase().includes(query?.toLowerCase() || "") ||
        item.description?.toLowerCase().includes(query?.toLowerCase() || "")
    );

    if (selectedOption === "Date") {
        filtered = filtered.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        );
    }

    const itemsPerPage = 10
    const totalPages = Math.ceil(filtered.length / itemsPerPage)
    let startIndex = (currentPage - 1) * itemsPerPage
    let endIndex = currentPage * itemsPerPage
    const slicedData = filtered.slice(startIndex, endIndex)

    return (
        <section className="mb-20">
            <div className="custom-container">
                <h2 className="font-semibold pt-10 text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    Search results for : <span className="ml-2 text-black">{query}</span>
                </h2>
                <div className="sm:flex justify-between md:w-[74%]">
                    <p className="mt-5 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold leading-tight">Yielded {filtered.length} results</p>
                    <div className="max-sm:mt-8 relative sm:mt-2 flex gap-3 items-center" ref={dropdownRef}>
                        Sort By :
                        <button
                            onClick={() => setOpen(!open)}
                            className="font-medium py-2 pl-4 pr-1 flex items-center justify-between gap-2 4xl:text-[17px] 2xl:text-[15px] xl:text-[13px] text-[13px] cursor-pointer bg-gray-100 border border-gray-300 rounded-md">
                            {selectedOption}
                            <span className="text-[16px]">
                                <Image
                                    src={arrowImg}
                                    alt="arrow"
                                    className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] object-cover mt-[-4px] ml-[-6px]"
                                    priority
                                    width={30}
                                    height={30}
                                />
                            </span>
                        </button>

                        {open && (
                            <div className="absolute top-full left-20 mt-1 w-[140px] bg-white shadow-lg rounded-md border z-40">
                                <div
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                    onClick={() => { setSelectedOption("Relevance"); setOpen(false); }}>
                                    Relevance
                                </div>
                                <div
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                    onClick={() => { setSelectedOption("Date"); setOpen(false); }}>
                                    Date
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                {filtered.length > 0 ? (
                    <div className="md:w-[80%]">
                        {slicedData.map((data, i) => (
                            <div className="pt-[30px] lg:pt-[60px]" key={i}>
                                <Link key={i} href={data.url}>
                                    <h3 className="mt-5 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold leading-tight text-[#0092E0] hover:text-black">{data.title}</h3>
                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] text-gray-600">https://www.rialtes.com{data.url}</p>
                                    <p className="mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] line-clamp-2">{data.description}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 mt-20">No results found.</p>
                )}

                {filtered.length > 10 &&
                    <div className="flex gap-10 mt-10">
                        <div className="mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-semibold"> Showing {Math.min(currentPage * itemsPerPage, filtered.length)} / {filtered.length}</div>
                        <div className="flex gap-5 items-center pt-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-semibold">
                            <Image
                                src={leftArrow}
                                alt="left"
                                className={`w-[24px] h-[24px] lg:w-[20px] lg:h-[20px] object-cover mr-4  ${currentPage === 1 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                                onClick={() => {
                                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                                }}
                            />
                            {Array.from({ length: totalPages }).map((_, id) => (
                                <div
                                    key={id}
                                    className={`cursor-pointer ${currentPage === id + 1 ? "text-[#0092E0]" : ""}`}
                                    onClick={() => setCurrentPage(id + 1)}>
                                    {id + 1}
                                </div>
                            ))}

                            <Image
                                src={rightArrow}
                                alt="right"
                                className={`w-[24px] h-[24px] lg:w-[20px] lg:h-[20px] object-cover ml-4 ${currentPage === totalPages ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                                onClick={() => {
                                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                                }}
                            />
                        </div>
                    </div>
                }
            </div>
        </section>
    );
}
