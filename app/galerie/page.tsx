"use client"
import { useState } from "react"
import { Topbar } from "@/components/topbar"
import { Navbar } from "@/components/navbar"
import { MasonryGallery } from "@/components/masonry-gallery"
import { Button } from "@/components/ui/button"
import { galleryImages } from "@/lib/gallery-data"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Galerie", href: "/galerie" },
  { label: "Rendez-vous", href: "/rdv" },
  { label: "Avis", href: "/avis" },
  { label: "Contact", href: "/contact" },
]

const filterCategories = [
  "Tous",
  "Coloration",
  "Mèches & Balayage",
  "Enfants",
  "Tresses & Extensions",
  "Coiffage",
  "Avant/Après",
]

export default function GaleriePage() {
  const [activeFilter, setActiveFilter] = useState("Tous")

  const filteredImages =
    activeFilter === "Tous" ? galleryImages : galleryImages.filter((img) => img.tags.includes(activeFilter))

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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4 text-brand-600">Galerie</h1>
            <p className="text-lg text-ink/70 text-pretty">
              Découvrez nos réalisations : Avant/Après, Coloration, Balayage, Enfants, Tresses
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gradient-to-b from-white to-brand-50/30 sticky top-16 z-40 border-b border-brand-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={cn("rounded-full transition-all", activeFilter === category && "shadow-md")}
                >
                  {category}
                </Button>
              ))}
            </div>
            <Button asChild size="sm" className="rounded-2xl shadow-md">
              <Link href="https://www.snailscreation.com/book-online">Prendre RDV</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredImages.length > 0 ? (
            <MasonryGallery images={filteredImages} />
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Aucune image trouvée pour cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-100 via-brand-300 to-brand-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Envie du même résultat ?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Réservez votre rendez-vous et laissez nos experts sublimer votre beauté
          </p>
          <Button asChild size="lg" className="rounded-2xl shadow-lg bg-white text-brand-600 hover:bg-brand-50">
            <Link href="https://www.snailscreation.com/book-online">Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-gradient-to-b from-brand-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">RR.COIFFURE</h3>
              <p className="text-sm text-muted-foreground">Votre salon de coiffure professionnel à Lausanne</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Rue de la Gare 12</p>
                <p>1003 Lausanne</p>
                <p>+41 21 123 45 67</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horaires</h4>
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
