// app/sitemap.js
import { getAbsoluteUrl, siteConfig } from "@/lib/site";

const routes = [{ path: "/", changeFrequency: "monthly", priority: 1 }];

export default function sitemap() {
  const lastModified = new Date();

  return siteConfig.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: getAbsoluteUrl(locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          siteConfig.locales.map((item) => [
            item,
            getAbsoluteUrl(item, route.path),
          ])
        ),
      },
    }))
  );
}
