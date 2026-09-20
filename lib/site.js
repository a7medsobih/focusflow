// lib/site.js
import { getPathname } from "@/i18n/navigation";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
  /\/$/,
  ""
);

export const siteConfig = {
  name: "Next Template",
  url: siteUrl,
  locales: ["en", "ar"],
  defaultLocale: "en",
  ogImage: "/og-image.png",
};

export const SITE_URL = siteConfig.url;
export const SITE_NAME = siteConfig.name;

export function getAbsoluteUrl(locale, href = "/") {
  const pathname = getPathname({ locale, href });
  return pathname === "/" ? siteConfig.url : `${siteConfig.url}${pathname}`;
}
