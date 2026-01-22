"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
export default function Breadcrumb({ currPage, subPath }) {
    const locale = useLocale()
    const t = useTranslations("breadcrumbs");
    const pathname = usePathname();
    const cleanPath = pathname.replace(/\/$/, "");
    let segments = cleanPath.split("/").filter(Boolean);

    const EXISTING_ROUTES = {
        "about-us": "/about-us",
        "industry": "/industry",
        "life-sciences": "/industry/life-sciences-digital-transformation"
    };

    const LOCALES = ["en", "es", "fr"];
    if (LOCALES.includes(segments[0])) {
        segments = segments.slice(1);
    }


    const breadcrumbs = segments.map((segment, index) => {
        const label = t.has(segment)
            ? t(segment)
            : segment.replace(/-/g, " ");

        const isCurrent = index === segments.length - 1;

        return {
            label,
            href: isCurrent ? null : (EXISTING_ROUTES[segment] || `/${segments.slice(0, index + 1).join("/")}`),
        };
    });



    return (
        <div className="mt-[40px]">
            <p className="4xl:text-[20px] xl:text-[17px] text-[14px] flex flex-wrap gap-1">
                <Link
                    href={`/${locale}`}
                    className="cursor-pointer hover:text-[#0C8AED]">
                    {t("home")}
                </Link> {"/"}
                {
                    breadcrumbs.map((item, index) => (
                        <span key={item.label} className={`flex items-center gap-1`}>
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="cursor-pointer hover:text-[#0C8AED]"
                                >
                                    {item.label}
                                    {!subPath && " /"}
                                </Link>
                            ) : (
                                <span className={`cursor-default ${index == breadcrumbs.length - 1 ? "text-[#0C8AED]" : ""
                                    }`}
                                >
                                    {item.label}
                                    {index < breadcrumbs.length - 1 && " / "}
                                </span>
                            )}
                        </span>
                    ))
                }

                {/* sub path */}
                {subPath && <span>{subPath} {" / "}</span>}

            </p>
        </div>
    );
}
