"use client"

import Link from "next/link"
import { ArrowDown, Clock, Star, Scissors, Palette } from "lucide-react"

const features = [
  {
    icon: Scissors,
    title: "Balayages lumineux",
    desc: "Couleur lumineuse, techniques modernes, fibre préservée.",
  },
  {
    icon: Palette,
    title: "Diagnostic offert",
    desc: "Analyse personnalisée et plan d’entretien sur mesure.",
  },
  {
    icon: Clock,
    title: "Réponse rapide",
    desc: "Booking en ligne, réponse en moins de 2h, garantie.",
  },
  {
    icon: Star,
    title: "4.9 / 5 Avis clients",
    desc: "Clientes fidèles, avis positifs sur nos soins et couleurs.",
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8]"
    >
      {/* Fond premium */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <div className="mb-12 space-y-2 text-center">
          <h2
            id="features-title"
            className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2b1019] whitespace-nowrap"
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

        {/* Grille fluide (plus léger qu’un bloc cadré) */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon

            return (
              <div
                key={i}
                className="group flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1"
              >
                {/* Icône premium : halo + dégradé doux */}
                <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#F9A8D4] via-[#F472B6] to-[#EC4899] shadow-[0_10px_25px_rgba(176,51,116,0.25)] border border-white/40 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-white drop-shadow-md" />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-white/20 blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
                </div>

                <h3 className="mb-1 text-lg font-semibold tracking-tight text-[#2b1019]">
                  {feature.title}
                </h3>

                <p className="max-w-[16rem] text-sm text-[#7b4256] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA sous la grille */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="#galerie"
            className="inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/50 bg-[#FDF2F8]/80 px-6 py-2.5 text-xs font-semibold text-[#7b4256] shadow-sm hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 motion-safe:animate-bounce motion-reduce:animate-none"
          >
            Voir nos réalisations
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
