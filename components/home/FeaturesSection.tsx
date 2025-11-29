import { Scissors, Palette, Sparkles, Users } from "lucide-react"

const features = [
  {
    icon: Scissors,
    title: "Expertise",
    desc: "Coiffeurs professionnels expérimentés",
  },
  {
    icon: Palette,
    title: "Créativité",
    desc: "Techniques modernes et tendances",
  },
  {
    icon: Sparkles,
    title: "Qualité",
    desc: "Produits haut de gamme sélectionnés",
  },
  {
    icon: Users,
    title: "Accueil",
    desc: "Service chaleureux et personnalisé",
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative bg-gradient-to-b from-white to-[#ffe0f0]/40 py-20"
      aria-labelledby="features-title"
    >
      {/* halo doux */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-1/4 top-10 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-40 w-40 rounded-full bg-purple-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="features-title"
          className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Pourquoi choisir{" "}
          <span className="bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
            RR Coiffure
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon

            return (
              <div
                key={i}
                className="group flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1"
              >
                {/* Icône premium */}
                <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#ff9fc2] to-[#e05b95] shadow-lg ring-1 ring-pink-200/50 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-10 w-10 text-white drop-shadow" />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-white/10 blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
                </div>

                <h3 className="mb-1 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="max-w-[14rem] text-sm text-slate-600">
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
