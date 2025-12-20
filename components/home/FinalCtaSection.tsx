import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FinalCtaSection() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8]"
    >
      {/* Fond premium */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#F9A8D4]/40 bg-white/70 px-6 py-10 text-center shadow-[0_20px_60px_rgba(236,72,153,0.15)] backdrop-blur sm:px-10">
        {/* Badge final */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-semibold text-[#7b4256] border border-[#F9A8D4]/60 uppercase tracking-[0.18em]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899]" />
          <span>Disponibilités en temps réel</span>
        </div>

        {/* Titre */}
        <h2
          id="final-cta-title"
          className="mb-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[#2b1019]"
        >
          Transformez votre <span className="text-[#EC4899]">style</span> dès aujourd’hui
        </h2>

        {/* Texte */}
        <p className="mx-auto mb-6 max-w-2xl text-sm md:text-base text-[#7b4256] leading-relaxed">
          Profitez d’un rendez-vous rapide et d’un diagnostic personnalisé
          pour une coiffure sur mesure, réalisée dans notre salon premium
          au cœur de Genève.
        </p>

        {/* CTA principal + lien secondaire */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#EC4899] px-8 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6]"
          >
            <Link href="/#reservation">
              Réserver maintenant
            </Link>
          </Button>

          <Link
            href="#contact"
            className="text-xs font-semibold text-[#7b4256] underline underline-offset-4 hover:text-[#2b1019] transition-colors"
          >
            Parler directement avec une coiffeuse
          </Link>
        </div>

        {/* Réassurance */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] text-[#7b4256]">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#FDE7F3]/80 px-3 py-1 border border-[#F9A8D4]/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899]" />
            Confirmation immédiate
          </span>

          <span className="inline-flex items-center gap-1 rounded-full bg-[#FDE7F3]/80 px-3 py-1 border border-[#F9A8D4]/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899]" />
            Aucun paiement requis
          </span>
        </div>
        </div>
      </div>
    </section>
  )
}
