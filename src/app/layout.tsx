import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://catedralrioja.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Experiencia Catedral La Rioja",
    template: "%s | Catedral La Rioja",
  },
  description:
    "Descubrí la Catedral Basílica de San Nicolás de Bari de La Rioja. Historia, arquitectura y planificá tu visita.",
  keywords: [
    "Catedral La Rioja",
    "Catedral Basílica La Rioja",
    "San Nicolás de Bari",
    "turismo La Rioja Argentina",
    "patrimonio histórico",
    "arquitectura colonial",
  ],
  authors: [{ name: "Experiencia Catedral La Rioja" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "Experiencia Catedral La Rioja",
    title: "Experiencia Catedral La Rioja",
    description:
      "Un encuentro con la historia y la fe. Recorrido inmersivo por la Catedral Basílica de La Rioja.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiencia Catedral La Rioja",
    description: "Un encuentro con la historia y la fe.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${jost.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Analytics />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
