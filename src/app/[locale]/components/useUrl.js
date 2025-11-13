"use client";
import { usePathname } from "next/navigation";

export default function useUrl() {
    const pathname = usePathname();

    const cleanPath = pathname.replace(/\/$/, "");
    const url = cleanPath.split("/").pop();
    
    return url;
}
