"use client";
import { usePathname } from "next/navigation";

export default function useUrl() {
    const pathname = usePathname();
    const url = pathname.split("/").pop();
    return url;
}
