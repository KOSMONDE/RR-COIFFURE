import type { Metadata } from "next"
import Link from "next/link"
import { Info } from "lucide-react"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"
import { PriceRow } from "@/components/price-row"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Tarifs — RR COIFFURE",
  description:
    "Découvrez nos tarifs transparents pour coupes, colorations, balayages, soins et tresses. Prix d'appel selon diagnostic personnalisé.",
}

const pricingCategories = [
  {
    title: "Coupes & Coiffage",
    description: "Coupes modernes et coiffages professionnels",
    items: [
      { name: "Coupe + Brushing", from: "À partir de 45 CHF" },
      { name: "Brushing", from: "À partir de 30 CHF" },
      { name: "Coupe homme", from: "À partir de 25 CHF" },
      { name: "Coupe enfant", from: "À partir de 20 CHF", note: "Jusqu'à 12 ans" },
    ],
  },
  {
    title: "Coloration",
    description: "Colorations sur mesure et techniques de décoloration",
    items: [
      { name: "Coloration racines", from: "À partir de 55 CHF" },
      { name: "Gloss/Toner", from: "À partir de 35 CHF" },
      { name: "Décoloration", from: "Sur devis", note: "Selon longueur et état des cheveux" },
    ],
  },
  {
    title: "Mèches & Balayage",
    description: "Techniques de mèches et balayages naturels",
    items: [
      { name: "Balayage partiel", from: "À partir de 80 CHF" },
      { name: "Balayage complet", from: "À partir de 120 CHF" },
      { name: "Mèches papier", from: "À partir de 95 CHF" },
    ],
  },
  {
    title: "Soins & Spa",
    description: "Soins profonds et traitements capillaires",
    items: [
      { name: "Soin profond", from: "À partir de 25 CHF" },
      { name: "Botox capillaire", from: "À partir de 90 CHF", isNew: true },
    ],
  },
  {
    title: "Tresses & Extensions",
    description: "Tresses professionnelles et pose d'extensions",
    items: [
      { name: "Tresses collées", from: "À partir de 60 CHF" },
      { name: "Box braids", from: "À partir de 140 CHF", note: "Selon longueur désirée" },
      { name: "Pose extensions", from: "Sur devis", note: "Consultation gratuite" },
    ],
  },
]

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")

const pricingSections = pricingCategories.map((category) => ({
  ...category,
  id: slugify(category.title),
}))

export default function TarifsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        {/* HERO */}
        <section
          id="tarifs"
          className="relative overflow-hidden bg-gradient-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8] py-16 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
            <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0526e] ring-1 ring-[#F9A8D4]/60">
                Tarifs
              </p>

              <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#2b1019] md:text-5xl">
                Nos <span className="text-[#EC4899]">tarifs</span>
              </h1>

              <p className="text-[12px] text-[#7b4256] whitespace-nowrap sm:text-base sm:whitespace-normal">
                Prix clairs, diagnostic personnalisé.
              </p>
            </div>
          </div>
        </section>

        {/* LISTE */}
        <section className="relative bg-[#FDF2F8] py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
            <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#F9A8D4]/18 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#EC4899]/12 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl space-y-8 px-6 md:px-10">
            {/* Notice */}
            <div className="rounded-3xl border border-[#F9A8D4]/60 bg-white/80 px-5 py-4 text-[#7b4256] shadow-[0_14px_32px_rgba(236,72,153,0.12)]">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FDE7F3] text-[#EC4899]">
                  <Info className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-[#2b1019]">Tarifs indicatifs</p>
                  <p className="text-[#7b4256]">
                    Un devis précis vous est communiqué après diagnostic personnalisé de vos cheveux.
                  </p>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {pricingSections.map((category) => (
                <div
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-28 rounded-3xl border border-[#F9A8D4]/40 bg-white/80 p-6 shadow-[0_18px_40px_rgba(236,72,153,0.12)]"
                >
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-[#2b1019]">{category.title}</h2>
                    <p className="text-sm text-[#a0526e]">{category.description}</p>
                  </div>

                  <div className="mt-4">
                    {category.items.map((item, index) => (
                      <PriceRow key={index} {...item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-16 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8]" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
            <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl px-6 text-center text-[#2b1019] md:px-10">
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">Prête à réserver ?</h2>

            <p className="mt-3 text-[12px] text-[#7b4256] whitespace-nowrap sm:text-base sm:whitespace-normal">
              Rendez-vous &amp; diagnostic gratuit.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-6 rounded-full bg-[#EC4899] px-7 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFE5F4] active:translate-y-0"
            >
              <Link href="https://www.instagram.com/rr.coiffure/" target="_blank" rel="noopener noreferrer">
                Prendre rendez-vous
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
