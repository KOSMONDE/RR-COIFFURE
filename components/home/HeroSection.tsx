import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Star, Scissors } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden py-16 sm:py-24"
    >
      {/* Fond premium doux */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,226,244,0.8),transparent_70%),radial-gradient(circle_at_80%_100%,rgba(236,72,153,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light bg-[url('/textures/noise.png')]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
          
          {/* TEXTE */}
          <div className="space-y-8 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-[11px] font-medium text-[#EC4899] shadow-sm border border-pink-100 uppercase tracking-[0.20em]">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Salon premium à Genève
            </div>

            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#2b1019]"
            >
              Transformez votre{" "}
              <span className="bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent">
                beauté
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#7b4256] leading-relaxed">
              RR Coiffure vous accueille dans un univers de douceur et d’expertise.
              Coupes, balayages, colorations : nous sublimons vos cheveux tout en
              respectant leur nature.
            </p>

            {/* Points clés */}
            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              <div className="flex items-start gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FDE7F3] text-[#EC4899]">
                  <Star className="h-3.5 w-3.5" />
                </div>
                <div>
                  <dt className="text-sm font-semibold text-[#2b1019]">Conseils personnalisés</dt>
                  <dd className="text-xs text-[#8b4b60]">Diagnostic complet avant chaque prestation.</dd>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FDE7F3] text-[#EC4899]">
                  <Scissors className="h-3.5 w-3.5" />
                </div>
                <div>
                  <dt className="text-sm font-semibold text-[#2b1019]">Techniques modernes</dt>
                  <dd className="text-xs text-[#8b4b60]">Balayages, colorations et coupes sur-mesure.</dd>
                </div>
              </div>
            </dl>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-[#F472B6] to-[#EC4899] px-8 text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <Link href="/#reservation">Réserver maintenant</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-[#F9A8D4] bg-white/90 px-8 text-sm font-semibold text-[#EC4899] shadow-sm hover:bg-[#FDE7F3] hover:border-[#EC4899]"
              >
                <Link href="#services">Nos services</Link>
              </Button>
            </div>
          </div>

          {/* VISUEL */}
          <div className="relative flex justify-center">
            {/* Halo */}
            <div className="absolute h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-[#f9a8d4]/40 blur-3xl" />

            {/* Logo */}
            <div className="relative h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-gradient-to-br from-white/95 via-[#FFEAF5]/90 to-white/95 shadow-[0_18px_60px_rgba(176,51,116,0.32)] border border-pink-100/60 flex flex-col items-center justify-center gap-3">
              <Image
                src="/images/galerie/rr-logo.jpg"
                alt="RR Coiffure"
                width={130}
                height={130}
                className="rounded-full border border-pink-200 bg-white shadow-md object-cover"
              />
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#8b4b60]">
                Salon de coiffure
              </span>
            </div>
          </div>
        </div>

        {/* Indication scroll */}
        <div className="mt-12 flex justify-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[11px] font-medium text-[#7b4256] shadow-sm border border-pink-100 hover:bg-white"
          >
            Faire défiler
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
