"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { MasonryGallery } from "@/components/masonry-gallery"
import SiteFooter from "@/components/home/SiteFooter"
import SiteHeader from "@/components/home/SiteHeader"
import { Button } from "@/components/ui/button"
import { galleryImages } from "@/lib/gallery-data"
import { cn } from "@/lib/utils"

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

  const filteredImages = useMemo(() => {
    if (activeFilter === "Tous") return galleryImages
    return galleryImages.filter((img) => img.tags.includes(activeFilter))
  }, [activeFilter])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
            <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0526e] ring-1 ring-[#F9A8D4]/60">
                Galerie
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-[#2b1019]">
                Nos réalisations <span className="text-[#EC4899]">RR Coiffure</span>
              </h1>
              <p className="text-sm sm:text-base text-[#7b4256] leading-relaxed">
                Avant / Après, colorations, balayages et coiffages premium. Cliquez sur une photo pour l&apos;agrandir.
              </p>
            </div>
          </div>
        </section>

        <section className="sticky top-16 z-30 border-b border-[#F9A8D4]/60 bg-[#FDF2F8]/90 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 md:px-10 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {filterCategories.map((category) => (
                  <Button
                    key={category}
                    variant={activeFilter === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(category)}
                    className={cn(
                      "rounded-full px-4 py-2 text-[11px] font-semibold transition-all",
                      activeFilter === category
                        ? "bg-[#EC4899] text-white shadow-lg shadow-[#EC4899]/30 hover:bg-[#F472B6]"
                        : "border-[#F9A8D4]/60 bg-white text-[#7b4256] hover:bg-[#FDE7F3] hover:text-[#2b1019]"
                    )}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <Button
                asChild
                size="sm"
                className="rounded-full bg-[#EC4899] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6]"
              >
                <Link href="https://www.snailscreation.com/book-online">Réserver en ligne</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0526e]">
                Nos photos
              </p>
              <p className="text-xs text-[#a0526e]">Cliquez pour agrandir</p>
            </div>

            {filteredImages.length > 0 ? (
              <MasonryGallery images={filteredImages} />
            ) : (
              <div className="text-center py-16">
                <p className="text-sm text-[#7b4256]">Aucune image trouvée pour cette catégorie.</p>
              </div>
            )}
          </div>
        </section>

        <section className="relative overflow-hidden py-16 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8]" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
            <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center text-[#2b1019]">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold">Envie du même résultat ?</h2>
            <p className="mt-3 text-sm sm:text-base text-[#7b4256] leading-relaxed">
              Réservez votre rendez-vous et laissez nos experts sublimer votre beauté.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 rounded-full bg-[#EC4899] px-7 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6]"
            >
              <Link href="https://www.snailscreation.com/book-online">Prendre rendez-vous</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
