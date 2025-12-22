"use client"

import Link from "next/link"
import { MasonryGallery } from "@/components/masonry-gallery"
import SiteFooter from "@/components/home/SiteFooter"
import SiteHeader from "@/components/home/SiteHeader"
import { Button } from "@/components/ui/button"
import { galleryImages } from "@/lib/gallery-data"

export default function GaleriePage() {
  const filteredImages = galleryImages

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden py-16 sm:py-20 bg-linear-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
            <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0526e] ring-1 ring-[#F9A8D4]/60">
                Galerie
              </p>

              <h1 className="font-display text-[24px] font-extrabold tracking-tight text-[#2b1019] whitespace-nowrap sm:text-4xl sm:whitespace-normal md:text-5xl">
                Nos <span className="text-[#EC4899]">réalisations</span>
              </h1>

              <p className="text-[12px] text-[#7b4256] whitespace-nowrap sm:text-base sm:whitespace-normal">
                Avant/Après, couleurs et coiffages premium.
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0526e]">Nos photos</p>
              <p className="text-xs text-[#a0526e]">Cliquez pour agrandir</p>
            </div>

            {filteredImages.length > 0 ? (
              <MasonryGallery images={filteredImages} />
            ) : (
              <div className="py-16 text-center">
                <p className="text-sm text-[#7b4256]">Aucune image trouvée pour cette catégorie.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-16 sm:py-20">
          <div className="absolute inset-0 bg-linear-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8]" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
            <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl px-6 text-center text-[#2b1019] md:px-10">
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">Envie du même résultat ?</h2>

            <p className="mt-3 text-[12px] text-[#7b4256] whitespace-nowrap sm:text-base sm:whitespace-normal">
              Réservez votre rendez-vous.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-6 rounded-full bg-[#EC4899] px-7 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFE5F4] active:translate-y-0"
            >
              <Link href="https://www.instagram.com/rr.coiffure/" target="_blank" rel="noopener noreferrer">
                Prendre rendez-vous
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
