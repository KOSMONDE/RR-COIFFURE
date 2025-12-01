import Image from "next/image"

export default function AboutSection() {
  return (
    <section
      id="apropos"
      aria-labelledby="about-title"
      className="relative py-16 sm:py-20"
    >
      {/* Décors halos */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-[-3rem] top-0 h-40 w-40 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
        <div className="absolute right-[-2rem] bottom-0 h-40 w-40 rounded-full bg-[#EC4899]/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* NIVEAU 1 : TEXTE + PHOTO */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* Colonne gauche */}
          <div className="flex h-full">
            <div className="flex h-full flex-col justify-between gap-6 rounded-[2rem] bg-white/92 px-6 py-7 sm:px-8 sm:py-8 shadow-[0_18px_60px_rgba(176,51,116,0.18)] border border-[#F9A8D4]/70">
              {/* Badge + titre */}
              <header className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-medium text-[#b05a7b] border border-[#F9A8D4]/80 uppercase tracking-[0.22em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899]" />
                  <span>À propos</span>
                </div>

                <h2
                  id="about-title"
                  className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2b1019]"
                >
                  À propos de{" "}
                  <span className="bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent">
                    RR Coiffure
                  </span>
                </h2>
              </header>

              {/* Ligne logo + nom salon */}
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14">
                  <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-br from-[#F9A8D4] via-[#F472B6] to-[#EC4899] opacity-70 blur-md" />
                  <Image
                    src="/images/galerie/rr-logo.jpg"
                    alt="Logo RR Coiffure"
                    width={56}
                    height={56}
                    className="relative rounded-full border border-[#F9A8D4] bg-white shadow-md object-cover"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#a0526e]">
                    Salon premium
                  </p>
                  <p className="text-sm font-semibold text-[#2b1019]">
                    RR COIFFURE — Genève
                  </p>
                </div>
              </div>

              {/* Texte descriptif */}
              <div className="space-y-3 text-sm sm:text-base text-[#7b4256]">
                <p>
                  RR COIFFURE, c’est un salon premium à Genève dédié aux coupes modernes,
                  aux colorations sur mesure et aux soins profonds. À chaque rendez-vous,
                  nous prenons le temps de comprendre vos envies pour révéler la meilleure
                  version de vous-même.
                </p>
                <p>
                  Chaque visite est pensée comme une expérience complète : diagnostic
                  personnalisé, conseils adaptés à votre style de vie et produits
                  professionnels haut de gamme pour respecter la santé de vos cheveux.
                </p>
              </div>

              {/* Spécialités / ambiance */}
              <div className="grid grid-cols-2 gap-3 text-xs text-[#7b4256]">
                <div className="rounded-2xl bg-[#FDE7F3]/70 px-3 py-2 border border-[#F9A8D4]/50">
                  <p className="text-[11px] font-medium text-[#a0526e]">Spécialités</p>
                  <p className="mt-1 font-semibold text-[#2b1019]">
                    Balayages & colorations
                  </p>
                </div>
                <div className="rounded-2xl bg-[#FDF2F8]/80 px-3 py-2 border border-[#F9A8D4]/50">
                  <p className="text-[11px] font-medium text-[#a0526e]">Ambiance</p>
                  <p className="mt-1 font-semibold text-[#2b1019]">
                    Chaleureuse & élégante
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-[#8b4b60]">
                Première visite ? Parlez-nous de vos habitudes et de vos envies :
                nous adaptons chaque prestation à votre quotidien pour un résultat
                qui vous ressemble vraiment.
              </p>
            </div>
          </div>

          {/* Colonne droite : photo */}
          <aside className="flex h-full">
            <div className="relative h-72 w-full overflow-hidden rounded-[2rem] bg-[#FDF2F8] shadow-[0_18px_60px_rgba(176,51,116,0.22)] border border-[#F9A8D4]/80 sm:h-80">
              <Image
                src="/images/galerie/rr-coiffure-service.jpg"
                alt="Coiffeuse en prestation — RR Coiffure"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
            </div>
          </aside>
        </div>

        {/* NIVEAU 2 : 3 BLOCS ALIGNÉS */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <div className="rounded-3xl bg-white/90 p-5 shadow-[0_10px_30px_rgba(176,51,116,0.18)] border border-[#F9A8D4]/60 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-[#2b1019]">Notre approche</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#7b4256]">
              Écoute, expertise et transparence sur les techniques, les produits
              et les résultats pour éviter les mauvaises surprises.
            </p>
          </div>

          <div className="rounded-3xl bg-white/90 p-5 shadow-[0_10px_30px_rgba(176,51,116,0.18)] border border-[#F9A8D4]/60 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-[#2b1019]">Notre priorité</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#7b4256]">
              Préserver la santé de vos cheveux tout en travaillant le style,
              la brillance et la tenue de votre coiffure.
            </p>
          </div>

          <div className="rounded-3xl bg-white/90 p-5 shadow-[0_10px_30px_rgba(176,51,116,0.18)] border border-[#F9A8D4]/60 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-[#2b1019]">Notre expertise</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#7b4256]">
              Plus de 10 ans d’expérience en techniques modernes et colorations
              sur mesure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
