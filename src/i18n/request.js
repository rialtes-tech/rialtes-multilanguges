import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    // Typically corresponds to the `[locale]` segment
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;


    const homepage = (await import(`../../messages/${locale}/homepage.json`)).default;
    const header = (await import(`../../messages/${locale}/homepage.json`)).default;
    const footer = (await import(`../../messages/${locale}/homepage.json`)).default;
    const contactForm = (await import(`../../messages/${locale}/homepage.json`)).default;
    const aboutUs = (await import(`../../messages/${locale}/aboutus.json`)).default;
    const sapBdc = (await import(`../../messages/${locale}/solutions.json`)).default;

    return {
        locale,
        messages: {
            ...homepage,
            ...aboutUs,
            ...header,
            ...contactForm,
            ...footer,
            ...sapBdc
        }

    };
});
