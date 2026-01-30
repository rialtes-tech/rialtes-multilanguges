"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function BreadcrumbSchema({ subPath }) {
    const pathname = usePathname();
    const cleanPath = pathname.replace(/\/$/, "");
    let segments = cleanPath.split("/").filter(Boolean);
    const t = useTranslations("breadcrumbs");

    const LOCALES = ["en", "es", "fr"];
    if (LOCALES.includes(segments[0])) {
        segments = segments.slice(1);
    }

    const EXISTING_ROUTES = {
        "about-us": "/about-us",
        "industry": "/industry",
        "life-sciences": "/industry/life-sciences-digital-transformation"
    };

    let manualPath;
    if (segments.length === 3 && subPath) {
        manualPath = 1;
    } else if (segments.length === 3) {
        manualPath = 2;
    } else if (segments.length === 1) {
        manualPath = 0;
    } else if (segments.length === 2) {
        manualPath = 1;
    } else {
        manualPath = 2;
    }

    const breadcrumbs = segments.slice(0, manualPath).map((segment) => {
        const label = segment
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        const href = EXISTING_ROUTES[segment] || null;

        return { label, href };
    });


    const currentSegment = segments[segments.length - 1];
    const currPage = t.has(currentSegment)
        ? t(currentSegment)
        : currentSegment.replace(/-/g, " ");

    const fullCurrentUrl = `https://www.rialtes.com${cleanPath}`;
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.rialtes.com/"
            },
            ...breadcrumbs.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                ...(item.href ? { item: `https://www.rialtes.com${item.href}` } : {})
            })),
            ...(subPath ? [{
                "@type": "ListItem",
                "position": breadcrumbs.length + 2,
                "name": subPath
            }] : []),
            {
                "@type": "ListItem",
                "position": breadcrumbs.length + (subPath ? 3 : 2),
                "name": currPage,
                "item": fullCurrentUrl
            }
        ]
    };


    return (
        <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbJsonLd),
            }}
        />
    );
}
