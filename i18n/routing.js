// i18n/routing.js
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['ar', 'en'],

    // Used when no locale matches
    defaultLocale: 'ar',
    // Always include the locale so `/` redirects to the Arabic default at `/ar`.
    localePrefix: 'always',
    localeDetection: false,
});
