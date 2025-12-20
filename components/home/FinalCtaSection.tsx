import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8] pt-16 pb-10 sm:pt-24 sm:pb-14"
    >
      {/* Fond premium */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#F9A8D4]/40 bg-white/70 px-6 py-10 text-center shadow-[0_20px_60px_rgba(236,72,153,0.15)] backdrop-blur sm:px-10 sm:py-12">
            {/* Petit glow interne (premium, discret) */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-[#EC4899]/15 blur-3xl" />

            {/* Badge final */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7b4256]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899]" />
              <span>Disponibilités en temps réel</span>
            </div>

            {/* Titre */}
            <h2
              id="final-cta-title"
              className="mb-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-[#2b1019] md:text-4xl"
            >
              Transformez votre <span className="text-[#EC4899]">style</span> dès aujourd’hui
            </h2>

            {/* Texte */}
            <p className="mx-auto mb-7 max-w-2xl text-sm leading-relaxed text-[#7b4256] md:text-base">
              Profitez d’un rendez-vous rapide et d’un diagnostic personnalisé pour une coiffure sur
              mesure, réalisée dans notre salon premium au cœur de Genève.
            </p>

            {/* CTA principal + secondaire (plus aéré) */}
            <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
              <Button
                asChild
                size="lg"
                className="w-full rounded-full bg-[#EC4899] px-8 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFE5F4] active:translate-y-0 sm:w-auto"
              >
                <Link href="https://www.snailscreation.com/book-online" target="_blank" rel="noopener noreferrer">
                  Réserver maintenant
                </Link>
              </Button>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#F9A8D4]/70 bg-white/70 px-6 py-2.5 text-xs font-semibold text-[#7b4256] shadow-sm transition-colors hover:bg-white hover:text-[#2b1019] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFE5F4]"
              >
                Parler directement avec une coiffeuse
              </Link>
            </div>

            {/* Réassurance (chips espacées) */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] text-[#7b4256]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-[#FDE7F3]/80 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899]" />
                Confirmation immédiate
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-[#FDE7F3]/80 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899]" />
                Aucun paiement requis
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-[#FDE7F3]/80 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899]" />
                Diagnostic personnalisé
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
