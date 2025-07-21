"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function ClientLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    // Load GTM
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-KM6HTT3";
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "gtm.js", start: new Date().getTime() });
    }, []);

    // Loader control
    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => setIsLoading(false), 300);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    return (
        <>
            {children}

            {isLoading && (
                <div className="fixed inset-0 z-[9999] w-screen h-screen bg-white flex items-center justify-center">
                    <Loader />
                </div>
            )}
        </>
    );
}
