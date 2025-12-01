"use client"

import { Scissors, Palette, Sparkles, Users } from "lucide-react"

const features = [
  { icon: Scissors, title: "Expertise", desc: "Coiffeurs professionnels expérimentés." },
  { icon: Palette, title: "Créativité", desc: "Techniques modernes et tendances." },
  { icon: Sparkles, title: "Qualité", desc: "Produits haut de gamme sélectionnés." },
  { icon: Users, title: "Accueil", desc: "Service chaleureux et personnalisé." },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative py-20 sm:py-24"
    >
      {/* Halos premium */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-[12%] top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
        <div className="absolute right-[12%] bottom-10 h-56 w-56 rounded-full bg-[#EC4899]/35 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <h2
          id="features-title"
          className="mb-12 text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2b1019]"
        >
          Pourquoi choisir{" "}
          <span className="bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent">
            RR Coiffure
          </span>
        </h2>

        {/* Grille fluide (plus léger qu’un bloc cadré) */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon

            return (
              <div
                key={i}
                className="group flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1"
              >
                {/* Icône premium : halo + dégradé doux */}
                <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#F9A8D4] via-[#F472B6] to-[#EC4899] shadow-[0_10px_25px_rgba(176,51,116,0.25)] border border-white/40 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-9 w-9 text-white drop-shadow-md" />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-white/20 blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
                </div>

                <h3 className="mb-1 text-lg font-semibold text-[#2b1019]">
                  {feature.title}
                </h3>

                <p className="max-w-[14rem] text-sm text-[#7b4256] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
