import type React from "react";
import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import AdminControls from "@/components/AdminControls";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rr-coiffure.com"),
  title: "RR COIFFURE — Salon premium a Geneve",
  description:
    "Salon RR COIFFURE a Geneve : balayages, colorations, coupes et soins premium. Reservez votre rendez-vous en ligne.",
  openGraph: {
    title: "RR COIFFURE — Salon premium a Geneve",
    description:
      "Salon RR COIFFURE a Geneve : balayages, colorations, coupes et soins premium. Reservez votre rendez-vous en ligne.",
    url: "https://www.rr-coiffure.com",
    siteName: "RR COIFFURE",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/galerie/rr-logo.jpg",
        width: 600,
        height: 600,
        alt: "RR COIFFURE logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RR COIFFURE — Salon premium a Geneve",
    description: "Salon RR COIFFURE a Geneve : balayages, colorations, coupes et soins premium.",
    images: ["/images/galerie/rr-logo.jpg"],
  },
  icons: {
    icon: "/rr-coiffure-logo.jpg",
    apple: "/rr-coiffure-logo.jpg",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="relative font-sans antialiased overflow-x-hidden">
        {children}
        <AdminControls />
        <Analytics />
      </body>
    </html>
  );
}
