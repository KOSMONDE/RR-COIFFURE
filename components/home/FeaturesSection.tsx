"use client"

import Link from "next/link"
import { ArrowDown, Clock, Star, Scissors, Palette } from "lucide-react"

const features = [
  {
    icon: Scissors,
    title: "Balayages lumineux",
    desc: "Couleur lumineuse, fibre préservée.",
    descMobile: "Couleur lumineuse, fibre préservée.",
  },
  {
    icon: Palette,
    title: "Diagnostic offert",
    desc: "Analyse & plan sur mesure.",
    descMobile: "Analyse & plan sur mesure.",
  },
  {
    icon: Clock,
    title: "Réponse rapide",
    desc: "Booking simple, réponse < 2 h.",
    descMobile: "Booking simple, réponse < 2 h.",
  },
  {
    icon: Star,
    title: "4.9 / 5 Avis clients",
    desc: "Avis clients 4.9/5.",
    descMobile: "Avis clients 4.9/5.",
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8] pt-16 pb-10 sm:pt-24 sm:pb-14"
    >
      {/* Fond premium (calmé) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-15 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
        <div className="absolute inset-0 bg-white/25" />
        <div className="absolute -left-20 top-14 h-60 w-60 rounded-full bg-[#F9A8D4]/25 blur-3xl" />
        <div className="absolute -right-16 bottom-6 h-64 w-64 rounded-full bg-[#EC4899]/18 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <div className="mb-12 space-y-2 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a0526e]">
            Points forts du salon
          </p>

          <h2
            id="features-title"
            className="font-display text-2xl font-extrabold tracking-tight text-[#2b1019] sm:text-4xl"
          >
            Pourquoi choisir{" "}
            <span className="bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent">
              RR Coiffure
            </span>
          </h2>

          <p className="text-sm text-[#7b4256] md:text-base">
            Balayages, soins et colorations sur-mesure.
          </p>
        </div>

        {/* Grille (cartes légères = premium) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon

            return (
              <div
                key={i}
                className="group rounded-3xl border border-white/40 bg-white/55 p-6 text-center shadow-[0_10px_30px_rgba(176,51,116,0.10)] backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:bg-white/70 hover:shadow-[0_16px_42px_rgba(176,51,116,0.14)] focus-within:ring-2 focus-within:ring-[#EC4899]/30"
              >
                {/* Icône premium (plus douce) */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#F9A8D4] via-[#F472B6] to-[#EC4899] shadow-[0_10px_22px_rgba(176,51,116,0.18)] ring-1 ring-white/50 transition-transform duration-300 group-hover:scale-[1.06]">
                  <Icon className="h-7 w-7 text-white drop-shadow" aria-hidden="true" />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-white/18 opacity-0 transition-opacity duration-300 group-hover:opacity-45" />
                </div>

                <h3 className="mb-1 text-lg font-semibold tracking-tight text-[#2b1019]">
                  {feature.title}
                </h3>

                <p className="mx-auto max-w-none text-[12px] text-[#7b4256] whitespace-nowrap sm:text-sm">
                  <span className="sm:hidden">{feature.descMobile}</span>
                  <span className="hidden sm:inline">{feature.desc}</span>
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA sous la grille (premium, sans bounce) */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3">
          <Link
            href="/#galerie"
            className="inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/50 bg-white/60 px-7 py-3 text-xs font-semibold text-[#7b4256] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_24px_rgba(176,51,116,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCE7F3]"
          >
            Voir nos réalisations
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          <p className="text-[11px] text-[#7b4256]">
            Photos réelles — balayages, soins & colorations.
          </p>
        </div>
      </div>
    </section>
  )
}
