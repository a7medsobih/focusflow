# Next Template

A reusable starter template for **Next.js** projects. It provides a foundation for Arabic and English applications, including UI, localization, and SEO setup, while leaving the pages and content ready to extend.

> Current state: the home page displays a translated demo title (`Hello world!`) and a language switcher.

## Tech Stack

- Next.js `16.1.6` with the App Router and React `19.2.3`.
- `next-intl` for Arabic and English routing and translations.
- Tailwind CSS `4` and `tw-animate-css` for styling and animation utilities.
- shadcn- and Radix-compatible UI setup with `class-variance-authority`, `clsx`, and `tailwind-merge`.
- `motion` for animations and `swiper` for sliders.
- `lucide-react` for icons.

## What the Template Provides

- Locale routes for `en` and `ar`, with automatic LTR or RTL page direction.
- Translation loading from `messages/en.json` and `messages/ar.json`.
- A language switcher plus reusable button, slider, and spinner components.
- Loading, error, and 404 states.
- Metadata, Open Graph, `robots.txt`, and `sitemap.xml` setup.
- Initial API, validation, and utility placeholders for future project features.

## Project Structure

```text
app/              Next.js pages, loading/error states, and SEO files
app/[locale]/     Locale-specific layout and home page
components/       UI and animation components
i18n/             Routing and localization configuration
messages/         Arabic and English translation files
lib/              Site config, utilities, and API setup
styles/            Global Tailwind styles
public/            Public assets
proxy.ts           Middleware for locale routing
```

## Run Locally

The project requires Node.js and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` after the development server starts. Use `/ar` to view the Arabic version.

Other available commands:

```bash
npm run lint
npm run build
npm start
```

## Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

The variable currently used by the application is:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

It is used for site URLs and SEO metadata. If it is not set, the project defaults to `http://localhost:3000`. `.env.example` also includes `NEXT_PUBLIC_API_URL` as a future-ready variable, but it is not currently used in the code.