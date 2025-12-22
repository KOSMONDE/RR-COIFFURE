"use client"

import { type MouseEvent, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Star, Phone, ArrowRight, ArrowDown, Clock } from "lucide-react"

const HERO_VIDEO = {
  src: "/images/galerie/1221.mov",
  // ✅ Poster retiré pour éviter l’image avant la lecture
  alt: "Balayage blond lumineux – RR COIFFURE Genève",
}

const PROOF_CHIPS = [
  { label: "4.9/5 Google", icon: Star },
  { label: "Diagnostic offert", icon: Sparkles },
  { label: "Réponse < 2h", icon: Clock },
] as const

export default function HeroSection() {
  const [reducedMotion, setReducedMotion] = useState(false)

  // ✅ 1) Deux vidéos : une nette (foreground) + une floutée (background miroir)
  const videoFgRef = useRef<HTMLVideoElement | null>(null)
  const videoBgRef = useRef<HTMLVideoElement | null>(null)

  // ✅ Respecte prefers-reduced-motion (perf + accessibilité)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(Boolean(mq.matches))
    update()
    mq.addEventListener?.("change", update)
    return () => mq.removeEventListener?.("change", update)
  }, [])

  // ✅ Offset “header” responsive (plus premium que 80px fixe)
  const headerOffset = useMemo(() => {
    if (typeof window === "undefined") return 80
    if (window.matchMedia("(min-width: 1024px)").matches) return 88
    if (window.matchMedia("(min-width: 640px)").matches) return 84
    return 76
  }, [])

  const scrollToHash = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return
    e.preventDefault()

    const id = href.slice(1)
    const el = document.getElementById(id)
    if (!el) return

    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset

    if (window.location.hash !== href) history.pushState(null, "", href)
    window.scrollTo({ top, behavior: reducedMotion ? "auto" : "smooth" })
  }

  // ✅ Si reduced motion, on stoppe les vidéos proprement
  useEffect(() => {
    const fg = videoFgRef.current
    const bg = videoBgRef.current
    if (!fg && !bg) return

    const pauseBoth = () => {
      fg?.pause()
      bg?.pause()
      fg?.removeAttribute("autoplay")
      bg?.removeAttribute("autoplay")
    }

    const playBoth = async () => {
      await Promise.all([fg?.play().catch(() => {}), bg?.play().catch(() => {})])
    }

    if (reducedMotion) pauseBoth()
    else void playBoth()
  }, [reducedMotion])

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-linear-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8] pt-16 pb-10 sm:pt-24 sm:pb-14"
    >
      {/* Fond premium */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          {/* TEXTE */}
          <div className="order-1">
            <div className="mx-auto flex max-w-xl flex-col gap-6 lg:mx-0">
              {/* Badge */}
              <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.20em] text-[#7b4256] shadow-sm lg:mx-0">
                <Sparkles className="h-3.5 w-3.5 text-[#EC4899]" aria-hidden="true" />
                Salon premium à Genève
              </div>

              {/* Titre */}
              <h1
                id="hero-title"
                className="text-center font-display text-4xl font-extrabold leading-tight tracking-tight text-[#2b1019] sm:text-5xl md:text-6xl lg:text-left"
              >
                Révélez l’<span className="text-[#EC4899]">éclat naturel</span> de vos cheveux
              </h1>

              {/* Copy */}
              <p className="text-center text-sm leading-relaxed text-[#7b4256] sm:text-base md:text-lg lg:text-left">
                Balayages lumineux, soins profonds et coupes sur-mesure. Un rendu net, brillant, et facile à entretenir au
                quotidien.
              </p>

              {/* Proof chips */}
              <div className="grid grid-cols-3 gap-2 justify-items-center sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
                {PROOF_CHIPS.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex w-full min-w-0 items-center justify-center gap-1 rounded-full border border-[#F9A8D4]/60 bg-white/70 px-2 py-1 text-[10px] font-semibold text-[#2b1019] shadow-sm text-center sm:w-auto sm:gap-2 sm:px-3 sm:py-1.5 sm:text-[11px]"
                  >
                    <Icon className="h-3 w-3 text-[#EC4899] sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                    <span className="min-w-0 whitespace-nowrap leading-tight">{label}</span>
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full bg-[#EC4899] px-7 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCE7F3] active:translate-y-0 sm:w-auto"
                >
                  <a href="https://www.instagram.com/rr.coiffure/" target="_blank" rel="noopener noreferrer">
                    <span className="inline-flex items-center gap-2">
                      Réserver en ligne
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full border-[#EC4899] bg-white/80 px-7 text-sm font-semibold text-[#EC4899] shadow-sm transition-colors hover:border-[#F472B6] hover:bg-[#FDE7F3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCE7F3] active:translate-y-0 sm:w-auto"
                >
                  <a href="tel:+41762920712" aria-label="Appeler le salon">
                    <span className="inline-flex items-center gap-2">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Appeler
                    </span>
                  </a>
                </Button>

                <Link
                  href="/tarifs"
                  className="mx-auto text-xs font-semibold text-[#7b4256] underline underline-offset-4 transition-colors hover:text-[#2b1019] sm:mx-0"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>
          </div>

          {/* VISUEL */}
          <div className="order-2">
            <div className="relative mx-auto flex w-full max-w-xl flex-col gap-4 lg:mx-0">
              {/* Carte vidéo premium */}
              <div className="relative overflow-hidden rounded-[1.6rem] border border-[#F9A8D4]/50 bg-white/40 shadow-[0_22px_70px_rgba(236,72,153,0.20)] backdrop-blur">
                {/* Inner highlight (effet verre) */}
                <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-white/30" />

                {/* ✅ Conteneur vidéo : blur-mirror (bandes intelligentes) */}
                <div className="relative aspect-4/3 sm:aspect-5/4 overflow-hidden bg-[#F9BDD9]">
                  {/* Background flouté = même vidéo, object-cover, zoom + blur */}
                  <video
                    ref={videoBgRef}
                    className="absolute inset-0 h-full w-full object-cover scale-125 blur-2xl opacity-60"
                    muted
                    loop={!reducedMotion}
                    playsInline
                    preload="metadata"
                    autoPlay={!reducedMotion}
                    aria-hidden="true"
                  >
                    <source src={HERO_VIDEO.src} type="video/mp4" />
                  </video>

                  {/* Overlay de finition : garde la patte rose + contraste */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#EC4899]/20 via-transparent to-[#EC4899]/20" />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent" />

                  {/* Vidéo principale : verticale centrée (object-contain) */}
                  <div className="relative z-10 flex h-full w-full items-center justify-center px-6 sm:px-8">
                    <video
                      ref={videoFgRef}
                      className="h-full w-full max-w-[420px] object-contain"
                      muted
                      loop={!reducedMotion}
                      playsInline
                      preload="metadata"
                      autoPlay={!reducedMotion}
                      aria-hidden="true"
                    >
                      <source src={HERO_VIDEO.src} type="video/mp4" />
                    </video>
                  </div>

                  {/* Micro-vignette premium (optionnel) : grain léger */}
                  <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-10 flex justify-center">
          <a
            href="#services"
            onClick={(e) => scrollToHash(e, "#services")}
            className="inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/50 bg-[#FDF2F8]/80 px-6 py-2.5 text-xs font-semibold text-[#7b4256] shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCE7F3]"
          >
            Découvrir nos services
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
