"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ currPage, subPath }) {
    const pathname = usePathname();
    const cleanPath = pathname.replace(/\/$/, "");
    const segments = cleanPath.split("/").filter(Boolean);
    const EXISTING_ROUTES = {
        "about-us": "/about-us"
    };

    const breadcrumbs = segments.slice(0, subPath ? 1 : 2).map((segment) => {
        const label = segment
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        const href = EXISTING_ROUTES[segment] || null;

        return { label, href };
    });

    return (
        <div className="mt-[40px]">
            <p className="4xl:text-[22px] xl:text-[18px] text-[16px] flex flex-wrap gap-1">
                <Link
                    href="/"
                    className="cursor-pointer hover:text-[#0C8AED]">
                    Home
                </Link> {"/"}
                {currPage !== "About Us" && (
                    breadcrumbs.map((item, index) => (
                        <span key={item.label} className="flex items-center gap-1">
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="cursor-pointer hover:text-[#0C8AED]"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="cursor-default">
                                    {item.label} {" / "}
                                </span>
                            )}

                        </span>
                    ))
                )}


                {/* sub path */}
                {
                    subPath && <span>
                        {subPath} {"/"}
                    </span>
                }
                {/* Current page */}
                <span className="text-[#0C8AED]">
                    {currPage}
                </span>
            </p>
        </div>
    );
}
