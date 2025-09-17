import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
 
async function importMessages(locale, files) {
    const messages = {};
    for (const file of files) {
        const data = (await import(`../../messages/${locale}/${file}.json`)).default;
        Object.assign(messages, data);
    }
    return messages;
}
 
export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;
 
    const allMessages = await Promise.all([
        importMessages(locale, ["homepage"]),
        importMessages(locale, ["products"]),
        importMessages(locale, ["solutions"]),
        importMessages(locale, ["aboutus"]),
        importMessages(locale, ["services"]),
        importMessages(locale, ["industry"]),
        importMessages(locale, ["insight"]),
        importMessages(locale, ["webinars"]),
        importMessages(locale, ["blogs"]),
        importMessages(locale, ["caseStudy"]),
    ]);
 
    return {
        locale,
        messages: Object.assign({}, ...allMessages),
    };
});
 
 