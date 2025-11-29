import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Star, Scissors } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#ffe6f5] via-[#ffe8fb] to-[#fdf7ff] py-16 sm:py-24"
      aria-labelledby="hero-title"
    >
      {/* Fond luxe */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.9)_0,transparent_55%),radial-gradient(circle_at_100%_100%,rgba(244,114,182,0.16)_0,transparent_55%)]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        {/* Col texte */}
        <div className="max-w-xl space-y-7">
          {/* Badge premium */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#ec4899] shadow-sm ring-1 ring-pink-100/80">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>SALON PREMIUM À LAUSANNE</span>
          </div>

          {/* Titre principal */}
          <div className="space-y-3">
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
            >
              Transformez
              <br />
              votre{" "}
              <span className="bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
                beauté
              </span>
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              Découvrez un univers de luxe et de créativité. Nos experts maîtrisent les dernières
              techniques de coupe, coloration et balayage pour sublimer vos cheveux, en douceur.
            </p>
          </div>

          {/* Points de réassurance */}
          <dl className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fee2f2] text-[#ec4899]">
                <Star className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <div>
                <dt className="font-medium">Conseils personnalisés</dt>
                <dd className="text-xs text-slate-500">
                  Diagnostic beauté avant chaque prestation.
                </dd>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fee2f2] text-[#ec4899]">
                <Scissors className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <div>
                <dt className="font-medium">Techniques modernes</dt>
                <dd className="text-xs text-slate-500">
                  Balayages, colorations et coupes tendance.
                </dd>
              </div>
            </div>
          </dl>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-[#f472b6] to-[#ec4899] px-7 text-sm font-semibold shadow-lg hover:from-[#ec4899] hover:to-[#f472b6]"
            >
              <Link href="https://www.snailscreation.com/book-online">
                Réserver maintenant
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-[#f472b6]/60 bg-white/80 px-7 text-sm font-semibold text-[#ec4899] shadow-sm hover:bg-[#ffe6f5] hover:border-[#ec4899]"
            >
              <Link href="#services">Découvrir nos services</Link>
            </Button>

            <p className="w-full text-xs text-slate-500 sm:w-auto">
              Temps moyen en salon : <span className="font-medium">60–90 min</span>
            </p>
          </div>
        </div>

        {/* Col visuel premium */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Halo */}
          <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-[#f9a8d4]/40 blur-3xl sm:h-80 sm:w-80" />

          {/* Cercle principal */}
          <div className="relative h-60 w-60 rounded-full border border-[#f9a8d4]/80 bg-gradient-to-br from-white/90 via-[#ffe4f5]/85 to-white/95 shadow-[0_24px_80px_rgba(236,72,153,0.35)] sm:h-72 sm:w-72">
            <div className="absolute inset-[12%] rounded-full border border-white/70" />
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-2">
              <Image
                src="/images/galerie/rr-logo.jpg"
                alt="RR Coiffure"
                width={100}
                height={100}
                className="rounded-full border border-pink-200 bg-white shadow-md"
              />
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                SALON DE COIFFURE
              </span>
            </div>

            {/* Pastilles flottantes */}
            <div className="pointer-events-none absolute -left-3 top-8 hidden rounded-2xl bg-white/90 px-3 py-2 text-[11px] font-medium text-slate-700 shadow-md ring-1 ring-pink-100 sm:flex">
              + de 10 ans d&apos;expertise
            </div>
            <div className="pointer-events-none absolute -right-4 bottom-8 hidden rounded-2xl bg-white/90 px-3 py-2 text-[11px] font-medium text-slate-700 shadow-md ring-1 ring-pink-100 sm:flex">
              Colorations sur mesure
            </div>
          </div>
        </div>
      </div>

      {/* Indication scroll sans onClick (pas d’event handler) */}
      <div className="mt-10 flex justify-center">
        <a
          href="#services"
          className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-slate-500 shadow-sm ring-1 ring-pink-100 hover:bg-white"
        >
          <span>Faire défiler pour voir les services</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
