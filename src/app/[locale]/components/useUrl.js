"use client";
import { usePathname } from "next/navigation";

export default function useUrl() {
    const pathname = usePathname();
    const splitUrl = pathname.split("/");
    const url = splitUrl[4];

    return url;
}
