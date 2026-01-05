import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'es', 'fr'],

    defaultLocale: 'en',
    localePrefix: 'always',
     localeDetection: false 


    // localePrefix: 'as-needed'   to remove en by default
});