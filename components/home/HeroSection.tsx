"use client"

import { useMemo, useState, type MouseEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Star, Phone, ArrowRight, ArrowDown } from "lucide-react"

const HERO_SHOTS = [
  { id: "main", src: "/images/galerie/4.jpeg", alt: "Balayage blond lumineux – RR COIFFURE Genève", tag: "Balayage & soin" },
  { id: "balayage", src: "/images/galerie/1.jpeg", alt: "Balayage caramel sur mesure – RR COIFFURE Genève", tag: "Sur-mesure" },
]

const PROOF_CHIPS = [
  { label: "4.9/5 Google", icon: Star },
  { label: "Diagnostic offert", icon: Sparkles },
  { label: "Réponse < 2h", icon: Sparkles },
]

export default function HeroSection() {
  const [activeShotId, setActiveShotId] = useState(HERO_SHOTS[0].id)

  const activeShot = useMemo(
    () => HERO_SHOTS.find((s) => s.id === activeShotId) ?? HERO_SHOTS[0],
    [activeShotId]
  )

  const scrollToHash = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return
    e.preventDefault()

    const id = href.slice(1)
    const el = document.getElementById(id)
    if (!el) return

    const headerOffset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset

    if (window.location.hash !== href) history.pushState(null, "", href)
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8] pt-16 pb-10 sm:pt-24 sm:pb-14"
    >
      {/* Fond premium */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          {/* TEXTE (sans gros cadre) */}
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
                Balayages lumineux, soins profonds et coupes sur-mesure. Un résultat durable, pour votre quotidien.
              </p>

              {/* Proof chips */}
              <div className="grid grid-cols-3 gap-2 justify-items-center sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
                {PROOF_CHIPS.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex w-full min-w-0 items-center justify-center gap-1 rounded-full border border-[#F9A8D4]/60 bg-white/70 px-2 py-1 text-[10px] font-semibold text-[#2b1019] shadow-sm text-center sm:w-auto sm:gap-2 sm:px-3 sm:py-1.5 sm:text-[11px]"
                  >
                    <Icon className="h-3 w-3 text-[#EC4899] sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                    <span className="min-w-0 leading-tight">{label}</span>
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
                  <Link href="https://www.instagram.com/rr.coiffure/" target="_blank" rel="noopener noreferrer">
                    <span className="inline-flex items-center gap-2">
                      Réserver en ligne
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
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
              {/* Image principale */}
              <div className="relative overflow-hidden rounded-[1.6rem] border border-[#F9A8D4]/50 bg-white/40 shadow-[0_22px_70px_rgba(236,72,153,0.20)] backdrop-blur">
                <div className="relative aspect-[4/3] sm:aspect-[5/4]">
                  <Image
                    key={activeShot.src}
                    src={activeShot.src}
                    alt={activeShot.alt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                </div>
              </div>

              {/* Vignettes */}
              <div className="grid grid-cols-2 gap-3">
                {HERO_SHOTS.map((shot) => {
                  const isActive = shot.id === activeShotId
                  return (
                    <button
                      key={shot.id}
                      type="button"
                      onClick={() => setActiveShotId(shot.id)}
                      aria-pressed={isActive}
                      className={[
                        "relative overflow-hidden rounded-2xl border bg-white/70 shadow-sm transition",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCE7F3]",
                        isActive
                          ? "border-[#EC4899]/60 shadow-[0_12px_28px_rgba(236,72,153,0.18)]"
                          : "border-[#F9A8D4]/60 hover:border-[#EC4899]/55 hover:shadow-[0_12px_28px_rgba(236,72,153,0.14)]",
                      ].join(" ")}
                      aria-label={`Afficher : ${shot.alt}`}
                    >
                      <div className="relative aspect-[4/3]">
                        <Image src={shot.src} alt={shot.alt} fill className="object-cover" sizes="200px" />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue (moins agressif que bounce) */}
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
