"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const galleryItems = [
  {
    src: "/images/galerie/1.jpeg",
    alt: "Balayage caramel sur cheveux longs",
    label: "Balayage caramel",
  },
  {
    src: "/images/galerie/2.webp",
    alt: "Tresses et braids stylisées",
    label: "Braids & tresses",
  },
  {
    src: "/images/galerie/3.webp",
    alt: "Coloration intense et brillante",
    label: "Coloration intense",
  },
  // ✅ REMIS
  {
    src: "/images/galerie/4.jpeg",
    alt: "Soin spa capillaire en salon",
    label: "Soin & spa",
  },
  {
    src: "/images/galerie/5.jpeg",
    alt: "Coiffure pour enfants",
    label: "Coiffure enfants",
  },
  {
    src: "/images/galerie/6.jpeg",
    alt: "Coupe moderne et stylée",
    label: "Coupe moderne",
  },
]

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const prevBtnRef = useRef<HTMLButtonElement | null>(null)
  const nextBtnRef = useRef<HTMLButtonElement | null>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const swipeStartX = useRef<number | null>(null)

  // Scroll lock + focus restore
  useEffect(() => {
    if (lightbox === null) return

    previousFocusRef.current = document.activeElement as HTMLElement | null
    const prevOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = "hidden"

    const timer = window.setTimeout(() => closeBtnRef.current?.focus(), 0)

    return () => {
      document.documentElement.style.overflow = prevOverflow
      window.clearTimeout(timer)
      previousFocusRef.current?.focus?.()
    }
  }, [lightbox])

  // Clavier + focus trap + navigation
  useEffect(() => {
    if (lightbox === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null)

      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        setLightbox((idx) => {
          if (idx === null) return null
          const len = galleryItems.length
          const next = e.key === "ArrowRight" ? idx + 1 : idx - 1
          return ((next % len) + len) % len
        })
      }

      if (e.key === "Tab") {
        const focusables = [closeBtnRef.current, prevBtnRef.current, nextBtnRef.current].filter(
          (el): el is HTMLButtonElement => !!el && el.offsetParent !== null
        )
        if (focusables.length === 0) return

        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        const active = document.activeElement as HTMLElement | null

        if (e.shiftKey) {
          if (!active || active === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (!active || active === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightbox])

  return (
    <section
      id="galerie"
      aria-labelledby="gallery-title"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8] pt-16 pb-10 sm:pt-24 sm:pb-14"
    >
      {/* Fond premium */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Titre section */}
        <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#b05a7b]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899]" />
            Galerie
          </div>

          <h2
            id="gallery-title"
            className="font-display text-2xl font-extrabold tracking-tight text-[#2b1019] sm:text-3xl md:text-4xl"
          >
            Un aperçu de nos <span className="text-[#EC4899]">réalisations</span>
          </h2>

          <p className="text-sm leading-relaxed text-[#7b4256] sm:text-base">
            Balayages, colorations, tresses et soins réalisés.
          </p>

          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a0526e]">
            Cliquez pour agrandir
          </p>
        </div>

        {/* Grille premium */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {galleryItems.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setLightbox(index)}
              className="group relative overflow-hidden rounded-[1.7rem] bg-white/40 shadow-[0_10px_28px_rgba(176,51,116,0.14)] ring-1 ring-white/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(176,51,116,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCE7F3]"
              aria-label={`Ouvrir l’image : ${item.label}`}
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent px-4 pb-3 pt-6">
                <span className="text-[9px] uppercase tracking-[0.16em] text-white/80 sm:text-[10px] sm:text-white">
                  RR COIFFURE
                </span>
              </div>

            </button>
          ))}
        </div>

        {/* CTA Instagram */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3">
          <Link
            href="https://www.instagram.com/rr.coiffure/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#EC4899] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCE7F3] active:translate-y-0"
          >
            Voir plus sur Instagram
          </Link>

          <p className="text-center text-[10px] text-[#7b4256] sm:text-[11px]">
            Photos réelles du salon.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Aperçu image"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          onPointerDown={(e) => {
            swipeStartX.current = e.clientX
          }}
          onPointerUp={(e) => {
            if (swipeStartX.current == null) return
            const delta = e.clientX - swipeStartX.current
            swipeStartX.current = null
            if (Math.abs(delta) < 60) return

            const len = galleryItems.length
            setLightbox((idx) => {
              if (idx === null) return null
              if (delta < 0) return (idx + 1) % len
              return (idx - 1 + len) % len
            })
          }}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl border border-white/10 bg-black/85 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mb-4 flex items-center justify-center">
              <span className="text-xs uppercase tracking-[0.3em] text-white/80">RR COIFFURE</span>

              <span className="absolute left-0 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#2b1019] shadow">
                {lightbox + 1} / {galleryItems.length}
              </span>

              <button
                onClick={() => setLightbox(null)}
                ref={closeBtnRef}
                className="absolute right-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/80 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F472B6]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Fermer"
                type="button"
              >
                ×
              </button>
            </div>

            <div className="relative h-[70vh] overflow-hidden rounded-xl border border-white/10 bg-black">
              <button
                type="button"
                onClick={() =>
                  setLightbox((idx) => {
                    if (idx === null) return null
                    const len = galleryItems.length
                    return (idx - 1 + len) % len
                  })
                }
                ref={prevBtnRef}
                className="hidden sm:flex absolute left-4 top-1/2 z-20 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#2b1019] shadow transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F472B6] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Image précédente"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={() =>
                  setLightbox((idx) => {
                    if (idx === null) return null
                    const len = galleryItems.length
                    return (idx + 1) % len
                  })
                }
                ref={nextBtnRef}
                className="hidden sm:flex absolute right-4 top-1/2 z-20 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#2b1019] shadow transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F472B6] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Image suivante"
              >
                ›
              </button>

              <Image
                src={galleryItems[lightbox].src}
                alt={galleryItems[lightbox].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-[12px] font-semibold text-white/90">{galleryItems[lightbox].label}</p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setLightbox((idx) => {
                      if (idx === null) return null
                      const len = galleryItems.length
                      return (idx - 1 + len) % len
                    })
                  }
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/85 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  Précédent
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightbox((idx) => {
                      if (idx === null) return null
                      const len = galleryItems.length
                      return (idx + 1) % len
                    })
                  }
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/85 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
