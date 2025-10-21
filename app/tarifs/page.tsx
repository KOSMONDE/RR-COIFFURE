import type { Metadata } from "next"
import { Topbar } from "@/components/topbar"
import { Navbar } from "@/components/navbar"
import { PriceRow } from "@/components/price-row"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tarifs — RR COIFFURE",
  description:
    "Découvrez nos tarifs transparents pour coupes, colorations, balayages, soins et tresses. Prix d'appel selon diagnostic personnalisé.",
}

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Galerie", href: "/galerie" },
  { label: "Rendez-vous", href: "/rdv" },
  { label: "Avis", href: "/avis" },
  { label: "Contact", href: "/contact" },
]

const pricingCategories = [
  {
    title: "Coupes & Coiffage",
    description: "Coupes modernes et coiffages professionnels",
    items: [
      { name: "Coupe + Brushing", from: "À partir de 45 CHF" },
      { name: "Brushing", from: "À partir de 30 CHF" },
      { name: "Coupe homme", from: "À partir de 25 CHF" },
      { name: "Coupe enfant", from: "À partir de 20 CHF", note: "Jusqu'à 12 ans" },
    ],
  },
  {
    title: "Coloration",
    description: "Colorations sur mesure et techniques de décoloration",
    items: [
      { name: "Coloration racines", from: "À partir de 55 CHF" },
      { name: "Gloss/Toner", from: "À partir de 35 CHF" },
      { name: "Décoloration", from: "Sur devis", note: "Selon longueur et état des cheveux" },
    ],
  },
  {
    title: "Mèches & Balayage",
    description: "Techniques de mèches et balayages naturels",
    items: [
      { name: "Balayage partiel", from: "À partir de 80 CHF" },
      { name: "Balayage complet", from: "À partir de 120 CHF" },
      { name: "Mèches papier", from: "À partir de 95 CHF" },
    ],
  },
  {
    title: "Soins & Spa",
    description: "Soins profonds et traitements capillaires",
    items: [
      { name: "Soin profond", from: "À partir de 25 CHF" },
      { name: "Botox capillaire", from: "À partir de 90 CHF", isNew: true },
    ],
  },
  {
    title: "Tresses & Extensions",
    description: "Tresses professionnelles et pose d'extensions",
    items: [
      { name: "Tresses collées", from: "À partir de 60 CHF" },
      { name: "Box braids", from: "À partir de 140 CHF", note: "Selon longueur désirée" },
      { name: "Pose extensions", from: "Sur devis", note: "Consultation gratuite" },
    ],
  },
]

export default function TarifsPage() {
  return (
    <div className="min-h-screen">
      <Topbar
        address="Rue de la Gare 12, 1003 Lausanne"
        phone="+41 21 123 45 67"
        hours="Lun-Sam 9h-19h"
        ctaUrl="https://www.snailscreation.com/book-online"
      />
      <Navbar items={navItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-100 via-brand-50 to-brand-300 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4 text-brand-600">Tarifs</h1>
            <p className="text-lg text-ink/70 text-pretty">
              Transparence et clarté. Prix d'appel selon diagnostic personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-8 bg-gradient-to-b from-white to-brand-50/30">
        <div className="container mx-auto px-4">
          <Alert className="max-w-4xl mx-auto border-brand-300 bg-brand-50">
            <Info className="h-4 w-4 text-brand-600" />
            <AlertDescription className="text-sm text-ink">
              <strong>Tarifs indicatifs.</strong> Un devis précis vous sera communiqué après diagnostic personnalisé de
              vos cheveux.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {pricingCategories.map((category, i) => (
              <Card
                key={i}
                className="rounded-2xl shadow-sm hover:shadow-md transition-shadow border-brand-100 hover:border-brand-300"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-600">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-0">
                    {category.items.map((item, j) => (
                      <PriceRow key={j} {...item} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-100 via-brand-300 to-brand-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Prêt à réserver ?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous dès maintenant et bénéficiez d'un diagnostic gratuit
          </p>
          <Button asChild size="lg" className="rounded-2xl shadow-lg bg-white text-brand-600 hover:bg-brand-50">
            <Link href="https://www.snailscreation.com/book-online">Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t border-border md:hidden z-40">
        <Button asChild size="lg" className="w-full rounded-2xl shadow-lg bg-brand-600 text-white hover:bg-brand-50">
          <Link href="https://www.snailscreation.com/book-online">Prendre RDV</Link>
        </Button>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-gradient-to-b from-brand-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-brand-600">RR.COIFFURE</h3>
              <p className="text-sm text-muted-foreground">Votre salon de coiffure professionnel à Lausanne</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-brand-600">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Rue de la Gare 12</p>
                <p>1003 Lausanne</p>
                <p>+41 21 123 45 67</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-brand-600">Horaires</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Lundi - Samedi</p>
                <p>9h00 - 19h00</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} RR.COIFFURE. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
