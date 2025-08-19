
export const changeLocalization = (locale, contentMap) => {
    if (locale === 'es') {
        return contentMap.es;
    } else if (locale === 'fr') {
        return contentMap.fr;
    } else {
        return contentMap.en; // default to English
    }
};
