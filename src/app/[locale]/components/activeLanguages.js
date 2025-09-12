
import { useLocale } from "next-intl";

export function useActiveLocale() {
    const locale = useLocale();

    return {
        locale,
        frActive: locale === "fr",
        esActive: locale === "es",
        enActive: locale === "en"
    };
}
