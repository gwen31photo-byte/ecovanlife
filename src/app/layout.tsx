import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/ui";
import { ImageProtection } from "@/components/image-protection";
import { ScrollToTop } from "@/components/scroll-to-top";
import { siteUrl } from "@/content/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/images/favicon.ico",
    apple: { url: "/images/apple-icon.png", sizes: "180x180", type: "image/png" },
  },
  title: {
    default: "EcoVanLife — Voyager. Explorer. Vivre autrement.",
    template: "%s | EcoVanLife",
  },
  description:
    "Voyages, road trips en van et photographie. Explorez les carnets de route EcoVanLife et imaginez votre prochaine aventure.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "EcoVanLife",
    images: [
      {
        url: "/images/hero.jpg",
        width: 2400,
        height: 1600,
        alt: "Montagnes, photographie de démonstration EcoVanLife",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>
        <ImageProtection />
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
