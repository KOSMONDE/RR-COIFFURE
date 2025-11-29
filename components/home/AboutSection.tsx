import Image from "next/image"

export default function AboutSection() {
  return (
    <section
      id="apropos"
      aria-labelledby="about-title"
      className="relative bg-gradient-to-b from-white to-[#ffe7f2]/40 py-16 sm:py-20"
    >
      {/* halos décoratifs */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-[-3rem] top-0 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute right-[-2rem] bottom-0 h-40 w-40 rounded-full bg-purple-200/30 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        {/* Col texte principal */}
        <div className="max-w-xl space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff7fb] px-3 py-1 text-xs font-medium text-[#ec4899] ring-1 ring-pink-100/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ec4899]" />
            <span>À propos</span>
          </div>

          <h2
            id="about-title"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            À propos de{" "}
            <span className="bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
              RR Coiffure
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            RR COIFFURE, c’est un salon premium à Lausanne dédié aux coupes
            modernes, aux colorations sur mesure et aux soins profonds. Notre
            équipe vous accompagne de la consultation jusqu’aux finitions pour
            révéler la meilleure version de vous-même.
          </p>

          <p className="text-sm sm:text-base text-slate-600">
            Chaque rendez-vous est pensé comme une expérience complète&nbsp;:
            diagnostic personnalisé, conseils adaptés à votre style de vie et
            sélection de produits professionnels haut de gamme.
          </p>

          {/* Points clés */}
          <dl className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-slate-900">Notre approche</dt>
              <dd className="text-xs text-slate-500 mt-1">
                Écoute, expertise et transparence sur les techniques et les résultats.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Notre priorité</dt>
              <dd className="text-xs text-slate-500 mt-1">
                Préserver la santé de vos cheveux tout en travaillant le style.
              </dd>
            </div>
          </dl>
        </div>

        {/* Col visuel / carte info */}
        <aside className="w-full max-w-sm self-stretch rounded-3xl bg-white/90 p-5 shadow-[0_18px_50px_rgba(148,27,99,0.15)] ring-1 ring-pink-100/80">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14">
              <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-br from-[#f472b6] via-[#ec4899] to-[#a855f7] opacity-70 blur-md" />
              <Image
                src="/images/galerie/rr-logo.jpg"
                alt="RR Coiffure"
                width={56}
                height={56}
                className="relative rounded-full border border-pink-200 bg-white shadow-md"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Salon premium
              </p>
              <p className="text-sm font-semibold text-slate-900">
                RR COIFFURE — Lausanne
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-600">
            <div className="rounded-2xl bg-[#fff1f8] px-3 py-2">
              <p className="text-[11px] font-medium text-slate-500">
                Spécialités
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                Balayages & colorations
              </p>
            </div>
            <div className="rounded-2xl bg-[#fdf2ff] px-3 py-2">
              <p className="text-[11px] font-medium text-slate-500">
                Ambiance
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                Chaleureuse & élégante
              </p>
            </div>
          </div>

          <p className="mt-4 text-[11px] text-slate-500">
            Première visite&nbsp;? Parlez-nous de vos habitudes et envies&nbsp;:
            nous ajustons chaque prestation à votre quotidien.
          </p>
        </aside>
      </div>
    </section>
  )
}
