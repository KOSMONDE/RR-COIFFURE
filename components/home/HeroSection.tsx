"use client"

import { useMemo, useState, type MouseEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Star, Scissors, Phone, ArrowRight, ArrowDown, Leaf, Clock3, ShieldCheck, Heart } from "lucide-react"

const HERO_SHOTS = [
  { id: "main", src: "/images/galerie/4.jpeg", alt: "Balayage blond lumineux – RR COIFFURE Genève", tag: "Balayage & soin" },
  { id: "balayage", src: "/images/galerie/1.jpeg", alt: "Balayage caramel sur mesure – RR COIFFURE Genève", tag: "Sur-mesure" },
]

const KEY_POINTS = [
  { title: "Diagnostic offert", desc: "Analyse personnalisée avant chaque rendez-vous.", icon: Star },
  { title: "Experts couleur", desc: "Balayages précis, coupes nettes, résultats naturels.", icon: Scissors },
  { title: "Produits clean", desc: "Formules respectueuses de la fibre et des longueurs.", icon: Leaf },
  { title: "Réponse sous 2h", desc: "Confirmations rapides pour vos demandes.", icon: Clock3 },
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

    // Offset header sticky (ajuste si ton header change)
    const headerOffset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset

    // met à jour l’URL sans saut
    if (window.location.hash !== href) history.pushState(null, "", href)

    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8]"
    >
      {/* Fond premium */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-10 items-start lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch">
          {/* VISUEL */}
          <div className="relative flex h-full items-start justify-center order-2 lg:order-1">
            <div className="relative flex h-full w-full max-w-lg flex-col gap-4">
              <div className="flex-1 overflow-hidden rounded-[1.5rem] border border-[#F9A8D4]/50 bg-[#FDF2F8] shadow-[0_20px_60px_rgba(236,72,153,0.18)]">
                <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-auto lg:h-full">
                  <Image
                    key={activeShot.src}
                    src={activeShot.src}
                    alt={activeShot.alt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                </div>
              </div>

              {/* Mini vignettes épurées */}
              <div className="grid grid-cols-2 gap-3">
                {HERO_SHOTS.map((shot) => {
                  const isActive = shot.id === activeShotId
                  return (
                    <button
                      key={shot.id}
                      type="button"
                      onClick={() => setActiveShotId(shot.id)}
                      aria-pressed={isActive}
                      aria-current={isActive ? "true" : undefined}
                      className={[
                        "group relative overflow-hidden rounded-2xl border bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40",
                        isActive
                          ? "border-[#EC4899]/60 shadow-[0_12px_26px_rgba(236,72,153,0.18)]"
                          : "border-[#F9A8D4]/50 hover:border-[#EC4899]/50 hover:shadow-[0_12px_26px_rgba(236,72,153,0.16)]",
                      ].join(" ")}
                      aria-label={`Afficher : ${shot.tag}`}
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 33vw, 180px"
                        />
                      </div>
                      <div className="px-2 py-2">
                        <p
                          className={[
                            "truncate text-[11px] font-semibold",
                            isActive ? "text-[#7b4256]" : "text-[#a0526e] group-hover:text-[#7b4256]",
                          ].join(" ")}
                        >
                          {shot.tag}
                        </p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* TEXTE */}
          <div className="order-1 lg:order-2">
            <div className="mx-auto flex w-full max-w-xl flex-col gap-8 rounded-3xl border border-[#F9A8D4]/40 bg-[#FDE7F3]/60 p-6 shadow-[0_16px_40px_rgba(236,72,153,0.12)] backdrop-blur lg:mx-0 sm:p-7">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-semibold text-[#7b4256] shadow-sm border border-[#F9A8D4]/50 uppercase tracking-[0.20em] lg:mx-0">
                <Sparkles className="h-3.5 w-3.5 text-[#EC4899]" aria-hidden="true" />
                Salon premium à Genève
              </div>

              <h1
                id="hero-title"
                className="text-center font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#2b1019] lg:text-left"
              >
                Révélez l’{" "}
                <span className="text-[#EC4899]">éclat naturel</span> de vos cheveux
              </h1>

              <div className="space-y-4">
                <p className="text-center text-sm sm:text-base md:text-lg text-[#7b4256] leading-relaxed lg:text-left">
                  Balayages lumineux, soins profonds et coupes sur-mesure. Une expérience premium qui respecte la fibre
                  et révèle l’éclat.
                </p>

                {/* Points clés */}
                <dl className="grid grid-cols-2 gap-3 text-sm">
                  {KEY_POINTS.map(({ title, desc, icon: Icon }) => (
                    <div key={title} className="flex items-start gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full text-[#EC4899]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <dt className="text-sm font-semibold text-[#2b1019]">{title}</dt>
                        <dd className="min-h-[2.5rem] text-xs text-[#7b4256]">{desc}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>

              {/* CTA */}
              <div className="mt-auto space-y-2">
                <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-full bg-[#EC4899] px-7 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6] sm:w-auto"
                  >
                    <Link href="https://www.snailscreation.com/book-online" target="_blank" rel="noreferrer">
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
                    className="w-full rounded-full border-[#EC4899] bg-white px-7 text-sm font-semibold text-[#EC4899] shadow-sm hover:border-[#F472B6] hover:bg-[#FDE7F3] sm:w-auto"
                  >
                    <a href="tel:+41211234567" aria-label="Appeler le salon">
                      <span className="inline-flex items-center gap-2">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        Appeler le salon
                      </span>
                    </a>
                  </Button>
                </div>

              </div>

              {/* Chips de navigation rapide supprimés */}
            </div>
          </div>
        </div>

        {/* Indication scroll */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href="#services"
            onClick={(e) => scrollToHash(e, "#services")}
            className="inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/50 bg-[#FDF2F8]/80 px-6 py-2.5 text-xs font-semibold text-[#7b4256] shadow-sm hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 motion-safe:animate-bounce motion-reduce:animate-none"
          >
            Découvrir nos services
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
