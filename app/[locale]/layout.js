// app/[locale]/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { routing } from "@/i18n/routing";
import { SITE_NAME, SITE_URL, getAbsoluteUrl, siteConfig } from "@/lib/site";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <LanguageSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
