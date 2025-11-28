import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import AdminControls from "@/components/AdminControls";

// --- Police Google -----------------------------------------------------------
const inter = Inter({ subsets: ["latin"] });

// --- Métadonnées SEO spécifiques à la page maintenance -----------------------
export const metadata: Metadata = {
  title: "RR COIFFURE — Maintenance",
  description:
    "Le site RR COIFFURE est en maintenance temporaire. Retrouvez bientôt notre nouvelle expérience en ligne. Contactez-nous pour toute demande ou prise de rendez-vous.",
  openGraph: {
    title: "RR COIFFURE — Maintenance",
    description:
      "Le site RR COIFFURE est actuellement en maintenance. Réouverture très bientôt.",
    url: "https://www.rr-coiffure.com",
    siteName: "RR COIFFURE",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/rr-logo.jpg",
        width: 600,
        height: 600,
        alt: "RR COIFFURE logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RR COIFFURE — Maintenance",
    description: "Réouverture prochaine du site RR COIFFURE.",
    images: ["/images/rr-logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  generator: "v0.app",
};

// --- Layout global -----------------------------------------------------------
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // On récupère le chemin via process.env ou un hook côté client
  // mais ici, AdminControls masque déjà /maintenance, donc il peut rester monté partout.
  return (
    <html lang="fr" className={inter.className}>
      <body className="font-sans antialiased relative">
        {/* Contenu principal (page maintenance ou site) */}
        {children}

        {/* Bouton de déconnexion admin (affiché seulement si cookie présent et pas sur /maintenance) */}
        <AdminControls />

        {/* Outils de suivi */}
        <Analytics />
      </body>
    </html>
  );
}
