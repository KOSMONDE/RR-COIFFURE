import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FinalCtaSection() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative py-20 sm:py-24"
    >
      {/* Halos doux (cohérents avec le reste du site) */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-65">
        <div className="absolute left-10 top-0 h-40 w-40 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-40 w-40 rounded-full bg-[#EC4899]/35 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        {/* Badge final */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-medium text-[#b05a7b] border border-[#F9A8D4]/70 uppercase tracking-[0.18em]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899]" />
          <span>Disponibilités mises à jour en temps réel</span>
        </div>

        {/* Titre */}
        <h2
          id="final-cta-title"
          className="mb-3 text-3xl md:text-4xl font-extrabold tracking-tight text-[#2b1019]"
        >
          Transformez votre style dès aujourd’hui
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
            className="rounded-full bg-gradient-to-r from-[#F472B6] to-[#EC4899] px-8 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <Link href="/#reservation">
              Réserver maintenant
            </Link>
          </Button>

          <Link
            href="#contact"
            className="text-xs font-medium text-[#EC4899] underline underline-offset-4 hover:text-[#BE185D] transition-colors"
          >
            Parler directement avec une coiffeuse
          </Link>
        </div>

        {/* Réassurance */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] text-[#7b4256]">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#FDE7F3] px-3 py-1 border border-[#F9A8D4]/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Confirmation immédiate
          </span>

          <span className="inline-flex items-center gap-1 rounded-full bg-[#FDF2F8] px-3 py-1 border border-[#F9A8D4]/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Aucun paiement requis
          </span>
        </div>
      </div>
    </section>
  )
}
