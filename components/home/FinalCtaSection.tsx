import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FinalCtaSection() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden bg-gradient-to-br from-[#ffd6e6] via-[#ff9fc2] to-[#e05b95] py-20"
    >
      {/* Décor haut gauche */}
      <div className="pointer-events-none absolute left-[-3rem] top-[-3rem] h-40 w-40 rounded-full bg-white/15 blur-3xl" />
      {/* Décor bas droite */}
      <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 opacity-20">
        <svg
          viewBox="0 0 200 200"
          className="h-full w-full"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="100" cy="100" r="80" />
        </svg>
      </div>

      <div className="container relative mx-auto max-w-3xl px-4 text-center">
        {/* Badge confiance */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white/90 ring-1 ring-white/30">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          <span>Disponibilités mises à jour en temps réel</span>
        </div>

        <h2
          id="final-cta-title"
          className="mb-3 text-3xl font-bold text-white md:text-4xl"
        >
          Prêt pour une nouvelle coiffure ?
        </h2>

        <p className="mx-auto mb-6 max-w-2xl text-base text-white/90 md:text-lg">
          Réservez votre créneau en quelques clics et profitez d’une expérience
          sur mesure dans un salon premium au cœur de Lausanne.
        </p>

        {/* CTA principal + secondaire */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-8 text-sm font-semibold text-[#e05b95] shadow-lg hover:bg-[#ffe6f5]"
          >
            <Link href="https://www.snailscreation.com/book-online">
              Réserver maintenant
            </Link>
          </Button>

          <Link
            href="#contact"
            className="text-xs font-medium text-white/90 underline underline-offset-4 hover:text-white"
          >
            Préférer un contact par téléphone
          </Link>
        </div>

        {/* Réassurance rapide */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[11px] text-white/80">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Confirmation immédiate
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Aucun paiement en ligne requis
          </span>
        </div>
      </div>
    </section>
  )
}
