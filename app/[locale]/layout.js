// app/[locale]/layout.js
import { Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SITE_NAME, SITE_URL, getAbsoluteUrl, siteConfig } from "@/lib/site";
import "@/styles/globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const resolvedLocale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;

  const t = await getTranslations({
    locale: resolvedLocale,
    namespace: "metadata",
  });

  const title = t("title");
  const description = t("description");
  const canonical = getAbsoluteUrl(resolvedLocale);
  const languages = Object.fromEntries(
    siteConfig.locales.map((item) => [item, getAbsoluteUrl(item)])
  );

  const ogImage = {
    url: siteConfig.ogImage,
    width: 1200,
    height: 630,
    alt: title,
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description: description,
    alternates: {
      canonical: canonical,
      languages: languages,
    },
    openGraph: {
      title: title,
      description: description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  const dir = locale === "ar" ? "rtl" : "ltr";

  console.log("Current locale:", locale);
  console.log("Text direction:", dir);

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${cairo.variable} antialiased`}
      >
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
