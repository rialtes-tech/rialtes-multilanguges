"use client";
import Image from "next/image";

export default function Loader() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="relative w-[120px] h-[120px] flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full border-4 border-t-transparent border-[#134874] animate-spin"></div>
                <Image
                    src="/images/rialtes-logo.webp"
                    alt="rialtes-logo"
                    width={60}
                    height={60}
                    className="z-10 object-contain"
                    priority
                />
            </div>
        </div>
    );
}
